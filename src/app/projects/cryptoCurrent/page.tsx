import { Metadata } from "next";
import CryptoTable from "@/app/_sections/crypto/cryptoTable";
import CryptoMarketData from "@/app/_sections/crypto/cryptoMarketData";
import { crypto, market } from "@/models/crypto";

export const metadata: Metadata = {
  title: "CRYPTOCURRENT",
};

export const revalidate = 0;

async function getData() {
  let marketData: market | undefined;
  let cryptoList: crypto[] | undefined;
  let isError: boolean = false;

  await Promise.allSettled([
    //fecth global market data
    fetch(process.env.APP_URL + "/api/crypto/marketGlobal").then((response) =>
      response.json()
    ),

    //fetch list of cryptocurrencies
    fetch(process.env.APP_URL + "/api/crypto/list").then((response) =>
      response.json()
    ),
  ])
    .then(async ([marketDataRaw, cryptoListRaw]) => {
      marketDataRaw.status === "fulfilled" &&
        (marketData = marketDataRaw.value);
      cryptoListRaw.status === "fulfilled" &&
        (cryptoList = cryptoListRaw.value);
    })
    .catch((err) => {
      isError = true;
    });

  return { marketData, cryptoList, isError };
}

export default async function Page() {
  const { marketData, cryptoList, isError } = await getData();

  return (
    <>
      {isError ? (
        <h1>Something went wrong</h1>
      ) : (
        <>
          {marketData === undefined && (
            <h5 className="display-error">Failed to retrieve market data</h5>
          )}
          {cryptoList === undefined && (
            <h5 className="display-error">
              Failed to retrieve list of cryptocurrencies
            </h5>
          )}
          <section id="market-summary">
            {marketData && (
              <>
                <CryptoMarketData marketData={marketData} />
              </>
            )}
          </section>

          <section id="crypto-list">
            {cryptoList && (
              <>
                {Array.isArray(cryptoList) ? (
                  <CryptoTable cryptoList={cryptoList} />
                ) : (
                  <h5 className="display-error">
                    You have exceeded the rate limit
                  </h5>
                )}
              </>
            )}
          </section>
        </>
      )}
    </>
  );
}

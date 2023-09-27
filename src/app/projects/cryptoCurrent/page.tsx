import { Metadata } from "next";
import CryptoTable from "@/app/_sections/crypto/cryptoTable";
import CryptoMarketData from "@/app/_sections/crypto/cryptoMarketData";
import { crypto, market } from "@/models/crypto";

export const metadata: Metadata = {
  title: "CRYPTOCURRENT",
};

export const revalidate = 60;

async function getData() {
  let marketData: market | undefined;
  let cryptoList: crypto[] | undefined;
  let isError: boolean = false;

  try {
    const responseMarket = await fetch(
      process.env.APP_URL + "/api/crypto/marketGlobal"
    );
    const responseCryptoList = await fetch(
      process.env.APP_URL + "/api/crypto/list"
    );

    if (responseCryptoList.ok && responseMarket.ok) {
      marketData = await responseMarket.json();
      cryptoList = await responseCryptoList.json();
    } else {
      isError = true;
    }
  } catch (error) {
    isError = true;
  } finally {
    return { marketData, cryptoList, isError };
  }
}

export default async function Page() {
  const { marketData, cryptoList, isError } = await getData();

  return (
    <>
      {isError && <h1>Something went wrong</h1>}
      <section id="market-summary">
        {marketData && !isError && (
          <>
            <CryptoMarketData marketData={marketData} />
          </>
        )}
      </section>

      <section id="crypto-list">
        {cryptoList && !isError && (
          <>
            {Array.isArray(cryptoList) ? (
              <CryptoTable cryptoList={cryptoList} />
            ) : (
              <h5>
                Rate limit has already been exceeded. Please try again for a few
                minutes
              </h5>
            )}
          </>
        )}
      </section>
    </>
  );
}

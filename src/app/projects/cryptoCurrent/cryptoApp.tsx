"use client";

import Spinner from "@/app/_components/spinner";
import { crypto, market } from "@/models/crypto";
import { useEffect, useState } from "react";
import CryptoTable from "@/app/_sections/crypto/cryptoTable";
import CryptoMarketData from "@/app/_sections/crypto/cryptoMarketData";

export default function CyptoApp() {
  const [marketData, setMarketData] = useState<market | null>(null);
  const [cryptoList, setCryptoList] = useState<crypto[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getMarketData();
  }, []);

  async function getMarketData() {
    try {
      setIsLoading(true);
      setMarketData(null);
      setCryptoList([]);
      setIsError(false);

      const responseMarket = await fetch("/api/crypto/marketGlobal");
      const responseCryptoList = await fetch("/api/crypto/list");

      if (responseMarket.ok && responseCryptoList.ok) {
        const resultMarket: market = await responseMarket.json();
        const resultCryptoList: crypto[] = await responseCryptoList.json();

        setMarketData(resultMarket);
        setCryptoList(resultCryptoList);
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <h1>Something went wrong</h1>}
      <section id="market-summary">
        {marketData && !isError && (
          <>
            <CryptoMarketData marketData={marketData} />
          </>
        )}
      </section>

      <section id="crypto-list">
        {cryptoList && marketData && !isError && (
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

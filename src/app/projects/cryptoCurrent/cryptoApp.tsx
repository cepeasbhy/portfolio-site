"use client";

import DisplayTime from "@/app/components/displayTime";
import Spinner from "@/app/components/spinner";
import { crypto, market } from "@/models/crypto";
import { useEffect, useState } from "react";

export default function CyptoApp() {
  const [marketData, setMarketData] = useState<market | null>(null);
  const [cryptoList, setCryptoList] = useState<crypto[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMarketData();
  }, []);

  async function getMarketData() {
    try {
      setIsLoading(true);
      setMarketData(null);
      setCryptoList(null);

      const responseMarket = await fetch("/api/crypto/marketGlobal");
      const responseCryptoList = await fetch("/api/crypto/list");

      const resultMarket: market = await responseMarket.json();
      const resultCryptoList: crypto[] = await responseCryptoList.json();
      console.table(resultMarket);

      setMarketData(resultMarket);
      setCryptoList(resultCryptoList);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <section id="search">
        <form action="">
          <div className="form-item">
            <input type="text" />
            <button>SEARCH</button>
          </div>
        </form>
      </section>
      <section id="market-summary">
        {isLoading && <Spinner />}
        {marketData && (
          <>
            <div className="section-title">
              <h3>Cryptocurrency Market Summary</h3>
              <p className="display-time">
                Updated as of{" "}
                <DisplayTime epochTime={marketData.data.updated_at} />
              </p>
            </div>
            <div className="section-content">
              <div className="summary-group">
                <div className="summary-item">
                  <p className="item-data">
                    ₱ {marketData.data.total_market_cap.php.toLocaleString()}
                  </p>
                  <p className="item-label">Market Capitalization</p>
                </div>
                <div className="summary-item">
                  <p className="item-data">
                    ₱ {marketData.data.total_volume.php.toLocaleString()}
                  </p>
                  <p className="item-label">24h Trading Volume</p>
                </div>
              </div>
              <div className="summary-group">
                <div className="summary-item">
                  <p className="item-data">
                    {marketData.data.active_cryptocurrencies.toLocaleString()}
                  </p>
                  <p className="item-label">Total Active Coins</p>
                </div>
                <div className="summary-item">
                  <p className="item-data">{marketData.data.markets}</p>
                  <p className="item-label">Exchanges</p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      <section id="crypto-list">
        {cryptoList && marketData && (
          <>
            <div className="section-title">
              <h3>Top 100 Cryptocurrencies Ranked by Market Cap</h3>
            </div>
            <div className="section-content">
              <table>
                <thead>
                  <tr>
                    <th className="sticky-col first-col">#</th>
                    <th className="sticky-col second-col">Coin</th>
                    <th>Price</th>
                    <th>24h Volume </th>
                    <th>Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoList.map((data, index) => (
                    <tr key={index}>
                      <td className="sticky-col first-col">
                        {data.market_cap_rank}
                      </td>
                      <td className="sticky-col second-col">
                        <div className="crypto-identity">
                          <div className="idenity-item">
                            <img
                              className="crypto-img"
                              src={data.image}
                              alt=""
                            />
                          </div>
                          <div className="identity-item">
                            {data.name} <br />
                            <span className="symbol">
                              {data.symbol.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>₱ {data.current_price.toLocaleString()}</td>
                      <td>₱ {data.total_volume.toLocaleString()}</td>
                      <td>₱ {data.market_cap.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </>
  );
}

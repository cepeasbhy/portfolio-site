"use client";

import Spinner from "@/app/components/spinner";
import { market } from "@/models/crypto";
import { useEffect, useState } from "react";

export default function CyptoApp() {
  const [marketData, setMarketData] = useState<market | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMarketData();
  }, []);

  async function getMarketData() {
    try {
      setIsLoading(true);
      setMarketData(null);

      const response = await fetch("/api/crypto/marketGlobal");
      const result: market = await response.json();

      setMarketData(result);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <section id="market-summary">
        {isLoading && <Spinner />}
        {marketData && (
          <>
            <div className="section-title">
              <h3>Cryptocurrency Market Summary</h3>
            </div>
            <div className="section-content">
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
          </>
        )}
      </section>
    </>
  );
}

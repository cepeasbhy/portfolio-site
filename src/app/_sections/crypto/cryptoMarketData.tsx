import DisplayTime from "@/app/_components/displayTime";
import { market } from "@/models/crypto";

interface Props {
  marketData: market;
}

export default function CryptoMarketData({ marketData }: Props) {
  return (
    <>
      <div className="section-title">
        <h3>Cryptocurrency Market Summary</h3>
        <p className="display-time">
          Updated as of <DisplayTime epochTime={marketData.data.updated_at} />
        </p>
      </div>
      <div className="section-content d-flex">
        <div className="summary-group d-flex">
          <div className="summary-item d-flex">
            <p className="item-data">
              ₱ {marketData.data.total_market_cap.php.toLocaleString()}
            </p>
            <p className="item-label">Market Capitalization</p>
          </div>
          <div className="summary-item d-flex">
            <p className="item-data">
              ₱ {marketData.data.total_volume.php.toLocaleString()}
            </p>
            <p className="item-label">24h Trading Volume</p>
          </div>
        </div>
        <div className="summary-group d-flex">
          <div className="summary-item d-flex">
            <p className="item-data">
              {marketData.data.active_cryptocurrencies.toLocaleString()}
            </p>
            <p className="item-label">Total Active Coins</p>
          </div>
          <div className="summary-item d-flex">
            <p className="item-data">{marketData.data.markets}</p>
            <p className="item-label">Exchanges</p>
          </div>
        </div>
      </div>
    </>
  );
}

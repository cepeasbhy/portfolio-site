import { coin } from "@/models/crypto";

interface Props {
  params: { id: string };
}

export const revalidate = 0;

async function getData(id: string) {
  const response = await fetch(
    `${process.env.APP_URL}/api/crypto/coin?id=${id}`
  );
  const coinData: coin = await response.json();
  return coinData;
}

export default async function Page({ params: { id } }: Props) {
  const coinData = await getData(id);

  return (
    <>
      {coinData.id ? (
        <>
          <article className="d-flex">
            <section className="crypto-market-info">
              <div className="block">
                <div className="block-item crypto-identity d-flex">
                  <div className="identity-item">
                    <img src={coinData.image.large} alt="" />
                  </div>
                  <div className="identity-item">
                    <p className="coin-name">{coinData.name.toUpperCase()}</p>
                  </div>
                  <div className="identity-item">
                    <p className="rank">Rank: #{coinData.market_cap_rank}</p>
                  </div>
                </div>
                <div className="block-item">
                  <p className="coin-price">
                    ₱ {coinData.market_data.current_price.php.toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="block d-flex">
                <div className="block-item">
                  <div className="market-info-item d-flex">
                    <label className="item-label">Market Cap:</label>
                    <p className="item-data">
                      ₱ {coinData.market_data.market_cap.php.toLocaleString()}
                    </p>
                  </div>
                  <div className="market-info-item d-flex">
                    <label className="item-label">
                      Fully Diluted Valuation:
                    </label>
                    <p className="item-data">
                      ₱{" "}
                      {coinData.market_data.fully_diluted_valuation.php.toLocaleString()}
                    </p>
                  </div>
                  <div className="market-info-item d-flex">
                    <label className="item-label">Total Volume:</label>
                    <p className="item-data">
                      ₱ {coinData.market_data.total_volume.php.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="block-item">
                  <div className="market-info-item d-flex">
                    <label className="item-label">Max Supply:</label>
                    <p className="item-data">
                      {coinData.market_data.max_supply
                        ? coinData.market_data.max_supply.toLocaleString()
                        : "Ꝏ"}
                    </p>
                  </div>
                  <div className="market-info-item d-flex">
                    <label className="item-label">Total Supply:</label>
                    <p className="item-data">
                      {coinData.market_data.total_supply.toLocaleString()}
                    </p>
                  </div>
                  <div className="market-info-item d-flex">
                    <label className="item-label">Circulating Supply:</label>
                    <p className="item-data">
                      {coinData.market_data.circulating_supply.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section id="statistics">
              <div className="section-title">
                <h3>STATISTICS</h3>
              </div>
              <div className="section-content">
                <div className="market-info-item d-flex">
                  <label className="item-label">24h Low:</label>
                  <p className="item-data">
                    ₱ {coinData.market_data.low_24h.php.toLocaleString()}
                  </p>
                </div>
                <div className="market-info-item d-flex">
                  <label className="item-label">24h High:</label>
                  <p className="item-data">
                    ₱ {coinData.market_data.high_24h.php.toLocaleString()}
                  </p>
                </div>
                <div className="market-info-item d-flex">
                  <label className="item-label">All Time Low:</label>
                  <p className="item-data">
                    ₱ {coinData.market_data.atl.php.toLocaleString()}
                  </p>
                </div>
                <div className="market-info-item d-flex">
                  <label className="item-label">All Time High:</label>
                  <p className="item-data">
                    ₱ {coinData.market_data.ath.php.toLocaleString()}
                  </p>
                </div>
              </div>
            </section>
          </article>

          {coinData.description.en && (
            <section>
              <div className="section-title">
                <h3>What is {coinData.name}</h3>
              </div>
              <div className="section-content">
                <p
                  className="crypto-description"
                  dangerouslySetInnerHTML={{
                    __html: coinData.description.en,
                  }}
                ></p>
              </div>
            </section>
          )}
        </>
      ) : (
        <h2>Coin Does Not Exist</h2>
      )}
    </>
  );
}

import { crypto } from "@/models/crypto";
import Link from "next/link";

interface Props {
  cryptoList: crypto[];
}

export default function CryptoTable({ cryptoList }: Props) {
  return (
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
                <td className="sticky-col first-col">{data.market_cap_rank}</td>
                <td className="sticky-col second-col">
                  <div className="crypto-identity d-flex">
                    <div className="idenity-item">
                      <img className="crypto-img" src={data.image} alt="" />
                    </div>
                    <div className="identity-item">
                      <Link href={"cryptoCurrent/coins/" + data.id}>
                        {data.name}
                      </Link>{" "}
                      <br />
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
  );
}

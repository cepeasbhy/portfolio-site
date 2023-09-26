"use client";

import Link from "next/link";
import SearchBar from "./searchBar";

export default function Header() {
  return (
    <header>
      <div className="header-wrapper d-flex">
        <div className="header-item">
          <div className="header-title">
            <Link href={"/projects/cryptoCurrent"}>
              <h2>CRYPTOCURRENT </h2>
            </Link>
          </div>
          <div className="header-subtitle">
            <p>
              powered by:{" "}
              <a href="https://coingecko.com" target="_blank">
                CoinGecko API
              </a>
            </p>
          </div>
        </div>
        <div className="header-item">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

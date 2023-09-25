"use client";

export default function Header() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-item">
          <div className="header-title">
            <h2>CRYPTOCURRENT </h2>
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
          <form action="">
            <div className="form-item">
              <input type="text" />
              <button>SEARCH</button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}

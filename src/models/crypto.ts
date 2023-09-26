export interface market {
  data: {
    active_cryptocurrencies: number;
    markets: number;
    total_market_cap: {
      php: number;
    };
    total_volume: {
      php: number;
    };
    updated_at: number;
  };
}

export interface crypto {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  image: string;
}

export interface coin {
  id: string;
  market_cap_rank: number;
  symbol: string;
  name: string;
  description: { en: string };
  image: { large: string };
  watchlist_portfolio_users: number;
  market_data: {
    current_price: { php: number };
    market_cap: { php: number };
    fully_diluted_valuation: { php: number };
    total_volume: { php: number };
    high_24h: { php: number };
    low_24h: { php: number };
    ath: { php: number };
    atl: { php: number };
    total_supply: number;
    max_supply: number;
    circulating_supply: number;
    last_updated: string;
  };

  error: string;
}

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

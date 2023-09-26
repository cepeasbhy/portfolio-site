import { coin } from "@/models/crypto";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const coinId = searchParams.get("id");

  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );

  const coinData: coin = await response.json();

  return NextResponse.json(coinData);
}

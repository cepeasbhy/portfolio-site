import { crypto, market } from "@/models/crypto";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
    { cache: "no-store" }
  );
  const cryptoList: crypto = await response.json();

  return NextResponse.json(cryptoList);
}

import { market } from "@/models/crypto";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  response = await fetch("https://api.coingecko.com/api/v3/global");
  const marketData: market = await response.json();

  return NextResponse.json(marketData);
}

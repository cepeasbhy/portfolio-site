import { market } from "@/models/crypto";
import { NextResponse } from "next/server";

export const revalidate = 1;

export async function GET(request: Request, response: Response) {
  response = await fetch("https://api.coingecko.com/api/v3/global", {
    cache: "no-store",
  });
  const marketData: market = await response.json();

  return NextResponse.json(marketData);
}

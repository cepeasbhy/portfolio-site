import { market } from "@/models/crypto";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  response = await fetch("https://api.coingecko.com/api/v3/global", {
    cache: "no-store",
    next: { revalidate: 1 },
  });
  const marketData: market = await response.json();

  return NextResponse.json(marketData);
}

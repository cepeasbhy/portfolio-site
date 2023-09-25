import { WeatherData } from "@/models/weatherModel";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const cityName = searchParams.get("cityName");

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${process.env.WEATHER_API_KEY}&units=metric`,
    {
      cache: "no-store",
      next: { revalidate: 1 },
    }
  );

  const weatherData: WeatherData = await response.json();

  return NextResponse.json(weatherData);
}

import { Metadata } from "next";
import WeatherApp from "./weatherApp";

export const metadata: Metadata = {
  title: "WEATHER APP",
};

export default function Page() {
  return <WeatherApp />;
}

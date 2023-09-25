import { Metadata } from "next";
import "../../_styles/weather.css";
import WeatherApp from "./weatherApp";

export const metadata: Metadata = {
  title: "SKYMASTER",
};

export default function Page() {
  return <WeatherApp />;
}

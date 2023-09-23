import { Metadata } from "next";
import WeatherApp from "./weatherApp";

export const metadata: Metadata = {
  title: "SKYMASTER",
};

export default function Page() {
  return <WeatherApp />;
}

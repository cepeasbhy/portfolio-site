"use client";

import { FormEvent, useState } from "react";
import "./weather.css";
import { WeatherData } from "@/models/weatherModel";
import ForecastItem from "@/app/components/forecastItem";
import Spinner from "@/app/components/spinner";

export default function App() {
  const [forecastData, setForecastData] = useState<WeatherData[]>([]);
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchError, setIsSeacrhError] = useState(false);
  const [location, setLocation] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const cityName = form.get("city")?.toString().trim();

    try {
      setForecastData([]);
      setCurrentWeather(null);
      setIsLoading(true);
      setIsSeacrhError(false);

      const forecastResponse = await fetch(
        `/api/forecastWeather?cityName=${cityName}`
      );
      const currentWeatherResponse = await fetch(
        `/api/currentWeather?cityName=${cityName}`
      );

      const forecastData = await forecastResponse.json();
      const weatherData = await currentWeatherResponse.json();

      if (weatherData.cod != 200) {
        setIsSeacrhError(true);
      }
      setForecastData(forecastData.list);
      setCurrentWeather(weatherData);
      setLocation(cityName!);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div id="main-content">
      <section id="header-section">
        <div className="header-item">
          <h2>SKYMASTER</h2>
        </div>
        <div className="header-item">
          <p>Powered by: OpenWeather API</p>
        </div>
        <div className="header-item">
          <p>Created By: Asbhy N. Cepe</p>
        </div>
      </section>
      <section className="search-section">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-item">
              <input type="text" placeholder="Enter a Location" name="city" />
            </div>
            <div className="form-item">
              <button value={"submit"}>SEARCH</button>
            </div>
          </div>
        </form>
      </section>
      {isSearchError && (
        <div className="wrapper">
          <h3>NO AVAILABLE DATA</h3>
        </div>
      )}
      {isLoading && <Spinner />}
      {currentWeather?.cod === 200 && (
        <section className="weather-section">
          <div className="card current">
            <div className="card-header">
              <h3>TODAY</h3>
              <p>{location.toUpperCase()}</p>
            </div>
            <div className="card-body">
              <div className="card-content">
                <div className="weather-icon">
                  <img
                    src={
                      "/img/weather_icons/" +
                      currentWeather.weather[0].icon +
                      ".svg"
                    }
                    alt=""
                  />
                </div>
                <div className="weather-description">
                  <p>{currentWeather.weather[0].description.toUpperCase()}</p>
                </div>
              </div>
              <div className="card-content">
                <div className="temp-data">
                  <p className="main-temp">{currentWeather.main.temp} °C</p>
                </div>
                <div className="temp-data">
                  <div className="other-data-item">
                    <p className="other-temp">
                      {currentWeather.main.temp_min} °C
                    </p>
                    <label htmlFor="">MIN TEMP.</label>
                  </div>
                  <div className="other-data-item">
                    <p className="other-temp">
                      {currentWeather.main.temp_max} °C
                    </p>
                    <label htmlFor="">MAX TEMP.</label>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="other-info">
                  <div className="other-data-item">
                    <p>{currentWeather.main.humidity}%</p>
                    <label htmlFor="">Humdity</label>
                  </div>
                  <div className="other-data-item">
                    <p>{currentWeather.wind.gust} m/s</p>
                    <label htmlFor="">Gustiness</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card forecast">
            <div className="card-title">
              <h3>5 DAY FORECAST FOR {location.toUpperCase()}</h3>
            </div>
            <div className="card-body">
              {forecastData &&
                forecastData.map((data, index) => {
                  if ((index + 1) % 8 === 0) {
                    return <ForecastItem key={index} weatherData={data} />;
                  }
                })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

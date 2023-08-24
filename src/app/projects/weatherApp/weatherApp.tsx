"use client";

import "../weatherApp/weather.css";
import { WeatherData } from "@/models/weatherModel";
import { FormEvent, useState } from "react";

export default function WeatherApp() {
  const [searchResult, setSearchResult] = useState<WeatherData | null>(null);
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchError, setIsSearchError] = useState(false);
  const [location, setLocation] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    setSearchResult(null);
    setIsSearchError(false);
    setSearchNotFound(false);
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch(
        "/api/search?cityName=" + formData.get("query")?.toString().trim()
      );

      const weatherData: WeatherData = await response.json();

      setSearchResult(weatherData);
      setLocation(formData.get("query")!.toString().toUpperCase());

      if (weatherData.cod != 200) {
        setSearchNotFound(true);
      }

      console.log();
    } catch (error) {
      setIsSearchError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div id="container">
      <div className="app-title">
        <h1>WEATHER APP</h1>
        <p className="subtitle">powered by: OpenWeather API</p>
      </div>
      <div className="main-app">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-item">
              <input
                type="text"
                name="query"
                placeholder="Enter a location..."
                required
              />
            </div>
            <div className="form-item">
              <button>Search</button>
            </div>
          </div>
        </form>
        <div className="display-data">
          {isLoading && (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          )}
          {isSearchError && (
            <div className="display-msg">Something went wrong</div>
          )}
          {searchNotFound && (
            <div className="display-msg">No search result found</div>
          )}
          {searchResult?.cod === 200 && (
            <>
              <div className="weather-data-block" id="weather-condition">
                <div className="weather-item">
                  <img
                    src={
                      "/img/weather_icons/" +
                      searchResult.weather[0].icon +
                      ".svg"
                    }
                    alt="weather icon"
                  />
                </div>
                <div className="weather-item">
                  <p className="weather-description">
                    {searchResult.weather[0].description.toUpperCase()}
                  </p>
                  <p className="location">{location?.toUpperCase()}</p>
                </div>
              </div>
              <div className="weather-data-block">
                <div className="weather-item">
                  <div className="temp-data">
                    {searchResult.main.temp_min} <sup>°C</sup>
                  </div>
                  <div className="temp-description">Min. Temp</div>
                </div>
                <div className="weather-item">
                  <div className="temp-data">
                    {searchResult.main.temp} <sup>°C</sup>
                  </div>
                  <div className="temp-description">Avg. Temp</div>
                </div>
                <div className="weather-item">
                  <div className="temp-data">
                    {searchResult.main.temp_max} <sup>°C</sup>
                  </div>
                  <div className="temp-description">Max. Temp</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import { WeatherData } from "@/models/weatherModel";

interface Props {
  weatherData: WeatherData;
}

export default function ForecastItem({ weatherData }: Props) {
  const weekdays: string[] = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  const months: string[] = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];

  const date = new Date(weatherData.dt * 1000);

  return (
    <div className="forecast-item">
      <div className="forecast-data">
        <p className="weekday">{weekdays[date.getUTCDay()]}</p>
        <p className="raw-date">
          {months[date.getMonth()]} {date.getUTCDate()}
        </p>
      </div>
      <div className="forecast-data">
        <img
          src={"/img/weather_icons/" + weatherData.weather[0].icon + ".svg"}
          alt=""
        />
      </div>
      <div className="forecast-data">
        <p>{weatherData.main.temp} °C</p>
      </div>
    </div>
  );
}

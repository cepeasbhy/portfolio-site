export interface WeatherData {
  dt: number;
  cod: number;

  sys: {
    country: string;
  };

  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  wind: {
    gust: number;
  };
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
}

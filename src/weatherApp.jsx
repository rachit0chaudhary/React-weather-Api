import SearchBox from "./searchBox";
import Info from "./info";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherinfo] = useState({
    city: "delhi",
    temperature: 28.07,
    tempMin: 28.07,
    temMax: 28.07,
    humidity: 28.07,
    feelsLike: 28.07,
    description: "haze",
  });

  let updateInfo = (result) => {
    setWeatherinfo(result);
  };
  return (
    <div>
      <SearchBox updateInfo={updateInfo} />
      <Info info={weatherInfo} />
    </div>
  );
}

import { useState } from "react";
import { useSelector } from "react-redux";
import OneDayWeather from "./OneDayWeather/OneDayWeather";
import "./Result.css";

const dateToDay = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayNumber = new Date(date).getDay();

  return days[dayNumber];
};

const Result = () => {
  const searchResult = useSelector((state) => state.searchState.searchResult);
  const [isUnitCelsius, setIsUnitCelsius] = useState(true);
  const day = dateToDay(searchResult.list[0].dt_txt);
  const weatherCondition = searchResult.list[0].weather[0].main;
  const icon = searchResult.list[0].weather[0].icon;
  let temp = searchResult.list[0].main.temp;
  temp = isUnitCelsius ? temp : ((temp * 9) / 5 + 32).toFixed(2);
  const pressure = searchResult.list[0].main.pressure;
  const humidity = searchResult.list[0].main.humidity;
  const windSpeed = searchResult.list[0].wind.speed;

  console.log(searchResult);

  return (
    <div className="result">
      <div className="top-container">
        <div className="location-result-container">
          <span className="city-name">{`${searchResult.city.name}, ${searchResult.city.country}`}</span>
          <span className="day">{day}</span>
          <span className="weather-condition">{weatherCondition}</span>
        </div>
      </div>

      <div className="middle-container">
        <div className="temp-container">
          <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon" />
          <span className="temp-digit">{temp}</span>
          <span
            className={`temp-unit ${isUnitCelsius ? "active-temp-unit" : null}`}
            onClick={() => setIsUnitCelsius(true)}
          >
            °C{" "}
          </span>
          <span className="temp-unit">|</span>
          <span
            className={`temp-unit ${isUnitCelsius ? null : "active-temp-unit"}`}
            onClick={() => setIsUnitCelsius(false)}
          >
            {" "}
            °F
          </span>
        </div>

        <div className="weather-details-container">
          <span className="pressure">Pressure: {pressure} hPa</span>
          <span className="humidity">Humidity: {humidity}%</span>
          <span className="wind-speed">Wind Speed: {windSpeed} m/s</span>
        </div>
      </div>

      <div className="bottom-container">
        {[...Array(5)].map((e, i) => (
          <OneDayWeather key={i} dayNumber={i} dateToDay={dateToDay} />
        ))}
      </div>
    </div>
  );
};

export default Result;

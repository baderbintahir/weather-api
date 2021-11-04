import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const WeatherDetails = (props) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const { searchResult, activeDay } = useSelector((state) => state.searchState);
  const detailedResult = searchResult.list[activeDay * 8]
  const day = props.dateToDay(detailedResult.dt_txt);
  const weatherCondition = detailedResult.weather[0].main;
  const icon = detailedResult.weather[0].icon;
  const pressure = detailedResult.main.pressure;
  const humidity = detailedResult.main.humidity;
  const windSpeed = detailedResult.wind.speed;
  let temp = detailedResult.main.temp;
  temp = isCelsius ? temp : ((temp * 9) / 5 + 32).toFixed(2);

  return (
    <div className="weather-details">
      <div className="top-container">
        <div className="location-result-container">
          <span className="city-name">{`${searchResult.city.name}, ${searchResult.city.country}`}</span>
          <span className="day">{day}</span>
          <span className="weather-condition">{weatherCondition}</span>
        </div>
      </div>

      <div className="middle-container">
        <div className="temp-container">
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/w/${icon}.png`}
            alt="weather icon"
          />
          <span className="temp-digit">{temp}</span>
          <span
            className={`temp-unit ${isCelsius ? "active-temp-unit" : null}`}
            onClick={() => setIsCelsius(true)}
          >
            °C{" "}
          </span>
          <span className="temp-unit">|</span>
          <span
            className={`temp-unit ${isCelsius ? null : "active-temp-unit"}`}
            onClick={() => setIsCelsius(false)}
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
    </div>
  );
};

export default WeatherDetails;

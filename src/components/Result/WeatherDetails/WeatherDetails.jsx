import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const WeatherDetails = (props) => {
  const [isUnitCelsius, setIsUnitCelsius] = useState(true);
  const searchState = useSelector((state) => state.searchState);
  const searchResult = searchState.searchResult;
  const day = props.dateToDay(searchResult.list[searchState.activeDay * 8].dt_txt);
  const weatherCondition = searchResult.list[searchState.activeDay * 8].weather[0].main;
  const icon = searchResult.list[searchState.activeDay * 8].weather[0].icon;
  const pressure = searchResult.list[searchState.activeDay * 8].main.pressure;
  const humidity = searchResult.list[searchState.activeDay * 8].main.humidity;
  const windSpeed = searchResult.list[searchState.activeDay * 8].wind.speed;
  let temp = searchResult.list[searchState.activeDay * 8].main.temp;
  temp = isUnitCelsius ? temp : ((temp * 9) / 5 + 32).toFixed(2);

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
    </div>
  );
};

export default WeatherDetails;

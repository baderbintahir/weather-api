import { useSelector } from "react-redux";
import "./Result.css";

const Result = () => {
  const searchResult = useSelector((state) => state.searchState.searchResult);

  const dayNumber = new Date(searchResult.list[0].dt_txt).getDay()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const weatherCondition = searchResult.list[0].weather[0].main
  const icon = searchResult.list[0].weather[0].icon

  const temp = searchResult.list[0].main.temp
  const pressure = searchResult.list[0].main.pressure
  const humidity = searchResult.list[0].main.humidity
  const windSpeed = searchResult.list[0].wind.speed
  
  console.log(searchResult);

  return (
    <div className="result">
      <div className="top-container">
        <div className="location-result-container">
          <span className="city-name">{`${searchResult.city.name}, ${searchResult.city.country}`}</span>
          <span className="day">{days[dayNumber]}</span>
          <span className="weather-condition">{weatherCondition}</span>
        </div>
      </div>

      <div className="middle-container">
        <div className="temp-container">
          <span className="temp-icon">{icon}</span>
          <span className="temp-digit">{temp}</span>
          <span className="temp-unit">°C</span>
        </div>

        <div className="weather-details-container">
          <span className="pressure">Pressure: {pressure}</span>
          <span className="humidity">Humidity: {humidity}</span>
          <span className="wind-speed">Wind Speed: {windSpeed}</span>
        </div>
      </div>
    </div>
  );
};

export default Result;

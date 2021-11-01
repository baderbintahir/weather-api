import "./Result.css";

const Result = () => {
  return (
    <div className="result">
      <div className="top-container">
        <div className="location-result-container">
          <span className="city-name">City, Country</span>
          <span className="day">Day</span>
          <span className="weather-condition">Condition</span>
        </div>
      </div>

      <div className="middle-container">
        <div className="temp-container">
          <span className="temp-icon">ICON</span>
          <span className="temp-digit">Digit</span>
          <span className="temp-unit">Unit (C/F)</span>
        </div>

        <div className="weather-details-container">
            <span className="pressure">Pressure</span>
            <span className="humidity">Humidity</span>
            <span className="wind-speed">Wind Speed</span>
        </div>
      </div>
    </div>
  );
};

export default Result;

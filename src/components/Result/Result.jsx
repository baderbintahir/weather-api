import OneDayWeather from "./OneDayWeather/OneDayWeather";
import WeatherDetails from "./WeatherDetails/WeatherDetails";
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
  return (
    <div className="result">
      <WeatherDetails dateToDay={dateToDay} />

      <div className="bottom-container">
        {[...Array(5)].map((e, i) => (
          <OneDayWeather key={i} dayNumber={i} dateToDay={dateToDay} />
        ))}
      </div>
    </div>
  );
};

export default Result;

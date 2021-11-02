import React from 'react'
import { useSelector } from 'react-redux';

import './OneDayWeather.css'

const OneDayWeather = (props) => {
    const searchResult = useSelector((state) => state.searchState.searchResult);
    const currentDay = searchResult.list[props.dayNumber * 8]
    const day = props.dateToDay(currentDay.dt_txt);
    const icon = currentDay.weather[0].icon;
    const minTemp = currentDay.main.temp_min
    const maxTemp = currentDay.main.temp_max

    return (
        <div className={`one-day-weather`}>
            <span className="day">{day}</span>
            <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon" />
            <span className="min-max-temp">{`${minTemp}° - ${maxTemp}°`}</span>
        </div>
    )
}

export default OneDayWeather
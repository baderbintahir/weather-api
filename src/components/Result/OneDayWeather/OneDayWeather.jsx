import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveDay } from '../../../redux/searchState';

import './OneDayWeather.css'

const OneDayWeather = (props) => {
    const dispatch = useDispatch()
    const searchState = useSelector((state) => state.searchState);
    const searchResult = searchState.searchResult;

    const currentDay = searchResult.list[props.dayNumber * 8]
    const day = props.dateToDay(currentDay.dt_txt);
    const icon = currentDay.weather[0].icon;
    const minTemp = currentDay.main.temp_min
    const maxTemp = currentDay.main.temp_max

    return (
        <div className={`one-day-weather ${searchState.activeDay === props.dayNumber ? "active-day" : null}`} onClick={() => dispatch(changeActiveDay(props.dayNumber))}>
            <span className="day">{day}</span>
            <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon" />
            <span className="min-max-temp">{`${minTemp}° - ${maxTemp}°`}</span>
        </div>
    )
}

export default OneDayWeather
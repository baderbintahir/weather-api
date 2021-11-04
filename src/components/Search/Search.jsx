import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory, changeTerm, setData } from "../../redux/searchState";
import "./Search.css";

const apiKey = "c73aa228bfba692462f96e89080aa39a";

const Search = () => {
  const state = useSelector((state) => state.searchState);
  const dispatch = useDispatch();

  const isMap = state.searchCategory === "map" ? true : false;
  let placeholder;

  if (isMap) {
    placeholder = "Zoom into the place for weather updates...";
  } else {
    placeholder = `Search ${
      state.searchCategory !== "zip" ? "City" : "Zip Code"
    }...`;
  }

  const handleSubmit = () => {
    let url;

    if (isMap) {
      url = `http://api.openweathermap.org/data/2.5/forecast?lat=${state.coordinates.lat}&lon=${state.coordinates.lng}&units=metric&appid=${apiKey}`;
    } else {
      url = `http://api.openweathermap.org/data/2.5/forecast?${
        state.searchCategory === "zip" ? "id" : "q"
      }=${state.searchTerm}&units=metric&appid=${apiKey}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setData(res));
      });
  };

  return (
    <div className="search-container">
      <select
        className="dropdown-select"
        onChange={(e) => dispatch(changeCategory(e.target.value))}
      >
        <option value="name">City Name</option>
        <option value="zip">Zip Code</option>
        <option value="map">Map</option>
      </select>

      <input
        type="text"
        className="search-field"
        disabled={isMap}
        placeholder={placeholder}
        value={state.searchTerm}
        onChange={(e) => dispatch(changeTerm(e.target.value))}
      />

      <button className="search-btn" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default Search;

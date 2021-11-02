import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory, changeTerm, getData } from "../../redux/searchState";

import "./Search.css";

const Search = () => {
  const state = useSelector((state) => state.searchState);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?${
      state.searchCategory === "zip" ? "id" : "q"
    }=${state.searchTerm}&units=metric&appid=c73aa228bfba692462f96e89080aa39a`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getData(res));
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
      </select>

      <input
        type="text"
        className="search-field"
        placeholder={`Search ${state.searchCategory !== "zip" ? "City" : "Zip Code"}...`}
        onChange={(e) => dispatch(changeTerm(e.target.value))}
      />

      <button className="search-btn" onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Search;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory, changeTerm, getData } from "../../redux/searchState";

const Search = () => {
  const state = useSelector((state) => state.searchState);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${state.searchTerm}&units=metric&appid=c73aa228bfba692462f96e89080aa39a`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch(getData(res));
      });
  };

  return (
    <div className="search-container">
      <div className="search-by-dropdown">
        <select
          className="dropdown-select"
          onChange={(e) => dispatch(changeCategory(e.target.value))}
        >
          <option>Search By:</option>
          <option value="name">City Name</option>
          <option value="zip">Zip Code</option>
        </select>
      </div>

      <div className="search-field">
        <input
          type="text"
          placeholder="Search Term..."
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        />
      </div>

      <div>
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};

export default Search;

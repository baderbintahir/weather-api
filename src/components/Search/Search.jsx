import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCategory,
  changeSearchedCoordinates,
  changeTerm,
} from "../../redux/searchState";
import "./Search.css";

const Search = (props) => {
  const { searchTerm, searchCategory } = useSelector((state) => state.searchState);
  const dispatch = useDispatch();

  const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?access_token=pk.eyJ1IjoibXVoYW1tYWRiYWRlcm1hcGJveCIsImEiOiJja3ZqNnBwcDUyM2t4MnBxNTNiajZidWtqIn0.M9rRkkK5dOF4WwM9Thc21g`;

  const handleSubmit = () => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?${
      searchCategory === "zip" ? "id" : "q"
    }=${searchTerm}&units=metric&appid=`;
    props.fetchData(url);

    fetch(geocodingUrl)
      .then((res) => res.json())
      .then((res) =>
        dispatch(
          changeSearchedCoordinates(res.features[0].geometry.coordinates)
        )
      );
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
        placeholder={`Search ${
          searchCategory !== "zip" ? "City" : "Zip Code"
        }...`}
        value={searchTerm}
        onChange={(e) => dispatch(changeTerm(e.target.value))}
      />

      <button className="search-btn" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default Search;

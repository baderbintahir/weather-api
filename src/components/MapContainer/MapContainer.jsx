import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import mapboxgl from "mapbox-gl";
import "./MapContainer.css";

const MapContainer = (props) => {
  const searchedCoordinates = useSelector(
    (state) => state.searchState.searchedCoordinates
  );
  mapboxgl.accessToken =
    "pk.eyJ1IjoibXVoYW1tYWRiYWRlcm1hcGJveCIsImEiOiJja3ZqNnBwcDUyM2t4MnBxNTNiajZidWtqIn0.M9rRkkK5dOF4WwM9Thc21g";

  useEffect(() => {
    const marker = new mapboxgl.Marker();
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: searchedCoordinates,
      zoom: 9,
      hash: true,
    });

    map.on("style.load", function () {
      map.on("click", function (e) {
        const {lat, lng} = e.lngLat;
        const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=`;
        props.fetchData(url);

        marker.setLngLat({lat, lng}).addTo(map);
      });
    });
  }, [props, searchedCoordinates]);

  return <div className="map-container" id="mapContainer"></div>;
};
export default MapContainer;

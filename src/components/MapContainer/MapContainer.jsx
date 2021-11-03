import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import mapboxgl from "mapbox-gl";
import "./MapContainer.css";
import { setCoordinates } from "../../redux/searchState";

const MapContainer = () => {
  const dispatch = useDispatch()
  mapboxgl.accessToken =
    "pk.eyJ1IjoibXVoYW1tYWRiYWRlcm1hcGJveCIsImEiOiJja3ZqNnBwcDUyM2t4MnBxNTNiajZidWtqIn0.M9rRkkK5dOF4WwM9Thc21g";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [73.04, 33.68],
      zoom: 9,
    });

    map.on("style.load", function () {
      map.on("mousemove", function (e) {
        const coordinates = e.lngLat;
        dispatch(setCoordinates({
          lat: coordinates.lat,
          lng: coordinates.lng
        }))
      });
    });
  }, [dispatch]);

  return <div className="map-container" id="mapContainer"></div>;
};
export default MapContainer;

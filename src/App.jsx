import Result from "./components/Result/Result";
import Search from "./components/Search/Search";

import "./App.css";
import { useSelector } from "react-redux";
import MapContainer from "./components/MapContainer/MapContainer";

const App = () => {
  const showResult = useSelector(state => state.searchState.searchResult.city) ? true : false
  const showMap = useSelector(state => state.searchState.searchCategory) === "map" ? true : false
  
  return (
    <div className="App">
      <Search />
      {showResult ? <Result /> : null}      
      {showMap ? <MapContainer /> : null}
    </div>
  );
};

export default App;

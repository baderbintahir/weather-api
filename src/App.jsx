import { useSelector, useDispatch } from "react-redux";
import { setData } from "./redux/searchState";
import Result from "./components/Result/Result";
import Search from "./components/Search/Search";
import MapContainer from "./components/MapContainer/MapContainer";
import "./App.css";

const API_KEY = "c73aa228bfba692462f96e89080aa39a";

const App = () => {
  const dispatch = useDispatch();
  const showResult = useSelector((state) => state.searchState.searchResult.city)
    ? true
    : false;

  const fetchData = (url) => {
    fetch(`${url}${API_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setData(res));
      });
  };

  return (
    <div className="App">
      <MapContainer fetchData={fetchData} />
      <Search fetchData={fetchData} />
      {showResult ? <Result /> : null}
    </div>
  );
};

export default App;

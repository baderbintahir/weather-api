import Result from "./components/Result/Result";
import Search from "./components/Search/Search";

import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  const showResult = useSelector(state => state.searchState.searchResult.city) ? true : false
  
  return (
    <div className="App">
      <Search />
      {showResult ? <Result /> : null}      
    </div>
  );
};

export default App;

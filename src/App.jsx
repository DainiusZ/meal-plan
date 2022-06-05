import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import filterApiData from "./filterApiData";
const dataUrl = "https://tietoevry-mealplan-api.herokuapp.com/api/meals";

function App() {
  const [isDataFiltered, setDataFiltered] = useState(false);

  const { data, loading } = useFetch(dataUrl);

  useEffect(() => {
    if (!loading) {
      const filteredApiData = filterApiData(data);
      console.log("useeffect filtereddata", filteredApiData);
      // setApiData(filteredApiData);
      setDataFiltered(true);
    }
  }, [data, loading]);

  return !isDataFiltered ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;

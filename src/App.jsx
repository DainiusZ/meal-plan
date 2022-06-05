import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
const dataUrl = "https://tietoevry-mealplan-api.herokuapp.com/api/meals";

function App() {
  const [isDataReceived, setDataReceived] = useState(false);

  const { data, loading } = useFetch(dataUrl);

  useEffect(() => {
    if (!loading) {
      setDataReceived(true);
    }
  }, [data, loading]);

  return !isDataReceived ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;

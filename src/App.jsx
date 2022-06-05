import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import filterApiData from "./filterApiData";
import makeMealPlan from "./makeMealPlan";
import DailyMealPlan from "./Components/DailyMealPlan";
const dataUrl = "https://tietoevry-mealplan-api.herokuapp.com/api/meals";

const dailyKcalTarget = 1900;

function App() {
  const [isDataFiltered, setDataFiltered] = useState(false);
  const [dailyMealPlan, setDailyMealPlan] = useState(null);

  const { data, loading } = useFetch(dataUrl);

  useEffect(() => {
    if (!loading) {
      const filteredApiData = filterApiData(data);
      // console.log("useeffect filtereddata", filteredApiData);
      // setApiData(filteredApiData);
      const mealplan = makeMealPlan(filteredApiData, dailyKcalTarget);
      // console.log("useeffect makemeal", mealplan);
      setDailyMealPlan(mealplan);

      setDataFiltered(true);
    }
  }, [data, loading]);

  return !isDataFiltered ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <DailyMealPlan props={dailyMealPlan} />
    </div>
  );
}

export default App;

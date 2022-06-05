import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import GoalsInput from "./Components/GoalsInput";
import "./App.css";
import filterApiData from "./filterApiData";
import makeMealPlan from "./makeMealPlan";
import DailyMealPlan from "./Components/DailyMealPlan";
const dataUrl = "https://tietoevry-mealplan-api.herokuapp.com/api/meals";

const dailyKcalTarget = 1900;
const weekdays = [
  "Monday",
  "Tuesday ",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function App() {
  const [isDataFiltered, setDataFiltered] = useState(false);
  const [dailyKcalTarget, setDailyKcalTarget] = useState(0);

  const { data, loading } = useFetch(dataUrl);

  const ats = weekdays.map((item) => {
    let [dailyMealPlan, setDailyMealPlan] = useState(null);
    // console.log("dailymeal", dailyMealPlan);

    useEffect(() => {
      // console.log("loop", item);
      if (!loading) {
        const filteredApiData = filterApiData(data);
        // console.log("useeffect filtereddata", filteredApiData);
        // setApiData(filteredApiData);
        let mealplan = makeMealPlan(filteredApiData, dailyKcalTarget);
        // console.log("useeffect makemeal", mealplan);
        setDailyMealPlan(mealplan);

        // setDataFiltered(true);
      }
    }, [data, loading, dailyKcalTarget]);
    return <DailyMealPlan props={dailyMealPlan} day={item} />;
  });

  useEffect(() => {
    if (!loading) {
      setDataFiltered(true);
    }
  }, [data, loading, dailyKcalTarget]);
  return !isDataFiltered ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <GoalsInput setKcal={setDailyKcalTarget} />
      <div className="App">{ats}</div>
    </div>
  );
}

export default App;

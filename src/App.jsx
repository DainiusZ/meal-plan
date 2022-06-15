import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import GoalsInput from "./Components/GoalsInput";
import "./App.css";
import filterApiData from "./filterApiData";
import makeMealPlan from "./makeMealPlan";
import DailyMealPlan from "./Components/DailyMealPlan";
const dataUrl = "https://tietoevry-mealplan-api.herokuapp.com/api/meals";

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
  const [weeklyMealArray, setWeeklyMealArray] = useState([]);
  const { data, loading } = useFetch(dataUrl);

  const displayPlan = weeklyMealArray.map((item) => {
    return <DailyMealPlan props={item} day={item.weekday} />;
  });

  useEffect(() => {
    let dailyMealPlan = [];
    if (!loading) {
      setDataFiltered(true);
      weekdays.forEach((item) => {
        const filteredApiData = filterApiData(data);
        let mealplan = makeMealPlan(filteredApiData, dailyKcalTarget);
        mealplan.weekday = item;
        dailyMealPlan.push(mealplan);
      });

      setWeeklyMealArray(dailyMealPlan);
    }
  }, [data, loading, dailyKcalTarget]);
  return !isDataFiltered ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <GoalsInput setKcal={setDailyKcalTarget} />
      <div className="App">{displayPlan}</div>
    </div>
  );
}

export default App;

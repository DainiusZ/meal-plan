import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
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

  const { data, loading } = useFetch(dataUrl);

  const ats = weekdays.map((item) => {
    let [dailyMealPlan, setDailyMealPlan] = useState(null);
    console.log("dailymeal", dailyMealPlan);

    useEffect(() => {
      console.log("loop", item);
      if (!loading) {
        const filteredApiData = filterApiData(data);
        // console.log("useeffect filtereddata", filteredApiData);
        // setApiData(filteredApiData);
        let mealplan = makeMealPlan(filteredApiData, dailyKcalTarget);
        // console.log("useeffect makemeal", mealplan);
        setDailyMealPlan(mealplan);

        // setDataFiltered(true);
      }
    }, [data, loading]);
    return <DailyMealPlan props={dailyMealPlan} day={item} />;
  });

  // const [dailyMealPlan, setDailyMealPlan] = useState(null);
  // const [dailyMealPlan2, setDailyMealPlan2] = useState(null);
  // console.log("daily plan", dailyMealPlan);
  // console.log("daily plan2", dailyMealPlan2);

  useEffect(() => {
    if (!loading) {
      setDataFiltered(true);
    }
  }, [data, loading]);
  return !isDataFiltered ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App" style={{ display: "flex" }}>
      {ats}
    </div>
  );
}

export default App;

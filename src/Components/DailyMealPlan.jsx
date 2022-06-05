import React from "react";
import MealCard from "./MealCard";
import "./DailyMealPlan.css";

function DailyMealPlan({ props, day }) {
  const { dailyMealsArray, totalKcal, totalProtein, totalCarbs, totalFat } =
    props;

  const mealArray = dailyMealsArray.map((mealItem, i) => {
    // console.log("mealitem", mealItem);

    return <MealCard key={i} data={mealItem} mealNr={i + 1} />;
  });

  return (
    <div className="container-daily-card">
      <header></header>
      <div className="weekday">
        <h1>{day}</h1>
      </div>
      <main className="main-section">{mealArray}</main>
      <footer>
        <h2>Total Calories: {totalKcal}</h2>
        <p>Protein: {totalProtein}</p>
        <p>Carbs: {totalCarbs}</p>
        <p>Fat: {totalFat}</p>
      </footer>
    </div>
  );
}

export default DailyMealPlan;

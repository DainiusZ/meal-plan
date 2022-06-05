import React from "react";
import MealCard from "./MealCard";

function DailyMealPlan({ props }) {
  const { dailyMealsArray, totalKcal, totalProtein, totalCarbs, totalFat } =
    props;

  const mealArray = dailyMealsArray.map((mealItem, i) => {
    // console.log("mealitem", mealItem);

    return <MealCard key={i} data={mealItem} />;
  });

  return (
    <div>
      <header>
        <h1>Daily Meal</h1>
      </header>
      <main>{mealArray}</main>
      <footer>
        <h2>Total Calaries: {totalKcal}</h2>
        <p>Protein: {totalProtein}</p>
        <p>Carbs: {totalCarbs}</p>
        <p>Fat: {totalFat}</p>
      </footer>
    </div>
  );
}

export default DailyMealPlan;

import React from "react";
import Container from "./Container";
import "./MealCard.css";

function MealCard({ data, mealNr }) {
  // console.log("props day", data);

  const card = data.map((item) => {
    // console.log("inside", item);

    return <Container key={item._id} props={item} />;
  });
  return (
    <div className="container-meal-card">
      <h2>Meal {mealNr}</h2>
      <div className="product-list">{card}</div>
    </div>
  );
}

export default MealCard;

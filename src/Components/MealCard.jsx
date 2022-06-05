import React from "react";
import Container from "./Container";

function MealCard({ data }) {
  // console.log("props day", data);

  const card = data.map((item) => {
    // console.log("inside", item);

    return <Container key={item._id} props={item} />;
  });
  return (
    <div>
      <h2>Meal:</h2>
      <div>{card}</div>
    </div>
  );
}

export default MealCard;

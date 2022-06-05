import React from "react";
import MealCard from "./MealCard";

function Container({ props }) {
  // console.log("container", props);

  const { name } = props;

  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}

export default Container;

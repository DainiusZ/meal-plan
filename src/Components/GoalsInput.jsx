import React from "react";
import "./GoalsInput.css";

function GoalsInput({ setKcal }) {
  let input = 0;

  function handleSubmit(e) {
    e.preventDefault();
    const form = document.querySelector("#form");
    if (form.checkValidity()) {
      form.reset();
      return setKcal(input);
    }
  }

  function handleInput(e) {
    return (input = e.target.value);
  }
  return (
    <div>
      <form id="form">
        <input
          id="city-input"
          name="city"
          onChange={handleInput}
          type="text"
          placeholder="Enter Your Target Calories per Day"
          required
        ></input>
        <input
          className="button"
          type="submit"
          onClick={handleSubmit}
          value={"Submit"}
        />
      </form>
    </div>
  );
}

export default GoalsInput;

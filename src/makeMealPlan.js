export default function makeMealPlan(data, targetKcal) {
  if (!data) return;
  const { mainDishes, vegDishes, salads, snacks } = data;

  let singleMealArray = [];
  let allDayArr = [];

  let tempKcal = 0;
  let tempProtein = 0;
  let tempCarbs = 0;
  let tempFat = 0;

  function mixDish() {
    if (!arguments) return;
    const args = [...arguments];

    args.forEach((element) => {
      if (!element) return;

      let index = randomIndex(element);
      let { kcal, protein, carbs, fat } = element[index];

      tempKcal += kcal;
      tempProtein += protein;
      tempCarbs += carbs;
      tempFat += fat;
      singleMealArray.push(element[index]);
    });
    allDayArr.push(singleMealArray);
    singleMealArray = [];
  }

  while (tempKcal <= targetKcal) {
    // console.log("while loop started, KCal: ", tempKcal);
    mixDish(mainDishes, vegDishes, salads, snacks);
  }
  // console.log("allday mealprep finished", allDayArr);
  return {
    dailyMealsArray: allDayArr,
    totalKcal: tempKcal,
    totalProtein: tempProtein,
    totalCarbs: tempCarbs,
    totalFat: tempFat,
  };
}

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

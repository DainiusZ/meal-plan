export default function filterApiData(dataArray) {
  // console.log("data is being filtered");

  const mainDishes = [];
  const vegDishes = [];
  const salads = [];
  const snacks = [];
  dataArray.forEach((object) => {
    if (object.isMain) {
      mainDishes.push(object);
    }
    if ((object.isVegetarian && object.isaSalad) || object.isVegetarian) {
      vegDishes.push(object);
    }
    if (object.isaSalad) {
      salads.push(object);
    }
    if (object.isaSnack) {
      snacks.push(object);
    }
  });
  return { mainDishes, vegDishes, salads, snacks };
}

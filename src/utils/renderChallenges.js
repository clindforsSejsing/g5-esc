import { createCards } from "../modules/createCards.js";

const Render = (() => {
  const allRooms = (roomData) => {
    roomData.forEach((rooms) => {
      createCards(rooms);
    });
  };
  const threeTopRating = (sortedData) => {
    sortedData.slice(0, 3).forEach((item) => {
      createCards(item);
    });
  };

  return {
    allRooms,
    threeTopRating,
  };
})();

export { Render };

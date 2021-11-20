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
  const deleteAndRender = (data) => {
    const list = document.querySelector(".challenges-list");
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    Render.allRooms(data);
  };

  return {
    allRooms,
    threeTopRating,
    deleteAndRender,
  };
})();

export { Render };

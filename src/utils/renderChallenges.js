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
    list.innerHTML = "";
    if (data.length > 0) {
      Render.allRooms(data);
    } else {
      const noMatch = document.createElement("h1");
      noMatch.textContent = "No matching challenges";
      list.append(noMatch);
    }
  };

  return {
    allRooms,
    threeTopRating,
    deleteAndRender,
  };
})();

export { Render };

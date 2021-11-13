import { loadData } from "./fetch.js";
import { createCards } from "../modules/createCards.js";

const dataChallenges = await loadData();

// Filtering and rendering cards for Homepage and Challenges page.

const sortedByRating = [...dataChallenges].sort((a, b) => {
  return b.rating - a.rating;
});

const renderAllRooms = (roomData) => {
  for (let i = 0; i < roomData.length; i++) {
    createCards(roomData[i]);
    const allItems = document.querySelectorAll(".challenge-cta");
    allItems.item(i).setAttribute("id", i);
  }
};
const renderTopThree = (sortedData) => {
  const topThree = sortedData.slice(0, 3);
  for (let i = 0; i < topThree.length; i++) {
    createCards(topThree[i]);
    const allItems = document.querySelectorAll(".challenge-cta");
    allItems.item(i).setAttribute("id", i);
  }
};

export { sortedByRating, renderTopThree, renderAllRooms };

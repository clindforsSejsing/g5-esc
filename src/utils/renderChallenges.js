import { loadData } from "./fetch.js";
import { createCards } from "../modules/createCards.js";

const dataChallenges = await loadData();

// Filtering and rendering cards for Homepage and Challenges page.

const sortedByRating = [...dataChallenges].sort((a, b) => {
  return b.rating - a.rating;
});

const renderAllRooms = (roomData) => {
  roomData.forEach((rooms) => {
    createCards(rooms);
  });
};

const renderTopThree = (sortedData) => {
  sortedData.slice(0, 3).forEach((item) => {
    createCards(item);
  });
};

export { sortedByRating, renderTopThree, renderAllRooms };

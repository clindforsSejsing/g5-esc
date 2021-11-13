import {
  sortedByRating,
  renderAllRooms,
  renderTopThree,
} from "./src/utils/renderChallenges.js";
import { loadData } from "./src/utils/fetch.js";

const challenges = await loadData();

window.onload = () => {
  if (window.location.href.match("challenges.html")) {
    renderAllRooms(challenges);
  } else {
    renderTopThree(sortedByRating);
  }
};
onload();

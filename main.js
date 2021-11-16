import { Render } from "./src/utils/renderChallenges.js";
import { filterSolutions } from "./src/utils/filterData.js";
import { loadData } from "./src/utils/fetch.js";

const challenges = await loadData();

window.onload = async () => {
  if (window.location.href.match("challenges.html")) {
    Render.allRooms(challenges);
  } else {
    Render.threeTopRating(filterSolutions.topThree(challenges));
  }
};
onload();

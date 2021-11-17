import { Render } from "./src/utils/renderChallenges.js";
import { filterSolutions } from "./src/utils/filterData.js";
import { loadData } from "./src/utils/fetch.js";
import { filterToggle } from "./src/modules/filterToggle.js";
import { createTags } from "./src/modules/createTags.js";

const challenges = await loadData();

window.onload = async () => {
  if (window.location.href.match("challenges.html")) {
    Render.allRooms(challenges);
    filterToggle();
    createTags();
  } else {
    Render.threeTopRating(filterSolutions.topThree(challenges));
  }
};
onload();

export { challenges };
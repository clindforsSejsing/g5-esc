import { Render } from "./src/utils/renderChallenges.js";
import { filter } from "./src/utils/filterData.js";
import { loadData } from "./src/utils/fetch.js";
import {
  filterToggle,
  minRating,
  maxRating,
} from "./src/modules/filterToggle.js";
import { createTags } from "./src/modules/createTags.js";

const challenges = await loadData();

window.onload = async () => {
  if (window.location.href.match("challenges.html")) {
    Render.allRooms(challenges);
    filterToggle();
    createTags();
  } else {
    Render.threeTopRating(filter.topThree(challenges));
  }
 


};
onload();
export { challenges };

//DOM and Global Variables
const rating = document.querySelectorAll(".filter-rating-star");
const tags = document.querySelectorAll(".tags");
const checkBoxes = document.querySelectorAll(".checkboxes");
const searchBar = document.querySelector("#byKeywordInput");
let typeSelected = [];
let tagsSelected = [];
let searchInput = "";

rating.forEach((item) => {
  item.addEventListener("click", () => {
    const data = filter.challenges(
      typeSelected,
      tagsSelected,
      searchInput,
      minRating,
      maxRating,
      challenges
    );
    Render.deleteAndRender(data);
  });
});

tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    if (tag.classList.contains("active")) {
      tagsSelected.push(tag.textContent);
    } else {
      tagsSelected = tagsSelected.filter((e) => e !== tag.textContent);
    }
    const data = filter.challenges(
      typeSelected,
      tagsSelected,
      searchInput,
      minRating,
      maxRating,
      challenges
    );
    Render.deleteAndRender(data);
  });
});

checkBoxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      typeSelected.push(checkbox.value);
    } else {
      typeSelected = typeSelected.filter((e) => e !== checkbox.value);
    }
    const data = filter.challenges(
      typeSelected,
      tagsSelected,
      searchInput,
      minRating,
      maxRating,
      challenges
    );
    Render.deleteAndRender(data);
  });
});

searchBar.addEventListener("keyup", (e) => {
  const searchInput = e.target.value.toLowerCase();

  const data = filter.challenges(
    typeSelected,
    tagsSelected,
    searchInput,
    minRating,
    maxRating,
    challenges
  );
  Render.deleteAndRender(data);
});



let passedString = location.search.substring(1);

//window.alert(passedString);
if(passedString == "onsite")
{
  let filtToggleButton = document.getElementsByClassName("filterToggleBtn")[0];
  filtToggleButton.click();

  const inCludeOnSite = document.querySelector("#includeOnsite");
  inCludeOnSite.click();
} else if (passedString=="online"){

  let filtToggleButton = document.getElementsByClassName("filterToggleBtn")[0];
  filtToggleButton.click();

  const inCludeOnLine = document.querySelector("#includeOnline");
  inCludeOnLine.click();


}

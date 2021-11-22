import { minRating, maxRating } from "../modules/filterToggle.js";
import { loadData } from "./fetch.js";
import { Render } from "./renderChallenges.js";
//DOM and Global Variables
const rating = document.querySelectorAll(".filter-rating-star");
const tags = document.querySelectorAll(".tags");
const checkBoxes = document.querySelectorAll(".checkboxes");
const searchBar = document.querySelector("#byKeywordInput");
const challenges = await loadData();
let typeSelected = [];
let tagsSelected = [];
let searchInput = "";
console.log(searchInput);

export const filter = (() => {
  const topThree = (data) =>
    data.sort((a, b) => {
      return b.rating - a.rating;
    });

  const search = (searchInput, challenges) =>
    challenges.filter(
      (challenge) =>
        challenge.title.toLowerCase().includes(searchInput) ||
        challenge.description.toLowerCase().includes(searchInput)
    );

  const type = (typeSelected, challenges) =>
    typeSelected.length > 0
      ? challenges.filter((challenge) => typeSelected.includes(challenge.type))
      : challenges;

  const rating = (minRating, maxRating, challenges) =>
    challenges.filter(
      (challenge) =>
        challenge.rating >= minRating && challenge.rating <= maxRating
    );

  const tags = (tagsSelected, challenges) =>
    tagsSelected.length > 0
      ? challenges.filter((challenge) =>
          tagsSelected.every((tags) => challenge.labels.includes(tags))
        )
      : challenges;

  const challenges = (
    typeSelected,
    tagsSelected,
    searchInput,
    minRating,
    maxRating,
    challenges
  ) => {
    const filterResult = filter.search(
      searchInput,
      filter.type(
        typeSelected,
        filter.rating(
          minRating,
          maxRating,
          filter.tags(tagsSelected, challenges)
        )
      )
    );
    return filterResult;
  };

  return {
    topThree,
    search,
    type,
    tags,
    rating,
    challenges,
  };
})();

// Events

// RATING

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
    console.log(data);
  });
});

// TAGS

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
    console.log(data);
    Render.deleteAndRender(data);
    console.log(tagsSelected);
  });
});

// TYPE

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
    console.log(data);
    Render.deleteAndRender(data);
    console.log(typeSelected);
  });
});

// SEARCH

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
  console.log(data);
  Render.deleteAndRender(data);
});

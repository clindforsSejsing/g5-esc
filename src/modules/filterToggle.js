const filterToggle = () => {
  //From HTML
  const filterToggle = document.querySelector(".filterToggleBtn");
  const filterBox = document.querySelector(".filterBox");
  const filterCloseBtn = document.querySelector(".filterCloseBtn");

  // Function
  function toggleFilter() {
    filterBox.classList.toggle("filterHide");
    filterToggle.classList.toggle("filterHide");
  }

  // EventListener
  filterToggle.addEventListener("click", toggleFilter);
  filterCloseBtn.addEventListener("click", toggleFilter);
};
// Rating
const minRatingStars = document.querySelectorAll(".minRating > li");
let maxRating = 5;
let minRating = 0;
minRatingStars.forEach((star, index) => {
  star.addEventListener("click", () => {
    minRatingStars.forEach((otherStars, otherIndex) => {
      index >= otherIndex
        ? otherStars.classList.add("active")
        : otherStars.classList.remove("active");
    });
    minRating = index + 1;
  });
});

const maxRatingStars = document.querySelectorAll(".maxRating > li");

maxRatingStars.forEach((star, index) => {
  star.addEventListener("click", () => {
    maxRatingStars.forEach((otherStars, otherIndex) => {
      index >= otherIndex
        ? otherStars.classList.add("active")
        : otherStars.classList.remove("active");
    });
    maxRating = index + 1;
  });
});
export { filterToggle, maxRating, minRating };

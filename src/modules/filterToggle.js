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
const minRatingIcon = document.querySelectorAll(".minRating > li");
let maxRating = 5;
let minRating = 0;
minRatingIcon.forEach((item, index) => {
  item.addEventListener("click", () => {
    minRatingIcon.forEach((secondItem, secondIndex) => {
      if (minRating == 1 && index + 1 == 1) {
        minRating = 0;
        secondItem.classList.remove("active");
      } else if (maxRating > index) {
        index >= secondIndex
          ? secondItem.classList.add("active")
          : secondItem.classList.remove("active");
        minRating = index + 1;
      }
    });
  });
});

const maxRatingIcon = document.querySelectorAll(".maxRating > li");

maxRatingIcon.forEach((item, index) => {
  item.addEventListener("click", () => {
    maxRatingIcon.forEach((secondItem, secondIndex) => {
      if (minRating <= index + 1) {
        index >= secondIndex
          ? secondItem.classList.add("active")
          : secondItem.classList.remove("active");
        maxRating = index + 1;
      }
    });
  });
});
export { filterToggle, maxRating, minRating };

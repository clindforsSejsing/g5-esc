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
      index >= secondIndex
        ? secondItem.classList.add("active")
        : secondItem.classList.remove("active");
    });
    minRating = index;
    // minRating = (index == 0 ? 0 : index + 1);

  });
});

const maxRatingIcon = document.querySelectorAll(".maxRating > li");

maxRatingIcon.forEach((item, index) => {
  item.addEventListener("click", () => {
    maxRatingIcon.forEach((secondItem, secondIndex) => {
      index >= secondIndex
        ? secondItem.classList.add("active")
        : secondItem.classList.remove("active");
    });
    maxRating = index + 1;
  });
});
export { filterToggle, maxRating, minRating };

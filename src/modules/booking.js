"strict coding";

function cardCtaBtnClick(title, minP, maxP) {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
  const infoCard = (document.getElementById(
    "bookThis"
  ).innerHTML = `Book Room ${title} (Step 1)`);

  // user clicks outside modal, close modal
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
  //close modal when user clicks(x)
  document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });
}

export { cardCtaBtnClick };

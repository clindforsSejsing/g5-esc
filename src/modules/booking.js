"strict coding";

// 
function cardCtaBtnClick(title, minP, maxP) {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
  const infoCard = (document.getElementById(
    "bookThis"
  ).innerHTML = `Book Room ${title} (Step 1)`);

  document.getElementById("whatDate").innerHTML = "What date would you like to come";
  document.getElementById("dateText").innerHTML = "Date";
  document.getElementById("date").placeholder = "yyyy-mm-dd";
  document.getElementById("searchTimes-btn").innerHTML = "Search available times";

  //close modal when user clicks(x)
  document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });
  // user clicks outside modal, close modal
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

// const infoCard = (document.getElementById(
//   "bookThis"
// ).innerHTML = `Book Room ${title} (Step 1)`);

let searchTimesBtn = document.getElementById("searchTimes-btn");

//GET https://lernia-sjj-assignments.vercel.app/api/booking/available-times?
searchTimesBtn.addEventListener("click", function () {
  // GET "https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=" +
  // window.alert("helloo");

  const x = document.getElementById("modal-content");
  // const createForm = document.createForm('form');
  // createForm.setAttribute("action", "");
  // createForm.setAttribute("method", "post");
  // x.appendChild(createForm);

  const formName = document.getElementById("whatDate").innerHTML = "Name";

  // const field1 = document.createElement("INPUT");
  // field1.setAttribute("type", "text");
  // field1.setAttribute("value", " ");
  // getElementsByClassName("modal-content").append(field1);


  // const field2 = document.createElement("INPUT");
  // field2.setAttribute("type", "text");
  // myModal.append(field2);

});

export { cardCtaBtnClick };




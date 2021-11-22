"strict coding";

const modal = document.getElementById("myModal");
const modalwrap = document.getElementById("modal-content");

function cardCtaBtnClick(title, minP, maxP) {
  firstModal();
  modalValue();
  
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

function firstModal() {
//create tags in modal
const titelModal = document.createElement("h1");
titelModal.setAttribute("id", "bookThis");
modalwrap.append(titelModal);
const text1Modal = document.createElement("p");
text1Modal.setAttribute("id", "whatDate");
modalwrap.append(text1Modal);
const text2Modal = document.createElement("p");
text2Modal.setAttribute("id", "dateText");
modalwrap.append(text2Modal);
const inputField1 = document.createElement("input");
inputField1.setAttribute("id", "date");
inputField1.setAttribute("type", "text");
modalwrap.append(inputField1);
const searchBtn = document.createElement("button");
searchBtn.setAttribute("id", "searchTimes-btn");
modalwrap.append(searchBtn);
}
// give modal.-tags value
function modalValue(){
document.getElementById("whatDate").innerHTML = "What date would you like to come";
document.getElementById("dateText").innerHTML = "Date";
document.getElementById("date").placeholder = "yyyy-mm-dd";
document.getElementById("searchTimes-btn").innerHTML = "Search available times";
};

let searchTimesBtn = document.getElementById("searchTimes-btn");

searchTimesBtn.addEventListener("click", function () {
 let userDate = document.getElementById("date").value;
  getTimeSlots(userDate);
});
};
//inhämta data
async function getTimeSlots(wantedDate)
{
  const response = await fetch ('https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=' + wantedDate);
  const slotJson = await response.json();
  window.alert(slotJson.slots);
}
// const formName = document.getElementById("whatDate").innerHTML = "Name";
//testing-area.. under construction..//
// const field1 = document.createElement("INPUT");
// field1.setAttribute("type", "text");
// field1.setAttribute("value", " ");
// getElementsByClassName("modal-content").append(field1);



// const createForm = document.createForm('form');
// createForm.setAttribute("action", "");
// createForm.setAttribute("method", "post");
// x.appendChild(createForm);


// const field2 = document.createElement("INPUT");
// field2.setAttribute("type", "text");
// myModal.append(field2);

// });

//Nestla btns så att det inte blir error! fixa form//

export { cardCtaBtnClick };


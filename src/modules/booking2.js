"strict coding";

let btn = document.querySelector("button");
let modal = document.getElementById("myModal");
const modalwrap = document.getElementById("modal-content");

btn.addEventListener("click", function () {
    firstModal();
    modalValue();
   
});
//create tags and set value//
function firstModal() {
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

  
    //click on searchbtn
    searchBtn.addEventListener("click", function (){
        //get date
         let userDate = document.getElementById("date").value;
       getTimeSlots(userDate);
       //create form
       secondModal();
       
     });
}

// give modal.-tags value
function modalValue(){
document.getElementById("whatDate").innerHTML = "What date would you like to come";
document.getElementById("dateText").innerHTML = "Date";
document.getElementById("date").placeholder = "yyyy-mm-dd";
document.getElementById("searchTimes-btn").innerHTML = "Search available times";
}


//inhämta data
async function getTimeSlots(wantedDate)
{
  const response = await fetch ('https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=' + wantedDate);
  const slotJson = await response.json();
//   window.alert(slotJson.slots);
}

function secondModal() {
    modal.style.display = "block";
    emptyModal();
//create form
    const newForm = document.createElement("form");
    newForm.setAttribute("id", "contactForm");
    modalwrap.append(newForm);
//Behöver hitta var att appenda. Modalen syns men modelwrap finns nog inte. ev sätta in den i form
    const nameInputFieldText = document.createElement("p");
    nameInputFieldText.setAttribute("id","nameText");
    document.getElementById("nameText").innerHTML = "Name";
    modalwrap.append(nameInputFieldText);

    const nameinputField = document.createElement("input");
    nameinputField.setAttribute("id", "nameInput");
    nameinputField.setAttribute("type", "text");
    modalForm.append(nameinputField);

    const emailinputField = document.createElement("input");
    emailinputField.setAttribute("id", "email");
    emailinputField.setAttribute("type", "text");
    document.getElementById("email").innerHTML = "Email";
    modalForm.append(emailinputField);
}
function emptyModal() {
    if (modalwrap.innertext != ""){
        (modalwrap.innerText = "");
    }      
};

    //     const formName = document.getElementById("whatDate").innerHTML = "Name";

    // }


    // const createForm = document.createForm('form');
    // createForm.setAttribute("action", "");
    // createForm.setAttribute("method", "post");
    // x.appendChild(createForm);


    //     const field2 = document.createElement("INPUT");
    //     field2.setAttribute("type", "text");
    //     myModal.append(field2);

    // });

        // const newSpan = document.createElement("span");
    // newSpan.setAttribute("id", "close");
    // document.getElementById("modalwrap").append(newSpan);
    // newSpan.innerHTML = "&times";
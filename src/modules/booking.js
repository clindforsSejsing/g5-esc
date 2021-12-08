const modal = document.getElementById("myModal");
const modalwrap = document.querySelector(".modal-content");

function handleBooking(title, minP, maxP, id) {
  bookingStepOne(title, minP, maxP, id);
}
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

const bookingStepOne = (title, minP, maxP, id) => {
  modal.style.display = "block";
  modalwrap.innerHTML = "";

  const titelModal = document.createElement("h1");
  titelModal.setAttribute("id", "bookThis");
  titelModal.textContent = `Book room ${title} (Step 1)`;
  modalwrap.append(titelModal);

  const text1Modal = document.createElement("p");
  text1Modal.innerHTML = "What date would you like to come?";
  text1Modal.setAttribute("id", "whatDate");
  modalwrap.append(text1Modal);

  const text2Modal = document.createElement("p");
  text2Modal.innerHTML = "Date";
  text2Modal.setAttribute("id", "dateText");
  modalwrap.append(text2Modal);

  const dateInput = document.createElement("input");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("type", "text");
  dateInput.setAttribute("placeholder", "yyyy-mm-dd");
  modalwrap.append(dateInput);

  const searchBtn = document.createElement("button");
  searchBtn.setAttribute("id", "searchTimes-btn");
  searchBtn.innerHTML = "Search available times";
  searchBtn.addEventListener("click", async function () {
    const availableTimes = await getTimeSlots(dateInput.value);
    bookingStepTwo(title, minP, maxP, availableTimes, dateInput.value, id);
  });
  modalwrap.append(searchBtn);
};

const bookingStepTwo = (title, minP, maxP, availableTimes, date, id) => {
  modalwrap.innerHTML = "";

  const titelModal = document.createElement("h1");
  titelModal.setAttribute("id", "bookThis");
  titelModal.textContent = `Book room ${title} (Step 2)`;
  modalwrap.append(titelModal);

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name";
  modalwrap.append(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  modalwrap.append(nameInput);

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "E-mail";
  modalwrap.append(emailLabel);

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  modalwrap.append(emailInput);

  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "time");
  timeLabel.textContent = "What time?";
  modalwrap.append(timeLabel);

  const timeList = document.createElement("select");
  timeList.setAttribute("name", "time");
  timeList.setAttribute("id", "time");
  modalwrap.append(timeList);

  availableTimes.forEach((time) => {
    const timeOption = document.createElement("option");
    timeOption.setAttribute("value", `${time}`);
    timeOption.textContent = `${time}`;
    timeList.append(timeOption);
  });

  const participantsLabel = document.createElement("label");
  participantsLabel.setAttribute("for", "participant");
  participantsLabel.textContent = "How many participants?";
  modalwrap.append(participantsLabel);

  const participantsList = document.createElement("input");
  participantsList.setAttribute("type", "number");
  participantsList.setAttribute("min", `${minP}`);
  participantsList.setAttribute("max", `${maxP}`);
  participantsList.setAttribute("value", `${minP}`);
  participantsList.setAttribute("name", "participant");
  participantsList.setAttribute("id", "participant");
  modalwrap.append(participantsList);

  const searchBtn = document.createElement("button");
  searchBtn.setAttribute("id", "searchTimes-btn");
  searchBtn.innerHTML = "Submit Booking";
  searchBtn.addEventListener("click", async () => {
    const res = await fetch(
      "https://lernia-sjj-assignments.vercel.app/api/booking/reservations",
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          name: nameInput.value,
          email: emailInput.value,
          date: date,
          time: timeList.value,
          participants: parseInt(participantsList.value),
        }),
      }
    );
    bookingStepThree();
  });
  modalwrap.append(searchBtn);
};

const bookingStepThree = () => {
  modalwrap.innerHTML = "";

  const content = document.createElement("div");
  content.setAttribute("id", "textContent");
  modalwrap.append(content);

  const title = document.createElement("h1");
  title.textContent = "Thank you!";
  content.append(title);

  const returnLink = document.createElement("a");
  returnLink.setAttribute("href", "challenges.html");
  returnLink.innerHTML = "Back to challenges";
  content.append(returnLink);
};
//inhämta data
async function getTimeSlots(wantedDate) {
  const response = await fetch(
    "https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=" +
      wantedDate
  );
  const slotJson = await response.json();
  return slotJson.slots;
}

export { handleBooking };

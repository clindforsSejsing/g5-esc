import {
  cardCtaBtnClick,
} from "./booking.js";

// Calling DOM & Global Variables
let target = 0;
let starId = 0;
const challengeList = document.querySelector(".challenges-list");

const createCards = (data) => {
  const cardItem = document.createElement("li");
  cardItem.classList.add("challenges-item");
  challengeList.append(cardItem);

  const cardImg = document.createElement("img");
  cardImg.classList.add("challenge-picture");
  cardImg.src = `${data.image}`;
  cardItem.append(cardImg);

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("challenge-title");
  cardTitle.innerHTML = `${data.title}(${data.type})`;
  cardItem.append(cardTitle);

  // --- Meta Container

  const cardMeta = document.createElement("div");
  cardMeta.classList.add("challenge-meta");
  cardItem.append(cardMeta);

  const cardRating = document.createElement("ul");
  cardRating.classList.add("challenge-rating");
  cardMeta.append(cardRating);

  const ratingStar0 = document.createElement("li");
  ratingStar0.classList.add("challenge-rating-star");
  const ratingStar1 = document.createElement("li");
  ratingStar1.classList.add("challenge-rating-star");
  const ratingStar2 = document.createElement("li");
  ratingStar2.classList.add("challenge-rating-star");
  const ratingStar3 = document.createElement("li");
  ratingStar3.classList.add("challenge-rating-star");
  const ratingStar4 = document.createElement("li");
  ratingStar4.classList.add("challenge-rating-star");

  cardRating.append(ratingStar0);
  cardRating.append(ratingStar1);
  cardRating.append(ratingStar2);
  cardRating.append(ratingStar3);
  cardRating.append(ratingStar4);

  const allStars = document.querySelectorAll(".challenge-rating-star");
  // Highest rating = 5
  for (let i = 0; i < 5; i++) {
    if (i < data.rating) {
      allStars.item(target).classList.add("on");
    } else {
      allStars.item(target).classList.add("off");
    }
    target++;
  }

  const cardPlayers = document.createElement("small");
  cardPlayers.classList.add("challenge-size");
  cardPlayers.innerHTML = `${data.minParticipants}-${data.maxParticipants} participants`;
  cardMeta.append(cardPlayers);

  // Meta Container ---

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("challenge-description");
  cardDescription.innerHTML = `${data.description}`;
  cardItem.append(cardDescription);

  const cardCta = document.createElement("a");
  cardCta.classList.add("challenge-cta");
  cardCta.setAttribute("id", starId);
  cardCta.innerHTML = "Book this room";
  cardCta.addEventListener('click', function () { cardCtaBtnClick(cardItem) });// onclick btn
  cardItem.append(cardCta);
  starId++;
};

export { createCards };

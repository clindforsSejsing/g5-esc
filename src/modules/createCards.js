import { handleBooking } from "./booking.js";

// Calling DOM & Global Variables
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

  const cardMeta = document.createElement("div");
  cardMeta.classList.add("challenge-meta");
  cardItem.append(cardMeta);

  const cardRating = document.createElement("ul");
  cardRating.classList.add("challenge-rating");
  cardMeta.append(cardRating);

  /// function for creating star
  /// startype = "on", "half" or "off"
  const createStar = (startype) => {
    const ratingStar = document.createElement("li");
    ratingStar.classList.add("challenge-rating-star");
    ratingStar.classList.add(startype);
    cardRating.append(ratingStar);
  };
  // check if halfstar is required
  let halfstar = !Number.isInteger(data.rating);
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(data.rating)) {
      createStar("on");
    } else if (halfstar) {
      createStar("half");
      halfstar = false;
    } else {
      createStar("off");
    }
  }

  const cardPlayers = document.createElement("small");
  cardPlayers.classList.add("challenge-size");
  cardPlayers.innerHTML = `${data.minParticipants}-${data.maxParticipants} participants`;
  cardMeta.append(cardPlayers);

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("challenge-description");
  cardDescription.innerHTML = `${data.description}`;
  cardItem.append(cardDescription);

  const cardCta = document.createElement("a");
  cardCta.classList.add("challenge-cta");
  cardCta.innerHTML = "Book this room";
  cardCta.addEventListener("click", () => {
    handleBooking(
      data.title,
      data.minParticipants,
      data.maxParticipants,
      data.id
    );
  });
  cardItem.append(cardCta);
};
export { createCards };

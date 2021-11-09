/* Probably need a better solution for rating-stars */

const challengeList = document.querySelector(".challenges-list");
const createCards = (data) => {
  const cardItem = document.createElement("li");
  cardItem.classList.add("challenges-item");
  challengeList.append(cardItem);

  const cardImg = document.createElement("img");
  cardImg.classList.add("challenge-picture");
  cardImg.src = "./images/challenge.png";
  cardItem.append(cardImg);

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("challenge-title");
  cardTitle.innerHTML = `${data.title}`;
  cardItem.append(cardTitle);

  // --- Meta Container

  const cardMeta = document.createElement("div");
  cardMeta.classList.add("challenge-meta");
  cardItem.append(cardMeta);

  const cardRating = document.createElement("ul");
  cardRating.classList.add("challenge-rating");
  cardMeta.append(cardRating);

  // Find a better solution

  const ratingStar0 = document.createElement("li");
  ratingStar0.classList.add("challenge-rating-star");
  ratingStar0.classList.add("on");
  const ratingStar1 = document.createElement("li");
  ratingStar1.classList.add("challenge-rating-star");
  ratingStar1.classList.add("on");
  const ratingStar2 = document.createElement("li");
  ratingStar2.classList.add("challenge-rating-star");
  ratingStar2.classList.add("on");
  const ratingStar3 = document.createElement("li");
  ratingStar3.classList.add("challenge-rating-star");
  ratingStar3.classList.add("on");
  const ratingStar4 = document.createElement("li");
  ratingStar4.classList.add("challenge-rating-star");
  ratingStar4.classList.add("off");

  cardRating.append(ratingStar0);
  cardRating.append(ratingStar1);
  cardRating.append(ratingStar2);
  cardRating.append(ratingStar3);
  cardRating.append(ratingStar4);

  const cardPlayers = document.createElement("small");
  cardPlayers.classList.add("challenge-size");
  cardPlayers.innerHTML = `${data.minPlayers}-${data.maxPlayers} participants`;
  cardMeta.append(cardPlayers);

  // Meta Container ---

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("challenge-description");
  cardDescription.innerHTML = `${data.description}`;
  cardItem.append(cardDescription);

  const cardCta = document.createElement("a");
  cardCta.classList.add("challenge-cta");
  cardCta.innerHTML = "Book this room";
  cardItem.append(cardCta);
};

export { createCards };

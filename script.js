function totalNumberOfTravels() {
  return (total =
    document.querySelectorAll("#deal-week #deal-week-content img").length +
    document.querySelectorAll("#summer img").length +
    document.querySelectorAll("#deal-day img").length +
    document.querySelectorAll("#last-min img").length);
}

function printTotalNumOnFooter() {
  document.querySelector(
    "footer > div > div > div:last-child"
  ).innerText = `Total number of travels: ${totalNumberOfTravels()}`;
}

function addHotBadge() {
  let summerNode = document.querySelectorAll("#summer .overlay");
  for (overlay of summerNode) {
    overlay.innerHTML +=
      '<span class="badge position-absolute text-dark shadow d-flex justify-content-center align-items-center"><i class="bi bi-fire"></i></span>';
  }
}

function deleteCards() {
  let cardsNode = document.getElementsByClassName("card");
  console.log(cardsNode);
  for (card of cardsNode) {
    card.innerHTML = "";
  }
}

window.onload = () => {
  printTotalNumOnFooter();
  addHotBadge();
};

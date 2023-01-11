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

// TODO
// function overlaysHoverable() {
//   let dealWeekOverlays = document.querySelectorAll(
//     "#deal-week #deal-week-content img + .overlay"
//   );
//   for (overlay of dealWeekOverlays) {
//     overlay.addEventListener("s", (event) => {
//       console.log(event);
//     });
//   }
// }

function addHotBadge() {
  let summerNode = document.querySelectorAll("#summer .overlay p");
  for (badge of summerNode) {
    badge.innerHTML +=
      ' <span class="badge badge-warning"><i class="bi bi-fire"></i></span>';
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
  // overlaysHoverable();
  addHotBadge();
};

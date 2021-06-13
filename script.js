//======================== On Scroll Animation ===========================
AOS.init({
  offset: 400,
  duration: 500,
});

let cardImage = document.getElementsByClassName("cardImg");
for (let i = 0; i < cardImage.length; i++) {
  cardImage[i].textContent = "Event Image";
}

//======================== On Scroll Animation ===========================
AOS.init({
  offset: 400,
  duration: 500,
});

// Read More Button
function readMore(e) {
  if (e.innerHTML == "Read More") {
    e.innerHTML = "Read Less";
  } else {
    e.innerHTML = "Read More";
  }
  e.parentElement.classList.toggle("readMore");
}

let x = document.getElementById("searchBar");

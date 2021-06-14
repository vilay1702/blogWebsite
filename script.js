//======================== On Scroll Animation ===========================
AOS.init({
  offset: 400,
  duration: 500,
});

// Light And Dark Theme
let body = document.getElementById("mainBody");
let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  if (body.classList == "lightTheme") {
    body.classList.add("darkTheme");
    body.classList.remove("lightTheme");
  } else {
    body.classList.remove("darkTheme");
    body.classList.add("lightTheme");
  }
});

// Read More Button
function readMore(e) {
  // if (e.innerHTML == "Read More") {
  //   e.innerHTML = "Read Less";
  // } else {
  //   e.innerHTML = "Read More";
  // }
  e.parentElement.classList.toggle("readMore");
}

function searchBlog(e) {
  Array.from(items).forEach((item) => {
    if (
      item.textContent.toLowerCase().indexOf(searchBar.value.toLowerCase()) !=
      -1
    ) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

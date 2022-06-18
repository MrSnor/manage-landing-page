const nav = document.querySelector(".mobile-nav-menu");
const navToggle = document.querySelector(".mobile-nav-toggle")

// when menu is clicked
navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible")

  // if navbar isnt visible
  if (visiblity === "false") {
    nav.setAttribute("data-visible", "true")
    navToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflowY = "hidden";
  }
  // if navbar is visible
  else {
    document.body.style.overflowY = "auto";
    nav.setAttribute("data-visible", "false")
    navToggle.setAttribute("aria-expanded", "false")
  }
})

// to close menu when it(menu button (havent been perfected)) loses focus
navToggle.addEventListener('blur', () => {
  document.body.style.overflowY = "auto";
  nav.setAttribute("data-visible", "false")
  navToggle.setAttribute("aria-expanded", "false")
})

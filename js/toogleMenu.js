const nav = document.querySelector(".mobile-nav-menu");
const navToggle = document.querySelector(".mobile-nav-toggle")

// when menu is clicked
navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible")

  // if navbar isnt visible
  if (visiblity === "false") {
    nav.setAttribute("data-visible", "true")
    navToggle.setAttribute("aria-expanded", "true")
  }
  // if navbar is visible
  else {
    nav.setAttribute("data-visible", "false")
    navToggle.setAttribute("aria-expanded", "false")
  }
})

// to close menu when it(menu button (havent been perfected)) loses focus
navToggle.addEventListener('blur', () => {
  nav.setAttribute("data-visible", "false")
  navToggle.setAttribute("aria-expanded", "false")
})

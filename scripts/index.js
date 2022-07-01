var navLinks = document.getElementById("navLinks")

function showMenu() {
  navLinks.style.right = "0"
}

function hideMenu() {
  const newLocal = "-12rem"
  navLinks.style.right = newLocal
}
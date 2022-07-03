const navLinks = document.getElementById("navLinks")

function showMenu() {
  navLinks.className = navLinks.className.replace(' hidden', '')
}

function hideMenu() {
  navLinks.className = navLinks.className + ' hidden'
}
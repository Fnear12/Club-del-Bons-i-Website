const navLinks = document.getElementById("navLinks")

function showMenu() {
  navLinks.className = navLinks.className + ' show'
}

function hideMenu() {
  navLinks.className = navLinks.className.replace(' show', '')
}
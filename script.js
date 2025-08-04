const header = document.getElementById('sticky');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY < lastScrollY) {
    // Scrolling up
    header.classList.remove('hide');
  } else {
    // Scrolling down
    header.classList.add('hide');
  }
  lastScrollY = window.scrollY;
});
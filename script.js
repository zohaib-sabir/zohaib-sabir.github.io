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

// Hide loader after page loads
window.addEventListener("load", function () {
  const loaderOverlay = document.getElementById("loader-overlay");
  const pageContent = document.querySelector(".page-content");

  loaderOverlay.classList.add("fade-out");

  setTimeout(() => {
    loaderOverlay.style.display = "none";
    pageContent.style.display = "block";
  }, 500); // matches transition time
});
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

  window.addEventListener("load", function () {
    const loader = document.getElementById("loader-wrapper");
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // Matches the transition duration in CSS
  });

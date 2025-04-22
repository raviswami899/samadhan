// const toggle = document.getElementById("themeToggle");

// toggle.addEventListener("change", function () {
//   document.body.classList.toggle("light-mode");
// });


const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", function () {
  document.body.classList.toggle("light-mode");

  // Get all sections
  const allSections = document.querySelectorAll('.section');

  // Remove 'active' class from all sections
  allSections.forEach(section => section.classList.remove('active'));

  // Find the visible section
  const visibleSection = Array.from(allSections).find(section => {
    const rect = section.getBoundingClientRect();
    return (
      rect.top < window.innerHeight * 0.67 &&  // top portion within view
      rect.bottom > window.innerHeight * 0.33 // bottom portion within view
    );
  });

  let animationDelayOnThemeChange=700;
  // If a section is visible, re-add .active after 300ms
  if (visibleSection) {
    if(visibleSection.id === "product"){
      animationDelayOnThemeChange = 1300;
    }
    setTimeout(() => {
      visibleSection.classList.add('active');
    }, animationDelayOnThemeChange);
  }
});


$(document).ready(function () {
  let scrollTimer;

  $(window).on('scroll', function () {
    $('.theme-toggle-wrapper').css('display', 'none');

    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      $('.theme-toggle-wrapper').css('display', 'block');
    }, 350);
  });
});

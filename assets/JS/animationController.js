const observer = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      target.classList.add('active');
    } 
    // else if (target.id !== 'features') {
    //   target.classList.remove('active');
    // }
  });
}, {
  threshold: 0.33
});


document.querySelectorAll('.section').forEach(el => {
  observer.observe(el);
});


window.addEventListener("scroll", () => {
  const section = document.getElementById("customer-review-section");
  const position = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {
    section.classList.add("active");
  }
});

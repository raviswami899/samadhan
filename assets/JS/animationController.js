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



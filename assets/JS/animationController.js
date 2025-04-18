const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.2
  });
  
  document.querySelectorAll('.section').forEach(el => {
    observer.observe(el);
  });
  

  
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        entry.target.classList.remove('inactive');
      } else {
        entry.target.classList.remove('active');
        entry.target.classList.add('inactive');
      }
    });
  }, {
    threshold: 0.2
  });
  
  document.querySelectorAll('.section').forEach(el => {
    observer.observe(el);
  });
  

  
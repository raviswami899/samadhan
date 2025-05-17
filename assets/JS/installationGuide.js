$(document).ready(function() {
    const steps = $('.step-item');
    const contents = $('.step-content');
    let currentStep = 0;
    const radius = 200; // Adjust based on container size
  
    // Position steps in circle
    function positionSteps() {
      steps.each(function(index) {
        const angle = (index * (360 / steps.length)) - 90;
        const x = radius * Math.cos(angle * Math.PI / 180);
        const y = radius * Math.sin(angle * Math.PI / 180);
        $(this).css({
          left: 50 + x + 'px',
          top: 50 + y + 'px'
        });
      });
    }
  
    // Update active step
    function updateActiveStep(newIndex) {
      steps.removeClass('active');
      contents.removeClass('active');
      $(steps[newIndex]).addClass('active');
      $(contents[newIndex]).addClass('active');
    }
  
    // Handle scroll
    let lastScroll = 0;
    $(window).on('wheel', function(e) {
      const delta = e.originalEvent.deltaY;
      if (delta > 0 && currentStep < steps.length - 1) {
        currentStep++;
      } else if (delta < 0 && currentStep > 0) {
        currentStep--;
      }
      updateActiveStep(currentStep);
      lastScroll = delta;
    });
  
    // Initialize
    positionSteps();
    $(window).on('resize', positionSteps);
  });
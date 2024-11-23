$(document).ready(function () {
    // Apply ripple effect to the ripple container
    $('#ripple-container').ripples({
      resolution: 512,
      dropRadius: 20, // Radius of the ripple
      perturbance: 0.04, // Ripple smoothness
    });
  
    // Optional: Add ripples when clicking
    $('#ripple-container').on('click', function (e) {
      const x = e.pageX;
      const y = e.pageY;
  
      $(this).ripples('drop', x, y, 10, 0.04);
    });
  });
  
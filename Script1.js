document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calculate angle based on cursor position
    const angle = Math.atan2(y - height / 2, x - width / 2) * (180 / Math.PI);

    // Ensure positive angle (0-360 degrees)
    const adjustedAngle = (angle + 360) % 360;

    // Generate gradient dynamically
    const gradient = `linear-gradient(${adjustedAngle}deg, #ffd3d3, #fff5da, #ffeddc)`;

    // Apply the gradient
    document.body.style.background = gradient;
});



document.addEventListener('mousemove', (e) => {
  // Check if we're NOT on page6
  if (!document.body.classList.contains('page6')) {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calculate angle based on cursor position
    const angle = Math.atan2(y - height / 2, x - width / 2) * (180 / Math.PI);

    // Ensure positive angle (0-360 degrees)
    const adjustedAngle = (angle + 360) % 360;

    // Generate gradient dynamically
    const gradient = `linear-gradient(${adjustedAngle}deg, #ffd3d3, #fff5da, #ffeddc)`;

    // Apply the gradient
    document.body.style.background = gradient;
  }
});

document.addEventListener('mousemove', (e) => {
  // Skip gradient logic if the page has the "page6" class
  if (!document.body.classList.contains('page6')) {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calculate angle based on cursor position
    const angle = Math.atan2(y - height / 2, x - width / 2) * (180 / Math.PI);

    // Ensure positive angle (0-360 degrees)
    const adjustedAngle = (angle + 360) % 360;

    // Generate gradient dynamically
    const gradient = `linear-gradient(${adjustedAngle}deg, #ffd3d3, #fff5da, #ffeddc)`;

    // Apply the gradient
    document.body.style.background = gradient;
  }
});


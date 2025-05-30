document.getElementById('demoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Demo Scheduled Successfully!');
});



function scrollToDemo() {
  const demoSection = document.querySelector(".demo-form-section");
  if (demoSection) {
    demoSection.scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Demo section not found!");
  }
}

function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');
  navLinks.classList.toggle('show');
  navOverlay.classList.toggle('show');
  
  // Close menu when clicking overlay
  navOverlay.addEventListener('click', () => {
    navLinks.classList.remove('show');
    navOverlay.classList.remove('show');
  });
}

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

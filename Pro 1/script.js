// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50, // Adjust for header
      behavior: 'smooth'
    });
  });
});

// Fade-in Animation on Scroll
const faders = document.querySelectorAll('[data-fade="fade-in"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is in view
});

faders.forEach(fadeElement => observer.observe(fadeElement));

// Interactive Button Ripple Effect
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseover', function () {
    this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    this.style.transition = 'box-shadow 0.3s';
  });

  button.addEventListener('mouseout', function () {
    this.style.boxShadow = 'none';
  });
});
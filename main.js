// Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.getElementById('redirect').addEventListener('click', function() { 
    window.open('https://github.com/hebel1996/AbelGuest', '_blank');
});

document.getElementById('carStore').addEventListener('click', function () {
    window.open('https://github.com/hebel1996/AbelGuest', '_blank');
});

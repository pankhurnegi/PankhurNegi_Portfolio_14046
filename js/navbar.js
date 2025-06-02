function initializeNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  document.addEventListener('click', function (event) {
    const isNavbar = event.target.closest('#navbar');
    const isMenuOpen = navLinks.classList.contains('active');

    if (!isNavbar && isMenuOpen) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // Close mobile menu when window is resized to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}
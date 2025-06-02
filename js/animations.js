// Animation functionality
function initializeAnimations() {
  // Simple AOS (Animate On Scroll) implementation
  const animatedElements = document.querySelectorAll('[data-aos]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      } else {
        // Uncomment the line below if you want elements to animate every time they enter the viewport
        // entry.target.classList.remove('aos-animate');
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Add typing animation to hero text
  const heroTitle = document.querySelector('.hero-text h1');
  if (heroTitle) {
    heroTitle.classList.add('typing-animation');
    
    // Reset the animation after it completes
    setTimeout(() => {
      heroTitle.classList.remove('typing-animation');
    }, 4000);
  }
  
  // Add bounce animation to scroll indicator
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.classList.add('bounce');
  }
  
  // Project card hover effects
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('hover-shadow');
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('hover-shadow');
    });
  });
  
  // Skill card hover effects
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('hover-lift');
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('hover-lift');
    });
  });
}
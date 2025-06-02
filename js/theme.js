function initializeTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon'); // Icon inside the button
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme');

 function setIcon(isDark) {
  themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches);
  if (isDark) {
    document.body.classList.add('dark-mode');
  }
  setIcon(isDark);

  themeToggle.addEventListener('click', function () {
    const isDarkNow = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
    setIcon(isDarkNow);
  });

  prefersDarkScheme.addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.body.classList.add('dark-mode');
        setIcon(true);
      } else {
        document.body.classList.remove('dark-mode');
        setIcon(false);
      }
    }
  });
}


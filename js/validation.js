// Contact form functionality using jQuery
function initializeForm() {
  const $contactForm = $('#contactForm');

  if ($contactForm.length) {
    $contactForm.on('submit', function (e) {
      e.preventDefault();

      // Get form values
      const name = $.trim($('#name').val());
      const email = $.trim($('#email').val());
      const message = $.trim($('#message').val());

      // Simple validation
      let isValid = true;

      if (name == '') {
        markInvalid('#name', 'Please enter your name');
        isValid = false;
      } else {
        markValid('#name');
      }

      if (email === '') {
        markInvalid('#email', 'Please enter your email');
        isValid = false;
      } else if (!isValidEmail(email)) {
        markInvalid('#email', 'Please enter a valid email address');
        isValid = false;
      } else {
        markValid('#email');
      }

      if (message === '') {
        markInvalid('#message', 'Please enter your message');
        isValid = false;
      } else {
        markValid('#message');
      }

      if (isValid) {
        const $submitButton = $contactForm.find('button[type="submit"]');
        const originalText = $submitButton.text();

        $submitButton.prop('disabled', true).text('Sending...');

        setTimeout(() => {
          $contactForm[0].reset();

          const $successMessage = $('<div>')
            .addClass('form-success')
            .text('Your message has been sent successfully!');

          $contactForm.append($successMessage);

          $submitButton.prop('disabled', false).text(originalText);

          setTimeout(() => {
            $successMessage.remove();
          }, 5000);
        }, 1500);
      }
    });

    // Input validation functions
    function markInvalid(selector, message) {
      const $field = $(selector);
      $field.addClass('form-error');

      // Remove existing error message
      $field.siblings('.error-message').remove();

      // Add error message
      const $errorMessage = $('<span>')
        .addClass('error-message')
        .text(message)
        .css({
          color: 'var(--error-color)',
          fontSize: '0.8rem',
          marginTop: '4px',
          display: 'block'
        });

      $field.parent().append($errorMessage);
    }

    function markValid(selector) {
      const $field = $(selector);
      $field.removeClass('form-error');
      $field.siblings('.error-message').remove();
    }

    function isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email.toLowerCase());
    }

    // Clear error messages on typing
    $contactForm.find('input, textarea').on('input', function () {
      $(this).removeClass('form-error');
      $(this).siblings('.error-message').remove();
    });
  }
}

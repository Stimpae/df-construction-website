// src/scripts/formValidation.js

document.addEventListener('DOMContentLoaded', () => {
    // Get form elements
    const quoteForm = document.getElementById('quote-form')?.querySelector('form');
    const contactForm = document.getElementById('contact-form')?.querySelector('form');
    
    // UK phone number validation pattern
    // Validates formats like: 07123456789, 07123 456789, +44 7123 456789, etc.
    const ukPhonePattern = /^(\+44\s?|0)7\d{3}(\s?\d{3})(\s?\d{3})$/;
    
    // Add validation to Quote Form
    if (quoteForm) {
      const phoneInput = quoteForm.querySelector('#phone');
      
      // Add input validation for phone field
      if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
          validateUKPhoneNumber(e.target);
        });
      }
      
      // Form submission handler
      quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get all required inputs
        const requiredInputs = quoteForm.querySelectorAll('[required]');
        let isValid = true;
        
        // Check all required fields
        requiredInputs.forEach(input => {
          if (!input.value.trim()) {
            markInvalid(input, 'This field is required');
            isValid = false;
          } else {
            markValid(input);
          }
        });
        
        // Check phone number format
        if (phoneInput && phoneInput.value.trim() && !ukPhonePattern.test(phoneInput.value)) {
          markInvalid(phoneInput, 'Please enter a valid UK mobile number');
          isValid = false;
        }
        
        // Email validation
        const emailInput = quoteForm.querySelector('#email');
        if (emailInput && !validateEmail(emailInput.value)) {
          markInvalid(emailInput, 'Please enter a valid email address');
          isValid = false;
        }
        
        // If form is valid, submit it
        if (isValid) {
          // You can submit the form here or send data via AJAX
          console.log('Quote form is valid, submitting...');
          // quoteForm.submit(); // Uncomment to enable actual submission
          
          // Show success message
          showSuccessMessage(quoteForm, 'Your quote request has been submitted. We\'ll be in touch soon!');
        }
      });
    }
    
    // Add validation to Contact Form
    if (contactForm) {
      const phoneInput = contactForm.querySelector('#contact-phone');
      
      // Add input validation for phone field
      if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
          validateUKPhoneNumber(e.target);
        });
      }
      
      // Form submission handler
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get all required inputs
        const requiredInputs = contactForm.querySelectorAll('[required]');
        let isValid = true;
        
        // Check all required fields
        requiredInputs.forEach(input => {
          if (!input.value.trim()) {
            markInvalid(input, 'This field is required');
            isValid = false;
          } else {
            markValid(input);
          }
        });
        
        // Validate email format
        const emailInput = contactForm.querySelector('#contact-email');
        if (emailInput && !validateEmail(emailInput.value)) {
          markInvalid(emailInput, 'Please enter a valid email address');
          isValid = false;
        }
        
        // Check phone number format
        if (phoneInput && phoneInput.value.trim() && !ukPhonePattern.test(phoneInput.value)) {
          markInvalid(phoneInput, 'Please enter a valid UK mobile number');
          isValid = false;
        }
        
        // If form is valid, submit it
        if (isValid) {
          // You can submit the form here or send data via AJAX
          console.log('Contact form is valid, submitting...');
          // contactForm.submit(); // Uncomment to enable actual submission
          
          // Show success message
          showSuccessMessage(contactForm, 'Your message has been sent. We\'ll respond as soon as possible!');
        }
      });
    }
    
    // Helper functions
    function validateUKPhoneNumber(input) {
      if (input.value.trim() === '') return; // Skip empty field
      
      if (!ukPhonePattern.test(input.value)) {
        markInvalid(input, 'Please enter a valid UK mobile number');
      } else {
        markValid(input);
      }
    }
    
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
    
    function markInvalid(input, message) {
      // Add error class to input
      input.classList.add('border-red-500');
      input.classList.remove('border-white');
      
      // Create or update error message
      let errorElement = input.parentElement.querySelector('.error-message');
      if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message text-red-200 text-xs mt-1';
        input.parentElement.appendChild(errorElement);
      }
      errorElement.textContent = message;
    }
    
    function markValid(input) {
      // Remove error class
      input.classList.remove('border-red-500');
      input.classList.add('border-white');
      
      // Remove error message if exists
      const errorElement = input.parentElement.querySelector('.error-message');
      if (errorElement) {
        errorElement.remove();
      }
    }
    
    function showSuccessMessage(form, message) {
      // Hide the form
      const formElements = form.querySelectorAll('input, textarea, select, button, p');
      formElements.forEach(el => el.style.display = 'none');
      
      // Create success message
      const successDiv = document.createElement('div');
      successDiv.className = 'bg-green-600/20 border border-green-200 text-white p-6 rounded-md text-center';
      successDiv.innerHTML = `
        <div class="text-4xl mb-4">✓</div>
        <p class="text-xl mb-4">${message}</p>
        <button type="button" class="mt-4 px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-gray-100 transition-colors duration-200">
          Close
        </button>
      `;
      
      // Add click handler to close button
      successDiv.querySelector('button').addEventListener('click', () => {
        // Reset the form
        form.reset();
        
        // Show form elements again
        formElements.forEach(el => el.style.display = '');
        
        // Remove success message
        successDiv.remove();
        
        // Hide the form container
        const formContainer = form.closest('#quote-form, #contact-form');
        if (formContainer) {
          formContainer.classList.add('hidden');
        }
      });
      
      // Add to the DOM
      form.appendChild(successDiv);
    }
  });
// Get the form element
const form = document.getElementById('subscribe-form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the email input value
    const emailInput = form.querySelector('input[type="email"]').value;

    // Simple validation (you can expand this)
    if (emailInput) {
        alert(`Thank you for subscribing with ${emailInput}! You'll get updates on BSIT Batch 2025 capstone projects.`);
        form.reset(); // Reset the form after submission
    } else {
        alert('Please enter a valid email address.');
    }
});
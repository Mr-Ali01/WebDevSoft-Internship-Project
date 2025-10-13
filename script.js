const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    let errorMessage = '';

    // Validate Name
    if (name.length < 3) {
        isValid = false;
        errorMessage += 'Name must be at least 3 characters long.\n';
    }

    // Validate Email
    if (!email.toLowerCase().endsWith('@gmail.com')) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    // Validate Message
    if (message.length < 10) {
        isValid = false;
        errorMessage += 'Message must be at least 10 characters long.\n';
    }

    // Show errors or success
    if (!isValid) {
        alert(errorMessage);
    } else {
        alert('Thank you for contacting us, ' + name + '! Your message has been sent.');
        contactForm.reset();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (fullName.length < 2) {
            showError(fullNameInput, 'Please enter your full name');
            return;
        }

        if (!validateEmail(email)) {
            showError(emailInput, 'Please enter a valid email address');
            return;
        }

        if (password.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters long');
            return;
        }

        if (password !== confirmPassword) {
            showError(confirmPasswordInput, 'Passwords do not match');
            return;
        }

        // Mock signup success
        alert(`Account created successfully for ${fullName}! Welcoming you to LuminaLearn.`);
        
        // Redirect to login page
        window.location.href = './login.html';
    });

    // Helper: Simple email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Helper: Visual feedback for errors
    function showError(inputElement, message) {
        inputElement.style.borderColor = '#ff4d4d';
        inputElement.style.boxShadow = '0 0 0 3px rgba(255, 77, 77, 0.15)';
        
        alert(message);
        
        // Reset styles on input
        inputElement.addEventListener('input', function resetInput() {
            inputElement.style.borderColor = '';
            inputElement.style.boxShadow = '';
            inputElement.removeEventListener('input', resetInput);
        });
    }
});

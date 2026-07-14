document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Add submit validation
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;

        if (!validateEmail(email)) {
            showError(emailInput, 'Please enter a valid email address');
            return;
        }

        if (password.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            return;
        }

        // Mock login success
        alert(`Welcome to LuminaLearn! Logging in as: ${email}`);
        window.location.href = './index.html';
    });

    // Helper: Simple email regex validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Helper: Visual feedback for error
    function showError(inputElement, message) {
        // Simple error logging and visual feedback
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

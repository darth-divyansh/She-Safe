document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var passwordInput = document.getElementById("password");
        var phoneInput = document.getElementById("phone");

        if (!validateName(nameInput.value)) {
            alert("Please enter a valid name.");
            event.preventDefault();
        }

        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }

        if (!validatePassword(passwordInput.value)) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault();
        }

        if (!validatePhone(phoneInput.value)) {
            alert("Please enter a valid phone number.");
            event.preventDefault();
        }
    });

    function validateName(name) {
        return /^[a-zA-Z\s]+$/.test(name);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    function validatePhone(phone) {
        return /^\d{10}$/.test(phone);
    }
});





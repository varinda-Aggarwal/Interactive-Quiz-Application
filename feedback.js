document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.querySelector("form");
    const ageInput = document.querySelector("#age");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const termsCheckbox = document.querySelector("#terms");
    const messageTextarea = document.querySelector("#message");

    feedbackForm.addEventListener("submit", (event) => {
        const ageValue = ageInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const messageValue = messageTextarea.value.trim();

        if (!isValidAge(ageValue)) {
            alert("Please enter a valid age between 10 and 100.");
            event.preventDefault(); 
            return;
        }

        if (!isValidEmail(emailValue)) {
            alert("Please enter a valid email address.");
            event.preventDefault(); 
            return;
        }

        if (!isValidPassword(passwordValue)) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault(); 
            return;
        }

        if (!termsCheckbox.checked) {
            alert("You must agree to the terms and conditions.");
            event.preventDefault(); 
            return;
        }

        if (messageValue === "") {
            alert("Please enter a message.");
            event.preventDefault(); 
            return;
        }

        event.preventDefault(); 
        window.location.href = "thankyou3.html"; 
    });

    ageInput.addEventListener("input", () => {
        const ageValue = ageInput.value.trim();
        if (isValidAge(ageValue)) {
            ageInput.style.borderColor = "green";
        } else {
            ageInput.style.borderColor = "red";
        }
    });

    passwordInput.addEventListener("input", () => {
        const passwordValue = passwordInput.value.trim();
        const strengthMessage = document.querySelector("#password-strength-message");

        if (!strengthMessage) {
            const message = document.createElement("p");
            message.id = "password-strength-message";
            message.style.fontSize = "0.8rem";
            message.style.marginTop = "5px";
            passwordInput.parentElement.appendChild(message);
        }

        if (isValidPassword(passwordValue)) {
            strengthMessage.textContent = "Strong password!";
            strengthMessage.style.color = "green";
        } else {
            strengthMessage.textContent = "Password must be at least 8 characters.";
            strengthMessage.style.color = "red";
        }
    });

    function isValidAge(age) {
        const ageNumber = parseInt(age, 10);
        return !isNaN(ageNumber) && ageNumber >= 10 && ageNumber <= 100;
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function isValidPassword(password) {
        return password.length >= 8;
    }
});
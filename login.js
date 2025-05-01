document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");

    loginForm.addEventListener("submit", (event) => {
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value;

        if (!isValidUsername(usernameValue)) {
            alert("Please enter a valid username (minimum 3 characters).");
            event.preventDefault(); 
            return;
        }

        if (!isValidPassword(passwordValue)) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault(); 
            return;
        }

        event.preventDefault(); 
        window.location.href = "thankyou2.html";
    });

    function isValidUsername(username) {
        return username.length >= 3;
    }

    function isValidPassword(password) {
        return password.length >= 8; 
    }

    passwordInput.addEventListener("input", () => {
        const strengthMessage = document.querySelector("#password-strength-message");
        if (!strengthMessage) {
            const message = document.createElement("p");
            message.id = "password-strength-message";
            message.style.fontSize = "0.8rem";
            message.style.marginTop = "5px";
            passwordInput.parentElement.appendChild(message);
        }

        if (passwordInput.value.length >= 8) {
            strengthMessage.textContent = "Strong password!";
            strengthMessage.style.color = "green";
        } else {
            strengthMessage.textContent = "Password must be at least 8 characters long.";
            strengthMessage.style.color = "red";
        }
    });
});
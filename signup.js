document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.querySelector("form");
    const passwordInput = document.querySelector("#password");
    const emailInput = document.querySelector("#email");
    const inviteInput = document.querySelector("#invite");
    const inviteButton = document.querySelector(".btn-outline-primary");

    signUpForm.addEventListener("submit", (event) => {
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        if (!isValidEmail(emailValue)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        if (!isStrongPassword(passwordValue)) {
            alert("Password must be at least 8 characters long, include uppercase letters, lowercase letters, numbers, and symbols.");
            event.preventDefault();
            return;
        }

        const userData = {
            email: emailValue,
            password: passwordValue, 
        };
        console.log("User Data:", userData);
        localStorage.setItem("signUpData", JSON.stringify(userData));

        event.preventDefault();
        window.location.href = "./thankyou1.html";
    });

    inviteButton.addEventListener("click", (event) => {
        const inviteValue = inviteInput.value;
        if (!isValidEmail(inviteValue)) {
            alert("Please enter a valid email address to invite a friend.");
            event.preventDefault();
        } else {
            console.log("Invitation Email:", inviteValue);
            window.location.href = "thankyou1.html";
        }
    });

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function isStrongPassword(password) {
        const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongPasswordPattern.test(password);
    }

    passwordInput.addEventListener("input", () => {
        let strengthMessage = document.querySelector("#password-strength-message");
        if (!strengthMessage) {
            strengthMessage = document.createElement("p");
            strengthMessage.id = "password-strength-message";
            strengthMessage.style.fontSize = "0.8rem";
            strengthMessage.style.marginTop = "5px";
            passwordInput.parentElement.appendChild(strengthMessage);
        }

        if (isStrongPassword(passwordInput.value)) {
            strengthMessage.textContent = "Strong password!";
            strengthMessage.style.color = "green";
        } else {
            strengthMessage.textContent = "Weak password. Try using at least 8 characters, including uppercase, lowercase, numbers, and symbols.";
            strengthMessage.style.color = "red";
        }
    });
});

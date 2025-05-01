document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const subjectInput = document.querySelector("#subject");
    const messageInput = document.querySelector("#message");

    contactForm.addEventListener("submit", (event) => {
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const subjectValue = subjectInput.value.trim();
        const messageValue = messageInput.value.trim();

        if (!isValidName(nameValue)) {
            alert("Please enter a valid name (at least 2 characters).");
            event.preventDefault(); 
            return;
        }

        if (!isValidEmail(emailValue)) {
            alert("Please enter a valid email address.");
            event.preventDefault(); 
            return;
        }

        if (subjectValue === "") {
            alert("Subject cannot be empty.");
            event.preventDefault(); 
            return;
        }

        if (messageValue === "") {
            alert("Message cannot be empty.");
            event.preventDefault();
            return;
        }

        event.preventDefault(); 
        window.location.href = "thankyou4.html"; 
    });

    emailInput.addEventListener("input", () => {
        const emailValue = emailInput.value.trim();
        if (isValidEmail(emailValue)) {
            emailInput.style.borderColor = "green";
        } else {
            emailInput.style.borderColor = "red";
        }
    });

    function isValidName(name) {
        return name.length >= 2; 
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
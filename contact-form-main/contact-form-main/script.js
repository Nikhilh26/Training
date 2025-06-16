document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector("button[type='submit']");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelectorAll(".error-message").forEach(el => el.style.display = "none");
        document.querySelectorAll("input, textarea").forEach(el => el.classList.remove("input-error"));

        let hasError = false;

        const firstName = document.getElementById("first-name");
        if (firstName.value.trim() === "") {
            console.log("First name is empty");
            showError(firstName, "This field is required");
            hasError = true;
        }

        // Last Name
        const lastName = document.getElementById("last-name");
        if (lastName.value.trim() === "") {
            showError(lastName, "This field is required");
            hasError = true;
        }

        // Email
        const email = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError(email, "Please enter a valid email address");
            hasError = true;
        }

        // Query Type
        const queryTypeChecked = document.querySelector('input[name="query-type"]:checked');
        if (!queryTypeChecked) {
            document.getElementById("query-type-error").textContent = "Please select a query type";
            document.getElementById("query-type-error").style.display = "block";
            hasError = true;
        }

        // Message
        const message = document.getElementById("message");
        if (message.value.trim() === "") {
            showError(message, "This field is required");
            hasError = true;
        }

        // Consent checkbox
        const consent = document.getElementById("consent");
        if (!consent.checked) {
            document.getElementById("consent-error").textContent = "To submit this form, please consent to being contacted";
            document.getElementById("consent-error").style.display = "block";
            hasError = true;
        }

        if (!hasError) {
            alert("Form submitted successfully!");
        }
    });
    function showError(inputEl, message) {
        const errorEl = document.getElementById(`${inputEl.id}-error`);
        errorEl.textContent = message;
        errorEl.style.display = "block";
        inputEl.classList.add("input-error");
    }
});
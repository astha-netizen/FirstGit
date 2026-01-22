document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const studentId = document.getElementById("studentId").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (studentId === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Demo validation (replace with backend authentication)
    if (studentId === "student123" && password === "password") {
        alert("Login Successful!");
        errorMessage.textContent = "";
        // Redirect example:
        // window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid Student ID or Password.";
    }
});

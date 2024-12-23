document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Sample hardcoded credentials (you can replace this with an API call or database check)
    const validUsername = "admin";
    const validPassword = "password123"; // Change this to a more secure password in real use

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errorMessage = document.getElementById("error-message");

    // Check if the credentials are correct
    if (username === validUsername && password === validPassword) {
        // Save user login state to localStorage
        localStorage.setItem("userLoggedIn", true);
        
        // Redirect to the dashboard page
        window.location.href = "dashboard.html";
    } else {
        // Show error message if login fails
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.color = "red";
    }
});

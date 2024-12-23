// Add logout functionality
document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("userLoggedIn");
    window.location.href = "index.html";
});

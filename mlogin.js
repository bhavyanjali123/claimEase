document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');

    loginBtn.addEventListener('click', function() {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if(email && password) {
            // Redirect to manager dashboard
            window.location.href = "mDashboard.html";
        } else {
            alert("Please enter email and password!");
        }
    });
});

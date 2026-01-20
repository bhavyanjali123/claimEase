document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    loginBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // You can replace this with actual validation
        if(email === "" || password === "") {
            alert("Please enter both email and password!");
            return;
        }

        // For demo, any email/password combination works
        // Redirect to edashboard.html
        window.location.href = "edashboard.html";
    });
});

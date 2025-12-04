document.addEventListener('DOMContentLoaded', function() {
    const signupButton = document.querySelector('button');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorPopup = document.getElementById('errorPopup');

    signupButton.addEventListener('click', function(e) {
        e.preventDefault();

        const username = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || email === '' || password === '') {
            errorPopup.style.display = 'block';
            
            setTimeout(function() {
                errorPopup.style.display = 'none';
            }, 4000);
            return;
        }
        window.location.href = 'explore.html';
    });
});

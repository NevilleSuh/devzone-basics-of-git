document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('#loginForm');
    const signupForm = document.querySelector('#signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;

            if (!username || !password) {
                e.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;

            if (!username || !password) {
                e.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const showPasswordBtn = document.getElementById('show-password');
    const rememberCheckbox = document.getElementById('remember');
    const loginForm = document.querySelector('form');
    const enrollButton = document.getElementById('login');
    const forgotOnlineIdLink = document.querySelector('a[href="#"]:first-of-type');
    const forgotPasswordLink = document.querySelector('a[href="#"]:last-of-type');

    showPasswordBtn.addEventListener('click', function() {
        const isPasswordVisible = passwordInput.getAttribute('type') === 'text';
        passwordInput.setAttribute('type', isPasswordVisible ? 'password' : 'text');

        showPasswordBtn.textContent = isPasswordVisible ? 'Show' : 'Hide';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const onlineId = loginForm.querySelector('input[type="text"]').value.trim();
        const password = passwordInput.value.trim();
        if (!onlineId || !password) {
            alert('Please enter your Online ID and Password.');
            return;
        }
        console.log('Online ID:', onlineId);
        console.log('Password:', password);

        if (rememberCheckbox.checked) {
            localStorage.setItem('rememberedOnlineId', onlineId);
        } else {
            localStorage.removeItem('rememberedOnlineId');
        }

        // Redirect to a new page
        window.location.href = 'newPage.html'; 
    });

    // Enroll Now button
    enrollButton.addEventListener('click', function() {
        window.location.href = 'enrollPage.html';
    });

    forgotOnlineIdLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'forgotOnlineId.html';
    });

    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'forgotPassword.html';
    });

    const rememberedOnlineId = localStorage.getItem('rememberedOnlineId');
    if (rememberedOnlineId) {
        loginForm.querySelector('input[type="text"]').value = rememberedOnlineId;
        rememberCheckbox.checked = true;
    }
});

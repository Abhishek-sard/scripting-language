document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const correctPassword = 'password123'; // Set your correct password here
    const enteredPassword = document.getElementById('password').value;

    const message = document.getElementById('message');

    if (enteredPassword === correctPassword) {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Incorrect password!';
        message.style.color = 'red';
    }
});

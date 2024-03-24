document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;

            if (userExists(username)) {
                displayMessage('Username already exists', 'error');
                return;
            }

            if (!validateUsername(username)) {
                displayMessage('Username format is incorrect', 'error');
                return;
            }

            if (!validatePassword(password)) {
                displayMessage('Password must include uppercase and lowercase letters, and at least one number', 'error');
                return;
            }
            saveUser(username, password);
            displayMessage('Registration successful! Welcome, ' + username, 'success');
        });
    }

    function userExists(username) {
        return localStorage.getItem(username) !== null;
    }

    function validateUsername(username) {
        return username.length >= 3;
    }

    function validatePassword(password) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        return hasUpperCase && hasLowerCase && hasNumbers;
    }

    function saveUser(username, password) {
        localStorage.setItem(username, JSON.stringify({ password: password }));
    }

    function displayMessage(message, type) {
        const messageElement = document.getElementById('message');
        messageElement.innerText = message;
        messageElement.className = type;
    }
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const username = document.getElementById('login-username').value;
          const password = document.getElementById('login-password').value;
          const storedUserData = localStorage.getItem(username);

          if (storedUserData) {
              const userData = JSON.parse(storedUserData);
              if (userData.password === password) {
                  sessionStorage.setItem('loggedInUser', username);
                  displayMessage('Login successful!', 'success');
                  updateLoginStatus();
              } else {
                  displayMessage('Incorrect password.', 'error');
              }
          } else {
              displayMessage('User not found.', 'error');
          }
      });
  }
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
          sessionStorage.removeItem('loggedInUser');
          updateLoginStatus();
      });
  }
  function updateLoginStatus() {
      const loggedInUser = sessionStorage.getItem('loggedInUser');
      const userInfoDiv = document.getElementById('user-info');
      const userNameSpan = document.getElementById('user-name');

      if (loggedInUser) {
          userNameSpan.textContent = loggedInUser;
          userInfoDiv.style.display = 'block';
      } else {
          userInfoDiv.style.display = 'none';
      }
  }
});


document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    const loginLink = document.getElementById('login-link');
    const signUpLink = document.getElementById('sign-up-link');
    const logoutLink = document.getElementById('logout-link');

    if (loginLink) {
        loginLink.addEventListener('click', function() {
            sessionStorage.setItem('preLoginUrl', window.location.href);
        });
    }
    if (loggedInUser) {
        if (loginLink) loginLink.style.display = 'none';
        if (signUpLink) signUpLink.style.display = 'none';
        if (logoutLink) logoutLink.style.display = 'block';
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (signUpLink) signUpLink.style.display = 'block';
        if (logoutLink) logoutLink.style.display = 'none';
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', function() {
            sessionStorage.removeItem('loggedInUser');
            sessionStorage.removeItem('preLoginUrl');
            window.location.reload(); 
        });
    }

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const username = document.getElementById('login-username').value;
          const password = document.getElementById('login-password').value;

          if (checkCredentials(username, password)) {
              sessionStorage.setItem('loggedInUser', username);
              window.location.href = 'index.html'; 
          } else {
              displayMessage('Incorrect username or password.', 'error');
          }
      });
  }
    updateLoginStatus();

    function updateLoginStatus() {
        const loggedInUser = sessionStorage.getItem('loggedInUser');
    }
  function checkCredentials(username, password) {
      var storedData = localStorage.getItem(username);
      if (storedData) {
          var userData = JSON.parse(storedData);
          return userData.password === password;
      }
      return false;
  }

  function displayMessage(message, type) {
      const messageElement = document.getElementById('message');
      if(messageElement){
          messageElement.innerText = message;
          messageElement.className = type;
      }
  }
});
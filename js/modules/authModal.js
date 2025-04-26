// User data structure in localStorage
const USER_DATA_KEY = 'users';

// Initialize auth modal and form validation
export function initAuthModal() {
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.getElementById('closeModal');
  const logInBtn = document.querySelector('.login-btn');
  const signUpBtn = document.querySelector('.register-btn');
  const loginBody = document.querySelector('.login-body');
  const signUpBody = document.querySelector('.signup-body');
  const authBtn = document.querySelector('.authBtn');

  // Form elements
  const loginForm = document.querySelector('.login-body .loginForm');
  const signupForm = document.querySelector('.signup-body .loginForm');

  // Initialize users array in localStorage if it doesn't exist
  if (!localStorage.getItem(USER_DATA_KEY)) {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify([]));
  }

  // const cartLink = document.getElementById('cartLink');

  // cartLink.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  //   if (currentUser) {
  //     // User is logged in
  //     window.location.href = 'cart.html';
  //   } else {
  //     // User is NOT logged in
  //     alert('You must log in to view your cart.');
  //     document.getElementById('loginModal').style.display = 'flex'; // Open login modal if you want
  //   }
  // });

  const cartLink = document.getElementById('cartLink');

  cartLink.addEventListener('click', function (e) {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
      // User is logged in - redirect to cart
      window.location.href = 'cart.html';
    } else {
      // User is not logged in - show login modal
      alert('You must log in to view your cart.');
      document.getElementById('loginModal').style.display = 'flex';
    }
  });

  // Modal control functions
  authBtn.addEventListener('click', function () {
    loginModal.style.display = 'flex';
    // Reset forms when modal opens
    resetForms();
    // Show login by default
    showLogin();
  });

  closeModal.addEventListener('click', function () {
    loginModal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  // Toggle between login and signup
  logInBtn.addEventListener('click', showLogin);
  signUpBtn.addEventListener('click', showSignup);

  // Form submissions
  loginForm.addEventListener('submit', handleLogin);
  signupForm.addEventListener('submit', handleSignup);

  function showLogin() {
    signUpBtn.classList.remove('btn-active');
    logInBtn.classList.add('btn-active');
    loginBody.classList.remove('hide');
    signUpBody.classList.add('hide');
  }

  function showSignup() {
    signUpBtn.classList.add('btn-active');
    logInBtn.classList.remove('btn-active');
    loginBody.classList.add('hide');
    signUpBody.classList.remove('hide');
  }

  function resetForms() {
    loginForm.reset();
    signupForm.reset();
    clearErrors();
  }

  function clearErrors() {
    // Clear all error messages
    document.querySelectorAll('.error').forEach((el) => {
      el.textContent = '';
      el.classList.add('hide');
    });
  }

  // Validation functions
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePassword(password) {
    return password.length >= 6;
  }

  function validateName(name) {
    const nameWithNumbersRegex = /^[a-zA-Z\s'-]+[0-9]*$/;
    name = name.trim();
    return name.length >= 2 && nameWithNumbersRegex.test(name);
  }

  function validatePhone(phone) {
    const egyptPhoneRegex = /^(010|011|012|015)[0-9]{8}$/;
    return egyptPhoneRegex.test(phone.trim());
  }

  function passwordsMatch(password, confirmPassword) {
    return password === confirmPassword;
  }

  function handleLogin(e) {
    e.preventDefault();
    clearErrors();

    const email = loginForm.email.value;
    const password = loginForm.password.value;
    let isValid = true;

    // Email validation
    if (!email) {
      showError('emailError', 'Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      showError('emailError', 'Please enter a valid email');
      isValid = false;
    }

    // Password validation
    if (!password) {
      showError('passwordError', 'Password is required');
      isValid = false;
    } else if (!validatePassword(password)) {
      showError('passwordError', 'Password must be at least 6 characters');
      isValid = false;
    }

    if (isValid) {
      const users = JSON.parse(localStorage.getItem(USER_DATA_KEY));
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Successful login
        alert('Login successful!');
        loginModal.style.display = 'none';
        // Here you can set user as logged in (e.g., in localStorage or state)
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Example redirect

        updateNavbarUser(); // <<< Add this
      } else {
        showError('passwordError', 'Invalid email or password');
      }
    }
  }

  function handleSignup(e) {
    e.preventDefault();
    clearErrors();

    const name = signupForm.name.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    const confirmPassword = signupForm.confirm.value;
    const phone = signupForm.phone.value;
    let isValid = true;

    // Name validation
    if (!name) {
      showError('nameError', 'Name is required');
      isValid = false;
    } else if (!validateName(name)) {
      showError('nameError', 'Enter Valid Name');
      isValid = false;
    }

    // Email validation
    if (!email) {
      showError('emailErrorSignup', 'Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      showError('emailErrorSignup', 'Please enter a valid email');
      isValid = false;
    }

    // Password validation
    if (!password) {
      showError('passwordErrorSignup', 'Password is required');
      isValid = false;
    } else if (!validatePassword(password)) {
      showError(
        'passwordErrorSignup',
        'Password must be at least 6 characters'
      );
      isValid = false;
    }

    // Confirm password validation
    if (!confirmPassword) {
      showError('confirmPasswordError', 'Please confirm your password');
      isValid = false;
    } else if (!passwordsMatch(password, confirmPassword)) {
      showError('confirmPasswordError', 'Passwords do not match');
      isValid = false;
    }

    // Phone validation
    if (!phone) {
      showError('phoneError', 'Phone number is required');
      isValid = false;
    } else if (!validatePhone(phone)) {
      showError(
        'phoneError',
        'Please enter a valid phone number (10-15 digits)'
      );
      isValid = false;
    }

    if (isValid) {
      const users = JSON.parse(localStorage.getItem(USER_DATA_KEY));

      // Check if email already exists
      if (users.some((u) => u.email === email)) {
        showError('emailError', 'Email already registered');
        return;
      }

      // Create new user object
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
        phone,
        date: new Date().toISOString(),
      };

      // Save to localStorage
      users.push(newUser);
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(users));

      // Show success and switch to login
      alert('Registration successful! Please login.');
      showLogin();
      loginForm.reset();
    }
  }

  function showError(fieldId, message) {
    console.log('error function');

    const errorElement = document.querySelector(`.${fieldId}`);
    errorElement.textContent = message;
    errorElement.classList.remove('hide');
  }

  updateNavbarUser(); // Update navbar when page loads
}

function updateNavbarUser() {
  const authBtn = document.querySelector('.authBtn');
  const navLinks = document.querySelector('.navLinks');

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
    // Change "Login" button to user's name
    authBtn.textContent = currentUser.name;
    authBtn.style.pointerEvents = 'none'; // Make the button not clickable when user is logged in

    // If logout button doesn't exist, create it
    if (!document.querySelector('.logoutBtn')) {
      const logoutLi = document.createElement('li');
      const logoutBtn = document.createElement('a');
      logoutBtn.textContent = 'Logout';
      logoutBtn.classList.add('logoutBtn');
      logoutBtn.href = '#';
      logoutLi.appendChild(logoutBtn);
      navLinks.appendChild(logoutLi);

      // Logout functionality
      logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('currentUser');
        location.reload(); // Reload page to reset navbar
      });
    }
  } else {
    // No user: Show "Login"
    authBtn.textContent = 'Login';
    authBtn.style.pointerEvents = 'auto'; // Make it clickable again

    // Remove logout button if it exists
    const logoutBtn = document.querySelector('.logoutBtn');
    if (logoutBtn) {
      logoutBtn.parentElement.remove();
    }
  }
}

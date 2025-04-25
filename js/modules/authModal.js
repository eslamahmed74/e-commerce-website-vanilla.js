export function initAuthModal() {
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.getElementById('closeModal');
  const logInBtn = document.querySelector('.login-btn');
  const signUpBtn = document.querySelector('.register-btn');
  const loginBody = document.querySelector('.login-body');
  const signUpBody = document.querySelector('.signup-body');
  const authBtn = document.querySelector('.authBtn');

  authBtn.addEventListener('click', function () {
    loginModal.style.display = 'flex';
  });

  closeModal.addEventListener('click', function () {
    loginModal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  logInBtn.addEventListener('click', () => {
    signUpBtn.classList.remove('btn-active');
    logInBtn.classList.add('btn-active');
    loginBody.classList.remove('hide');
    signUpBody.classList.add('hide');
  });

  signUpBtn.addEventListener('click', () => {
    signUpBtn.classList.add('btn-active');
    logInBtn.classList.remove('btn-active');
    loginBody.classList.add('hide');
    signUpBody.classList.remove('hide');
  });
}

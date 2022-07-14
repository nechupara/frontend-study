const fullNameInput = document.querySelector('input[name="fullName"]');
const phoneInput = document.querySelector('input[name="phone"]');

fullNameInput.addEventListener('input', event => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  user.fullName = event.target.value;

  localStorage.setItem('user', JSON.stringify(user));
});

phoneInput.addEventListener('input', event => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  user.phone = event.target.value;

  localStorage.setItem('user', JSON.stringify(user));
});

document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  if (user.fullName) {
    fullNameInput.value = user.fullName;
  }

  if (user.phone) {
    phoneInput.value = user.phone;
  }

  fullNameInput.focus();
});

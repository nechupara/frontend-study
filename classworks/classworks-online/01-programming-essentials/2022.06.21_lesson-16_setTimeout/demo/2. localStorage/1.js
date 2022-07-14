const fullNameInput = document.querySelector('input[name="fullName"]');
const phoneInput = document.querySelector('input[name="phone"]');

fullNameInput.addEventListener('input', event => {
  localStorage.setItem('fullName', event.target.value);
});

phoneInput.addEventListener('input', event => {
  localStorage.setItem('phone', event.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
  const fullName = localStorage.getItem('fullName');
  const phone = localStorage.getItem('phone');

  if (fullName) {
    fullNameInput.value = fullName;
  }

  if (phone) {
    phoneInput.value = phone;
  }

  fullNameInput.focus();
});

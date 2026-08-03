const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

const fields = {
  name: { input: document.getElementById('name'), group: document.getElementById('nameGroup'), error: document.getElementById('nameError') },
  email: { input: document.getElementById('email'), group: document.getElementById('emailGroup'), error: document.getElementById('emailError') },
  phone: { input: document.getElementById('phone'), group: document.getElementById('phoneGroup'), error: document.getElementById('phoneError') },
  message: { input: document.getElementById('message'), group: document.getElementById('messageGroup'), error: document.getElementById('messageError') }
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9]+$/;

function showError(key, msg) {
  fields[key].group.classList.add('invalid');
  fields[key].error.textContent = msg;
}
function clearError(key) {
  fields[key].group.classList.remove('invalid');
  fields[key].error.textContent = '';
}

function validateField(key) {
  const value = fields[key].input.value.trim();
  if (value === '') { showError(key, 'This field cannot be empty.'); return false; }
  if (key === 'email' && !EMAIL_PATTERN.test(value)) { showError(key, 'Enter a valid email address.'); return false; }
  if (key === 'phone' && !PHONE_PATTERN.test(value)) { showError(key, 'Digits only, please.'); return false; }
  clearError(key);
  return true;
}

Object.keys(fields).forEach(function (key) {
  fields[key].input.addEventListener('blur', function () { validateField(key); });
  fields[key].input.addEventListener('input', function () {
    if (fields[key].group.classList.contains('invalid')) validateField(key);
  });
});

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let allValid = true;
  Object.keys(fields).forEach(function (key) { if (!validateField(key)) allValid = false; });

  if (allValid) {
    formSuccess.classList.add('show');
    contactForm.reset();
    setTimeout(function () { formSuccess.classList.remove('show'); }, 4000);
  } else {
    formSuccess.classList.remove('show');
  }
});

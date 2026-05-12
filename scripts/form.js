var currentPlan = '';

function openModal(btn) {
  currentPlan = btn.dataset.plan;
  document.getElementById('modal-title').textContent = 'Get started with ' + currentPlan;
  document.getElementById('signup-form').reset();
  document.getElementById('signup-overlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('signup-overlay').style.display = 'none';
}

document.getElementById('signup-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var name    = document.getElementById('f-name').value.trim();
  var email   = document.getElementById('f-email').value.trim();
  var company = document.getElementById('f-company').value.trim();
  closeModal();
  alert(
    'Account created!\n\n' +
    'Plan: ' + currentPlan + '\n' +
    'Name: ' + name + '\n' +
    'Email: ' + email +
    (company ? '\nCompany: ' + company : '')
  );
});

/*let users = [
    { email: 'cressf67@googlemail.com', 'password': 'test123'}
];

function addUser(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    users.push({email: email.value, password: password.value});
    //weiterleitung zu Login Seite + Nachricht anzeigen: "Erfolgreiche Registrierung"

    window.location.href = 'login.html?msg=Du hast dich erfolgreich registriert';
}
*/
// Load users from LocalStorage or initialize with default data
/**
 * Main function called by the form onsubmit
 */
function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (password !== confirm) {
    alert("Passwords do not match");
    return;
  }

  const newUser = {
    id: Date.now(),
    name: name,
    email: email,
    password: password,
  };

  saveUser(newUser); // Llamamos a la función de script.js
  showSuccessAnimation();
}

function showSuccessAnimation() {
  const banner = document.getElementById("success-banner");
  if (banner) {
    banner.classList.remove("d-none");
    setTimeout(() => {
      banner.classList.add("show-banner");
    }, 100);
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  } else {
    window.location.href = "login.html";
  }
}

/**
 * Enables or disables the signup button based on the privacy checkbox
 */
function toggleSignupButton() {
  const checkbox = document.getElementById("privacy-policy");
  const signupBtn = document.getElementById("signup-btn");

  // El botón se habilita solo si el checkbox está marcado
  signupBtn.disabled = !checkbox.checked;
}

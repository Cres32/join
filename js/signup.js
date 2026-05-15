// Load users from LocalStorage or create an empty array
let users = JSON.parse(localStorage.getItem("users")) || [];

/**
 * Main function to handle user registration
 */
function addUser() {
  const data = getFormData();

  if (isInvalid(data)) return;

  saveUser(data);
  window.location.href = "index.html?msg=Registered successfully";
}

/**
 * Collects values from the form
 */
function getFormData() {
  return {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirm: document.getElementById("confirmPassword").value,
  };
}

/**
 * Validates the data and shows messages if necessary
 */
function isInvalid(data) {
  if (data.password !== data.confirm) {
    showMessage("Passwords do not match.", "red");
    return true;
  }
  if (users.some((u) => u.email === data.email)) {
    showMessage("Email already registered.", "red");
    return true;
  }
  return false;
}

/**
 * Saves the new user to the global array and LocalStorage
 */
function saveUser(data) {
  users.push({
    id: Date.now(),
    name: data.name,
    email: data.email,
    password: data.password,
  });
  localStorage.setItem("users", JSON.stringify(users));
}

/**
 * Common function for redirection.
 */
function goToLogin() {
  window.location.href = "index.html";
}

/**
 * Helper to display error messages.
 */
function showMessage(text, color) {
  const msgBox = document.getElementById("msgBox");
  if (msgBox) {
    msgBox.innerHTML = text;
    msgBox.style.display = "block";
    msgBox.style.color = color;
  }
}

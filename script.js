/**
 * Global shared data and authentication logic
 */
let users = JSON.parse(localStorage.getItem("users")) || [
  { email: "test@test.com", password: "123", name: "Tester" },
];

function goToLogin() {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("activeUser");
  window.location.href = "login.html";
}

function saveUser(newUser) {
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
}

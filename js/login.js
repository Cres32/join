function init() {
  const splash = document.getElementById("splash-overlay");

  setTimeout(() => {
    if (splash) {
      splash.classList.add("fade-background");
    }

    setTimeout(() => {
      window.location.href = "login.html";
    }, 500); 
  }, 1000);
}

// Add this at the very top of js/login.js
// It loads the users from LocalStorage so the login function can find them
let users = JSON.parse(localStorage.getItem("users")) || [
  {
    email: "cressf67@googlemail.com",
    password: "test123",
    name: "Default User",
  },
];

/**
 * Main login function
 */
function login() {
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const msgBox = document.getElementById("msgBox");

  // Clear previous styles/messages
  msgBox.innerHTML = "";
  msgBox.style.display = "none";

  // Assuming 'users' is your global array of user objects
  if (typeof users !== "undefined") {
    const user = users.find(
      (u) => u.email === emailField.value && u.password === passwordField.value
    );

    if (user) {
      handleSuccessfulLogin(user);
    } else {
      handleFailedLogin(msgBox);
    }
  } else {
    console.error("User database not found. Please check your scripts.");
  }
}

function handleSuccessfulLogin(user) {
  localStorage.setItem(
    "activeUser",
    JSON.stringify({
      name: user.name,
      email: user.email,
    })
  );
  window.location.href = "summary.html";
}

function handleFailedLogin(msgBox) {
  msgBox.style.display = "block";
  msgBox.innerHTML = "Invalid email or password";
  msgBox.style.color = "red";

  // Optional: add a visual cue to the inputs
  document.getElementById("email").classList.add("input-error");
}

// Helper function to show the error
function showErrorMessage(msgBox, message) {
  if (msgBox) {
    msgBox.style.display = "block";
    msgBox.innerHTML = message;
    msgBox.style.color = "red";
  }
}

function guestLogin() {
  localStorage.setItem(
    "activeUser",
    JSON.stringify({
      name: "Guest",
      email: "guest@example.com",
    })
  );
  window.location.href = "summary.html";
}

function goToSignUp() {
  window.location.href = "signup.html";
}

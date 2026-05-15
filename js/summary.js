// 1. Check authentication immediately
if (!localStorage.getItem("activeUser")) {
  window.location.href = "index.html";
}

/**
 * Main initialization for Summary page
 */
function initSummary() {
  setGreeting();
  displayUserName();
  renderSummaryNumbers(); 
}

/**
 * Sets the greeting based on the current time of day
 */
function setGreeting() {
  const hour = new Date().getHours();
  const greetingElement = document.getElementById("greetingText");
  let greeting = "Good evening,";

  if (hour < 12) greeting = "Good morning,";
  else if (hour < 18) greeting = "Good afternoon,";

  if (greetingElement) greetingElement.innerText = greeting;
}

/**
 * Retrieves the logged-in user name from LocalStorage
 */
function displayUserName() {
  const activeUserRaw = localStorage.getItem("activeUser");
  const nameDisplay = document.getElementById("userNameDisplay");

  if (!nameDisplay) return;

  if (activeUserRaw) {
    try {
      const activeUser = JSON.parse(activeUserRaw);

      nameDisplay.innerText = activeUser.name || activeUser;
    } catch (e) {

      nameDisplay.innerText = activeUserRaw;
    }
  } else {
    nameDisplay.innerText = "Guest";
  }
}

/**
 * Logic to count tasks and update the dashboard numbers
 */
function renderSummaryNumbers() {

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  updateElementText(
    "todo-count",
    tasks.filter((t) => t.status === "todo").length
  );
  updateElementText(
    "done-count",
    tasks.filter((t) => t.status === "done").length
  );
  updateElementText("board-count", tasks.length);
  updateElementText(
    "progress-count",
    tasks.filter((t) => t.status === "progress").length
  );
  updateElementText(
    "feedback-count",
    tasks.filter((t) => t.status === "feedback").length
  );
  updateUrgentTask(tasks);
}

/**
 * Helper function to update text safely
 */
function updateElementText(id, value) {
  const element = document.getElementById(id);
  if (element) element.innerText = value;
}

function updateUrgentTask(tasks) {
  const urgentTasks = tasks.filter((t) => t.priority === "urgent");
  updateElementText("urgent-count", urgentTasks.length);
}

/*
// Esta es la "llave" que arranca todo cuando la página está lista
document.addEventListener("DOMContentLoaded", () => {
    initSummary();
});
*/

initSummary();

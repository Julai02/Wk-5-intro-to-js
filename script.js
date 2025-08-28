// 🎯 Part 1: Variables, Data Types, Conditionals
function checkAge() {
  const age = parseInt(document.getElementById("userAge").value);
  const result = document.getElementById("ageResult");

  if (isNaN(age)) {
    result.textContent = "Please enter a valid number.";
  } else if (age >= 18) {
    result.textContent = "You're eligible!";
  } else {
    result.textContent = "Sorry, you're too young.";
  }
}

// ❤️ Part 2: Functions
function showFormattedName(name) {
  const formatted = formatName(name);
  document.getElementById("formattedName").textContent = formatted;
}

function formatName(name) {
  return `👤 Welcome, ${name.charAt(0).toUpperCase() + name.slice(1)}!`;
}

// 🔁 Part 3: Loops
function countdown() {
  const list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear previous items
  for (let i = 5; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
  }
}

const items = ["HTML", "CSS", "JavaScript"];
items.forEach((item) => {
  console.log(`Learning: ${item}`);
});

// 🌐 Part 4: DOM Manipulation
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function addNewItem() {
  const list = document.getElementById("dynamicList");
  const newItem = document.createElement("li");
  newItem.textContent = "🆕 New item added!";
  list.appendChild(newItem);
}

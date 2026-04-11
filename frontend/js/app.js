
const API = "https://YOUR-RENDER-URL";

function saveToken(token) {
  localStorage.setItem("token", token);
}

function getToken() {
  return localStorage.getItem("token");
}

// LOGIN
async function login() {
  const res = await fetch(API + "/api/auth/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });

  const data = await res.json();

  if (data.token) {
    saveToken(data.token);
    window.location = "dashboard.html";
  } else {
    alert(data.error);
  }
}

// REGISTER
async function register() {
  await fetch(API + "/api/auth/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });

  alert("Registered!");
  window.location = "login.html";
}

// GET BALANCE
async function loadBalance() {
  const res = await fetch(API + "/api/wallet", {
    headers: {
      Authorization: "Bearer " + getToken()
    }
  });

  const data = await res.json();
  document.getElementById("balance").innerText = data.balance || 0;
}

// DEPOSIT
async function deposit() {
  await fetch(API + "/api/tx/deposit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    },
    body: JSON.stringify({ amount: amount.value })
  });

  alert("Deposit requested");
}

// WITHDRAW
async function withdraw() {
  await fetch(API + "/api/tx/withdraw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    },
    body: JSON.stringify({ amount: amount.value })
  });

  alert("Withdraw requested");
}

// LOGOUT
function logout() {
  localStorage.removeItem("token");
  window.location = "login.html";
}

// AUTO LOAD
if (window.location.pathname.includes("dashboard")) {
  loadBalance();
    }

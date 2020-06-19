
function hideLogin() {
  var x = document.getElementById("LoginContainer");
  x.style.display = "none";
}
function showLogin() {
  var x = document.getElementById("LoginContainer");
  x.style.display = "block";
}


function hideMain() {
  var x = document.getElementById("Main");
  x.style.display = "none";
}

function showMain() {
  var x = document.getElementById("Main");
  x.style.display = "block";
}

function hideAdd() {
  var x = document.getElementById("AddContainer");
  x.style.display = "none";
}
function showAdd() {
  var x = document.getElementById("AddContainer");
  x.style.display = "block";
}

function hideEdit() {
  var x = document.getElementById("EditContainer");
  x.style.display = "none";
}
function showEdit() {
  var x = document.getElementById("EditContainer");
  x.style.display = "block";
}

function hideAll() {
  hideLogin();
  hideMain();
  hideAdd();
}

function showAll() {
  showLogin();
  showMain();
  showAdd();
}

function login() {
  hideLogin();
  showMain();
}

function register() {
  hideLogin();
  showMain();
}

function add() {
  showAdd();
}

function edit(index) {
  showEdit();
}

function edit() {
  showEdit();
}

function backToLogin() {
  hideAll();
  showLogin();
}

function backToMain() {
  hideAll();
  showMain();
}

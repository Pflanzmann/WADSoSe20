
function hideLogin() {
    var x = document.getElementById("LoginContainer");
    x.style.display = "none"; 
  }
function showLogin(){
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


function hideUpdate() {
  var x = document.getElementById("Update");
  x.style.display = "none";
}
function showUpdate() {
  var x = document.getElementById("Update");
  x.style.display = "block";
}

function hideAll(){
  hideLogin();
  hideMain();
  hideAdd();
  hideUpdate();
}

function showAll(){
  showLogin();
  showMain();
  showAdd();
  showUpdate();
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
//  hideMain();
  showAdd();
}

function update() {
//  hideMain();
  showUpdate();
}

function backToLogin(){
  hideAll();
  showLogin();
}

function backToMain(){
  hideAll();
  showMain();
}

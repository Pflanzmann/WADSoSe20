
function HideLogin() {
    var x = document.getElementById("Login");
    x.style.display = "none"; 
  }
function ShowLogin(){
  var x = document.getElementById("Login");
  x.style.display = "block";   
}


function HideMain() {
  var x = document.getElementById("Main");
  x.style.display = "none";
}
function ShowMain() {
  var x = document.getElementById("Main");
  x.style.display = "block";
}


function HideAdd() {
  var x = document.getElementById("Add");
  x.style.display = "none";
}
function ShowAdd() {
  var x = document.getElementById("Add");
  x.style.display = "block";
}


function HideUpdate() {
  var x = document.getElementById("Update");
  x.style.display = "none";
}
function ShowUpdate() {
  var x = document.getElementById("Update");
  x.style.display = "block";
}

function HideAll(){
  HideLogin();
  HideMain();
  HideAdd();
  HideUpdate();
}

function ShowAll(){
  ShowLogin();
  ShowMain();
  ShowAdd();
  ShowUpdate();
}

function Login() {
  HideLogin();
  ShowMain();
}

function Register() {
  HideLogin();
  ShowMain();
}

function Add() {
  HideMain();
  ShowAdd();
}

function Update() {
  HideMain();
  ShowUpdate();
}

function BackToLogin(){
  HideAll();
  ShowLogin();
}

function BackToMain(){
  HideAll();
  ShowMain();
}

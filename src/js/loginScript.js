class User {

  username;
  password;
  isAdmin;

  constructor(username, password, isAdmin) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
  }
}

admin = new User("admin", "1", true);
normalo = new User("normalo", "2", false);

var users = [admin, normalo];

function loginFunction(username, password) {
  user = loginAsUser(username, password);
  document.getElementById("status").innerHTML = "loged in as " + user.username;
  document.getElementById("contactTable").innerHTML = printContacts(user.isAdmin);
  if (user.isAdmin == true) {
    document.getElementById("addButton").hidden = false;
  }
}

function loginAsUser(username, password) {

  //checkUser(username,password);


  for (i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      login();
      return users[i];
    }
  }
  alert("falscher Username oder Password");
}

function registerNewUser(username, password) {
  user = new User(username, password, false);
  users.push();
  checkUser(username, password);
  alert("neuer User mit dem Usernamen " + user.username + " registriert");
}

function checkUser(username, password) {
  var data = JSON.stringify({"vorname":"maxim","password":"123"});

  var xhr = new XMLHttpRequest();
  //xhr.withCredentials = true;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("POST", "localhost:3000/login");
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.send(data);
}
/*
function checkUser(username, password) {
  var user;
  const url = 'http://localhost:3000/login';
 
  var request = new XMLHttpRequest();
  //request.withCredentials = true;
  request.open("POST", url);
  request.addEventListener('load', function (event) {
    if (request.status >= 200 && request.status < 300) {
      console.log(request.responseText);

    } else {
      console.warn(request.statusText, request.responseText);
    }
  });
  request.send();
}
*/

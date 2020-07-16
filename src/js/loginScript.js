
class User {
  id;
  vorname;
  nachname;
  password;
  isAdmin;

  constructor(id, vorname, nachname, password, isAdmin) {
    this.id = id;
    this.vorname = vorname;
    this.nachname = nachname;
    this.password = password;
    this.isAdmin = isAdmin;
  }

}

var user;

function loginFunction(vorname, password) {

  if (checkUser(vorname, password)) {
    login();
    document.getElementById("status").innerHTML = "loged in as " + user.vorname;
    document.getElementById("contactTable").innerHTML = printContacts(user.isAdmin);
    if (user.isAdmin == true) {
      document.getElementById("addButton").hidden = false;
    }
    return;
  }

  else {
    alert("falscher Username oder Password");
  }

}

//Brauchen wir nicht
function registerNewUser(vorname, password) {
  checkUser(vorname, password);
  console.log(user);
}

function checkUser(username, password) {
  var isCorrect = false;
  const url = 'http://localhost:3000/login';
  var data = JSON.stringify({ "vorname": username, "password": password });

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, false);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.addEventListener('load', function (event) {
    if (xhr.status == 200) {
      var temp = JSON.parse(xhr.responseText).user;
      user = new User(temp.id, temp.vorname, temp.nachname, temp.password, temp.isAdmin)
      isCorrect = true;
    }

  });

  xhr.send(data);
  if (isCorrect == true) {
    isCorrect = false;
    return true;
  }
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

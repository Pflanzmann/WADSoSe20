
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

var logedInUser;

function loginFunction(vorname, password) {
  if (checkUser(vorname, password)) {
    document.getElementById("status").innerHTML = "loged in as " + logedInUser.vorname;
    if (logedInUser.isAdmin == true) {
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
  console.log(logedInUser);
}

function checkUser(username, password) {
  const url = 'http://localhost:3000/login';
  var data = JSON.stringify({ "vorname": username, "password": password });

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, false);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.addEventListener('load', function (event) {
    if (xhr.status == 200) {
      var temp = JSON.parse(xhr.responseText).user;
      logedInUser = temp

      login()
      pullAllContacts()
    }
  });

  xhr.send(data);
  return true
}
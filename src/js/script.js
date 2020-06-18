
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

class Contact {

  vorname;
  nachname;
  straße;
  plz;
  stadt;
  land;
  isPrivate;

  constructor(vorname, nachname, straße, plz, stadt, land, isPrivate) {
    this.vorname = vorname;
    this.nachname = nachname;
    this.straße = straße;
    this.plz = plz;
    this.stadt = stadt;
    this.land = land;
    this.isPrivate = isPrivate;
  }

}

contact1 = new Contact("Thomas", "Nofz", "Berlinerstraße 30", "13403", "Berlin", "Deutschland", false);
contact2 = new Contact("Sven", "Schneider", "Berlinerstraße 30", "13403", "Berlin", "Deutschland", true);
var contacts = [contact1, contact2];

function addContact(vorname, nachname, straße, plz, stadt, land, isPrivate) {
  contact = new Contact(vorname, nachname, straße, plz, stadt, land, isPrivate);
  contacts.push(contact);
  //alert(contact.vorname+" "+contact.nachname +" hinzugefügt")
}

function editContact(index, vorname, nachname, straße, plz, stadt, land, isPrivate) {
  contacts[index] = new Contact(vorname, nachname, straße, plz, stadt, land, isPrivate);
}

function removeContact(index) {
  contacts.splice(index, 1);
}

function printContacts(isAdmin) {
  var x = "<tr><th>Name</th><th>Delete</th><th>Edit</th><th>Show</th></tr>";
  for (i = 0; i < contacts.length; i++) {
    if (isAdmin == true || contacts[i].isPrivate == false) {
      x = x + "<tr><td>" + contacts[i].vorname + " " + contacts[i].nachname + "</td><td> <button type=\"button\" onclick=\"removeContactFunction(" + isAdmin + "," + i + ");\">Delete Contact " + i + "</button></td><td> <button type=\"button\" onclick=\"editFunction(" + isAdmin + "," + i + ")\">Edit</button></td><td> <input type=\"checkbox\"> </td></tr>";
    }
  }
  return x;
}


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

function loginAsUser(username, password) {

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
  users.push(user);
  alert("neuer User mit dem Usernamen " + user.username + " registriert");
}


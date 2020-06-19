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
  
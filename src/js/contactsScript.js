var contactNummber;
var contacts = Array();

class Contact {

    vorname;
    nachname;
    straße;
    plz;
    stadt;
    land;
    isPrivate;
    isShown;
    id;

    constructor(vorname, nachname, straße, plz, stadt, land, isPrivate, isShown, id) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.straße = straße;
        this.plz = plz;
        this.stadt = stadt;
        this.land = land;
        this.isPrivate = isPrivate;
        this.isShown = isShown;
        this.id = id;
    }

}

function editContact(index, vorname, nachname, straße, plz, stadt, land, isPrivate) {
    contacts[index] = new Contact(vorname, nachname, straße, plz, stadt, land, isPrivate, false);
}

function printContacts(isAdmin) {
    var x = "<tr><th>Name</th><th>Delete</th><th>Edit</th><th>Show</th></tr>";
    for (i = 0; i < contacts.length; i++) {
        if (isAdmin == true || contacts[i].isPrivate == false) {
            x = x + "<tr><td>" + contacts[i].vorname + " " + contacts[i].nachname

            if (isAdmin) {
                x += "</td><td> <button type=\"button\" onclick=\"removeContactFunction(" + isAdmin + "," + i + ");\">Delete " + contacts[i].vorname + "</button>"
                    + "</td><td> <button type=\"button\" onclick=\"editFunction(" + isAdmin + "," + i + ")\">Edit</button>"
            } else {
                x += "</td><td></td><td>"
            }
            x += "</td><td> <input type=\"checkbox\" id=\"checkBox" + i + "\" onclick=\"togglePrivate(" + i + ")\"></input> </td></tr>";
        }
    }
    return x;
}

function togglePrivate(index) {
    var value = document.getElementById("checkBox" + index).checked
    contacts[index].isShown = value
    createMarker();
}

function addContactFunction(vorname, nachname, straße, plz, stadt, land, isPrivate) {
    console.log(isPrivate)

    putContact(new Contact(vorname, nachname, straße, plz, stadt, land, isPrivate, false));
}

function removeContactFunction(isAdmin, index) {
    if (!isAdmin) {
        return;
    }

    deleteContact(contacts[index].id);
}

function editFunction(isAdmin, index) {
    if (isAdmin == false) {
        return;
    }

    contactNummber = index;
    edit();
    contact = contacts[index];
    document.getElementById('vorname_Edit').value = contact.vorname;
    document.getElementById('nachname_Edit').value = contact.nachname;
    document.getElementById('straße_Edit').value = contact.straße;
    document.getElementById('plz_Edit').value = contact.plz;
    document.getElementById('stadt_Edit').value = contact.stadt;
    document.getElementById('land_Edit').value = contact.land;
    document.getElementById('privat_Edit').checked = contact.isPrivate;
}

function editContactFunction() {
    var contact = new Contact(
        document.getElementById('vorname_Edit').value,
        document.getElementById('nachname_Edit').value,
        document.getElementById('straße_Edit').value,
        document.getElementById('plz_Edit').value,
        document.getElementById('stadt_Edit').value,
        document.getElementById('land_Edit').value,
        document.getElementById('privat_Edit').checked,
        false,
        contacts[contactNummber].id
    )

    putContact(contact);
}

function backToLoginFunction() {
    document.getElementById("addButton").hidden = true;
    removeMarkers();
    backToLogin();
}

function pullAllContacts() {
    const url = 'http://localhost:3000/contacts';

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);

    xhr.addEventListener('load', function (event) {
        if (xhr.status == 200) {
            contacts = Array()
            for (i = 0; i < JSON.parse(xhr.responseText).contacts.length; i++) {
                var temp = JSON.parse(xhr.responseText).contacts[i]

                contacts.push(JSON.parse(temp))
            }
            document.getElementById("contactTable").innerHTML = printContacts(logedInUser.isAdmin);
        }
    });

    xhr.send();
    return true
}

function putContact(contact) {
    const url = 'http://localhost:3000/contacts';
    var data = JSON.stringify(contact);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener('load', function (event) {
        if (xhr.status == 200) {
            pullAllContacts()
        }
    });

    xhr.send(data);
    return true
}

function deleteContact(id) {
    const url = 'http://localhost:3000/contacts';
    var data = JSON.stringify({ "id": id });

    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener('load', function (event) {
        if (xhr.status == 200) {
            pullAllContacts()
        }
    });

    xhr.send(data);
    return true
}

function editContact(contact) {
    const url = 'http://localhost:3000/contacts';
    var data = JSON.stringify(contact);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener('load', function (event) {
        if (xhr.status == 200) {
            pullAllContacts()
        }
    });

    xhr.send(data);
    return true
}
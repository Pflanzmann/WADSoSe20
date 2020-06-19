var user;
var contactNummber;

class Contact {

    vorname;
    nachname;
    straße;
    plz;
    stadt;
    land;
    isPrivate;
    isShown;

    constructor(vorname, nachname, straße, plz, stadt, land, isPrivate, isShown) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.straße = straße;
        this.plz = plz;
        this.stadt = stadt;
        this.land = land;
        this.isPrivate = isPrivate;
        this.isShown = isShown;
    }

}

contact1 = new Contact("Thomas", "Nofz", "Bahnhofstraße", "14943", "Luckenwalde", "Deutschland", false);
contact2 = new Contact("Sven", "Schneider", "Berlinerstraße 30", "13507", "Berlin", "Deutschland", true);
var contacts = [contact1, contact2];

function addContact(vorname, nachname, straße, plz, stadt, land, isPrivate) {
    contact = new Contact(vorname, nachname, straße, plz, stadt, land, isPrivate);
    contacts.push(contact);
    //alert(contact.vorname+" "+contact.nachname +" hinzugefügt")
}

function editContact(index, vorname, nachname, straße, plz, stadt, land, isPrivate) {
    contacts[index] = new Contact(vorname, nachname, straße, plz, stadt, land, isPrivate, false);
}

function removeContact(index) {
    contacts.splice(index, 1);
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
    addContact(vorname, nachname, straße, plz, stadt, land, isPrivate);
    document.getElementById("contactTable").innerHTML = printContacts(user.isAdmin);
}

function removeContactFunction(isAdmin, index) {
    if (isAdmin == false) {
        return;
    }

    removeContact(index);
    document.getElementById("contactTable").innerHTML = printContacts(user.isAdmin);
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

function editContactFunction(index, vorname, nachname, straße, plz, stadt, land, isPrivate) {
    editContact(index, vorname, nachname, straße, plz, stadt, land, isPrivate);
    document.getElementById("contactTable").innerHTML = printContacts(user.isAdmin);
}

function backToLoginFunction() {
    document.getElementById("addButton").hidden = true;
    backToLogin();
}

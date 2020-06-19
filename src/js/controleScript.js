var user;

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
    createMarker();
}

function editFunction(isAdmin, index) {
    if (isAdmin == false) {
        return;
    }
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
    removeMarkers();
    backToLogin();
}

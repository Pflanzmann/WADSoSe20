const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const pg = require('pg');

var database = "postgres://postgres:password@localhost:5432/adViz";
var client = new pg.Client(database);
client.connect();

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

module.exports = {
    verifyUser: function (vorname, password) {
        for (i = 0; i < users.length; i++) {
            if (users[i].vorname == vorname && users[i].password == password)
                return true;
        }
        return false;
    },

    getUser: function (vorname, password) {
        for (i = 0; i < users.length; i++) {
            if (users[i].vorname == vorname && users[i].password == password)
                return users[i];
        }
        return null;
    },

    getAllContacts: function () {
        return contactsDB;
    },

    addContact: function (contact) {
        var values = [contact.vorname, contact.nachname, contact.straße, contact.plz, contact.stadt, contact.land, contact.isPrivate, contact.isShown]

        client.query('INSERT INTO contact (vorname, nachname, straße, plz, stadt, land, isPrivate, isShown) VALUES($1, $2, $3, $4, $5, $6, $7, $8)', values, (err, res) => {
            if (err) {
                console.log(err.stack)
            } else {
                client.query('SELECT * FROM contact', (err, res) => {
                    fetchContacts(res.rows);
                });
                console.log(res.rows[0])
            }
        }
        );
    },

    deleteContact: function (id) {
        client.query('DELETE FROM contact WHERE id=$1', [id], (err, res) => {
            if (err) {
                console.log(err.stack);
            } else {
                client.query('SELECT * FROM contact', (err, res) => {
                    fetchContacts(res.rows);
                });
                console.log(res.rows[0]);
            }
        }
        );
    },

    editContact: function (contact) {
        var values = [contact.vorname, contact.nachname, contact.straße, contact.plz, contact.stadt, contact.land, contact.isPrivate, contact.isShown, contact.id]

        console.log(contact)

        client.query('UPDATE contact SET vorname = $1, nachname = $2, straße = $3, plz = $4, stadt = $5, land = $6, isPrivate = $7, isShown = $8 WHERE id=$9', values, (err, res) => {
            if (err) {
                console.log(err.stack);
            } else {
                client.query('SELECT * FROM contact', (err, res) => {
                    fetchContacts(res.rows);
                });
                console.log(res.rows[0]);
            }
        }
        );
    }
}

var users = new Array(0);
var contactsDB = new Array(0);

function fetchUsers(rows) {
    for (i = 0; i < rows.length; i++) {
        var id = rows[i].userid;
        var vorname = rows[i].vorname;
        var nachname = rows[i].nachname;
        var password = rows[i].password;
        var isAdmin = rows[i].isAdmin;
        var user = new User(id, vorname, nachname, password, isAdmin)
        users.push(user);
    }
    console.log(users[0].id)
}

function fetchContacts(rows) {
    contactsDB = Array()
    for (i = 0; i < rows.length; i++) {
        var vorname = rows[i].vorname;
        var nachname = rows[i].nachname;
        var straße = rows[i].straße;
        var plz = rows[i].plz;
        var stadt = rows[i].stadt;
        var land = rows[i].land;
        var isPrivate = rows[i].isprivate;
        var isShown = false;
        var id = rows[i].id;
        var contact = new Contact(vorname, nachname, straße, plz, stadt, land, isPrivate, isShown, id)
        contactsDB.push(contact);
    }
}

//get all users
client.query('SELECT * FROM nutzer', (err, res) => {
    fetchUsers(res.rows);
});

client.query('SELECT * FROM contact', (err, res) => {
    fetchContacts(res.rows);
});


const contactRoutes = require('./api/routes/contacts');
const loginRoutes = require('./api/routes/login');
const { request } = require('express');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(cors());

/*
app.use((req, res, next) => {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Header", "*");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
*/
app.use('/contacts', contactRoutes);
app.use('/login', loginRoutes);

module.exports = app;


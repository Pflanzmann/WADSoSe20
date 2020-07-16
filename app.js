const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const pg = require('pg');

var database = "postgres://postgres:gh12rqb9@localhost:5432/adViz";
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
    }
}

var users = new Array(0);

function getUsers(rows) {
    for (i = 0; i < rows.length; i++) {
        var id = rows[i].userid;
        var vorname = rows[i].vorname;
        var nachname = rows[i].nachname;
        var password = rows[i].password;
        var isAdmin = rows[i].isadmin;
        var user = new User(id, vorname, nachname, password, isAdmin)
        users.push(user);
    }
    console.log(users[0].id)
}

//get all users
client.query('SELECT * FROM nutzer', (err, res) => {
    getUsers(res.rows);
    client.end();
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


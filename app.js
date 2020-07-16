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

var users;

function getUsers(rows) {

    for (i = 0; i < rows.length; i++) {
        /*
        var pgUsers =str.split(',')

        var id
        var vorname
        var nachname
        var password
        var isAdmin

        */
    }
}

client.query('SELECT * FROM nutzer', (err, res) => {
    console.log(res.rows);
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


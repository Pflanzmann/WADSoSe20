const express = require('express');
const router = express.Router();
const app = require('../../app');

router.get('/', (req, res, next) => {
    console.log("GOT GET")

    var temp = app.getAllContacts()
    var array = Array(0)
    for (i in temp) {
        array.push(JSON.stringify(temp[i]))
    }

    var temp2 = JSON.stringify(temp)
    res.status(200).json({
        contacts: array
    });
});

router.post('/', (req, res, next) => {
    console.log("GOT POST")

    var contact = new Contact(
        req.body.vorname,
        req.body.nachname,
        req.body.straße,
        req.body.plz,
        req.body.stadt,
        req.body.land,
        req.body.isPrivate,
        req.body.isShown,
        1
    )

    console.log(contact)

    app.addContact(contact)
    res.status(200).json({});
});

router.put('/', (req, res, next) => {
    console.log("GOT PUT")

    var contact = new Contact(
        req.body.vorname,
        req.body.nachname,
        req.body.straße,
        req.body.plz,
        req.body.stadt,
        req.body.land,
        req.body.isPrivate,
        req.body.isShown,
        req.body.id
    )

    app.editContact(contact)
    res.status(200).json({});
});

router.delete('/', (req, res, next) => {
    console.log("GOT DELETE")

    app.deleteContact(req.body.id);
    res.status(200).json({});
});

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

module.exports = router;

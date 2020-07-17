const express = require('express');
const router = express.Router();
const app = require('../../app');

router.post('/', (req, res, next) => {
    var user = {
        vorname: req.body.vorname,
        password: req.body.password
    };

    if (app.verifyUser(user.vorname, user.password)) {
        console.log("Richtig: ");
        console.log(user);
        var temp = app.getUser(user.vorname, user.password);

        var user = {
            id: temp.id,
            vorname: temp.vorname,
            nachname: temp.nachname,
            password: temp.password,
            isAdmin: temp.isAdmin
        }

        res.status(200).json({
            message: 'Loggin successful',
            user: user
        });
    } else {
        console.log("Falsch: ");
        console.log(user);
        res.status(401).json({
            message: 'Wrong username or password',
        });
    }
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /login'
    });
});

module.exports = router;

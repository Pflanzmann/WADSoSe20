const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const user = {
        vorname: req.body.vorname,
        password: req.body.password
    };
    res.status(200).json({
        message: 'Handling POST requests to /login',
        userRegistered: user
    });
});

router.post('/login', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /login'
    });
});



module.exports = router;

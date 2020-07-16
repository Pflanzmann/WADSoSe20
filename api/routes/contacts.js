const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /products'
    });
});

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling PUT requests to /products'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling DELETE requests to /products'
    });
});



module.exports = router;

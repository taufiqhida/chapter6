const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/user.controller');

router.post('/register', controller.register)
router.post('/login', controller.login)

module.exports = router
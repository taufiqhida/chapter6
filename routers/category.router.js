const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/category.controller');

router.post('/create', controller.create)
router.put('/update/:id', controller.update)
router.get('/:id', controller.get)
router.delete('/:id', controller.destroy)

module.exports = router
const express = require('express');
const router = express.Router();
const controller = require('./controller');

// User
router.get('/getUser/:id', controller.getUser)


module.exports = router;
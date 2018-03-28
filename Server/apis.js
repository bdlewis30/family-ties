const express = require('express');
const router = express.Router();

const controller = require('./controller');

// User
router.get('/getUser/:id', controller.getUser)

// Family Group
// router.post('/createFamilyGroup', controller.createGroup)


module.exports = router;
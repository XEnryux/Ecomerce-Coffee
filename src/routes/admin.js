const express = require('express');
const router = express.Router();
const path = require('path');


const controllersAdmin = require('../controllers/controllersAdmin')

router.get('/admin', controllersAdmin.list)

module.exports = router;
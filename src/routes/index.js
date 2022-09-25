const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const mainControllers = require('../controllers/mainControllers');

/* rutas de home */
router.get('/', mainControllers.home);

/* rutas de carrito */ 
router.get('/cart', mainControllers.cart);
router.get('/as', mainControllers.as);

module.exports = router;
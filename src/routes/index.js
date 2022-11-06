const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const mainControllers = require('../controllers/mainControllers');

/* rutas de home */
router.get('/', mainControllers.home);
router.get('/legales', mainControllers.legales)

/* rutas de carrito */ 
router.get('/cart', mainControllers.cart);
router.get('/us', mainControllers.us);

module.exports = router;
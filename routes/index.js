const express = require('express');
const router = express.Router();
const mainController = require('../../controllers/mainControllers');

/* rutas de home */
router.get('/', mainController.home);

/* rutas de carrito */ 
router.get('/cart', mainController.cart);

/* ruta login */
router.get('/login', mainController.login);



/* ruta register */
router.get('/register', mainController.register);
//router.post('/register', mainController.create);// no funciona

module.exports = router;
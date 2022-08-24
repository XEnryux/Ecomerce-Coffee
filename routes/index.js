const express = require('express');
const router = express.Router();

const multer = require('multer');
const mainControllers = require('../controllers/mainControllers');

/* rutas de home */
router.get('/', mainControllers.home);

/* rutas de carrito */ 
router.get('/cart', mainControllers.cart);

/* ruta login */
router.get('/login', mainControllers.login);

/*register*/
router.get('/register', mainControllers.register);
router.post('register', (req, res)=>{
    console.log(req.body)
});


module.exports = router;
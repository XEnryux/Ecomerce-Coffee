const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers');

router.get('/', mainController.home);
router.get('/cart', mainController.cart);
router.get('/login', mainController.login);
router.get('/register', mainController.register);

module.exports = router;
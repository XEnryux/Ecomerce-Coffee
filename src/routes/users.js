let express = require('express');
let router = express.Router();

const path = require('path');
const multer = require('multer');
const {body} = require('express-validator');


/** Controller requiere */
const usersController = require('../controllers/usersController');

/**VALIDACIONES */
const validationLoginMiddleware = require('../middleware/validationLoginMiddleware');
const validationRegister =  [
    body('name').notEmpty().withMessage('Debes completar tu nombre').bail(),
    body('email').isEmail().withMessage('Debes completar el Email').bail(),
    body('adressStreet').notEmpty().withMessage('Debes completar tu calle').bail(),
    body("adressNumber").notEmpty().withMessage('Debes completar la altura de la calle'),
    body("adressCity").notEmpty().withMessage('Debes completar tu ciudad'),
    body('profile').notEmpty().withMessage('').bail(),
    body('pass').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10,
      }).withMessage('Tu contraseña debe tener un minimo de 8 caracteres, letras, numeros o simbolos'),
    body('pass_confirm').notEmpty().withMessage('')

]

/**ruta "users/"  */

router.get('/', usersController.list);

/*ruta Login*/
router.get('/login', usersController.login);
router.post('/login', validationLoginMiddleware, usersController.processLogin);


/*register*/
router.get('/register', usersController.register);
router.post('/register', validationRegister, (req, res)=>{
    console.log(req.body)
});

router.get('/search', usersController.search);
router.get('/edit/:idUser', usersController.edit);
//router.get('/delete', usersController.delete);
//router.gep('/delete', usersController.destroy);

module.exports = router; 
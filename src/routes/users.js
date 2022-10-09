let express = require('express');
let router = express.Router();
const multer = require('multer');
const path = require('path');
let {check, validationResult, body} = require('express-validator');
let guestMiddleware = require('../middleware/guestMiddleware');
let authMiddleware = require('../middleware/authMiddleware');

/** Controller requiere */
const usersController = require('../controllers/usersController');

// ** Multer */  
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, './public/images/usersImage');
    },
    filename: function(req,file,cb){
      let fileName = `${Date.now()}-img${path.extname(file.originalname)}`;
      cb(null, fileName);
            }
})
 const upload = multer({storage})


/**VALIDACIONES */
const validationLoginMiddleware = require('../middleware/validationLoginMiddleware');
const validationRegister = require('../middleware/validationRegister');


/**ruta "users/"  */

router.get('/', authMiddleware, usersController.list);

/*ruta Login*/
router.get('/login', usersController.login);
router.post('/login', validationLoginMiddleware, usersController.processLogin);


/*register*/
router.get('/register', guestMiddleware, usersController.register);
router.post('/register'/* , validationRegister */, upload.single('usersImage'), usersController.create);

router.get('/search', usersController.search);
router.get('/edit/:idUser', authMiddleware, usersController.edit);
router.get('/detail/:idUser', usersController.detail);
router.get('/delete', usersController.delete)
//router.get('/delete/:idUser', usersController.delete);
//router.gep('/delete/:idUser', usersController.destroy);

module.exports = router; 
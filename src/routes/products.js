let express = require('express');
let router = express.Router();
const multer = require('multer');
const path = require('path');

/** Controller requiere */

const mainControllers = require('../controllers/mainControllers');
const productsController=require('../controllers/productsController');

// ** Multer */  
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, '/public/images/productsImage') 

    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

// *Ruta de productos* /

router.get('/', productsController.products)
router.get('/create', productsController.createProducts);
router.post('/create', upload.any(), productsController.store);

/* EDIT un producto */ 
router.get('/edit/:id', productsController.edit); 
router.patch('/edit/:id', upload.any(),productsController.update); 

/* DELETE un producto */ 

//router.get('delete/:id', productsController.delete); 
router.delete('/delete/:id', productsController.destroy);

router.get('/prueba', productsController.prueba);
router.get('/detail/:id', productsController.detail)



module.exports = router; 
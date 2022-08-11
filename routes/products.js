let express = require('express');
let router = express.Router();
const mainController = require('../controllers/mainControllers');
const productsController=require('../controllers/productsController')

//---/ *Ruta de productos* /-------/

router.get('/', productsController.products)
//router.get('/:id', productsController.mostrarPorId);

router.get('/crear', productsController.crearProducto);
router.post('/crear', productsController.crearProducto);

/* EDIT un producto */ 
//router.get('/:id/edit', productsController.edit); 
//router.put('/:id', upload.any(),productsController.update); 

/* DELETE un producto */ 
//router.delete('/:id', productsController.destroy); 


module.exports = router; 
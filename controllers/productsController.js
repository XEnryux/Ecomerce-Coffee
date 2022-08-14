const express = require('express');

/**fs para llamar la funcion y escribir un archivo*/
const fs = require('fs');
/** metodo para manejar las rutas relativas y absolutas */
const path = require('path');

/**
 * editar archivos del json
 */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const product = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/** llamamos a la base de datos de productos */
const productsBaseDatos = require('../data/productsDataBase.json');
const mainControllers = require('./mainControllers');



//** empece la logica de controllers faltan logicas*/
const productsController = {
    products: (req, res) =>{
        res.render('products', {
			product,
			toThousand
		})
    },
    
    mostrarPorId:(req, res) =>{
    req.render('detail')
    },

    createProducts: (req, res) =>{
        res.render('productsCreate');
        
        // let nuevoProducto= {
        // Nombre_del_producto: req.body.Nombre_del_producto,
        // Descripción: req.body.Descripción,
        // Imagen: req.body.Imagen,
        // Categoría:req.body.Categoría,
        // Presentación: req.body.Presentación,
        // Precio: req.body.Precio, 
        // Destacado: req.body.Destacado 
    },
     
       // res.send(),
        //res.redirect('/'),
    //},
    
    
	//* Create -  Method to store/
	store: (req, res) => {
		let image
		console.log(req.files);
		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = 'default-image.png'
		}
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: image
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},
    // edit: (req, res) => {
	// 	res.render('products-edit-form');
    //     res.redirect('/');
	// },   
    // //     // Delete - Delete one product from DB
    // destroy : (req, res) => {
    //     res.render('products-delete')
    //     res.redirect('/');/**a donde redireccionaria despues de hacer a accion */
    // }}
}

module.exports = productsController;
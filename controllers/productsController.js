const express = require('express');
const path = require('path');
const productsBaseDatos = require('../dataBase/productsDataBase.json');
const { products } = require('./mainControllers');

//** empece la logica de controllers Todavia no linkaeas con la pagina products*/
const productsController = {
    products: (req, res) =>{
        res.render('products')
    },
    //mostrarPorId:(req, res) =>{

   // },
    crearProducto: (req, res) =>{
        res.render('productsCrear');
        
        // let nuevoProducto= {
        // Nombre_del_producto: req.body.Nombre_del_producto,
        // Descripción: req.body.Descripción,
        // Imagen: req.body.Imagen,
        // Categoría:req.body.Categoría,
        // Presentación: req.body.Presentación,
        // Precio: req.body.Precio, 
        // Destacado: req.body.Destacado 
    },
}       
       // res.send(),
        //res.redirect('/'),
    //},
    
    // edit: (req, res) => {
	// 	res.render('products-edit-form');
    //     res.redirect('/');
	// },   
    // //     // Delete - Delete one product from DB
    // destroy : (req, res) => {
    //     res.render('products-delete')
    //     res.redirect('/');/**a donde redireccionaria despues de hacer a accion */
    // }}


module.exports = productsController;
const express = require('express');

/**fs para llamar la funcion y escribir un archivo*/
const fs = require('fs');
/** metodo para manejar las rutas relativas y absolutas */
const path = require('path');

// Aca llamamos a la base de datos
const db = require('../database/models');
const sequelize = db.sequelize;
const Product = db.Product;
const Category = db.Category;
const Presentation = db.Presentation;

/** editar archivos del json */
// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const product = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const { gzip } = require('zlib');


//** logica de controllers */
const productsController = {

	products:(req, res) => {
		 Product.findAll({
			offset:4,
			limit:8
		 })
	      .then( products => {
		    res.render( 'products/products', {products} )
	})
	.catch( error => {
		res.send( error )
	})
	},
	detail: (req, res) => {
		Product.findByPk(req.params.id)
            .then( product => {
                res.render('products/productDetail', {productDetail: product});
            })
            .catch( error => {
                console.log( error ),
                res.render('error')
            })
	    },

    createProducts: (req, res) =>{
		Promise.all([Presentation.findAll(), Category.findAll()])
		.then( data => {
			res.render('products/productsCreate',{presentations: data[0] , categories: data[1]} )
		})
    },
        
	//* Create -  Method to store/
	store: (req, res) => {
    
            Product.create({
                name: req.body.name,
                description: req.body.description,
                image: "default-image.jpg",
	            category_id: req.body.category,
	            presentation_id: req.body.presentation,
	            price: req.body.price              
                })
                .then(()=>{
                    return res.redirect('/products')
                 })
				 .catch( error => {
					console.log( error ),
					res.render('error')
				})
			}, 


    /*editar productos*/
    edit: (req, res) => {
		let productid = req.params.id;
		Promise.all([Product.findByPk(productid),Presentation.findAll(), Category.findAll()])
		.then( data => {
			res.render('products/productsEdit',{productsEdit: data[0], presentations: data[1] , categories: data[2]} )
		})
    },
	
	update: (req, res) => {
		let productid = req.params.id
		
		Product.update({
		name: req.body.name,
		description: req.body.description,
		image: "default-image.jpg",
		category_id: req.body.category,
		presentation_id: req.body.presentation,
		price: req.body.price	   
		},{ 
			where: { id : productid }
		})
		.then(()=>{
			return res.redirect('/products')
		 })
		 .catch( error => res.render('error'))
	}, 

        // Delete - Delete one product from DB
	delete: (req,res) => {
        let productId = req.params.id;
        Product
        .findByPk(productId)
        .then(Product => {
            return res.render(path.resolve(__dirname, '..', 'views',  'productDelete'), {Product})})
        .catch(error => res.send(error))
   },
	
   destroy: (req, res) => {
        let productId = req.params.id;
		Product.destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/products')
        })
        .catch(error =>  res.render('error')) 
    }
}


module.exports = productsController;
const express = require('express');
//modelos
let db = require('../database/models');
/**fs para llamar la funcion y escribir un archivo*/
const fs = require('fs');
/** metodo para manejar las rutas relativas y absolutas */
const path = require('path');

/** editar archivos del json */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const product = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


//** logica de controllers de modelos */
const productsController = {

	createProducts: (req, res) => {
		db.catyegory.findAll()
		.then('products')
		return res.render('productsCreate', {products: product})
	},
//la lista de los productos
	products: (req, res) =>{
        res.render('products/products', {products:product})
    },

	detail: (req, res) => {
		let id = req.params.id
		let productDetail = product.find(product => product.id == id)
		res.render('products/productDetail', {
			productDetail,
		})
	},


	//* Create -  Method to store/
	store: (req, res) => {
		let image
		console.log(req.files);
		if (req.files[0] != undefined) {
			image = req.files[0].filename
		} else {
			image = 'default-image.jpg'
		}
		let newProduct = {
			id: product[product.length - 1].id + 1,
			...req.body,
			image: image
		};
		product.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(product, null, ' '));
		res.redirect('/');
	},

	prueba: (req, res) => {
		res.render("products/pruebaproductos", { products: product })
	},

	/*editar productos*/
	edit: (req, res) => {
		let id = req.params.id
		let productsEdit = product.find(product => product.id == id)
		res.render('products/productsEdit', { productsEdit })
	},
	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		let productsEdit = product.find(product => product.id == id)
		let image

		if (req.files[0] != undefined) {
			image = req.files[0].filename
		} else {
			image = productsEdit.image
		}

		productsEdit = {
			id: productsEdit.id,
			...req.body,
			image: image,
		};

		let newProducts = product.map(product => {
			if (product.id == productsEdit.id) {
				return product = { ...productsEdit };
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},


	destroy: (req, res) => {
		let id = req.params.id;
		let finalProducts = product.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}
}

module.exports = productsController;
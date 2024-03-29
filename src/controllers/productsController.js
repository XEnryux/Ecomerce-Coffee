const express = require('express');

/**fs para llamar la funcion y escribir un archivo*/
const fs = require('fs');
/** metodo para manejar las rutas relativas y absolutas */
const path = require('path');

/** editar archivos del json */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const product = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const { gzip } = require('zlib');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//** logica de controllers */
const productsController = {
    products: (req, res) =>{
        res.render('products', {
			product,
			toThousand
		})
    },
    
    detail: (req, res) => {
		let id = req.params.id
		let productDetail = product.find(product => product.id == id)
		res.render('productDetail', {
			productDetail,
			toThousand
		})
	},

    createProducts: (req, res) =>{
        res.render('productsCreate')
    },
        
	//* Create -  Method to store/
	store: (req, res) => {
		let image
		console.log(req.files);
		if(req.files[0] != undefined){
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

	prueba: (req,res)=>{
		let pruebaproductos = [];
		forEach(product => {
			
		});
	res.render("pruebaproductos")
	}	,

    /*editar productos*/
    edit: (req, res) => {
		let id = req.params.id
		let productsEdit = product.find(product => product.id == id)
		res.render('productsEdit', {productsEdit})
	},
	// Update - Method to update
	update: (req, res) => {
		let id = req.params.id;
		let productsEdit = product.find(product => product.id == id)
		let image

		if(req.files[0] != undefined){
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
				return product = {...productsEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},

    //     // Delete - Delete one product from DB
	// delete: function (req,res) {
    //     let productId = req.params.id;
    //     Product
    //     .findByPk(productId)
    //     .then(Product => {
    //         return res.render(path.resolve(__dirname, '..', 'views',  'productDelete'), {Product})})
    //     .catch(error => res.send(error))
    // // },
    // destroy: function (req,res) {
    //     let productId = req.params.id;
    //     Products
    //     .destroy({where: {id: productId}, force: true}) // force: true es para asegurar que se ejecute la acción
    //     .then(()=>{
    //         return res.redirect('/')})
    //     .catch(error => res.send(error)) 
    // }

    destroy : (req, res) => {
		let id = req.params.id;
		//let productDetail = product.find(product => product.id == id)
		let finalProducts = product.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}
}

module.exports = productsController;
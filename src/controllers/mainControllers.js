const express = require('express');
const path = require('path');

//const fetch= require('node-fetch'); 


//Esta parte del codigo no estoy segura */
const productsBaseDatos = require('../data/productsDataBase.json');
const { gzip } = require('zlib');
//const usersController =require('usersController')
//-----//

const mainController = {
    cart: (req, res) => {
        res.render('cart');
    },
    home: (req, res) => {
        res.render('home');
    },
    us:(req, res) =>{
        res.render('as')
    },
    legales: (req, res) => {
        res.render('legales')
    } 
};

module.exports = mainController;

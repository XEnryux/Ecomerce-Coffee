const express = require('express');
const path = require('path');

//const fetch= require('node-fetch'); 


const productsBaseDatos = require('../data/productsDataBase.json');
const { gzip } = require('zlib');
//-----//

const mainController = {
    cart: (req, res) => {
        res.render('cart');
    },
    home: (req, res) => {
        res.render('home');
    },
    us:(req, res) =>{
        res.render('us')
    },
    legales: (req, res) => {
        res.render('legales') 
    }
}

module.exports = mainController;

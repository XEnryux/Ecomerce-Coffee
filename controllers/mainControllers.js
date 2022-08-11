const express = require('express');
const path = require('path');

//Esta parte del codigo no estoy segura */
const productsBaseDatos = require('../dataBase/productsDataBase.json')
//const usuariosController =require('usuariosController')
//-----//

const mainController = {
    cart: (req, res) => {
        res.render('cart');
    },
    home: (req, res) => {
        res.render('home');
    },

    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
     },
    
};

module.exports = mainController;

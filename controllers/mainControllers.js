const express = require('express');
const path = require('path');

const mainController = {
    cart: (req, res) => {
        res.render(path.join(__dirname, '../views/cart.ejs'));
    },
    home: (req, res) => {
        res.render(path.join(__dirname, '../views/home.ejs'));
    },

    login: (req, res) => {
        res.render(path.join(__dirname, '../views/login.ejs'));
    },
    register: (req, res) => {
        res.render(path.join(__dirname, '../views/register.ejs'));
    },
        
};

module.exports = mainController;

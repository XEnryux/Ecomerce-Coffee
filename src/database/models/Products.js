const sequelize = require ("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias; 
    let cols ={

    };
    let config ={

    };

const Products = sequelize.define(alias, cols, config)
    return Products
}
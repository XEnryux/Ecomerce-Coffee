const sequelize = require ("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let config = {
        tableName: 'users',
        timestamps: false
    };
    let cols ={
        id: {      
                type: dataTypes.INTEGER,
                primaryKey: true, 
                autoIncrement:true
            }, 
        name:{
                type: dataTypes.STRING
            }, 
        email:{
                type: dataTypes.STRING,
                uniqueKey: true
            }, 
        birth_date:{
            type: dataTypes.DATE,
            }, 
        adress:{
            type: dataTypes.STRING
            }, 
        pass:{
            type: dataTypes.STRING
            }, 
        image:{
            type: dataTypes.STRING
            }, 
        product_interest_id:{
            type: dataTypes.INTEGER  
        }, 
        profile_id:{
            type: dataTypes.INTEGER
            }
    }

    const Users = sequelize.define(alias, cols, config);
    return Users;
    
}
module.exports = (sequelize, dataTypes) => {    
    let alias = 'Product';
    
    let cols = {
        id: {      
                type: dataTypes.INTEGER,
                primaryKey: true, 
                autoIncrement:true
            }, 
        name:{
                type: dataTypes.STRING
            }, 
            description:{
                type: dataTypes.STRING
            }, 
            image:{
                type: dataTypes.STRING
            }, 
            price:{
                type: dataTypes.INTEGER,
            }, 
            offer:{
                type: dataTypes.INTEGER,
            }, 
            category_id:{
                type: dataTypes.INTEGER,
            }, 
           presentation_id:{
                type: dataTypes.INTEGER,
            }
      
        };

    let config = {
        tableName: 'products',
        timestamps: false
    };
       const Products = sequelize.define(alias, cols, config);
    
       Products.associate = (models) => {
        Products.belongsTo(models.Category, {
            as:"categories",
            foreignKey: "category_id",
        }),
        Products.belongsTo(models.Presentation, {
            as:"presentations",
            foreignKey: "presentation_id",
        })
    }
 
    return Products;
}
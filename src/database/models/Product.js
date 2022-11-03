module.exports = (sequelize,DataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        price : {
            type:DataTypes.DECIMAL,
        },
        discount: {
            type:DataTypes.INTEGER,
        },
        image: {
            type:DataTypes.STRING,
        },
        category_Id: {
            type:DataTypes.INTEGER,
        },
        presentation_id:{
            type: DataTypes.INTEGER,
        }
    }
    /*
    let config ={
        tableName: 'products',
        timestamps: true,
        underscore: true
    }
    */
   //creando el modelo
    const Product = sequelize.define(alias, cols,);
    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as : 'category',
            foreignKey : 'category_Id'
        })

        Product.belongsTo(models.Presentation, {
            as : 'presentations',
            foreignKey : 'presentation_id'
        })
    }
    return Product;
}
module.exports = (sequelize,DataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        name: DataTypes.STRING,
    }
    
    let config ={
        tableName: 'products',
        timestamps: true
    }
    
    const Category = sequelize.define(alias, cols, config);
    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as : 'products',
            foreignKey : 'category_Id'
        })
        //aqui van  todas las relaciones este modelo con los otros
    }
    return Category;
}
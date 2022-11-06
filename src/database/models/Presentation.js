module.exports = (sequelize, dataTypes) => {

    let alias = 'Presentation';



    let cols ={
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement:true
        },
        quantity:{
            type: dataTypes.STRING
        }
        };

        let config = {
            tableName: 'presentations',
            timestamps: false
        };
       
    const Presentation = sequelize.define(alias, cols, config);
        
    Presentation.associate = (models) => {
        Presentation.hasMany(models.Product, {
               as:"Products",
               foreignKey: "presentation_id"
            })
        }
    
    return Presentation;
}
module.exports = (sequelize, dataTypes) => {    
    let alias = 'Users';
    
    let cols = {
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
        profile_id:{
            type: dataTypes.INTEGER,
           }    
        };

    let config = {
        tableName: 'users',
        timestamps: false
    };
       const Users = sequelize.define(alias, cols, config);
    
    Users.associate = (models) => {
        Users.belongsTo(models.Profile_user, {
            as:"Profile_user",
            foreignKey: "profile_id",
        })

      
        
    }
 
    return Users;
}
module.exports = (sequelize, dataTypes) => {

    let alias = 'Profile_user';

    let config = {
        tableName: 'profile_user',
        timestamps: false
    };

    let cols ={
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement:true
        },
        profile:{
            type: dataTypes.STRING
        }
        };
       
    const Profile_user = sequelize.define(alias, cols, config);
        
    Profile_user.associate = (models) => {
      Profile_user.hasMany(models.Users, {
               as:"Users",
               foreignKey: "profile_id"
            })
        }
    
    return Profile_user;
}
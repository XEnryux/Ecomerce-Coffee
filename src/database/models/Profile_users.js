module.exports = (sequelize, dataTypes) => {

    let alias = 'Profile_users';

    let config = {
        tableName: 'profile_users',
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
}

const Profile_users = sequelize.define(alias, cols, config);
return Profile_users;

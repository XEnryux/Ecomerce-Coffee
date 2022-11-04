const express = require('express');
const path = require('path');
const {validationResult} = require('express-validator');
const fs = require('fs');


/* para llamar la Base de datos 
const { json } = require('sequelize/types');*/
const db = require('../database/models');
const sequelize = db.sequelize;
const Users = db.Users;
const Profile = db.Profile_user;

/* para encriptar la contraseña */
const bcryptjs = require('bcryptjs');
const { profile } = require('console');
const { Sequelize } = require('../database/models');
const { OP } = require("Sequelize") 
/* Para usar el json en Data */
const usersFilePath = path.join(__dirname, '../data/userDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController ={

    list: (req, res) => {
    //     res.render('users/usersList', {
    //         users, 
        Users.findAll()
        .then( users => {
            //res.send(users)
            res.render( 'users/usersList', {users:users} )
        })
        .catch( error => {
            res.send( error )
        })
        },

    search: (req, res) => {
        let target = req.body
        Users.findAll({where:{ name:{[OP.like]:'%req.params.id'} }})
        // console.log('1')
            .then( user => {
                //res.send(user)
                res.render( 'users/usersResults', {user} )
            })
            .catch( error => {
                console.log( error );
                res.render('error')
            })
    },
            
    detail: (req, res) => {
		Users.findByPk(req.params.id)
            .then( user => {
                res.render('users/detail', {user: user});
            })
            .catch( error => {
                console.log( error ),
                res.render('error')
            })
	    },

    edit:(req, res) => {
        Users.findByPk(req.params.id)
        .then( user => {
            res.render('users/edit', {user:user})
        })
        .catch( error => {
            console.log( error ),
            res.render('error')
        })
    },

    update: function (req,res) {
        let userId = req.params.id; 
      
        Users.update({
            name: req.body.name,
            email: req.body.email,
            adress: req.body.adress,
            profile_id: req.body.profile_id, 
            image: req.body.image,                 
                         
        },
        { where: {id: userId}             
    })         
        .then(()=> {             
            return res.redirect('/')
        })            
    
        .catch(error => res.render('error'))
},

    login: (req, res) => {
            res.render('users/login');
                        },

    register: (req, res) => {
        Profile.findAll()
            .then(profile => {
               // console.log(profile);
                res.render('users/register', {allProfile:profile})
            })
        
    },

//processRegister
    create: (req, res) => {
//             users.push(newUser)
//             fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
//             res.redirect('/users/login'); //Si no hay errores hace el registr
//          }else {
//            // console.log(errors.errors);
// //            console.table(errors.mapped())
//             return res.render('users/register', {
//                 errors: errors.errors,
//                 oldData: req.body
//             })
//         } 
        let errors = validationResult(req);
        //console.log(errors)
        if (errors && errors.errors.length == 0){
            Users.create({
                name: req.body.name,
                email: req.body.email,
                birth_date: req.body.birth_date,
                adress: req.body.adress,
                pass:req.body.pass,
                image: "user-image-default.png",
                product_interest_id:req.body.product_interest_id,
                profile_id: req.body.profile_id
                })
                .then(()=>{
                    return res.redirect('/users/login')
                 })
                .catch(error => res.send(error))
                }else {
                   // console.log(errors.errors);
                   // console.table(errors.mapped())
                
                   return res.render('/register', {
                       errors: errors.errors,
                       oldData: req.body
                    })       
    }
    },

    processLogin:(req, res) =>{
            let errors = validationResult(req);
            //res.send(errors)
            //res.send(errors.isEmpty())
            console.log("validando usuario");
            console.log(req.body.email);
            console.log(req.body.pass);
            console.log(errors);
            if (errors.isEmpty()) {
                let users = Users.findAll({
                    where: {email: req.body.email,},
                });
                console.log(users);
                console.log(users.pass);
                let userToLogin = undefined;
                if (req.body.pass == users.pass) {
                    userToLogin = users.email;
                    req.session.usuario = userToLogin;
                }
                if (userToLogin == undefined) {
                    res.render('users/login', {
                        errors:
                            { msg: "Usuario o contraseña invalidos" }
                    })
                } else {
                return res.render('users/login', { errors: errors.errors })
            };
        },

     delete: function (req,res) {
    
        Users.findByPk(req.params.id)
        .then( user => {
            return res.render('users/delete', {user})})
        
        .catch( error => {
                console.log( error ),
                res.render('error')      
            })
    },

    destroy: (req, res) => {
        let userId = req.params.id;
        Users.destroy({where: {id: userId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/')
        })
        .catch(error => { 
            res.render('error')
        }) 
    }
}
 

 module.exports = usersController;
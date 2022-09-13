const express = require('express');
const path = require('path');
const {validationResult} =require('express-validator');
const fs = require('fs');
//const { json } = require('sequelize/types');

const userBaseDatos = require('../data/userDataBase.json')

const usersController ={
    list: (req, res) => {
       return  res.render('usersList')
    },

    login: (req, res) => {
       return res.render('login');
    },
    
    processLogin:(req, res) =>{
        let errors = validationResult(req);
        if (errors.isEmpty()){
            let usersJSON = fs.readFileSync('usersDataBase.json', {})
            let users; 
            if (usersJSON == ""){
                users=[];
                }else{
                    users = JSON.parse(usersJSON)
                }

            for (let i = 0; i < users.length; i ++) {
                if (users[i].email == req.boby.email){
                    if (bcrypt.compareSync(req.boby.password, users[i].password)) {
                        let usuarioALoguearse = users[i];
                        break
                    }
                }
            } if (usuarioALoguearse == undefined){
                res.render('login', {errors:[
                    {msg:"Usuario o contraña invalida"}
                ]})
            }
            req.session.usuarioLogueado = usuarioALoguearse;
        }else{
            return res.render('login', {errors:errors.errors})
        };
    },

    register: (req, res) => {
        return res.render('register');

    },

    store: (res, req) => {
        let errors= validationResult(req);
        if (errors.isEmpty()){
            let user =req.body;
            res.redirect('users/login')
        }else{
            res.redirect('users/register', {
            errors: errors.array(),
            old: req.body   
        })
        }
        
        res.send(errors)
//seguir por aca en la validadcion 
    }
 

     //store: (req, res) =>{

//userId = usersModel.create(users);
//res.redirec('/users/')         


//let usuario ={
//             name: req.body.name, 
//             user: req.body.user, 
//             email:req.body.email,
//             birth_date:req.body.birth_date,
//             addres: req.body.addres,
//             profile: req.body.profile,
//             interests:req.body.interests,
//             avatar:req.body.avatar,
//             pass: req.body.pass
//         }
        
//         /*guardar info*/
//         res.redirect('/');
     //}
 }

 module.exports = usersController;
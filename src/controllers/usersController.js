const express = require('express');
const path = require('path');
const {validationResult} = require('express-validator');
const fs = require('fs');
//const { json } = require('sequelize/types');

const userBaseDatos = require('../data/userDataBase.json')


const usersController ={
    search: (req, res) => {
        let buscaUsuario = req.query.search;
        let users = [
            {id:1, name:'rodo'},
            {id:2, name: 'paula'},
            {id:3, name: 'jaimo'}];

        let usersResults = []; 
        
        for (let i = 0; i < users.length; i ++){
            if (users[i].name.includes(buscaUsuario)){
                usersResults.push(users[i]);
            }
        };
        res.render('usersResults',{usersResults:usersResults})
    },

    list: (req, res) => {
        let users = [
            {id:1, name:'rodo'},
            {id:2, name: 'paula'},
            {id:3, name: 'jaimo'}]
       res.render('usersList', {'users': users});
    },
    edit:(res, req) =>{
        let idUser = req.params.idUser;
        let users = [
            {id:1, name:'rodo'},
            {id:2, name: 'paula'},
            {id:3, name: 'jaimo'            }
        ];
        let UserToEdit = users[idUser];
        res.render('userEdit', {UserToEdit: UserToEdit})
    },

    login: (req, res) => {
       return res.render('login');
    },
    
    guardarUsuario: 

    // processLogin:(req, res) =>{
    //     let errors = validationResult(req);
    //     if (errors.isEmpty()){
    //         let usersJSON = fs.readFileSync('usersDataBase.json', {})
    //         let users; 
    //         if (usersJSON == ""){
    //             users=[];
    //             }else{
    //                 users = JSON.parse(usersJSON)
    //             }

    //         for (let i = 0; i < users.length; i ++) {
    //             if (users[i].email == req.boby.email){
    //                 if (bcrypt.compareSync(req.boby.password, users[i].password)) {
    //                     let usuarioALoguearse = users[i];
    //                     break
    //                 }
    //             }
    //         } if (usuarioALoguearse == undefined){
    //             res.render('login', {errors:[
    //                 {msg:"Usuario o contraña invalida"}
    //             ]})
    //         }
    //         req.session.usuarioLogueado = usuarioALoguearse;
    //     }else{
    //         return res.render('login', {errors:errors.errors})
    //     };
    // },

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
,
   
 }

 module.exports = usersController;
const express = require('express');
const path = require('path');
const {validationResult} = require('express-validator');
const fs = require('fs');
//const { json } = require('sequelize/types');
const bcryptjs = require('bcryptjs')

const usersFilePath = path.join(__dirname, '../data/userDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const usersController ={
    search: (req, res) => {
        let buscaUsuario = req.query.search;
        users
        let usersResults = []; 
        
        for (let i = 0; i < users.length; i ++){
            if (users[i].name.includes(buscaUsuario)){
                usersResults.push(users[i]);
            }
        };
        res.render('users/usersResults',{usersResults:usersResults})
    },

    list: (req, res) => {
        res.render('users/usersList', {
        users, 
     
    })
    },
    detail: (req, res) => {
		let id = req.params.id
        console.log(id)
		let userDetail = users.find(users => users.id == id)
		res.render('users/detail', {
			userDetail,
		
		})
	},
    edit:(res, req) =>{
        let idUser = req.params.idUser;
        let UserToEdit = users.find(users => users.id==id);
        res.render('users/userEdit', {UserToEdit: UserToEdit})
    },
    login: (req, res) => {
     res.render('users/login');
    },

    register: (req, res) => {
        res.render('users/register');
    },
//processRegister
    create: (req, res) => {
        let errors = validationResult(req);
         //console.log(errors)
        if (errors && errors.errors.length == 0){
            let image
            if(req.file != undefined){
                image = req.file.filename
            } else {
                image = 'user-image-default.png'
            }
            let newUser = {
                id: users[users.length - 1].id + 1,
                ...req.body,
                image: image,
                pass: bcryptjs.hashSync(req.body.pass, 10)
            };
            users.push(newUser)
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
            res.redirect('/users/login'); //Si no hay errores hace el registr
         }else {
           // console.log(errors.errors);
//            console.table(errors.mapped())
            return res.render('users/register', {
                errors: errors.errors,
                oldData: req.body
            })
        } 
    },

    processLogin:(req, res) =>{
        let errors = validationResult(req);
        //res.send(errors)
        //res.send(errors.isEmpty())
        if (errors.isEmpty()){
            let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
            let userToLogin = undefined;           
            for (let i = 0; i < users.length; i ++) {
                if (users[i].email == req.body.email){
                    if (bcryptjs.compareSync(req.body.pass, users[i].pass)) {
                        userToLogin = users[i];
                        //res.send(userToLogin)
                        req.session.usuario = userToLogin;
                        res.redirect('/')
                    }
                }
            } 
            
            if (userToLogin == undefined){
                res.render('users/login', {errors:
                    {msg:"Usuario o contraseña invalidos"}                
                })
            }
            
            
        }else{
            return res.render('users/login', {errors:errors.errors})
        };
    },
    
 

     //store: (req, res) =>{

//userId = usersModel.create(users);
//res.redirec('/users/')         

        
//         /*guardar info*/
//         res.redirect('/');
     //}

    //  delete: function (req,res) {
    //     let usersId = req.params.id;
    //     Users
    //     .findByPk(usersId)
    //     .then(User => {
    //         return res.render(path.resolve(__dirname, '..', 'views',  'userDelete'), {User})})
    //     .catch(error => res.send(error))
    // },
    // destroy: function (req,res) {
    //     let userId = req.params.id;
    //     Users
    //     .destroy({where: {id: userId}, force: true}) // force: true es para asegurar que se ejecute la acción
    //     .then(()=>{
    //         return res.redirect('/users')})
    //     .catch(error => res.send(error)) 
    // }

   delete: (req, res) =>{
     let idUser = req.params.idUser;
     let user = users.find(users => users.id==idUser);
        res.render('users/delete',
       {user: user})
   },
   destroy : (req, res) => {
    let id = req.params.id;
    let finalUsers = users.filter(user => user.id != id);
    fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
    res.redirect('/');

 }
}
 

 module.exports = usersController;
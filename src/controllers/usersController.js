const express = require('express');
const path = require('path');
const {validationResult} = require('express-validator');
const fs = require('fs');
//const { json } = require('sequelize/types');

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
        toThousand
    })
    },
    detail: (req, res) => {
		let id = req.params.id
		let userDetail = users.find(users => users.id == id)
		res.render('users/detail', {
			userDetail,
			toThousand
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

    create: (req, res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
            })
         }else{

        let image
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = 'user-image-default.png'
		}
       let newUser = {
			id: users[users.length - 1].id + 1,
			...req.body,
			image: image
		};
		users.push(newUser)
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
		res.redirect('/');
         } 
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
    // let idUser = req.params.idUser;
    // let UserToDelete = users.find(users => users.id==id);

        res.render('users/delete')
        // , {UserToDelete: UserToDelete})
   }
 }
 

 module.exports = usersController;
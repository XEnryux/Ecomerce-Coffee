const { body } = require("express-validator");

const validationLoginMiddleware = 
[
    body('email').isEmail().withMessage('Email invalido').bail(), 
    
    body('password').notEmpty().bail().isLength({min:8}).withMessage('La contraseña debe tener un minimo de 8 caracteres, un numero, una mayuscula, una minúscula')
]

module.exports = validationLoginMiddleware;


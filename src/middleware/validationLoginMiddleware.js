const { check } = require("express-validator");

const validationLoginMiddleware = 
[
    check('email')
    .isEmail().withMessage('Email invalido').bail(), 
    
    check('pass')
    .notEmpty().bail()
    .isLength({min:8}).withMessage('La contraseña debe tener un minimo de 8 caracteres, un numero, una mayuscula, una minúscula')
]

module.exports = validationLoginMiddleware;


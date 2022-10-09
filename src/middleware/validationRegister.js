const { check } = require ('express-validator');

const validationRegister = [
        check('nombre')
        .notEmpty()
        .withMessage('Debes completar tu nombre')
        
    ]

module.exports = validationRegister; 
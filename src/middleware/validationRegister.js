const { check } = require ('express-validator');

const validationRegister = [
        check('name')
        .notEmpty()
        .withMessage('Debes completar tu nombre')
        
    ]

module.exports = validationRegister; 
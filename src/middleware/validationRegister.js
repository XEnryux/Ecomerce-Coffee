// const { body } = require ('express-validator');

// const validationRegister = [
//         body('name')
//         .notEmpty()
//         .withMessage('Debes completar tu nombre')
//         .bail(),
//         body('email')
//         .isEmail()
//         .withMessage('Debes completar el Email')
//         .bail(),
//         body('adressStreet')
//         .notEmpty()
//         .withMessage('Debes completar tu calle')
//         .bail(),
//         body("adressNumber")
//         .notEmpty()
//         .withMessage('Debes completar la altura de la calle'),
//         body("adressCity")
//         .notEmpty()
//         .withMessage('Debes completar tu ciudad'),
//         body('profile')
//         .notEmpty()
//         .withMessage('')
//         .bail(),
//         body('pass')
//         .isStrongPassword({
//             minLength: 8,
//             minLowercase: 1,
//             minUppercase: 1,
//             minNumbers: 1,
//             minSymbols: 1,
//             returnScore: false,
//             pointsPerUnique: 1,
//             pointsPerRepeat: 0.5,
//             pointsForContainingLower: 10,
//             pointsForContainingUpper: 10,
//             pointsForContainingNumber: 10,
//             pointsForContainingSymbol: 10,
//           }).withMessage('Tu contraseña debe tener un minimo de 8 caracteres, letras, numeros o simbolos'),
//         body('pass_confirm')
//         .notEmpty()
//         .withMessage('')
//     ]

// module.exports = validationRegister;
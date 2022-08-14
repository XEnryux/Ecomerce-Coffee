const express = require('express');
const app = express();
const path = require("path"); 

const indexRouter = require('./routes/index');
const rutesProducts = require('./routes/products');


// para indicarle a express cual es nuestra carpeta estatica//
app.use(express.static(path.join(__dirname, 'public')));

// para ordenar las rutas de nuesto proyecto//
app.use('/', indexRouter);
app.use('/products', rutesProducts);
app.use(express.urlencoded({extended:false})); /**esta linea permite poner seguridad al ingreso de personas a cada vista segun su categoria */
app.use(express.json());

// ************ Template Engine - (don't touch) ************
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('views');
});


/**Servidor funcionando */
app.listen(3001, ()=>{
    console.log('Servidor 3001 funcionando');
});


module.exports = app;

console.log(13)


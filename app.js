const express = require('express');
const app = express();
const path = require("path"); 

// para indicarle a express cual es nuestra carpeta estatica
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index.js');
app.use('/', indexRouter);

app.listen(3001, ()=>{
    console.log('Servidor funcionando');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req,res)=>{
    res.render('views');
});

module.exports = app;

console.log(1)


const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3020, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/Cart', (req,res)=>{
    res.sendFile(__dirname + '/views/Cart.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
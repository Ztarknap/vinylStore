const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const itemModel = require('./models/item.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/', (req,res) => {
    res.send('hello, website is running');
})

app.get('/browse/', (req,res) => {
    res.render('browse.ejs');
})

app.get('/item/:id', async (req,res) => {
    let id = req.params.id;
    let items = await itemModel.findById(_id = id);
    res.render('item.ejs', items);
})

app.get('/location/', (req,res) => {
    res.render('location.ejs');
})

app.get('/findItem', (req,res) => {
    res.render('findList.ejs');
})

app.post('/register', (req,res) => {
    res.send('registered!');
})

app.post('/login', (req,res) => {
    res.send('login!');
})

app.post('/logout', (req,res) => {
    res.send('logout!');
})

app.post('/toCart', (req,res) => {
    res.send('added to cart!');
})
 
app.post('/checkout', (req,res) => {
    res.send('checked out!');
})

app.post('/createItem', async (req, res) => {
    console.log('got it');
    let newItem = new itemModel({name:'Man Of Aran', band:'Sea Power'});
    await newItem.save();
    console.log('saved!');
    //req.redirect('/')
    
})


console.log('____________________________________________________________________');
console.log(__dirname);
console.log('____________________________________________________________________');
console.log(path.join(__dirname, 'views'));


app.listen(3001,() => {console.log('server listening')});

mongoose.connect('mongodb://127.0.0.1:27017/vinylStore').then(() => {
    console.log('connected')
}).catch(err=> {
    console.log('err');
    console.log(err);
})

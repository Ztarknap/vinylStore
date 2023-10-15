const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
const itemModel = require('./models/item.js');
const itemRoute = require('./routes/items.js');
const userRoute = require('./routes/users.js');
const shopRoute = require('./routes/shop.js');

const app = express();


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));


app.use(express.urlencoded({extended: true}));
app.use(express.json({extended:true}));
app.use('/items', itemRoute);
app.use('/users',userRoute);
app.use('/shop', shopRoute);

app.get('/', (req,res) => {
    res.send('hello, website is runninng');
})

app.get('/location', (req,res) => {

    res.render('location.ejs');
})

app.listen(3001,() => {console.log('server listening')});

mongoose.connect('mongodb://127.0.0.1:27017/vinylStore').then(() => {
    console.log('connected')
}).catch(err=> {
    console.log('err');
    console.log(err);
})


const express = require('express');
const router = express.Router();

const itemModel = require('../models/item.js');

router.get('/', async (req,res) => {
    console.log('items');
    let items = await itemModel.find({});
    console.log(items);
    res.render('items.ejs', {items});
})

router.get('/search/:id', async (req,res) => {
    let id = req.params.id;
    let item = await itemModel.findById(_id = id);
    res.render('item.ejs', item);
})


router.get('/create', (req,res) => {
    console.log('createeeee');
    res.render('create.ejs');
})


router.post('/create', async (req, res) => {
    console.log('post');
    console.log(req.body);
    let newItem = new itemModel({name: req.body.name, band:req.body.band});
    await newItem.save();
    console.log('saved!');
    res.redirect('/items');
    //req.redirect('/')
    
})

router.get('/find', (req,res) => {
    res.render('findItem.ejs');
})


module.exports = router;
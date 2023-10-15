const express = require('express');
const router = express.Router();


router.get('/register', (req,res) => {
    res.send('register form');
})


router.post('/register', (req,res) => {
    res.send('registered!');
})

router.post('/login', (req,res) => {
    res.send('login!');
})

router.post('/logout', (req,res) => {
    res.send('logout!');
})


module.exports = router;
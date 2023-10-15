const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('shop form');
})


router.post('/toCart', (req,res) => {
    res.send('added to cart!');
})
 
router.post('/checkout', (req,res) => {
    res.send('checked out!');
})


module.exports = router;
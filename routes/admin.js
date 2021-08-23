const express = require('express');
const path = require('path');
const rotDir = require('../util/path');
const router = express.Router();


router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rotDir,'views','add-product.html'));
    // Alows the request to continue t the next middleware in line
});
//get || post || use || delete || patch || put....
router.post('/product', (req,res) => {
    //redirect  and File IO;
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    // if(req.method == 'POST' ){
    //     console.log(req.body);
    // }
    res.redirect('/');
});

module.exports = router;


const express = require('express');
const path = require('path');
const rotDir = require('../util/path');
const router = express.Router();
const products = [];

router.get('/admin/add-product',(req, res, next) => {
    res.sendFile(path.join(rotDir,'views','add-product.html'));
    // Alows the request to continue t the next middleware in line
});


//get || post || use || delete || patch || put....
router.post('/admin/add-product', (req, res) => {
    console.log(req.bosy.title);
    products.push({title: req.body.title});
    
    
    //redirect  and File IO;
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.body);
    // if(req.method == 'POST' ){
    //     console.log(req.body);
    // }
    res.redirect('/');
});

exports.routes = router;
exports.products = products;


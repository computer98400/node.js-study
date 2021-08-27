const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const products = [];
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'add-product.html'));
   // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>');
})
  
router.post('/add-product', (req, res, next) => {
    products.push({title:req.body.title});
    console.log(req.body);
    res.redirect('/');
  });
  

module.exports = router;
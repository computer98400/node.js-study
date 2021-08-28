const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const path = require('path');
const adminData = require('./admin');


router.get('/', (req, res) => {
  const products = adminData.products;
  res.render('shop', {prods: products, docTitle:'Shop'});
    //  res.send('<h1>Hello from express</h1>');
  });
  
module.exports = router;
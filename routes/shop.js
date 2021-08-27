const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const path = require('path');
const adminData = require('./admin');


router.get('/', (req, res) => {
    console.log('shop.js', adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //  res.send('<h1>Hello from express</h1>');
  });
  
module.exports = router;
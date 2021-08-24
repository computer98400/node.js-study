const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/',(req, res, next) => {

    console.log(adminData.products);
    //res.sendFile('/views/shop.html');       //wrong Syntex
    res.sendFile(path.join(rootDir, 'views','shop.html'));  //go upper level and down

});



module.exports = router;
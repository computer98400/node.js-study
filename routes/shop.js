const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');


router.get('/',(req, res, next) => {
    //res.sendFile('/views/shop.html');       //wrong Syntex
    res.sendFile(path.join(rootDir, 'views','shop.html'));  //go upper level and down

});

module.exports = router;
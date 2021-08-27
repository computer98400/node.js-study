const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //  res.send('<h1>Hello from express</h1>');
  });
  
module.exports = router;
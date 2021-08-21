const express = require('express');


const router = express.Router();

router.get('/admin/add-product',(req, res, next) => {
    res.send('<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // Alows the request to continue t the next middleware in line
});
//get || post || use || delete || patch || put....
router.post('/admin/product', (req,res) => {
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


const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('/add-product', {
        pageTitle: 'Add Product',
        path: '/add-product',
        formsCss: true,
        productCss: true,
        activeAddProduct: true,
        // show: function () { console.log(pageTitle, path, formsCss, productCss, activeAddProduct) }
    });
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>');
}



exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);    //이녀석은 입력값을 받는다.
    product.save();                                 //입력값을 저장해준다.
    res.redirect('/');
}


exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });


}
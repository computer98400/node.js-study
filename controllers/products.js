const Product = require('../models/product');
const Products = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
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
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res) => {
    const product = Product.fetchAll();
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
    //  res.send('<h1>Hello from express</h1>');
}
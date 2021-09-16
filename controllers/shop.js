const Product = require('../models/product');


exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products'
        });
    });
    //  res.send('<h1>Hello from express</h1>');
};

exports.getIndex = (req, res, next) => {

    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};


exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;    //locking ID
    Product.findById(prodId, product => {
        //console.log(product);
        res.render('shop/product-detail', {
            product: product,
            path: '/product-detail',
            pageTitle: 'product-detail'
        });
    });

}
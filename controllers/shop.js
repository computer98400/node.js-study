const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res) => {
    Product.findAll().then(products=>{
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products'
        });
    }).catch(err => {
        console.log(err);
    });

    
    // Product.fetchAll()
    //     .then(([rows, fieldData]) => {
    //         res.render('shop/product-list', {
    //             prods: rows,
    //             pageTitle: 'All Products',
    //             path: '/products'
    //         });
    //     })
    //     .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
    Product.findAll().then(products=>{
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    }).catch(err => {
        console.log(err);
    });

    // Product.fetchAll()
    //     .then(([rows, fieldData]) => {
            
    //     })
    //     .catch(err => console.log(err));

};

exports.getCart = (req, res, next) => {
    Cart.getProducts(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for (product of products) {
                const cartProductData = cart.products.find(prod => prod.id === product.id);
                if (cartProductData) {
                    cartProducts.push({ productData: product, qty: cartProductData.qty });
                }
            }
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: 'Your Cart',
                products: cartProducts
            });
        });
    });

};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');

}

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.deleteProduct(prodId, product.price);
        res.redirect('/cart');
    })

}

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
    // Product.findAll({where: {id: prodId}})
    // .then(products =>{
    //     res.render('shop/product-detail', {
    //         product: products[0],
    //         path: '/products',
    //         pageTitle: products[0].title
    //     })

    // })
    // .catch(err => {console.log(err);});
    
    Product.findByPk(prodId)
    .then((product) => {
        res.render('shop/product-detail', {
            product: product,
            path: '/products',
            pageTitle: product.title
        })
    })
    .catch(err => { console.log(err); });
   
  //  Product.findById(prodId)
       




    // Product.findById(prodId, product => {
    //     //console.log(product);
    //     res.render('shop/product-detail', {
    //         product: product,
    //         path: '/product-detail',
    //         pageTitle: 'product-detail'
    //     });
    // });

}
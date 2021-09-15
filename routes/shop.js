const express = require('express');
const router = express.Router();
//const rootDir = require('../util/path');
//const adminData = require('./admin');
const path = require('path');
const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/product-list', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
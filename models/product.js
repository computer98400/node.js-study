//const products = [];    ///이곳에 집어넣고 이걸 사용하고 싶다.
const fs = require('fs');
const path = require('path');

const Cart = require('./cart');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getproductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};


module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;


    }
    save() {
        getproductsFromFile(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(
                    prod => prod.id === this.id
                );
                const updateProducts = [...products];
                updateProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updateProducts), (err) => {
                    console.log(err);
                });
            } else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }
        });

    }
    static deleteById(id) {
        getproductsFromFile(products => {
            const product = products.find(prod => prod.id === id);
            const updatedProducts = products.filter(p => p.id !== id);
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if (!err) {
                    Cart.deleteProduct(id, product.price);
                }
            });
        });

    }
    static fetchAll(cb) {
        getproductsFromFile(cb);
    }

    static findById(id, cb) {
        getproductsFromFile(products => {
            // products.forEach(element => {
            //     if (element.id === id) return element;
            // });
            const product = products.find(p => p.id === id);
            cb(product);


        });

    }

};
const db = require('../util/database');
const Cart = require('./cart');

module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }
    save() {
          //      return db.execute(`insert into products (title,price,imageUrl,description) values(${this.title},${this.price},${this.imageUrl},${this.description})`);  //직접 짜본코드
        return db.execute('insert into products (title, price, imageUrl, description) values(?,?,?,?)', [this.title, this.price, this.imageUrl, this.description]);
    }
    static deleteById(id) {
        return db.execute(`delete from products where ${id}`);      //직접 짜본코드
    }
    static fetchAll() {
        return db.execute('select * from products');

    }

    static findById(id) {
        return db.execute('select * from products where products.id = ?', [id]);    //직접 짜본코드
    }

};
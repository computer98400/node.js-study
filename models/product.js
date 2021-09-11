const products = [];    ///이곳에 집어넣고 이걸 사용하고 싶다.

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }


    save() {
        products.push(this);
    }


    static fetchAll() {
        return products;
    }
}
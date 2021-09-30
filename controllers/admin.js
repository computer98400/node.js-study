const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
        // show: function () { console.log(pageTitle, path, formsCss, productCss, activeAddProduct) }
    });
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form>');
};



exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    req.user.createProduct({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description
    })
        .then(result => {
            res.redirect('/admin/products');
        })

        .catch(err => console.log(err));
    // const product = new Product(null, title, imageUrl, description, price);    //이녀석은 입력값을 받는다.
    // product.save()
    //     .then(
    //         console.log("test sucess")
    //     )
    //     .catch(err => {
    //         console.log(err)
    //     });                                                     //입력값을 저장해준다.
    //product.save().then(() => { res.redirect('/'); }).catch(err => { console.log(err); });
    // Product.create({
    //     title: title,
    //     price: price,
    //     imageUrl: imageUrl,
    //     description: description,

    // }).then(result => {
    //     console.log('create product');
    //     res.redirect('/admin/products');
    // }).catch(err => {
    //     console.log(result);
    // });
}

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findByPk(prodId)                                    //내가짠 코드
        .then(result => {
            if (!result) {
                return res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTitle: 'Edit Product',
                path: '/admin/edit-product',
                editing: editMode,
                product: result
            })
        })
        .catch(err => {
            console.log(err);
        });



}
exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;
    //   const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDesc, updatedPrice);
    // Product.update({title: updatedTitle, price: updatedPrice,imageUrl:updatedImageUrl,description:updatedDesc},{where:{id: prodId}})
    // .then(result =>{
    //     console.log(result);
    // })
    // .catch(err => {console.log(err);
    // });
    Product.findByPk(prodId)
        .then(product => {
            product.title = updatedTitle,
                product.price = updatedPrice,
                product.description = updatedDesc,
                product.imageUrl = updatedImageUrl
            return product.save();
        })
        .then(result => {
            console.log('Update product');
            res.redirect('/admin/products');
        })
        .catch(err => { console.log(err) });


}

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.destroy({ where: { id: prodId } })
        .then(test => {
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        });
};


exports.getProducts = (req, res, next) => {

    Product.findAll()
        .then(products => {
            res.render('admin/products', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products'
            });

        })
        .catch();

}
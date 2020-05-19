const { Product } = require('../models/product.model');


module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err));
}

module.exports.getProduct = (req, res) => {
    Product.findById({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete({ _id: req.params.id })
        .then(toBeDeleted => res.json(toBeDeleted))
        .catch(err => res.json(err))
}
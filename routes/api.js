const express = require('express');
const router = express.Router();
const Product = require('../modules/products')


//get a list of products from db
router.get('/products', function(req, res, next) {
  res.send({type:'GET'});
});

//add a new protuct to db via mongoose
router.post('/products', function(req, res, next) {
  Product.create(req.body).then(function(product){
    res.send(product);
  }).catch(next);
});

//update a product in db
router.put('/products/:id', function(req, res, next) {
  res.send({type:'PUT'});
});


//delete a product from db
router.delete('/products/:id', function(req, res,next) {
  res.send({type:'DELETE'});
});

module.exports = router;

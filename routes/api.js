const express = require('express');
const router = express.Router();
const Product = require('../modules/products')


//get a list of products from db
router.get('/products', function(req, res, next) {
  res.send({type:'GET'});
});

//add a new protuct to db via mongoose
router.post('/sendPost', function(req, res, next) {
  Product.create(req.body).then(function(product){
    res.send(product);
  }).catch(next);
});

//update a product in db
router.put('/products/:id', function(req, res, next) {
  res.send({type:'PUT'});
});


//delete a product from db
router.delete('/sendDelete', function(req, res,next) {
  /*  Deleting products by

    Product.findByIdAndRemove({_id: req.params.id}).then(function(product){
    res.send(product);

  */
  Product.remove(function(err,removed) {
  res.send('All prod were deleted');
});
});
  //});
//});

module.exports = router;

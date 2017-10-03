// Products application for MAPD 2017
// Student ID: 300965052
// Romanenko Yan
// Version: 0.1
// api.js file - routing of all kinds of requests (GET, POST, PUT, DELETE)

const express = require('express');
const router = express.Router();
const Product = require('../modules/products')
var getCount = 0;
var postCount = 0;
var putCount = 0;
var delCount = 0;

//get a list of products from db
router.get('/sendGET', function(req, res, next) {
  console.log('>>> Recieved GET request');
  Product.find({}).then(function(products){
    res.send(products);
  });
  getCount++;
  console.log('>>> Processed GET request, sendGET counter: ' + getCount);
});

//add a new protuct to db via mongoose
router.post('/sendPOST', function(req, res, next) {
  console.log('>>> Recieved POST request');
  Product.create(req.body).then(function(product){
    res.send(product);
  }).catch(next);
  postCount++;
  console.log('>>> Processed POST request, sendPOST counter: ' + postCount);
});

//update a product in db
router.put('/sendPUT/:id', function(req, res, next) {
  console.log('>>> Recieved PUT request');
  Product.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Product.findOne({_id: req.params.id}).then(function(product){
      res.send(product);
    });
  });
  putCount++;
  console.log('>>> Processed PUT request, sendPUT counter: ' + putCount);
});


//delete a product from db
router.delete('/sendDEL', function(req, res,next) {
  console.log('>>> Recieved DELETE request');
  /*  Deleting products by

    Product.findByIdAndRemove({_id: req.params.id}).then(function(product){
    res.send(product);

  */
  Product.remove(function(err,removed) {
  res.send('All prod were deleted');
});
delCount++;
console.log('>>> Processed DELETE request, sendDEL counter: ' + delCount);
});
  //});
//});

module.exports = router;

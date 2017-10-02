const express = require('express');
const router = express.Router();


//get a list of products from db
router.get('/products', function(req, res) {
  res.send({type:'GET'});
});

//add a new protuct to db
router.post('/products', function(req, res) {
  res.send({type:'POST'});
});


//update a product in db
router.put('/products/:id', function(req, res) {
  res.send({type:'PUT'});
});


//delete a product from db
router.delete('/products/:id', function(req, res) {
  res.send({type:'DELETE'});
});

module.exports = router;

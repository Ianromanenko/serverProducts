// Products application for MAPD 2017
// Student ID: 300965052
// Romanenko Yan
// Version: 0.1
// product.js file - creating and exporting of data base model

const mongoose = require('mongoose');
const schema = mongoose.Schema;


// create products module and module
const productSchema = new schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  price: {
    type: String,
    required: [true, 'Price field is required']
  },
  id: {
    type: String
  }
});

const product = mongoose.model('product', productSchema);

module.exports = product;

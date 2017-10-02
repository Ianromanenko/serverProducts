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

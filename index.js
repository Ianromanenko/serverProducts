const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const port = 4000;

//set up express server
const server = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/products');
mongoose.Promise = global.Promise;


server.use(bodyParser.json());

//creating of working routes
server.use('/api', routes);




//listen for req
server.listen(process.env.port || port, function(){
  console.log('Server %s listening at %s', server.name, server.url)
  console.log('Endpoints:')
  console.log(server.url + '/api')
  console.log(server.url + '/products/:id')
})

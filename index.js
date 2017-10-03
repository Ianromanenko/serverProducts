// Products application for MAPD 2017
// Student ID: 300965052
// Romanenko Yan
// Version: 0.1
// index.js file - creating of server, connections between all files and db

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const host = '127.0.0.1';
const port = 4000;

//set up express server
const server = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/products');
mongoose.Promise = global.Promise;


server.use(bodyParser.json());

//creating of working routes
server.use('/api', routes);

//finding of error
server.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message});
  console.log('Adding of ' + err.message);
});


//listen for req
server.listen(process.env.port || port, host, function(){
  console.log('Server is listening at  ' + 'http://' + host + ':' + port + '/');
  console.log('Endpoints:');
  console.log('http://' + host + '/api/sendGET' + '   GET request');
  console.log('http://' + host + '/api/sendPOST' + '   POST request');
  console.log('http://' + host + '/api/sendPUT' + '   PUT request');
  console.log('http://' + host + '/api/sendDEL' + '   DELETE request');
})

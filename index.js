const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const host = '127.0.0.1';
const port = 4000;

//set up express server
const server = express();

server.use(bodyParser.json());

//creating of working routes
server.use('/api', routes);




//listen for req
server.listen(process.env.port || port, host, function(){
  console.log('Server %s listening at %s', server.name, server.url)
  console.log('Endpoints:')
  console.log(server.url + '/api')
  console.log(server.url + '/products/:id')
})

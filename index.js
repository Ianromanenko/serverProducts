const express = require('express');
const host = '127.0.0.1';
const port = 4000;

//set up express server
const server = express();

server.get('/api', function(req, res) {
  console.log('GET req');
  res.send({name: 'pencil'});
});



//listen for require
server.listen(process.env.port || port, host, function(){
  console.log('Server %s listening at %s', server.name, server.url)
  console.log('Endpoints:')
  console.log(server.url + '/api')
  console.log(server.url + '/products/:id')
})
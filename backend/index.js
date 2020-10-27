const express = require('express');

const app = express();
const port = 3000;

app.use('/', function(req, res) {
  res.send('Hola mundo express')
})  

app.listen(port, function () {
  console.log('Servidor inicializado en el puerto ' + port);
});
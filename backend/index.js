const express = require('express');
const router = require('./utils/routes');
const app = express();
const port = 3000;

router(app);  

app.listen(port, function () {
  console.log('Servidor inicializado en el puerto ' + port);
});
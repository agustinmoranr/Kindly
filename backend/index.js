const express = require('express');
const router = require('./utils/routes');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router(app);  

app.use('/app', express.static('public'))

app.listen(port, function () {
  console.log('Servidor inicializado en el puerto ' + port);
});
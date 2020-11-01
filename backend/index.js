const express = require('express');
const cors = require('cors');
const router = require('./utils/routes');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router(app);  

app.use('/app', express.static('public'))

app.listen(port, function () {
  console.log('Servidor inicializado en el puerto ' + port);
});

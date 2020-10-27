const express = require('express');
const app = express();


const response = (req, res) => {
  res.send('Hola mundo')
}


module.exports = response;
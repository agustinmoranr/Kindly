const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const response = require('../../utils/response');
const controller = require('./controller');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/files/')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  },
});

const upload = multer({
  storage: storage
}).single('image')


//http methods
router.get('/', list)
router.get('/:id', get)
router.post('/', upload, create)

//Network
async function list (req, res){
  await controller.listBooks()
    .then(books => {
      response.success(req, res, books, 200)
    })
    .catch(error => {
      response.error(req, res, 'Internal Error', 500, error)
    }) 
};

async function get (req, res) {
  await controller.getBook(req.params.id)
    .then(book => {
      response.success(req, res, book, 200)
    })
    .catch(error => {
      response.error(req, res, 'Internal Error', 500, error)
  }) 
}

async function create (req, res) {
  console.log(req.body)
  await controller.createBook(req.body)
    .then(book => {
      response.success(req, res, book, 201)
    })
    .catch(error => {
      response.error(req, res, 'Internal Error', 500, error)
    }) 
}



module.exports = router;
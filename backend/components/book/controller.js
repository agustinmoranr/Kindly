let books = require('../../db/dbMock.js')

function listBooks() {
  return new Promise ((resolve, reject) => {
    if(books.length === 0) {
      reject('No hay usuarios listados')
    }
    resolve(books)
  })
}

function getBook(booId) {
  return new Promise((resolve, reject) => {
    if (!bookId) {
      return reject('[Error Controller]: Invalid book id')
    }

    resolve(books[0])
  })
}

function createBook(bookData) {
  return new Promise ((resolve, reject) => {
    if(!bookData) {
      return reject('Error en la creacion')
    }

    //add book status
    bookData.completed = false

    //
    books.push(bookData)

    resolve(books[books.length -1])
  })
}

module.exports = {
  listBooks,
  getBook,
  createBook,
}
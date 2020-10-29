let books = []

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
    console.log(bookData)
    if(!bookData) {
      return reject('Error en la creacion')
    }

    let myBook = {
      bookData,
      completed: false
    }

    books.push(myBook)

    resolve(books)
  })
}

module.exports = {
  listBooks,
  getBook,
  createBook,
}
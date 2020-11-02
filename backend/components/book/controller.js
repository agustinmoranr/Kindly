let db = require('../../db/dbMock.js')

function listBooks() {
  return new Promise ((resolve, reject) => {
    if(db.books.length === 0) {
      return reject('No hay usuarios listados')
    }
    resolve(db)
  })
}

function getBook(bookId) {
  return new Promise((resolve, reject) => {
    if (!bookId) {
      return reject('[Error Controller]: Invalid book id')
    }

    resolve(db.books[bookId -1])
  })
}

function createBook(bookData, where) {
  return new Promise (async (resolve, reject) => {
    if(!bookData) {
      return reject('Error en la creacion')
    }

    //add book status
    bookData.completed = false
    bookData.id = bookData.id ? bookData.id : db['books'].length + 1
    bookData.img = 'https://m.media-amazon.com/images/I/41cj3vv7mjL.jpg';
    
    //insert 
    switch (where) {
      case 'favorites':
        db[where].push(bookData)
      break
      case 'read':
        db[where].push(bookData)
      break
      default:
        db[where].push(bookData)
        break
      }
      
      resolve(db[where][db[where].length -1])
  })
}

function deleteBook(id, where) {
  return new Promise (async (resolve, reject) => {
    if(!id) {
      return reject('Error en la creacion')
    }


    //remove
    switch (where) {
      case 'favorites':
        let favoriteDeleted = db[where].filter(element => element.id != id)
        resolve(db[where] = favoriteDeleted)
      break
      case 'read':
        let readDeleted = db[where].filter(element => element.id != id)
        resolve(db[where] = readDeleted )
      break
      default:
        let deleted = db[where].filter(element => element.id != id)
        resolve(db[where] = deleted)
      break
    }

  })
}

module.exports = {
  listBooks,
  getBook,
  createBook,
  deleteBook,
}
const book = require('../components/book/network.js')


function router(server) {
  server.use('/book', book)
}

module.exports = router;
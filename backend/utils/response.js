const httpCodes = {
  '200': 'Request Done',
  '201': 'Successfully created',
  '400': 'Bad Request',
  '500': 'Internal Error'
}

exports.success = function (req, res, clientMessage, status) {
  
  let message = clientMessage;
  let statusCode = status
  
  if (!status) {
    statusCode = 200
  }

  if (!clientMessage) {
    message = httpCodes[statusCode]
  }


  res.status(statusCode).send({
    error: '',
    body: message
  })

}

exports.error = function (req, res, clientMessage, status, error) {
  let message = clientMessage;
  let statusCode = status
  
  if (!status) {
    statusCode = 500
  }

  if (!clientMessage) {
    message = httpCodes[statusCode]
  }


  res.status(statusCode).send({
    error: error,
    body: message
  })

}

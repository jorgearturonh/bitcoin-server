function callRpcAPI(res) {
 return callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
    else{

      const error = JSON.parse(body)
      res.send(error)
    }
  }
}

module.exports = callRpcAPI
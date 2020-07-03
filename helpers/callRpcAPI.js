function callRpcAPI(res) {
 return callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      if(res){
        res.send(data)
      }  else {
        return data
      }
    }
    else{
      const error = JSON.parse(body)
      if(res) {
        res.send(error)
      }
      return error;
    }
  }
}

module.exports = callRpcAPI
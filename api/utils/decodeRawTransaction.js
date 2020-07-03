const makeRequest = require('./makeRequest')
const config = require('../config')

function decodeRawTransaction(hex, res) {
    var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${
       hex
      }"]}`;
    makeRequest(dataString, config.NODE_URI, config.headers,res)
}

module.exports = decodeRawTransaction
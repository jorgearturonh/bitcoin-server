const makeRequest = require('./makeRequest')
const config = require('../config')

function getRawTransaction(id,res) {
    var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction","params":["${
        id
    }", false]}`;
    makeRequest(dataString, config.NODE_URI, config.headers,res)
}

module.exports = getRawTransaction
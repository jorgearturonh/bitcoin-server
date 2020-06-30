const express = require('express')
const router = express.Router()
var request = require('request')

const dotenv = require('dotenv')
dotenv.config()

const USER = process.env.RPC_USER || 'kali'
const PASS = process.env.RPC_PASSWORD || 'kali'

const headers = {
  'content-type': 'text/plain;',
}

router.get('/test', (req, res) => res.json({msg: 'backend works'}))

router.get('/getblockcount', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`
  var options = {
    url: `http://192.168.0.8:8333/`,
    method: 'POST',
    headers: headers,
    body: dataString,
  }

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      res.send(data)
    }
  }
  request(options, callback)
})

// ... routes will go here

module.exports = router

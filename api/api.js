const express = require('express')
const router = express.Router()
const config = require('./config/')
const getRawTransaction = require('./utils/getRawTransaction')
const decodeRawTransaction = require('./utils/decodeRawTransaction')
const makeRequest = require('./utils/makeRequest')

router.get('/test', (req, res) => res.json({msg: 'backend works'}))

router.get("/getrawtransaction/:id", (req, res) => {
  const id = req.params.id
  getRawTransaction(id, res)
});

router.get("/decoderawtransaction/:hex", (req, res) => {
  const hex = req.params.hex
  decodeRawTransaction(hex, res)
});

router.get("/getblock/:hash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
    req.params.hash
  }"]}`;
  makeRequest(dataString, config.NODE_URI, config.headers, res)
});

router.get("/getblockhash/:index", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockhash","params":[${
    req.params.index
  }]}`;
  makeRequest(dataString, config.NODE_URI, config.headers, res)
});

router.get('/getblockcount', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`
  makeRequest(dataString, config.NODE_URI, config.headers, res)
})

router.get('/getbestblockhash', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`
  makeRequest(dataString, config.NODE_URI, config.headers, res)
})

router.get('/getconnectioncount', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getconnectioncount","params":[]}`
  makeRequest(dataString, config.NODE_URI, config.headers, res)
})

router.get('/getdifficulty', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getdifficulty","params":[]}`
  makeRequest(dataString, config.NODE_URI, config.headers, res)
})

router.get('/getblockchaininfo', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblokchaininfo","params":[]}`
  makeRequest(dataString, config.NODE_URI, config.headers, res)
})

router.get('/getmininginfo', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getmininginfo","params":[]}`
  makeRequest(dataString, config.NODE_URI, config.headers, res)
})

router.get('/getpeerinfo', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getpeerinfo","params":[]}`
  makeRequest(dataString, config.NODE_URI, config.headers, res)
})

router.get('/getrawmempool', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawmempool","params":[]}`
  makeRequest(dataString, config.NODE_URI, config.headers, res)
})

module.exports = router

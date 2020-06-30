const express = require('express')
const router = express.Router()
var request = require('request')
const dotenv = require('dotenv')
const callRpcAPI = require('../helpers/callRpcAPI')
const buildRpcCallOptions = require('../helpers/buildRpcCallOptions')

dotenv.config()

const USER = process.env.RPC_USER || 'user'
const PASS = process.env.RPC_PASSWORD || 'pass'
const NODE_URI = `http://${USER}:${PASS}@127.0.0.1:8332/`

const headers = {
  'content-type': 'text/plain;',
}

router.get('/test', (req, res) => res.json({msg: 'backend works'}))

router.get('/getblockcount', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`
  var options = buildRpcCallOptions(NODE_URI, headers, dataString)
  const callback = callRpcAPI(res)
  request(options, callback)
})

router.get('/getbestblockhash', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`
  var options = buildRpcCallOptions(NODE_URI, headers, dataString)
  const callback = callRpcAPI(res)
  request(options, callback)
})

router.get('/getconnectioncount', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getconnectioncount","params":[]}`
  var options = buildRpcCallOptions(NODE_URI, headers, dataString)
  const callback = callRpcAPI(res)
  request(options, callback)
})

router.get('/getdifficulty', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getdifficulty","params":[]}`
  var options = buildRpcCallOptions(NODE_URI, headers, dataString)
  const callback = callRpcAPI(res)
  request(options, callback)
})

router.get('/getblockchaininfo', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblokchaininfo","params":[]}`
  var options = buildRpcCallOptions(NODE_URI, headers, dataString)
  const callback = callRpcAPI(res)
  request(options, callback)
})

router.get('/getmininginfo', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getmininginfo","params":[]}`
  var options = buildRpcCallOptions(NODE_URI, headers, dataString)
  const callback = callRpcAPI(res)
  request(options, callback)
})

router.get('/getpeerinfo', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getpeerinfo","params":[]}`
  var options = buildRpcCallOptions(NODE_URI, headers, dataString)
  const callback = callRpcAPI(res)
  request(options, callback)
})

router.get('/getrawmempool', (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawmempool","params":[]}`
  var options = buildRpcCallOptions(NODE_URI, headers, dataString)
  const callback = callRpcAPI(res)
  request(options, callback)
})


router.get("/getblock/:hash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
    req.params.hash
  }"]}`;
  var options = buildRpcCallOptions(NODE_URI, headers, dataString)
  const callback = callRpcAPI(res)
  request(options, callback);
});


router.get("/getblockhash/:index", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockhash","params":[${
    req.params.index
  }]}`;
  var options = buildRpcCallOptions(NODE_URI, headers, dataString)
  const callback = callRpcAPI(res)
  request(options, callback);
});


router.get("/getrawtransaction/:id", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction","params":["${
    req.params.id
  }"]}`;
  var options = buildRpcCallOptions(NODE_URI, headers, dataString)
  const callback = callRpcAPI(res)
  request(options, callback);
});

router.get("/decoderawtransaction/:hex", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${
    req.params.hex
  }"]}`;
  var options = buildRpcCallOptions(NODE_URI, headers, dataString)
  const callback = callRpcAPI(res)
  request(options, callback);
});


module.exports = router

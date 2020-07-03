const bitcoin = require('bitcoinjs-lib')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const rpcMethods = require('./api/api')

const generateRandomAddress = require('./core/wallet/generateRandomAddress')
const validateKeys = require('./core/validators/validateKeys')
const search = require('./core/utils/searchTransactionByHash')

const port = process.env.PORT || 4444
const TESTNET = bitcoin.networks.testnet

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api', rpcMethods)

server = app.listen(port, () => console.log(`Server running on port ${port}`))

search()
const keys = generateRandomAddress()
validateKeys(keys)
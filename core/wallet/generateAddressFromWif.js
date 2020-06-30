const bitcoin = require('bitcoinjs-lib')
const TESTNET = bitcoin.networks.testnet

function generateAddressFromWif(wif) {
  const keyPair = bitcoin.ECPair.fromWIF(wif)
  const {address} = bitcoin.payments.p2pkh({pubkey: keyPair.publicKey})
  return address
}

module.exports = generateAddressFromWif

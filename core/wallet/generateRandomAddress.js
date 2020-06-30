const bitcoin = require('bitcoinjs-lib')
const TESTNET = bitcoin.networks.testnet

function generateRandomAddress() {
  const keyPair = bitcoin.ECPair.makeRandom()
  const addressData = bitcoin.payments.p2pkh({pubkey: keyPair.publicKey})
  const {address} = addressData
  return {pubKey: address, privKey: keyPair.toWIF()}
}

module.exports = generateRandomAddress

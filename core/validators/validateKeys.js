const generateAddressFromWif = require('../wallet/generateAddressFromWif')

function validateKeys(keys) {
  const recreatePublicAddress = generateAddressFromWif(keys.privKey)
  if (recreatePublicAddress === keys.pubKey) {
    console.log(recreatePublicAddress + 'is a valid address')
    return true
  }
  return false
}

module.exports = validateKeys

const getRawTransaction = require('../../api/utils/getRawTransaction')
const decodeRawTransaction = require('../../api/utils/decodeRawTransaction')

function searchTransactionByHash() {
  const txId = 'efb3f60304532ebc80163b5f375fa8a94a39a8b0807b99703b6b646c1f7af5bf'
  const resGetRaw = {
      send: (data) => {
          const raw = data.result
          const decodedTx = decodeRawTransaction(raw, resDecodeTx)
      }
  }

  const resDecodeTx = {
      send: (data) => {
          console.log(data)
      }
  }
  const rawTx = getRawTransaction(txId, resGetRaw)
}

module.exports = searchTransactionByHash
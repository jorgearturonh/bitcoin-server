const request = require('request')
const buildRpcCallOptions = require('../../helpers/buildRpcCallOptions')
const callRpcAPI = require('../../helpers/callRpcAPI')

function makeRequest(dataString, NODE_URI, headers, res) {
    var options = buildRpcCallOptions(NODE_URI, headers, dataString)
    const callback = callRpcAPI(res)
    request(options, callback);
}

module.exports = makeRequest
function buildRpcCallOptions(NODE_URI, headers, dataString) {
    var options = {
        url: NODE_URI,
        method: 'POST',
        headers: headers,
        body: dataString,
      }

      return options
}

module.exports = buildRpcCallOptions
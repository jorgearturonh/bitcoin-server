const dotenv = require('dotenv')
const USER = process.env.RPC_USER || 'user'
const PASS = process.env.RPC_PASSWORD || 'pass'
const config = {
    NODE_URI: `http://${USER}:${PASS}@127.0.0.1:8332/`,
    headers: {
        'content-type': 'text/plain;',
    }
}

dotenv.config()

module.exports = config
process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')
environment.splitChunks()

const config = environment.toWebpackConfig()
config.devtool = 'none'
module.exports = config

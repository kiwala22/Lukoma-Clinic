const { environment } = require('@rails/webpacker')
const jquery = require('./plugins/jquery')

environment.plugins.prepend('jquery', jquery)

const devtool = process.env.DEVTOOL;
if (devtool) environment.config.merge({ devtool });
module.exports = environment

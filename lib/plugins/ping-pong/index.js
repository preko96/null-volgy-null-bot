const { PLUGIN_NAME } = require('../symbols')

async function pluginPingPong (client) {
  client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!')
    }
  })
}

pluginPingPong[PLUGIN_NAME] = 'Ping Pong'

module.exports = { pluginPingPong }

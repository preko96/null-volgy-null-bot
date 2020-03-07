const fetch = require('node-fetch')
const { PLUGIN_NAME } = require('../symbols')

async function pluginChuckNorris (client) {
  client.on('message', async msg => {
    if (msg.content === '!chucknorris') {
      try {
        const res = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await res.json()
        await msg.reply(data.value)
      } catch (error) {
        console.log(error)
      }
    }
  })
}

pluginChuckNorris[PLUGIN_NAME] = 'Chuck Norris'

module.exports = { pluginChuckNorris }

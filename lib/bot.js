const Discord = require('discord.js')
const { startPlugins } = require('./plugins')

async function startBot () {
  const token = process.env.BOT_TOKEN
  if (!token) {
    throw Error('BOT_TOKEN environment variable is required to start the bot')
  }

  const client = new Discord.Client()

  client.on('ready', () => {
    console.log(`Bot is ready, logged in as ${client.user.tag}!`)
    startPlugins(client)
  })

  await client.login(token)

  return client
}

module.exports = { startBot }

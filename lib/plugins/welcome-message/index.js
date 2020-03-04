const { PLUGIN_NAME } = require('../symbols')

async function pluginWelcomeMessage (client) {
  const channelName = process.env.WELCOME_MESSAGE_CHANNEL_NAME
  if (!channelName) {
    throw Error('WELCOME_MESSAGE_CHANNEL_NAME environment variable is required to start the Welcome Message plugin')
  }

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === channelName)

    if (!channel) {
      return
    }

    channel.send(`${member} megérkezett a Völgybe!`)
  })
}

pluginWelcomeMessage[PLUGIN_NAME] = 'Welcome Message'

module.exports = { pluginWelcomeMessage }

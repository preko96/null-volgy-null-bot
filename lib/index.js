const { startErrorListeners } = require('./error-handler')
const { startBot } = require('./bot')

startErrorListeners()
startBot()

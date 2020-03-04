function errorHandler (error) {
  console.error(error)
  process.exit(1)
}

function startErrorListeners () {
  process.on('unhandledRejection', errorHandler)
  process.on('uncaughtException', errorHandler)
}

module.exports = { errorHandler, startErrorListeners }

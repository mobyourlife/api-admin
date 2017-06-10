import Hapi from 'hapi'
import winston from 'winston'

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({level: 'silly'})
  ]
})

const connectionString = process.env.MOB_MONGODB_URL || 'mongodb://localhost:27017/mobyourlife'

const server = new Hapi.Server()
server.connection({
  host: '0.0.0.0',
  port: '5000',
  routes: {
    cors: true
  }
})

server.start(() => {
  logger.info('API server running...')
})

import Hapi from 'hapi'
import Jwt from 'hapi-auth-jwt'
import winston from 'winston'
import getAllRoutes from './utils/get-all-routes'

import config from './config'

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({level: 'silly'})
  ]
})

const server = new Hapi.Server()
server.connection({
  host: '0.0.0.0',
  port: '5000',
  routes: {
    cors: true
  }
})

server.register([Jwt], (err) => {
  if (err) {
    throw err
  }

  server.auth.strategy('jwt', 'jwt', 'required', {
    key: config.jwtSecret,
    verifyOptions: {algorithms: ['HS256']}
  })

  getAllRoutes().forEach(route => {
    server.route(route)
    logger.info(`Registered route ${route.method} ${route.path}`)
  })
})

server.start(() => {
  logger.info('API server running...')
})

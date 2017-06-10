import Boom from 'boom'
import Joi from 'joi'
import jwt from 'jsonwebtoken'

import config from '../config'

export default {
  method: 'POST',
  path: '/token',
  config: {
    auth: false,
    pre: [
      { method: verifyCredentials, assign: 'user' }
    ],
    validate: {
      payload: validatePayload()
    },
    handler: (req, res) => {
      const { user } = req.pre
      const token = createToken(user)
      res({
        user,
        token
      })
    }
  }
}

function verifyCredentials (req, res) {
  const { fbUserId, accessToken } = req.payload
  if (fbUserId !== 'letmein' || accessToken !== '123456') {
    res(Boom.badData('You are not welcome here!'))
  } else {
    res({
      username: 'youarein'
    })
  }
}

function validatePayload () {
  return Joi.object({
    fbUserId: Joi.string().required(),
    accessToken: Joi.string().required()
  })
}

function createToken (user) {
  return jwt.sign({
    id: user.fbUserId,
    username: user.fbUserId,
    scope: ['some', 'a-few']
  }, config.jwtSecret, {
    algorithm: 'HS256',
    expiresIn: '1d'
  })
}

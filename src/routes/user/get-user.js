export default {
  method: 'GET',
  path: '/{userId}',
  config: {
    auth: {
      strategy: 'jwt',
      scope: ['admin']
    },
    handler: (req, res) => {
      res({
        username: req.params.userId
      })
    }
  }
}

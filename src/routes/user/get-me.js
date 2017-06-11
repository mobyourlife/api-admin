export default {
  method: 'GET',
  path: '/me',
  config: {
    auth: {
      strategy: 'jwt'
    },
    handler: (req, res) => {
      res({
        username: 'myself'
      })
    }
  }
}

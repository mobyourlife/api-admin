export default {
  method: 'POST',
  path: '/token',
  config: {
    handler: (req, res) => {
      res().code(401)
    }
  }
}

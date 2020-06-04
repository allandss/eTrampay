const routes = require('next-routes')

module.exports = routes()
  .add('/', 'index')
  .add('/', 'inscricao')
  .add('/', 'obrigado')
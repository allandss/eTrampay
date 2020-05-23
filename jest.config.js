const esModules = ['react-toastify'].join('|')

module.exports = {
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
}

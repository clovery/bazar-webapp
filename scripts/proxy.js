const url = require('url')
const proxy = require('proxy-middleware')

/* 代理主机配置 */
const hosts = {
  'default': 'http://m.prepub.xkeshi.net'
}

module.exports = function(app, host) {
  host = hosts[host || 'default']

  app.use('/api', proxy(host))
}

const path = require('path')
const express = require('express')
const webpack = require('webpack')
const open = require('open')

const port = process.env.port || 7080
const app = express()
const config = require('./webpack.config')
const host = require('ip').address() || 'localhost'
const compiler = webpack(config)

const serverOpts = {
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  stats: {colors: true},
  publicPath: config.output.publicPath
}

/* 设置代理 */
require('./scripts/proxy')(app, process.env.proxy)

app.use(require('webpack-dev-middleware')(compiler, serverOpts))
app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'))
})

app.listen(port, host, function (err) {
  if (err) {
    console.error(err);
    return;
  }
  const url = 'http://' + host + ':' + port
  console.log('Listening at ', url);
  open(url);
})

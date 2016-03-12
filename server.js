var path = require('path')
var express = require('express')
var webpack = require('webpack')
var open = require('open')
var WebpackDevServer = require('webpack-dev-server')

var config = require('./webpack.config')
var host = require('ip').address() || 'localhost'
var port = 7080
var app = express()
var compiler = webpack(config)

var proxy = [{
    path: "/api/*",
    target: "http://localhost",
}]

const serverOpts = {
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  stats: {colors: true},
  publicPath: config.output.publicPath
}

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
  var url = ['http://', host, ':', port ].join('');
  console.log('Listening at ', url);
  open(url);
})

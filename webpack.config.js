var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './lib/main'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.styl$/,
        loader: "style-loader!css-loader!stylus-loader"
      }
    ]
  },
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'bazar',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico')
    })
  ],
  devtool: '#source-map',

  resolve: {
    alias: {
      utils: path.join(__dirname, 'lib/utils'),
      store: path.join(__dirname, 'lib/store'),
      assets: path.join(__dirname, 'assets'),
      components: path.join(__dirname, 'lib/common/components'),
      directives: path.join(__dirname, 'lib/common/directives')
    }
  }
}

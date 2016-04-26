var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './app/index'
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
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" }
    ]
  },

  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Vue Web App',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'app/assets', 'images', 'favicon.ico')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],

  resolve: {
    alias: {
      utils: path.join(__dirname, 'app/utils'),
      store: path.join(__dirname, 'app/store'),
      assets: path.join(__dirname, 'app/assets'),
      stylus: path.join(__dirname, 'app/assets/stylus'),
      components: path.join(__dirname, 'app/common/components'),
      directives: path.join(__dirname, 'app/common/directives')
    }
  },

  devtool: '#source-map'
}

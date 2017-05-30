const path = require('path');
const webpack = require('webpack');
const MY_BUILD = process.env['MY_BUILD'] || 'web';
console.log(JSON.stringify(MY_BUILD));

module.exports = {
  entry: './www/js/script.js',
  output: {
    path: path.resolve(__dirname, 'www/js'),
    filename: 'script.bundle.js',
    publicPath: 'js/',
    pathinfo: true
  },
  target: MY_BUILD === 'electron' ? 'electron-renderer' : 'web',
  devServer: {
    contentBase: './www'
  },
  plugins: [
    new webpack.DefinePlugin({
      'MY_BUILD': JSON.stringify(MY_BUILD)
    })
  ]
}
module.exports = {
  entry: './www/js/script.js',
  output: {
    filename: './www/js/script.bundle.js'
  },
  target: 'electron-renderer',
  devServer: {
    contentBase: 'www',
    hot: true
  }
}
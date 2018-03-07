const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // environment variables
  env: {
    NODE_ENV: '"production"'
  },
  // define global constants for application see https://webpack.js.org/plugins/define-plugin/
  defineConstants: {
  },
  module: {
    imageMin: {
      enable: true
    },
    postcss: {
      sprites: {
        enable: true
      }
    }
  },
  webpack: {
    plugins: [
      // config favicon.ico
      new CopyWebpackPlugin([
        { from: 'src/favicon.ico', to: 'favicon.ico' }
      ])
    ]
  }
}

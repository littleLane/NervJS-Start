const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // environment variables
  env: {
    NODE_ENV: '"development"'
  },
  // define global constants for application see https://webpack.js.org/plugins/define-plugin/
  defineConstants: {
  },
  // dev server port
  port: 3030,
  // dev server host
  host: '0.0.0.0',
  // dev server protocol, support https
  protocol: 'http',
  webpack: {
    plugins: [
      // config favicon.ico
      new CopyWebpackPlugin([
        { from: 'src/favicon.ico', to: 'favicon.ico' }
      ])
    ]
  }
}

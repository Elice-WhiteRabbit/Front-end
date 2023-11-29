const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = (env) =>
  merge(config, {
    mode: 'production',
    devtool: 'hidden-source-map',

    plugins: [
      new Dotenv({
        path: `./.env.${env.mode}`,
      }),
    ],
  });

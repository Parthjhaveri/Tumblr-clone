const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');
const aliases = require('./aliases')

module.exports = {
  entry: "./front/Entry.jsx",
  output: {
    path: "./front/public",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    root: path.resolve(__dirname),
    alias: aliases,
    extensions: ["", ".js", ".jsx" ]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};
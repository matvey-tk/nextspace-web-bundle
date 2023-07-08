const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './main.js',
  output: {
    filename: 'nextspace.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'node_modules/cesium/Build/Cesium/Workers', to: 'Workers' },
        { from: 'node_modules/cesium/Build/Cesium/Assets', to: 'Assets' },
        { from: 'node_modules/cesium/Build/Cesium/Widgets', to: 'Widgets' },
        { from: 'node_modules/cesium/Build/Cesium/ThirdParty', to: 'ThirdParty' }
      ],
    }),
  ]
};

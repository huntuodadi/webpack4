const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
//   optimization: {
//     splitChunks: {
//         cacheGroups: {
//             commons: {
//                 chunks: "initial",
//                 minChunks: 2,
//                 maxInitialRequests: 5, // The default limit is too small to showcase the effect
//                 minSize: 0 // This is example is too small to create commons chunks
//             }
//         }
//     }
// },
//   devServer: {
//     contentBase: './dist',
//     host: 'localhost'
//   }
}; 
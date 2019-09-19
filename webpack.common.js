const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.ts'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
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
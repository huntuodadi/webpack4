const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MyPlugin = require('./plugins/myplugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MyPlugin({options: true})
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
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader', 'postcss-loader']
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
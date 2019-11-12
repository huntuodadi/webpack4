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
      title: 'Production',
      template: 'src/index.html'
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
        test: /\.(css|sass)$/i,
        use: ['style-loader',
        {
          loader: 'css-loader',
          options: {
            // 如果在sass里又引入了一个sass, 第2个sass只会走css-loader, 配置impeortLoaders: 2会再往前执行两个loader
            importLoaders: 2
          }
        }, 'postcss-loader']
      },
      {
        test: /\.(eot|ttf|svg|woff)$/i,
        use: ['file-loader']
      },
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
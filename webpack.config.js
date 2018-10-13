const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FastUglifyJsPlugin = require('fast-uglifyjs-plugin');


const absulatePath = path.resolve(__dirname, 'dist');


module.exports = {
  entry: {
    'mainForSnake': './proj/snake/mainForSnake.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './proj/snake/snindex.html',
      title: 'Development'
    }),
    new FastUglifyJsPlugin({
      compress: {
        warnings: false,
        // drop_console: true,
        drop_debugger: true,
        drop_console: true,//console
        // pure_funcs: ['console.log']//移除console
      },
      debug: false,
      // workerNum: os.cpus().length,
    }),
  ],
  // mode: 'development',
  mode: 'production',
  output: {
    filename: '[name].js',
    path: absulatePath,
    chunkFilename: '[name].js',
    publicPath: path.resolve(__dirname, '../dist/js/'),
    sourceMapFilename: '[file].map',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            // options: {
            //   modules: true
            // } 导致样式名变更
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
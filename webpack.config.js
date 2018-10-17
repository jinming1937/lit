const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
      title: '小指嘎'
    }),
  ],
  mode: 'development',
  // mode: 'production',
  output: {
    filename: '[name].js',
    path: absulatePath,
    chunkFilename: '[name].js',
    publicPath: absulatePath, //
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
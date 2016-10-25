const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [{
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      }, {
        test: /\.html$/,
        loader: 'html'
      }, {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }, {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?sourceMap')
      }, {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        exclude: /node_modules/,
        loaders: ['raw-loader', 'postcss-loader', 'sass-loader']
      },
      { test: /\.css$/, loader: 'raw-loader!postcss-loader' }
    ],
    postcss: function () {
      return [
        require('autoprefixer')(AUTOPREFIXER_BROWSERS)
      ]
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

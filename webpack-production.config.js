
const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    entry: [path.join(__dirname, '/src/app/app.js')],
    // Render source-map file for final build
    devtool: 'source-map',
    // output config
    output: {
        path: buildPath, // Path of output file
        filename: 'app.js', // Name of output file
    },
    plugins: [
    // Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            // supresses warnings, usually from module minification
            warnings: false,
        },
    }),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Transfer Files
    new TransferWebpackPlugin([{
        from: 'www'
    }, ], path.resolve(__dirname, 'src')), ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      preLoaders: [
          {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'source-map'
          }
      ],
      loaders: [
          {
              test: /\.scss$/,
              include: /src/,
              loaders: [
                  'style',
                  'css',
                  'autoprefixer?browsers=last 3 versions',
                  'sass?outputStyle=expanded'
              ]
          },
          {
              test: /\.(jpe?g|png|gif|svg)$/i,
              loaders: [
                  'url?limit=8192',
                  'img'
              ]
          },
          {
              test: /\.(jsx|js)?$/,
              exclude: /node_modules/,
              loader: [ 'react-hot' ]
          },
          {
              test: /\.(jsx|js)?$/,
              exclude: /node_modules/,
              loaders: ['babel-loader'],
              query: {
                presets: ['es2015', 'react']
            }
          }
      ],
    },
};

module.exports = config;


const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    // Entry points to the project
    entry: ['webpack/hot/dev-server', 'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.js'), ],
    // Server Configuration options
    devServer: {
        contentBase: 'src/www', // Relative directory for base of server
        devtool: 'eval',
        hot: true, // Live-reload
        inline: true,
        port: 3000, // Port Number
        host: 'localhost', // Change to '0.0.0.0' for external facing server
    },
    devtool: 'eval',
    output: {
        path: buildPath, // Path of output file
        filename: 'app.js',
    },
    plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Moves files
    new TransferWebpackPlugin([{
        from: 'www'
    }, ], path.resolve(__dirname, 'src')), ],
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
              test: /\.json$/,
              loader: 'json'
          },
          {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loaders: [
                  'react-hot',
                  'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
              ]
          },
          {
            test: /\.jsx?$/,         // Match both .js and .jsx files
            exclude: /node_modules/,
            loader: "babel",
            query:
            {
              presets:['react', 'es2015']
            }
          }
      ],
    },
};

module.exports = config;

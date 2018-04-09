// webpack.config.js
const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, '.');

const babelLoaderConfiguration = {
  test: /\.js$/,
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: ['react-native-web'],
      presets: ['react-native', 'es2015','react']
    }
  }
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]'
    }
  }
};

module.exports = {
  // your web-specific entry file
  // entry: "./index.web.js",
  entry: {
    app: './index.web.js',
    vendors: './index.js',
  },

  // configures where the build ends up
  output: {
    filename: '[name].web.js',
    path: path.resolve(appDirectory, 'dist')
  },

  // ...the rest of your config

  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration
    ]
  },

  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV !== 'production' || true
    })
  ],

  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [ '.web.js', '.js', '.wasm' ]
  },
  mode: 'development',
}

// module.exports = {
//   entry: "./index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "index.js",
//   },
//   mode: "development",
//   plugins: [
//       // `process.env.NODE_ENV === 'production'` must be `true` for production
//       // builds to eliminate development checks and reduce build size. You may
//       // wish to include additional optimizations.
//       new webpack.DefinePlugin({
//         'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
//         __DEV__: process.env.NODE_ENV !== 'production' || true
//       })
//     ],
//     module: {
//         rules: [
//           babelLoaderConfiguration,
//           imageLoaderConfiguration
//         ]
//       },
//       resolve: {
//           // If you're working on a multi-platform React Native app, web-specific
//           // module implementations should be written in files using the extension
//           // `.web.js`.
//           extensions: [ '.web.js', '.js', '.wasm' ]
//         },
// };

const webpack = require('webpack');

const paths = require('./paths');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
// 为方便配置，以根目录为本地服务器地址
const publicPath = '/';

// 下面是development的webpack配置
// 为了更好的开发体验，会专注于更快的构建速度
module.exports = merge(commonConfig, {
  mode: 'development',
  // 入口
  entry: [
    // 热更新，并实时显示错误
    'react-dev-utils/webpackHotDevClient',
    // 主要代码，之所以放在最后，是为了程序有错误，修改后还能刷新
    paths.appIndexJs
  ],
  output: {
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    // WebpackDevServer 伺服的一个虚拟主文件
    // 包含所有入口的代码以及 webpack runtime
    filename: 'static/js/bundle.js',
    // chunk 文件（开启 code splitting 才会有）
    chunkFilename: 'static/js/[name].chunk.js',
    // WebpackDevServer 伺服的根目录：/
    publicPath
  },

  module: {
    rules: [
      {
        // oneOf 的功能类似 switch 语句，最后一个是兜底的
        oneOf: [
          // style-loader:把css代码注射到 style 标签里
          // css-loader:解析css中的“引用路径”，构建出资源依赖
          // 生产环境中，会把css提取到一个文件中，不会在style标签里
          {
            test: /\.css$/,
            // exclude: /node_modules/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1
                }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    // Add module names to factory functions so they appear in browser profiler.
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
});

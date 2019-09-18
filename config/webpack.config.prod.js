const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const paths = require('./paths');
const TerserPlugin = require('terser-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// 以下是生产环境的配置项，目标是为了打包出体积更小、更合理的资源文件
module.exports = merge(commonConfig, {
  mode: 'production',
  // 遇到错误就抛错，不再往下执行
  bail: true,
  output: {
    // 打包的主路径
    path: paths.appBuild,
    // 主文件以及一个异步加载chunk的文件
    filename: 'static/js/[name].[chunkhash:6].js',
    chunkFilename: 'static/js/[name].[chunkhash:6].chunk.js',
    publicPath: paths.servedPath
  },
  resolve: {
    modules: [__dirname, 'node_modules']
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
      }
    }),
    new webpack.NamedChunksPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[name].css'
    }),
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new GenerateSW({
      clientsClaim: true,
      exclude: [/\.map$/, /asset-manifest\.json$/, /\.(?:png|jpg|jpeg|svg)$/, /\.js$/],
      importWorkboxFrom: 'local',
      navigateFallback: 'index.html',
      //定义运行时缓存（可接受多个json对象）
      runtimeCaching: [
        {
          urlPattern: /\.html$/,
          // 在缓存时使用 StaleWhileRevalidate 策略.
          handler: 'StaleWhileRevalidate',
          options: {
            // 定义缓存这些图片的 cache名称
            cacheName: 'my-html-cache',

            //配置 expiration
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60
            },

            //配置哪些响应被认为是可缓存的
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          // 在缓存时使用 StaleWhileRevalidate 策略.
          handler: 'StaleWhileRevalidate',
          options: {
            // 定义缓存这些图片的 cache名称
            cacheName: 'my-images-cache',

            //配置 expiration
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 3600
            },

            //配置哪些响应被认为是可缓存的
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /\.js$/,
          // 在缓存时使用 StaleWhileRevalidate 策略.
          handler: 'StaleWhileRevalidate',
          options: {
            // 定义缓存这些图片的 cache名称
            cacheName: 'my-js-cache',

            //配置 expiration
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 3600
            },

            //配置哪些响应被认为是可缓存的
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ],
      navigateFallbackBlacklist: [
        // Exclude URLs starting with /_, as they're likely an API call
        new RegExp('^/_'),
        // Exclude any URLs whose last part seems to be a file extension
        // as they're likely a resource and not a SPA route.
        // URLs containing a "?" character won't be blacklisted as they're likely
        // a route with query params (e.g. auth callbacks).
        new RegExp('/[^/?]+\\.[^/]+$')
      ]
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static'
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          ecma: 8,
          compress: {
            drop_console: true
          }
        }
      })
    ]
  }
});

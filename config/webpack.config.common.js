const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const HappyPack = require('happypack');
const AutoDllPlugin = require('autodll-webpack-plugin');

// publicUrl和publicPath类似，
// 只是这个值会在 index.html中用 %PUBLIC_URL% 引用，
// 以及js中process.env.PUBLIC_URL引用
// 省略‘/’，是为了让 %PUBLIC_PATH%/xyz更直观些，总比 %PUBLIC_PATH%xyz 好阅读些
const publicUrl = process.env.NODE_ENV === 'development' ? '' : paths.servedPath;
// 需要注入app中的环境变量
const env = getClientEnvironment(publicUrl);
module.exports = {
  resolve: {
    // webpack 能识别的文件扩展名
    extensions: ['.js', '.jsx', '.json', '.less', '.css']
    // 针对 npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
    // mainFields: ["jsnext:main", "browser", "main"]
  },
  module: {
    rules: [
      {
        oneOf: [
          // 图片转 base64
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000
            }
          },
          // babel loader
          {
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            exclude: /node_modules/,
            use: 'happypack/loader'
          },
          // file-loader将所有静态文件可被WebpackDevServer伺服
          // 生产环境，这些静态文件会被拷贝到build目录
          // 之所以不用 test ，是为了能够处理被上面的 loader 漏掉的文件
          {
            exclude: [
              /\.(js|jsx|mjs)$/,
              /\.(css|less)$/,
              /\.(bmp|gif|jpe?g|png)$/,
              /\.less$/,
              /\.html$/,
              /\.json$/
            ],
            loader: 'file-loader',
            options: {
              name: 'static/assets/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HappyPack({
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify:
        process.env.NODE_ENV === 'development'
          ? {}
          : {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true
            }
    }),
    new AutoDllPlugin(
      process.env.NODE_ENV === 'development'
        ? {}
        : {
            context: path.join(__dirname, '..'),
            inject: true, //自动在index.html引入dll
            debug: true,
            filename: '[name]_[hash].dll.js',
            path: './dll',
            entry: {
              react: ['react', 'react-dom', 'styled-components']
            }
          }
    ),
    new InterpolateHtmlPlugin(env.raw)
  ],
  // node中用到，但是浏览器不用到的类库，给出空对象模拟
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};

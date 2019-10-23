var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './example/main.js',
  output: {
    path: path.resolve(__dirname, './doc/static'),
    publicPath: './static/',
    filename: 'build.min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'vue-scroller-loading': path.resolve(__dirname, './src/lib/scroller')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])

    if (process.env.BUILD === 'npm') {
      module.exports.entry = './src/lib/scroller/index.js'
      module.exports.output = {
        path: path.resolve(__dirname, './dist'),
        filename: 'vue-scroller-loading.js',
        library: 'VueScrollerLoading',
        libraryTarget: 'umd',
        umdNamedDefine: true
      }
      module.exports.resolve = {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
      }
    }
}

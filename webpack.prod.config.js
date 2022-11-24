const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production', //生产模式会压缩代码
  entry: path.resolve(__dirname, './src/lib/index.tsx'), //指定打包入口文件
  output: {
    filename: 'index.js', //打包后的文件名
    path: path.resolve(__dirname, './dist'), //输出路径
    libraryTarget: 'commonjs2', //指定类型，默认是var ?
    library: 'lot_scada',
  },

  resolve: {
    // 解决导入的文件可以不用添加后缀名
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // transpileOnly:true
          },
        },
      },
      {
        test: /\.(css)$/,
        // include: path.resolve(__dirname, './src'), // 这里会直接到 src 文件下找 less/css 文件进行编译，这里是项目优化的一个小技巧
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //  您可以在此处指定publicPath
              //  默认情况下，它在webpackOptions.output中使用publicPath
              publicPath: './',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'assets/css/[name].css',
    }),
  ],
};

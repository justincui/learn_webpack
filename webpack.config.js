module.exports = {
  entry: {
    index: './app/index.js',
  },
  output: {
    path: './dist',
    publicPath:'/dist/',
    filename: '[name].b.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|bmp)$/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          //mimetype: 'image/png'
        },
      }
    ]
  }
};

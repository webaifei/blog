var path = require('path');

console.log(__dirname)
module.exports = {
  entry:path.join(__dirname,'admin/app.js'),
  output: {
    filename:'app.bundle.js'
  },
  plugins:[],
  module:{
    loaders:[
      {
        test:/.js$/,
        exclude:/node_modules/,
        loader:'babel?presets[]=es2015&presets[]=react'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]

  }

}

const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/notable.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};

// const webpack = require('webpack');
// const path = require('path');
//
// const config = {
//   entry: './frontend/notable.jsx',
//   output: {
//     path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         use: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ],
//         exclude: /\.module\.css$/
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
//         ],
//         include: /\.module\.css$/
//       },
//       {
//         test: /\.svg$/,
//         use: 'file-loader'
//       },
//       {
//         test: /\.png$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               mimetype: 'image/png'
//             }
//           }
//         ]
//       }
//     ]
//   },
//   resolve: {
//     extensions: [
//       '.js',
//       '.jsx'
//     ]
//   },
//   devServer: {
//     contentBase: './dist'
//   }
// };
//
// module.exports = config;

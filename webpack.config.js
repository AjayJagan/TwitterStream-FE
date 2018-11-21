const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: 'development',

  devServer: {
    port: 9000,
    historyApiFallback: {
      index: './src/index.html'
    },
    open: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-arrow-functions',
              ["@babel/plugin-proposal-class-properties",
                { "loose": true }],
            ],
          },
        }
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=./images/[name].[ext]'
      }

    ]
  },

  plugins: [htmlPlugin]
  
};

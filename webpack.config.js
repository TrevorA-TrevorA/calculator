const path = require('path');

module.exports = {
  entry: "./src/app.jsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
              {
              test: /\.js?$|\.jsx?$/,
              exclude: /(node_modules)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ["@babel/preset-env", "@babel/preset-react"]
                  }
              }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    resolve: {
        extensions: [".css", ".js", ".jsx"]
    },

    devtool: "source-map",
    stats: {
        errorDetails: true
    }
    
}
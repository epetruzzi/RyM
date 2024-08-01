/* module.exports = {
    entry: "./scripts/index.js",

    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    }
} */

    const path = require('path');

    module.exports = {
      entry: './scripts/index.js',
      output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    };
    
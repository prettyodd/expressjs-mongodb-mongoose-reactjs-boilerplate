var path = require("path");
module.exports = {
	entry: {
		home: "./src/components/home/index.js",
		movie: "./src/components/movie/index.js"
	},
	output: {
		path: path.join(__dirname, "public"),
		filename: "[name].bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
};
  
const path = require("path")

module.exports = {
  mode: "production",
  devtool: "eval-source-map",
  entry: {
    index: "./src/frontend/index.ts"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src", "frontend")]
      }

    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "src", "public", "js")
  }
}
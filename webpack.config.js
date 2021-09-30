const path = require("path")

module.exports = {
  mode: "production",
  devtool: "eval-source-map",
  entry: "./src/frontend/home.ts",
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
    filename: "bundle.js",
    path: path.resolve(__dirname, "src", "public")
  }
}
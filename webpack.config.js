const path = require("path")

module.exports = {
  mode: "production",
  devtool: "eval-source-map",
  entry: {
    home: "./src/frontend/home.ts",
    profile: "./src/frontend/profile.ts"
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
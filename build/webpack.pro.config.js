const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  plugins: [
    // 每次构建成功之后，清除 dist 目录
    new CleanWebpackPlugin(),
  ],
};

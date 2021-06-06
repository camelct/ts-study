const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        // cheap 忽略文件的列信息  调试的时候 列信息是没用的
        // module 定位到 ts 的源码， 而不是 loader 转义后的源码
        // eval-source-map  会将 source-map 以dataurl的形式 打包到文件中，重编译速度是很快的
        devtool: "cheap-module-eval-source-map",
      },
    }),
  ],
};

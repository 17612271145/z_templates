const path = require("path");
const devServer = require('./server');

module.exports = {
  lintOnSave: false,
  publicPath: '',
  productionSourceMap: false,
  css: {
    extract:false,
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  },

  chainWebpack: config=>{
    config.module
      .rule('ts-loader')
      .test(/\.tsx?$/)
      .exclude.add(/node_modules/)
      .end()
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        appendTsSuffixTo: [/\.vue$/]
      });
  },
  devServer
};

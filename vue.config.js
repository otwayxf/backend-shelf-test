const { defineConfig } = require("@vue/cli-service");
const path = require('path');

/**
 *  根据vue cli规定，当前文件为vue的配置文件
 *  configureWebpack  该对象为webpack配置，
 */
module.exports = defineConfig({
  transpileDependencies: true,
  // webpack配置，包含的配置最终会并入webpack
  configureWebpack: {
    resolve: {
      alias: {
        Assets: path.resolve(__dirname, 'src/assets/'),
        Components: path.resolve(__dirname, 'src/components/'),
        iews: path.resolve(__dirname, 'src/views/')
      }
    }
  }
});

const { defineConfig } = require("@vue/cli-service");
const path = require("path");

const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")


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
        Assets: path.resolve(__dirname, "src/assets/"),
        Components: path.resolve(__dirname, "src/components/"),
        Views: path.resolve(__dirname, "src/views/"),
        Utils: path.resolve(__dirname, "src/utils"),
        Plugins: path.resolve(__dirname, "src/plugins"),
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});

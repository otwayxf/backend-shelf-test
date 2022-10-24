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
    devServer: {
      // 代理配置
      proxy: {
        // 这里的api 表示如果我们的请求地址有/api的时候,就出触发代理机制
        // localhost:8888/api/abc  => 代理给另一个服务器
        // 本地的前端  =》 本地的后端  =》 代理我们向另一个服务器发请求 （行得通）
        // 本地的前端  =》 另外一个服务器发请求 （跨域 行不通）
        "/local-api": {
          target: process.env.VUE_APP_URL, // 我们要代理的地址
          changeOrigin: true, // 是否跨域 需要设置此值为true 才可以让本地服务代理我们发出请求
          // 路径重写
          pathRewrite: {
          // 重新路由  localhost:8888/api/login  => www.baidu.com/api/login
            "^/local-api": "" // 假设我们想把 localhost:8888/api/login 变成www.baidu.com/login 就需要这么做
          }
        },
      }
    },
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

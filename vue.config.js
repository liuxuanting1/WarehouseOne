const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: "/miaomiao",
  //开发环境配置
  devServer : {
    // 反向代理
      proxy : {
          '/api2' : {
              target : 'http://localhost:3000',
              // 改变反向代理是否改变地址
              changeOrigin : true
          },
          '/api' : {
              target : 'http://39.97.33.178',
              changeOrigin : true
          }
      }
  }
}
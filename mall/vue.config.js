module.exports = {
  devServer: {
    host: 'localhost',
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
// 接口代理
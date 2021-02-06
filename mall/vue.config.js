module.exports = {
  devServer: {
    host: 'localhost',
    port: 8090,
    proxy: {
      '/api': {
        target: 'https://www.imooc.com',
        changeOrigin: false,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
// 接口代理
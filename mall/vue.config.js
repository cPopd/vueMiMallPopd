module.exports = {
  devServer: {
    host: 'localhost',
    port: 8090,
    proxy: {
      '/api': {
        target: 'www.baidu.com',
        changeOrigin: false
      }
    }
  }
}
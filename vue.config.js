module.exports = {
  lintOnSave: false,
  publicPath: '/server/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    }, // 配置多个代理
  },
}

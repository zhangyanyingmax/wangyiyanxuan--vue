const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    open: true,
  },
  configureWebpack:{
    devServer: {
      port: 3030,
      proxy: {
        '/4000': {
          target: "http://localhost:4000",
          changeOrigin: true,
          pathRewrite: {
            '^/4000': '', // rewrite path
          },
        }
      }

    },
    resolve: {
      alias: {
        'components': resolve('src/components'),
        'pages': resolve('src/pages')
      }
    },
  },

}

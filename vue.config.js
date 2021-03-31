module.exports = {
    chainWebpack: config => {
        config
          .plugin('html')
          .tap(args => {
            args[0].title = 'Bibliography for SSW Poster'
            return args
          })
      }
}
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit:37.5
})

module.exports = {
    // 选项...

    runtimeCompiler: true,
    lintOnSave: false,
    css: {
      loaderOptions:{
        postcss: {
          plugins:[
            postcss
          ]
        }
      }
    }

  }
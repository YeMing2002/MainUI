// const path = require("path");

module.exports = {
    publicPath: './',
    lintOnSave: false,
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // chainWebpack: config => {
    //     // 如果你使用的是sass，则此处应该为
    //     // const oneOfsMap = config.module.rule('sass').oneOfs.store
    //     // 依此类推，其他的比如stylus等一样用法
    //     const oneOfsMap = config.module.rule('less').oneOfs.store
    //     oneOfsMap.forEach(item => {
    //         item
    //             .use('sass-resources-loader')
    //             .loader('sass-resources-loader')
    //             .options({
    //                 // 这里填入你的样式文件地址
    //                 resources: './packages/styles/var.less',
    //             })
    //             .end()
    //     })
    // }
}
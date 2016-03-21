seajs.config({
    // 映射,添加版本号
    map: [
        [ /^(.*\.(?:css|js))$/i, '$1?v=1.0.1' ]
    ],
    // 别名配置
    alias: {
        'fullScreenSlide':'lib/fullScreenSlide/js/fullScreenSlide.js'  //新增项--全屏侧滑组件  (其他需要项保留哈)
    },
    // 文件编码
    charset: 'utf-8'
});
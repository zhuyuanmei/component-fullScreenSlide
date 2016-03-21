/**
* 整屏侧滑模块(模拟app良好交互模式)
* @author zym
* @version 1.0
* @since 2016-03-17
*/

define(function(require, exports, module) {
    var FullScreenSlide = function(options) {
        this.settings = $.extend({}, FullScreenSlide.defaults, options);
        this.init();
    };

    FullScreenSlide.prototype ={
        /**
         * 初始化
         */
        init : function() {
            this.create();
        },

        /**
         * 创建
         */
        create: function() {
            var _this = this;

            var widgetData = _this.settings.widgetData;

            var widgetListHtml = '';

            for(var i in widgetData){
                widgetListHtml += '<li><a href="' + i +'"><img src="js/lib/fullScreenSlide/images/' + widgetData[i]['icon'] + '" alt="' + widgetData[i]['name'] + '">' +
                    '<span class="title">' + widgetData[i]['name'] + '</span><span class="desc">' + widgetData[i]['description'] + '</span></a></li>';
            }

            _this.settings.widgetListObj.html(widgetListHtml);

            $('#' + _this.settings.widgetObjStr).show();

            $('#' + _this.settings.demosObjStr).css('-webkit-transform', 'translateX(100%)');

            _this.settings.fullScreenSlideItem.css('-webkit-transition', 'all .3s ease-in-out');

            // 事件绑定
            _this.bindEvent();
        },

        /**
         * 更新类目列表
         */
        updateWidget: function(){
            var _this = this;

            var widgetName = location.hash.replace('#', '');

            var $widgetObj = $('#' + _this.settings.widgetObjStr),
                $demosObj = $('#' + _this.settings.demosObjStr);

            if(widgetName === '' || !_this.settings.widgetData[widgetName]){
                $widgetObj.show().css('-webkit-transform', 'translateX(0)');
                $demosObj.css('-webkit-transform', 'translateX(100%)');
            }else{
                _this.updateDemos(widgetName);
                $widgetObj.show().css('-webkit-transform', 'translateX(-100%)');
                $demosObj.show();

                window.scrollTo(0, 0);

                setTimeout(function(){
                    $demosObj.css('-webkit-transform', 'translateX(0)');
                }, 0);
            }
        },

        /**
         * 更新类目demo列表
         */
        updateDemos: function(widget){
            var _this = this;

            var demoList = _this.settings.widgetData[widget].demos,
                demosHtml = '';

            demoList.forEach(function(item, index){
                demosHtml += '<li><a href="' + item.file + '">' + item.title + '</a></li>';
            });

            _this.settings.curTitle.html(widget + ' Demos');
            _this.settings.demosListObj.html(demosHtml);

            new iScroll(_this.settings.demosObjStr);
        },

        /**
         * 事件绑定
         */
        bindEvent: function(){
            var _this = this;

            setTimeout(function(){
                new iScroll(_this.settings.widgetObjStr);
                $(window).trigger('resize');
            }, 200);

            $('#' + _this.settings.widgetObjStr + ' a').on('click',function(e){
                var widgetName = $(this).attr('href');

                location.hash = widgetName;

                e.preventDefault();
            });

            _this.settings.backBtn.on('click',function(){
                $('#' + _this.settings.widgetObjStr).show().css('-webkit-transform', 'translateX(0)');
                $('#' + _this.settings.demosObjStr).css('-webkit-transform', 'translateX(100%)');

                location.hash = '';
            });

            window.onhashchange = function(e){
                _this.updateWidget();
            }
        }
    };

    // 默认配置
    FullScreenSlide.defaults = {
        // 类目列表和类目demo详情数据
        widgetData: {},

        // 类目列表父对象名称
        widgetObjStr: '',

        // 类目列表对象
        widgetListObj: null,

        // 类目demo列表父对象名称
        demosObjStr: '',

        // 类目demo列表对象
        demosListObj: null,

        // 当前类目demo标题对象
        curTitle: null,

        // 列表父对象的公用样式对象
        fullScreenSlideItem: null,

        //返回按钮对象
        backBtn: null
    };

    var rFullScreenSlide = function(options) {
        new FullScreenSlide(options);
    };

    window.rFullScreenSlide = $.rFullScreenSlide = $.fullScreenSlide = rFullScreenSlide;
});
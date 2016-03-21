# component-fullScreenSlide
组件名称：全屏侧滑<br>
组件功能：支持动态配置数据功能<br>
组件参数：

$.fullScreenSlide({

            // 类目列表和类目demo详情数据
            widgetData: widgetData,

            // 类目列表父对象字符
            widgetObjStr: 'S_Widgets',

            // 类目列表对象
            widgetListObj: $('#J_WidgetList'),

            // 类目demo列表父对象字符
            demosObjStr: 'S_Demos',

            // 类目demo列表对象
            demosListObj: $('#J_DemoList'),

            // 当前类目demo标题对象
            curTitle: $('#J_CurTitle'),

            // 列表父对象的公用样式对象
            fullScreenSlideItem: $('.J_FullScreenSlideItem'),

            //返回按钮对象
            backBtn: $('#J_BackBtn')
        });

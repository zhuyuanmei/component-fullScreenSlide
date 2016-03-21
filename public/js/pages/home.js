/**
 * 移动官网
 * @since 2016.03.17
 */
define(function (require, exports, module) {
    //'整屏侧滑'模块
    if($('#J_FullScreenSlide').length){
        var FullScreenSlide = require('fullScreenSlide');

        //拼装类目列表和类目demo详情数据
        var widgetData = {
            'slider': {
                "name": 'Slider',
                "description": '图片轮播',
                "icon": 'icon1.png',
                "demos":[{"file":"slider/slider.html","title":"普通的图片轮播"},{"file":"slider/slider_dynamic.html","title":"动态加载图片的图片轮播"},{"file":"slider/slider_loop.html","title":"无缝滑动的图片轮播"},{"file":"slider/slider_multiview.html","title":"可视区域显示多张图片的图片轮播"}]
            },
            'progressbar': {
                "name": 'Progressbar',
                "description": '进度条',
                "icon": 'icon2.png',
                "demos":[{"file":"progressbar/progressbar.html","title":"横向的进度条"},{"file":"progressbar/progressbar_iOS7.html","title":"iOS7风格的进度条"},{"file":"progressbar/progressbar_vertical.html","title":"竖向的进度条"}]
            },
            'dialog': {
                "name": 'Dialog',
                "description": '弹出框',
                "icon": 'icon1.png',
                "demos":[{"file":"dialog/dialog.html","title":"普通对话框"},{"file":"dialog/dialog_iOS7.html","title":"iOS7风格的对话框"},{"file":"dialog/dialog_position.html","title":"定位对话框"}]
            },
            'navigator': {
                "name": 'Navigator',
                "description": '导航栏',
                "icon": 'icon1.png',
                "demos":[{"file":"navigator/navigator.html","title":"普通的导航栏"},{"file":"navigator/navigator_evenness.html","title":"宽度平均分配的导航栏"},{"file":"navigator/navigator_fix.html","title":"内容固定的导航栏"},{"file":"navigator/navigator_scrollable.html","title":"可内滚的导航栏（1）"},{"file":"navigator/navigator_scrolltonext.html","title":"可内滚的导航栏（2）"}]
            },
            'refresh': {
                "name": 'Refresh',
                "description": '加载更多',
                "icon": 'icon1.png',
                "demos":[{"file":"refresh/refresh.html","title":"点击加载"},{"file":"refresh/refresh_endhide.html","title":"加载结束后隐藏"},{"file":"refresh/refresh_iOS5.html","title":"上下加载(iOS5以上适用)"},{"file":"refresh/refresh_iOS5_endstatus.html","title":"设置加载结束后的逻辑"},{"file":"refresh/refresh_iscroll.html","title":"上下加载(iscroll)"},{"file":"refresh/refresh_iscroll_custom.html","title":"自定义加载(iScroll)"},{"file":"refresh/refresh_lite.html","title":"上拉加载(lite版)"},{"file":"refresh/refresh_lite_custom.html","title":"自定义加载(lite版)"}]
            },
            'suggestion': {
                "name": 'Suggestion',
                "description": '搜索建议',
                "icon": 'icon1.png',
                "demos":[{"file":"suggestion/suggestion.html","title":"suggestion"},{"file":"suggestion/suggestion_close.html","title":"suggestion关闭后不再显示"},{"file":"suggestion/suggestion_custom.html","title":"suggestion自定义渲染列表"},{"file":"suggestion/suggestion_iscroll.html","title":"suggestion列表使用iscroll展示"},{"file":"suggestion/suggestion_posAdapt.html","title":"suggestion位置自定义"},{"file":"suggestion/suggestion_render.html","title":"render方式创建suggestion"},{"file":"suggestion/suggestion_share.html","title":"多个suggestion共享div"},{"file":"suggestion/suggestion_submit.html","title":"suggestion指定提交数据的form"}]
            },
            'historylist': {
                "name": 'Historylist',
                "description": '历史记录',
                "icon": 'icon1.png',
                "demos":[{"file":"historylist/historylist.html","title":"基本的历史记录组件"}]
            },
            'tabs': {
                "name": 'Tabs',
                "description": '选项卡',
                "icon": 'icon1.png',
                "demos":[{"file":"tabs/tabs.html","title":"选项卡"},{"file":"tabs/tabs_ajax.html","title":"使用ajax加载内容的选项卡"},{"file":"tabs/tabs_history.html","title":"支持前进后退的选项卡"},{"file":"tabs/tabs_json.html","title":"使用ajax（返回值为json格式）加载内容的选项卡"},{"file":"tabs/tabs_nocache.html","title":"不缓存内容的选项卡"},{"file":"tabs/tabs_render.html","title":"render模式创建选项卡"},{"file":"tabs/tabs_tabs.html","title":"选项卡嵌套"}]
            },
            'panel': {
                "name": 'Panel',
                "description": '面板组件',
                "icon": 'icon1.png',
                "demos":[{"file":"panel/panel.html","title":"面板组件"},{"file":"panel/panel_hide.html","title":"页面滚动时面板关闭"},{"file":"panel/panel_iscroll.html","title":"使用iscroll的面板组件"},{"file":"panel/panel_position.html","title":"同一面板多种方式打开"}]
            },
            'calendar': {
                "name": 'Calendar',
                "description": '日历控件',
                "icon": 'icon1.png',
                "demos":[{"file":"calendar/calendar.html","title":"日历控件"},{"file":"calendar/calendar_iOS7.html","title":"iOS7风格的日历控件"},{"file":"calendar/calendar_monthyearchangeable.html","title":"可修改年月的日历控件"},{"file":"calendar/calendar_picker.html","title":"日历控件 - picker"},{"file":"calendar/calendar_range.html","title":"设置日期可选范围的日历控件"},{"file":"calendar/calendar_select.html","title":"两个相互联动的日历控件"}]
            },
            'toolbar': {
                "name": 'Toolbar',
                "description": '工具栏',
                "icon": 'icon1.png',
                "demos":[{"file":"toolbar/toolbar.html","title":"普通的toolbar"},{"file":"toolbar/toolbar_fixed.html","title":"滚动时固定在顶部的toolbar"},{"file":"toolbar/toolbar_fixed_top.html","title":"位置固定的toolbar"}]
            },
            'dropmenu': {
                "name": 'Dropmenu',
                "description": '下拉菜单',
                "icon": 'icon1.png',
                "demos":[{"file":"dropmenu/dropmenu.html","title":"基本的下拉菜单"},{"file":"dropmenu/dropmenu_arrow.html","title":"带箭头的下拉菜单"},{"file":"dropmenu/dropmenu_collision.html","title":"自动调整位置的下拉菜单"},{"file":"dropmenu/dropmenu_horizontal.html","title":"选项水平排列的下拉菜单"},{"file":"dropmenu/dropmenu_placement.html","title":"下拉菜单定位展示"}]
            },
            'popover': {
                "name": 'Popover',
                "description": '提示层',
                "icon": 'icon1.png',
                "demos":[{"file":"popover/popover.html","title":"基本的Popover"},{"file":"popover/popover_arrow.html","title":"带箭头的Popover"},{"file":"popover/popover_collision.html","title":"自动调整位置的Popover"},{"file":"popover/popover_placement.html","title":"支持定位的Popover"},{"file":"popover/popover_spare.html","title":"Popover节省方式调用"}]
            },
            'gotop': {
                "name": 'Gotop',
                "description": '返回顶部',
                "icon": 'icon1.png',
                "demos":[{"file":"gotop/gotop.html","title":"普通的回到顶部组件"},{"file":"gotop/gotop_iscroll.html","title":"iscroll中的回到顶部"}]
            },
            'add2desktop': {
                "name": 'Add2desktop',
                "description": '添加到桌面',
                "icon": 'icon1.png',
                "demos":[{"file":"add2desktop/add2desktop.html","title":"render方式创建add2desktop"},{"file":"add2desktop/add2desktop_icon.html","title":"render方式创建add2desktop"}]
            },
            'button': {
                "name": 'Button',
                "description": '按钮',
                "icon": 'icon1.png',
                "demos":[{"file":"button/button.html","title":"普通按钮"},{"file":"button/button_icon.html","title":"带图标的按钮"},{"file":"button/button_iconpos.html","title":"设置图标位置的按钮"},{"file":"button/button_input.html","title":"表单按钮"}]
            },
            'imglazyload': {
                "name": 'Imagelazyload',
                "description": '图片懒加载',
                "icon": 'icon1.png',
                "demos":[{"file":"imglazyload/imglazyload.html","title":"图片延迟加载"},{"file":"imglazyload/imglazyload_addimg.html","title":"点击加载图片"},{"file":"imglazyload/imglazyload_error.html","title":"图片加载错误处理"},{"file":"imglazyload/imglazyload_iscroll.html","title":"iScroll中使用图片延迟加载"}]
            }
        };

        $.fullScreenSlide({
            // 类目列表和类目demo详情数据
            widgetData: widgetData,

            // 类目列表父对象名称
            widgetObjStr: 'S_Widgets',

            // 类目列表对象
            widgetListObj: $('#J_WidgetList'),

            // 类目demo列表父对象名称
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
    }
});
define(function(){var t=function(e){this.settings=$.extend({},t.defaults,e),this.init()};t.prototype={init:function(){this.create()},create:function(){var t=this,e=t.settings.widgetData,s="";for(var i in e)s+='<li><a href="'+i+'"><img src="js/lib/fullScreenSlide/images/'+e[i].icon+'" alt="'+e[i].name+'"><span class="title">'+e[i].name+'</span><span class="desc">'+e[i].description+"</span></a></li>";t.settings.widgetListObj.html(s),$("#"+t.settings.widgetObjStr).show(),$("#"+t.settings.demosObjStr).css("-webkit-transform","translateX(100%)"),t.settings.fullScreenSlideItem.css("-webkit-transition","all .3s ease-in-out"),t.bindEvent()},updateWidget:function(){var t=this,e=location.hash.replace("#",""),s=$("#"+t.settings.widgetObjStr),i=$("#"+t.settings.demosObjStr);""!==e&&t.settings.widgetData[e]?(t.updateDemos(e),s.show().css("-webkit-transform","translateX(-100%)"),i.show(),window.scrollTo(0,0),setTimeout(function(){i.css("-webkit-transform","translateX(0)")},0)):(s.show().css("-webkit-transform","translateX(0)"),i.css("-webkit-transform","translateX(100%)"))},updateDemos:function(t){var e=this,s=e.settings.widgetData[t].demos,i="";s.forEach(function(t){i+='<li><a href="'+t.file+'">'+t.title+"</a></li>"}),e.settings.curTitle.html(t+" Demos"),e.settings.demosListObj.html(i),new iScroll(e.settings.demosObjStr)},bindEvent:function(){var t=this;setTimeout(function(){new iScroll(t.settings.widgetObjStr),$(window).trigger("resize")},200),$("#"+t.settings.widgetObjStr+" a").on("click",function(t){var e=$(this).attr("href");location.hash=e,t.preventDefault()}),t.settings.backBtn.on("click",function(){$("#"+t.settings.widgetObjStr).show().css("-webkit-transform","translateX(0)"),$("#"+t.settings.demosObjStr).css("-webkit-transform","translateX(100%)"),location.hash=""}),window.onhashchange=function(){t.updateWidget()}}},t.defaults={widgetData:{},widgetObjStr:"",widgetListObj:null,demosObjStr:"",demosListObj:null,curTitle:null,fullScreenSlideItem:null,backBtn:null};var e=function(e){new t(e)};window.rFullScreenSlide=$.rFullScreenSlide=$.fullScreenSlide=e});
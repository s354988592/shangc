(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-store-index"],{"07d9":function(t,e,i){"use strict";i.r(e);var n=i("df5e"),a=i("620f");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("d877");var o=i("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"0e242cf0",null);e["default"]=s.exports},"15bb":function(t,e,i){"use strict";i.r(e);var n=i("ceeb"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},"187d":function(t,e,i){var n=i("f453");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3f6abd64",n,!0,{sourceMap:!1,shadowMode:!1})},"1ea0":function(t,e,i){var n=i("b6b8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b959fbb4",n,!0,{sourceMap:!1,shadowMode:!1})},"287d":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-nav-bar-text[data-v-77b5867c]{\n\t\t\n\t\tfont-size:%?32?%\n\t\t}.uni-nav-bar-right-text[data-v-77b5867c]{font-size:%?28?%}.uni-navbar__content[data-v-77b5867c]{position:relative;background-color:#fff;overflow:hidden;width:100%}.uni-navbar__content_view[data-v-77b5867c]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;\n\t\t-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row\n\t\t/* background-color: #FFFFFF;\n */}.uni-navbar__header[data-v-77b5867c]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;\n\t\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:44px;line-height:44px;font-size:16px\n\t\t/* background-color: #ffffff;\n */}.uni-navbar__header-btns[data-v-77b5867c]{\n\t\t\n\t\t/* display: flex; */\n\t\t\n\t\t/* flex-wrap: nowrap;\n\t\twidth: 120rpx;\n\t\tjustify-content: center;\n\t\talign-items: center; */padding:0 6px}.uni-navbar__header-btns-left[data-v-77b5867c]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;\n\t\twidth:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-77b5867c]{\n\t\t\n\t\t/* display: flex; */\n\t\t\n\t\t/* width: 150rpx; */\n\t\t/* padding-right: 30rpx; */\n\t\t/* justify-content: flex-end; */position:absolute;right:0}.uni-navbar__header-container[data-v-77b5867c]{width:63%}.uni-navbar__header-container-inner[data-v-77b5867c]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;\n\t\t-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?28?%}.uni-navbar__placeholder-view[data-v-77b5867c]{height:44px}.uni-navbar--fixed[data-v-77b5867c]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-77b5867c]{\n\t\t-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc\n\t\t}.uni-navbar--border[data-v-77b5867c]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#e5e5e5}",""])},"3f85":function(t,e,i){"use strict";i.r(e);var n=i("deeb"),a=i("15bb");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("c8de");var o=i("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"fecb977c",null);e["default"]=s.exports},"515e":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("55dd"),i("ac6a"),i("96cf");var a=n(i("3b8d")),r=n(i("bec7")),o=n(i("b1fb")),s={components:{uniNavBar:r.default,uniIcons:o.default},data:function(){return{scrollTop:0,search:"",colorIndex:0,priceOrder:0,cateMaskState:0,cateList:[],cateId:0,listData:["1","2","3","4","5","6"]}},onLoad:function(){this.loadCateList(4,39)},methods:{loadCateList:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(e,i){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("cateList");case 2:n=t.sent,a=n.filter(function(t){return t.pid==e}),a.forEach(function(t){var e=n.filter(function(e){return e.pid==t.id});t.child=e}),this.cateList=a;case 6:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}(),back:function(){uni.switchTab({url:"/pages/index/index"})},tabClick:function(t){uni.showLoading({title:"正在加载"});var e=["1","2","3","4","5","6"];this.listData=e,this.colorIndex=t,2==t?(this.priceOrder=1==this.priceOrder?2:1,1==this.priceOrder&&(this.listData=e.sort(function(t,e){return e-t})),2==this.priceOrder&&(this.listData=e.sort(function(t,e){return t-e}))):this.priceOrder=0,setTimeout(function(){uni.hideLoading()},1e3)},toggleCateMask:function(t){var e=this,i="show"===t?10:300,n="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=n},i)},changeCate:function(t){this.colorIndex=0,this.priceOrder=0,this.cateId=t.id,this.toggleCateMask()},enterDet:function(){uni.navigateTo({url:"/pages/index/detail"})},stopPrevent:function(){}}};e.default=s},"620f":function(t,e,i){"use strict";i.r(e);var n=i("515e"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},"7b97":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-navbar"},[i("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[i("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){e=t.$handleEvent(e),t.onClickLeft(e)}}},[t.leftIcon.length?i("v-uni-view",{staticClass:"uni-navbar__content_view"},[i("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[i("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),i("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?i("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[i("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),i("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){e=t.$handleEvent(e),t.onClickRight(e)}}},[t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar__content_view"},[i("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[i("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?i("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"7cf6":function(t,e,i){"use strict";i.r(e);var n=i("d723"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);e["default"]=a.a},"9d22":function(t,e,i){var n=i("287d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2b9a367c",n,!0,{sourceMap:!1,shadowMode:!1})},b6b8:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-status-bar[data-v-fecb977c]{width:%?750?%;height:20px\n\t\t/* height: var(--status-bar-height);\n */}",""])},bec7:function(t,e,i){"use strict";i.r(e);var n=i("7b97"),a=i("7cf6");for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);i("f98d");var o=i("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"77b5867c",null);e["default"]=s.exports},c8de:function(t,e,i){"use strict";var n=i("1ea0"),a=i.n(n);a.a},ceeb:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync().statusBarHeight+"px",a={name:"UniStatusBar",data:function(){return{statusBarHeight:n}}};e.default=a},d723:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("3f85")),r=n(i("b1fb")),o={name:"UniNavBar",components:{uniStatusBar:a.default,uniIcons:r.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=o},d877:function(t,e,i){"use strict";var n=i("187d"),a=i.n(n);a.a},deeb:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},df5e:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("uni-nav-bar",{attrs:{"left-icon":"back",title:"权益积分商城",fixed:"true","status-bar":"true"},on:{clickLeft:function(e){e=t.$handleEvent(e),t.back(e)}}},[i("v-uni-view",{attrs:{slot:"left"},slot:"left"},[t._v("返回")]),i("v-uni-view",{staticStyle:{position:"relative"},attrs:{slot:"right"},slot:"right"},[i("v-uni-input",{staticStyle:{position:"absolute",top:"0.6rem",left:"-4.5rem","font-size":"0.8rem",width:"4rem"},attrs:{type:"text",placeholder:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("uni-icons",{attrs:{type:"search",size:"22"}})],1)],1),i("v-uni-view",{staticStyle:{height:"2.5rem",display:"flex","justify-content":"space-between","box-shadow":"0px 2upx 0px 0px rgba(242,242,242,1)"}},[i("v-uni-view",{class:{activeColor:0===t.colorIndex},staticStyle:{width:"25%",height:"100%","text-align":"center","line-height":"2.5rem","font-size":"33upx","font-weight":"700"},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(0)}}},[t._v("综合")]),i("v-uni-view",{class:{activeColor:1===t.colorIndex},staticStyle:{width:"25%",height:"100%","text-align":"center","line-height":"2.5rem","font-size":"0.8rem","font-weight":"700"},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(1)}}},[t._v("销量")]),i("v-uni-view",{class:{activeColor:2===t.colorIndex},staticStyle:{width:"25%",height:"100%","text-align":"center","line-height":"2.5rem","font-size":"0.8rem","font-weight":"700",position:"relative"},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(2)}}},[t._v("价格"),0===t.priceOrder?i("v-uni-image",{staticClass:"priceImg",attrs:{src:"../../static/yb-filter/img/sort0.png",mode:"scaleToFill"}}):t._e(),1===t.priceOrder?i("v-uni-image",{staticClass:"priceImg",attrs:{src:"../../static/yb-filter/img/sort1.png",mode:"scaleToFill"}}):t._e(),2===t.priceOrder?i("v-uni-image",{staticClass:"priceImg",attrs:{src:"../../static/yb-filter/img/sort2.png",mode:"scaleToFill"}}):t._e()],1),i("v-uni-view",{staticStyle:{width:"25%",height:"100%","text-align":"center","line-height":"2.5rem","font-size":"0.8rem","font-weight":"700"},on:{click:function(e){e=t.$handleEvent(e),t.toggleCateMask("show")}}},[t._v("筛选")])],1),i("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true","show-scrollbar":"true",id:"main"}},[i("v-uni-view",{staticStyle:{width:"95%","margin-left":"2.5%",display:"flex","flex-wrap":"wrap","justify-content":"space-between"}},t._l(t.listData,function(e,n){return i("v-uni-view",{key:n,staticClass:"pro-item",on:{click:function(e){e=t.$handleEvent(e),t.enterDet(e)}}},[i("v-uni-view",{staticStyle:{width:"336upx",height:"344upx"}},[i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"../../static/home/jingxuan.png",mode:"scaleToFill"}})],1),i("v-uni-view",{staticClass:"pro-des"},[t._v("商品名称商品名称商品名称商品名称商品名称"+t._s(e))]),i("v-uni-view",{staticClass:"done-num"},[t._v("已兑换"+t._s(e)+"件")]),i("v-uni-view",{staticClass:"pro-price"},[t._v("￥5940+2000积分")])],1)}),1),i("v-uni-view",{staticClass:"dibu"},[t._v("已经到底了...")]),i("v-uni-view",{staticClass:"cate-mask",class:0===t.cateMaskState?"none":1===t.cateMaskState?"show":"",on:{click:function(e){e=t.$handleEvent(e),t.toggleCateMask(e)}}},[i("v-uni-view",{staticClass:"cate-content",on:{click:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.stopPrevent(e)}}},[i("v-uni-scroll-view",{staticClass:"cate-list",attrs:{"scroll-y":""}},t._l(t.cateList,function(e){return i("v-uni-view",{key:e.id},[i("v-uni-view",{staticClass:"cate-item b-b two"},[t._v(t._s(e.name))]),t._l(e.child,function(e){return i("v-uni-view",{key:e.id,staticClass:"cate-item b-b",class:{active:e.id==t.cateId},on:{click:function(i){i=t.$handleEvent(i),t.changeCate(e)}}},[t._v(t._s(e.name))])})],2)}),1)],1)],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},f453:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".content[data-v-0e242cf0]{width:100vw;height:100vh}#main[data-v-0e242cf0]{width:100%}.uni-navbar[data-v-0e242cf0] .uni-navbar__content{width:100%!important}.uni-navbar[data-v-0e242cf0] .uni-nav-bar-text{font-size:1rem!important}.activeColor[data-v-0e242cf0]{color:#2667e1}.priceImg[data-v-0e242cf0]{width:%?12?%;height:%?24?%;position:absolute;left:70%;top:38%}\n/* 分类 */.cate-mask[data-v-0e242cf0]{position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:rgba(0,0,0,0);z-index:95;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.cate-mask .cate-content[data-v-0e242cf0]{width:%?630?%;height:93%;margin-top:2.54rem;background:#fff;float:right;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.none[data-v-0e242cf0]{display:none}.show[data-v-0e242cf0]{background:rgba(0,0,0,.4)}.show .cate-content[data-v-0e242cf0]{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.cate-list[data-v-0e242cf0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%}.cate-list .cate-item[data-v-0e242cf0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?90?%;padding-left:%?30?%;font-size:%?28?%;color:#555;position:relative}.cate-list .two[data-v-0e242cf0]{height:%?64?%;color:#303133;font-size:%?30?%;background:#f8f8f8}.cate-list .active[data-v-0e242cf0]{color:$base-color}.pro-item[data-v-0e242cf0]{width:49%;background:#fff;-webkit-box-shadow:0 %?4?% %?20?% 0 #cdd9f0;box-shadow:0 %?4?% %?20?% 0 #cdd9f0;border-radius:%?12?%;margin-top:%?30?%}.pro-des[data-v-0e242cf0]{color:#373737;font-size:%?26?%;line-height:%?36?%;padding:%?20?%;font-weight:600}.done-num[data-v-0e242cf0]{color:#999;font-size:%?22?%;line-height:%?32?%;padding:0 %?20?%;text-shadow:0 %?4?% %?20?% #cdd9f0}.pro-price[data-v-0e242cf0]{color:#fd0033;font-size:%?26?%;font-weight:600;color:#fd0033;line-height:%?36?%;text-shadow:0 %?4?% %?20?% #cdd9f0;margin-top:%?10?%;padding:0 0 %?30?% %?20?%}.dibu[data-v-0e242cf0]{color:#e7e8ed;font-size:%?24?%;line-height:%?34?%;text-align:center;margin-bottom:%?30?%;margin-top:%?30?%;height:%?160?%}",""])},f98d:function(t,e,i){"use strict";var n=i("9d22"),a=i.n(n);a.a}}]);
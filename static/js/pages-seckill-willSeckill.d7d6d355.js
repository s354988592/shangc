(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-seckill-willSeckill"],{"3eb4":function(t,e,i){"use strict";i.r(e);var n=i("87fb"),o=i("7596");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("ccea");var r=i("2877"),c=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"3fc479e7",null);e["default"]=c.exports},7596:function(t,e,i){"use strict";i.r(e);var n=i("ec06"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"87fb":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticStyle:{width:"100%","padding-top":"20upx",height:"3rem","background-color":"#ff671b","border-radius":"0 0 10px 10px"}},[i("v-uni-view",{staticStyle:{width:"95%",height:"100%","background-color":"#ffffff","margin-left":"2.5%","border-bottom":"1px solid #f2f2f2","border-radius":"10px 10px 0 0",display:"flex","justify-content":"space-between"}},[i("v-uni-view",{staticStyle:{width:"43%",height:"100%","text-align":"center","line-height":"2.7rem","font-size":"0.8rem",color:"#a2a2a7"}},[t._v("即将开枪    先下单先得")]),i("v-uni-view",{staticStyle:{width:"50%",height:"100%",display:"flex","justify-content":"space-between"}},[i("v-uni-view",{staticStyle:{width:"45%",height:"100%","text-align":"center","line-height":"2.7rem","font-size":"0.6rem"}},[t._v("距活动开始")]),i("uni-countdown",{staticStyle:{"margin-top":"7%","margin-right":"5%",width:"50%",height:"50%"},attrs:{color:"#ffffff",backgroundColor:"#000000","show-day":!1,hour:8,minute:0,second:0,reset:t.reset}})],1)],1)],1),i("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true","show-scrollbar":"true",id:"main"}},t._l(t.listData,function(e,n){return i("v-uni-view",{key:n,staticStyle:{width:"95%",margin:"3% 0 0 2.5%",display:"flex","justify-content":"space-between","border-bottom":"2upx solid #f2f2f2","padding-bottom":"10upx"},on:{click:function(e){e=t.$handleEvent(e),t.enterDetail(e)}}},[i("v-uni-view",{staticStyle:{width:"220upx",height:"220upx","background-color":"#2C405A"}},[i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{mode:"scaleToFill",src:"../../static/choiceness/choiceness-img.jpg"}})],1),i("v-uni-view",{staticStyle:{width:"65%",height:"95%",display:"flex","flex-direction":"column"}},[i("v-uni-view",{staticStyle:{width:"100%","line-height":"40upx","font-size":"28upx","font-weight":"800",color:"#333333"}},[t._v(t._s(e))]),i("v-uni-view",{staticStyle:{width:"100%","line-height":"34upx","font-size":"24upx",color:"#666666","text-overflow":"ellipsis","white-space":"nowrap",overflow:"hidden"}},[t._v("商品简介简介简介简介简介简介商品简介简介简介简介简介简介")]),i("v-uni-view",{staticStyle:{width:"50%",height:"0.8rem","line-height":"0.8rem","font-size":"0.6rem","background-color":"#e5f0f9",color:"#96c5e8","border-radius":"30px","margin-top":"10%","padding-left":"5%"}},[t._v("限量50个")]),i("v-uni-view",{staticStyle:{width:"100%",height:"1.5rem","margin-top":"5%",display:"flex","justify-content":"space-between"}},[i("v-uni-view",{staticStyle:{color:"#fe9300","font-size":"24upx","line-height":"64upx"}},[t._v("¥")]),i("v-uni-view",{staticStyle:{height:"100%",color:"#fe9300","font-size":"36upx","line-height":"1.5rem","margin-left":"-10upx"}},[t._v("129")]),i("v-uni-view",{staticStyle:{height:"100%",width:"20%",color:"#999999","font-size":"22upx","text-decoration":"line-through","line-height":"1.5rem","margin-right":"18%"}},[t._v("¥189")]),i("v-uni-view",{staticStyle:{width:"40%",height:"50upx","line-height":"50upx","text-align":"center",border:"2upx solid #f2f2f2","border-radius":"50upx",color:"#999999","font-size":"28upx"}},[t._v("即将开始")])],1)],1)],1)}),1)],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"9a32":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".content[data-v-3fc479e7]{width:100vw;height:94vh;background-color:#fafafa}.uni-navbar[data-v-3fc479e7] .uni-navbar__content{width:100%!important}.uni-navbar[data-v-3fc479e7] .uni-navbar--border{border:0!important}\n/* 倒计时 */.uni-countdown[data-v-3fc479e7] .uni-countdown__number{border:0!important;border-radius:50% 50%!important}#main[data-v-3fc479e7]{width:95%;max-height:%?1140?%;margin-left:2.5%;background-color:#fff;padding-bottom:%?5?%}",""])},a35d:function(t,e,i){var n=i("9a32");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("5e92d70c",n,!0,{sourceMap:!1,shadowMode:!1})},ccea:function(t,e,i){"use strict";var n=i("a35d"),o=i.n(n);o.a},ec06:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("bec7")),a=n(i("46fb")),r={components:{uniNavBar:o.default,uniCountdown:a.default},data:function(){return{reset:!1,scrollTop:0,listData:["商品名称1","商品名称2","商品名称3","商品名称4","商品名称","3456789"]}},onLoad:function(){},methods:{back:function(){uni.switchTab({url:"/pages/index/index"})},enterDetail:function(){uni.navigateTo({url:"/pages/seckill/willSeckillDetail"})}}};e.default=r}}]);
webpackJsonp([1],{"/XD3":function(e,t,i){"use strict";var n=i("PXhb"),s=i.n(n),o=i("3Q4o");t.a={data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},mounted:function(){var e=this;setTimeout(function(){e._setSliderWidth(),e._initDots(),e._initSlider(),e.autoPlay&&e._play()},20),window.addEventListener("resize",function(){e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},methods:{_setSliderWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var t=0,n=this.$refs.slider.clientWidth,s=0;s<this.children.length;s++){var r=this.children[s];i.i(o.a)(r,"slider-item"),r.style.width=n+"px",t+=n}this.loop&&!e&&(t+=2*n),this.$refs.sliderGroup.style.width=t+"px"},_initSlider:function(){var e=this;this.slider=new s.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:.3,speed:400}}),this.slider.on("scrollEnd",function(){var t=e.slider.currentPage.pageX;e.loop&&(t-=1),e.currentPageIndex=t,e.autoPlay&&(clearTimeout(e.timer),e._play())})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var e=this,t=this.currentPageIndex+1;this.loop&&(t+=1),this.timer=setTimeout(function(){e.slider.goToPage(t,0,500)},this.interval)}},destroyed:function(){clearTimeout(this.timer)}}},"/lZI":function(e,t,i){"use strict";function n(e){i("LKXH")}var s=i("/XD3"),o=i("5C/i"),r=i("dfjY"),a=n,d=r(s.a,o.a,a,"data-v-d589a78a",null);t.a=d.exports},"2olU":function(e,t,i){var n=i("zyYW");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("epBD")("7dd43792",n,!0)},"3Q4o":function(e,t,i){"use strict";function n(e,t){if(!s(e,t)){var i=e.className?e.className.split(" "):[];i.push(t),e.className=i.join(" ")}}function s(e,t){return new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)}function o(e,t,i){return t="data-"+t,i?(console.log(e.setAttribute(t,i)),e.setAttribute(t,i)):e.getAttribute(t)}t.a=n,t.b=o},"5C/i":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),i("div",{staticClass:"dots"},e._l(e.dots,function(t,n){return i("span",{staticClass:"dot",class:{active:e.currentPageIndex===n}})}))])},s=[],o={render:n,staticRenderFns:s};t.a=o},LKXH:function(e,t,i){var n=i("Oa+k");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("epBD")("554913ac",n,!0)},N6y2:function(e,t,i){"use strict";var n=i("B2YR"),s=i.n(n),o=i("/lZI"),r=i("qwAB"),a=i("y/jF"),d=i("m40h"),l=i("T452"),c=i("Zd8n"),m=i("F4+m");t.a={mixins:[m.c],data:function(){return{recommends:[],discList:[]}},components:{Slider:o.a,Scroll:r.a,Loading:a.a},created:function(){this._getRecommend(),this._getDiscList()},methods:s()({selectItem:function(e){this.$router.push({path:"/recommend/"+e.dissid}),this.setDisc(e)}},i.i(c.b)({setDisc:"SET_DISC"}),{handlePlayList:function(e){var t=e.length>0?"60px":"";this.$refs.recom.style.bottom=t,this.$refs.scroll.refresh()},_getRecommend:function(){var e=this;i.i(d.b)().then(function(t){t.code===l.a&&(e.recommends=t.data.slider)})},_getDiscList:function(){var e=this;i.i(d.c)().then(function(t){t.code===l.a&&(e.discList=t.data.list)})},loadImage:function(){this.isLoaded||(this.$refs.scroll.refresh(),this.isLoaded=!0)}})}},"Oa+k":function(e,t,i){t=e.exports=i("xCkK")(!1),t.push([e.i,".slider[data-v-d589a78a]{min-height:1px;position:relative}.slider .slider-group[data-v-d589a78a]{position:relative;overflow:hidden;white-space:nowrap}.slider .slider-group .slider-item[data-v-d589a78a]{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;text-align:center}.slider .slider-group .slider-item a[data-v-d589a78a]{display:block;width:100%;overflow:hidden;text-decoration:none}.slider .slider-group .slider-item img[data-v-d589a78a]{display:block;width:100%}.slider .dots[data-v-d589a78a]{position:absolute;right:0;left:0;bottom:12px;text-align:center;font-size:0}.slider .dots .dot[data-v-d589a78a]{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:hsla(0,0%,100%,.5)}.slider .dots .dot.active[data-v-d589a78a]{width:20px;border-radius:5px;background:hsla(0,0%,100%,.8)}",""])},"W1+L":function(e,t,i){"use strict";function n(e){i("2olU")}Object.defineProperty(t,"__esModule",{value:!0});var s=i("N6y2"),o=i("qAFV"),r=i("dfjY"),a=n,d=r(s.a,o.a,a,"data-v-74b4415a",null);t.default=d.exports},m40h:function(e,t,i){"use strict";function n(){var e=l()({},m.b,{paltform:"h5",uin:0,needNewCode:1});return i.i(c.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",e,m.c)}function s(){var e=l()({},m.b,{rnd:Math.random(),loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,categoryId:1e7,sortId:5,sin:0,ein:29,format:"json"});return f.a.get("/api/getDiscList",{params:e}).then(function(e){return a.a.resolve(e.data)})}function o(e){var t=l()({},m.b,{disstid:e,json:1,type:1,utf8:1,onlysong:0,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,format:"json"});return f.a.get("/api/getSongList",{params:t}).then(function(e){return a.a.resolve(e.data)})}t.b=n,t.c=s,t.a=o;var r=i("Hcuw"),a=i.n(r),d=i("mOK0"),l=i.n(d),c=i("Gak4"),m=i("T452"),u=i("GYbZ"),f=i.n(u)},qAFV:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"recom",staticClass:"recommend"},[i("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.discList}},[i("div",[e.recommends.length?i("div",{staticClass:"slider-wrapper"},[i("slider",e._l(e.recommends,function(t){return i("div",[i("a",{attrs:{href:t.linkUrl}},[i("img",{attrs:{src:t.picUrl},on:{load:e.loadImage}})])])}))],1):e._e(),e._v(" "),i("div",{staticClass:"recommend-list"},[i("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),e._v(" "),i("ul",e._l(e.discList,function(t){return i("li",{staticClass:"item",on:{click:function(i){e.selectItem(t)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),e._v(" "),i("div",{staticClass:"text"},[i("h2",{staticClass:"name",domProps:{innerHTML:e._s(t.creator.name)}}),e._v(" "),i("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.dissname)}})])])}))]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[i("loading")],1)])]),e._v(" "),i("router-view")],1)},s=[],o={render:n,staticRenderFns:s};t.a=o},zyYW:function(e,t,i){t=e.exports=i("xCkK")(!1),t.push([e.i,".recommend[data-v-74b4415a]{position:fixed;width:100%;top:88px;bottom:0}.recommend .recommend-content[data-v-74b4415a]{height:100%;overflow:hidden}.recommend .recommend-content .recommend-list .list-title[data-v-74b4415a]{height:65px;line-height:65px;text-align:center;font-size:$font-seize-meidum;color:#ffcd32}.recommend .recommend-content .recommend-list .item[data-v-74b4415a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px 20px}.recommend .recommend-content .recommend-list .icon[data-v-74b4415a]{-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px;width:60px;padding-right:20px}.recommend .recommend-content .recommend-list .text[data-v-74b4415a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:20px;overflow:hidden;font-size:$font-sieze-medium}.recommend .recommend-content .recommend-list .text .name[data-v-74b4415a]{margin-bottom:10px;color:#fff}.recommend .recommend-content .recommend-list .text .desc[data-v-74b4415a]{color:hsla(0,0%,100%,.3)}.recommend .recommend-content .loading-container[data-v-74b4415a]{position:fixed;width:100%;top:220px}",""])}});
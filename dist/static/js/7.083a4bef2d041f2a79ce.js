webpackJsonp([7],{FZdB:function(t,e,s){"use strict";var r=s("B2YR"),a=s.n(r),o=s("cJ5B"),c=s("8stH"),i=s("T452"),h=s("6Xyt"),n=s("Zd8n"),l=s("qMT5"),u=s("XEAW"),p=s("qwAB"),f=s("F4+m");e.a={mixins:[f.c,f.b],created:function(){this._getHotKey()},data:function(){return{hotKey:[],query:""}},computed:a()({shortcut:function(){return this.hotKey.concat(this.searchHistory)}},s.i(n.a)(["searchHistory"])),methods:a()({showConfirm:function(){this.$refs.confirm.show()},handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.searchWrapper.style.bottom=e,this.$refs.searchResult.style.bottom=e,this.$refs.shortcut.refresh(),this.$refs.suggest.refresh()}},s.i(n.c)(["clearSearchHistory"]),s.i(n.b)({setSearchHistory:"SET_SEARCH_HISTORY"}),{_getHotKey:function(){var t=this;s.i(c.b)().then(function(e){e.code===i.a&&(t.hotKey=e.data.hotkey.slice(0,10))})}}),watch:{query:function(t){var e=this;t||setTimeout(function(){e.$refs.shortcut.refresh()},20)}},components:{SearchBox:o.a,Suggest:h.a,SearchList:l.a,Confirm:u.a,Scroll:p.a}}},JSAv:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-box-wrapper"},[s("search-box",{ref:"searchBox",on:{query:t.onQueryChange}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],ref:"searchWrapper",staticClass:"shortcut-wrapper"},[s("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{refreshDelay:150,data:t.shortcut}},[s("div",[s("div",{staticClass:"hot-key"},[s("h1",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),s("ul",t._l(t.hotKey,function(e){return s("li",{staticClass:"item",on:{click:function(s){t.addQuery(e.k)}}},[s("span",[t._v(t._s(e.k))])])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[s("h1",{staticClass:"title"},[s("span",{staticClass:"text"},[t._v("搜索历史")]),t._v(" "),s("span",{staticClass:"clear",on:{click:t.showConfirm}},[s("i",{staticClass:"icon-clear"})])]),t._v(" "),s("search-list",{attrs:{searches:t.searchHistory},on:{select:t.addQuery,delete:t.deleteSearchHistory}})],1)])])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[s("suggest",{ref:"suggest",attrs:{query:t.query},on:{listScroll:t.blurInput,select:t.saveSearch}})],1),t._v(" "),s("confirm",{ref:"confirm",attrs:{text:"是否清空所有搜索历史",cancelBtnText:"清空"},on:{confirm:t.clearSearchHistory}}),t._v(" "),s("router-view")],1)},a=[],o={render:r,staticRenderFns:a};e.a=o},YOyO:function(t,e,s){"use strict";function r(t){s("ZRJ4")}Object.defineProperty(e,"__esModule",{value:!0});var a=s("FZdB"),o=s("JSAv"),c=s("dfjY"),i=r,h=c(a.a,o.a,i,null,null);e.default=h.exports},ZRJ4:function(t,e,s){var r=s("fT48");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);s("epBD")("66608c86",r,!0)},fT48:function(t,e,s){e=t.exports=s("xCkK")(!1),e.push([t.i,".search .search-box-wrapper{margin:20px}.search .shortcut-wrapper{position:fixed;top:178px;bottom:0;width:100%}.search .shortcut-wrapper .shortcut{height:100%;overflow:hidden}.search .shortcut-wrapper .shortcut .hot-key{margin:0 20px 20px}.search .shortcut-wrapper .shortcut .hot-key .title{margin-bottom:20px;font-size:14px;color:hsla(0,0%,100%,.5)}.search .shortcut-wrapper .shortcut .hot-key .item{display:inline-block;padding:5px 10px;margin:0 20px 10px 0;border-radius:6px;background:#333;font-size:14px;color:hsla(0,0%,100%,.3)}.search .shortcut-wrapper .shortcut .search-history{position:relative;margin:0 20px}.search .shortcut-wrapper .shortcut .search-history .title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px;font-size:14px;color:hsla(0,0%,100%,.5)}.search .shortcut-wrapper .shortcut .search-history .title .text{-webkit-box-flex:1;-ms-flex:1;flex:1}.search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear{font-size:14px;color:hsla(0,0%,100%,.3)}.search .search-result{position:fixed;width:100%;top:178px;bottom:0}",""])}});
webpackJsonp([3],{"2aK7":function(t,i,s){"use strict";var e=s("B2YR"),a=s.n(e),n=s("qwAB"),o=s("4gQR"),r=s("y/jF"),l=s("Zd8n"),c=s("F4+m");i.a={mixins:[c.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:-1}},computed:{bgStyle:function(){return"background-image: url("+this.bgImage+")"}},components:{Scroll:n.a,SongList:o.a,Loading:r.a},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTranlateY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:a()({handlePlayList:function(t){var i=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=i,this.$refs.list.refresh()},back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},s.i(l.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTranlateY,t),s=0,e=1;this.$refs.layer.style.transform="translate3d(0,"+i+"px,0)";var a=Math.abs(t/this.imageHeight);t>0&&(e=1+a,s=10),this.$refs.bgImage.style.transform="scale("+e+")",t<this.minTranlateY?(s=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display="block"),this.$refs.bgImage.style.zIndex=s}}}},"2fMK":function(t,i,s){"use strict";function e(t){s("BTK3")}var a=s("2aK7"),n=s("g5TI"),o=s("dfjY"),r=e,l=o(a.a,n.a,r,"data-v-443ce979",null);i.a=l.exports},"8daT":function(t,i,s){var e=s("gIsA");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("epBD")("7baf1f3c",e,!0)},BTK3:function(t,i,s){var e=s("n/lQ");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("epBD")("1ff3750e",e,!0)},NSSj:function(t,i,s){"use strict";function e(t){s("8daT")}Object.defineProperty(i,"__esModule",{value:!0});var a=s("m6xn"),n=s("aWkw"),o=s("dfjY"),r=e,l=o(a.a,n.a,r,null,null);i.default=l.exports},aWkw:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"slide"}},[s("music-list",{attrs:{title:t.title,bgImage:t.bgImage,songs:t.songs}})],1)},a=[],n={render:e,staticRenderFns:a};i.a=n},g5TI:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"music-list"},[s("div",{staticClass:"back",on:{click:t.back}},[s("i",{staticClass:"icon-back"})]),t._v(" "),s("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),s("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[s("div",{staticClass:"play-wrapper",on:{click:t.random}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play"},[s("i",{staticClass:"icon-play"}),t._v(" "),s("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),s("div",{staticClass:"filter"})]),t._v(" "),s("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),s("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"probe-type":t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[s("div",{staticClass:"songs-list-wrapper"},[s("song-list",{attrs:{rank:t.rank,songs:t.songs},on:{select:t.selectItem}})],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[s("loading")],1)])],1)},a=[],n={render:e,staticRenderFns:a};i.a=n},gIsA:function(t,i,s){i=t.exports=s("xCkK")(!1),i.push([t.i,".slide-enter-active,.slide-leave-active{-webkit-transition:all .3s;transition:all .3s}.slide-enter,.slide-leave-to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}",""])},m40h:function(t,i,s){"use strict";function e(){var t=c()({},g.b,{paltform:"h5",uin:0,needNewCode:1});return s.i(d.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,g.c)}function a(){var t=c()({},g.b,{rnd:Math.random(),loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,categoryId:1e7,sortId:5,sin:0,ein:29,format:"json"});return u.a.get("/api/getDiscList",{params:t}).then(function(t){return r.a.resolve(t.data)})}function n(t){var i=c()({},g.b,{disstid:t,json:1,type:1,utf8:1,onlysong:0,loginUin:0,hostUin:0,platform:"yqq",needNewCode:0,format:"json"});return u.a.get("/api/getSongList",{params:i}).then(function(t){return r.a.resolve(t.data)})}i.b=e,i.c=a,i.a=n;var o=s("Hcuw"),r=s.n(o),l=s("mOK0"),c=s.n(l),d=s("Gak4"),g=s("T452"),p=s("GYbZ"),u=s.n(p)},m6xn:function(t,i,s){"use strict";var e=s("B2YR"),a=s.n(e),n=s("2fMK"),o=s("9cIF"),r=s("Zd8n"),l=s("m40h"),c=s("T452"),d=s("PvFA");i.a={data:function(){return{songs:[]}},components:{MusicList:n.a},computed:a()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},s.i(r.a)(["disc"])),created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;this.disc.dissid||this.$router.push({path:"/recommend"}),s.i(l.a)(this.disc.dissid).then(function(i){if(i.code===c.a){var e=i.cdlist[0].songlist,a=e.map(function(t){return t.songmid});s.i(o.b)(a).then(function(i){var a=[];e.forEach(function(t,e){t.purl=i.data.req_0.data.midurlinfo[e].purl,t.songmid&&t.albummid&&a.push(s.i(d.b)(t))}),t.songs=a})}})}}}},"n/lQ":function(t,i,s){i=t.exports=s("xCkK")(!1),i.push([t.i,".music-list[data-v-443ce979]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-443ce979]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-443ce979]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-443ce979]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-443ce979]{position:relative;width:100%;height:0;padding-top:70%;-webkit-transform-origin:top;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-443ce979]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-443ce979]{-webkit-box-sizing:border-box;box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-443ce979]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-443ce979]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-443ce979]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-443ce979]{position:relative;height:100%;background:#222}.music-list .list[data-v-443ce979]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .songs-list-wrapper[data-v-443ce979]{padding:20px 30px}.music-list .list .loading-container[data-v-443ce979]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}",""])}});
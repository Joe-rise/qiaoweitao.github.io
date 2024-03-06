(window.webpackJsonp=window.webpackJsonp||[]).push([[1,18,24,25,30,32,36,37,41],{345:function(t,e,o){},353:function(t,e,o){"use strict";o.r(e);var s=o(26),n={props:{item:{required:!0}},computed:{link(){return Object(s.c)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:s.h,isMailto:s.i,isTel:s.j}},i=o(2),a=Object(i.a)(n,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[e("i",{class:"iconfont "+t.item.icon}),t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[e("i",{class:"iconfont "+t.item.icon}),t._v("\n  "+t._s(t.item.text)+"\n")])}),[],!1,null,null,null);e.default=a.exports},355:function(t,e,o){"use strict";o.r(e);var s={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},n=(o(356),o(2)),i=Object(n.a)(s,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=i.exports},356:function(t,e,o){"use strict";o(345)},357:function(t,e,o){},369:function(t,e,o){},370:function(t,e,o){},373:function(t,e,o){"use strict";o(357)},383:function(t,e,o){"use strict";o.r(e);var s=o(353),n=o(355),i={components:{NavLink:s.default,DropdownTransition:n.default},data:()=>({open:!1}),props:{item:{required:!0}},methods:{toggle(){this.open=!this.open}}},a=(o(373),o(2)),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[e("span",{staticClass:"title"},[e("i",{class:"iconfont "+t.item.icon}),t._v("\n      "+t._s(t.item.text)+"\n    ")]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(o,s){return e("li",{key:o.link||s,staticClass:"dropdown-item"},["links"===o.type?e("h4",[t._v(t._s(o.text))]):t._e(),t._v(" "),"links"===o.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(o.items,(function(t){return e("li",{key:t.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:t}})],1)})),0):e("NavLink",{attrs:{item:o}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=r.exports},387:function(t,e,o){},388:function(t,e,o){},389:function(t,e,o){"use strict";o(369)},390:function(t,e,o){"use strict";o(370)},391:function(t,e,o){},404:function(t,e,o){"use strict";o.r(e);var s=o(383),n=o(26),i={components:{NavLink:o(353).default,DropdownLink:s.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$themeConfig.nav||[]},nav(){const{$site:{locales:t},userNav:e}=this;if(t&&Object.keys(t).length>1){const o=this.$page.path,s=this.$router.options.routes,n=this.$themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(e=>{const i=t[e],a=n[e]&&n[e].label||i.lang;let r;return i.lang===this.$lang?r=o:(r=o.replace(this.$localeConfig.path,e),s.some(t=>t.path===r)||(r=e)),{text:a,link:r}})};return[...e,i]}const o=this.$themeConfig.blogConfig||{},s=e.some(t=>!o.category||t.text===(o.category.text||"分类")),n=e.some(t=>!o.tag||t.text===(o.tag.text||"标签"));if(!s&&Object.hasOwnProperty.call(o,"category")){const t=o.category,s=this.$categories;e.splice(parseInt(t.location||2)-1,0,{items:s.list.map(t=>(t.link=t.path,t.text=t.name,t)),text:t.text||"分类",type:"links",icon:"reco-category"})}if(!n&&Object.hasOwnProperty.call(o,"tag")){const t=o.tag;e.splice(parseInt(t.location||3)-1,0,{link:"/tag/",text:t.text||"标签",type:"links",icon:"reco-tag"})}return e},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(n.l)(t),{items:(t.items||[]).map(n.l)}))},repoLink(){const{repo:t}=this.$themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:""},repoLabel(){if(!this.repoLink)return;if(this.$themeConfig.repoLabel)return this.$themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let o=0;o<e.length;o++){const s=e[o];if(new RegExp(s,"i").test(t))return s}return"Source"}}},a=(o(389),o(2)),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[e("i",{class:"iconfont reco-"+t.repoLabel.toLowerCase()}),t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=r.exports},406:function(t,e,o){"use strict";o.r(e);var s={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 6px 0 rgba(0, 0, 0, 0.2)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#2c3e50","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#202124","--box-shadow":"0 1px 6px 0 rgba(0, 0, 0, .9)","--box-shadow-hover":"0 2px 26px 0 rgba(0, 0, 0, .9)","--text-color":"#fff","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function n(t){const e=document.querySelector(":root"),o=s[t];for(const t in o)e.style.setProperty(t,o[t])}var i={name:"ModeOptions",data:()=>({modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}),mounted(){const t=localStorage.getItem("mode"),{mode:e}=this.$themeConfig;this.currentMode=null===t?void 0===e?"auto":e:t,n(this.currentMode)},methods:{selectMode(t){t.mode!==this.currentMode&&("auto"===t.mode?function(){const t=window.matchMedia("(prefers-color-scheme: dark)").matches,e=window.matchMedia("(prefers-color-scheme: light)").matches,o=window.matchMedia("(prefers-color-scheme: no-preference)").matches,s=!t&&!e&&!o;if(window.matchMedia("(prefers-color-scheme: dark)").addListener(t=>t.matches&&n("dark")),window.matchMedia("(prefers-color-scheme: light)").addListener(t=>t.matches&&n("light")),t&&n("dark"),e&&n("light"),o||s){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const t=(new Date).getHours();(t<4||t>=16)&&n("dark")}}():n(t.mode),localStorage.setItem("mode",t.mode),this.currentMode=t.mode)},getClass(t){return t!==this.currentMode?t:t+" active"}}},a=(o(390),o(2)),r=Object(a.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mode-options"},[e("h4",{staticClass:"title"},[t._v("Choose mode")]),t._v(" "),e("ul",{staticClass:"color-mode-options"},t._l(t.modeOptions,(function(o,s){return e("li",{key:s,class:t.getClass(o.mode),on:{click:function(e){return t.selectMode(o)}}},[t._v(t._s(o.title))])})),0)])}),[],!1,null,null,null);e.default=r.exports},407:function(t,e,o){"use strict";o(387)},408:function(t,e,o){"use strict";o(388)},409:function(t,e){function o(t){return"function"==typeof t.value||(console.warn("[Vue-click-outside:] provided expression",t.expression,"is not a function."),!1)}function s(t){return void 0!==t.componentInstance&&t.componentInstance.$isServer}t.exports={bind:function(t,e,n){function i(e){if(n.context){var o=e.path||e.composedPath&&e.composedPath();o&&o.length>0&&o.unshift(e.target),t.contains(e.target)||function(t,e){if(!t||!e)return!1;for(var o=0,s=e.length;o<s;o++)try{if(t.contains(e[o]))return!0;if(e[o].contains(t))return!1}catch(t){return!1}return!1}(n.context.popupItem,o)||t.__vueClickOutside__.callback(e)}}o(e)&&(t.__vueClickOutside__={handler:i,callback:e.value},!s(n)&&document.addEventListener("click",i))},update:function(t,e){o(e)&&(t.__vueClickOutside__.callback=e.value)},unbind:function(t,e,o){!s(o)&&document.removeEventListener("click",t.__vueClickOutside__.handler),delete t.__vueClickOutside__}}},410:function(t,e,o){"use strict";o(391)},422:function(t,e,o){},437:function(t,e,o){"use strict";o.r(e);o(14);var s={data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||""},computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,o=this.$site.themeConfig.searchMaxSuggestions,s=this.$localePath,n=e=>e&&e.title&&e.title.toLowerCase().indexOf(t)>-1,i=[];for(let t=0;t<e.length&&!(i.length>=o);t++){const a=e[t];if(this.getPageLocalePath(a)===s)if(n(a))i.push(a);else if(a.headers)for(let t=0;t<a.headers.length&&!(i.length>=o);t++){const e=a.headers[t];n(e)&&i.push(Object.assign({},a,{path:a.path+"#"+e.slug,header:e}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},n=(o(407),o(2)),i=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("i",{staticClass:"iconfont reco-search"}),t._v(" "),e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(o,s){return e("li",{key:s,staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){return t.go(s)},mouseenter:function(e){return t.focus(s)}}},[e("a",{attrs:{href:o.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(o.title||o.path))]),t._v(" "),o.header?e("span",{staticClass:"header"},[t._v("> "+t._s(o.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.default=i.exports},438:function(t,e,o){"use strict";o.r(e);var s=o(409),n=o.n(s),i=o(406),a={name:"UserSettings",directives:{"click-outside":n.a},components:{ModePicker:i.default},data:()=>({showMenu:!1}),methods:{hideMenu(){this.showMenu=!1}}},r=(o(410),o(2)),l=Object(r.a)(a,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[e("a",{staticClass:"color-button",on:{click:function(e){e.preventDefault(),t.showMenu=!t.showMenu}}},[e("i",{staticClass:"iconfont reco-color"})]),t._v(" "),e("transition",{attrs:{name:"menu-transition",mode:"out-in"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[e("ModePicker")],1)])],1)}),[],!1,null,null,null);e.default=l.exports},445:function(t,e,o){"use strict";o.r(e);o(408);var s=o(2),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.default=n.exports},451:function(t,e,o){"use strict";o(422)},478:function(t,e,o){"use strict";o.r(e);var s=o(437),n=o(445),i=o(404),a=o(438);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={components:{SidebarButton:n.default,NavLinks:i.default,SearchBox:s.default,AlgoliaSearchBox:{},Mode:a.default},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},c=(o(451),o(2)),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name"},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[e("Mode",{directives:[{name:"show",rawName:"v-show",value:null!==t.$themeConfig.mode,expression:"$themeConfig.mode !== null"}]}),t._v(" "),t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$themeConfig.search&&!1!==t.$frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.default=u.exports}}]);
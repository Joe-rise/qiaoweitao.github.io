(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{370:function(o,e,r){},390:function(o,e,r){"use strict";r(370)},406:function(o,e,r){"use strict";r.r(e);var t={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 6px 0 rgba(0, 0, 0, 0.2)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#2c3e50","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#202124","--box-shadow":"0 1px 6px 0 rgba(0, 0, 0, .9)","--box-shadow-hover":"0 2px 26px 0 rgba(0, 0, 0, .9)","--text-color":"#fff","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function a(o){const e=document.querySelector(":root"),r=t[o];for(const o in r)e.style.setProperty(o,r[o])}var c={name:"ModeOptions",data:()=>({modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}),mounted(){const o=localStorage.getItem("mode"),{mode:e}=this.$themeConfig;this.currentMode=null===o?void 0===e?"auto":e:o,a(this.currentMode)},methods:{selectMode(o){o.mode!==this.currentMode&&("auto"===o.mode?function(){const o=window.matchMedia("(prefers-color-scheme: dark)").matches,e=window.matchMedia("(prefers-color-scheme: light)").matches,r=window.matchMedia("(prefers-color-scheme: no-preference)").matches,t=!o&&!e&&!r;if(window.matchMedia("(prefers-color-scheme: dark)").addListener(o=>o.matches&&a("dark")),window.matchMedia("(prefers-color-scheme: light)").addListener(o=>o.matches&&a("light")),o&&a("dark"),e&&a("light"),r||t){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const o=(new Date).getHours();(o<4||o>=16)&&a("dark")}}():a(o.mode),localStorage.setItem("mode",o.mode),this.currentMode=o.mode)},getClass(o){return o!==this.currentMode?o:o+" active"}}},l=(r(390),r(2)),d=Object(l.a)(c,(function(){var o=this,e=o._self._c;return e("div",{staticClass:"mode-options"},[e("h4",{staticClass:"title"},[o._v("Choose mode")]),o._v(" "),e("ul",{staticClass:"color-mode-options"},o._l(o.modeOptions,(function(r,t){return e("li",{key:t,class:o.getClass(r.mode),on:{click:function(e){return o.selectMode(r)}}},[o._v(o._s(r.title))])})),0)])}),[],!1,null,null,null);e.default=d.exports}}]);
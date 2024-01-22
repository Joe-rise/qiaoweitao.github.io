(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{484:function(s,a,n){"use strict";n.r(a);var t=n(2),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),a("p",[s._v("查看go env go 1.21")]),s._v(" "),a("p",[s._v("安装wails")]),s._v(" "),a("blockquote",[a("p",[s._v("go install github.com/wailsapp/wails/v2/cmd/wails@latest")])]),s._v(" "),a("h2",{attrs:{id:"初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[s._v("#")]),s._v(" 初始化项目")]),s._v(" "),a("p",[s._v("使用 JavaScript 生成一个 Vue 项目:")]),s._v(" "),a("blockquote",[a("p",[s._v("wails init -n myproject -t vue")])]),s._v(" "),a("p",[s._v("如果您更愿意使用 TypeScript:")]),s._v(" "),a("blockquote",[a("p",[s._v("wails init -n myproject -t vue-ts")])]),s._v(" "),a("p",[s._v("项目布局\nWails 项目有以下布局：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├── build/\n│   ├── appicon.png\n│   ├── darwin/\n│   └── windows/\n├── frontend/\n├── go.mod\n├── go.sum\n├── main.go\n└── wails.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("项目结构概要")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/main.go - 主应用\n/frontend/ - 前端项目文件\n/build/ - 项目构建目录\n/build/appicon.png - 应用程序图标\n/build/darwin/ - Mac 特定的项目文件\n/build/windows/ - Windows 特定的项目文件\n/wails.json - 项目配置\n/go.mod - Go module 文件\n/go.sum - Go module 校验文件\nfrontend 目录没有特定于 Wails 的内容，可以是您选择的任何前端项目。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("build 目录在构建过程中使用。 这些文件可以修改以自定义您的构建。 如果从 build 目录中删除文件，将重新生成默认版本。")]),s._v(" "),a("p",[s._v("go.mod 中的默认模块名称是“changeme”。 您应该将其更改为更合适的内容。")]),s._v(" "),a("h2",{attrs:{id:"前端初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端初始化"}},[s._v("#")]),s._v(" 前端初始化")]),s._v(" "),a("p",[s._v("删除项目下frontend文件夹")]),s._v(" "),a("p",[s._v("使用pnpm 初始化前端项目")]),s._v(" "),a("blockquote",[a("p",[s._v("pnpm create vite frontend --template vue-ts")])]),s._v(" "),a("h2",{attrs:{id:"配置quasar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置quasar"}},[s._v("#")]),s._v(" 配置quasar")]),s._v(" "),a("blockquote",[a("p",[s._v("pnpm add quasar @quasar/extras")]),s._v(" "),a("p",[s._v("pnpm add -D @quasar/vite-plugin sass@^1.33.0")])]),s._v(" "),a("h3",{attrs:{id:"替换main-js文件内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替换main-js文件内容"}},[s._v("#")]),s._v(" 替换main.js文件内容")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// FILE: main.js")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" createApp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Quasar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'quasar'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" quasarLang "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'quasar/lang/zh-CN'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Import icon libraries")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@quasar/extras/material-icons/material-icons.css'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Import Quasar css")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'quasar/src/css/index.sass'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Assumes your root component is App.vue")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// and placed in same folder as main.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" App "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./App.vue'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" myApp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createApp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmyApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Quasar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import Quasar plugins and add here")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("lang")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" quasarLang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// Assumes you have a <div id="app"></div> in your index.html')]),s._v("\nmyApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"替换vite-config-js文件内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替换vite-config-js文件内容"}},[s._v("#")]),s._v(" 替换vite.config.js文件内容")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// FILE: vite.config.js")]),s._v("\n\nimport "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" defineConfig "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" from 'vite'\nimport vue from '@vitejs/plugin-vue'\nimport "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" quasar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" transformAssetUrls "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" from '@quasar/vite-plugin'\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// https://vitejs.dev/config/")]),s._v("\nexport default defineConfig("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    vue("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" transformAssetUrls "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(")"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @quasar/plugin-vite options list:")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts")]),s._v("\n    quasar("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      sassVariables"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'src/quasar-variables.sass'\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(")\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(")\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"src下新增quasar-variables-sass-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src下新增quasar-variables-sass-文件"}},[s._v("#")]),s._v(" src下新增quasar-variables.sass 文件")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("// FILE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("create it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" src/quasar-variables.sass\n\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("primary")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #1976D2\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("secondary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #26A69A\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("accent")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #9C27B0\n\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("dark")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #1D1D1D\n\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("positive")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #21BA45\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("negative")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #C10015\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("info")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #31CCEC\n$"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("warning")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #F2C037\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);
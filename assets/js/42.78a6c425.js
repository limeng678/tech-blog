(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{267:function(e,t,v){"use strict";v.r(t);var r=v(0),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"carousel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#carousel"}},[e._v("#")]),e._v(" Carousel")]),e._v(" "),v("h2",{attrs:{id:"网页链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网页链接"}},[e._v("#")]),e._v(" 网页链接")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://wanmaoor.github.io/SlidesPage/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slider Page"),v("OutboundLink")],1)]),e._v(" "),v("h2",{attrs:{id:"源码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[e._v("#")]),e._v(" 源码")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://github.com/wanmaoor/SlidesPage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Source Code"),v("OutboundLink")],1)]),e._v(" "),v("h2",{attrs:{id:"如何实现点击切换的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何实现点击切换的"}},[e._v("#")]),e._v(" 如何实现点击切换的")]),e._v(" "),v("h3",{attrs:{id:"如何显示"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何显示"}},[e._v("#")]),e._v(" 如何显示")]),e._v(" "),v("p",[e._v("网页里有 5 个可以切换的图片, 它们都是作为各自的"),v("code",[e._v("div.slide")]),e._v("的"),v("code",[e._v("background")]),e._v("存在, 初始化时它们被设置"),v("code",[e._v("opacity:0")]),e._v(", 都不会显示出来, 只有带有"),v("code",[e._v(".current")]),e._v("的"),v("code",[e._v("div")]),e._v("才能显示出来.这里, 我们默认为第一个 slide 添加"),v("code",[e._v("current")]),e._v("类")]),e._v(" "),v("h3",{attrs:{id:"如何切换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何切换"}},[e._v("#")]),e._v(" 如何切换")]),e._v(" "),v("p",[e._v("添加两个按钮, 分别为"),v("code",[e._v("next")]),e._v(", "),v("code",[e._v("prev")]),e._v(".各自绑定点击事件.就"),v("code",[e._v("next")]),e._v("绑定事件为例,")]),e._v(" "),v("ol",[v("li",[e._v("将当前带有"),v("code",[e._v("current")]),e._v("类的"),v("code",[e._v("div")]),e._v("找到并从它的"),v("code",[e._v("classList")]),e._v("中删除"),v("code",[e._v("current")]),e._v("类")]),e._v(" "),v("li",[e._v("从删除"),v("code",[e._v("current")]),e._v("类的"),v("code",[e._v("div")]),e._v("往下一个兄弟元素寻找(使用"),v("code",[e._v("nextElementSibling")]),e._v("), 如果有, 则给它的"),v("code",[e._v("classList")]),e._v("添加"),v("code",[e._v("current")]),e._v("类.如果没有, 则给第一个 slide 添加"),v("code",[e._v("current")]),e._v("类.")])]),e._v(" "),v("p",[v("code",[e._v("prev")]),e._v("同理, 不过是把"),v("code",[e._v("nextElementSibling")]),e._v("改为"),v("code",[e._v("prevElementSibling")])]),e._v(" "),v("h3",{attrs:{id:"自动切换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自动切换"}},[e._v("#")]),e._v(" 自动切换")]),e._v(" "),v("p",[e._v("使用"),v("code",[e._v("setInterval(nextSlide, intervalTime)")]),e._v("可以实现自动切换.但是要注意的是, 当点击"),v("code",[e._v("next")]),e._v("按钮时, 必须要清除"),v("code",[e._v("setInterVal")]),e._v(", 否则会出现连续切换图片的 bug, 所以每次"),v("code",[e._v("setInterval()")]),e._v("前, "),v("code",[e._v("clearInterval(intervalId)")]),e._v("必须调用, 将每次切换后的时间归零.")])])}),[],!1,null,null,null);t.default=_.exports}}]);
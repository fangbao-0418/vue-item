webpackJsonp([1],{

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(165)
	__vue_script__ = __webpack_require__(167)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(198)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7eedf4cc/home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(166);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7eedf4cc&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7eedf4cc&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.content[_v-7eedf4cc]{\n    height:100%;\n}\n", ""]);

	// exports


/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _header = __webpack_require__(168);

	var _header2 = _interopRequireDefault(_header);

	var _indexMain = __webpack_require__(178);

	var _indexMain2 = _interopRequireDefault(_indexMain);

	var _investment = __webpack_require__(42);

	var _investment2 = _interopRequireDefault(_investment);

	var _recommend = __webpack_require__(183);

	var _recommend2 = _interopRequireDefault(_recommend);

	var _health = __webpack_require__(190);

	var _health2 = _interopRequireDefault(_health);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            msg: "首页"
	        };
	    },

	    computed: {
	        catid: function catid() {
	            var catid = this.$route.query.id ? this.$route.query.id : 4;
	            return catid;
	        },
	        currentView: function currentView() {
	            var type = this.$route.query.type ? this.$route.query.type : 'recommend';
	            return type;
	        }
	    },
	    mounted: function mounted() {},

	    //["recommend","drug","zyc","bjsp","ylqx","mrhf","jsyp","zysb","yly"];
	    components: {
	        'my-header': _header2.default,
	        'index-main': _indexMain2.default,
	        'recommend': _recommend2.default,
	        'drug': _investment2.default,
	        'zyc': _investment2.default,
	        'bjsp': _investment2.default,
	        'ylqx': _investment2.default,
	        'mrhf': _investment2.default,
	        'jsyp': _investment2.default,
	        'zysb': _investment2.default,
	        'yly': _investment2.default,
	        'health': _health2.default
	    }
	};
	// </script>
	// <style scoped>
	//     .content{
	//         height:100%;
	//     }
	// </style>
	//
	//
	// <template>
	//     <div class="content">
	//         <my-header ></my-header>
	//
	//         <component :is="currentView" :catid="catid" keep-alive>
	//             <!-- 组件在 vm.currentview 变化时改变 -->
	//         </component>
	//     </div>
	// </template>
	//
	// <script>

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(169)
	__vue_script__ = __webpack_require__(175)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(177)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0ab50b8c/header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(170);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0ab50b8c&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./header.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0ab50b8c&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".box[_v-0ab50b8c] {\n  height: 1.44rem; }\n\n.wrap[_v-0ab50b8c] {\n  width: 5.8rem;\n  margin: 0px .3rem; }\n\n.top[_v-0ab50b8c] {\n  position: fixed;\n  top: 0px;\n  width: 6.4rem;\n  height: .84rem;\n  background: #ed1b23;\n  z-index: 999999; }\n\n.logo[_v-0ab50b8c] {\n  width: 3rem;\n  height: 0.4rem;\n  display: inline-block;\n  background: url(" + __webpack_require__(171) + ") no-repeat;\n  background-size: 3rem .4rem;\n  margin-top: .22rem; }\n\n.search_bg[_v-0ab50b8c] {\n  background: url(" + __webpack_require__(172) + ");\n  width: 2.61rem;\n  height: .5rem;\n  float: right;\n  margin-top: .16rem;\n  background-size: 2.61rem .5rem; }\n  .search_bg i[_v-0ab50b8c] {\n    font-size: .24rem;\n    color: #8f8f8f;\n    margin-left: .5rem;\n    padding-top: .13rem;\n    display: inline-block; }\n\n.nav[_v-0ab50b8c] {\n  width: 5.8rem;\n  height: .6rem;\n  padding: 0px .3rem;\n  position: fixed;\n  top: .84rem;\n  background-color: #f5f5f3;\n  z-index: 999999; }\n\n#nav-smartSetup[_v-0ab50b8c] {\n  position: absolute;\n  z-index: 1;\n  margin-left: -.3rem;\n  padding-left: .1rem;\n  height: .6rem;\n  width: 5.4rem;\n  overflow: hidden; }\n\n#nav-smartSetup ul li[_v-0ab50b8c] {\n  float: left;\n  line-height: .64rem;\n  font-size: .3rem;\n  padding: 0px .2rem;\n  height: .6rem; }\n\n#nav-smartSetup ul .cur[_v-0ab50b8c] {\n  font-size: .32rem;\n  color: #ed1b23;\n  float: left;\n  line-height: .64rem;\n  padding: 0px .2rem; }\n\n#scroller[_v-0ab50b8c] {\n  position: absolute;\n  z-index: 1;\n  -webkit-tap-highlight-color: transparent;\n  height: 100%;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  -o-text-size-adjust: none;\n  text-size-adjust: none; }\n\n#scroller ul[_v-0ab50b8c] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: 110%;\n  line-height: 4rem;\n  height: .6rem;\n  text-align: center; }\n\n.line_a[_v-0ab50b8c] {\n  background: url(" + __webpack_require__(173) + ");\n  display: inline-block;\n  width: .14rem;\n  height: .6rem;\n  background-size: .14rem .6rem;\n  position: absolute;\n  top: 0px;\n  right: .67rem;\n  z-index: 999; }\n\n.plus_a[_v-0ab50b8c] {\n  position: absolute;\n  right: .3rem;\n  background: url(" + __webpack_require__(174) + ");\n  display: inline-block;\n  width: .37rem;\n  height: .36rem;\n  float: right;\n  margin-top: .10rem;\n  cursor: pointer;\n  background-size: .37rem .36rem;\n  z-index: 999; }\n", ""]);

	// exports


/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/logo.png";

/***/ },

/***/ 172:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },

/***/ 173:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAA+CAYAAAAbMip8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHOSURBVHja7FZJcoQwDLSM5v+PzUwuGJSDsa2l7UnIdaiiWNvdai1Ar9eXpBtbTje3D3AFPM/zFpDP80xEBB5Rgrcb43Eck0eSRNoOGI/jSNKfVIrIJEnEKsgVOF4YTAisGEsp7mZbud6jSaC5lMrYds8ohlq01NJNsMwarKDXed73YkDWyXEEUosBxZfFscoAItCIOUFW3vfd5VEuZxsTrqDLVXEOinE5yk2JS9mBlJHLVk01p+PaFAARubwNjVquSDdHu4oLPpjTgETVCP9CZaJVyQlMtE6LVqBipFCPusCrB7CtJMToVWj23BpZV0ksalmNDjE7iitMuZGO5NoKF/h0PMry+3V1R85xJg/38NjsQG27trydo4XytuWes7EAgSFlr3PO2wXCE3xacsybAaxA+nneNu6MVR4p2Tj2zqhXRmMi3qPKOGQS2CefOWZWL8zyNjGngSxrmqaDSDH6/hsmaTcpStX2+7zCGB+Ph2Gz1ZOmjl8xUgC/SxEzP4BUe0SSGRcAhc7wMTMzu8JGxkSt3GrVr7ruFiMVmeELgTDjuz8rfc2jH9f2B1fbBJhvuEO4zZy//gSyn3K//l9Fc/XzM/9PID+f37eAPwMAHrQ6uZXTPo0AAAAASUVORK5CYII="

/***/ },

/***/ 174:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABeSURBVHja7NUxCsAwCAXQpHQLvf9Bg3N6gtCSOqTw/qzwUMEa0UfZLEfZMFBQrV0mBQUFBQUF9SFn1nNd6Yvo71CzwifQSp+bgoKCgoKCSkRlPmPr+z3qBgAA//8DALiWEChukzCJAAAAAElFTkSuQmCC"

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	// <template>
	//     <div class="box">
	//         <div class="top">
	//             <div class="wrap">
	//                 <i class="logo"></i>
	//                 <div class="search_bg"  >
	//                     <i>当代医药市场网</i>
	//                 </div>
	//             </div>
	//
	//         </div>
	//         <div class="nav">
	//             <div id="nav-smartSetup">
	//                 <div id="scroller">
	//                     <ul>
	//                         <li v-on:click="selectType('recommend')" :class="{'cur':isCur[0]}" >推荐</li>
	//                         <li v-on:click="selectType('drug',4)" :class="{'cur':isCur[1]}">药品 </li>
	//                         <li v-on:click="selectType('zyc',11)" :class="{'cur':isCur[2]}">中药材</li>
	//                         <li v-on:click="selectType('bjsp',5)" :class="{'cur':isCur[3]}">保健食品</li>
	//                         <li  v-on:click="selectType('ylqx',13)" :class="{'cur':isCur[4]}">医疗器械 </li>
	//                         <li  v-on:click="selectType('mrhf',20)" :class="{'cur':isCur[5]}">美容护肤 </li>
	//                         <li  v-on:click="selectType('jsyp',18)" :class="{'cur':isCur[6]}">计生用品 </li>
	//                         <li  v-on:click="selectType('zysb',15)" :class="{'cur':isCur[7]}">制药设备 </li>
	//                         <li v-on:click="selectType('yly',7)" :class="{'cur':isCur[8]}">原料药 </li>
	//                         <li v-on:click="selectType('health')" :class="{'cur':isCur[9]}">健康 </li>
	//                     </ul>
	//                 </div>
	//             </div>
	//             <i class="line_a"></i>
	//             <i class="plus_a"></i>
	//         </div>
	//
	//     </div>
	// </template>
	//
	// <script>


	//滑动导航
	var IScroll = __webpack_require__(176);

	exports.default = {
	    data: function data() {
	        return {};
	    },

	    components: {},
	    computed: {
	        type: function type() {
	            var type = this.$route.query.type ? this.$route.query.type : "recommend";
	            return type;
	        },

	        isCur: function isCur() {
	            var cur = [],
	                i = void 0;
	            var arr = ["recommend", "drug", "zyc", "bjsp", "ylqx", "mrhf", "jsyp", "zysb", "yly", "health"];
	            for (i in arr) {
	                if (arr[i] == this.type) {
	                    cur[i] = true;
	                } else {
	                    cur[i] = false;
	                }
	            }
	            return cur;
	        }
	    },
	    methods: {
	        selectType: function selectType(type, catid) {
	            this.type = type;
	            if (type == 'recommend') {
	                this.$parent.currentView = 'recommend';
	            } else if (type == 'health') {
	                this.$parent.currentView = 'health';
	            } else {
	                this.$parent.currentView = type;
	                this.$parent.catid = catid;
	            }
	            this.$router.push({ "path": "/home", query: { "type": type, "id": catid } });
	        },
	        shared: function shared() {
	            this.isOpen = true;
	        }
	    },
	    mounted: function mounted() {

	        $(document).ready(function () {

	            var myScroll;
	            //iscroll click设为true 不然无法点击
	            function loaded(startX) {
	                myScroll = new IScroll('#nav-smartSetup', { startX: startX, scrollX: true, scrollY: false, mouseWheel: true, click: true });
	            }
	            var w = 0;
	            var currPosition = 0;
	            $("#scroller ul li").map(function () {
	                w += $(this)[0].clientWidth;
	            });

	            for (var i = 0; i < $("#scroller ul li").length; i++) {

	                if ($("#scroller ul li").eq(i)[0].className == "cur") {
	                    break;
	                }
	                currPosition += $("#scroller ul li").eq(i).width();
	            }

	            $("#scroller").width(w);
	            //初始化位置
	            loaded(-currPosition);

	            //$("#scroller").css({"transition-duration": "1s",transform: "translate(-"+ 20 +"px, 0px) translateZ(0px)"});
	        });
	    },
	    beforeUpdate: function beforeUpdate() {
	        console.log("before");
	    },
	    updated: function updated() {}
	};
	// </script>
	// <style lang="sass" scoped>
	//     .box{
	//         height:1.44rem;
	//     }
	//     .wrap{
	//         width:5.8rem;
	//         margin:0px .3rem;
	//     }
	//     .top{
	//         position: fixed;
	//         top:0px;
	//         width:6.4rem;
	//         height:.84rem;
	//         background: #ed1b23;
	//         z-index: 999999;
	//     }
	//     .logo{
	//         width:3rem;
	//         height:0.4rem;
	//         display: inline-block;
	//         background: url("../image/logo.png") no-repeat;
	//         background-size: 3rem .4rem;
	//         margin-top:.22rem;
	//     }
	//     .search_bg{
	//         background: url("../image/search_bg.png");
	//         width:2.61rem;
	//         height:.5rem;
	//         float:right;
	//         margin-top:.16rem;
	//         background-size: 2.61rem .5rem;
	//         i{
	//             font-size:.24rem;
	//             color:#8f8f8f;
	//             margin-left:.5rem;
	//             padding-top:.13rem;
	//             display:inline-block;
	//         }
	//     }
	//
	//
	//     .nav{
	//         width:5.8rem;
	//         height:.6rem;
	//         padding:0px .3rem;
	//         position:fixed;
	//         top:.84rem;
	//         background-color:#f5f5f3;
	//         z-index: 999999;
	//     }
	//     #nav-smartSetup{
	//         position: absolute;
	//         z-index: 1;
	//         margin-left:-.3rem;
	//         padding-left:.1rem;
	//         height: .6rem;
	//         width: 5.4rem;
	//         overflow: hidden;
	//     }
	//
	//     #nav-smartSetup ul li{
	//         float:left;
	//         line-height: .64rem;
	//         font-size: .3rem;
	//         padding: 0px .2rem;
	//         height:.6rem;
	//     }
	//     #nav-smartSetup ul .cur{
	//         font-size:.32rem;
	//         color:#ed1b23;
	//         float:left;
	//         line-height: .64rem;
	//         padding: 0px .2rem;
	//
	//     }
	//     #scroller {
	//         position: absolute;
	//         z-index: 1;
	//         -webkit-tap-highlight-color: rgba(0,0,0,0);
	//
	//         height: 100%;
	//
	//         -webkit-transform: translateZ(0);
	//         -moz-transform: translateZ(0);
	//         -ms-transform: translateZ(0);
	//         -o-transform: translateZ(0);
	//         transform: translateZ(0);
	//         -webkit-touch-callout: none;
	//         -webkit-user-select: none;
	//         -moz-user-select: none;
	//         -ms-user-select: none;
	//         user-select: none;
	//         -webkit-text-size-adjust: none;
	//         -moz-text-size-adjust: none;
	//         -ms-text-size-adjust: none;
	//         -o-text-size-adjust: none;
	//         text-size-adjust: none;
	//     }
	//     #scroller ul {
	//         list-style: none;
	//         padding: 0;
	//         margin: 0;
	//         width: 110%;
	//         line-height: 4rem;
	//         height: .6rem;
	//         text-align: center;
	//     }
	//
	//
	//     .line_a{
	//
	//         background: url("../image/line-01.png");
	//         display: inline-block;
	//         width:.14rem;
	//         height:.6rem;
	//         background-size: .14rem .6rem;
	//
	//         position: absolute;
	//         top:0px;
	//         right:.67rem;
	//         z-index: 999;
	//     }
	//     .plus_a{
	//         position: absolute;
	//         right:.3rem;
	//         background: url("../image/plus.png");
	//         display: inline-block;
	//         width:.37rem;
	//         height:.36rem;
	//         float:right;
	//         margin-top:.10rem;
	//         cursor: pointer;
	//         background-size: .37rem .36rem;
	//         z-index: 999;
	//     }
	//
	//
	// </style>
	//
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof2 = __webpack_require__(67);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
	(function (window, document, Math) {
		var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};

		var utils = function () {
			var me = {};

			var _elementStyle = document.createElement('div').style;
			var _vendor = function () {
				var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				    transform,
				    i = 0,
				    l = vendors.length;

				for (; i < l; i++) {
					transform = vendors[i] + 'ransform';
					if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
				}

				return false;
			}();

			function _prefixStyle(style) {
				if (_vendor === false) return false;
				if (_vendor === '') return style;
				return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
			}

			me.getTime = Date.now || function getTime() {
				return new Date().getTime();
			};

			me.extend = function (target, obj) {
				for (var i in obj) {
					target[i] = obj[i];
				}
			};

			me.addEvent = function (el, type, fn, capture) {
				el.addEventListener(type, fn, !!capture);
			};

			me.removeEvent = function (el, type, fn, capture) {
				el.removeEventListener(type, fn, !!capture);
			};

			me.prefixPointerEvent = function (pointerEvent) {
				return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
			};

			me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
				var distance = current - start,
				    speed = Math.abs(distance) / time,
				    destination,
				    duration;

				deceleration = deceleration === undefined ? 0.0006 : deceleration;

				destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
				duration = speed / deceleration;

				if (destination < lowerMargin) {
					destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
					distance = Math.abs(destination - current);
					duration = distance / speed;
				} else if (destination > 0) {
					destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
					distance = Math.abs(current) + destination;
					duration = distance / speed;
				}

				return {
					destination: Math.round(destination),
					duration: duration
				};
			};

			var _transform = _prefixStyle('transform');

			me.extend(me, {
				hasTransform: _transform !== false,
				hasPerspective: _prefixStyle('perspective') in _elementStyle,
				hasTouch: 'ontouchstart' in window,
				hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
				hasTransition: _prefixStyle('transition') in _elementStyle
			});

			/*
	  This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	  - galaxy S2 is ok
	     - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	     - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	    - galaxy S3 is badAndroid (stock brower, webview)
	      `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	    - galaxy S4 is badAndroid (stock brower, webview)
	      `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	    - galaxy S5 is OK
	      `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	    - galaxy S6 is OK
	      `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	   */
			me.isBadAndroid = function () {
				var appVersion = window.navigator.appVersion;
				// Android browser is not a chrome browser.
				if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
					var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
					if (safariVersion && (typeof safariVersion === 'undefined' ? 'undefined' : (0, _typeof3.default)(safariVersion)) === "object" && safariVersion.length >= 2) {
						return parseFloat(safariVersion[1]) < 535.19;
					} else {
						return true;
					}
				} else {
					return false;
				}
			}();

			me.extend(me.style = {}, {
				transform: _transform,
				transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
				transitionDuration: _prefixStyle('transitionDuration'),
				transitionDelay: _prefixStyle('transitionDelay'),
				transformOrigin: _prefixStyle('transformOrigin')
			});

			me.hasClass = function (e, c) {
				var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
				return re.test(e.className);
			};

			me.addClass = function (e, c) {
				if (me.hasClass(e, c)) {
					return;
				}

				var newclass = e.className.split(' ');
				newclass.push(c);
				e.className = newclass.join(' ');
			};

			me.removeClass = function (e, c) {
				if (!me.hasClass(e, c)) {
					return;
				}

				var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
				e.className = e.className.replace(re, ' ');
			};

			me.offset = function (el) {
				var left = -el.offsetLeft,
				    top = -el.offsetTop;

				// jshint -W084
				while (el = el.offsetParent) {
					left -= el.offsetLeft;
					top -= el.offsetTop;
				}
				// jshint +W084

				return {
					left: left,
					top: top
				};
			};

			me.preventDefaultException = function (el, exceptions) {
				for (var i in exceptions) {
					if (exceptions[i].test(el[i])) {
						return true;
					}
				}

				return false;
			};

			me.extend(me.eventType = {}, {
				touchstart: 1,
				touchmove: 1,
				touchend: 1,

				mousedown: 2,
				mousemove: 2,
				mouseup: 2,

				pointerdown: 3,
				pointermove: 3,
				pointerup: 3,

				MSPointerDown: 3,
				MSPointerMove: 3,
				MSPointerUp: 3
			});

			me.extend(me.ease = {}, {
				quadratic: {
					style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
					fn: function fn(k) {
						return k * (2 - k);
					}
				},
				circular: {
					style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
					fn: function fn(k) {
						return Math.sqrt(1 - --k * k);
					}
				},
				back: {
					style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
					fn: function fn(k) {
						var b = 4;
						return (k = k - 1) * k * ((b + 1) * k + b) + 1;
					}
				},
				bounce: {
					style: '',
					fn: function fn(k) {
						if ((k /= 1) < 1 / 2.75) {
							return 7.5625 * k * k;
						} else if (k < 2 / 2.75) {
							return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
						} else if (k < 2.5 / 2.75) {
							return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
						} else {
							return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
						}
					}
				},
				elastic: {
					style: '',
					fn: function fn(k) {
						var f = 0.22,
						    e = 0.4;

						if (k === 0) {
							return 0;
						}
						if (k == 1) {
							return 1;
						}

						return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
					}
				}
			});

			me.tap = function (e, eventName) {
				var ev = document.createEvent('Event');
				ev.initEvent(eventName, true, true);
				ev.pageX = e.pageX;
				ev.pageY = e.pageY;
				e.target.dispatchEvent(ev);
			};

			me.click = function (e) {
				var target = e.target,
				    ev;

				if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
					// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
					// initMouseEvent is deprecated.
					ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
					ev.initEvent('click', true, true);
					ev.view = e.view || window;
					ev.detail = 1;
					ev.screenX = target.screenX || 0;
					ev.screenY = target.screenY || 0;
					ev.clientX = target.clientX || 0;
					ev.clientY = target.clientY || 0;
					ev.ctrlKey = !!e.ctrlKey;
					ev.altKey = !!e.altKey;
					ev.shiftKey = !!e.shiftKey;
					ev.metaKey = !!e.metaKey;
					ev.button = 0;
					ev.relatedTarget = null;
					ev._constructed = true;
					target.dispatchEvent(ev);
				}
			};

			return me;
		}();
		function IScroll(el, options) {
			this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
			this.scroller = this.wrapper.children[0];
			this.scrollerStyle = this.scroller.style; // cache style for better performance

			this.options = {

				resizeScrollbars: true,

				mouseWheelSpeed: 20,

				snapThreshold: 0.334,

				// INSERT POINT: OPTIONS
				disablePointer: !utils.hasPointer,
				disableTouch: utils.hasPointer || !utils.hasTouch,
				disableMouse: utils.hasPointer || utils.hasTouch,
				startX: 0,
				startY: 0,
				scrollY: true,
				directionLockThreshold: 5,
				momentum: true,

				bounce: true,
				bounceTime: 600,
				bounceEasing: '',

				preventDefault: true,
				preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

				HWCompositing: true,
				useTransition: true,
				useTransform: true,
				bindToWrapper: typeof window.onmousedown === "undefined"
			};

			for (var i in options) {
				this.options[i] = options[i];
			}

			// Normalize options
			this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

			this.options.useTransition = utils.hasTransition && this.options.useTransition;
			this.options.useTransform = utils.hasTransform && this.options.useTransform;

			this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
			this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

			// If you want eventPassthrough I have to lock one of the axes
			this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
			this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

			// With eventPassthrough we also need lockDirection mechanism
			this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
			this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

			this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

			this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

			if (this.options.tap === true) {
				this.options.tap = 'tap';
			}

			// https://github.com/cubiq/iscroll/issues/1029
			if (!this.options.useTransition && !this.options.useTransform) {
				if (!/relative|absolute/i.test(this.scrollerStyle.position)) {
					this.scrollerStyle.position = "relative";
				}
			}

			if (this.options.shrinkScrollbars == 'scale') {
				this.options.useTransition = false;
			}

			this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

			// INSERT POINT: NORMALIZATION

			// Some defaults
			this.x = 0;
			this.y = 0;
			this.directionX = 0;
			this.directionY = 0;
			this._events = {};

			// INSERT POINT: DEFAULTS

			this._init();
			this.refresh();

			this.scrollTo(this.options.startX, this.options.startY);
			this.enable();
		}

		IScroll.prototype = {
			version: '5.2.0',

			_init: function _init() {
				this._initEvents();

				if (this.options.scrollbars || this.options.indicators) {
					this._initIndicators();
				}

				if (this.options.mouseWheel) {
					this._initWheel();
				}

				if (this.options.snap) {
					this._initSnap();
				}

				if (this.options.keyBindings) {
					this._initKeys();
				}

				// INSERT POINT: _init
			},

			destroy: function destroy() {
				this._initEvents(true);
				clearTimeout(this.resizeTimeout);
				this.resizeTimeout = null;
				this._execEvent('destroy');
			},

			_transitionEnd: function _transitionEnd(e) {
				if (e.target != this.scroller || !this.isInTransition) {
					return;
				}

				this._transitionTime();
				if (!this.resetPosition(this.options.bounceTime)) {
					this.isInTransition = false;
					this._execEvent('scrollEnd');
				}
			},

			_start: function _start(e) {
				// React to left mouse button only
				if (utils.eventType[e.type] != 1) {
					// for button property
					// http://unixpapa.com/js/mouse.html
					var button;
					if (!e.which) {
						/* IE case */
						button = e.button < 2 ? 0 : e.button == 4 ? 1 : 2;
					} else {
						/* All others */
						button = e.button;
					}
					if (button !== 0) {
						return;
					}
				}

				if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) {
					return;
				}

				if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
					e.preventDefault();
				}

				var point = e.touches ? e.touches[0] : e,
				    pos;

				this.initiated = utils.eventType[e.type];
				this.moved = false;
				this.distX = 0;
				this.distY = 0;
				this.directionX = 0;
				this.directionY = 0;
				this.directionLocked = 0;

				this.startTime = utils.getTime();

				if (this.options.useTransition && this.isInTransition) {
					this._transitionTime();
					this.isInTransition = false;
					pos = this.getComputedPosition();
					this._translate(Math.round(pos.x), Math.round(pos.y));
					this._execEvent('scrollEnd');
				} else if (!this.options.useTransition && this.isAnimating) {
					this.isAnimating = false;
					this._execEvent('scrollEnd');
				}

				this.startX = this.x;
				this.startY = this.y;
				this.absStartX = this.x;
				this.absStartY = this.y;
				this.pointX = point.pageX;
				this.pointY = point.pageY;

				this._execEvent('beforeScrollStart');
			},

			_move: function _move(e) {
				if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
					return;
				}

				if (this.options.preventDefault) {
					// increases performance on Android? TODO: check!
					e.preventDefault();
				}

				var point = e.touches ? e.touches[0] : e,
				    deltaX = point.pageX - this.pointX,
				    deltaY = point.pageY - this.pointY,
				    timestamp = utils.getTime(),
				    newX,
				    newY,
				    absDistX,
				    absDistY;

				this.pointX = point.pageX;
				this.pointY = point.pageY;

				this.distX += deltaX;
				this.distY += deltaY;
				absDistX = Math.abs(this.distX);
				absDistY = Math.abs(this.distY);

				// We need to move at least 10 pixels for the scrolling to initiate
				if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
					return;
				}

				// If you are scrolling in one direction lock the other
				if (!this.directionLocked && !this.options.freeScroll) {
					if (absDistX > absDistY + this.options.directionLockThreshold) {
						this.directionLocked = 'h'; // lock horizontally
					} else if (absDistY >= absDistX + this.options.directionLockThreshold) {
						this.directionLocked = 'v'; // lock vertically
					} else {
						this.directionLocked = 'n'; // no lock
					}
				}

				if (this.directionLocked == 'h') {
					if (this.options.eventPassthrough == 'vertical') {
						e.preventDefault();
					} else if (this.options.eventPassthrough == 'horizontal') {
						this.initiated = false;
						return;
					}

					deltaY = 0;
				} else if (this.directionLocked == 'v') {
					if (this.options.eventPassthrough == 'horizontal') {
						e.preventDefault();
					} else if (this.options.eventPassthrough == 'vertical') {
						this.initiated = false;
						return;
					}

					deltaX = 0;
				}

				deltaX = this.hasHorizontalScroll ? deltaX : 0;
				deltaY = this.hasVerticalScroll ? deltaY : 0;

				newX = this.x + deltaX;
				newY = this.y + deltaY;

				// Slow down if outside of the boundaries
				if (newX > 0 || newX < this.maxScrollX) {
					newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
				}
				if (newY > 0 || newY < this.maxScrollY) {
					newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
				}

				this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
				this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

				if (!this.moved) {
					this._execEvent('scrollStart');
				}

				this.moved = true;

				this._translate(newX, newY);

				/* REPLACE START: _move */

				if (timestamp - this.startTime > 300) {
					this.startTime = timestamp;
					this.startX = this.x;
					this.startY = this.y;
				}

				/* REPLACE END: _move */
			},

			_end: function _end(e) {
				if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
					return;
				}

				if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
					e.preventDefault();
				}

				var point = e.changedTouches ? e.changedTouches[0] : e,
				    momentumX,
				    momentumY,
				    duration = utils.getTime() - this.startTime,
				    newX = Math.round(this.x),
				    newY = Math.round(this.y),
				    distanceX = Math.abs(newX - this.startX),
				    distanceY = Math.abs(newY - this.startY),
				    time = 0,
				    easing = '';

				this.isInTransition = 0;
				this.initiated = 0;
				this.endTime = utils.getTime();

				// reset if we are outside of the boundaries
				if (this.resetPosition(this.options.bounceTime)) {
					return;
				}

				this.scrollTo(newX, newY); // ensures that the last position is rounded

				// we scrolled less than 10 pixels
				if (!this.moved) {
					if (this.options.tap) {
						utils.tap(e, this.options.tap);
					}

					if (this.options.click) {
						utils.click(e);
					}

					this._execEvent('scrollCancel');
					return;
				}

				if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
					this._execEvent('flick');
					return;
				}

				// start momentum animation if needed
				if (this.options.momentum && duration < 300) {
					momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
					momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
					newX = momentumX.destination;
					newY = momentumY.destination;
					time = Math.max(momentumX.duration, momentumY.duration);
					this.isInTransition = 1;
				}

				if (this.options.snap) {
					var snap = this._nearestSnap(newX, newY);
					this.currentPage = snap;
					time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
					newX = snap.x;
					newY = snap.y;

					this.directionX = 0;
					this.directionY = 0;
					easing = this.options.bounceEasing;
				}

				// INSERT POINT: _end

				if (newX != this.x || newY != this.y) {
					// change easing function when scroller goes out of the boundaries
					if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
						easing = utils.ease.quadratic;
					}

					this.scrollTo(newX, newY, time, easing);
					return;
				}

				this._execEvent('scrollEnd');
			},

			_resize: function _resize() {
				var that = this;

				clearTimeout(this.resizeTimeout);

				this.resizeTimeout = setTimeout(function () {
					that.refresh();
				}, this.options.resizePolling);
			},

			resetPosition: function resetPosition(time) {
				var x = this.x,
				    y = this.y;

				time = time || 0;

				if (!this.hasHorizontalScroll || this.x > 0) {
					x = 0;
				} else if (this.x < this.maxScrollX) {
					x = this.maxScrollX;
				}

				if (!this.hasVerticalScroll || this.y > 0) {
					y = 0;
				} else if (this.y < this.maxScrollY) {
					y = this.maxScrollY;
				}

				if (x == this.x && y == this.y) {
					return false;
				}

				this.scrollTo(x, y, time, this.options.bounceEasing);

				return true;
			},

			disable: function disable() {
				this.enabled = false;
			},

			enable: function enable() {
				this.enabled = true;
			},

			refresh: function refresh() {
				var rf = this.wrapper.offsetHeight; // Force reflow

				this.wrapperWidth = this.wrapper.clientWidth;
				this.wrapperHeight = this.wrapper.clientHeight;

				/* REPLACE START: refresh */

				this.scrollerWidth = this.scroller.offsetWidth;
				this.scrollerHeight = this.scroller.offsetHeight;

				this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
				this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

				/* REPLACE END: refresh */

				this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
				this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

				if (!this.hasHorizontalScroll) {
					this.maxScrollX = 0;
					this.scrollerWidth = this.wrapperWidth;
				}

				if (!this.hasVerticalScroll) {
					this.maxScrollY = 0;
					this.scrollerHeight = this.wrapperHeight;
				}

				this.endTime = 0;
				this.directionX = 0;
				this.directionY = 0;

				this.wrapperOffset = utils.offset(this.wrapper);

				this._execEvent('refresh');

				this.resetPosition();

				// INSERT POINT: _refresh
			},

			on: function on(type, fn) {
				if (!this._events[type]) {
					this._events[type] = [];
				}

				this._events[type].push(fn);
			},

			off: function off(type, fn) {
				if (!this._events[type]) {
					return;
				}

				var index = this._events[type].indexOf(fn);

				if (index > -1) {
					this._events[type].splice(index, 1);
				}
			},

			_execEvent: function _execEvent(type) {
				if (!this._events[type]) {
					return;
				}

				var i = 0,
				    l = this._events[type].length;

				if (!l) {
					return;
				}

				for (; i < l; i++) {
					this._events[type][i].apply(this, [].slice.call(arguments, 1));
				}
			},

			scrollBy: function scrollBy(x, y, time, easing) {
				x = this.x + x;
				y = this.y + y;
				time = time || 0;

				this.scrollTo(x, y, time, easing);
			},

			scrollTo: function scrollTo(x, y, time, easing) {
				easing = easing || utils.ease.circular;

				this.isInTransition = this.options.useTransition && time > 0;
				var transitionType = this.options.useTransition && easing.style;
				if (!time || transitionType) {
					if (transitionType) {
						this._transitionTimingFunction(easing.style);
						this._transitionTime(time);
					}
					this._translate(x, y);
				} else {
					this._animate(x, y, time, easing.fn);
				}
			},

			scrollToElement: function scrollToElement(el, time, offsetX, offsetY, easing) {
				el = el.nodeType ? el : this.scroller.querySelector(el);

				if (!el) {
					return;
				}

				var pos = utils.offset(el);

				pos.left -= this.wrapperOffset.left;
				pos.top -= this.wrapperOffset.top;

				// if offsetX/Y are true we center the element to the screen
				if (offsetX === true) {
					offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
				}
				if (offsetY === true) {
					offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
				}

				pos.left -= offsetX || 0;
				pos.top -= offsetY || 0;

				pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
				pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

				time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;

				this.scrollTo(pos.left, pos.top, time, easing);
			},

			_transitionTime: function _transitionTime(time) {
				if (!this.options.useTransition) {
					return;
				}
				time = time || 0;
				var durationProp = utils.style.transitionDuration;
				if (!durationProp) {
					return;
				}

				this.scrollerStyle[durationProp] = time + 'ms';

				if (!time && utils.isBadAndroid) {
					this.scrollerStyle[durationProp] = '0.0001ms';
					// remove 0.0001ms
					var self = this;
					rAF(function () {
						if (self.scrollerStyle[durationProp] === '0.0001ms') {
							self.scrollerStyle[durationProp] = '0s';
						}
					});
				}

				if (this.indicators) {
					for (var i = this.indicators.length; i--;) {
						this.indicators[i].transitionTime(time);
					}
				}

				// INSERT POINT: _transitionTime
			},

			_transitionTimingFunction: function _transitionTimingFunction(easing) {
				this.scrollerStyle[utils.style.transitionTimingFunction] = easing;

				if (this.indicators) {
					for (var i = this.indicators.length; i--;) {
						this.indicators[i].transitionTimingFunction(easing);
					}
				}

				// INSERT POINT: _transitionTimingFunction
			},

			_translate: function _translate(x, y) {
				if (this.options.useTransform) {

					/* REPLACE START: _translate */

					this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

					/* REPLACE END: _translate */
				} else {
					x = Math.round(x);
					y = Math.round(y);
					this.scrollerStyle.left = x + 'px';
					this.scrollerStyle.top = y + 'px';
				}

				this.x = x;
				this.y = y;

				if (this.indicators) {
					for (var i = this.indicators.length; i--;) {
						this.indicators[i].updatePosition();
					}
				}

				// INSERT POINT: _translate
			},

			_initEvents: function _initEvents(remove) {
				var eventType = remove ? utils.removeEvent : utils.addEvent,
				    target = this.options.bindToWrapper ? this.wrapper : window;

				eventType(window, 'orientationchange', this);
				eventType(window, 'resize', this);

				if (this.options.click) {
					eventType(this.wrapper, 'click', this, true);
				}

				if (!this.options.disableMouse) {
					eventType(this.wrapper, 'mousedown', this);
					eventType(target, 'mousemove', this);
					eventType(target, 'mousecancel', this);
					eventType(target, 'mouseup', this);
				}

				if (utils.hasPointer && !this.options.disablePointer) {
					eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
					eventType(target, utils.prefixPointerEvent('pointermove'), this);
					eventType(target, utils.prefixPointerEvent('pointercancel'), this);
					eventType(target, utils.prefixPointerEvent('pointerup'), this);
				}

				if (utils.hasTouch && !this.options.disableTouch) {
					eventType(this.wrapper, 'touchstart', this);
					eventType(target, 'touchmove', this);
					eventType(target, 'touchcancel', this);
					eventType(target, 'touchend', this);
				}

				eventType(this.scroller, 'transitionend', this);
				eventType(this.scroller, 'webkitTransitionEnd', this);
				eventType(this.scroller, 'oTransitionEnd', this);
				eventType(this.scroller, 'MSTransitionEnd', this);
			},

			getComputedPosition: function getComputedPosition() {
				var matrix = window.getComputedStyle(this.scroller, null),
				    x,
				    y;

				if (this.options.useTransform) {
					matrix = matrix[utils.style.transform].split(')')[0].split(', ');
					x = +(matrix[12] || matrix[4]);
					y = +(matrix[13] || matrix[5]);
				} else {
					x = +matrix.left.replace(/[^-\d.]/g, '');
					y = +matrix.top.replace(/[^-\d.]/g, '');
				}

				return { x: x, y: y };
			},
			_initIndicators: function _initIndicators() {
				var interactive = this.options.interactiveScrollbars,
				    customStyle = typeof this.options.scrollbars != 'string',
				    indicators = [],
				    indicator;

				var that = this;

				this.indicators = [];

				if (this.options.scrollbars) {
					// Vertical scrollbar
					if (this.options.scrollY) {
						indicator = {
							el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
							interactive: interactive,
							defaultScrollbars: true,
							customStyle: customStyle,
							resize: this.options.resizeScrollbars,
							shrink: this.options.shrinkScrollbars,
							fade: this.options.fadeScrollbars,
							listenX: false
						};

						this.wrapper.appendChild(indicator.el);
						indicators.push(indicator);
					}

					// Horizontal scrollbar
					if (this.options.scrollX) {
						indicator = {
							el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
							interactive: interactive,
							defaultScrollbars: true,
							customStyle: customStyle,
							resize: this.options.resizeScrollbars,
							shrink: this.options.shrinkScrollbars,
							fade: this.options.fadeScrollbars,
							listenY: false
						};

						this.wrapper.appendChild(indicator.el);
						indicators.push(indicator);
					}
				}

				if (this.options.indicators) {
					// TODO: check concat compatibility
					indicators = indicators.concat(this.options.indicators);
				}

				for (var i = indicators.length; i--;) {
					this.indicators.push(new Indicator(this, indicators[i]));
				}

				// TODO: check if we can use array.map (wide compatibility and performance issues)
				function _indicatorsMap(fn) {
					if (that.indicators) {
						for (var i = that.indicators.length; i--;) {
							fn.call(that.indicators[i]);
						}
					}
				}

				if (this.options.fadeScrollbars) {
					this.on('scrollEnd', function () {
						_indicatorsMap(function () {
							this.fade();
						});
					});

					this.on('scrollCancel', function () {
						_indicatorsMap(function () {
							this.fade();
						});
					});

					this.on('scrollStart', function () {
						_indicatorsMap(function () {
							this.fade(1);
						});
					});

					this.on('beforeScrollStart', function () {
						_indicatorsMap(function () {
							this.fade(1, true);
						});
					});
				}

				this.on('refresh', function () {
					_indicatorsMap(function () {
						this.refresh();
					});
				});

				this.on('destroy', function () {
					_indicatorsMap(function () {
						this.destroy();
					});

					delete this.indicators;
				});
			},

			_initWheel: function _initWheel() {
				utils.addEvent(this.wrapper, 'wheel', this);
				utils.addEvent(this.wrapper, 'mousewheel', this);
				utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

				this.on('destroy', function () {
					clearTimeout(this.wheelTimeout);
					this.wheelTimeout = null;
					utils.removeEvent(this.wrapper, 'wheel', this);
					utils.removeEvent(this.wrapper, 'mousewheel', this);
					utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
				});
			},

			_wheel: function _wheel(e) {
				if (!this.enabled) {
					return;
				}

				e.preventDefault();

				var wheelDeltaX,
				    wheelDeltaY,
				    newX,
				    newY,
				    that = this;

				if (this.wheelTimeout === undefined) {
					that._execEvent('scrollStart');
				}

				// Execute the scrollEnd event after 400ms the wheel stopped scrolling
				clearTimeout(this.wheelTimeout);
				this.wheelTimeout = setTimeout(function () {
					if (!that.options.snap) {
						that._execEvent('scrollEnd');
					}
					that.wheelTimeout = undefined;
				}, 400);

				if ('deltaX' in e) {
					if (e.deltaMode === 1) {
						wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
						wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
					} else {
						wheelDeltaX = -e.deltaX;
						wheelDeltaY = -e.deltaY;
					}
				} else if ('wheelDeltaX' in e) {
					wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
					wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
				} else if ('wheelDelta' in e) {
					wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
				} else if ('detail' in e) {
					wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
				} else {
					return;
				}

				wheelDeltaX *= this.options.invertWheelDirection;
				wheelDeltaY *= this.options.invertWheelDirection;

				if (!this.hasVerticalScroll) {
					wheelDeltaX = wheelDeltaY;
					wheelDeltaY = 0;
				}

				if (this.options.snap) {
					newX = this.currentPage.pageX;
					newY = this.currentPage.pageY;

					if (wheelDeltaX > 0) {
						newX--;
					} else if (wheelDeltaX < 0) {
						newX++;
					}

					if (wheelDeltaY > 0) {
						newY--;
					} else if (wheelDeltaY < 0) {
						newY++;
					}

					this.goToPage(newX, newY);

					return;
				}

				newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
				newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

				this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
				this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

				if (newX > 0) {
					newX = 0;
				} else if (newX < this.maxScrollX) {
					newX = this.maxScrollX;
				}

				if (newY > 0) {
					newY = 0;
				} else if (newY < this.maxScrollY) {
					newY = this.maxScrollY;
				}

				this.scrollTo(newX, newY, 0);

				// INSERT POINT: _wheel
			},

			_initSnap: function _initSnap() {
				this.currentPage = {};

				if (typeof this.options.snap == 'string') {
					this.options.snap = this.scroller.querySelectorAll(this.options.snap);
				}

				this.on('refresh', function () {
					var i = 0,
					    l,
					    m = 0,
					    n,
					    cx,
					    cy,
					    x = 0,
					    y,
					    stepX = this.options.snapStepX || this.wrapperWidth,
					    stepY = this.options.snapStepY || this.wrapperHeight,
					    el;

					this.pages = [];

					if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
						return;
					}

					if (this.options.snap === true) {
						cx = Math.round(stepX / 2);
						cy = Math.round(stepY / 2);

						while (x > -this.scrollerWidth) {
							this.pages[i] = [];
							l = 0;
							y = 0;

							while (y > -this.scrollerHeight) {
								this.pages[i][l] = {
									x: Math.max(x, this.maxScrollX),
									y: Math.max(y, this.maxScrollY),
									width: stepX,
									height: stepY,
									cx: x - cx,
									cy: y - cy
								};

								y -= stepY;
								l++;
							}

							x -= stepX;
							i++;
						}
					} else {
						el = this.options.snap;
						l = el.length;
						n = -1;

						for (; i < l; i++) {
							if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
								m = 0;
								n++;
							}

							if (!this.pages[m]) {
								this.pages[m] = [];
							}

							x = Math.max(-el[i].offsetLeft, this.maxScrollX);
							y = Math.max(-el[i].offsetTop, this.maxScrollY);
							cx = x - Math.round(el[i].offsetWidth / 2);
							cy = y - Math.round(el[i].offsetHeight / 2);

							this.pages[m][n] = {
								x: x,
								y: y,
								width: el[i].offsetWidth,
								height: el[i].offsetHeight,
								cx: cx,
								cy: cy
							};

							if (x > this.maxScrollX) {
								m++;
							}
						}
					}

					this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

					// Update snap threshold if needed
					if (this.options.snapThreshold % 1 === 0) {
						this.snapThresholdX = this.options.snapThreshold;
						this.snapThresholdY = this.options.snapThreshold;
					} else {
						this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
						this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
					}
				});

				this.on('flick', function () {
					var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);

					this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
				});
			},

			_nearestSnap: function _nearestSnap(x, y) {
				if (!this.pages.length) {
					return { x: 0, y: 0, pageX: 0, pageY: 0 };
				}

				var i = 0,
				    l = this.pages.length,
				    m = 0;

				// Check if we exceeded the snap threshold
				if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
					return this.currentPage;
				}

				if (x > 0) {
					x = 0;
				} else if (x < this.maxScrollX) {
					x = this.maxScrollX;
				}

				if (y > 0) {
					y = 0;
				} else if (y < this.maxScrollY) {
					y = this.maxScrollY;
				}

				for (; i < l; i++) {
					if (x >= this.pages[i][0].cx) {
						x = this.pages[i][0].x;
						break;
					}
				}

				l = this.pages[i].length;

				for (; m < l; m++) {
					if (y >= this.pages[0][m].cy) {
						y = this.pages[0][m].y;
						break;
					}
				}

				if (i == this.currentPage.pageX) {
					i += this.directionX;

					if (i < 0) {
						i = 0;
					} else if (i >= this.pages.length) {
						i = this.pages.length - 1;
					}

					x = this.pages[i][0].x;
				}

				if (m == this.currentPage.pageY) {
					m += this.directionY;

					if (m < 0) {
						m = 0;
					} else if (m >= this.pages[0].length) {
						m = this.pages[0].length - 1;
					}

					y = this.pages[0][m].y;
				}

				return {
					x: x,
					y: y,
					pageX: i,
					pageY: m
				};
			},

			goToPage: function goToPage(x, y, time, easing) {
				easing = easing || this.options.bounceEasing;

				if (x >= this.pages.length) {
					x = this.pages.length - 1;
				} else if (x < 0) {
					x = 0;
				}

				if (y >= this.pages[x].length) {
					y = this.pages[x].length - 1;
				} else if (y < 0) {
					y = 0;
				}

				var posX = this.pages[x][y].x,
				    posY = this.pages[x][y].y;

				time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

				this.currentPage = {
					x: posX,
					y: posY,
					pageX: x,
					pageY: y
				};

				this.scrollTo(posX, posY, time, easing);
			},

			next: function next(time, easing) {
				var x = this.currentPage.pageX,
				    y = this.currentPage.pageY;

				x++;

				if (x >= this.pages.length && this.hasVerticalScroll) {
					x = 0;
					y++;
				}

				this.goToPage(x, y, time, easing);
			},

			prev: function prev(time, easing) {
				var x = this.currentPage.pageX,
				    y = this.currentPage.pageY;

				x--;

				if (x < 0 && this.hasVerticalScroll) {
					x = 0;
					y--;
				}

				this.goToPage(x, y, time, easing);
			},

			_initKeys: function _initKeys(e) {
				// default key bindings
				var keys = {
					pageUp: 33,
					pageDown: 34,
					end: 35,
					home: 36,
					left: 37,
					up: 38,
					right: 39,
					down: 40
				};
				var i;

				// if you give me characters I give you keycode
				if ((0, _typeof3.default)(this.options.keyBindings) == 'object') {
					for (i in this.options.keyBindings) {
						if (typeof this.options.keyBindings[i] == 'string') {
							this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
						}
					}
				} else {
					this.options.keyBindings = {};
				}

				for (i in keys) {
					this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
				}

				utils.addEvent(window, 'keydown', this);

				this.on('destroy', function () {
					utils.removeEvent(window, 'keydown', this);
				});
			},

			_key: function _key(e) {
				if (!this.enabled) {
					return;
				}

				var snap = this.options.snap,
				    // we are using this alot, better to cache it
				newX = snap ? this.currentPage.pageX : this.x,
				    newY = snap ? this.currentPage.pageY : this.y,
				    now = utils.getTime(),
				    prevTime = this.keyTime || 0,
				    acceleration = 0.250,
				    pos;

				if (this.options.useTransition && this.isInTransition) {
					pos = this.getComputedPosition();

					this._translate(Math.round(pos.x), Math.round(pos.y));
					this.isInTransition = false;
				}

				this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

				switch (e.keyCode) {
					case this.options.keyBindings.pageUp:
						if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
							newX += snap ? 1 : this.wrapperWidth;
						} else {
							newY += snap ? 1 : this.wrapperHeight;
						}
						break;
					case this.options.keyBindings.pageDown:
						if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
							newX -= snap ? 1 : this.wrapperWidth;
						} else {
							newY -= snap ? 1 : this.wrapperHeight;
						}
						break;
					case this.options.keyBindings.end:
						newX = snap ? this.pages.length - 1 : this.maxScrollX;
						newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
						break;
					case this.options.keyBindings.home:
						newX = 0;
						newY = 0;
						break;
					case this.options.keyBindings.left:
						newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
						break;
					case this.options.keyBindings.up:
						newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
						break;
					case this.options.keyBindings.right:
						newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
						break;
					case this.options.keyBindings.down:
						newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
						break;
					default:
						return;
				}

				if (snap) {
					this.goToPage(newX, newY);
					return;
				}

				if (newX > 0) {
					newX = 0;
					this.keyAcceleration = 0;
				} else if (newX < this.maxScrollX) {
					newX = this.maxScrollX;
					this.keyAcceleration = 0;
				}

				if (newY > 0) {
					newY = 0;
					this.keyAcceleration = 0;
				} else if (newY < this.maxScrollY) {
					newY = this.maxScrollY;
					this.keyAcceleration = 0;
				}

				this.scrollTo(newX, newY, 0);

				this.keyTime = now;
			},

			_animate: function _animate(destX, destY, duration, easingFn) {
				var that = this,
				    startX = this.x,
				    startY = this.y,
				    startTime = utils.getTime(),
				    destTime = startTime + duration;

				function step() {
					var now = utils.getTime(),
					    newX,
					    newY,
					    easing;

					if (now >= destTime) {
						that.isAnimating = false;
						that._translate(destX, destY);

						if (!that.resetPosition(that.options.bounceTime)) {
							that._execEvent('scrollEnd');
						}

						return;
					}

					now = (now - startTime) / duration;
					easing = easingFn(now);
					newX = (destX - startX) * easing + startX;
					newY = (destY - startY) * easing + startY;
					that._translate(newX, newY);

					if (that.isAnimating) {
						rAF(step);
					}
				}

				this.isAnimating = true;
				step();
			},
			handleEvent: function handleEvent(e) {
				switch (e.type) {
					case 'touchstart':
					case 'pointerdown':
					case 'MSPointerDown':
					case 'mousedown':
						this._start(e);
						break;
					case 'touchmove':
					case 'pointermove':
					case 'MSPointerMove':
					case 'mousemove':
						this._move(e);
						break;
					case 'touchend':
					case 'pointerup':
					case 'MSPointerUp':
					case 'mouseup':
					case 'touchcancel':
					case 'pointercancel':
					case 'MSPointerCancel':
					case 'mousecancel':
						this._end(e);
						break;
					case 'orientationchange':
					case 'resize':
						this._resize();
						break;
					case 'transitionend':
					case 'webkitTransitionEnd':
					case 'oTransitionEnd':
					case 'MSTransitionEnd':
						this._transitionEnd(e);
						break;
					case 'wheel':
					case 'DOMMouseScroll':
					case 'mousewheel':
						this._wheel(e);
						break;
					case 'keydown':
						this._key(e);
						break;
					case 'click':
						if (this.enabled && !e._constructed) {
							e.preventDefault();
							e.stopPropagation();
						}
						break;
				}
			}
		};
		function createDefaultScrollbar(direction, interactive, type) {
			var scrollbar = document.createElement('div'),
			    indicator = document.createElement('div');

			if (type === true) {
				scrollbar.style.cssText = 'position:absolute;z-index:9999';
				indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
			}

			indicator.className = 'iScrollIndicator';

			if (direction == 'h') {
				if (type === true) {
					scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
					indicator.style.height = '100%';
				}
				scrollbar.className = 'iScrollHorizontalScrollbar';
			} else {
				if (type === true) {
					scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
					indicator.style.width = '100%';
				}
				scrollbar.className = 'iScrollVerticalScrollbar';
			}

			scrollbar.style.cssText += ';overflow:hidden';

			if (!interactive) {
				scrollbar.style.pointerEvents = 'none';
			}

			scrollbar.appendChild(indicator);

			return scrollbar;
		}

		function Indicator(scroller, options) {
			this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
			this.wrapperStyle = this.wrapper.style;
			this.indicator = this.wrapper.children[0];
			this.indicatorStyle = this.indicator.style;
			this.scroller = scroller;

			this.options = {
				listenX: true,
				listenY: true,
				interactive: false,
				resize: true,
				defaultScrollbars: false,
				shrink: false,
				fade: false,
				speedRatioX: 0,
				speedRatioY: 0
			};

			for (var i in options) {
				this.options[i] = options[i];
			}

			this.sizeRatioX = 1;
			this.sizeRatioY = 1;
			this.maxPosX = 0;
			this.maxPosY = 0;

			if (this.options.interactive) {
				if (!this.options.disableTouch) {
					utils.addEvent(this.indicator, 'touchstart', this);
					utils.addEvent(window, 'touchend', this);
				}
				if (!this.options.disablePointer) {
					utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
					utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
				}
				if (!this.options.disableMouse) {
					utils.addEvent(this.indicator, 'mousedown', this);
					utils.addEvent(window, 'mouseup', this);
				}
			}

			if (this.options.fade) {
				this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
				var durationProp = utils.style.transitionDuration;
				if (!durationProp) {
					return;
				}
				this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
				// remove 0.0001ms
				var self = this;
				if (utils.isBadAndroid) {
					rAF(function () {
						if (self.wrapperStyle[durationProp] === '0.0001ms') {
							self.wrapperStyle[durationProp] = '0s';
						}
					});
				}
				this.wrapperStyle.opacity = '0';
			}
		}

		Indicator.prototype = {
			handleEvent: function handleEvent(e) {
				switch (e.type) {
					case 'touchstart':
					case 'pointerdown':
					case 'MSPointerDown':
					case 'mousedown':
						this._start(e);
						break;
					case 'touchmove':
					case 'pointermove':
					case 'MSPointerMove':
					case 'mousemove':
						this._move(e);
						break;
					case 'touchend':
					case 'pointerup':
					case 'MSPointerUp':
					case 'mouseup':
					case 'touchcancel':
					case 'pointercancel':
					case 'MSPointerCancel':
					case 'mousecancel':
						this._end(e);
						break;
				}
			},

			destroy: function destroy() {
				if (this.options.fadeScrollbars) {
					clearTimeout(this.fadeTimeout);
					this.fadeTimeout = null;
				}
				if (this.options.interactive) {
					utils.removeEvent(this.indicator, 'touchstart', this);
					utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
					utils.removeEvent(this.indicator, 'mousedown', this);

					utils.removeEvent(window, 'touchmove', this);
					utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
					utils.removeEvent(window, 'mousemove', this);

					utils.removeEvent(window, 'touchend', this);
					utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
					utils.removeEvent(window, 'mouseup', this);
				}

				if (this.options.defaultScrollbars) {
					this.wrapper.parentNode.removeChild(this.wrapper);
				}
			},

			_start: function _start(e) {
				var point = e.touches ? e.touches[0] : e;

				e.preventDefault();
				e.stopPropagation();

				this.transitionTime();

				this.initiated = true;
				this.moved = false;
				this.lastPointX = point.pageX;
				this.lastPointY = point.pageY;

				this.startTime = utils.getTime();

				if (!this.options.disableTouch) {
					utils.addEvent(window, 'touchmove', this);
				}
				if (!this.options.disablePointer) {
					utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
				}
				if (!this.options.disableMouse) {
					utils.addEvent(window, 'mousemove', this);
				}

				this.scroller._execEvent('beforeScrollStart');
			},

			_move: function _move(e) {
				var point = e.touches ? e.touches[0] : e,
				    deltaX,
				    deltaY,
				    newX,
				    newY,
				    timestamp = utils.getTime();

				if (!this.moved) {
					this.scroller._execEvent('scrollStart');
				}

				this.moved = true;

				deltaX = point.pageX - this.lastPointX;
				this.lastPointX = point.pageX;

				deltaY = point.pageY - this.lastPointY;
				this.lastPointY = point.pageY;

				newX = this.x + deltaX;
				newY = this.y + deltaY;

				this._pos(newX, newY);

				// INSERT POINT: indicator._move

				e.preventDefault();
				e.stopPropagation();
			},

			_end: function _end(e) {
				if (!this.initiated) {
					return;
				}

				this.initiated = false;

				e.preventDefault();
				e.stopPropagation();

				utils.removeEvent(window, 'touchmove', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
				utils.removeEvent(window, 'mousemove', this);

				if (this.scroller.options.snap) {
					var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

					var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

					if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
						this.scroller.directionX = 0;
						this.scroller.directionY = 0;
						this.scroller.currentPage = snap;
						this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
					}
				}

				if (this.moved) {
					this.scroller._execEvent('scrollEnd');
				}
			},

			transitionTime: function transitionTime(time) {
				time = time || 0;
				var durationProp = utils.style.transitionDuration;
				if (!durationProp) {
					return;
				}

				this.indicatorStyle[durationProp] = time + 'ms';

				if (!time && utils.isBadAndroid) {
					this.indicatorStyle[durationProp] = '0.0001ms';
					// remove 0.0001ms
					var self = this;
					rAF(function () {
						if (self.indicatorStyle[durationProp] === '0.0001ms') {
							self.indicatorStyle[durationProp] = '0s';
						}
					});
				}
			},

			transitionTimingFunction: function transitionTimingFunction(easing) {
				this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
			},

			refresh: function refresh() {
				this.transitionTime();

				if (this.options.listenX && !this.options.listenY) {
					this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
				} else if (this.options.listenY && !this.options.listenX) {
					this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
				} else {
					this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
				}

				if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
					utils.addClass(this.wrapper, 'iScrollBothScrollbars');
					utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

					if (this.options.defaultScrollbars && this.options.customStyle) {
						if (this.options.listenX) {
							this.wrapper.style.right = '8px';
						} else {
							this.wrapper.style.bottom = '8px';
						}
					}
				} else {
					utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
					utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

					if (this.options.defaultScrollbars && this.options.customStyle) {
						if (this.options.listenX) {
							this.wrapper.style.right = '2px';
						} else {
							this.wrapper.style.bottom = '2px';
						}
					}
				}

				var r = this.wrapper.offsetHeight; // force refresh

				if (this.options.listenX) {
					this.wrapperWidth = this.wrapper.clientWidth;
					if (this.options.resize) {
						this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
						this.indicatorStyle.width = this.indicatorWidth + 'px';
					} else {
						this.indicatorWidth = this.indicator.clientWidth;
					}

					this.maxPosX = this.wrapperWidth - this.indicatorWidth;

					if (this.options.shrink == 'clip') {
						this.minBoundaryX = -this.indicatorWidth + 8;
						this.maxBoundaryX = this.wrapperWidth - 8;
					} else {
						this.minBoundaryX = 0;
						this.maxBoundaryX = this.maxPosX;
					}

					this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
				}

				if (this.options.listenY) {
					this.wrapperHeight = this.wrapper.clientHeight;
					if (this.options.resize) {
						this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
						this.indicatorStyle.height = this.indicatorHeight + 'px';
					} else {
						this.indicatorHeight = this.indicator.clientHeight;
					}

					this.maxPosY = this.wrapperHeight - this.indicatorHeight;

					if (this.options.shrink == 'clip') {
						this.minBoundaryY = -this.indicatorHeight + 8;
						this.maxBoundaryY = this.wrapperHeight - 8;
					} else {
						this.minBoundaryY = 0;
						this.maxBoundaryY = this.maxPosY;
					}

					this.maxPosY = this.wrapperHeight - this.indicatorHeight;
					this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
				}

				this.updatePosition();
			},

			updatePosition: function updatePosition() {
				var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
				    y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

				if (!this.options.ignoreBoundaries) {
					if (x < this.minBoundaryX) {
						if (this.options.shrink == 'scale') {
							this.width = Math.max(this.indicatorWidth + x, 8);
							this.indicatorStyle.width = this.width + 'px';
						}
						x = this.minBoundaryX;
					} else if (x > this.maxBoundaryX) {
						if (this.options.shrink == 'scale') {
							this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
							this.indicatorStyle.width = this.width + 'px';
							x = this.maxPosX + this.indicatorWidth - this.width;
						} else {
							x = this.maxBoundaryX;
						}
					} else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
						this.width = this.indicatorWidth;
						this.indicatorStyle.width = this.width + 'px';
					}

					if (y < this.minBoundaryY) {
						if (this.options.shrink == 'scale') {
							this.height = Math.max(this.indicatorHeight + y * 3, 8);
							this.indicatorStyle.height = this.height + 'px';
						}
						y = this.minBoundaryY;
					} else if (y > this.maxBoundaryY) {
						if (this.options.shrink == 'scale') {
							this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
							this.indicatorStyle.height = this.height + 'px';
							y = this.maxPosY + this.indicatorHeight - this.height;
						} else {
							y = this.maxBoundaryY;
						}
					} else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
						this.height = this.indicatorHeight;
						this.indicatorStyle.height = this.height + 'px';
					}
				}

				this.x = x;
				this.y = y;

				if (this.scroller.options.useTransform) {
					this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
				} else {
					this.indicatorStyle.left = x + 'px';
					this.indicatorStyle.top = y + 'px';
				}
			},

			_pos: function _pos(x, y) {
				if (x < 0) {
					x = 0;
				} else if (x > this.maxPosX) {
					x = this.maxPosX;
				}

				if (y < 0) {
					y = 0;
				} else if (y > this.maxPosY) {
					y = this.maxPosY;
				}

				x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
				y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

				this.scroller.scrollTo(x, y);
			},

			fade: function fade(val, hold) {
				if (hold && !this.visible) {
					return;
				}

				clearTimeout(this.fadeTimeout);
				this.fadeTimeout = null;

				var time = val ? 250 : 500,
				    delay = val ? 0 : 300;

				val = val ? '1' : '0';

				this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

				this.fadeTimeout = setTimeout(function (val) {
					this.wrapperStyle.opacity = val;
					this.visible = +val;
				}.bind(this, val), delay);
			}
		};

		IScroll.utils = utils;

		if (typeof module != 'undefined' && module.exports) {
			module.exports = IScroll;
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return IScroll;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.IScroll = IScroll;
		}
	})(window, document, Math);

/***/ },

/***/ 177:
/***/ function(module, exports) {

	module.exports = "\n\n\n<div class=\"box\" _v-0ab50b8c=\"\">\n    <div class=\"top\" _v-0ab50b8c=\"\">\n        <div class=\"wrap\" _v-0ab50b8c=\"\">\n            <i class=\"logo\" _v-0ab50b8c=\"\"></i>\n            <div class=\"search_bg\" _v-0ab50b8c=\"\">\n                <i _v-0ab50b8c=\"\">当代医药市场网</i>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"nav\" _v-0ab50b8c=\"\">\n        <div id=\"nav-smartSetup\" _v-0ab50b8c=\"\">\n            <div id=\"scroller\" _v-0ab50b8c=\"\">\n                <ul _v-0ab50b8c=\"\">\n                    <li v-on:click=\"selectType('recommend')\" :class=\"{'cur':isCur[0]}\" _v-0ab50b8c=\"\">推荐</li>\n                    <li v-on:click=\"selectType('drug',4)\" :class=\"{'cur':isCur[1]}\" _v-0ab50b8c=\"\">药品 </li>\n                    <li v-on:click=\"selectType('zyc',11)\" :class=\"{'cur':isCur[2]}\" _v-0ab50b8c=\"\">中药材</li>\n                    <li v-on:click=\"selectType('bjsp',5)\" :class=\"{'cur':isCur[3]}\" _v-0ab50b8c=\"\">保健食品</li>\n                    <li v-on:click=\"selectType('ylqx',13)\" :class=\"{'cur':isCur[4]}\" _v-0ab50b8c=\"\">医疗器械 </li>\n                    <li v-on:click=\"selectType('mrhf',20)\" :class=\"{'cur':isCur[5]}\" _v-0ab50b8c=\"\">美容护肤 </li>\n                    <li v-on:click=\"selectType('jsyp',18)\" :class=\"{'cur':isCur[6]}\" _v-0ab50b8c=\"\">计生用品 </li>\n                    <li v-on:click=\"selectType('zysb',15)\" :class=\"{'cur':isCur[7]}\" _v-0ab50b8c=\"\">制药设备 </li>\n                    <li v-on:click=\"selectType('yly',7)\" :class=\"{'cur':isCur[8]}\" _v-0ab50b8c=\"\">原料药 </li>\n                    <li v-on:click=\"selectType('health')\" :class=\"{'cur':isCur[9]}\" _v-0ab50b8c=\"\">健康 </li>\n                </ul>\n            </div>\n        </div>\n        <i class=\"line_a\" _v-0ab50b8c=\"\"></i>\n        <i class=\"plus_a\" _v-0ab50b8c=\"\"></i>\n    </div>\n\n</div>\n";

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(179)
	__vue_script__ = __webpack_require__(181)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\indexMain.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(182)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5641b70e/indexMain.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(180);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./indexMain.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./indexMain.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },

/***/ 181:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <template>
	//
	//     <div>
	//         <div class="ad_content"  v-for="item in items.list">
	//             <div v-html="item.code"></div>
	//             <div class="content-info">
	//                 <ul>
	//                     <li><span class="Drugs">药品</span></li>
	//                     <li><span class="click">1365点击</span></li>
	//                     <li><span class="time">24小时前</span></li>
	//                 </ul>
	//             </div>
	//
	//             <div class="clear"></div>
	//         </div>
	//     </div>
	//
	// </template>
	//
	//
	// <script>

	//http://www.ey99.com/api/mobile/ad.php

	exports.default = {
	    props: ['items'],
	    data: function data() {
	        return {};
	    },
	    mounted: function mounted() {},

	    methods: {}
	};
	// </script>
	//
	//
	// <style>
	//
	// </style>

/***/ },

/***/ 182:
/***/ function(module, exports) {

	module.exports = "\n\n\n<div>\n    <div class=\"ad_content\"  v-for=\"item in items.list\">\n        <div v-html=\"item.code\"></div>\n        <div class=\"content-info\">\n            <ul>\n                <li><span class=\"Drugs\">药品</span></li>\n                <li><span class=\"click\">1365点击</span></li>\n                <li><span class=\"time\">24小时前</span></li>\n            </ul>\n        </div>\n\n        <div class=\"clear\"></div>\n    </div>\n</div>\n\n";

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(184)
	__webpack_require__(186)
	__vue_script__ = __webpack_require__(188)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\recommend.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(189)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3b3e24c2/recommend.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3b3e24c2&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./recommend.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3b3e24c2&scoped=true!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./recommend.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.noPage[_v-3b3e24c2]{\n    font-size: .2rem;\n    text-align: center;\n    height: .50rem;\n    line-height: .50rem;\n    color: #888;\n}\n", ""]);

	// exports


/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(187);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=1!./recommend.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=1!./recommend.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.clear{\n    clear: both;\n}\n#pullDown{\n    background: #FFFFFF;\n}\n.white_box{\n    width:6.4rem;\n    background-color:transparent;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow: hidden;\n}\n.ad_content{\n    width:5.8rem;\n    margin: 0 auto;\n    padding:.10rem 0;\n    position: relative;\n    margin-bottom: .1rem;\n}\n.ad_code_one{\n    width:100%;\n    height: 1.2rem;\n    padding:.16rem 0px;\n    border-bottom:1px solid #e7e7e7;\n}\n.ad_code_two{\n    width:100%;\n    padding-bottom:.7rem;\n    border-bottom:1px solid #e7e7e7;\n}\n.ad_code_three{\n    width:100%;\n    padding-bottom:.6rem;\n    border-bottom:1px solid #e7e7e7;\n}\n.content1-left{\n    width: 4rem;\n\n    float: left;\n}\n\n.content-title h2{\n    padding-right:.2rem;\n    font-size: .3rem;\n}\n\n.content-info{\n    position: absolute;\n    bottom:.3rem;\n}\n.content-info ul{\n    width:100% ;\n    height:.3rem ;\n    line-height: .3rem;\n}\n\n.content-info li {\n    float: left;\n}\n\n\n\n.content1-right{\n    width: 1.8rem;height: 1.2rem;\n    float:right;\n}\n.content1-right a img{\n    width:1.8rem;\n    height:1.2rem;\n}\n.click,.time{\n    color:#8a8a8a ;\n    font-size:.22rem ;\n\n    margin-right:.26rem;\n    display: inline-block;\n}\n\n\n\n.content-Title{\n    padding-bottom: .16rem;\n}\n\n.content2-img{\n    width: 5.8rem;height: 1.23rem;\n}\n\n\n\n.content2-img img{\n    display: block!important;\n    float: left!important;\n}\n.content2-img a img{\n    width:1.89rem;\n    height:1.23rem;\n}\n.c2-img{\n    margin-right: .06rem;\n}\n\n.content3-img a img{\n    width:5.79rem;\n    height:2.84rem;\n}\n\n\n.page{\n\n    overflow: hidden;\n    position: relative;\n    /* Prevent native touch events on Windows */\n    -ms-touch-action: none;\n    /* Prevent the callout on tap-hold and text selection */\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    -webkit-text-size-adjust: none;\n        -ms-text-size-adjust: none;\n            text-size-adjust: none;\n}\n\n\n\n/*scrollbar start*/\n.iScrollVerticalScrollbar {\n    position: absolute;\n    z-index: 9999;\n    width: 2px;\n    bottom: 2px;\n    top: 2px;\n    right: 2px;\n    overflow: hidden;\n}\n\n.iScrollVerticalScrollbar.iScrollBothScrollbars {\n    bottom: 18px;\n}\n\n.iScrollIndicator {\n    position: absolute;\n    background: #999;\n    border-radius: 6px;\n    opacity: .8;\n}\n\n.iScrollVerticalScrollbar .iScrollIndicator {\n    width: 100%;\n    background: #999;\n}\n/*scrollbar end*/\n", ""]);

	// exports


/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _indexMain = __webpack_require__(178);

	var _indexMain2 = _interopRequireDefault(_indexMain);

	var _loading = __webpack_require__(54);

	var _loading2 = _interopRequireDefault(_loading);

	var _pullToRefresh = __webpack_require__(60);

	var _pullToRefresh2 = _interopRequireDefault(_pullToRefresh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: {
	        "pull-to-refresh": _pullToRefresh2.default,
	        "index-main": _indexMain2.default,
	        "load": _loading2.default
	    },

	    data: function data() {
	        return {
	            items: [],
	            loading: true,
	            page: 0,
	            pageTotal: 0,
	            noPage: false
	        };
	    },
	    mounted: function mounted() {

	        var _this = this;

	        $(".white_box").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);

	        this.loadData(false);
	    },

	    methods: {
	        loadData: function loadData(finshCallback) {
	            this.page += 1;
	            var _this = this;
	            var url = "http://www.ey99.com/api/mobile/ad.php";
	            //url += "page=" + this.page;
	            var param = { "params": { "page": this.page, "a": "ad" } };

	            this.$http.jsonp(url, param).then(function (response) {

	                _this.pageTotal = Math.ceil(response.body.count / 10);

	                //如果超过总页数 返回没有了
	                if (_this.page > _this.pageTotal) {

	                    if (finshCallback) {
	                        finshCallback();
	                        _this.noPage = true;
	                    }
	                    setTimeout(function () {
	                        _this.noPage = false;
	                    }, 2000);

	                    return;
	                }

	                if (finshCallback) {
	                    finshCallback();
	                }

	                if (_this.page === 1) {
	                    _this.items = response.body;
	                } else {
	                    for (var i = 0; i < response.body.list.length; i++) {

	                        _this.items.list.push(response.body.list[i]);
	                    }
	                }

	                if (response.body.count > 0) {
	                    setTimeout(function () {

	                        $(document).ready(function () {
	                            $(".page").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
	                        });

	                        _this.loading = false;
	                    }, 500);
	                }
	            }, function (response) {
	                // 响应成功回调
	            });
	        },
	        onPullup: function onPullup(finshCallback) {
	            //console.log("pullup");
	            this.noPage = false;
	            this.loadData(finshCallback);
	        },
	        onPulldown: function onPulldown(finshCallback) {
	            //finshCallback  调整位置
	            //console.log("pulldown");
	            this.noPage = false;
	            this.page = 0;
	            this.loadData(finshCallback);
	        }
	    }
	};

	//响应窗体改变
	// <template>
	//
	//     <div class="white_box">
	//
	//
	//          <load  v-if="loading"></load>
	//
	//         <div id="pullDown"  v-else>
	//             <pull-to-refresh
	//                     @on-pullup='onPullup'
	//                     @on-pulldown='onPulldown' class="page">
	//                 <index-main  :items="items"></index-main>
	//                 <div v-show="noPage" class="noPage">
	//                     没有了
	//                 </div>
	//             </pull-to-refresh>
	//
	//         </div>
	//
	//
	//         <div class="clear"></div>
	//     </div>
	// </template>
	//
	// <script>


	$(document).ready(function () {
	    window.onresize = function () {
	        resetHeight();
	    };
	});

	function resetHeight() {
	    $(".white_box").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
	    $(".page").height($(".white_box").height());
	}
	// </script>
	// <style scoped>
	//     .noPage{
	//         font-size: .2rem;
	//         text-align: center;
	//         height: .50rem;
	//         line-height: .50rem;
	//         color: #888;
	//     }
	// </style>
	// <style>
	//     .clear{
	//         clear: both;
	//     }
	//     #pullDown{
	//         background: #FFFFFF;
	//     }
	//     .white_box{
	//         width:6.4rem;
	//         background-color:transparent;
	//         flex: 1;
	//         overflow: hidden;
	//     }
	//     .ad_content{
	//         width:5.8rem;
	//         margin: 0 auto;
	//         padding:.10rem 0;
	//         position: relative;
	//         margin-bottom: .1rem;
	//     }
	//     .ad_code_one{
	//         width:100%;
	//         height: 1.2rem;
	//         padding:.16rem 0px;
	//         border-bottom:1px solid #e7e7e7;
	//     }
	//     .ad_code_two{
	//         width:100%;
	//         padding-bottom:.7rem;
	//         border-bottom:1px solid #e7e7e7;
	//     }
	//     .ad_code_three{
	//         width:100%;
	//         padding-bottom:.6rem;
	//         border-bottom:1px solid #e7e7e7;
	//     }
	//     .content1-left{
	//         width: 4rem;
	//
	//         float: left;
	//     }
	//
	//     .content-title h2{
	//         padding-right:.2rem;
	//         font-size: .3rem;
	//     }
	//
	//     .content-info{
	//         position: absolute;
	//         bottom:.3rem;
	//     }
	//     .content-info ul{
	//         width:100% ;
	//         height:.3rem ;
	//         line-height: .3rem;
	//     }
	//
	//     .content-info li {
	//         float: left;
	//     }
	//
	//
	//
	//     .content1-right{
	//         width: 1.8rem;height: 1.2rem;
	//         float:right;
	//     }
	//     .content1-right a img{
	//         width:1.8rem;
	//         height:1.2rem;
	//     }
	//     .click,.time{
	//         color:#8a8a8a ;
	//         font-size:.22rem ;
	//
	//         margin-right:.26rem;
	//         display: inline-block;
	//     }
	//
	//
	//
	//     .content-Title{
	//         padding-bottom: .16rem;
	//     }
	//
	//     .content2-img{
	//         width: 5.8rem;height: 1.23rem;
	//     }
	//
	//
	//
	//     .content2-img img{
	//         display: block!important;
	//         float: left!important;
	//     }
	//     .content2-img a img{
	//         width:1.89rem;
	//         height:1.23rem;
	//     }
	//     .c2-img{
	//         margin-right: .06rem;
	//     }
	//
	//     .content3-img a img{
	//         width:5.79rem;
	//         height:2.84rem;
	//     }
	//
	//
	//     .page{
	//
	//         overflow: hidden;
	//         position: relative;
	//         /* Prevent native touch events on Windows */
	//         -ms-touch-action: none;
	//         /* Prevent the callout on tap-hold and text selection */
	//         -webkit-touch-callout: none;
	//         user-select: none;
	//         text-size-adjust: none;
	//     }
	//
	//
	//
	//     /*scrollbar start*/
	//     .iScrollVerticalScrollbar {
	//         position: absolute;
	//         z-index: 9999;
	//         width: 2px;
	//         bottom: 2px;
	//         top: 2px;
	//         right: 2px;
	//         overflow: hidden;
	//     }
	//
	//     .iScrollVerticalScrollbar.iScrollBothScrollbars {
	//         bottom: 18px;
	//     }
	//
	//     .iScrollIndicator {
	//         position: absolute;
	//         background: #999;
	//         border-radius: 6px;
	//         opacity: .8;
	//     }
	//
	//     .iScrollVerticalScrollbar .iScrollIndicator {
	//         width: 100%;
	//         background: #999;
	//     }
	//     /*scrollbar end*/
	// </style>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ },

/***/ 189:
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"white_box\" _v-3b3e24c2=\"\">\n\n\n     <load v-if=\"loading\" _v-3b3e24c2=\"\"></load>\n\n    <div id=\"pullDown\" v-else=\"\" _v-3b3e24c2=\"\">\n        <pull-to-refresh @on-pullup=\"onPullup\" @on-pulldown=\"onPulldown\" class=\"page\" _v-3b3e24c2=\"\">\n            <index-main :items=\"items\" _v-3b3e24c2=\"\"></index-main>\n            <div v-show=\"noPage\" class=\"noPage\" _v-3b3e24c2=\"\">\n                没有了\n            </div>\n        </pull-to-refresh>\n\n    </div>\n\n\n    <div class=\"clear\" _v-3b3e24c2=\"\"></div>\n</div>\n";

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(191)
	__vue_script__ = __webpack_require__(193)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\health.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(197)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-8a39caee/health.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(192);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8a39caee&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./health.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8a39caee&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./health.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".my-swipe[_v-8a39caee] {\n  width: 6.4rem;\n  height: 2.8rem;\n  position: relative; }\n  .my-swipe img[_v-8a39caee] {\n    width: 6.4rem;\n    height: 2.8rem; }\n  .my-swipe span[_v-8a39caee] {\n    font-size: .28rem;\n    line-height: .52rem;\n    padding-left: .2rem;\n    color: #FFF;\n    width: 6.2rem;\n    height: .5rem;\n    background: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    bottom: 0; }\n\n.card .cardTitle[_v-8a39caee] {\n  color: #333;\n  padding-left: .2rem;\n  height: .85rem;\n  line-height: .85rem;\n  font-weight: 700;\n  font-size: .36rem; }\n\n.card ul[_v-8a39caee] {\n  width: 6rem;\n  padding: 0px .2rem; }\n  .card ul li[_v-8a39caee] {\n    width: 100%;\n    margin-bottom: .2rem;\n    border-bottom: dashed #ccc 1px; }\n    .card ul li .descBox[_v-8a39caee] {\n      width: 69%;\n      min-height: 1rem;\n      float: left; }\n      .card ul li .descBox .title[_v-8a39caee] {\n        min-height: 1rem;\n        font-size: .3rem; }\n      .card ul li .descBox .source[_v-8a39caee] {\n        font-size: .24rem;\n        color: #8f8f8f;\n        line-height: .4rem; }\n      .card ul li .descBox .hits[_v-8a39caee] {\n        float: right;\n        font-size: .18rem; }\n    .card ul li img[_v-8a39caee] {\n      float: right;\n      width: 25%;\n      height: 1.2rem; }\n    .card ul li a[_v-8a39caee] {\n      display: inline-block;\n      width: 100%; }\n    .card ul li h2[_v-8a39caee] {\n      padding-bottom: .2rem;\n      display: inline-block;\n      font-size: .3rem;\n      width: 90%;\n      float: left; }\n    .card ul li .hits[_v-8a39caee] {\n      font-size: .2rem;\n      width: 10%;\n      line-height: .4rem;\n      float: right;\n      text-align: right;\n      color: #8f8f8f; }\n      .card ul li .hits i[_v-8a39caee] {\n        font-size: .24rem; }\n", ""]);

	// exports


/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vueSwipe = __webpack_require__(152);

	var _homeShell = __webpack_require__(194);

	var _homeShell2 = _interopRequireDefault(_homeShell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <home-shell :loading="loading" >
	//       <div slot="content" v-if="!loading">
	//           <swipe class="my-swipe" :speed="1000" :show-indicators="false" >
	//
	//               <swipe-item v-for="item in carousel" >
	//                   <a :src="item.url">
	//                       <img :src="item.pic"/>
	//                       <span>{{item.title}}</span>
	//                   </a>
	//               </swipe-item>
	//
	//           </swipe>
	//
	//           <div class="card">
	//               <h2 class="cardTitle">今日推荐</h2>
	//               <ul>
	//                 <li v-for="item in items.list">
	//                     <router-link  v-if="item.thumb" :to="{name:'healthDetail',query:{id:item.itemid}}" >
	//
	//                         <div class="descBox">
	//                             <div class="title">{{item.title | dsubstr(20)}}</div>
	//                             <div class="footnote">
	//                                 <span class="source">{{item.copyfrom ? item.copyfrom : "当代医药市场网"}}</span>
	//                                 <span class="hits"><i class="iconfont">&#xf0048;</i>{{item.hits}}</span>
	//                             </div>
	//                         </div>
	//                         <span class="img" >
	//                             <img :src="item.thumb" />
	//                         </span>
	//                     </router-link >
	//                     <router-link  v-else :to="{name:'healthDetail',query:{id:item.itemid}}" >
	//                         <h2 class="title">{{item.title | dsubstr(16)}}</h2>
	//                         <span class="hits">
	//                             <i class="iconfont">&#xf0048;</i>{{item.hits}}
	//                         </span>
	//                     </router-link >
	//                 </li>
	//               </ul>
	//           </div>
	//
	//       </div>
	//   </home-shell>
	// </template>
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            items: null,
	            loading: true,
	            'noPage': false,
	            'carousel': [{ "pic": "http://www.ey99.com/file/upload/201609/30/225028701.jpg", "title": "习大大访问你家", "url": "" }, { "pic": "http://www.ey99.com/file/upload/201609/30/225103531.jpg", "title": "习大大访问我家", "url": "" }, { "pic": "http://www.ey99.com/file/upload/201609/08/085935452830.jpg", "title": "习大大访问她家", "url": "" }],
	            'page': 0

	        };
	    },

	    components: {
	        'swipe': _vueSwipe.Swipe,
	        'swipe-item': _vueSwipe.SwipeItem,
	        'home-shell': _homeShell2.default
	    },
	    mounted: function mounted() {
	        this.loadData(false);
	    },

	    filters: {
	        dsubstr: function dsubstr(title, length) {
	            return title.substr(0, length);
	        }
	    },
	    methods: {
	        loadData: function loadData(finshCallback, refresh) {

	            if (refresh) {
	                this.page = 0;
	            }

	            var _this = this;
	            var url = "http://www.ey99.com/api/mobile/article.php";
	            this.page += 1;

	            var option = { params: { catid: 331, page: this.page } };
	            this.$http.jsonp(url, option).then(function (res) {

	                if (_this.page == 1) {
	                    _this.items = res.body;
	                    _this.loading = false;

	                    if (finshCallback) {
	                        finshCallback();
	                    }
	                }
	                if (_this.page > 1 && _this.page <= Math.ceil(res.body.count / 20)) {

	                    for (var i = 0; i < res.body.list.length; i++) {
	                        _this.items.list.push(res.body.list[i]);
	                    }

	                    _this.loading = false;
	                    if (finshCallback) {
	                        finshCallback();
	                    }
	                }
	            }, function (err) {});
	        }
	    }

	};
	// </script>
	// <style lang="sass" scoped>
	//     .my-swipe{
	//         width:6.4rem;
	//         height:2.8rem;
	//         position:relative;
	//         img{
	//             width:6.4rem;
	//             height:2.8rem;
	//         }
	//         span{
	//             font-size: .28rem;
	//             line-height: .52rem;
	//             padding-left:.2rem;
	//             color: #FFF;
	//             width:6.2rem;
	//             height:.5rem;
	//             background: rgba(0,0,0,0.5);
	//             position: absolute;
	//             bottom:0;
	//         }
	//     }
	//     .card{
	//         .cardTitle{
	//             color: #333;
	//             padding-left: .2rem;
	//             height: .85rem;
	//             line-height: .85rem;
	//             font-weight: 700;
	//             font-size: .36rem;
	//         }
	//         ul{
	//             width:6rem;
	//             padding:0px .2rem;
	//             li{
	//                 width: 100%;
	//                 margin-bottom:.2rem;
	//                 border-bottom:dashed #ccc 1px;
	//                 .descBox{
	//                     width:69%;
	//                     min-height:1rem;
	//                     float:left;
	//                     .title{
	//                         min-height:1rem;
	//                         font-size:.3rem;
	//                     }
	//                     .source{
	//                         font-size:.24rem;
	//                         color:#8f8f8f;
	//                         line-height: .4rem;                       
	//                     }
	//                     .hits{
	//                         float:right;
	//                         font-size:.18rem;
	//                     }
	//                 }
	//                 img{
	//                     float:right;
	//                     width:25%;
	//                     height:1.2rem;
	//                 }
	//                 a{
	//                     display: inline-block;
	//                     width: 100%;
	//                 }
	//                 h2{
	//                     padding-bottom:.2rem;
	//                     display: inline-block;
	//                     font-size:.3rem;
	//                     width:90%;
	//                     float:left;
	//
	//                 }
	//                 .hits{
	//                     font-size:.2rem;
	//                     width:10%;
	//                     line-height: .4rem;
	//                     float:right;
	//                     text-align: right;
	//                     color:#8f8f8f;
	//                     i{
	//                         font-size:.24rem;
	//                     }
	//                 }
	//             }
	//
	//         }
	//     }
	// </style>

/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(195)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\homeShell.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(196)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0af196f4/homeShell.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vueSwipe = __webpack_require__(152);

	var _loading = __webpack_require__(54);

	var _loading2 = _interopRequireDefault(_loading);

	var _pullToRefresh = __webpack_require__(60);

	var _pullToRefresh2 = _interopRequireDefault(_pullToRefresh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        loading: {
	            type: Boolean,
	            required: true,
	            default: true
	        }
	    },
	    data: function data() {
	        return {
	            items: null,
	            'noPage': false
	        };
	    },

	    components: {
	        'swipe': _vueSwipe.Swipe,
	        'swipe-item': _vueSwipe.SwipeItem,
	        'load': _loading2.default,
	        'pull-to-refresh': _pullToRefresh2.default

	    },
	    updated: function updated() {
	        $(document).ready(function () {
	            //获取数据后  固定page高度 即滑动区域 
	            $(".page").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
	        });
	    },
	    mounted: function mounted() {
	        $(".white_box").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);

	        console.log(this);
	    },

	    methods: {
	        onPullup: function onPullup(finshCallback) {
	            this.$parent.loadData(finshCallback);

	            //this.loadData(finshCallback);
	        },
	        onPulldown: function onPulldown(finshCallback) {
	            ///finshCallback 回归位置 页面扩充后 拉取高度 不执行的话 高度不拉伸
	            this.$parent.loadData(finshCallback, true);

	            //finshCallback  调整位置
	            //                this.noPage = false;
	            //                this.page = 0;
	            //                this.loadData(finshCallback);
	        }
	    }
	};
	// </script>


	//上拉下拉组件 pull-to-refresh 必须给该组件 定高度 class="page" 可改变className
	// <template>
	//     <div class="white_box">
	//         <load  v-if="loading"  ></load>
	//
	//         <div id="pullDown"  v-else>
	//             <pull-to-refresh
	//                     @on-pullup='onPullup'
	//                     @on-pulldown='onPulldown' class="page">
	//
	//                 <slot name="content"></slot>
	//
	//                 <div v-show="noPage" class="noPage">
	//                     没有了
	//                 </div>
	//             </pull-to-refresh>
	//         </div>
	//
	//         <div class="clear"></div>
	//     </div>
	//
	// </template>
	// <script>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ },

/***/ 196:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"white_box\">\n    <load  v-if=\"loading\"  ></load>\n\n    <div id=\"pullDown\"  v-else>\n        <pull-to-refresh\n                @on-pullup='onPullup'\n                @on-pulldown='onPulldown' class=\"page\">\n\n            <slot name=\"content\"></slot>\n\n            <div v-show=\"noPage\" class=\"noPage\">\n                没有了\n            </div>\n        </pull-to-refresh>\n    </div>\n\n    <div class=\"clear\"></div>\n</div>\n\n";

/***/ },

/***/ 197:
/***/ function(module, exports) {

	module.exports = "\n<home-shell :loading=\"loading\" _v-8a39caee=\"\">\n    <div slot=\"content\" v-if=\"!loading\" _v-8a39caee=\"\">\n        <swipe class=\"my-swipe\" :speed=\"1000\" :show-indicators=\"false\" _v-8a39caee=\"\">\n\n            <swipe-item v-for=\"item in carousel\" _v-8a39caee=\"\">\n                <a :src=\"item.url\" _v-8a39caee=\"\">\n                    <img :src=\"item.pic\" _v-8a39caee=\"\">\n                    <span _v-8a39caee=\"\">{{item.title}}</span>\n                </a>\n            </swipe-item>\n\n        </swipe>\n\n        <div class=\"card\" _v-8a39caee=\"\">\n            <h2 class=\"cardTitle\" _v-8a39caee=\"\">今日推荐</h2>\n            <ul _v-8a39caee=\"\">\n              <li v-for=\"item in items.list\" _v-8a39caee=\"\">\n                  <router-link v-if=\"item.thumb\" :to=\"{name:'healthDetail',query:{id:item.itemid}}\" _v-8a39caee=\"\">\n\n                      <div class=\"descBox\" _v-8a39caee=\"\">\n                          <div class=\"title\" _v-8a39caee=\"\">{{item.title | dsubstr(20)}}</div>\n                          <div class=\"footnote\" _v-8a39caee=\"\">\n                              <span class=\"source\" _v-8a39caee=\"\">{{item.copyfrom ? item.copyfrom : \"当代医药市场网\"}}</span>\n                              <span class=\"hits\" _v-8a39caee=\"\"><i class=\"iconfont\" _v-8a39caee=\"\">󰁈</i>{{item.hits}}</span>\n                          </div>\n                      </div>\n                      <span class=\"img\" _v-8a39caee=\"\">\n                          <img :src=\"item.thumb\" _v-8a39caee=\"\">\n                      </span>\n                  </router-link>\n                  <router-link v-else=\"\" :to=\"{name:'healthDetail',query:{id:item.itemid}}\" _v-8a39caee=\"\">\n                      <h2 class=\"title\" _v-8a39caee=\"\">{{item.title | dsubstr(16)}}</h2>\n                      <span class=\"hits\" _v-8a39caee=\"\">\n                          <i class=\"iconfont\" _v-8a39caee=\"\">󰁈</i>{{item.hits}}\n                      </span>\n                  </router-link>\n              </li>\n            </ul>\n        </div>\n\n    </div>\n</home-shell>\n";

/***/ },

/***/ 198:
/***/ function(module, exports) {

	module.exports = "\n\n\n<div class=\"content\" _v-7eedf4cc=\"\">\n    <my-header _v-7eedf4cc=\"\"></my-header>\n\n    <component :is=\"currentView\" :catid=\"catid\" keep-alive=\"\" _v-7eedf4cc=\"\">\n        <!-- 组件在 vm.currentview 变化时改变 -->\n    </component>\n</div>\n";

/***/ }

});
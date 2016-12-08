webpackJsonp([1,3],Array(90).concat([
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(91)
	__vue_script__ = __webpack_require__(93)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(225)
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
	  var id = "_v-df052d0a/home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-df052d0a&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./home.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-df052d0a&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.content[_v-df052d0a]{\n    height:100%;\n}\n", ""]);

	// exports


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _header = __webpack_require__(94);

	var _header2 = _interopRequireDefault(_header);

	var _indexMain = __webpack_require__(129);

	var _indexMain2 = _interopRequireDefault(_indexMain);

	var _investment = __webpack_require__(136);

	var _investment2 = _interopRequireDefault(_investment);

	var _recommend = __webpack_require__(185);

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
	//     <my-header ></my-header>
	//
	//         <component :is="currentView" :catid="catid">
	//             <!-- 组件在 vm.currentview 变化时改变 -->
	//         </component>
	//
	//     </div>
	// </template>
	//
	// <script>

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(95)
	__vue_script__ = __webpack_require__(99)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(128)
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
	  var id = "_v-33ab01ae/header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(96);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-33ab01ae&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./header.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-33ab01ae&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".box[_v-33ab01ae] {\n  height: 1.44rem; }\n\n.nav[_v-33ab01ae] {\n  width: 5.8rem;\n  height: .6rem;\n  padding: 0px .3rem;\n  position: fixed;\n  top: .84rem;\n  background-color: #f5f5f3;\n  z-index: 999999; }\n\n#nav-smartSetup[_v-33ab01ae] {\n  position: absolute;\n  z-index: 1;\n  margin-left: -.3rem;\n  padding-left: .1rem;\n  height: .6rem;\n  width: 6rem;\n  overflow: hidden; }\n\n#nav-smartSetup ul li[_v-33ab01ae] {\n  float: left;\n  line-height: .64rem;\n  font-size: .3rem;\n  padding: 0px .2rem;\n  height: .6rem; }\n\n#nav-smartSetup ul .cur[_v-33ab01ae] {\n  font-size: .32rem;\n  color: #ed1b23;\n  float: left;\n  line-height: .64rem;\n  padding: 0px .2rem; }\n\n#scroller[_v-33ab01ae] {\n  position: absolute;\n  z-index: 1;\n  -webkit-tap-highlight-color: transparent;\n  height: 100%;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  -o-text-size-adjust: none;\n  text-size-adjust: none; }\n\n#scroller ul[_v-33ab01ae] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: 110%;\n  line-height: 4rem;\n  height: .6rem;\n  text-align: center; }\n\n.line_a[_v-33ab01ae] {\n  background: url(" + __webpack_require__(97) + ");\n  display: inline-block;\n  width: .14rem;\n  height: .6rem;\n  background-size: .14rem .6rem;\n  position: absolute;\n  top: 0px;\n  right: .67rem;\n  z-index: 999; }\n\n.plus_a[_v-33ab01ae] {\n  position: absolute;\n  right: .3rem;\n  background: url(" + __webpack_require__(98) + ");\n  display: inline-block;\n  width: .37rem;\n  height: .36rem;\n  float: right;\n  margin-top: .10rem;\n  cursor: pointer;\n  background-size: .37rem .36rem;\n  z-index: 999; }\n", ""]);

	// exports


/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAA+CAYAAAAbMip8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHOSURBVHja7FZJcoQwDLSM5v+PzUwuGJSDsa2l7UnIdaiiWNvdai1Ar9eXpBtbTje3D3AFPM/zFpDP80xEBB5Rgrcb43Eck0eSRNoOGI/jSNKfVIrIJEnEKsgVOF4YTAisGEsp7mZbud6jSaC5lMrYds8ohlq01NJNsMwarKDXed73YkDWyXEEUosBxZfFscoAItCIOUFW3vfd5VEuZxsTrqDLVXEOinE5yk2JS9mBlJHLVk01p+PaFAARubwNjVquSDdHu4oLPpjTgETVCP9CZaJVyQlMtE6LVqBipFCPusCrB7CtJMToVWj23BpZV0ksalmNDjE7iitMuZGO5NoKF/h0PMry+3V1R85xJg/38NjsQG27trydo4XytuWes7EAgSFlr3PO2wXCE3xacsybAaxA+nneNu6MVR4p2Tj2zqhXRmMi3qPKOGQS2CefOWZWL8zyNjGngSxrmqaDSDH6/hsmaTcpStX2+7zCGB+Ph2Gz1ZOmjl8xUgC/SxEzP4BUe0SSGRcAhc7wMTMzu8JGxkSt3GrVr7ruFiMVmeELgTDjuz8rfc2jH9f2B1fbBJhvuEO4zZy//gSyn3K//l9Fc/XzM/9PID+f37eAPwMAHrQ6uZXTPo0AAAAASUVORK5CYII="

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABeSURBVHja7NUxCsAwCAXQpHQLvf9Bg3N6gtCSOqTw/qzwUMEa0UfZLEfZMFBQrV0mBQUFBQUF9SFn1nNd6Yvo71CzwifQSp+bgoKCgoKCSkRlPmPr+z3qBgAA//8DALiWEChukzCJAAAAAElFTkSuQmCC"

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _top = __webpack_require__(101);

	var _top2 = _interopRequireDefault(_top);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//滑动导航
	var IScroll = __webpack_require__(108); //
	//
	// <template>
	//     <div class="box">
	//         <my-top></my-top>
	//         <div class="nav">
	//             <div id="nav-smartSetup">
	//                 <div id="scroller">
	//                     <ul>
	//                         <li v-on:click="selectType('recommend')" :class="{'cur':isCur[0]}" >推荐</li>
	//                         <li v-on:click="selectType('drug',4)" :class="{'cur':isCur[1]}">药品 </li>
	//                         <li v-on:click="selectType('zyc',11)" :class="{'cur':isCur[2]}">中药材</li>
	//                         <li v-on:click="selectType('bjsp',5)" :class="{'cur':isCur[3]}">保健食品</li>
	//                         <li v-on:click="selectType('ylqx',13)" :class="{'cur':isCur[4]}">医疗器械 </li>
	//                         <li v-on:click="selectType('mrhf',20)" :class="{'cur':isCur[5]}">美容护肤 </li>
	//                         <li v-on:click="selectType('jsyp',18)" :class="{'cur':isCur[6]}">计生用品 </li>
	//                         <li v-on:click="selectType('zysb',15)" :class="{'cur':isCur[7]}">制药设备 </li>
	//                         <li v-on:click="selectType('yly',7)" :class="{'cur':isCur[8]}">原料药 </li>
	//                         <li v-on:click="selectType('health')" :class="{'cur':isCur[9]}">健康 </li>
	//                     </ul>
	//                 </div>
	//             </div>
	//            <!--  <i class="line_a"></i>
	//             <i class="plus_a"></i> -->
	//         </div>
	//
	//     </div>
	// </template>
	//
	// <script>

	exports.default = {
	    data: function data() {
	        return {};
	    },

	    components: {
	        myTop: _top2.default
	    },
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
	        },
	        loaded: function loaded(startX) {
	            var myScroll;
	            myScroll = new IScroll('#nav-smartSetup', { startX: startX, scrollX: true, scrollY: false, mouseWheel: true, click: true });
	        },
	        resetwidth: function resetwidth() {
	            var w = 0;
	            var currPosition = 0;
	            if ($("#scroller ul li")[0]) {
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
	                this.loaded(-currPosition);
	            }
	        }
	    },
	    mounted: function mounted() {
	        var _this = this;
	        $(document).ready(function () {

	            //iscroll click设为true 不然无法点击


	            _this.resetwidth();
	            window.onresize = function () {
	                _this.resetwidth();
	            };

	            //$("#scroller").css({"transition-duration": "1s",transform: "translate(-"+ 20 +"px, 0px) translateZ(0px)"});
	        });
	    },
	    beforeUpdate: function beforeUpdate() {},
	    updated: function updated() {}
	};
	// </script>
	// <style lang="sass" scoped>
	//     .box{
	//         height:1.44rem;
	//     }
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
	//         width: 6rem;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(100)))

/***/ },
/* 100 */,
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(102)
	__vue_script__ = __webpack_require__(106)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\top.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(107)
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
	  var id = "_v-19b9912e/top.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(103);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-19b9912e&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./top.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-19b9912e&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./top.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".top[_v-19b9912e] {\n  position: fixed;\n  top: 0px;\n  width: 6.4rem;\n  height: .84rem;\n  background: #ed1b23;\n  z-index: 999999; }\n  .top .wrap[_v-19b9912e] {\n    width: 5.8rem;\n    margin: 0px .3rem; }\n    .top .wrap .logo[_v-19b9912e] {\n      width: 3rem;\n      height: 0.4rem;\n      display: inline-block;\n      background: url(" + __webpack_require__(104) + ") no-repeat;\n      background-size: 3rem .4rem;\n      margin-top: .22rem; }\n    .top .wrap .search_bg[_v-19b9912e] {\n      background: url(" + __webpack_require__(105) + ");\n      width: 2.61rem;\n      height: .5rem;\n      line-height: .5rem;\n      float: right;\n      margin-top: .16rem;\n      background-size: 2.61rem .5rem; }\n      .top .wrap .search_bg i[_v-19b9912e] {\n        font-size: .24rem;\n        color: #8f8f8f;\n        padding-left: .5rem;\n        display: inline-block; }\n", ""]);

	// exports


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/logo.png";

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQUAAAAyCAYAAABVns4wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAARYSURBVHja7N3fT1tlHMfx9zlntA0lEKQ0YYLMuoQxbPnVgl4Pt5glJiZb9MrEf2GJJCb+BZrsj9iVJCYqyxQzF2d2Iz8qjDJAt6m7oLTrBi1lDbSU4wUFh5TIFhLw9PO669Pz9OL7TT85P55zjmHbNmVYwHvAZaAPCAAGIvJ/VgSmgN+Ar4Dh0tguRplQaAOulcJARJxrDPioFBI7zH9tdAWYVCCIVIS+0v/9yn57Cp8Dn6hOIhXpC2Dw+VD4APhSdRGpaB8CQ4Zt2y7gD+BV1USkoj0AOkzgkgJBRIDTwCUTuKhaiEjJRRPoVR1EpORtw7btNFCnWogIkDfsfZY0ikhlMlUCEVEoiIhCQUQUCiLyEk4c9g/m83nm5mZ5+PABy8vLu77zeDw0N7fQ0fEmPp9P1Rc5hg716kMqleLOnZ93wsCyLGpqarAsi1wux9ra2s54T08voVCnOiDi1FB48iTFyMj3rK+v4/F4CAZDnDr1Ol6vF8MwKBTyJJNJYrEYicQiAF1d3fT2htUFEaeFQj6f5/r1b0mn09TX13Pu3DvU1ZVfD2XbNmNjo8zMxAAYGDhPa2urOiFyTBzKica5uVnS6TQej4eBgfP7BgKAYRj0979FIBAAIBodp1gsqhMiTgqF+/d/ByAYDFFbW3ugOZFIPy6Xi+XlZRYX4+qEiJNCIZPJYFknCATeOPCcmpoamppOArCwsKBOiDgpFLb+5F6qq6tfaE5DQwMAq6ur6oSI00LBsqyXnqN7skQcGAq5XI5CofBCc7LZLABut0udEHFSKLhcLtbW1kgmkwees7m5STy+dYKxsdGvTog4KRRaWl4DYHp66sBz5ufnWVnJUFXl2pkvIg4JhWAwhGmaJJNJRkd/+c/tE4kEExPjALS3t+P1etUJESeFQkNDw85y5ZmZGLdv/8TKSmbPdhsbG8zO3uPmzR8oFPI0NjbS2xvm8eOkOiFyTBzqDVHR6ARTU5MAVFVV0dR0Ep/Ph2maZLNZEolFMpmtsPD7/Vy48C5LS0uMjHzH2bMd9PX1qyMiTgoFgEeP/mJy8leePn1a9nu3201b2xm6u3tIpVLcuvUj6+tbd092dnYRDkfUFREnhQJAsVgkHl8gHo/z7Nkqm5s2brcbv99Pc3MLXq+XVCrF8PA3e+aGQp1EInq/rYijQuFgwbFBNBolFptWMIgoFP4xMTHO3btTe8Z1KCFyNI78GY3hcKTsE5jKBYWIVEAoAEQifXo0m4hCYW8wdHZ27Xyur39F3RE5AnptnIgczz0FEVEoiMgxDYWMyiAiJasmkFAdRKRkwQSiqoOIlERN4IbqICIlNwzbtl3APeC06iFS0f4EzphAHvhM9RCpeJ8C+e1LkkPAVdVEpGJdLeXArnUKg6U9hrzqI1Ixto8UBrcHjDKrnNuAa4AeaCDibGPAx8Ds84PGPrc+WMD7wGUgDARUPxFHiLJ1QnEI+BrY88r3vwEAAP//AwCfb2fwyT+pQgAAAABJRU5ErkJggg=="

/***/ },
/* 106 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="top">
	//             <div class="wrap">
	//                 <i class="logo"></i>
	//                 <div class="search_bg" @click="gosearch">
	//                     <i>当代医药市场网</i>
	//                 </div>
	//             </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
		methods: {
			gosearch: function gosearch() {
				this.$router.push({ path: "/search" });
			}
		}
	};
	// </script>
	// <style lang="sass" scoped>
	//  	.top{
	//         position: fixed;
	//         top:0px;
	//         width:6.4rem;
	//         height:.84rem;
	//         background: #ed1b23;
	//         z-index: 999999;
	//          .wrap{
	// 	        width:5.8rem;
	// 	        margin:0px .3rem;
	//     		.logo{
	// 		        width:3rem;
	// 		        height:0.4rem;
	// 		        display: inline-block;
	// 		        background: url("../image/logo.png") no-repeat;
	// 		        background-size: 3rem .4rem;
	// 		        margin-top:.22rem;
	//     		}
	// 	    	.search_bg{
	// 		        background: url("../image/search_bg.png");
	// 		        width:2.61rem;
	// 		        height:.5rem;
	// 		        line-height: .5rem;
	// 		        float:right;
	// 		        margin-top:.16rem;
	// 		        background-size: 2.61rem .5rem;
	// 		        i{
	// 		            font-size:.24rem;
	// 		            color:#8f8f8f;
	// 		            padding-left:.5rem;
	// 		            display:inline-block;
	// 		        }
	// 	    	}
	//     	}
	//
	//     }
	//
	// </style>

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"top\" _v-19b9912e=\"\">\n            <div class=\"wrap\" _v-19b9912e=\"\">\n                <i class=\"logo\" _v-19b9912e=\"\"></i>\n                <div class=\"search_bg\" @click=\"gosearch\" _v-19b9912e=\"\">\n                    <i _v-19b9912e=\"\">当代医药市场网</i>\n                </div>\n            </div>\n    </div>\n";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof2 = __webpack_require__(109);

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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(110);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(113);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27);
	__webpack_require__(71);
	module.exports = __webpack_require__(112).f('iterator');

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(68);

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115);
	__webpack_require__(26);
	__webpack_require__(126);
	__webpack_require__(127);
	module.exports = __webpack_require__(35).Symbol;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(34)
	  , has            = __webpack_require__(49)
	  , DESCRIPTORS    = __webpack_require__(43)
	  , $export        = __webpack_require__(33)
	  , redefine       = __webpack_require__(48)
	  , META           = __webpack_require__(116).KEY
	  , $fails         = __webpack_require__(44)
	  , shared         = __webpack_require__(63)
	  , setToStringTag = __webpack_require__(67)
	  , uid            = __webpack_require__(64)
	  , wks            = __webpack_require__(68)
	  , wksExt         = __webpack_require__(112)
	  , wksDefine      = __webpack_require__(117)
	  , keyOf          = __webpack_require__(118)
	  , enumKeys       = __webpack_require__(119)
	  , isArray        = __webpack_require__(122)
	  , anObject       = __webpack_require__(40)
	  , toIObject      = __webpack_require__(56)
	  , toPrimitive    = __webpack_require__(46)
	  , createDesc     = __webpack_require__(47)
	  , _create        = __webpack_require__(52)
	  , gOPNExt        = __webpack_require__(123)
	  , $GOPD          = __webpack_require__(125)
	  , $DP            = __webpack_require__(39)
	  , $keys          = __webpack_require__(54)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(124).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(121).f  = $propertyIsEnumerable;
	  __webpack_require__(120).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(32)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(38)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(64)('meta')
	  , isObject = __webpack_require__(41)
	  , has      = __webpack_require__(49)
	  , setDesc  = __webpack_require__(39).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(44)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(34)
	  , core           = __webpack_require__(35)
	  , LIBRARY        = __webpack_require__(32)
	  , wksExt         = __webpack_require__(112)
	  , defineProperty = __webpack_require__(39).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(54)
	  , toIObject = __webpack_require__(56);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(54)
	  , gOPS    = __webpack_require__(120)
	  , pIE     = __webpack_require__(121);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 120 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 121 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(58);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(56)
	  , gOPN      = __webpack_require__(124).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(55)
	  , hiddenKeys = __webpack_require__(65).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(121)
	  , createDesc     = __webpack_require__(47)
	  , toIObject      = __webpack_require__(56)
	  , toPrimitive    = __webpack_require__(46)
	  , has            = __webpack_require__(49)
	  , IE8_DOM_DEFINE = __webpack_require__(42)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(43) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(117)('asyncIterator');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(117)('observable');

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "\n\n\n<div class=\"box\" _v-33ab01ae=\"\">\n    <my-top _v-33ab01ae=\"\"></my-top>\n    <div class=\"nav\" _v-33ab01ae=\"\">\n        <div id=\"nav-smartSetup\" _v-33ab01ae=\"\">\n            <div id=\"scroller\" _v-33ab01ae=\"\">\n                <ul _v-33ab01ae=\"\">\n                    <li v-on:click=\"selectType('recommend')\" :class=\"{'cur':isCur[0]}\" _v-33ab01ae=\"\">推荐</li>\n                    <li v-on:click=\"selectType('drug',4)\" :class=\"{'cur':isCur[1]}\" _v-33ab01ae=\"\">药品 </li>\n                    <li v-on:click=\"selectType('zyc',11)\" :class=\"{'cur':isCur[2]}\" _v-33ab01ae=\"\">中药材</li>\n                    <li v-on:click=\"selectType('bjsp',5)\" :class=\"{'cur':isCur[3]}\" _v-33ab01ae=\"\">保健食品</li>\n                    <li v-on:click=\"selectType('ylqx',13)\" :class=\"{'cur':isCur[4]}\" _v-33ab01ae=\"\">医疗器械 </li>\n                    <li v-on:click=\"selectType('mrhf',20)\" :class=\"{'cur':isCur[5]}\" _v-33ab01ae=\"\">美容护肤 </li>\n                    <li v-on:click=\"selectType('jsyp',18)\" :class=\"{'cur':isCur[6]}\" _v-33ab01ae=\"\">计生用品 </li>\n                    <li v-on:click=\"selectType('zysb',15)\" :class=\"{'cur':isCur[7]}\" _v-33ab01ae=\"\">制药设备 </li>\n                    <li v-on:click=\"selectType('yly',7)\" :class=\"{'cur':isCur[8]}\" _v-33ab01ae=\"\">原料药 </li>\n                    <li v-on:click=\"selectType('health')\" :class=\"{'cur':isCur[9]}\" _v-33ab01ae=\"\">健康 </li>\n                </ul>\n            </div>\n        </div>\n       <!--  <i class=\"line_a\"></i>\n        <i class=\"plus_a\"></i> -->\n    </div>\n\n</div>\n";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(130)
	__webpack_require__(132)
	__vue_script__ = __webpack_require__(134)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\indexMain.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(135)
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
	  var id = "_v-02dad7bf/indexMain.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./indexMain.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./indexMain.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n .clear{\n    clear: both;\n}\n.ad_content{\n    width:5.8rem;\n    margin: 0 auto;\n    padding:0;\n    position: relative;\n    margin-bottom: .1rem;\n}\n.ad_code_one{\n    width:100%;\n    min-height: 1.5rem;\n    padding: .08rem 0px .16rem 0px;\n   \n    border-bottom:1px solid #fafafa;\n}\n.ad_code_two{\n    padding-top:.16rem;\n    width:100%;\n    padding-bottom:.8rem;\n    border-bottom:1px solid #fafafa;\n}\n.ad_code_three{\n    width:100%;\n    padding-top:.1rem;\n    padding-bottom:.8rem;\n    border-bottom:1px solid #fafafa;\n}\n.content1-left{\n    width: 4rem;\n    min-height: 1.5rem;\n    float: left;\n}\n\n.content-title h2{\n    padding-right:.2rem;\n    font-size: .3rem;\n}\n\n.content-info{\n    position: absolute;\n    bottom:.3rem;\n}\n.content-info ul{\n    width:100% ;\n    height:.3rem ;\n    line-height: .3rem;\n}\n\n.content-info li {\n    float: left;\n}\n\n\n\n.content1-right{\n    width: 1.8rem;min-height: 1.5rem;\n    float:right;\n}\n.content1-right  img{\n    width:1.8rem;\n    height:1.2rem;\n}\n.click,.time{\n    color:#8a8a8a ;\n    font-size:.22rem ;\n\n    margin-right:.26rem;\n    display: inline-block;\n}\n\n\n\n.content-Title{\n    padding-bottom: .16rem;\n}\n\n.content2-img{\n    width: 5.8rem;height: 1.23rem;\n}\n\n\n\n.content2-img img{\n    display: block!important;\n    float: left!important;\n}\n.content2-img img{\n    width:1.89rem;\n    height:1.23rem;\n}\n.c2-img{\n    margin-right: .06rem;\n}\n\n.content3-img img{\n    width:5.79rem;\n    height:2.84rem;\n}\n\n\n", ""]);

	// exports


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(133);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-02dad7bf&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=1!./indexMain.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-02dad7bf&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=1!./indexMain.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".click_area[_v-02dad7bf] {\n  display: inline-block; }\n\n.click[_v-02dad7bf], .time[_v-02dad7bf] {\n  font-size: 12px;\n  height: 18px;\n  line-height: 18px; }\n\n.note[_v-02dad7bf] {\n  display: inline-block;\n  margin-right: .2rem; }\n  .note .el-tag[_v-02dad7bf] {\n    font-size: 12px;\n    height: 16px;\n    line-height: 16px; }\n", ""]);

	// exports


/***/ },
/* 134 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <style>
	//
	//
	//      .clear{
	//         clear: both;
	//     }
	//     .ad_content{
	//         width:5.8rem;
	//         margin: 0 auto;
	//         padding:0;
	//         position: relative;
	//         margin-bottom: .1rem;
	//     }
	//     .ad_code_one{
	//         width:100%;
	//         min-height: 1.5rem;
	//         padding: .08rem 0px .16rem 0px;
	//
	//         border-bottom:1px solid #fafafa;
	//     }
	//     .ad_code_two{
	//         padding-top:.16rem;
	//         width:100%;
	//         padding-bottom:.8rem;
	//         border-bottom:1px solid #fafafa;
	//     }
	//     .ad_code_three{
	//         width:100%;
	//         padding-top:.1rem;
	//         padding-bottom:.8rem;
	//         border-bottom:1px solid #fafafa;
	//     }
	//     .content1-left{
	//         width: 4rem;
	//         min-height: 1.5rem;
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
	//         width: 1.8rem;min-height: 1.5rem;
	//         float:right;
	//     }
	//     .content1-right  img{
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
	//     .content2-img img{
	//         width:1.89rem;
	//         height:1.23rem;
	//     }
	//     .c2-img{
	//         margin-right: .06rem;
	//     }
	//
	//     .content3-img img{
	//         width:5.79rem;
	//         height:2.84rem;
	//     }
	//
	//
	// </style>
	//
	// <template>
	//
	//     <div>
	//         <div class="ad_content"  v-for="item in items.list">
	//             <a :href="item.text_url" class="click_area">
	//                 <div v-html="item.code"></div>
	//                 <div class="content-info">
	//                     <ul>
	//
	//                         <li><span v-if="item.note" class="note"><el-tag :type="types(item.note)">{{item.note}}</el-tag></span></li>
	//                     <!--     <li><span class="click">{{item.hits}}</span></li> -->
	//                         <li><span class="time">{{item.ago}}</span></li>
	//                     </ul>
	//                 </div>
	//             </a>
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
	    computed: {},
	    data: function data() {
	        return {};
	    },
	    mounted: function mounted() {},

	    methods: {
	        types: function types(note) {
	            switch (note) {
	                case "推荐":
	                    return "danger";
	                    break;
	                case "保健食品":
	                    return "success";
	                    break;
	                case "营养食品":
	                    return "success";
	                    break;
	                default:
	                    return "gray";
	                    break;
	            }
	        }
	    },
	    filters: {}
	};
	// </script>
	//
	//
	// <style lang="sass" scoped>
	//     .click_area{
	//         display: inline-block;
	//     }
	//
	//     .click, .time {
	//         font-size:12px;
	//         height:18px;
	//         line-height: 18px;
	//     }
	//     .note{
	//         display: inline-block;
	//         margin-right:.2rem;
	//
	//         .el-tag{
	//              font-size:12px;
	//              height:16px;
	//              line-height: 16px;
	//         }
	//     }
	// </style>
	//

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div _v-02dad7bf=\"\">\n    <div class=\"ad_content\" v-for=\"item in items.list\" _v-02dad7bf=\"\">\n        <a :href=\"item.text_url\" class=\"click_area\" _v-02dad7bf=\"\">\n            <div v-html=\"item.code\" _v-02dad7bf=\"\"></div>\n            <div class=\"content-info\" _v-02dad7bf=\"\">\n                <ul _v-02dad7bf=\"\">\n\n                    <li _v-02dad7bf=\"\"><span v-if=\"item.note\" class=\"note\" _v-02dad7bf=\"\"><el-tag :type=\"types(item.note)\" _v-02dad7bf=\"\">{{item.note}}</el-tag></span></li>\n                <!--     <li><span class=\"click\">{{item.hits}}</span></li> -->\n                    <li _v-02dad7bf=\"\"><span class=\"time\" _v-02dad7bf=\"\">{{item.ago}}</span></li>\n                </ul>\n            </div>\n        </a>\n        <div class=\"clear\" _v-02dad7bf=\"\"></div>\n    </div>\n</div>\n\n";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(137)
	__webpack_require__(139)
	__vue_script__ = __webpack_require__(141)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\investment.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(184)
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
	  var id = "_v-7aab4b22/investment.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-7aab4b22&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./investment.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-7aab4b22&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./investment.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.noPage[_v-7aab4b22]{\n    font-size: .2rem;\n    text-align: center;\n    height: .50rem;\n    line-height: .50rem;\n    color: #888;\n}\n", ""]);

	// exports


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(140);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=1!./investment.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=1!./investment.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.clear{\n    clear: both;\n}\n.white_box{\n    width:6.4rem;\n    background-color:#FFFFFF;\n    height: auto;\n    overflow: hidden;\n}\n.ad_content{\n    width:5.8rem;\n    margin: 0 auto;\n    padding:.10rem 0;\n    position: relative;\n    margin-bottom: .1rem;\n}\n.ad_code_one{\n    width:100%;\n    height: 1.2rem;\n    padding:.16rem 0px;\n    border-bottom:1px solid #e7e7e7;\n}\n.ad_code_two{\n    width:100%;\n    padding-bottom:.7rem;\n    border-bottom:1px solid #e7e7e7;\n}\n.ad_code_three{\n    width:100%;\n    padding-bottom:.6rem;\n    border-bottom:1px solid #e7e7e7;\n}\n.content1-left{\n    width: 4rem;\n\n    float: left;\n}\n\n.content-title h2{\n    padding-right:.2rem;\n    font-size: .3rem;\n}\n\n.content-info{\n    position: absolute;\n    bottom:.3rem;\n}\n.content-info ul{\n    width:100% ;\n    height:.3rem ;\n    line-height: .3rem;\n}\n\n.content-info li {\n    float: left;\n}\n\n\n\n.content1-right{\n    width: 1.8rem;height: 1.2rem;\n    float:right;\n}\n.content1-right a img{\n    width:1.8rem;\n    height:1.2rem;\n}\n.click,.time{\n    color:#8a8a8a ;\n    font-size:.22rem ;\n\n    margin-right:.26rem;\n    display: inline-block;\n}\n\n\n\n.content-Title{\n    padding-bottom: .16rem;\n}\n\n.content2-img{\n    width: 5.8rem;height: 1.23rem;\n}\n\n\n\n.content2-img img{\n    display: block!important;\n    float: left!important;\n}\n.content2-img a img{\n    width:1.89rem;\n    height:1.23rem;\n}\n.c2-img{\n    margin-right: .06rem;\n}\n\n.content3-img a img{\n    width:5.79rem;\n    height:2.84rem;\n}\n\n\n.page{\n\n    overflow: hidden;\n    position: relative;\n    /* Prevent native touch events on Windows */\n    -ms-touch-action: none;\n    /* Prevent the callout on tap-hold and text selection */\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    -webkit-text-size-adjust: none;\n        -ms-text-size-adjust: none;\n            text-size-adjust: none;\n}\n\n\n\n\n/*scrollbar start*/\n.iScrollVerticalScrollbar {\n    position: absolute;\n    z-index: 9999;\n    width: 2px;\n    bottom: 2px;\n    top: 2px;\n    right: 2px;\n    overflow: hidden;\n}\n\n.iScrollVerticalScrollbar.iScrollBothScrollbars {\n    bottom: 18px;\n}\n\n.iScrollIndicator {\n    position: absolute;\n    background: #999;\n    border-radius: 6px;\n    opacity: .8;\n}\n\n.iScrollVerticalScrollbar .iScrollIndicator {\n    width: 100%;\n    background: #999;\n}\n/*scrollbar end*/\n", ""]);

	// exports


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mintUi = __webpack_require__(142);

	var _investmentList = __webpack_require__(165);

	var _investmentList2 = _interopRequireDefault(_investmentList);

	var _loading = __webpack_require__(170);

	var _loading2 = _interopRequireDefault(_loading);

	var _pullToRefresh = __webpack_require__(176);

	var _pullToRefresh2 = _interopRequireDefault(_pullToRefresh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// <div class="white_box">
	//     <load ></load>
	//
	//     <div id="pullDown"  v-if="!loading">
	//         <pull-to-refresh
	//                 @on-pullup='onPullup'
	//                 @on-pulldown='onPulldown' class="page">
	//             <inv-list :items="items"></inv-list>
	//             <div v-show="noPage" class="noPage">
	//                 没有了
	//             </div>
	//         </pull-to-refresh>
	//     </div>
	//
	//     <div class="clear"></div>
	// </div>
	//
	// </template>
	//
	// <script>

	exports.default = {
	    components: {
	        "pull-to-refresh": _pullToRefresh2.default,
	        "inv-list": _investmentList2.default,
	        "load": _loading2.default
	    },
	    props: ["catid"],
	    data: function data() {
	        return {
	            items: null,
	            loading: true,
	            page: 0,
	            pageTotal: 0,

	            noPage: false
	        };
	    },
	    created: function created() {
	        this.loadData(false);
	    },
	    mounted: function mounted() {
	        // $(".white_box").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
	    },

	    methods: {
	        loadData: function loadData(finshCallback) {
	            this.page += 1;
	            var _this = this;
	            var url = "http://www.ey99.com/api/mobile/investment.php";
	            //url += "catid=" + this.catid + "&page=" + this.page;
	            //console.log(url);
	            //url 为接口地址
	            var option = { params: { page: this.page, catid: this.catid } };

	            this.$http.get(url, option).then(function (response) {

	                _this.pageTotal = Math.ceil(response.body.count / 10);

	                if (finshCallback) {
	                    finshCallback();
	                }

	                //如果超过总页数 返回没有了
	                if (_this.page > _this.pageTotal) {
	                    _this.noPage = true;
	                    setTimeout(function () {
	                        _this.noPage = false;
	                    }, 1000);
	                    return;
	                }

	                if (_this.page === 1) {
	                    _this.items = response.body;
	                } else {
	                    for (var i = 0; i < response.body.list.length; i++) {
	                        _this.items.list.push(response.body.list[i]);
	                    }
	                }

	                if (response.body.count > 0) {
	                    $(document).ready(function () {
	                        $(".page").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
	                    });

	                    _this.loading = false;
	                }

	                _mintUi.Indicator.close();
	                // 响应成功回调
	            }, function (response) {
	                // 响应成功回调
	                console.log("error");
	            });
	        },
	        onPullup: function onPullup(finshCallback) {
	            this.loadData(finshCallback);
	        },
	        onPulldown: function onPulldown(finshCallback) {
	            //finshCallback  调整位置
	            this.noPage = false;
	            this.page = 0;
	            this.loadData(finshCallback);
	        }
	    }
	};
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
	//     .white_box{
	//         width:6.4rem;
	//         background-color:#FFFFFF;
	//         height: auto;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(100)))

/***/ },
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(166)
	__vue_script__ = __webpack_require__(168)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\investmentList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(169)
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
	  var id = "_v-5b87a6a6/investmentList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(167);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-5b87a6a6&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./investmentList.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-5b87a6a6&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./investmentList.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.item[_v-5b87a6a6]{\n    margin:0px .3rem;\n    padding:.2rem 0px;\n    wdth:5.8rem;\n    border-bottom: 1px solid #fafafa;\n}\n\n.item_left[_v-5b87a6a6]{\n    width:4rem;\n    float:left;\n}\n.item_tit[_v-5b87a6a6]{\n    padding-right:.2rem;\n    padding-top:.1rem;\n    font-size: .3rem;\n    height:.8rem;\n}\n.item_img[_v-5b87a6a6]{\n    width: 1.8rem;\n    height: 1.2rem;\n}\n.item_cat[_v-5b87a6a6]{\n    border: 1px solid #bae3fa;\n    color: #bae3fa;\n    border-radius: .05rem;\n    font-size: .16rem;\n    padding: 0 .05rem;\n    height: .24rem;\n    line-height: .30rem;\n    display: inline-block;\n    margin-right: .14rem;\n}\n.item_hit[_v-5b87a6a6]{\n    color: #8a8a8a;\n    font-size: .22rem;\n    height: .34rem;\n    line-height: .34rem;\n    margin-right: .26rem;\n    display: inline-block;\n}\n.item_date[_v-5b87a6a6]{\n    height: .34rem;\n    line-height: .34rem;\n    color: #8a8a8a;\n    font-size: .22rem;\n    margin-right: .26rem;\n    display: inline-block;\n}\n", ""]);

	// exports


/***/ },
/* 168 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	// <!--conten1-->
	// <template>
	//     <!-- content1-->
	//     <div id="items">
	//     <div class="item"  v-for="item in items.list">
	//         <router-link :to="{ name: 'investmentShow', query:{id:item.itemid}, params: { item : item }}"  append>
	//             <div class="item_left">
	//                 <div class="item_tit">
	//                     {{item.title | dSubstr(20) }}
	//                 </div>
	//
	//                 <span class="item_hit">{{item.hits}}点击</span>
	//                 <span class="item_date">{{item.editdate}}</span>
	//             </div>
	//             <img  v-lazy="item.sptp != null ? item.sptp[0] : null" class="item_img" />
	//             <div class="clear"></div>
	//         </router-link>
	//     </div>
	//     </div>
	//
	// </template>
	//
	//
	// <script>


	exports.default = {
	    props: ['items'],
	    data: function data() {
	        return {};
	    },
	    mounted: function mounted() {
	        console.log(this.items);
	    },

	    methods: {},
	    filters: {
	        dSubstr: function dSubstr(title, length) {
	            return title.substr(0, length);
	        }
	    },
	    events: {}

	};
	// </script>
	//
	//
	// <style scoped>
	//     .item{
	//         margin:0px .3rem;
	//         padding:.2rem 0px;
	//         wdth:5.8rem;
	//         border-bottom: 1px solid #fafafa;
	//     }
	//
	//     .item_left{
	//         width:4rem;
	//         float:left;
	//     }
	//     .item_tit{
	//         padding-right:.2rem;
	//         padding-top:.1rem;
	//         font-size: .3rem;
	//         height:.8rem;
	//     }
	//     .item_img{
	//         width: 1.8rem;
	//         height: 1.2rem;
	//     }
	//     .item_cat{
	//         border: 1px solid #bae3fa;
	//         color: #bae3fa;
	//         border-radius: .05rem;
	//         font-size: .16rem;
	//         padding: 0 .05rem;
	//         height: .24rem;
	//         line-height: .30rem;
	//         display: inline-block;
	//         margin-right: .14rem;
	//     }
	//     .item_hit{
	//         color: #8a8a8a;
	//         font-size: .22rem;
	//         height: .34rem;
	//         line-height: .34rem;
	//         margin-right: .26rem;
	//         display: inline-block;
	//     }
	//     .item_date{
	//         height: .34rem;
	//         line-height: .34rem;
	//         color: #8a8a8a;
	//         font-size: .22rem;
	//         margin-right: .26rem;
	//         display: inline-block;
	//     }
	// </style>

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = "\n\n\n<!-- content1-->\n<div id=\"items\" _v-5b87a6a6=\"\">\n<div class=\"item\" v-for=\"item in items.list\" _v-5b87a6a6=\"\">\n    <router-link :to=\"{ name: 'investmentShow', query:{id:item.itemid}, params: { item : item }}\" append=\"\" _v-5b87a6a6=\"\">\n        <div class=\"item_left\" _v-5b87a6a6=\"\">\n            <div class=\"item_tit\" _v-5b87a6a6=\"\">\n                {{item.title | dSubstr(20) }}\n            </div>\n\n            <span class=\"item_hit\" _v-5b87a6a6=\"\">{{item.hits}}点击</span>\n            <span class=\"item_date\" _v-5b87a6a6=\"\">{{item.editdate}}</span>\n        </div>\n        <img v-lazy=\"item.sptp != null ? item.sptp[0] : null\" class=\"item_img\" _v-5b87a6a6=\"\">\n        <div class=\"clear\" _v-5b87a6a6=\"\"></div>\n    </router-link>\n</div>\n</div>\n\n";

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(171)
	__vue_script__ = __webpack_require__(174)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\loading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(175)
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
	  var id = "_v-e542a460/loading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-e542a460&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./loading.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-e542a460&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./loading.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.box[_v-e542a460]{\n    width:6.4rem;\n    text-align: center; /* Safari */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background-color:transparent;\n    height:100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.box i[_v-e542a460]{\n   display: inline-block;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    background: url(" + __webpack_require__(173) + ") no-repeat;\n    background-size: 1.2rem 1.2rem;\n    width:1.2rem;\n    height:1.2rem;\n    display: inline-block;\n    background-color:transparent;\n}\n.spinner[_v-e542a460] {\n    width: 6.4rem;\n    text-align: center;\n\n}\n\n.spinner > div[_v-e542a460] {\n    width: .20rem;\n    height: .20rem;\n    background-color: #ed1b23;\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;\n    animation: bouncedelay 1.4s infinite ease-in-out;\n    /* Prevent first frame from flickering when animation starts */\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.spinner .bounce1[_v-e542a460] {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n}\n\n.spinner .bounce2[_v-e542a460] {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n}\n\n@-webkit-keyframes bouncedelay {\n    0%, 80%, 100% { -webkit-transform: scale(0.0) }\n    40% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes bouncedelay {\n    0%, 80%, 100% {\n        transform: scale(0.0);\n        -webkit-transform: scale(0.0);\n    } 40% {\n          transform: scale(1.0);\n          -webkit-transform: scale(1.0);\n      }\n}\n", ""]);

	// exports


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/bg-load.gif";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});

	var _mintUi = __webpack_require__(142);

	exports.default = {
	   props: ['loading'],
	   mounted: function mounted() {
	      _mintUi.Indicator.open({
	         text: '数据加载中',
	         spinnerType: 'fading-circle'
	      });
	   },
	   updated: function updated() {}
	};
	// </script>
	// <style scoped>
	//     .box{
	//         width:6.4rem;
	//         text-align: center;
	//         display: -webkit-flex; /* Safari */
	//         display: flex;
	//         background-color:transparent;
	//         height:100%;
	//         flex-direction: column;
	//         justify-content: center;
	//     }
	//     .box i{
	//        display: inline-block;
	//         align-self: center;
	//         background: url("../assets/bg-load.gif") no-repeat;
	//         background-size: 1.2rem 1.2rem;
	//         width:1.2rem;
	//         height:1.2rem;
	//         display: inline-block;
	//         background-color:transparent;
	//     }
	//     .spinner {
	//         width: 6.4rem;
	//         text-align: center;
	//
	//     }
	//
	//     .spinner > div {
	//         width: .20rem;
	//         height: .20rem;
	//         background-color: #ed1b23;
	//         border-radius: 100%;
	//         display: inline-block;
	//         -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
	//         animation: bouncedelay 1.4s infinite ease-in-out;
	//         /* Prevent first frame from flickering when animation starts */
	//         -webkit-animation-fill-mode: both;
	//         animation-fill-mode: both;
	//     }
	//
	//     .spinner .bounce1 {
	//         -webkit-animation-delay: -0.32s;
	//         animation-delay: -0.32s;
	//     }
	//
	//     .spinner .bounce2 {
	//         -webkit-animation-delay: -0.16s;
	//         animation-delay: -0.16s;
	//     }
	//
	//     @-webkit-keyframes bouncedelay {
	//         0%, 80%, 100% { -webkit-transform: scale(0.0) }
	//         40% { -webkit-transform: scale(1.0) }
	//     }
	//
	//     @keyframes bouncedelay {
	//         0%, 80%, 100% {
	//             transform: scale(0.0);
	//             -webkit-transform: scale(0.0);
	//         } 40% {
	//               transform: scale(1.0);
	//               -webkit-transform: scale(1.0);
	//           }
	//     }
	// </style>
	// <template>
	//     <!--<div class="spinner">-->
	//         <!--<div class="bounce1"></div>-->
	//         <!--<div class="bounce2"></div>-->
	//         <!--<div class="bounce3"></div>-->
	//     <!--</div>-->
	//    <!--  <div class="box">
	//         <i></i>
	//     </div> -->
	// </template>
	// <script>

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = "\n <!--<div class=\"spinner\">-->\n     <!--<div class=\"bounce1\"></div>-->\n     <!--<div class=\"bounce2\"></div>-->\n     <!--<div class=\"bounce3\"></div>-->\n <!--</div>-->\n<!--  <div class=\"box\">\n     <i></i>\n </div> -->\n";

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(177)
	__vue_script__ = __webpack_require__(180)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\pull-to-refresh.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(183)
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
	  var id = "_v-2947efb6/pull-to-refresh.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(178);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-2947efb6&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./pull-to-refresh.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-2947efb6&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./pull-to-refresh.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.scroller[_v-2947efb6]{\n  min-height: 101%;/*修正内容高度不够无法scroll*/\n  -webkit-tap-highlight-color:rgba(0,0,0,0);\n}\n.pulldown[_v-2947efb6],.pullup[_v-2947efb6]{\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n.hide[_v-2947efb6]{\n  display: none;\n}\n.pull-container[_v-2947efb6] {\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\n/*refresh start*/\n.pulldown[_v-2947efb6],.pullup[_v-2947efb6] {\n  height: .50rem;\n  line-height: .50rem;\n  padding: .05rem .15rem;\n  font-weight: bold;\n  font-size: .14rem;\n  color: #888;\n  text-align: center;\n}\n\n.pulldown .pulldown-icon[_v-2947efb6],.pullup .pullup-icon[_v-2947efb6] {\n  width: .40rem;\n  height: .40rem;\n  background: url(" + __webpack_require__(179) + ") 0 0 no-repeat;\n  background-size: .40rem .80rem;\n  -webkit-transition-property: -webkit-transform;\n  -webkit-transition-duration: 250ms;\n  position: relative;\n  top: .05rem;\n  left: .2rem;\n}\n\n.pulldown .pulldown-label[_v-2947efb6], .pullup .pullup-label[_v-2947efb6]{\n  position:relative;\n  top: -.40rem;\n  font-size:.2rem;\n}\n.pulldown .pulldown-icon[_v-2947efb6] {\n  -webkit-transform: rotate(0deg) translateZ(0);\n}\n.pullup .pullup-icon[_v-2947efb6] {\n  -webkit-transform: rotate(-180deg) translateZ(0);\n}\n\n.pulldown.release .pulldown-icon[_v-2947efb6] {\n  -webkit-transform: rotate(-180deg) translateZ(0);\n}\n\n.pullup.release .pullup-icon[_v-2947efb6] {\n  -webkit-transform: rotate(0deg) translateZ(0);\n}\n\n.pulldown.refresh .pulldown-icon[_v-2947efb6],.pullup.refresh .pullup-icon[_v-2947efb6] {\n  background-position: 0 100%;\n  -webkit-transition-duration: 0ms;\n  -webkit-animation: spinner 3s infinite linear;\n  animation: spinner 3s infinite linear;\n}\n/*通用转动动画*/\n@-webkit-keyframes spinner {\n  0% { -webkit-transform: rotate(0deg); }\n  50% { -webkit-transform: rotate(180deg); }\n  100% { -webkit-transform: rotate(360deg); }\n}\n/*refresh end*/\n\n", ""]);

	// exports


/***/ },
/* 179 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAACgCAMAAACsXRuGAAAAt1BMVEX////FxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcU7SVrkAAAAPHRSTlMAAPONxyCMRvCjM2n59gzeD/xssVo52Akwh6sDpeTbckJLZroqfhUnRernVxifG9XDgb2ZzzxjeLThEmBcLCjmAAACDklEQVR4Xu2Y124yQQyFM9sh9BJafgik956/7fs/V4RCwiITbMdjCSGfKy4On7THnuLZ8yGTyRWUr1W54NgNIC4Dbm+VrQ+tbQxoQAMa0IAGnO4vtR44WBquCcBuJadrSslwQucNaBm2qbyHEQ3YqNN4l3fUKpdpMV7Q26ZF4T3S+5AU49OIA8RjvLpxDCAeY/PIcYB4jKf8tTzcxDt2fGBt/D3v19kPgK5fRQLkAt0MCZANdIdIgGxg7WBjgHygO1kTY/NVMla8QeBvJwHCGP84CRDG+PefBAhjrHTlo9n/InDiY9a7XfLazgewd//Jqze8AN15sAiw7Gu87XwAW/7m5ec5b+j8AXsveT6uSYAwxmrf7xNBZ+aYQJPJZDLh+20aRlkWhen8twdgnCyO0SCJfQDjUv6lUuwBmOQFJXJgGhSBQSoGhvmKQnFNo1VgBD3MmmarwAx6WDWFQOhh1RR+MvSwagqLwqw7/ndW3UkfCD2bhJcAephAvJGYn4y3OrMouIfZNriH19i4h7v0cI9ww4ce4ZEEPTt6/uJ+UdS4H28G1C9qV9yPLyjUL1vyuB/dlLh+dNtE/dpA+SdrF0XeNsqNLV96+puDfPvaaukfUvJjVP+gl19F9C9L8uuc/oVTfiXWv7TLxwr9wUc+msmHR/3xVj6A6z8RSBej/jMLp+76T1X6j2m7eP6aTO9STHV4CXebKAAAAABJRU5ErkJggg=="

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//
	// <div :id="eleId" class="pull-container">
	//   <div class="scroller">
	//     <div class="pulldown"
	//     :class="[pulldownChangeStyle,{'hide':!displaypullDownDiv}]">
	//       <div class="pulldown-icon"></div>
	//       <div class="pulldown-label">{{pullDownTip}}</div>
	//     </div>
	//     <slot></slot>
	//     <div class="pullup"
	//     :class="[pullupChangeStyle,{'hide':!displaypullUpDiv}]">
	//       <div class="pullup-icon"></div>
	//       <div class="pullup-label">{{pullUpTip}}</div>
	//     </div>
	//   </div>
	// </div>
	//
	// </template>
	//
	// <script>

	var Scroll = __webpack_require__(181);

	var PULL_DOWN_NORMAL = '下拉刷新';
	var PULL_DOWN_RELEASE = '释放立即刷新';
	var PULL_DOWN_LOADING = '正在刷新...';

	var PULL_UP_NORMAL = '上拉刷新';
	var PULL_UP_RELEASE = '释放加载';
	var PULL_UP_LOADING = '加载中，请稍后';

	// 加载状态-1默认，0显示提示下拉信息，1显示释放刷新信息，2执行加载数据，只有当为-1时才能再次加载
	var STATE_DEFAULT = -1;
	var STATE_PULL_NORMAL = 0;
	var STATE_PULL_RELEASE = 1;
	var STATE_PULL_LOADING = 2;

	var STYLE_RELEASE = 'release';
	var STYLE_REFRESH = 'refresh';

	//不写到vue data中，优化内存
	var timeoutHandler = 0,
	    timeout = 8000,
	    pullDownHeight = 50,
	    //pull down element height
	pullUpHeight = 50;

	exports.default = {
	  props: {
	    disablePulldown: {
	      type: Boolean,
	      default: false
	    },
	    disablePullup: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      displaypullDownDiv: false,
	      displaypullUpDiv: false,
	      pullUpTip: PULL_UP_NORMAL,
	      pullDownTip: PULL_DOWN_NORMAL,
	      refreshStep: STATE_DEFAULT,
	      eleId: 'bajianscroll',
	      pulldownChangeStyle: '',
	      pullupChangeStyle: ''
	    };
	  },
	  mounted: function mounted() {
	    this.$nextTick(function () {
	      var _this = this;

	      this.eleId = 'bajian' + Math.round(Math.random() * 1000);
	      setTimeout(function () {
	        _this.registerDrag();
	      }, 50);
	    });
	  },

	  methods: {
	    registerDrag: function registerDrag() {
	      console.log(222);
	      this.myscroll = new Scroll('#' + this.eleId);
	      this.myscroll.on('scroll', this._onTouchMove);
	      this.myscroll.on('scrollEnd', this._onTouchEnd);
	    },
	    _onTouchMove: function _onTouchMove() {
	      if (this.refreshStep == STATE_PULL_LOADING) return;

	      if (!this.disablePulldown && this.myscroll.y > 5 && this.myscroll.y < pullDownHeight / 2) {
	        this.displaypullDownDiv = true;
	        this.displaypullUpDiv = false;
	        this.pulldownChangeStyle = '';
	        this.pullDownTip = PULL_DOWN_NORMAL;
	        this.refreshStep = STATE_PULL_NORMAL;
	      } else if (!this.disablePulldown && this.myscroll.y >= pullDownHeight) {
	        this.pulldownChangeStyle = STYLE_RELEASE;
	        this.pullDownTip = PULL_DOWN_RELEASE;
	        this.refreshStep = STATE_PULL_RELEASE;
	      } else if (!this.disablePullup && this.myscroll.y < -5 && -this.myscroll.y >= pullUpHeight - this.myscroll.maxScrollY) {
	        this.pullupChangeStyle = STYLE_RELEASE;
	        this.pullUpTip = PULL_UP_RELEASE;
	        this.refreshStep = STATE_PULL_RELEASE;
	      } else if (!this.disablePullup && this.myscroll.y < -5 && this.myscroll.y < this.myscroll.maxScrollY && this.myscroll.y > -pullUpHeight / 2 + this.myscroll.maxScrollY) {
	        this.displaypullUpDiv = true;
	        this.displaypullDownDiv = false;
	        this.pullupChangeStyle = '';
	        this.pullUpTip = PULL_UP_NORMAL;
	        this.refreshStep = STATE_PULL_NORMAL;
	      }
	    },
	    reset: function reset() {
	      var _this2 = this;

	      if (this.refreshStep != STATE_DEFAULT) {
	        this.refreshStep = STATE_DEFAULT;
	        if (!this.disablePulldown) {
	          this.displaypullDownDiv = false;
	          this.pulldownChangeStyle = '';
	        }
	        if (!this.disablePullup) {
	          this.displaypullUpDiv = false;
	          this.pullupChangeStyle = '';
	        }
	        setTimeout(function () {
	          _this2.myscroll.refresh();
	        }, 0);
	        clearTimeout(timeoutHandler);
	      }
	    },
	    _onTouchEnd: function _onTouchEnd() {
	      var _this3 = this;

	      if (this.refreshStep == STATE_PULL_RELEASE) {
	        if (!this.disablePullup && this.pullupChangeStyle == STYLE_RELEASE) {
	          this.myscroll.maxScrollY < -10 && this.myscroll.scrollTo(0, this.myscroll.maxScrollY - pullUpHeight);
	          this.pullupChangeStyle = STYLE_REFRESH;
	          this.pullUpTip = PULL_UP_LOADING;
	          this.refreshStep = STATE_PULL_LOADING;
	          this.$emit('on-pullup', this.reset);
	        } else if (!this.disablePulldown && this.pulldownChangeStyle == STYLE_RELEASE) {
	          this.pulldownChangeStyle = STYLE_REFRESH;
	          this.pullDownTip = PULL_DOWN_LOADING;
	          this.refreshStep = STATE_PULL_LOADING;
	          this.$emit('on-pulldown', this.reset);
	        }

	        timeoutHandler = window.setTimeout(function () {
	          if (_this3.refreshStep == STATE_PULL_LOADING) _this3.reset();
	        }, timeout);
	      } else if (this.refreshStep != STATE_PULL_LOADING) {
	        this.reset();
	      }
	    }
	  }
	};
	// </script>
	//
	// <style scoped>
	//   .scroller{
	//     min-height: 101%;/*修正内容高度不够无法scroll*/
	//     -webkit-tap-highlight-color:rgba(0,0,0,0);
	//   }
	//   .pulldown,.pullup{
	//     transition: all 0.2s linear;
	//   }
	//   .hide{
	//     display: none;
	//   }
	//   .pull-container {
	//     transform: translateZ(0);
	//     user-select: none;
	//     text-size-adjust: none;
	//   }
	//
	//   /*refresh start*/
	//   .pulldown,.pullup {
	//     height: .50rem;
	//     line-height: .50rem;
	//     padding: .05rem .15rem;
	//     font-weight: bold;
	//     font-size: .14rem;
	//     color: #888;
	//     text-align: center;
	//   }
	//
	//   .pulldown .pulldown-icon,.pullup .pullup-icon {
	//     width: .40rem;
	//     height: .40rem;
	//     background: url(../image/pull-icon@2x.png) 0 0 no-repeat;
	//     -webkit-background-size: .40rem .80rem;
	//     background-size: .40rem .80rem;
	//     -webkit-transition-property: -webkit-transform;
	//     -webkit-transition-duration: 250ms;
	//     position: relative;
	//     top: .05rem;
	//     left: .2rem;
	//   }
	//
	//   .pulldown .pulldown-label, .pullup .pullup-label{
	//     position:relative;
	//     top: -.40rem;
	//     font-size:.2rem;
	//   }
	//   .pulldown .pulldown-icon {
	//     -webkit-transform: rotate(0deg) translateZ(0);
	//   }
	//   .pullup .pullup-icon {
	//     -webkit-transform: rotate(-180deg) translateZ(0);
	//   }
	//
	//   .pulldown.release .pulldown-icon {
	//     -webkit-transform: rotate(-180deg) translateZ(0);
	//   }
	//
	//   .pullup.release .pullup-icon {
	//     -webkit-transform: rotate(0deg) translateZ(0);
	//   }
	//
	//   .pulldown.refresh .pulldown-icon,.pullup.refresh .pullup-icon {
	//     background-position: 0 100%;
	//     -webkit-transition-duration: 0ms;
	//     -webkit-animation: spinner 3s infinite linear;
	//     animation: spinner 3s infinite linear;
	//   }
	//   /*通用转动动画*/
	//   @-webkit-keyframes spinner {
	//     0% { -webkit-transform: rotate(0deg); }
	//     50% { -webkit-transform: rotate(180deg); }
	//     100% { -webkit-transform: rotate(360deg); }
	//   }
	//   /*refresh end*/
	//
	// </style>

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var IScroll = __webpack_require__(182);

	var _index_key_ = {};

	var scrollObj = {};

	var extend = function extend(oldObj, newObj) {
	  for (var key in newObj) {
	    oldObj[key] = newObj[key];
	  }
	  return oldObj;
	};

	var Scroll = function Scroll(selector, opts) {
	  var $scroll;
	  var options = {
	    probeType: 2, //probeType：1对性能没有影响。在滚动事件被触发时，滚动轴是不是忙着做它的东西。probeType：2总执行滚动，除了势头，反弹过程中的事件。这类似于原生的onscroll事件。probeType：3发出的滚动事件与到的像素精度。注意，滚动被迫requestAnimationFrame（即：useTransition：假）。  
	    scrollbars: 'custom', //有滚动条  
	    mouseWheel: true, //允许滑轮滚动  
	    fadeScrollbars: true, //滚动时显示滚动条，默认影藏，并且是淡出淡入效果  
	    bounce: true, //边界反弹 
	    listenX: false,
	    interactiveScrollbars: true, //滚动条可以拖动  
	    shrinkScrollbars: 'scale', // 当滚动边界之外的滚动条是由少量的收缩。'clip' or 'scale'.  
	    click: true, // 允许点击事件  
	    momentum: true, // 允许有惯性滑动  
	    preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|IMG)$/ }
	  };
	  options = extend(options, opts || {});

	  IScroll.utils.isBadAndroid = false; //处理页面抖动
	  $scroll = new IScroll(selector, options);

	  $scroll.refresh();
	  return $scroll;
	};

	if (typeof module != 'undefined' && module.exports) {
	  module.exports = Scroll;
	} else {
	  window.scroll = Scroll;
	}

	//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, true);

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = __webpack_require__(109);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
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
				return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) : pointerEvent;
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
				hasPointer: window.PointerEvent || window.MSPointerEvent, // IE10 is prefixed
				hasTransition: _prefixStyle('transition') in _elementStyle
			});

			// This should find all Android browsers lower than build 535.19 (both stock browser and webview)
			me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion);

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
					ev = document.createEvent('MouseEvents');
					ev.initMouseEvent('click', true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);

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
				useTransform: true
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

			if (this.options.shrinkScrollbars == 'scale') {
				this.options.useTransition = false;
			}

			this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

			if (this.options.probeType == 3) {
				this.options.useTransition = false;
			}

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
			version: '5.1.3',

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
					if (e.button !== 0) {
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

				this._transitionTime();

				this.startTime = utils.getTime();

				if (this.options.useTransition && this.isInTransition) {
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

					if (this.options.probeType == 1) {
						this._execEvent('scroll');
					}
				}

				if (this.options.probeType > 1) {
					this._execEvent('scroll');
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

				if (!time || this.options.useTransition && easing.style) {
					this._transitionTimingFunction(easing.style);
					this._transitionTime(time);
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
				time = time || 0;

				this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';

				if (!time && utils.isBadAndroid) {
					this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
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
					for (var i = that.indicators.length; i--;) {
						fn.call(that.indicators[i]);
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
				e.stopPropagation();

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
					that._execEvent('scrollEnd');
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

				if (this.options.probeType > 1) {
					this._execEvent('scroll');
				}

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

					if (that.options.probeType == 3) {
						that._execEvent('scroll');
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
						if (!e._constructed) {
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
				this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
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

				if (this.scroller.options.probeType == 1 && timestamp - this.startTime > 300) {
					this.startTime = timestamp;
					this.scroller._execEvent('scroll');
				} else if (this.scroller.options.probeType > 1) {
					this.scroller._execEvent('scroll');
				}

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
				this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';

				if (!time && utils.isBadAndroid) {
					this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
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
		} else {
			window.IScroll = IScroll;
		}
	})(window, document, Math);

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = "\n\n<div :id=\"eleId\" class=\"pull-container\" _v-2947efb6=\"\">\n  <div class=\"scroller\" _v-2947efb6=\"\">\n    <div class=\"pulldown\" :class=\"[pulldownChangeStyle,{'hide':!displaypullDownDiv}]\" _v-2947efb6=\"\">\n      <div class=\"pulldown-icon\" _v-2947efb6=\"\"></div>\n      <div class=\"pulldown-label\" _v-2947efb6=\"\">{{pullDownTip}}</div>\n    </div>\n    <slot _v-2947efb6=\"\"></slot>\n    <div class=\"pullup\" :class=\"[pullupChangeStyle,{'hide':!displaypullUpDiv}]\" _v-2947efb6=\"\">\n      <div class=\"pullup-icon\" _v-2947efb6=\"\"></div>\n      <div class=\"pullup-label\" _v-2947efb6=\"\">{{pullUpTip}}</div>\n    </div>\n  </div>\n</div>\n\n";

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"white_box\" _v-7aab4b22=\"\">\n    <load _v-7aab4b22=\"\"></load>\n\n    <div id=\"pullDown\" v-if=\"!loading\" _v-7aab4b22=\"\">\n        <pull-to-refresh @on-pullup=\"onPullup\" @on-pulldown=\"onPulldown\" class=\"page\" _v-7aab4b22=\"\">\n            <inv-list :items=\"items\" _v-7aab4b22=\"\"></inv-list>\n            <div v-show=\"noPage\" class=\"noPage\" _v-7aab4b22=\"\">\n                没有了\n            </div>\n        </pull-to-refresh>\n    </div>\n\n    <div class=\"clear\" _v-7aab4b22=\"\"></div>\n</div>\n\n";

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
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
	  var id = "_v-e20be360/recommend.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 186 */
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
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-e20be360&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./recommend.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-e20be360&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./recommend.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.noPage[_v-e20be360]{\n    font-size: .2rem;\n    text-align: center;\n    height: .50rem;\n    line-height: .50rem;\n    color: #888;\n}\n#pullDown[_v-e20be360]{\n    background: #FFFFFF;\n}\n.white_box[_v-e20be360]{\n    width:6.4rem;\n    background-color:transparent;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow: hidden;\n}\n\n.page[_v-e20be360]{\n\n    overflow: hidden;\n    position: relative;\n    /* Prevent native touch events on Windows */\n    -ms-touch-action: none;\n    /* Prevent the callout on tap-hold and text selection */\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    -webkit-text-size-adjust: none;\n        -ms-text-size-adjust: none;\n            text-size-adjust: none;\n}\n\n\n\n/*scrollbar start*/\n.iScrollVerticalScrollbar[_v-e20be360] {\n    position: absolute;\n    z-index: 9999;\n    width: 2px;\n    bottom: 2px;\n    top: 2px;\n    right: 2px;\n    overflow: hidden;\n}\n\n.iScrollVerticalScrollbar.iScrollBothScrollbars[_v-e20be360] {\n    bottom: 18px;\n}\n\n.iScrollIndicator[_v-e20be360] {\n    position: absolute;\n    background: #999;\n    border-radius: 6px;\n    opacity: .8;\n}\n\n.iScrollVerticalScrollbar .iScrollIndicator[_v-e20be360] {\n    width: 100%;\n    background: #999;\n}\n/*scrollbar end*/\n\n", ""]);

	// exports


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _indexMain = __webpack_require__(129);

	var _indexMain2 = _interopRequireDefault(_indexMain);

	var _loading = __webpack_require__(170);

	var _loading2 = _interopRequireDefault(_loading);

	var _pullToRefresh = __webpack_require__(176);

	var _pullToRefresh2 = _interopRequireDefault(_pullToRefresh);

	var _mintUi = __webpack_require__(142);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//
	//     <div class="white_box">
	//
	//
	//          <load ></load>
	//
	//         <div id="pullDown"  v-if="!loading">
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
	            var url = "http://www.ey99.com/api/mobile/recommend.php";
	            //url += "page=" + this.page;
	            var option = { params: { page: this.page } };

	            this.$http.get(url, option).then(function (response) {

	                _mintUi.Indicator.close();

	                _this.pageTotal = Math.ceil(response.body.count / 10);

	                _this.loading = false;

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

	                    $(document).ready(function () {
	                        $(".page").height($("#app")[0].clientHeight - $(".top")[0].clientHeight - $(".nav")[0].clientHeight - $(".footer")[0].clientHeight);
	                    });
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

	// </script>
	// <style scoped>
	//     .noPage{
	//         font-size: .2rem;
	//         text-align: center;
	//         height: .50rem;
	//         line-height: .50rem;
	//         color: #888;
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
	//
	// </style>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(100)))

/***/ },
/* 189 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"white_box\" _v-e20be360=\"\">\n\n\n     <load _v-e20be360=\"\"></load>\n\n    <div id=\"pullDown\" v-if=\"!loading\" _v-e20be360=\"\">\n        <pull-to-refresh @on-pullup=\"onPullup\" @on-pulldown=\"onPulldown\" class=\"page\" _v-e20be360=\"\">\n            <index-main :items=\"items\" _v-e20be360=\"\"></index-main>\n            <div v-show=\"noPage\" class=\"noPage\" _v-e20be360=\"\">\n                没有了\n            </div>\n        </pull-to-refresh>\n\n    </div>\n\n\n    <div class=\"clear\" _v-e20be360=\"\"></div>\n</div>\n";

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(191)
	__vue_script__ = __webpack_require__(193)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\health.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(224)
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
	  var id = "_v-b32fc110/health.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 191 */
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
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-b32fc110&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./health.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-b32fc110&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./health.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".my-swipe[_v-b32fc110] {\n  width: 6.4rem;\n  height: 2.8rem;\n  position: relative; }\n  .my-swipe img[_v-b32fc110] {\n    width: 6.4rem;\n    height: 2.8rem; }\n  .my-swipe span[_v-b32fc110] {\n    font-size: .28rem;\n    line-height: .52rem;\n    padding-left: .2rem;\n    color: #FFF;\n    width: 6.2rem;\n    height: .5rem;\n    background: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    bottom: 0; }\n\n.card .cardTitle[_v-b32fc110] {\n  background: #fff;\n  color: #333;\n  padding-left: .2rem;\n  height: .85rem;\n  line-height: .85rem;\n  font-weight: 700;\n  font-size: .36rem; }\n\n.card .page-list[_v-b32fc110] {\n  padding-bottom: .94rem; }\n\n.card ul[_v-b32fc110] {\n  width: 6rem;\n  padding: 0px .2rem; }\n  .card ul li[_v-b32fc110] {\n    width: 100%;\n    margin-bottom: .2rem;\n    border-bottom: dashed #ccc 1px; }\n    .card ul li .bigbox[_v-b32fc110] {\n      width: 6rem; }\n      .card ul li .bigbox span[_v-b32fc110] {\n        color: #8f8f8f;\n        display: inline-block;\n        padding: .1rem .05rem .1rem 0;\n        font-size: .24rem; }\n      .card ul li .bigbox img[_v-b32fc110] {\n        width: 6rem;\n        height: 3rem; }\n      .card ul li .bigbox .hits[_v-b32fc110] {\n        font-size: .18rem; }\n        .card ul li .bigbox .hits i[_v-b32fc110] {\n          font-size: .24rem; }\n    .card ul li .midbox[_v-b32fc110] {\n      width: 6rem; }\n      .card ul li .midbox img[_v-b32fc110] {\n        width: 1.94rem;\n        height: 1.23rem;\n        padding-top: .2rem; }\n      .card ul li .midbox span[_v-b32fc110] {\n        display: inline-block;\n        float: left; }\n      .card ul li .midbox .imgmid[_v-b32fc110] {\n        padding: 0.2rem .088rem 0 .088rem; }\n      .card ul li .midbox .source[_v-b32fc110] {\n        color: #8f8f8f;\n        display: inline-block;\n        padding: .1rem .05rem .1rem 0;\n        font-size: .24rem; }\n      .card ul li .midbox .hits[_v-b32fc110] {\n        color: #8f8f8f;\n        display: inline-block;\n        padding: .1rem .05rem .1rem 0;\n        font-size: .18rem; }\n    .card ul li .title[_v-b32fc110] {\n      font-size: .3rem; }\n    .card ul li .descBox[_v-b32fc110] {\n      width: 69%;\n      min-height: 1rem;\n      float: left; }\n      .card ul li .descBox .title[_v-b32fc110] {\n        min-height: 1rem;\n        font-size: .3rem; }\n      .card ul li .descBox .source[_v-b32fc110] {\n        font-size: .24rem;\n        color: #8f8f8f;\n        line-height: .4rem; }\n      .card ul li .descBox .hits[_v-b32fc110] {\n        float: right;\n        font-size: .18rem; }\n    .card ul li .img-small[_v-b32fc110] {\n      float: right;\n      width: 25%;\n      height: 1.2rem; }\n    .card ul li a[_v-b32fc110] {\n      display: inline-block;\n      width: 100%; }\n    .card ul li h2[_v-b32fc110] {\n      padding-bottom: .2rem;\n      display: inline-block;\n      font-size: .3rem;\n      width: 90%;\n      float: left; }\n    .card ul li .hits[_v-b32fc110] {\n      font-size: .2rem;\n      width: 10%;\n      float: right;\n      text-align: right;\n      color: #8f8f8f; }\n      .card ul li .hits i[_v-b32fc110] {\n        font-size: .24rem; }\n", ""]);

	// exports


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vueSwipe = __webpack_require__(194);

	var _homeShell = __webpack_require__(195);

	var _homeShell2 = _interopRequireDefault(_homeShell);

	var _searchArticleItem = __webpack_require__(205);

	var _searchArticleItem2 = _interopRequireDefault(_searchArticleItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            'carousel': [{ "pic": "http://www.ey99.com/file/upload/201609/30/225028701.jpg", "title": "中国生命电子学会年会", "url": "" }, { "pic": "http://www.ey99.com/file/upload/201609/30/225103531.jpg", "title": "第十三届中医药博览会", "url": "" }, { "pic": "http://www.ey99.com/file/upload/201609/08/085935452830.jpg", "title": "博性康药膜", "url": "" }],
	            'getparams': { url: "22222" },
	            'currentview': _searchArticleItem2.default
	        };
	    },

	    components: {
	        'swipe': _vueSwipe.Swipe,
	        'swipe-item': _vueSwipe.SwipeItem,
	        'home-shell': _homeShell2.default

	    },
	    created: function created() {
	        this.setGetParams();
	    },

	    filters: {
	        dsubstr: function dsubstr(title, length) {
	            return title.substr(0, length);
	        }
	    },
	    methods: {
	        setGetParams: function setGetParams() {
	            var url = "http://www.ey99.com/api/mobile/article.php";
	            var option = { params: { catid: 331 } };
	            this.getparams = { url: url, option: option };
	            console.log(this.getparams);
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
	//             background: #fff;
	//             color: #333;
	//             padding-left: .2rem;
	//             height: .85rem;
	//             line-height: .85rem;
	//             font-weight: 700;
	//             font-size: .36rem;
	//         }
	//         .page-list{
	//             padding-bottom:.94rem;
	//         }
	//         ul{
	//             width:6rem;
	//             padding:0px .2rem;
	//             li{
	//                 width: 100%;
	//                 margin-bottom:.2rem;
	//                 border-bottom:dashed #ccc 1px;
	//                 .bigbox{
	//                     width: 6rem;
	//                      span{
	//                        color: #8f8f8f;
	//                        display: inline-block;
	//                        padding: .1rem .05rem .1rem 0;
	//                        font-size: .24rem; 
	//                     }
	//                     img{
	//                         width: 6rem;
	//                         height: 3rem;
	//                     }
	//                     .hits{
	//                          font-size: .18rem;
	//                         i{
	//                             font-size: .24rem;
	//                         }
	//                     }
	//                 }
	//                 .midbox{
	//                     width: 6rem;
	//                     img{
	//                         width: 1.94rem;
	//                         height: 1.23rem;
	//                         padding-top: .2rem; 
	//                     }
	//                     span{
	//                          display:inline-block;
	//                          float: left;
	//                     }
	//                     .imgmid{
	//                          padding: 0.2rem .088rem 0 .088rem;
	//                     }
	//                     .source{
	//                        color: #8f8f8f;
	//                        display: inline-block;
	//                        padding: .1rem .05rem .1rem 0;
	//                        font-size: .24rem; 
	//                     }
	//                     .hits{
	//                        color: #8f8f8f;
	//                        display: inline-block;
	//                        padding: .1rem .05rem .1rem 0;
	//                        font-size: .18rem; 
	//                     }
	//                 }
	//                 .title{
	//
	//                     font-size: .3rem;
	//                 }
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
	//                 .img-small{
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
	//
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
	// <template>
	//   <div >
	//       <div slot="content" >
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
	//             <div class="card">
	//                 <h2 class="cardTitle">今日推荐</h2>
	//                 <home-shell class="page-list" type="21" :getparams="getparams" ></home-shell>
	//             </div>
	//
	//       </div>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSwipe=e():t.VueSwipe=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SwipeItem=e.Swipe=void 0;var s=n(7),a=i(s),r=n(6),o=i(r);e.Swipe=a["default"],e.SwipeItem=o["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"mt-swipe-item",mounted:function(){this.$parent&&this.$parent.swipeItemCreated(this)},destroyed:function(){this.$parent&&this.$parent.swipeItemDestroyed(this)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),s=n(3);e["default"]={name:"mt-swipe",created:function(){this.dragState={}},data:function(){return{ready:!1,dragging:!1,userScrolling:!1,animating:!1,index:0,pages:[],timer:null,reInitTimer:null,noDrag:!1}},props:{speed:{type:Number,"default":300},auto:{type:Number,"default":3e3},continuous:{type:Boolean,"default":!0},showIndicators:{type:Boolean,"default":!0},noDragWhenSingle:{type:Boolean,"default":!0},prevent:{type:Boolean,"default":!1}},methods:{swipeItemCreated:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},swipeItemDestroyed:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},translate:function(t,e,n,s){var a=this,r=arguments;if(n){this.animating=!0,t.style.webkitTransition="-webkit-transform "+n+"ms ease-in-out",setTimeout(function(){t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},50);var o=!1,l=function(){o||(o=!0,a.animating=!1,t.style.webkitTransition="",t.style.webkitTransform="",s&&s.apply(a,r))};(0,i.once)(t,"webkitTransitionEnd",l),setTimeout(l,n+100)}else t.style.webkitTransition="",t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},reInitPages:function(){var t=this.$children;this.noDrag=1===t.length&&this.noDragWhenSingle;var e=[];this.index=0,t.forEach(function(t,n){e.push(t.$el),(0,s.removeClass)(t.$el,"is-active"),0===n&&(0,s.addClass)(t.$el,"is-active")}),this.pages=e},doAnimate:function(t,e){var n=this;if(0!==this.$children.length&&(e||!(this.$children.length<2))){var i,a,r,o,l,u=this.speed||300,d=this.index,c=this.pages,h=c.length;e?(i=e.prevPage,r=e.currentPage,a=e.nextPage,o=e.pageWidth,l=e.offsetLeft):(o=this.$el.clientWidth,r=c[d],i=c[d-1],a=c[d+1],this.continuous&&c.length>1&&(i||(i=c[c.length-1]),a||(a=c[0])),i&&(i.style.display="block",this.translate(i,-o)),a&&(a.style.display="block",this.translate(a,o)));var f,p=this.$children[d].$el;"prev"===t?(d>0&&(f=d-1),this.continuous&&0===d&&(f=h-1)):"next"===t&&(h-1>d&&(f=d+1),this.continuous&&d===h-1&&(f=0));var g=function(){if(void 0!==f){var t=n.$children[f].$el;(0,s.removeClass)(p,"is-active"),(0,s.addClass)(t,"is-active"),n.index=f}i&&(i.style.display=""),a&&(a.style.display="")};setTimeout(function(){"next"===t?(n.translate(r,-o,u,g),a&&n.translate(a,0,u)):"prev"===t?(n.translate(r,o,u,g),i&&n.translate(i,0,u)):(n.translate(r,0,u,g),"undefined"!=typeof l?(i&&l>0&&n.translate(i,-1*o,u),a&&0>l&&n.translate(a,o,u)):(i&&n.translate(i,-1*o,u),a&&n.translate(a,o,u)))},10)}},next:function(){this.doAnimate("next")},prev:function(){this.doAnimate("prev")},doOnTouchStart:function(t){if(!this.noDrag){var e=this.$el,n=this.dragState,i=t.touches[0];n.startTime=new Date,n.startLeft=i.pageX,n.startTop=i.pageY,n.startTopAbsolute=i.clientY,n.pageWidth=e.offsetWidth,n.pageHeight=e.offsetHeight;var s=this.$children[this.index-1],a=this.$children[this.index],r=this.$children[this.index+1];this.continuous&&this.pages.length>1&&(s||(s=this.$children[this.$children.length-1]),r||(r=this.$children[0])),n.prevPage=s?s.$el:null,n.dragPage=a?a.$el:null,n.nextPage=r?r.$el:null,n.prevPage&&(n.prevPage.style.display="block"),n.nextPage&&(n.nextPage.style.display="block")}},doOnTouchMove:function(t){if(!this.noDrag){var e=this.dragState,n=t.touches[0];e.currentLeft=n.pageX,e.currentTop=n.pageY,e.currentTopAbsolute=n.clientY;var i=e.currentLeft-e.startLeft,s=e.currentTopAbsolute-e.startTopAbsolute,a=Math.abs(i),r=Math.abs(s);if(5>a||a>=5&&r>=1.73*a)return void(this.userScrolling=!0);this.userScrolling=!1,t.preventDefault(),i=Math.min(Math.max(-e.pageWidth+1,i),e.pageWidth-1);var o=0>i?"next":"prev";e.prevPage&&"prev"===o&&this.translate(e.prevPage,i-e.pageWidth),this.translate(e.dragPage,i),e.nextPage&&"next"===o&&this.translate(e.nextPage,i+e.pageWidth)}},doOnTouchEnd:function(){if(!this.noDrag){var t=this.dragState,e=new Date-t.startTime,n=null,i=t.currentLeft-t.startLeft,s=t.currentTop-t.startTop,a=t.pageWidth,r=this.index,o=this.pages.length;if(300>e){var l=Math.abs(i)<5&&Math.abs(s)<5;(isNaN(i)||isNaN(s))&&(l=!0),l&&this.$children[this.index].$emit("tap")}300>e&&void 0===t.currentLeft||((300>e||Math.abs(i)>a/2)&&(n=0>i?"next":"prev"),this.continuous||(0===r&&"prev"===n||r===o-1&&"next"===n)&&(n=null),this.$children.length<2&&(n=null),this.doAnimate(n,{offsetLeft:i,pageWidth:t.pageWidth,prevPage:t.prevPage,currentPage:t.dragPage,nextPage:t.nextPage}),this.dragState={})}}},destroyed:function(){this.timer&&(clearInterval(this.timer),this.timer=null),this.reInitTimer&&(clearTimeout(this.reInitTimer),this.reInitTimer=null)},mounted:function(){var t=this;this.ready=!0,this.auto>0&&(this.timer=setInterval(function(){t.dragging||t.animating||t.next()},this.auto)),this.reInitPages();var e=this.$el;e.addEventListener("touchstart",function(e){t.prevent&&e.preventDefault(),t.animating||(t.dragging=!0,t.userScrolling=!1,t.doOnTouchStart(e))}),e.addEventListener("touchmove",function(e){t.dragging&&t.doOnTouchMove(e)}),e.addEventListener("touchend",function(e){return t.userScrolling?(t.dragging=!1,void(t.dragState={})):void(t.dragging&&(t.doOnTouchEnd(e),t.dragging=!1))})}}},function(t,e){"use strict";var n=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},i=function(t,e){if(!t||!e)return!1;if(-1!=e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1},s=function(t,e){if(t){for(var n=t.className,s=(e||"").split(" "),a=0,r=s.length;r>a;a++){var o=s[a];o&&(t.classList?t.classList.add(o):i(t,o)||(n+=" "+o))}t.classList||(t.className=n)}},a=function(t,e){if(t&&e){for(var s=e.split(" "),a=" "+t.className+" ",r=0,o=s.length;o>r;r++){var l=s[r];l&&(t.classList?t.classList.remove(l):i(t,l)&&(a=a.replace(" "+l+" "," ")))}t.classList||(t.className=n(a))}};t.exports={hasClass:i,addClass:s,removeClass:a}},function(t,e){"use strict";var n=function(){return document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)}}(),i=function(){return document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)}}(),s=function(t,e,s){var a=function r(){s&&s.apply(this,arguments),i(t,e,r)};n(t,e,a)};t.exports={on:n,off:i,once:s}},function(t,e){},function(t,e,n){var i,s;i=n(1);var a=n(8);s=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(s=i=i["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,n){var i,s;n(5),i=n(2);var a=n(9);s=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(s=i=i["default"]),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=i},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"mint-swipe-item"},[_t("default")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"mint-swipe"},[_h("div",{ref:"wrap",staticClass:"mint-swipe-items-wrap"},[_t("default")])," ",_h("div",{directives:[{name:"show",rawName:"v-show",value:showIndicators,expression:"showIndicators"}],staticClass:"mint-swipe-indicators"},[_l(pages,function(t,e){return _h("div",{staticClass:"mint-swipe-indicator","class":{"is-active":e===index}})})])])},staticRenderFns:[]}}])});

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(196)
	__vue_script__ = __webpack_require__(198)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\homeShell.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(223)
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
	  var id = "_v-90ea90b6/homeShell.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(197);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-90ea90b6&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./homeShell.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-90ea90b6&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./homeShell.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".page-container .page-items[_v-90ea90b6] {\n  background: #FFF; }\n", ""]);

	// exports


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _loading = __webpack_require__(170);

	var _loading2 = _interopRequireDefault(_loading);

	var _mintUi = __webpack_require__(142);

	var _noData = __webpack_require__(199);

	var _noData2 = _interopRequireDefault(_noData);

	var _searchArticleItem = __webpack_require__(205);

	var _searchArticleItem2 = _interopRequireDefault(_searchArticleItem);

	var _searchInvestItem = __webpack_require__(218);

	var _searchInvestItem2 = _interopRequireDefault(_searchInvestItem);

	var _bus = __webpack_require__(215);

	var _bus2 = _interopRequireDefault(_bus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        currentview: Object,
	        getparams: Object,
	        collect: {
	            type: Boolean,
	            default: false
	        },
	        issearchpage: {
	            default: false
	        },
	        type: {
	            default: 0
	        }
	    },
	    data: function data() {
	        return {
	            allLoaded: false,
	            loading: true,
	            items: null,
	            page: 0,
	            noData: false,
	            emptyresource: false
	        };
	    },

	    components: {
	        'load': _loading2.default,
	        noData: _noData2.default,
	        "article-item": _searchArticleItem2.default,
	        "invest-item": _searchInvestItem2.default
	    },
	    updated: function updated() {},
	    created: function created() {
	        var _this2 = this;

	        _bus2.default.$on('refresh', function () {
	            _this2.loadData(false, true);
	        });
	        this.loadData();
	    },
	    mounted: function mounted() {},


	    methods: {
	        addTodo: function addTodo() {

	            console.log(2222);
	        },
	        loadTop: function loadTop(id) {
	            this.loadData(id, true);
	        },
	        loadBottom: function loadBottom(id) {
	            //console.log(this._uid); 
	            console.log(id);
	            this.loadData(id);
	        },
	        loadData: function loadData(id) {
	            var _this3 = this;

	            var refresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            if (refresh) {
	                this.page = 0;
	                if (id) this.$refs.loadmore.onTopLoaded(id);
	            }

	            var url = this.getparams.url;
	            var option = this.getparams.option;
	            var _this = this;
	            this.page += 1;

	            option.params.page = this.page;
	            this.$http.get(url, option).then(function (res) {
	                console.log(res);
	                if (res.body.list.length) {
	                    if (_this.page == 1) {
	                        _this.items = res.body.list;
	                    } else {
	                        for (var i = 0; i < res.body.list.length; i++) {
	                            _this.items.push(res.body.list[i]);
	                        }
	                    }

	                    if (id) _this3.$refs.loadmore.onBottomLoaded(id);
	                    _this.loading = false;
	                } else {
	                    //if(id) this.$refs.loadmore.onBottomLoaded(id);              
	                    _this.allLoaded = true;
	                    if (_this.page == 1) {
	                        _this.items = null;
	                    }
	                    _this.noData = true;
	                    setTimeout(function () {
	                        _this.noData = false;

	                        if (id) _this.$refs.loadmore.onBottomLoaded(id);
	                    }, 1000);
	                    _this.emptyresource = true;
	                }

	                _mintUi.Indicator.close();
	            }, function (err) {});
	        }
	    }
	};
	// </script>
	// <style lang="sass" scoped>
	//     .page-container{
	//         .page-items{
	//             background: #FFF;
	//         }
	//     }
	// </style>
	// /**
	//  *  Created by fangbao on 12/03/2016
	//  *
	//  *  公共上拉加载组件
	//  *
	//  */
	//
	// <template>
	//     <div class="page-container">
	//         <load></load>
	//
	//         <div v-if="!loading" class="page-items">
	//             <!--  -->
	//             <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" bottom-pull-text="上拉加载"  ref="loadmore">
	//
	//
	//                 <invest-item :collect="collect" v-if="type == 22" :items="items"></invest-item>
	//
	//                 <article-item :collect="collect" v-if="type == 21" :items="items"></article-item>
	//
	//
	//                 <div v-if="noData" slot="bottom" class="mint-loadmore-bottom">
	//                     没有了
	//                 </div>
	//             </mt-loadmore>
	//         </div>
	//
	//         <no-data v-if="issearchpage && emptyresource && page == 1"></no-data>
	//
	//         <div class="clear"></div>
	//     </div>
	//
	// </template>
	// <script>

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(200)
	__vue_script__ = __webpack_require__(203)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\noData.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(204)
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
	  var id = "_v-2003d6a7/noData.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(201);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-2003d6a7&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./noData.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-2003d6a7&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./noData.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\t.searchless[_v-2003d6a7]{\n\t\n       \tbackground: url(" + __webpack_require__(202) + ");\n\t\twidth: 4rem;\n\t\theight: 4rem;\n\t\tbackground-size:cover;\n\t\tmargin: 14% auto ;\n\t}\n", ""]);

	// exports


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/xiaoren.png";

/***/ },
/* 203 */
/***/ function(module, exports) {

	// <template>
	// 	<div class="searchless"></div>
	// </template>
	// <script>
	// </script>
	//
	// <style scoped>
	// 	.searchless{
	//
	//        	background: url("../imgs/xiaoren.png");
	// 		width: 4rem;
	// 		height: 4rem;
	// 		background-size:cover;
	// 		margin: 14% auto ;
	// 	}
	// </style>
	"use strict";

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"searchless\" _v-2003d6a7=\"\"></div>\n";

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(206)
	__vue_script__ = __webpack_require__(208)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\searchArticleItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(217)
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
	  var id = "_v-7214e175/searchArticleItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(207);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-7214e175&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./searchArticleItem.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-7214e175&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./searchArticleItem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".searItems .cardTitle[_v-7214e175] {\n  color: #333;\n  padding-left: .2rem;\n  height: .85rem;\n  line-height: .85rem;\n  font-weight: 700;\n  font-size: .36rem; }\n\n.searItems ul[_v-7214e175] {\n  width: 6rem;\n  padding: 0px .2rem; }\n  .searItems ul li[_v-7214e175] {\n    width: 100%;\n    padding: .14rem 0;\n    border-bottom: solid #fafafa 1px;\n    position: relative; }\n    .searItems ul li .collect-del-botton[_v-7214e175] {\n      position: absolute;\n      right: 0; }\n    .searItems ul li .bigbox[_v-7214e175] {\n      width: 6rem; }\n      .searItems ul li .bigbox .title[_v-7214e175] {\n        padding-bottom: .2rem; }\n      .searItems ul li .bigbox span[_v-7214e175] {\n        color: #8f8f8f;\n        display: inline-block;\n        padding: .1rem .05rem .1rem 0;\n        font-size: .24rem; }\n      .searItems ul li .bigbox img[_v-7214e175] {\n        width: 6rem;\n        height: 3rem; }\n      .searItems ul li .bigbox .hits[_v-7214e175] {\n        font-size: .18rem; }\n        .searItems ul li .bigbox .hits i[_v-7214e175] {\n          font-size: .24rem; }\n    .searItems ul li .midbox[_v-7214e175] {\n      width: 6rem; }\n      .searItems ul li .midbox img[_v-7214e175] {\n        width: 1.94rem;\n        height: 1.23rem;\n        padding-top: .2rem; }\n      .searItems ul li .midbox span[_v-7214e175] {\n        display: inline-block;\n        float: left; }\n      .searItems ul li .midbox .imgmid[_v-7214e175] {\n        padding: 0.2rem .088rem 0 .088rem; }\n      .searItems ul li .midbox .source[_v-7214e175] {\n        color: #8f8f8f;\n        display: inline-block;\n        padding: .1rem .05rem .1rem 0;\n        font-size: .24rem; }\n      .searItems ul li .midbox .hits[_v-7214e175] {\n        color: #8f8f8f;\n        display: inline-block;\n        padding: .1rem .05rem .1rem 0;\n        font-size: .18rem; }\n    .searItems ul li .title[_v-7214e175] {\n      font-size: .3rem; }\n    .searItems ul li .descBox[_v-7214e175] {\n      width: 69%;\n      min-height: 1rem;\n      float: left; }\n      .searItems ul li .descBox .title[_v-7214e175] {\n        min-height: 1rem;\n        font-size: .3rem; }\n      .searItems ul li .descBox .source[_v-7214e175] {\n        font-size: .24rem;\n        color: #8f8f8f;\n        line-height: .4rem; }\n      .searItems ul li .descBox .hits[_v-7214e175] {\n        float: right;\n        font-size: .18rem; }\n    .searItems ul li .img-small[_v-7214e175] {\n      float: right;\n      width: 25%;\n      height: 1.2rem; }\n    .searItems ul li a[_v-7214e175] {\n      display: inline-block;\n      width: 100%; }\n    .searItems ul li h2[_v-7214e175] {\n      padding-bottom: .1rem;\n      display: inline-block;\n      font-size: .3rem;\n      width: 100%;\n      float: left; }\n    .searItems ul li p[_v-7214e175] {\n      width: 100%;\n      display: inline-block; }\n      .searItems ul li p .copyfrom[_v-7214e175] {\n        font-size: .24rem;\n        color: #8f8f8f;\n        line-height: .36rem; }\n    .searItems ul li .hits[_v-7214e175] {\n      font-size: .2rem;\n      float: right;\n      text-align: right;\n      color: #8f8f8f; }\n      .searItems ul li .hits i[_v-7214e175] {\n        font-size: .24rem; }\n", ""]);

	// exports


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _collectDelButton = __webpack_require__(209);

	var _collectDelButton2 = _interopRequireDefault(_collectDelButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        items: {},
	        collect: {
	            type: Boolean,
	            default: false
	        }
	    },
	    components: {
	        collectDelButton: _collectDelButton2.default
	    },
	    mounted: function mounted() {
	        console.log(this.items);
	    },

	    methods: {},
	    filters: {
	        dsubstr: function dsubstr(title, length) {
	            return title.substr(0, length);
	        }
	    }
	};
	// </script>
	// <style lang="sass" scoped>
	//   .searItems{
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
	//                 padding:.14rem 0;
	//
	//                 border-bottom:solid #fafafa 1px;
	//                 position:relative;
	//                 .collect-del-botton{
	//                   position:absolute;
	//                   right:0;
	//                 }
	//                 .bigbox{
	//                     width: 6rem;
	//                     .title{
	//                       padding-bottom: .2rem;
	//                     }
	//                     span{
	//                        color: #8f8f8f;
	//                        display: inline-block;
	//                        padding: .1rem .05rem .1rem 0;
	//                        font-size: .24rem; 
	//                     }
	//                     img{
	//                         width: 6rem;
	//                         height: 3rem;
	//                     }
	//                     .hits{
	//                          font-size: .18rem;
	//                         i{
	//                             font-size: .24rem;
	//                         }
	//                     }
	//                 }
	//                 .midbox{
	//                     width: 6rem;
	//                     img{
	//                         width: 1.94rem;
	//                         height: 1.23rem;
	//                         padding-top: .2rem; 
	//                     }
	//                     span{
	//                          display:inline-block;
	//                          float: left;
	//                     }
	//                     .imgmid{
	//                          padding: 0.2rem .088rem 0 .088rem;
	//                     }
	//                     .source{
	//                        color: #8f8f8f;
	//                        display: inline-block;
	//                        padding: .1rem .05rem .1rem 0;
	//                        font-size: .24rem; 
	//                     }
	//                     .hits{
	//                        color: #8f8f8f;
	//                        display: inline-block;
	//                        padding: .1rem .05rem .1rem 0;
	//                        font-size: .18rem; 
	//                     }
	//                 }
	//                 .title{
	//
	//                     font-size: .3rem;
	//                 }
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
	//                 .img-small{
	//                     float:right;
	//                     width:25%;
	//                     height:1.2rem;
	//                 }
	//                 a{
	//                     display: inline-block;
	//                     width: 100%;
	//                 }
	//                 h2{
	//                     padding-bottom:.1rem;
	//                     display: inline-block;
	//                     font-size:.3rem;
	//                     width:100%;
	//                     float:left;
	//
	//                 }
	//                 p{
	//                   width:100%;
	//                   display: inline-block;
	//                   .copyfrom{
	//                      font-size: .24rem;
	//                      color: #8f8f8f;
	//                      line-height: .36rem;
	//                   }
	//                 }
	//                 .hits{
	//                     font-size:.2rem;
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
	//
	// </style>
	// <template>
	//    <div class="searItems">
	//         <ul>                
	//           <li v-for="(item,index) in items">
	//               <collect-del-button v-if="collect" :items="items" :type="21" :index="index" class="collect-del-botton"></collect-del-button>  
	//               <template v-if="item.thumb" >
	//               <router-link  :to="{name:'newsDetail',query:{id:item.itemid}}" >
	//                  <template  v-if="item.level !== '8' && item.level !== '9'">  
	//                       <div class="descBox">
	//                           <div class="title">{{item.title | dsubstr(20)}}</div>
	//                           <div class="footnote">
	//                               <span class="source">{{item.copyfrom ? item.copyfrom : "当代医药市场网" + item.level}}</span>
	//                               <span class="hits"><i class="iconfont">&#xf0048;</i>{{item.hits}}</span>
	//                           </div>
	//                       </div>
	//                       <span class="img" >
	//                           <img :src="item.thumb" class="img-small"/>
	//                       </span>
	//                   </template>  
	//                   <template v-else>
	//                       <template v-if="item.level == '8'">                                                 
	//                       <div class="midbox">
	//                           <div class=title>{{item.title}}<div>
	//                           <span><img :src="item.thumb"/></span>
	//                           <span><img class="imgmid" :src="item.thumb1"/></span>
	//                           <span><img :src="item.thumb2"/></span>
	//                           <i class="source">{{item.copyfrom}}</i>
	//                           <i class="hits"><i class="iconfont">&#xf0048;</i>{{item.hits}}</i>
	//                        </div>                           
	//                       </template>  
	//                       <template v-if="item.level == '9'">                            
	//                            <div class="bigbox">
	//                               <div class="title">
	//                                 {{item.title}}
	//                               </div>
	//                              <img :src="item.thumb"/>
	//                              <span>{{item.copyfrom}}</span>
	//                              <span class="hits"><i class="iconfont">&#xf0048;</i>{{item.hits}}</span>
	//                           </div>                  
	//                       </template> 
	//                   </template>
	//               </router-link >
	//               </template>
	//               <template  v-else >
	//                   <router-link :to="{name:'newsDetail',query:{id:item.itemid}}" >
	//                       <h2 class="title">{{item.title | dsubstr(16)}}</h2>
	//                       <p>
	//                       <span class="copyfrom">{{item.copyfrom}}</span>
	//                       <span class="hits">
	//                           <i class="iconfont">&#xf0048;</i>{{item.hits}}
	//                       </span>
	//                       </p>
	//                   </router-link >
	//               </template>
	//           </li>
	//         </ul>
	//     </div>
	//
	// </template>
	// <script>

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(210)
	__vue_script__ = __webpack_require__(212)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\collectDelButton.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(216)
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
	  var id = "_v-e4f8b4a2/collectDelButton.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(211);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-e4f8b4a2&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./collectDelButton.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-e4f8b4a2&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./collectDelButton.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n.del-button[_v-e4f8b4a2]{\n\tdisplay: inline-block;\n}\n", ""]);

	// exports


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mintUi = __webpack_require__(142);

	var _store = __webpack_require__(213);

	var _store2 = _interopRequireDefault(_store);

	var _bus = __webpack_require__(215);

	var _bus2 = _interopRequireDefault(_bus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        type: Number,
	        index: Number,
	        items: Array
	    },
	    data: function data() {
	        return {
	            store: _store2.default,
	            data: null
	        };
	    },
	    computed: function computed() {
	        newitems: {
	            if (this.data) {
	                return this.data;
	            } else {
	                return this.items;
	            }
	        }
	    },

	    components: {
	        'mt-button': _mintUi.Button
	    },

	    methods: {
	        refresh: function refresh() {
	            _bus2.default.$emit('refresh');
	        },
	        delCollect: function delCollect() {
	            var _this = this;

	            var url = "http://www.ey99.com/api/mobile/mycollect.php";
	            var option = { emulateJSON: true };
	            var body = { linkurl: this.items[this.index].linkurl, type: this.type, action: "del", token: localStorage.token };
	            this.$http.post(url, body, option).then(function (res) {
	                if (res.body.query_res) {
	                    _this.refresh();
	                }
	            });
	        }
	    }

	};
	// </script>
	// <style scoped>
	// 	.del-button{
	// 		display: inline-block;
	// 	}
	// </style>
	// <template>
	// 	<div class="del-button">
	// 		<mt-button type="danger" v-on:click="delCollect"  v-if="store.state.collectDelIsOpen">删除</mt-button>
	// 	</div>
	// </template>
	// <script>

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(214);

	var _vuex2 = _interopRequireDefault(_vuex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vuex2.default);
	var state = {
	  collectDelIsOpen: false
	};

	var mutations = {
	  collectDel: function collectDel(state) {
	    state.collectDelIsOpen = !state.collectDelIsOpen;
	  }
	};

	var actions = {};

	var getters = {};

	// A Vuex instance is created by combining the state, mutations, actions,
	// and getters.
	exports.default = new _vuex2.default.Store({
	  state: state,
	  getters: getters,
	  actions: actions,
	  mutations: mutations
	});

/***/ },
/* 214 */,
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new _vue2.default();

/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n<div class=\"del-button\" _v-e4f8b4a2=\"\">\n\t<mt-button type=\"danger\" v-on:click=\"delCollect\" v-if=\"store.state.collectDelIsOpen\" _v-e4f8b4a2=\"\">删除</mt-button>\n</div>\n";

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"searItems\" _v-7214e175=\"\">\n     <ul _v-7214e175=\"\">                \n       <li v-for=\"(item,index) in items\" _v-7214e175=\"\">\n           <collect-del-button v-if=\"collect\" :items=\"items\" :type=\"21\" :index=\"index\" class=\"collect-del-botton\" _v-7214e175=\"\"></collect-del-button>  \n           <template v-if=\"item.thumb\">\n           <router-link :to=\"{name:'newsDetail',query:{id:item.itemid}}\" _v-7214e175=\"\">\n              <template v-if=\"item.level !== '8' &amp;&amp; item.level !== '9'\">  \n                   <div class=\"descBox\" _v-7214e175=\"\">\n                       <div class=\"title\" _v-7214e175=\"\">{{item.title | dsubstr(20)}}</div>\n                       <div class=\"footnote\" _v-7214e175=\"\">\n                           <span class=\"source\" _v-7214e175=\"\">{{item.copyfrom ? item.copyfrom : \"当代医药市场网\" + item.level}}</span>\n                           <span class=\"hits\" _v-7214e175=\"\"><i class=\"iconfont\" _v-7214e175=\"\">󰁈</i>{{item.hits}}</span>\n                       </div>\n                   </div>\n                   <span class=\"img\" _v-7214e175=\"\">\n                       <img :src=\"item.thumb\" class=\"img-small\" _v-7214e175=\"\">\n                   </span>\n               </template>  \n               <template v-else=\"\">\n                   <template v-if=\"item.level == '8'\">                                                 \n                   <div class=\"midbox\" _v-7214e175=\"\">\n                       <div class=\"title\" _v-7214e175=\"\">{{item.title}}<div _v-7214e175=\"\">\n                       <span _v-7214e175=\"\"><img :src=\"item.thumb\" _v-7214e175=\"\"></span>\n                       <span _v-7214e175=\"\"><img class=\"imgmid\" :src=\"item.thumb1\" _v-7214e175=\"\"></span>\n                       <span _v-7214e175=\"\"><img :src=\"item.thumb2\" _v-7214e175=\"\"></span>\n                       <i class=\"source\" _v-7214e175=\"\">{{item.copyfrom}}</i>\n                       <i class=\"hits\" _v-7214e175=\"\"><i class=\"iconfont\" _v-7214e175=\"\">󰁈</i>{{item.hits}}</i>\n                    </div>                           \n                   </div></div></template>  \n                   <template v-if=\"item.level == '9'\">                            \n                        <div class=\"bigbox\" _v-7214e175=\"\">\n                           <div class=\"title\" _v-7214e175=\"\">\n                             {{item.title}}\n                           </div>\n                          <img :src=\"item.thumb\" _v-7214e175=\"\">\n                          <span _v-7214e175=\"\">{{item.copyfrom}}</span>\n                          <span class=\"hits\" _v-7214e175=\"\"><i class=\"iconfont\" _v-7214e175=\"\">󰁈</i>{{item.hits}}</span>\n                       </div>                  \n                   </template> \n               </template>\n           </router-link>\n           </template>\n           <template v-else=\"\">\n               <router-link :to=\"{name:'newsDetail',query:{id:item.itemid}}\" _v-7214e175=\"\">\n                   <h2 class=\"title\" _v-7214e175=\"\">{{item.title | dsubstr(16)}}</h2>\n                   <p _v-7214e175=\"\">\n                   <span class=\"copyfrom\" _v-7214e175=\"\">{{item.copyfrom}}</span>\n                   <span class=\"hits\" _v-7214e175=\"\">\n                       <i class=\"iconfont\" _v-7214e175=\"\">󰁈</i>{{item.hits}}\n                   </span>\n                   </p>\n               </router-link>\n           </template>\n       </li>\n     </ul>\n </div>\n\n";

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(219)
	__vue_script__ = __webpack_require__(221)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\searchInvestItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(222)
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
	  var id = "_v-8b110ae8/searchInvestItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(220);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-8b110ae8&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./searchInvestItem.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-8b110ae8&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./searchInvestItem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".item[_v-8b110ae8] {\n  margin: 0px .3rem;\n  padding: .2rem 0px;\n  width: 5.8rem;\n  border-bottom: 1px solid #fafafa;\n  position: relative; }\n  .item .collect-del-botton[_v-8b110ae8] {\n    position: absolute;\n    right: 0; }\n\n.item_left[_v-8b110ae8] {\n  width: 4rem;\n  float: left; }\n\n.item_tit[_v-8b110ae8] {\n  padding-right: .2rem;\n  padding-top: .1rem;\n  font-size: .3rem;\n  height: .8rem; }\n\n.item_img[_v-8b110ae8] {\n  width: 1.8rem;\n  height: 1.2rem; }\n\n.item_cat[_v-8b110ae8] {\n  border: 1px solid #bae3fa;\n  color: #bae3fa;\n  border-radius: .05rem;\n  font-size: .16rem;\n  padding: 0 .05rem;\n  height: .24rem;\n  line-height: .30rem;\n  display: inline-block;\n  margin-right: .14rem; }\n\n.item_hit[_v-8b110ae8] {\n  color: #8a8a8a;\n  font-size: .22rem;\n  height: .34rem;\n  line-height: .34rem;\n  margin-right: .26rem;\n  display: inline-block; }\n\n.item_date[_v-8b110ae8] {\n  height: .34rem;\n  line-height: .34rem;\n  color: #8a8a8a;\n  font-size: .22rem;\n  margin-right: .26rem;\n  display: inline-block; }\n", ""]);

	// exports


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _collectDelButton = __webpack_require__(209);

	var _collectDelButton2 = _interopRequireDefault(_collectDelButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        items: {},
	        collect: {
	            type: Boolean,
	            default: false
	        }
	    },
	    computed: {
	        del: function del() {
	            return true;
	        }
	    },
	    data: function data() {
	        return {};
	    },

	    components: {
	        collectDelButton: _collectDelButton2.default
	    },

	    mounted: function mounted() {},

	    methods: {},
	    filters: {
	        dSubstr: function dSubstr(title, length) {
	            return title.substr(0, length);
	        }
	    },
	    events: {}

	};
	// </script>
	//
	//
	// <style lang="sass" scoped>
	//     .item{
	//         margin:0px .3rem;
	//         padding:.2rem 0px;
	//         width:5.8rem;
	//         border-bottom: 1px solid #fafafa;
	//         position: relative;
	//         .collect-del-botton{
	//             position:absolute;
	//             right:0;
	//         }
	//     }
	//
	//     .item_left{
	//         width:4rem;
	//         float:left;
	//     }
	//     .item_tit{
	//         padding-right:.2rem;
	//         padding-top:.1rem;
	//         font-size: .3rem;
	//         height:.8rem;
	//     }
	//     .item_img{
	//         width: 1.8rem;
	//         height: 1.2rem;
	//     }
	//     .item_cat{
	//         border: 1px solid #bae3fa;
	//         color: #bae3fa;
	//         border-radius: .05rem;
	//         font-size: .16rem;
	//         padding: 0 .05rem;
	//         height: .24rem;
	//         line-height: .30rem;
	//         display: inline-block;
	//         margin-right: .14rem;
	//     }
	//     .item_hit{
	//         color: #8a8a8a;
	//         font-size: .22rem;
	//         height: .34rem;
	//         line-height: .34rem;
	//         margin-right: .26rem;
	//         display: inline-block;
	//     }
	//     .item_date{
	//         height: .34rem;
	//         line-height: .34rem;
	//         color: #8a8a8a;
	//         font-size: .22rem;
	//         margin-right: .26rem;
	//         display: inline-block;
	//     }
	// </style>
	//
	// <!--conten1-->
	// <template>
	//     <!-- content1-->
	//     <div id="items">
	//     <div class="item" v-for="(item,index) in items">
	//         <collect-del-button v-if="collect" :items.sync="items" :type="22" :index="index" class="collect-del-botton"></collect-del-button>   
	//         <router-link  :to="{ name: 'investmentShow', query:{id:item.itemid}, params: { item : item }}" >
	//             <div class="item_left">
	//                 <div class="item_tit">
	//                     {{item.title | dSubstr(20) }}
	//                 </div>
	//
	//                 <span class="item_hit">{{item.hits}}点击</span>
	//                 <span class="item_date">{{item.editdate}}</span>
	//             </div>
	//             <img  v-lazy="item.sptp[0]" class="item_img" />
	//             <div class="clear"></div>
	//         </router-link>
	//     </div>
	//     </div>
	//
	// </template>
	//
	//
	// <script>

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = "\n\n\n<!-- content1-->\n<div id=\"items\" _v-8b110ae8=\"\">\n<div class=\"item\" v-for=\"(item,index) in items\" _v-8b110ae8=\"\">\n    <collect-del-button v-if=\"collect\" :items.sync=\"items\" :type=\"22\" :index=\"index\" class=\"collect-del-botton\" _v-8b110ae8=\"\"></collect-del-button>   \n    <router-link :to=\"{ name: 'investmentShow', query:{id:item.itemid}, params: { item : item }}\" _v-8b110ae8=\"\">\n        <div class=\"item_left\" _v-8b110ae8=\"\">\n            <div class=\"item_tit\" _v-8b110ae8=\"\">\n                {{item.title | dSubstr(20) }}\n            </div>\n\n            <span class=\"item_hit\" _v-8b110ae8=\"\">{{item.hits}}点击</span>\n            <span class=\"item_date\" _v-8b110ae8=\"\">{{item.editdate}}</span>\n        </div>\n        <img v-lazy=\"item.sptp[0]\" class=\"item_img\" _v-8b110ae8=\"\">\n        <div class=\"clear\" _v-8b110ae8=\"\"></div>\n    </router-link>\n</div>\n</div>\n\n";

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n<div class=\"page-container\" _v-90ea90b6=\"\">\n    <load _v-90ea90b6=\"\"></load>\n\n    <div v-if=\"!loading\" class=\"page-items\" _v-90ea90b6=\"\">\n        <!--  -->\n        <mt-loadmore :top-method=\"loadTop\" :bottom-method=\"loadBottom\" :bottom-all-loaded=\"allLoaded\" bottom-pull-text=\"上拉加载\" ref=\"loadmore\" _v-90ea90b6=\"\">\n            \n\n            <invest-item :collect=\"collect\" v-if=\"type == 22\" :items=\"items\" _v-90ea90b6=\"\"></invest-item>\n\n            <article-item :collect=\"collect\" v-if=\"type == 21\" :items=\"items\" _v-90ea90b6=\"\"></article-item>\n         \n            \n            <div v-if=\"noData\" slot=\"bottom\" class=\"mint-loadmore-bottom\" _v-90ea90b6=\"\">\n                没有了\n            </div>\n        </mt-loadmore>\n    </div>\n  \n    <no-data v-if=\"issearchpage &amp;&amp; emptyresource &amp;&amp; page == 1\" _v-90ea90b6=\"\"></no-data>\n   \n    <div class=\"clear\" _v-90ea90b6=\"\"></div>\n</div>\n\n";

/***/ },
/* 224 */
/***/ function(module, exports) {

	module.exports = "\n<div _v-b32fc110=\"\">\n    <div slot=\"content\" _v-b32fc110=\"\">\n        <swipe class=\"my-swipe\" :speed=\"1000\" :show-indicators=\"false\" _v-b32fc110=\"\">\n\n            <swipe-item v-for=\"item in carousel\" _v-b32fc110=\"\">\n                <a :src=\"item.url\" _v-b32fc110=\"\">\n                    <img :src=\"item.pic\" _v-b32fc110=\"\">\n                    <span _v-b32fc110=\"\">{{item.title}}</span>\n                </a>\n            </swipe-item>\n\n        </swipe>\n\n          <div class=\"card\" _v-b32fc110=\"\">\n              <h2 class=\"cardTitle\" _v-b32fc110=\"\">今日推荐</h2>\n              <home-shell class=\"page-list\" type=\"21\" :getparams=\"getparams\" _v-b32fc110=\"\"></home-shell>\n          </div>\n\n    </div>\n</div>\n";

/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = "\n\n\n<div class=\"content\" _v-df052d0a=\"\">\n<my-header _v-df052d0a=\"\"></my-header>\n\n    <component :is=\"currentView\" :catid=\"catid\" _v-df052d0a=\"\">\n        <!-- 组件在 vm.currentview 变化时改变 -->\n    </component>\n\n</div>\n";

/***/ }
]));
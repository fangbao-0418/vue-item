webpackJsonp([1],{

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(184)
	__vue_script__ = __webpack_require__(186)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(212)
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

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.content[_v-df052d0a]{\n    height:100%;\n}\n", ""]);

	// exports


/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _header = __webpack_require__(187);

	var _header2 = _interopRequireDefault(_header);

	var _indexMain = __webpack_require__(192);

	var _indexMain2 = _interopRequireDefault(_indexMain);

	var _investment = __webpack_require__(130);

	var _investment2 = _interopRequireDefault(_investment);

	var _recommend = __webpack_require__(197);

	var _recommend2 = _interopRequireDefault(_recommend);

	var _health = __webpack_require__(204);

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

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(188)
	__vue_script__ = __webpack_require__(190)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(191)
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

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(189);
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

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".box[_v-33ab01ae] {\n  height: 1.44rem; }\n\n.wrap[_v-33ab01ae] {\n  width: 5.8rem;\n  margin: 0px .3rem; }\n\n.top[_v-33ab01ae] {\n  position: fixed;\n  top: 0px;\n  width: 6.4rem;\n  height: .84rem;\n  background: #ed1b23;\n  z-index: 999999; }\n\n.logo[_v-33ab01ae] {\n  width: 3rem;\n  height: 0.4rem;\n  display: inline-block;\n  background: url(" + __webpack_require__(110) + ") no-repeat;\n  background-size: 3rem .4rem;\n  margin-top: .22rem; }\n\n.search_bg[_v-33ab01ae] {\n  background: url(" + __webpack_require__(111) + ");\n  width: 2.61rem;\n  height: .5rem;\n  float: right;\n  margin-top: .16rem;\n  background-size: 2.61rem .5rem; }\n  .search_bg i[_v-33ab01ae] {\n    font-size: .24rem;\n    color: #8f8f8f;\n    margin-left: .5rem;\n    padding-top: .13rem;\n    display: inline-block; }\n\n.nav[_v-33ab01ae] {\n  width: 5.8rem;\n  height: .6rem;\n  padding: 0px .3rem;\n  position: fixed;\n  top: .84rem;\n  background-color: #f5f5f3;\n  z-index: 999999; }\n\n#nav-smartSetup[_v-33ab01ae] {\n  position: absolute;\n  z-index: 1;\n  margin-left: -.3rem;\n  padding-left: .1rem;\n  height: .6rem;\n  width: 5.4rem;\n  overflow: hidden; }\n\n#nav-smartSetup ul li[_v-33ab01ae] {\n  float: left;\n  line-height: .64rem;\n  font-size: .3rem;\n  padding: 0px .2rem;\n  height: .6rem; }\n\n#nav-smartSetup ul .cur[_v-33ab01ae] {\n  font-size: .32rem;\n  color: #ed1b23;\n  float: left;\n  line-height: .64rem;\n  padding: 0px .2rem; }\n\n#scroller[_v-33ab01ae] {\n  position: absolute;\n  z-index: 1;\n  -webkit-tap-highlight-color: transparent;\n  height: 100%;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  -o-text-size-adjust: none;\n  text-size-adjust: none; }\n\n#scroller ul[_v-33ab01ae] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  width: 110%;\n  line-height: 4rem;\n  height: .6rem;\n  text-align: center; }\n\n.line_a[_v-33ab01ae] {\n  background: url(" + __webpack_require__(112) + ");\n  display: inline-block;\n  width: .14rem;\n  height: .6rem;\n  background-size: .14rem .6rem;\n  position: absolute;\n  top: 0px;\n  right: .67rem;\n  z-index: 999; }\n\n.plus_a[_v-33ab01ae] {\n  position: absolute;\n  right: .3rem;\n  background: url(" + __webpack_require__(113) + ");\n  display: inline-block;\n  width: .37rem;\n  height: .36rem;\n  float: right;\n  margin-top: .10rem;\n  cursor: pointer;\n  background-size: .37rem .36rem;\n  z-index: 999; }\n", ""]);

	// exports


/***/ },

/***/ 190:
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
	var IScroll = __webpack_require__(116);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ },

/***/ 191:
/***/ function(module, exports) {

	module.exports = "\n\n\n<div class=\"box\" _v-33ab01ae=\"\">\n    <div class=\"top\" _v-33ab01ae=\"\">\n        <div class=\"wrap\" _v-33ab01ae=\"\">\n            <i class=\"logo\" _v-33ab01ae=\"\"></i>\n            <div class=\"search_bg\" _v-33ab01ae=\"\">\n                <i _v-33ab01ae=\"\">当代医药市场网</i>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"nav\" _v-33ab01ae=\"\">\n        <div id=\"nav-smartSetup\" _v-33ab01ae=\"\">\n            <div id=\"scroller\" _v-33ab01ae=\"\">\n                <ul _v-33ab01ae=\"\">\n                    <li v-on:click=\"selectType('recommend')\" :class=\"{'cur':isCur[0]}\" _v-33ab01ae=\"\">推荐</li>\n                    <li v-on:click=\"selectType('drug',4)\" :class=\"{'cur':isCur[1]}\" _v-33ab01ae=\"\">药品 </li>\n                    <li v-on:click=\"selectType('zyc',11)\" :class=\"{'cur':isCur[2]}\" _v-33ab01ae=\"\">中药材</li>\n                    <li v-on:click=\"selectType('bjsp',5)\" :class=\"{'cur':isCur[3]}\" _v-33ab01ae=\"\">保健食品</li>\n                    <li v-on:click=\"selectType('ylqx',13)\" :class=\"{'cur':isCur[4]}\" _v-33ab01ae=\"\">医疗器械 </li>\n                    <li v-on:click=\"selectType('mrhf',20)\" :class=\"{'cur':isCur[5]}\" _v-33ab01ae=\"\">美容护肤 </li>\n                    <li v-on:click=\"selectType('jsyp',18)\" :class=\"{'cur':isCur[6]}\" _v-33ab01ae=\"\">计生用品 </li>\n                    <li v-on:click=\"selectType('zysb',15)\" :class=\"{'cur':isCur[7]}\" _v-33ab01ae=\"\">制药设备 </li>\n                    <li v-on:click=\"selectType('yly',7)\" :class=\"{'cur':isCur[8]}\" _v-33ab01ae=\"\">原料药 </li>\n                    <li v-on:click=\"selectType('health')\" :class=\"{'cur':isCur[9]}\" _v-33ab01ae=\"\">健康 </li>\n                </ul>\n            </div>\n        </div>\n        <i class=\"line_a\" _v-33ab01ae=\"\"></i>\n        <i class=\"plus_a\" _v-33ab01ae=\"\"></i>\n    </div>\n\n</div>\n";

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(193)
	__vue_script__ = __webpack_require__(195)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\indexMain.vue: named exports in *.vue files are ignored.")}
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
	  var id = "_v-02dad7bf/indexMain.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(194);
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

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },

/***/ 195:
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

/***/ 196:
/***/ function(module, exports) {

	module.exports = "\n\n\n<div>\n    <div class=\"ad_content\"  v-for=\"item in items.list\">\n        <div v-html=\"item.code\"></div>\n        <div class=\"content-info\">\n            <ul>\n                <li><span class=\"Drugs\">药品</span></li>\n                <li><span class=\"click\">1365点击</span></li>\n                <li><span class=\"time\">24小时前</span></li>\n            </ul>\n        </div>\n\n        <div class=\"clear\"></div>\n    </div>\n</div>\n\n";

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(198)
	__webpack_require__(200)
	__vue_script__ = __webpack_require__(202)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\recommend.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(203)
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

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(199);
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

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.noPage[_v-e20be360]{\n    font-size: .2rem;\n    text-align: center;\n    height: .50rem;\n    line-height: .50rem;\n    color: #888;\n}\n", ""]);

	// exports


/***/ },

/***/ 200:
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
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=1!./recommend.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=1!./recommend.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.clear{\n    clear: both;\n}\n#pullDown{\n    background: #FFFFFF;\n}\n.white_box{\n    width:6.4rem;\n    background-color:transparent;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow: hidden;\n}\n.ad_content{\n    width:5.8rem;\n    margin: 0 auto;\n    padding:.10rem 0;\n    position: relative;\n    margin-bottom: .1rem;\n}\n.ad_code_one{\n    width:100%;\n    height: 1.2rem;\n    padding:.16rem 0px;\n    border-bottom:1px solid #e7e7e7;\n}\n.ad_code_two{\n    width:100%;\n    padding-bottom:.7rem;\n    border-bottom:1px solid #e7e7e7;\n}\n.ad_code_three{\n    width:100%;\n    padding-bottom:.6rem;\n    border-bottom:1px solid #e7e7e7;\n}\n.content1-left{\n    width: 4rem;\n\n    float: left;\n}\n\n.content-title h2{\n    padding-right:.2rem;\n    font-size: .3rem;\n}\n\n.content-info{\n    position: absolute;\n    bottom:.3rem;\n}\n.content-info ul{\n    width:100% ;\n    height:.3rem ;\n    line-height: .3rem;\n}\n\n.content-info li {\n    float: left;\n}\n\n\n\n.content1-right{\n    width: 1.8rem;height: 1.2rem;\n    float:right;\n}\n.content1-right a img{\n    width:1.8rem;\n    height:1.2rem;\n}\n.click,.time{\n    color:#8a8a8a ;\n    font-size:.22rem ;\n\n    margin-right:.26rem;\n    display: inline-block;\n}\n\n\n\n.content-Title{\n    padding-bottom: .16rem;\n}\n\n.content2-img{\n    width: 5.8rem;height: 1.23rem;\n}\n\n\n\n.content2-img img{\n    display: block!important;\n    float: left!important;\n}\n.content2-img a img{\n    width:1.89rem;\n    height:1.23rem;\n}\n.c2-img{\n    margin-right: .06rem;\n}\n\n.content3-img a img{\n    width:5.79rem;\n    height:2.84rem;\n}\n\n\n.page{\n\n    overflow: hidden;\n    position: relative;\n    /* Prevent native touch events on Windows */\n    -ms-touch-action: none;\n    /* Prevent the callout on tap-hold and text selection */\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    -webkit-text-size-adjust: none;\n        -ms-text-size-adjust: none;\n            text-size-adjust: none;\n}\n\n\n\n/*scrollbar start*/\n.iScrollVerticalScrollbar {\n    position: absolute;\n    z-index: 9999;\n    width: 2px;\n    bottom: 2px;\n    top: 2px;\n    right: 2px;\n    overflow: hidden;\n}\n\n.iScrollVerticalScrollbar.iScrollBothScrollbars {\n    bottom: 18px;\n}\n\n.iScrollIndicator {\n    position: absolute;\n    background: #999;\n    border-radius: 6px;\n    opacity: .8;\n}\n\n.iScrollVerticalScrollbar .iScrollIndicator {\n    width: 100%;\n    background: #999;\n}\n/*scrollbar end*/\n", ""]);

	// exports


/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _indexMain = __webpack_require__(192);

	var _indexMain2 = _interopRequireDefault(_indexMain);

	var _loading = __webpack_require__(141);

	var _loading2 = _interopRequireDefault(_loading);

	var _pullToRefresh = __webpack_require__(147);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ },

/***/ 203:
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"white_box\" _v-e20be360=\"\">\n\n\n     <load v-if=\"loading\" _v-e20be360=\"\"></load>\n\n    <div id=\"pullDown\" v-else=\"\" _v-e20be360=\"\">\n        <pull-to-refresh @on-pullup=\"onPullup\" @on-pulldown=\"onPulldown\" class=\"page\" _v-e20be360=\"\">\n            <index-main :items=\"items\" _v-e20be360=\"\"></index-main>\n            <div v-show=\"noPage\" class=\"noPage\" _v-e20be360=\"\">\n                没有了\n            </div>\n        </pull-to-refresh>\n\n    </div>\n\n\n    <div class=\"clear\" _v-e20be360=\"\"></div>\n</div>\n";

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(205)
	__vue_script__ = __webpack_require__(207)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\health.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(211)
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

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(206);
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

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".my-swipe[_v-b32fc110] {\n  width: 6.4rem;\n  height: 2.8rem;\n  position: relative; }\n  .my-swipe img[_v-b32fc110] {\n    width: 6.4rem;\n    height: 2.8rem; }\n  .my-swipe span[_v-b32fc110] {\n    font-size: .28rem;\n    line-height: .52rem;\n    padding-left: .2rem;\n    color: #FFF;\n    width: 6.2rem;\n    height: .5rem;\n    background: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    bottom: 0; }\n\n.card .cardTitle[_v-b32fc110] {\n  color: #333;\n  padding-left: .2rem;\n  height: .85rem;\n  line-height: .85rem;\n  font-weight: 700;\n  font-size: .36rem; }\n\n.card ul[_v-b32fc110] {\n  width: 6rem;\n  padding: 0px .2rem; }\n  .card ul li[_v-b32fc110] {\n    width: 100%;\n    margin-bottom: .2rem;\n    border-bottom: dashed #ccc 1px; }\n    .card ul li .descBox[_v-b32fc110] {\n      width: 69%;\n      min-height: 1rem;\n      float: left; }\n      .card ul li .descBox .title[_v-b32fc110] {\n        min-height: 1rem;\n        font-size: .3rem; }\n      .card ul li .descBox .source[_v-b32fc110] {\n        font-size: .24rem;\n        color: #8f8f8f;\n        line-height: .4rem; }\n      .card ul li .descBox .hits[_v-b32fc110] {\n        float: right;\n        font-size: .18rem; }\n    .card ul li img[_v-b32fc110] {\n      float: right;\n      width: 25%;\n      height: 1.2rem; }\n    .card ul li a[_v-b32fc110] {\n      display: inline-block;\n      width: 100%; }\n    .card ul li h2[_v-b32fc110] {\n      padding-bottom: .2rem;\n      display: inline-block;\n      font-size: .3rem;\n      width: 90%;\n      float: left; }\n    .card ul li .hits[_v-b32fc110] {\n      font-size: .2rem;\n      width: 10%;\n      line-height: .4rem;\n      float: right;\n      text-align: right;\n      color: #8f8f8f; }\n      .card ul li .hits i[_v-b32fc110] {\n        font-size: .24rem; }\n", ""]);

	// exports


/***/ },

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vueSwipe = __webpack_require__(171);

	var _homeShell = __webpack_require__(208);

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

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(209)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\homeShell.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(210)
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

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vueSwipe = __webpack_require__(171);

	var _loading = __webpack_require__(141);

	var _loading2 = _interopRequireDefault(_loading);

	var _pullToRefresh = __webpack_require__(147);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(115)))

/***/ },

/***/ 210:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"white_box\">\n    <load  v-if=\"loading\"  ></load>\n\n    <div id=\"pullDown\"  v-else>\n        <pull-to-refresh\n                @on-pullup='onPullup'\n                @on-pulldown='onPulldown' class=\"page\">\n\n            <slot name=\"content\"></slot>\n\n            <div v-show=\"noPage\" class=\"noPage\">\n                没有了\n            </div>\n        </pull-to-refresh>\n    </div>\n\n    <div class=\"clear\"></div>\n</div>\n\n";

/***/ },

/***/ 211:
/***/ function(module, exports) {

	module.exports = "\n<home-shell :loading=\"loading\" _v-b32fc110=\"\">\n    <div slot=\"content\" v-if=\"!loading\" _v-b32fc110=\"\">\n        <swipe class=\"my-swipe\" :speed=\"1000\" :show-indicators=\"false\" _v-b32fc110=\"\">\n\n            <swipe-item v-for=\"item in carousel\" _v-b32fc110=\"\">\n                <a :src=\"item.url\" _v-b32fc110=\"\">\n                    <img :src=\"item.pic\" _v-b32fc110=\"\">\n                    <span _v-b32fc110=\"\">{{item.title}}</span>\n                </a>\n            </swipe-item>\n\n        </swipe>\n\n        <div class=\"card\" _v-b32fc110=\"\">\n            <h2 class=\"cardTitle\" _v-b32fc110=\"\">今日推荐</h2>\n            <ul _v-b32fc110=\"\">\n              <li v-for=\"item in items.list\" _v-b32fc110=\"\">\n                  <router-link v-if=\"item.thumb\" :to=\"{name:'healthDetail',query:{id:item.itemid}}\" _v-b32fc110=\"\">\n\n                      <div class=\"descBox\" _v-b32fc110=\"\">\n                          <div class=\"title\" _v-b32fc110=\"\">{{item.title | dsubstr(20)}}</div>\n                          <div class=\"footnote\" _v-b32fc110=\"\">\n                              <span class=\"source\" _v-b32fc110=\"\">{{item.copyfrom ? item.copyfrom : \"当代医药市场网\"}}</span>\n                              <span class=\"hits\" _v-b32fc110=\"\"><i class=\"iconfont\" _v-b32fc110=\"\">󰁈</i>{{item.hits}}</span>\n                          </div>\n                      </div>\n                      <span class=\"img\" _v-b32fc110=\"\">\n                          <img :src=\"item.thumb\" _v-b32fc110=\"\">\n                      </span>\n                  </router-link>\n                  <router-link v-else=\"\" :to=\"{name:'healthDetail',query:{id:item.itemid}}\" _v-b32fc110=\"\">\n                      <h2 class=\"title\" _v-b32fc110=\"\">{{item.title | dsubstr(16)}}</h2>\n                      <span class=\"hits\" _v-b32fc110=\"\">\n                          <i class=\"iconfont\" _v-b32fc110=\"\">󰁈</i>{{item.hits}}\n                      </span>\n                  </router-link>\n              </li>\n            </ul>\n        </div>\n\n    </div>\n</home-shell>\n";

/***/ },

/***/ 212:
/***/ function(module, exports) {

	module.exports = "\n\n\n<div class=\"content\" _v-df052d0a=\"\">\n    <my-header _v-df052d0a=\"\"></my-header>\n\n    <component :is=\"currentView\" :catid=\"catid\" keep-alive=\"\" _v-df052d0a=\"\">\n        <!-- 组件在 vm.currentview 变化时改变 -->\n    </component>\n</div>\n";

/***/ }

});
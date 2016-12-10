webpackJsonp([1],{

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(73)
	__vue_script__ = __webpack_require__(77)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\common.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(91)
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
	  var id = "_v-923430f2/common.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-923430f2&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./common.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-923430f2&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./common.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(75)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _footer = __webpack_require__(78);

	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            msg: "首页"
	        };
	    },

	    components: {
	        'my-footer': _footer2.default
	    }
	};
	// </script>
	// <style scoped>
	//
	// </style>
	//
	//
	// <template>
	//
	//         <div style="height:100%">
	//             <router-view></router-view>
	//             <my-footer></my-footer>
	//         </div>
	//
	//
	//
	// </template>
	//
	// <script>

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(79)
	__vue_script__ = __webpack_require__(89)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\footer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(90)
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
	  var id = "_v-760fc992/footer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(76)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-760fc992&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./footer.vue", function() {
				var newContent = require("!!./../../node_modules/.0.25.0@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-760fc992&scoped=true!./../../node_modules/.4.0.2@sass-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./footer.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(75)();
	// imports


	// module
	exports.push([module.id, ".footer[_v-760fc992] {\n  background-color: #f4f5f6;\n  width: 6.4rem;\n  position: fixed;\n  bottom: 0px;\n  padding: .08rem 0px; }\n  .footer li[_v-760fc992] {\n    width: 25%; }\n  .footer .home[_v-760fc992] {\n    float: left;\n    text-align: center;\n    cursor: pointer; }\n    .footer .home i[_v-760fc992] {\n      background: url(" + __webpack_require__(81) + ");\n      width: .40rem;\n      height: .40rem;\n      display: inline-block;\n      background-size: .40rem .40rem; }\n    .footer .home .cur[_v-760fc992] {\n      background: url(" + __webpack_require__(82) + ");\n      width: .40rem;\n      height: .40rem;\n      display: inline-block;\n      background-size: .40rem .40rem; }\n  .footer .product[_v-760fc992] {\n    float: left;\n    text-align: center;\n    cursor: pointer; }\n    .footer .product i[_v-760fc992] {\n      background: url(" + __webpack_require__(83) + ");\n      width: .40rem;\n      height: .40rem;\n      display: inline-block;\n      background-size: .40rem .40rem; }\n    .footer .product .cur[_v-760fc992] {\n      background: url(" + __webpack_require__(84) + ");\n      width: .40rem;\n      height: .40rem;\n      display: inline-block;\n      background-size: .40rem .40rem; }\n  .footer .video[_v-760fc992] {\n    float: left;\n    text-align: center;\n    cursor: pointer; }\n    .footer .video .cur[_v-760fc992] {\n      background: url(" + __webpack_require__(85) + ") no-repeat;\n      width: .40rem;\n      height: .40rem;\n      display: inline-block;\n      background-size: .38rem .38rem;\n      background-position: center; }\n    .footer .video i[_v-760fc992] {\n      background: url(" + __webpack_require__(86) + ") no-repeat;\n      width: .40rem;\n      height: .40rem;\n      display: inline-block;\n      background-position: center;\n      background-size: .38rem .38rem; }\n  .footer .my[_v-760fc992] {\n    float: left;\n    text-align: center;\n    cursor: pointer; }\n    .footer .my i[_v-760fc992] {\n      background: url(" + __webpack_require__(87) + ");\n      width: .40rem;\n      height: .40rem;\n      display: inline-block;\n      background-size: .40rem .40rem; }\n    .footer .my .cur[_v-760fc992] {\n      background: url(" + __webpack_require__(88) + ");\n      width: .40rem;\n      height: .40rem;\n      display: inline-block;\n      background-size: .40rem .40rem; }\n  .footer span[_v-760fc992] {\n    display: block;\n    font-size: .22rem;\n    color: #4c4c4c; }\n  .footer .on span[_v-760fc992] {\n    display: block;\n    font-size: .22rem;\n    color: #ed1b23; }\n", ""]);

	// exports


/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/home_icon.png";

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/home_icon_on.png";

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/product_icon.png";

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/product_icon_on.png";

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/video_icon_on.png";

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/video_icon.png";

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/my_icon.png";

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/my_icon_on.png";

/***/ },

/***/ 89:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	// <template>
	//
	//     <ul class="footer">
	//
	//
	//         <router-link :to="{path:'/home'}" active-class='on' class="home" tag="li">
	//
	//                 <router-link tag="i"  :to="{path:'/home'}" active-class='cur'>
	//
	//                 </router-link>
	//
	//             <span>首页</span>
	//         </router-link>
	//
	//         <router-link :to="{path:'/product'}" active-class='on' class="product" tag="li">
	//
	//                 <router-link tag="i"  :to="{path:'/product'}" active-class='cur'>
	//
	//                 </router-link>
	//
	//             <span>产品</span>
	//         </router-link>
	//
	//         <router-link :to="{path:'/video'}" active-class='on' class="video" tag="li">
	//
	//                 <router-link tag="i"  :to="{path:'/video'}" active-class='cur'>
	//
	//                 </router-link>
	//
	//             <span>视频</span>
	//         </router-link>
	//
	//         <router-link  :to="{path:'/my'}" active-class='on' class="my" tag="li">
	//
	//                 <router-link tag="i" :to="{path:'/my'}" active-class='cur'>
	//
	//                 </router-link>
	//
	//             <span>我的</span>
	//         </router-link>
	//
	//
	//
	//     </div>
	// </template>
	//
	// <script>

	exports.default = {
	    data: function data() {
	        return {
	            msg: "首页"
	        };
	    },

	    components: {}
	};
	// </script>
	// <style lang="sass" scoped>
	//     .footer{
	//         background-color: #f4f5f6;
	//         width:6.4rem;
	//         position: fixed;
	//         bottom: 0px;
	//         padding:.08rem 0px;
	//          li {
	//                 width:25%;
	//         }
	//         .home{           
	//             float: left;
	//
	//             text-align: center;
	//             cursor: pointer;
	//             i{
	//                 background: url("../image/home_icon.png");
	//                 width:.40rem;
	//                 height: .40rem;
	//                 display: inline-block;
	//                 background-size: .40rem .40rem;
	//             }
	//             .cur{
	//                 background: url("../image/home_icon_on.png");
	//                 width:.40rem;
	//                 height: .40rem;
	//                 display: inline-block;
	//                 background-size: .40rem .40rem;
	//             }
	//         }
	//         .product{
	//
	//             float: left;
	//
	//             text-align: center;
	//             cursor: pointer;
	//              i{
	//                 background: url("../image/product_icon.png");
	//                 width:.40rem;
	//                 height: .40rem;
	//                 display: inline-block;
	//                 background-size: .40rem .40rem;
	//             }
	//             .cur{
	//                 background: url("../image/product_icon_on.png");
	//                 width:.40rem;
	//                 height: .40rem;
	//                 display: inline-block;
	//                 background-size: .40rem .40rem;
	//             }
	//         }
	//         .video{
	//
	//             float: left;
	//
	//             text-align: center;
	//             cursor: pointer;
	//             .cur{
	//                 background: url("../image/video_icon_on.png") no-repeat;
	//                 width:.40rem;
	//                 height: .40rem;
	//                 display: inline-block;
	//                 background-size: .38rem .38rem;
	//                 background-position: center;
	//             }
	//             i{
	//                 background: url("../image/video_icon.png") no-repeat;
	//                 width:.40rem;
	//                 height: .40rem;
	//                 display: inline-block;
	//                 background-position: center;
	//                 background-size: .38rem .38rem;
	//             }
	//         }
	//
	//         .my{
	//             float: left;
	//             text-align: center;
	//             cursor: pointer;
	//             i{
	//                 background: url("../image/my_icon.png");
	//                 width:.40rem;
	//                 height: .40rem;
	//                 display: inline-block;
	//                 background-size: .40rem .40rem;
	//             }
	//             .cur{
	//                 background: url("../image/my_icon_on.png");
	//                 width:.40rem;
	//                 height: .40rem;
	//                 display: inline-block;
	//                 background-size: .40rem .40rem;
	//             }
	//         }
	//
	//         span{
	//              display: block;
	//
	//              font-size: .22rem;
	//              color: #4c4c4c;
	//          }
	//         .on span{
	//             display: block;
	//
	//             font-size: .22rem;
	//             color: #ed1b23;
	//         }
	//     }
	//
	//
	//
	//
	//
	//
	// </style>

/***/ },

/***/ 90:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n<ul class=\"footer\" _v-760fc992=\"\">\n\n\n    <router-link :to=\"{path:'/home'}\" active-class=\"on\" class=\"home\" tag=\"li\" _v-760fc992=\"\">\n\n            <router-link tag=\"i\" :to=\"{path:'/home'}\" active-class=\"cur\" _v-760fc992=\"\">\n\n            </router-link>\n\n        <span _v-760fc992=\"\">首页</span>\n    </router-link>\n\n    <router-link :to=\"{path:'/product'}\" active-class=\"on\" class=\"product\" tag=\"li\" _v-760fc992=\"\">\n\n            <router-link tag=\"i\" :to=\"{path:'/product'}\" active-class=\"cur\" _v-760fc992=\"\">\n\n            </router-link>\n\n        <span _v-760fc992=\"\">产品</span>\n    </router-link>\n\n    <router-link :to=\"{path:'/video'}\" active-class=\"on\" class=\"video\" tag=\"li\" _v-760fc992=\"\">\n\n            <router-link tag=\"i\" :to=\"{path:'/video'}\" active-class=\"cur\" _v-760fc992=\"\">\n\n            </router-link>\n\n        <span _v-760fc992=\"\">视频</span>\n    </router-link>\n\n    <router-link :to=\"{path:'/my'}\" active-class=\"on\" class=\"my\" tag=\"li\" _v-760fc992=\"\">\n\n            <router-link tag=\"i\" :to=\"{path:'/my'}\" active-class=\"cur\" _v-760fc992=\"\">\n\n            </router-link>\n\n        <span _v-760fc992=\"\">我的</span>\n    </router-link>\n\n\n\n\n</ul>";

/***/ },

/***/ 91:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n<div style=\"height:100%\" _v-923430f2=\"\">\n    <router-view _v-923430f2=\"\"></router-view>\n    <my-footer _v-923430f2=\"\"></my-footer>\n</div>\n\n\n\n";

/***/ }

});
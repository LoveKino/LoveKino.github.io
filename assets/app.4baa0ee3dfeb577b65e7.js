webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);
	__webpack_require__(6);

	// polyfills
	var PromisePolyfill = __webpack_require__(8);
	if (!window.Promise) window.Promise = PromisePolyfill;
	__webpack_require__(11);

	var _require = __webpack_require__(12);

	var n = _require.n;

	var _require2 = __webpack_require__(41);

	var router = _require2.router;
	var queryPager = _require2.queryPager;


	var renderArticleList = __webpack_require__(45);
	var renderArticle = __webpack_require__(55);

	document.body.appendChild(n('div id="pager"'));

	var _router = router(queryPager({
	    'articleList': {
	        render: renderArticleList,
	        title: 'article list'
	    },
	    'article': {
	        render: renderArticle
	    }
	}, 'articleList'), {
	    forward: forward,
	    redirect: redirect,
	    reload: reload
	});

	var forward = _router.forward;
	var redirect = _router.redirect;
	var reload = _router.reload;


	forward(window.location.href);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./normalize.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./normalize.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\n *  * 1. Change the default font family in all browsers (opinionated).\n *   * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n *    */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/**\n *  * Remove the margin in all browsers (opinionated).\n *   */\nbody {\n  margin: 0;\n}\n/* HTML5 display definitions\n *    ========================================================================== */\n/**\n *  * Add the correct display in IE 9-.\n *   * 1. Add the correct display in Edge, IE, and Firefox.\n *    * 2. Add the correct display in IE.\n *     */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block;\n}\n/**\n *  * Add the correct display in IE 9-.\n *   */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n/**\n *  * Add the correct display in iOS 4-7.\n *   */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n *  * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n *   */\nprogress {\n  vertical-align: baseline;\n}\n/**\n *  * Add the correct display in IE 10-.\n *   * 1. Add the correct display in IE.\n *    */\ntemplate,\n[hidden] {\n  display: none;\n}\n/* Links\n *    ========================================================================== */\n/**\n *  * 1. Remove the gray background on active links in IE 10.\n *   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n *    */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */\n}\n/**\n *  * Remove the outline on focused links when they are also active or hovered\n *   * in all browsers (opinionated).\n *    */\na:active,\na:hover {\n  outline-width: 0;\n}\n/* Text-level semantics\n *    ========================================================================== */\n/**\n *  * 1. Remove the bottom border in Firefox 39-.\n *   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n *    */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n/**\n *  * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n *   */\nb,\nstrong {\n  font-weight: inherit;\n}\n/**\n *  * Add the correct font weight in Chrome, Edge, and Safari.\n *   */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n *  * Add the correct font style in Android 4.3-.\n *   */\ndfn {\n  font-style: italic;\n}\n/**\n *  * Correct the font size and margin on `h1` elements within `section` and\n *   * `article` contexts in Chrome, Firefox, and Safari.\n *    */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n *  * Add the correct background and color in IE 9-.\n *   */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n/**\n *  * Add the correct font size in all browsers.\n *   */\nsmall {\n  font-size: 80%;\n}\n/**\n *  * Prevent `sub` and `sup` elements from affecting the line height in\n *   * all browsers.\n *    */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n *    ========================================================================== */\n/**\n *  * Remove the border on images inside links in IE 10-.\n *   */\nimg {\n  border-style: none;\n}\n/**\n *  * Hide the overflow in IE.\n *   */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n *    ========================================================================== */\n/**\n *  * 1. Correct the inheritance and scaling of font size in all browsers.\n *   * 2. Correct the odd `em` font sizing in all browsers.\n *    */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\n *  * Add the correct margin in IE 8.\n *   */\nfigure {\n  margin: 1em 40px;\n}\n/**\n *  * 1. Add the correct box sizing in Firefox.\n *   * 2. Show the overflow in Edge and IE.\n *    */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n/* Forms\n *    ========================================================================== */\n/**\n *  * 1. Change font properties to `inherit` in all browsers (opinionated).\n *   * 2. Remove the margin in Firefox and Safari.\n *    */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\n *  * Restore the font weight unset by the previous rule.\n *   */\noptgroup {\n  font-weight: bold;\n}\n/**\n *  * Show the overflow in IE.\n *   * 1. Show the overflow in Edge.\n *    */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n/**\n *  * Remove the inheritance of text transform in Edge, Firefox, and IE.\n *   * 1. Remove the inheritance of text transform in Firefox.\n *    */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n *  * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *   *    controls in Android 4.\n *    * 2. Correct the inability to style clickable types in iOS and Safari.\n *     */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n}\n/**\n *  * Remove the inner border and padding in Firefox.\n *   */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n *  * Restore the focus styles unset by the previous rule.\n *   */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n *  * Change the border, margin, and padding in all browsers (opinionated).\n *   */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n *  * 1. Correct the text wrapping in Edge and IE.\n *   * 2. Correct the color inheritance from `fieldset` elements in IE.\n *    * 3. Remove the padding so developers are not caught out when they zero out\n *     *    `fieldset` elements in all browsers.\n *      */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n/**\n *  * Remove the default vertical scrollbar in IE.\n *   */\ntextarea {\n  overflow: auto;\n}\n/**\n *  * 1. Add the correct box sizing in IE 10-.\n *   * 2. Remove the padding in IE 10-.\n *    */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n *  * Correct the cursor style of increment and decrement buttons in Chrome.\n *   */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n *  * 1. Correct the odd appearance in Chrome and Safari.\n *   * 2. Correct the outline style in Safari.\n *    */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n/**\n *  * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n *   */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n *  * Correct the text style of placeholders in Chrome, Edge, and Safari.\n *   */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n/**\n *  * 1. Correct the inability to style clickable types in iOS and Safari.\n *   * 2. Change font properties to `inherit` in Safari.\n *    */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
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

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
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

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "html,\nbody {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #e4e4e4;\n}\n#pager {\n    display: none;\n    width: 100%;\n    height: 100%;\n}\na {\n    text-decoration: none;\n    color: #3b3a36;\n    cursor: pointer;\n    margin-right: 8px;\n}\na:hover {\n    color: #e9ece5;\n}\nul {\n    margin: 0;\n    padding: 0;\n}\nul li {\n    list-style-type: none;\n}\n\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n    outline: none;\n    padding-bottom: 9px;\n    border-bottom: 2px solid #3b3a36;\n}\ninput[type=\"text\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n    box-sizing: border-box;\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    box-shadow: none;\n    border-radius: none;\n    width: 260px;\n    padding-bottom: 10px;\n    margin-right: 8px;\n    border: none;\n    border-bottom: 1px solid #b3c2bf;\n}\ninput {\n    height: 20px;\n}\ntextarea {\n    height: 50px;\n}\nlabel {\n    font-size: 14px;\n    margin-right: 8px;\n}\nselect {\n    width: auto;\n    padding: 8px;\n    border: 0;\n    background-color: white;\n    border-bottom: 1px solid #b3c2bf;\n    border-radius: 0px;\n}\nselect:focus {\n    border-bottom: 1px solid #b3c2bf;\n    padding: 8px;\n}\nfieldset,\n.field-line {\n    margin: 10px;\n    padding: 0;\n    outline: 0;\n    padding: 0;\n    border: 0;\n}\n.field-item {\n    margin: 2px 10px 2px 0px;\n}\n/*button*/\n\nbutton,\n.black-button {\n    min-width: 40px;\n    text-align: center;\n    padding-left: 10px;\n    padding-right: 10px;\n    line-height: 20px;\n    background-color: #3b3a36;\n    color: white;\n    border: none;\n    text-decoration: none;\n}\nbutton:hover,\n.black-button:hover {\n    background-color: #b3c2bf;\n}\nbutton:focus,\n.black-button:focus {\n    outline: none;\n}\nbutton:active,\n.black-button:active {\n    background-color: #e9ece5;\n}\n/* add button */\n\n.add-button {\n    min-width: 0;\n    width: 32px;\n    height: 32px;\n    border-radius: 16px;\n    background-color: #3b3a36;\n    border: 0px;\n    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.6);\n}\n.add-button:before {\n    content: '+';\n    font-size: 20px;\n    color: white;\n}\n.add-button:focus {\n    outline: none;\n}\n.add-button:hover {\n    background-color: #b3c2bf;\n}\n.add-button:active {\n    background-color: #e9ece5;\n}\n/* card */\n\n.card, form {\n    display: inline-block;\n    background-color: white;\n    margin: 8px 10px 0px 10px;\n    padding: 10px;\n    border: 1px solid #d8d8d8;\n    box-shadow: 1px 2px 4px #d8d8d8;\n    border-radius: 4px;\n    font-size: 14px;\n}\n.card-title {\n    font-size: 16px;\n    margin: 8px 4px 14px 4px;\n    font-weight: bold;\n}\n/*table*/\n\ntable {\n    font-size: 14px;\n    border: 0;\n    vertical-align: baseline;\n}\nthead th {\n    border: 0;\n    border-bottom: 2px solid #6678b1;\n    padding: 10px 8px;\n    outline: 0;\n    margin: 0;\n}\ntbody tr td {\n    padding: 9px 8px 0;\n    margin: 0;\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	(function (root) {

	  // Store setTimeout reference so promise-polyfill will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var setTimeoutFunc = setTimeout;

	  function noop() {}

	  // Polyfill for Function.prototype.bind
	  function bind(fn, thisArg) {
	    return function () {
	      fn.apply(thisArg, arguments);
	    };
	  }

	  function Promise(fn) {
	    if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
	    if (typeof fn !== 'function') throw new TypeError('not a function');
	    this._state = 0;
	    this._handled = false;
	    this._value = undefined;
	    this._deferreds = [];

	    doResolve(fn, this);
	  }

	  function handle(self, deferred) {
	    while (self._state === 3) {
	      self = self._value;
	    }
	    if (self._state === 0) {
	      self._deferreds.push(deferred);
	      return;
	    }
	    self._handled = true;
	    Promise._immediateFn(function () {
	      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	      if (cb === null) {
	        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	        return;
	      }
	      var ret;
	      try {
	        ret = cb(self._value);
	      } catch (e) {
	        reject(deferred.promise, e);
	        return;
	      }
	      resolve(deferred.promise, ret);
	    });
	  }

	  function resolve(self, newValue) {
	    try {
	      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
	      if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
	        var then = newValue.then;
	        if (newValue instanceof Promise) {
	          self._state = 3;
	          self._value = newValue;
	          finale(self);
	          return;
	        } else if (typeof then === 'function') {
	          doResolve(bind(then, newValue), self);
	          return;
	        }
	      }
	      self._state = 1;
	      self._value = newValue;
	      finale(self);
	    } catch (e) {
	      reject(self, e);
	    }
	  }

	  function reject(self, newValue) {
	    self._state = 2;
	    self._value = newValue;
	    finale(self);
	  }

	  function finale(self) {
	    if (self._state === 2 && self._deferreds.length === 0) {
	      Promise._immediateFn(function () {
	        if (!self._handled) {
	          Promise._unhandledRejectionFn(self._value);
	        }
	      });
	    }

	    for (var i = 0, len = self._deferreds.length; i < len; i++) {
	      handle(self, self._deferreds[i]);
	    }
	    self._deferreds = null;
	  }

	  function Handler(onFulfilled, onRejected, promise) {
	    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	    this.promise = promise;
	  }

	  /**
	   * Take a potentially misbehaving resolver function and make sure
	   * onFulfilled and onRejected are only called once.
	   *
	   * Makes no guarantees about asynchrony.
	   */
	  function doResolve(fn, self) {
	    var done = false;
	    try {
	      fn(function (value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      }, function (reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      });
	    } catch (ex) {
	      if (done) return;
	      done = true;
	      reject(self, ex);
	    }
	  }

	  Promise.prototype['catch'] = function (onRejected) {
	    return this.then(null, onRejected);
	  };

	  Promise.prototype.then = function (onFulfilled, onRejected) {
	    var prom = new this.constructor(noop);

	    handle(this, new Handler(onFulfilled, onRejected, prom));
	    return prom;
	  };

	  Promise.all = function (arr) {
	    var args = Array.prototype.slice.call(arr);

	    return new Promise(function (resolve, reject) {
	      if (args.length === 0) return resolve([]);
	      var remaining = args.length;

	      function res(i, val) {
	        try {
	          if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
	            var then = val.then;
	            if (typeof then === 'function') {
	              then.call(val, function (val) {
	                res(i, val);
	              }, reject);
	              return;
	            }
	          }
	          args[i] = val;
	          if (--remaining === 0) {
	            resolve(args);
	          }
	        } catch (ex) {
	          reject(ex);
	        }
	      }

	      for (var i = 0; i < args.length; i++) {
	        res(i, args[i]);
	      }
	    });
	  };

	  Promise.resolve = function (value) {
	    if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.constructor === Promise) {
	      return value;
	    }

	    return new Promise(function (resolve) {
	      resolve(value);
	    });
	  };

	  Promise.reject = function (value) {
	    return new Promise(function (resolve, reject) {
	      reject(value);
	    });
	  };

	  Promise.race = function (values) {
	    return new Promise(function (resolve, reject) {
	      for (var i = 0, len = values.length; i < len; i++) {
	        values[i].then(resolve, reject);
	      }
	    });
	  };

	  // Use polyfill for setImmediate for performance gains
	  Promise._immediateFn = typeof setImmediate === 'function' && function (fn) {
	    setImmediate(fn);
	  } || function (fn) {
	    setTimeoutFunc(fn, 0);
	  };

	  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
	    if (typeof console !== 'undefined' && console) {
	      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	    }
	  };

	  /**
	   * Set the immediate function to execute callbacks
	   * @param fn {function} Function to execute
	   * @deprecated
	   */
	  Promise._setImmediateFn = function _setImmediateFn(fn) {
	    Promise._immediateFn = fn;
	  };

	  /**
	   * Change the function to execute on unhandled rejection
	   * @param {function} fn Function to execute on unhandled rejection
	   * @deprecated
	   */
	  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
	    Promise._unhandledRejectionFn = fn;
	  };

	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Promise;
	  } else if (!root.Promise) {
	    root.Promise = Promise;
	  }
	})(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9).setImmediate))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {"use strict";

	var nextTick = __webpack_require__(10).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  timeout.close();
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function (fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function (id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9).setImmediate, __webpack_require__(9).clearImmediate))

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	(function (self) {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function next() {
	        var value = items.shift();
	        return { done: value === undefined, value: value };
	      }
	    };

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function () {
	        return iterator;
	      };
	    }

	    return iterator;
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var list = this.map[name];
	    if (!list) {
	      list = [];
	      this.map[name] = list;
	    }
	    list.push(value);
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    var values = this.map[normalizeName(name)];
	    return values ? values[0] : null;
	  };

	  Headers.prototype.getAll = function (name) {
	    return this.map[normalizeName(name)] || [];
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)];
	  };

	  Headers.prototype.forEach = function (callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function (name) {
	      this.map[name].forEach(function (value) {
	        callback.call(thisArg, value, name, this);
	      }, this);
	    }, this);
	  };

	  Headers.prototype.keys = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push(name);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.values = function () {
	    var items = [];
	    this.forEach(function (value) {
	      items.push(value);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.entries = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push([name, value]);
	    });
	    return iteratorFor(items);
	  };

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    return fileReaderReady(reader);
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    reader.readAsText(blob);
	    return fileReaderReady(reader);
	  }

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString();
	      } else if (!body) {
	        this._bodyText = '';
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	          throw new Error('unsupported BodyInit type');
	        }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        return this.blob().then(readBlobAsArrayBuffer);
	      };

	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text');
	        } else {
	          return Promise.resolve(this._bodyText);
	        }
	      };
	    } else {
	      this.text = function () {
	        var rejected = consumed(this);
	        return rejected ? rejected : Promise.resolve(this._bodyText);
	      };
	    }

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = input;
	    }

	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }

	  Request.prototype.clone = function () {
	    return new Request(this);
	  };

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function headers(xhr) {
	    var head = new Headers();
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n');
	    pairs.forEach(function (header) {
	      var split = header.trim().split(':');
	      var key = split.shift().trim();
	      var value = split.join(':').trim();
	      head.append(key, value);
	    });
	    return head;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this.type = 'default';
	    this.status = options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = options.statusText;
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }

	  Body.call(Response.prototype);

	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };

	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };

	  var redirectStatuses = [301, 302, 303, 307, 308];

	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }

	    return new Response(null, { status: status, headers: { location: url } });
	  };

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request;
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input;
	      } else {
	        request = new Request(input, init);
	      }

	      var xhr = new XMLHttpRequest();

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL;
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL');
	        }

	        return;
	      }

	      xhr.onload = function () {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        };
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.ontimeout = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(13);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(14);

	var n = _require.n;
	var svgn = _require.svgn;
	var bindPlugs = _require.bindPlugs;


	var plugs = __webpack_require__(27);

	var view = __webpack_require__(34);

	var mount = __webpack_require__(40);

	module.exports = {
	    n: n,
	    svgn: svgn,
	    view: view,
	    plugs: plugs,
	    bindPlugs: bindPlugs,
	    mount: mount
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(15);

	var createElement = _require.createElement;
	var createSvgElement = _require.createSvgElement;
	var parseArgs = _require.parseArgs;
	var nodeGener = _require.nodeGener;

	var _require2 = __webpack_require__(22);

	var bindEvents = _require2.bindEvents;

	// TODO general proxy n way

	var cn = function cn(create) {
	    var nodeGen = nodeGener(create);
	    return function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _parseArgs = parseArgs(args);

	        var tagName = _parseArgs.tagName;
	        var attributes = _parseArgs.attributes;
	        var childs = _parseArgs.childs;

	        // plugin

	        runPlugins(attributes['plugin'], tagName, attributes, childs);

	        var _splitAttribues = splitAttribues(attributes);

	        var attrMap = _splitAttribues.attrMap;
	        var eventMap = _splitAttribues.eventMap;


	        var node = nodeGen(tagName, attrMap, childs);

	        // tmp solution
	        bindEvents(node, eventMap);

	        return node;
	    };
	};

	var bindPlugs = function bindPlugs(typen) {
	    var plugs = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	    return function () {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        var _parseArgs2 = parseArgs(args);

	        var tagName = _parseArgs2.tagName;
	        var attributes = _parseArgs2.attributes;
	        var childs = _parseArgs2.childs;


	        var oriPlugs = attributes.plugin = attributes.plugin || [];
	        attributes.plugin = oriPlugs.concat(plugs);

	        var node = typen(tagName, attributes, childs);

	        return node;
	    };
	};

	var runPlugins = function runPlugins() {
	    var plugs = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var tagName = arguments[1];
	    var attributes = arguments[2];
	    var childExp = arguments[3];

	    for (var i = 0; i < plugs.length; i++) {
	        var plug = plugs[i];
	        plug && plug(tagName, attributes, childExp);
	    }
	};

	var splitAttribues = function splitAttribues(attributes) {
	    var attrMap = {},
	        eventMap = {};
	    for (var name in attributes) {
	        var item = attributes[name];
	        if (name.indexOf('on') === 0) {
	            eventMap[name.substring(2)] = item;
	        } else if (name !== 'plugin') {
	            attrMap[name] = item;
	        }
	    }
	    return {
	        attrMap: attrMap,
	        eventMap: eventMap
	    };
	};

	module.exports = {
	    n: cn(createElement),
	    svgn: cn(createSvgElement),
	    bindPlugs: bindPlugs
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(16);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(17);

	var isString = _require.isString;
	var isObject = _require.isObject;
	var isNode = _require.isNode;
	var likeArray = _require.likeArray;
	var isNumber = _require.isNumber;
	var isBool = _require.isBool;


	var parseAttribute = __webpack_require__(18);

	var svgNS = 'http://www.w3.org/2000/svg';

	var cn = function cn(create) {
	    var nodeGen = nodeGener(create);
	    return function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _parseArgs = parseArgs(args);

	        var tagName = _parseArgs.tagName;
	        var attributes = _parseArgs.attributes;
	        var childs = _parseArgs.childs;

	        return nodeGen(tagName, attributes, childs);
	    };
	};

	var nodeGener = function nodeGener(create) {
	    return function (tagName, attributes, childs) {
	        var node = create(tagName);
	        applyNode(node, attributes, childs);

	        return node;
	    };
	};

	var parseArgs = function parseArgs(args) {
	    var tagName = void 0,
	        attributes = {},
	        childExp = [];

	    var first = args.shift();

	    var parts = splitTagNameAttribute(first);

	    if (parts.length > 1) {
	        // not only tagName
	        tagName = parts[0];
	        attributes = parts[1];
	    } else {
	        tagName = first;
	    }

	    tagName = tagName.toLowerCase().trim();

	    var next = args.shift();

	    var nextAttr = {};

	    if (likeArray(next) || isString(next) || isNode(next) || isNumber(next) || isBool(next)) {
	        childExp = next;
	    } else if (isObject(next)) {
	        nextAttr = next;
	        childExp = args.shift() || [];
	    }

	    attributes = parseAttribute(attributes, nextAttr);

	    var childs = parseChildExp(childExp);

	    return {
	        tagName: tagName,
	        attributes: attributes,
	        childs: childs
	    };
	};

	var splitTagNameAttribute = function splitTagNameAttribute() {
	    var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	    var tagName = str.split(' ')[0];
	    var attr = str.substring(tagName.length);
	    attr = attr && attr.trim();
	    if (attr) {
	        return [tagName, attr];
	    } else {
	        return [tagName];
	    }
	};

	var applyNode = function applyNode(node, attributes, childs) {
	    setAttributes(node, attributes);
	    for (var i = 0; i < childs.length; i++) {
	        var child = childs[i];
	        if (isString(child)) {
	            node.textContent = child;
	        } else {
	            node.appendChild(child);
	        }
	    }
	};

	var setAttributes = function setAttributes(node, attributes) {
	    for (var name in attributes) {
	        var attr = attributes[name];
	        node.setAttribute(name, attr);
	    }
	};

	var parseChildExp = function parseChildExp(childExp) {
	    var ret = [];
	    if (isNode(childExp)) {
	        ret.push(childExp);
	    } else if (likeArray(childExp)) {
	        for (var i = 0; i < childExp.length; i++) {
	            var child = childExp[i];
	            ret = ret.concat(parseChildExp(child));
	        }
	    } else if (childExp) {
	        ret.push(childExp.toString());
	    }
	    return ret;
	};

	var createElement = function createElement(tagName) {
	    return document.createElement(tagName);
	};

	var createSvgElement = function createSvgElement(tagName) {
	    return document.createElementNS(svgNS, tagName);
	};

	module.exports = {
	    svgn: cn(createSvgElement),
	    n: cn(createElement),
	    parseArgs: parseArgs,
	    nodeGener: nodeGener,
	    createElement: createElement,
	    createSvgElement: createSvgElement,
	    cn: cn
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * basic types
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var isUndefined = function isUndefined(v) {
	    return v === undefined;
	};

	var isNull = function isNull(v) {
	    return v === null;
	};

	var isFalsy = function isFalsy(v) {
	    return !v;
	};

	var likeArray = function likeArray(v) {
	    return !!(v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && typeof v.length === 'number' && v.length >= 0);
	};

	var isArray = function isArray(v) {
	    return Array.isArray(v);
	};

	var isString = function isString(v) {
	    return typeof v === 'string';
	};

	var isObject = function isObject(v) {
	    return !!(v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object');
	};

	var isFunction = function isFunction(v) {
	    return typeof v === 'function';
	};

	var isNumber = function isNumber(v) {
	    return typeof v === 'number' && !isNaN(v);
	};

	var isBool = function isBool(v) {
	    return typeof v === 'boolean';
	};

	var isNode = function isNode(o) {
	    return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? o instanceof Node : o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string';
	};

	var isPromise = function isPromise(v) {
	    return v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && typeof v.then === 'function' && typeof v.catch === 'function';
	};

	/**
	 * check type
	 *
	 * types = [typeFun]
	 */
	var funType = function funType(fun) {
	    var types = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	    if (!isFunction(fun)) {
	        throw new TypeError(typeErrorText(fun, 'function'));
	    }

	    if (!likeArray(types)) {
	        throw new TypeError(typeErrorText(types, 'array'));
	    }

	    for (var i = 0; i < types.length; i++) {
	        var typeFun = types[i];
	        if (typeFun) {
	            if (!isFunction(typeFun)) {
	                throw new TypeError(typeErrorText(typeFun, 'function'));
	            }
	        }
	    }

	    return function () {
	        // check type
	        for (var _i = 0; _i < types.length; _i++) {
	            var _typeFun = types[_i];
	            var arg = arguments[_i];
	            if (_typeFun && !_typeFun(arg)) {
	                throw new TypeError('Argument type error. Arguments order ' + _i + '. Argument is ' + arg + '.');
	            }
	        }
	        // result
	        return fun.apply(this, arguments);
	    };
	};

	var and = function and() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }

	    if (!any(args, isFunction)) {
	        throw new TypeError('The argument of and must be function.');
	    }
	    return function (v) {
	        for (var i = 0; i < args.length; i++) {
	            var typeFun = args[i];
	            if (!typeFun(v)) {
	                return false;
	            }
	        }
	        return true;
	    };
	};

	var or = function or() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	    }

	    if (!any(args, isFunction)) {
	        throw new TypeError('The argument of and must be function.');
	    }

	    return function (v) {
	        for (var i = 0; i < args.length; i++) {
	            var typeFun = args[i];
	            if (typeFun(v)) {
	                return true;
	            }
	        }
	        return false;
	    };
	};

	var not = function not(type) {
	    if (!isFunction(type)) {
	        throw new TypeError('The argument of and must be function.');
	    }
	    return function (v) {
	        return !type(v);
	    };
	};

	var any = function any(list, type) {
	    if (!likeArray(list)) {
	        throw new TypeError(typeErrorText(list, 'list'));
	    }
	    if (!isFunction(type)) {
	        throw new TypeError(typeErrorText(type, 'function'));
	    }

	    for (var i = 0; i < list.length; i++) {
	        if (!type(list[i])) {
	            return false;
	        }
	    }
	    return true;
	};

	var exist = function exist(list, type) {
	    if (!likeArray(list)) {
	        throw new TypeError(typeErrorText(list, 'array'));
	    }
	    if (!isFunction(type)) {
	        throw new TypeError(typeErrorText(type, 'function'));
	    }

	    for (var i = 0; i < list.length; i++) {
	        if (type(list[i])) {
	            return true;
	        }
	    }
	    return false;
	};

	var mapType = function mapType(map) {
	    if (!isObject(map)) {
	        throw new TypeError(typeErrorText(map, 'obj'));
	    }

	    for (var name in map) {
	        var type = map[name];
	        if (!isFunction(type)) {
	            throw new TypeError(typeErrorText(type, 'function'));
	        }
	    }

	    return function (v) {
	        if (!isObject(v)) {
	            return false;
	        }

	        for (var _name in map) {
	            var _type = map[_name];
	            var attr = v[_name];
	            if (!_type(attr)) {
	                return false;
	            }
	        }

	        return true;
	    };
	};

	var listType = function listType(type) {
	    if (!isFunction(type)) {
	        throw new TypeError(typeErrorText(type, 'function'));
	    }

	    return function (list) {
	        return any(list, type);
	    };
	};

	var typeErrorText = function typeErrorText(v, expect) {
	    return 'Expect ' + expect + ' type, but got type ' + (typeof v === 'undefined' ? 'undefined' : _typeof(v)) + ', and value is ' + v;
	};

	module.exports = {
	    isArray: isArray,
	    likeArray: likeArray,
	    isString: isString,
	    isObject: isObject,
	    isFunction: isFunction,
	    isNumber: isNumber,
	    isBool: isBool,
	    isNode: isNode,
	    isPromise: isPromise,
	    isNull: isNull,
	    isUndefined: isUndefined,
	    isFalsy: isFalsy,

	    funType: funType,
	    any: any,
	    exist: exist,

	    and: and,
	    or: or,
	    not: not,
	    mapType: mapType,
	    listType: listType
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _require = __webpack_require__(17);

	var isString = _require.isString;
	var isObject = _require.isObject;

	var _require2 = __webpack_require__(19);

	var mergeMap = _require2.mergeMap;


	var ITEM_REG = /([\w-]+)\s*=\s*(([\w-]+)|('.*?')|(".*?"))/;

	// TODO better key=value grammer
	// TODO refactor with grammerL: class grammer, id grammer, refer some popular grammer
	var parseAttribute = function parseAttribute(attributes, nextAttr) {
	    // key=value key=value
	    // value='abc' value=true value=123 value="def"
	    if (isString(attributes)) {
	        (function () {
	            var str = attributes.trim(),
	                kvs = [];

	            var stop = false;
	            while (!stop) {
	                var newstr = str.replace(ITEM_REG, function (matchStr, $1, $2) {
	                    kvs.push([$1, $2]);
	                    return '';
	                }).trim();
	                if (newstr === str) {
	                    stop = true;
	                }
	                str = newstr;
	            }

	            attributes = {};
	            for (var i = 0; i < kvs.length; i++) {
	                var _kvs$i = _slicedToArray(kvs[i], 2);

	                var key = _kvs$i[0];
	                var value = _kvs$i[1];

	                if (value[0] === '\'' && value[value.length - 1] === '\'' || value[0] === '"' && value[value.length - 1] === '"') {
	                    value = value.substring(1, value.length - 1);
	                }
	                attributes[key] = value;
	            }
	        })();
	    }
	    // merge
	    attributes = mergeMap(attributes, nextAttr);

	    if (attributes.style) {
	        attributes.style = getStyleString(attributes.style);
	    }

	    // TODO presudo
	    /*
	    if (attributes.presudo) {
	        for (let name in attributes.presudo) {
	            attributes.presudo[name] = getStyleString(attributes.presudo[name]);
	        }
	    }
	    */

	    return attributes;
	};

	var getStyleString = function getStyleString() {
	    var attr = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	    if (isString(attr)) {
	        return attr;
	    }

	    if (!isObject(attr)) {
	        throw new TypeError('Expect object for style object, but got ' + attr);
	    }
	    var style = '';
	    for (var key in attr) {
	        var value = attr[key];
	        key = convertStyleKey(key);
	        value = convertStyleValue(value, key);
	        style = style + ';' + key + ': ' + value;
	    }
	    return style;
	};

	var convertStyleKey = function convertStyleKey(key) {
	    return key.replace(/[A-Z]/, function (letter) {
	        return '-' + letter.toLowerCase();
	    });
	};

	var convertStyleValue = function convertStyleValue(value, key) {
	    if (typeof value === 'number' && key !== 'z-index') {
	        return value + 'px';
	    }
	    if (key === 'padding' || key === 'margin') {
	        var parts = value.split(' ');
	        for (var i = 0; i < parts.length; i++) {
	            var part = parts[i];
	            if (!isNaN(Number(part))) {
	                parts[i] = part + 'px';
	            }
	        }

	        value = parts.join(' ');
	    }
	    return value;
	};

	module.exports = parseAttribute;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(17);

	var isObject = _require.isObject;
	var funType = _require.funType;
	var or = _require.or;
	var isString = _require.isString;
	var isFalsy = _require.isFalsy;
	var likeArray = _require.likeArray;


	var iterate = __webpack_require__(20);

	var _require2 = __webpack_require__(21);

	var map = _require2.map;
	var reduce = _require2.reduce;
	var find = _require2.find;
	var findIndex = _require2.findIndex;
	var forEach = _require2.forEach;
	var filter = _require2.filter;
	var any = _require2.any;
	var exist = _require2.exist;
	var compact = _require2.compact;


	var contain = function contain(list, item, fopts) {
	    return findIndex(list, item, fopts) !== -1;
	};

	var difference = function difference(list1, list2, fopts) {
	    return reduce(list1, function (prev, item) {
	        if (!contain(list2, item, fopts) && !contain(prev, item, fopts)) {
	            prev.push(item);
	        }
	        return prev;
	    }, []);
	};

	var union = function union(list1, list2, fopts) {
	    return deRepeat(list2, fopts, deRepeat(list1, fopts));
	};

	var mergeMap = function mergeMap() {
	    var map1 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var map2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    return reduce(map2, setValueKey, reduce(map1, setValueKey, {}));
	};

	var setValueKey = function setValueKey(obj, value, key) {
	    obj[key] = value;
	    return obj;
	};

	var interset = function interset(list1, list2, fopts) {
	    return reduce(list1, function (prev, cur) {
	        if (contain(list2, cur, fopts)) {
	            prev.push(cur);
	        }
	        return prev;
	    }, []);
	};

	var deRepeat = function deRepeat(list, fopts) {
	    var init = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	    return reduce(list, function (prev, cur) {
	        if (!contain(prev, cur, fopts)) {
	            prev.push(cur);
	        }
	        return prev;
	    }, init);
	};

	/**
	 * a.b.c
	 */
	var get = funType(function (sandbox) {
	    var name = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

	    name = name.trim();
	    var parts = !name ? [] : name.split('.');
	    return reduce(parts, getValue, sandbox, invertLogic);
	}, [isObject, or(isString, isFalsy)]);

	var getValue = function getValue(obj, key) {
	    return obj[key];
	};

	var invertLogic = function invertLogic(v) {
	    return !v;
	};

	var delay = function delay(time) {
	    return new Promise(function (resolve) {
	        setTimeout(resolve, time);
	    });
	};

	var flat = function flat(list) {
	    if (likeArray(list) && !isString(list)) {
	        return reduce(list, function (prev, item) {
	            prev = prev.concat(flat(item));
	            return prev;
	        }, []);
	    } else {
	        return [list];
	    }
	};

	module.exports = {
	    flat: flat,
	    contain: contain,
	    difference: difference,
	    union: union,
	    interset: interset,
	    map: map,
	    reduce: reduce,
	    iterate: iterate,
	    find: find,
	    findIndex: findIndex,
	    deRepeat: deRepeat,
	    forEach: forEach,
	    filter: filter,
	    any: any,
	    exist: exist,
	    get: get,
	    delay: delay,
	    mergeMap: mergeMap,
	    compact: compact
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(17);

	var likeArray = _require.likeArray;
	var isObject = _require.isObject;
	var funType = _require.funType;
	var isFunction = _require.isFunction;
	var isUndefined = _require.isUndefined;
	var or = _require.or;
	var isNumber = _require.isNumber;
	var isFalsy = _require.isFalsy;
	var mapType = _require.mapType;

	/**
	 *
	 * preidcate: chose items to iterate
	 * limit: when to stop iteration
	 * transfer: transfer item
	 * output
	 */

	var iterate = funType(function () {
	    var domain = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var predicate = opts.predicate;
	    var transfer = opts.transfer;
	    var output = opts.output;
	    var limit = opts.limit;
	    var def = opts.def;


	    opts.predicate = predicate || truthy;
	    opts.transfer = transfer || id;
	    opts.output = output || toList;
	    if (limit === undefined) limit = domain && domain.length;
	    limit = opts.limit = stopCondition(limit);

	    var rets = def;
	    var count = 0;

	    if (likeArray(domain)) {
	        for (var i = 0; i < domain.length; i++) {
	            var itemRet = iterateItem(domain, i, count, rets, opts);
	            rets = itemRet.rets;
	            count = itemRet.count;
	            if (itemRet.stop) return rets;
	        }
	    } else if (isObject(domain)) {
	        for (var name in domain) {
	            var _itemRet = iterateItem(domain, name, count, rets, opts);
	            rets = _itemRet.rets;
	            count = _itemRet.count;
	            if (_itemRet.stop) return rets;
	        }
	    }

	    return rets;
	}, [or(isObject, isFunction, isFalsy), or(isUndefined, mapType({
	    predicate: or(isFunction, isFalsy),
	    transfer: or(isFunction, isFalsy),
	    output: or(isFunction, isFalsy),
	    limit: or(isUndefined, isNumber, isFunction)
	}))]);

	var iterateItem = function iterateItem(domain, name, count, rets, _ref) {
	    var predicate = _ref.predicate;
	    var transfer = _ref.transfer;
	    var output = _ref.output;
	    var limit = _ref.limit;

	    var item = domain[name];
	    if (limit(rets, item, name, domain, count)) {
	        // stop
	        return {
	            stop: true,
	            count: count,
	            rets: rets
	        };
	    }

	    if (predicate(item)) {
	        rets = output(rets, transfer(item, name, domain, rets), name, domain);
	        count++;
	    }
	    return {
	        stop: false,
	        count: count,
	        rets: rets
	    };
	};

	var stopCondition = function stopCondition(limit) {
	    if (isUndefined(limit)) {
	        return falsy;
	    } else if (isNumber(limit)) {
	        return function (rets, item, name, domain, count) {
	            return count >= limit;
	        };
	    } else {
	        return limit;
	    }
	};

	var toList = function toList(prev, v) {
	    prev.push(v);
	    return prev;
	};

	var truthy = function truthy() {
	    return true;
	};

	var falsy = function falsy() {
	    return false;
	};

	var id = function id(v) {
	    return v;
	};

	module.exports = iterate;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var iterate = __webpack_require__(20);

	var defauls = {
	    eq: function eq(v1, v2) {
	        return v1 === v2;
	    }
	};

	var setDefault = function setDefault(opts, defauls) {
	    for (var name in defauls) {
	        opts[name] = opts[name] || defauls[name];
	    }
	};

	var forEach = function forEach(list, handler) {
	    return iterate(list, {
	        limit: function limit(rets) {
	            if (rets === true) return true;
	            return false;
	        },
	        transfer: handler,
	        output: function output(prev, cur) {
	            return cur;
	        },
	        def: false
	    });
	};

	var map = function map(list, handler, limit) {
	    return iterate(list, {
	        transfer: handler,
	        def: [],
	        limit: limit
	    });
	};

	var reduce = function reduce(list, handler, def, limit) {
	    return iterate(list, {
	        output: handler,
	        def: def,
	        limit: limit
	    });
	};

	var filter = function filter(list, handler, limit) {
	    return reduce(list, function (prev, cur, index, list) {
	        handler && handler(cur, index, list) && prev.push(cur);
	        return prev;
	    }, [], limit);
	};

	var find = function find(list, item, fopts) {
	    var index = findIndex(list, item, fopts);
	    if (index === -1) return undefined;
	    return list[index];
	};

	var any = function any(list, handler) {
	    return reduce(list, function (prev, cur, index, list) {
	        var curLogic = handler && handler(cur, index, list);
	        return prev && originLogic(curLogic);
	    }, true, falsyIt);
	};

	var exist = function exist(list, handler) {
	    return reduce(list, function (prev, cur, index, list) {
	        var curLogic = handler && handler(cur, index, list);
	        return prev || originLogic(curLogic);
	    }, false, originLogic);
	};

	var findIndex = function findIndex(list, item) {
	    var fopts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    setDefault(fopts, defauls);

	    var eq = fopts.eq;

	    var predicate = function predicate(v) {
	        return eq(item, v);
	    };
	    var ret = iterate(list, {
	        transfer: indexTransfer,
	        limit: onlyOne,
	        predicate: predicate,
	        def: []
	    });
	    if (!ret.length) return -1;
	    return ret[0];
	};

	var compact = function compact(list) {
	    return reduce(list, function (prev, cur) {
	        if (cur) prev.push(cur);
	        return prev;
	    }, []);
	};

	var indexTransfer = function indexTransfer(item, index) {
	    return index;
	};

	var onlyOne = function onlyOne(rets, item, name, domain, count) {
	    return count >= 1;
	};

	var falsyIt = function falsyIt(v) {
	    return !v;
	};

	var originLogic = function originLogic(v) {
	    return !!v;
	};

	module.exports = {
	    map: map,
	    forEach: forEach,
	    reduce: reduce,
	    find: find,
	    findIndex: findIndex,
	    filter: filter,
	    any: any,
	    exist: exist,
	    compact: compact
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var EventMatrix = __webpack_require__(23);

	var _EventMatrix = EventMatrix();

	var addHandler = _EventMatrix.addHandler;
	var removeTree = _EventMatrix.removeTree;
	var removeNode = _EventMatrix.removeNode;
	var getNodeHandleMap = _EventMatrix.getNodeHandleMap;
	var attachDocument = _EventMatrix.attachDocument;


	var bindEvents = function bindEvents(node, eventMap) {
	    for (var type in eventMap) {
	        addHandler(type, node, eventMap[type]);
	    }
	};

	var clearBelow = removeTree;

	var moveNodeEvent = function moveNodeEvent(target, source) {
	    var handleMap = getNodeHandleMap(source);
	    removeNode(target);

	    for (var type in handleMap) {
	        var handlers = handleMap[type];
	        for (var i = 0; i < handlers.length; i++) {
	            var handler = handlers[i];
	            addHandler(type, target, handler);
	        }
	    }

	    //
	    removeNode(source);
	};

	module.exports = {
	    bindEvents: bindEvents,
	    clearBelow: clearBelow,
	    moveNodeEvent: moveNodeEvent,
	    attachDocument: attachDocument
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(24);

	var findIndex = _require.findIndex;
	var contain = _require.contain;
	var map = _require.map;
	var forEach = _require.forEach;


	module.exports = function () {
	    var matrix = {};
	    var docs = [];

	    var addHandler = function addHandler(type, node, handler) {
	        var handlerObjs = matrix[type];
	        if (!handlerObjs) {
	            updateDocs(type);
	            // add new type
	            handlerObjs = matrix[type] = [{
	                node: node,
	                handlers: []
	            }];
	        }

	        var handlers = getHandlers(type, node);
	        if (!handlers) {
	            handlers = [];
	            matrix[type].push({
	                node: node,
	                handlers: handlers
	            });
	        }
	        if (!contain(handlers, handler)) {
	            handlers.push(handler);
	        }
	    };

	    var attachDocument = function attachDocument() {
	        var doc = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

	        if (!contain(docs, doc)) {
	            for (var type in matrix) {
	                doc.addEventListener(type, listener(type));
	            }
	            docs.push(doc);
	        }
	    };

	    var updateDocs = function updateDocs(type) {
	        if (!docs.length) {
	            docs.push(document);
	        }
	        for (var i = 0; i < docs.length; i++) {
	            var doc = docs[i];
	            doc.addEventListener(type, listener(type));
	        }
	    };

	    var getNodeHandleMap = function getNodeHandleMap(item) {
	        var map = {};
	        for (var type in matrix) {
	            var handlers = getHandlers(type, item);
	            if (handlers) map[type] = handlers;
	        }
	        return map;
	    };

	    var removeHandler = function removeHandler(type, node, handler) {
	        var handlers = getHandlers(type, node);
	        if (handlers && handler.length) {
	            var index = findIndex(handlers, handler);
	            if (index !== -1) {
	                handlers.splice(index, 1);
	            }
	        }
	    };

	    var removeTree = function removeTree(item) {
	        for (var type in matrix) {
	            var handlerObjs = matrix[type];
	            for (var i = 0; i < handlerObjs.length; i++) {
	                var node = handlerObjs[i].node;

	                if (below(node, item)) {
	                    // remove i
	                    handlerObjs.splice(i, 1);
	                    i = i - 1;
	                }
	            }
	        }
	    };

	    var removeNode = function removeNode(item) {
	        for (var type in matrix) {
	            var handlerObjs = matrix[type];
	            for (var i = 0; i < handlerObjs.length; i++) {
	                var node = handlerObjs[i].node;

	                if (node === item) {
	                    // remove node
	                    handlerObjs.splice(i, 1);
	                    break;
	                }
	            }
	        }
	    };

	    var listener = function listener(type) {
	        return function (e) {
	            var _this = this;

	            var target = e.target;
	            var nodePath = getNodePath(target);

	            var oldProp = e.stopPropagation;
	            e.stopPropagation = function () {
	                e.__stopPropagation = true;
	                oldProp.apply(this, arguments);
	            };

	            var handlersList = map(nodePath, function (curNode) {
	                return getHandlers(type, curNode);
	            });
	            forEach(handlersList, function (handlers) {
	                if (handlers && handlers.length) {
	                    for (var j = 0; j < handlers.length; j++) {
	                        if (e.__stopPropagation) {
	                            return true;
	                        }

	                        var handler = handlers[j];
	                        handler.apply(_this, [e]);
	                    }
	                }
	            });
	        };
	    };

	    var getHandlers = function getHandlers(type, target) {
	        var handlerObjs = matrix[type];
	        for (var i = 0; i < handlerObjs.length; i++) {
	            var _handlerObjs$i = handlerObjs[i];
	            var node = _handlerObjs$i.node;
	            var handlers = _handlerObjs$i.handlers;

	            if (node === target) {
	                return handlers;
	            }
	        }

	        return null;
	    };

	    return {
	        addHandler: addHandler,
	        removeHandler: removeHandler,
	        removeTree: removeTree,
	        removeNode: removeNode,
	        getNodeHandleMap: getNodeHandleMap,
	        attachDocument: attachDocument
	    };
	};

	var getNodePath = function getNodePath(target) {
	    var paths = [];
	    while (target) {
	        paths.push(target);
	        target = target.parentNode;
	    }
	    return paths;
	};

	var below = function below(node, ancestor) {
	    while (node) {
	        if (node === ancestor) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(17);

	var isObject = _require.isObject;
	var funType = _require.funType;
	var or = _require.or;
	var isString = _require.isString;
	var isFalsy = _require.isFalsy;
	var likeArray = _require.likeArray;


	var iterate = __webpack_require__(25);

	var _require2 = __webpack_require__(26);

	var map = _require2.map;
	var reduce = _require2.reduce;
	var find = _require2.find;
	var findIndex = _require2.findIndex;
	var forEach = _require2.forEach;
	var filter = _require2.filter;
	var any = _require2.any;
	var exist = _require2.exist;
	var compact = _require2.compact;


	var contain = function contain(list, item, fopts) {
	    return findIndex(list, item, fopts) !== -1;
	};

	var difference = function difference(list1, list2, fopts) {
	    return reduce(list1, function (prev, item) {
	        if (!contain(list2, item, fopts) && !contain(prev, item, fopts)) {
	            prev.push(item);
	        }
	        return prev;
	    }, []);
	};

	var union = function union(list1, list2, fopts) {
	    return deRepeat(list2, fopts, deRepeat(list1, fopts));
	};

	var mergeMap = function mergeMap() {
	    var map1 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var map2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    return reduce(map2, setValueKey, reduce(map1, setValueKey, {}));
	};

	var setValueKey = function setValueKey(obj, value, key) {
	    obj[key] = value;
	    return obj;
	};

	var interset = function interset(list1, list2, fopts) {
	    return reduce(list1, function (prev, cur) {
	        if (contain(list2, cur, fopts)) {
	            prev.push(cur);
	        }
	        return prev;
	    }, []);
	};

	var deRepeat = function deRepeat(list, fopts) {
	    var init = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	    return reduce(list, function (prev, cur) {
	        if (!contain(prev, cur, fopts)) {
	            prev.push(cur);
	        }
	        return prev;
	    }, init);
	};

	/**
	 * a.b.c
	 */
	var get = funType(function (sandbox) {
	    var name = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

	    name = name.trim();
	    var parts = !name ? [] : name.split('.');
	    return reduce(parts, getValue, sandbox, invertLogic);
	}, [isObject, or(isString, isFalsy)]);

	var getValue = function getValue(obj, key) {
	    return obj[key];
	};

	var invertLogic = function invertLogic(v) {
	    return !v;
	};

	var delay = function delay(time) {
	    return new Promise(function (resolve) {
	        setTimeout(resolve, time);
	    });
	};

	var flat = function flat(list) {
	    if (likeArray(list) && !isString(list)) {
	        return reduce(list, function (prev, item) {
	            prev = prev.concat(flat(item));
	            return prev;
	        }, []);
	    } else {
	        return [list];
	    }
	};

	module.exports = {
	    flat: flat,
	    contain: contain,
	    difference: difference,
	    union: union,
	    interset: interset,
	    map: map,
	    reduce: reduce,
	    iterate: iterate,
	    find: find,
	    findIndex: findIndex,
	    deRepeat: deRepeat,
	    forEach: forEach,
	    filter: filter,
	    any: any,
	    exist: exist,
	    get: get,
	    delay: delay,
	    mergeMap: mergeMap,
	    compact: compact
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(17);

	var likeArray = _require.likeArray;
	var isObject = _require.isObject;
	var funType = _require.funType;
	var isFunction = _require.isFunction;
	var isUndefined = _require.isUndefined;
	var or = _require.or;
	var isNumber = _require.isNumber;
	var isFalsy = _require.isFalsy;
	var mapType = _require.mapType;

	/**
	 *
	 * preidcate: chose items to iterate
	 * limit: when to stop iteration
	 * transfer: transfer item
	 * output
	 */

	var iterate = funType(function () {
	    var domain = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var predicate = opts.predicate;
	    var transfer = opts.transfer;
	    var output = opts.output;
	    var limit = opts.limit;
	    var def = opts.def;


	    opts.predicate = predicate || truthy;
	    opts.transfer = transfer || id;
	    opts.output = output || toList;
	    if (limit === undefined) limit = domain && domain.length;
	    limit = opts.limit = stopCondition(limit);

	    var rets = def;
	    var count = 0;

	    if (likeArray(domain)) {
	        for (var i = 0; i < domain.length; i++) {
	            var itemRet = iterateItem(domain, i, count, rets, opts);
	            rets = itemRet.rets;
	            count = itemRet.count;
	            if (itemRet.stop) return rets;
	        }
	    } else if (isObject(domain)) {
	        for (var name in domain) {
	            var _itemRet = iterateItem(domain, name, count, rets, opts);
	            rets = _itemRet.rets;
	            count = _itemRet.count;
	            if (_itemRet.stop) return rets;
	        }
	    }

	    return rets;
	}, [or(isObject, isFunction, isFalsy), or(isUndefined, mapType({
	    predicate: or(isFunction, isFalsy),
	    transfer: or(isFunction, isFalsy),
	    output: or(isFunction, isFalsy),
	    limit: or(isUndefined, isNumber, isFunction)
	}))]);

	var iterateItem = function iterateItem(domain, name, count, rets, _ref) {
	    var predicate = _ref.predicate;
	    var transfer = _ref.transfer;
	    var output = _ref.output;
	    var limit = _ref.limit;

	    var item = domain[name];
	    if (limit(rets, item, name, domain, count)) {
	        // stop
	        return {
	            stop: true,
	            count: count,
	            rets: rets
	        };
	    }

	    if (predicate(item)) {
	        rets = output(rets, transfer(item, name, domain, rets), name, domain);
	        count++;
	    }
	    return {
	        stop: false,
	        count: count,
	        rets: rets
	    };
	};

	var stopCondition = function stopCondition(limit) {
	    if (isUndefined(limit)) {
	        return falsy;
	    } else if (isNumber(limit)) {
	        return function (rets, item, name, domain, count) {
	            return count >= limit;
	        };
	    } else {
	        return limit;
	    }
	};

	var toList = function toList(prev, v) {
	    prev.push(v);
	    return prev;
	};

	var truthy = function truthy() {
	    return true;
	};

	var falsy = function falsy() {
	    return false;
	};

	var id = function id(v) {
	    return v;
	};

	module.exports = iterate;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var iterate = __webpack_require__(25);

	var defauls = {
	    eq: function eq(v1, v2) {
	        return v1 === v2;
	    }
	};

	var setDefault = function setDefault(opts, defauls) {
	    for (var name in defauls) {
	        opts[name] = opts[name] || defauls[name];
	    }
	};

	var forEach = function forEach(list, handler) {
	    return iterate(list, {
	        limit: function limit(rets) {
	            if (rets === true) return true;
	            return false;
	        },
	        transfer: handler,
	        output: function output(prev, cur) {
	            return cur;
	        },
	        def: false
	    });
	};

	var map = function map(list, handler, limit) {
	    return iterate(list, {
	        transfer: handler,
	        def: [],
	        limit: limit
	    });
	};

	var reduce = function reduce(list, handler, def, limit) {
	    return iterate(list, {
	        output: handler,
	        def: def,
	        limit: limit
	    });
	};

	var filter = function filter(list, handler, limit) {
	    return reduce(list, function (prev, cur, index, list) {
	        handler && handler(cur, index, list) && prev.push(cur);
	        return prev;
	    }, [], limit);
	};

	var find = function find(list, item, fopts) {
	    var index = findIndex(list, item, fopts);
	    if (index === -1) return undefined;
	    return list[index];
	};

	var any = function any(list, handler) {
	    return reduce(list, function (prev, cur, index, list) {
	        var curLogic = handler && handler(cur, index, list);
	        return prev && originLogic(curLogic);
	    }, true, falsyIt);
	};

	var exist = function exist(list, handler) {
	    return reduce(list, function (prev, cur, index, list) {
	        var curLogic = handler && handler(cur, index, list);
	        return prev || originLogic(curLogic);
	    }, false, originLogic);
	};

	var findIndex = function findIndex(list, item) {
	    var fopts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    setDefault(fopts, defauls);

	    var eq = fopts.eq;

	    var predicate = function predicate(v) {
	        return eq(item, v);
	    };
	    var ret = iterate(list, {
	        transfer: indexTransfer,
	        limit: onlyOne,
	        predicate: predicate,
	        def: []
	    });
	    if (!ret.length) return -1;
	    return ret[0];
	};

	var compact = function compact(list) {
	    return reduce(list, function (prev, cur) {
	        if (cur) prev.push(cur);
	        return prev;
	    }, []);
	};

	var indexTransfer = function indexTransfer(item, index) {
	    return index;
	};

	var onlyOne = function onlyOne(rets, item, name, domain, count) {
	    return count >= 1;
	};

	var falsyIt = function falsyIt(v) {
	    return !v;
	};

	var originLogic = function originLogic(v) {
	    return !!v;
	};

	module.exports = {
	    map: map,
	    forEach: forEach,
	    reduce: reduce,
	    find: find,
	    findIndex: findIndex,
	    filter: filter,
	    any: any,
	    exist: exist,
	    compact: compact
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var twowaybinding = __webpack_require__(28);
	var eventError = __webpack_require__(33);

	module.exports = {
	    twowaybinding: twowaybinding,
	    eventError: eventError
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(29);

	var get = _require.get;
	var set = _require.set;


	module.exports = function (obj, path) {
	    return function (tagName, attributes, childExp) {
	        var value = get(obj, path, '');
	        if (tagName === 'input') {
	            attributes.value = value;
	        } else {
	            childExp.unshift(value);
	        }

	        if (!attributes.onkeyup) {
	            attributes.onkeyup = function (e) {
	                set(obj, path, e.target.value);
	            };
	        }
	    };
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(30);

	var reduce = _require.reduce;

	var _require2 = __webpack_require__(17);

	var funType = _require2.funType;
	var isObject = _require2.isObject;
	var or = _require2.or;
	var isString = _require2.isString;
	var isFalsy = _require2.isFalsy;


	var defineProperty = function defineProperty(obj, key, opts) {
	    if (Object.defineProperty) {
	        Object.defineProperty(obj, key, opts);
	    } else {
	        obj[key] = opts.value;
	    }
	    return obj;
	};

	var hasOwnProperty = function hasOwnProperty(obj, key) {
	    if (obj.hasOwnProperty) {
	        return obj.hasOwnProperty(key);
	    }
	    for (var name in obj) {
	        if (name === key) return true;
	    }
	    return false;
	};

	var toArray = function toArray() {
	    var v = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    return Array.prototype.slice.call(v);
	};

	/**
	 * a.b.c
	 */
	var get = funType(function (sandbox) {
	    var name = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

	    name = name.trim();
	    var parts = !name ? [] : name.split('.');
	    return reduce(parts, getValue, sandbox, invertLogic);
	}, [isObject, or(isString, isFalsy)]);

	var getValue = function getValue(obj, key) {
	    return obj[key];
	};

	var invertLogic = function invertLogic(v) {
	    return !v;
	};

	var set = function set(sandbox) {
	    var name = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	    var value = arguments[2];

	    name = name.trim();
	    var parts = !name ? [] : name.split('.');
	    var parent = sandbox;
	    if (!isObject(parent)) return;
	    if (!parts.length) return;
	    for (var i = 0; i < parts.length - 1; i++) {
	        var part = parts[i];
	        parent = parent[part];
	        // avoid exception
	        if (!isObject(parent)) return null;
	    }

	    parent[parts[parts.length - 1]] = value;
	    return true;
	};

	/**
	 * provide property:
	 *
	 * 1. read props freely
	 *
	 * 2. change props by provide token
	 */

	var authProp = function authProp(token) {
	    var set = function set(obj, key, value) {
	        var temp = null;

	        if (!hasOwnProperty(obj, key)) {
	            defineProperty(obj, key, {
	                enumerable: false,
	                configurable: false,
	                set: function set(value) {
	                    if (isObject(value)) {
	                        if (value.token === token) {
	                            // save
	                            temp = value.value;
	                        }
	                    }
	                },
	                get: function get() {
	                    return temp;
	                }
	            });
	        }

	        setProp(obj, key, value);
	    };

	    var setProp = function setProp(obj, key, value) {
	        obj[key] = {
	            token: token,
	            value: value
	        };
	    };

	    return {
	        set: set
	    };
	};

	var evalCode = function evalCode(code) {
	    if (typeof code !== 'string') return code;
	    return eval('(function(){\n    try {\n        ' + code + '\n    } catch(err) {\n        console.log(\'Error happened, when eval code.\');\n        throw err;\n    }\n})()');
	};

	var delay = function delay(time) {
	    return new Promise(function (resolve) {
	        setTimeout(resolve, time);
	    });
	};

	var runSequence = function runSequence(list) {
	    var params = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	    var context = arguments[2];
	    var stopV = arguments[3];

	    if (!list.length) {
	        return Promise.resolve();
	    }
	    var fun = list[0];
	    var v = fun && fun.apply(context, params);
	    if (stopV && v === stopV) {
	        return Promise.resolve(stopV);
	    }
	    return Promise.resolve(v).then(function () {
	        return runSequence(list.slice(1), params, context, stopV);
	    });
	};

	module.exports = {
	    defineProperty: defineProperty,
	    hasOwnProperty: hasOwnProperty,
	    toArray: toArray,
	    get: get,
	    set: set,
	    authProp: authProp,
	    evalCode: evalCode,
	    delay: delay,
	    runSequence: runSequence
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(17);

	var isObject = _require.isObject;
	var funType = _require.funType;
	var or = _require.or;
	var isString = _require.isString;
	var isFalsy = _require.isFalsy;
	var likeArray = _require.likeArray;


	var iterate = __webpack_require__(31);

	var _require2 = __webpack_require__(32);

	var map = _require2.map;
	var reduce = _require2.reduce;
	var find = _require2.find;
	var findIndex = _require2.findIndex;
	var forEach = _require2.forEach;
	var filter = _require2.filter;
	var any = _require2.any;
	var exist = _require2.exist;
	var compact = _require2.compact;


	var contain = function contain(list, item, fopts) {
	    return findIndex(list, item, fopts) !== -1;
	};

	var difference = function difference(list1, list2, fopts) {
	    return reduce(list1, function (prev, item) {
	        if (!contain(list2, item, fopts) && !contain(prev, item, fopts)) {
	            prev.push(item);
	        }
	        return prev;
	    }, []);
	};

	var union = function union(list1, list2, fopts) {
	    return deRepeat(list2, fopts, deRepeat(list1, fopts));
	};

	var mergeMap = function mergeMap() {
	    var map1 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var map2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    return reduce(map2, setValueKey, reduce(map1, setValueKey, {}));
	};

	var setValueKey = function setValueKey(obj, value, key) {
	    obj[key] = value;
	    return obj;
	};

	var interset = function interset(list1, list2, fopts) {
	    return reduce(list1, function (prev, cur) {
	        if (contain(list2, cur, fopts)) {
	            prev.push(cur);
	        }
	        return prev;
	    }, []);
	};

	var deRepeat = function deRepeat(list, fopts) {
	    var init = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	    return reduce(list, function (prev, cur) {
	        if (!contain(prev, cur, fopts)) {
	            prev.push(cur);
	        }
	        return prev;
	    }, init);
	};

	/**
	 * a.b.c
	 */
	var get = funType(function (sandbox) {
	    var name = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

	    name = name.trim();
	    var parts = !name ? [] : name.split('.');
	    return reduce(parts, getValue, sandbox, invertLogic);
	}, [isObject, or(isString, isFalsy)]);

	var getValue = function getValue(obj, key) {
	    return obj[key];
	};

	var invertLogic = function invertLogic(v) {
	    return !v;
	};

	var delay = function delay(time) {
	    return new Promise(function (resolve) {
	        setTimeout(resolve, time);
	    });
	};

	var flat = function flat(list) {
	    if (likeArray(list) && !isString(list)) {
	        return reduce(list, function (prev, item) {
	            prev = prev.concat(flat(item));
	            return prev;
	        }, []);
	    } else {
	        return [list];
	    }
	};

	module.exports = {
	    flat: flat,
	    contain: contain,
	    difference: difference,
	    union: union,
	    interset: interset,
	    map: map,
	    reduce: reduce,
	    iterate: iterate,
	    find: find,
	    findIndex: findIndex,
	    deRepeat: deRepeat,
	    forEach: forEach,
	    filter: filter,
	    any: any,
	    exist: exist,
	    get: get,
	    delay: delay,
	    mergeMap: mergeMap,
	    compact: compact
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(17);

	var likeArray = _require.likeArray;
	var isObject = _require.isObject;
	var funType = _require.funType;
	var isFunction = _require.isFunction;
	var isUndefined = _require.isUndefined;
	var or = _require.or;
	var isNumber = _require.isNumber;
	var isFalsy = _require.isFalsy;
	var mapType = _require.mapType;

	/**
	 *
	 * preidcate: chose items to iterate
	 * limit: when to stop iteration
	 * transfer: transfer item
	 * output
	 */

	var iterate = funType(function () {
	    var domain = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var predicate = opts.predicate;
	    var transfer = opts.transfer;
	    var output = opts.output;
	    var limit = opts.limit;
	    var def = opts.def;


	    opts.predicate = predicate || truthy;
	    opts.transfer = transfer || id;
	    opts.output = output || toList;
	    if (limit === undefined) limit = domain && domain.length;
	    limit = opts.limit = stopCondition(limit);

	    var rets = def;
	    var count = 0;

	    if (likeArray(domain)) {
	        for (var i = 0; i < domain.length; i++) {
	            var itemRet = iterateItem(domain, i, count, rets, opts);
	            rets = itemRet.rets;
	            count = itemRet.count;
	            if (itemRet.stop) return rets;
	        }
	    } else if (isObject(domain)) {
	        for (var name in domain) {
	            var _itemRet = iterateItem(domain, name, count, rets, opts);
	            rets = _itemRet.rets;
	            count = _itemRet.count;
	            if (_itemRet.stop) return rets;
	        }
	    }

	    return rets;
	}, [or(isObject, isFunction, isFalsy), or(isUndefined, mapType({
	    predicate: or(isFunction, isFalsy),
	    transfer: or(isFunction, isFalsy),
	    output: or(isFunction, isFalsy),
	    limit: or(isUndefined, isNumber, isFunction)
	}))]);

	var iterateItem = function iterateItem(domain, name, count, rets, _ref) {
	    var predicate = _ref.predicate;
	    var transfer = _ref.transfer;
	    var output = _ref.output;
	    var limit = _ref.limit;

	    var item = domain[name];
	    if (limit(rets, item, name, domain, count)) {
	        // stop
	        return {
	            stop: true,
	            count: count,
	            rets: rets
	        };
	    }

	    if (predicate(item)) {
	        rets = output(rets, transfer(item, name, domain, rets), name, domain);
	        count++;
	    }
	    return {
	        stop: false,
	        count: count,
	        rets: rets
	    };
	};

	var stopCondition = function stopCondition(limit) {
	    if (isUndefined(limit)) {
	        return falsy;
	    } else if (isNumber(limit)) {
	        return function (rets, item, name, domain, count) {
	            return count >= limit;
	        };
	    } else {
	        return limit;
	    }
	};

	var toList = function toList(prev, v) {
	    prev.push(v);
	    return prev;
	};

	var truthy = function truthy() {
	    return true;
	};

	var falsy = function falsy() {
	    return false;
	};

	var id = function id(v) {
	    return v;
	};

	module.exports = iterate;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var iterate = __webpack_require__(31);

	var defauls = {
	    eq: function eq(v1, v2) {
	        return v1 === v2;
	    }
	};

	var setDefault = function setDefault(opts, defauls) {
	    for (var name in defauls) {
	        opts[name] = opts[name] || defauls[name];
	    }
	};

	var forEach = function forEach(list, handler) {
	    return iterate(list, {
	        limit: function limit(rets) {
	            if (rets === true) return true;
	            return false;
	        },
	        transfer: handler,
	        output: function output(prev, cur) {
	            return cur;
	        },
	        def: false
	    });
	};

	var map = function map(list, handler, limit) {
	    return iterate(list, {
	        transfer: handler,
	        def: [],
	        limit: limit
	    });
	};

	var reduce = function reduce(list, handler, def, limit) {
	    return iterate(list, {
	        output: handler,
	        def: def,
	        limit: limit
	    });
	};

	var filter = function filter(list, handler, limit) {
	    return reduce(list, function (prev, cur, index, list) {
	        handler && handler(cur, index, list) && prev.push(cur);
	        return prev;
	    }, [], limit);
	};

	var find = function find(list, item, fopts) {
	    var index = findIndex(list, item, fopts);
	    if (index === -1) return undefined;
	    return list[index];
	};

	var any = function any(list, handler) {
	    return reduce(list, function (prev, cur, index, list) {
	        var curLogic = handler && handler(cur, index, list);
	        return prev && originLogic(curLogic);
	    }, true, falsyIt);
	};

	var exist = function exist(list, handler) {
	    return reduce(list, function (prev, cur, index, list) {
	        var curLogic = handler && handler(cur, index, list);
	        return prev || originLogic(curLogic);
	    }, false, originLogic);
	};

	var findIndex = function findIndex(list, item) {
	    var fopts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    setDefault(fopts, defauls);

	    var eq = fopts.eq;

	    var predicate = function predicate(v) {
	        return eq(item, v);
	    };
	    var ret = iterate(list, {
	        transfer: indexTransfer,
	        limit: onlyOne,
	        predicate: predicate,
	        def: []
	    });
	    if (!ret.length) return -1;
	    return ret[0];
	};

	var compact = function compact(list) {
	    return reduce(list, function (prev, cur) {
	        if (cur) prev.push(cur);
	        return prev;
	    }, []);
	};

	var indexTransfer = function indexTransfer(item, index) {
	    return index;
	};

	var onlyOne = function onlyOne(rets, item, name, domain, count) {
	    return count >= 1;
	};

	var falsyIt = function falsyIt(v) {
	    return !v;
	};

	var originLogic = function originLogic(v) {
	    return !!v;
	};

	module.exports = {
	    map: map,
	    forEach: forEach,
	    reduce: reduce,
	    find: find,
	    findIndex: findIndex,
	    filter: filter,
	    any: any,
	    exist: exist,
	    compact: compact
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (catcher) {
	    return function (tagName, attributes) {
	        for (var name in attributes) {
	            var item = attributes[name];
	            if (name.indexOf('on') === 0) {
	                if (typeof item === 'function') {
	                    attributes[name] = wrapEventHandler(item, catcher);
	                }
	            }
	        }
	    };
	};

	var wrapEventHandler = function wrapEventHandler(fun, catcher) {
	    return function () {
	        try {
	            var ret = fun.apply(this, arguments);
	            ret = Promise.resolve(ret);
	            ret.catch(catcher);
	            return ret;
	        } catch (err) {
	            return catcher(err);
	        }
	    };
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _require = __webpack_require__(29);

	var set = _require.set;

	var _require2 = __webpack_require__(17);

	var isObject = _require2.isObject;
	var isFunction = _require2.isFunction;
	var likeArray = _require2.likeArray;

	var _require3 = __webpack_require__(24);

	var forEach = _require3.forEach;


	var replace = __webpack_require__(35);

	/**
	 * render function: (data) => node
	 */

	// TODO observable for update, append

	// class level
	var View = function View(view, construct) {
	    var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    var afterRender = _ref.afterRender;

	    // TODO class level API
	    // instance level
	    var viewer = function viewer(obj, initor) {
	        // create context
	        var ctx = createCtx({
	            view: view, afterRender: afterRender
	        });

	        return createView(ctx, obj, initor, construct);
	    };

	    var viewerOps = function viewerOps(viewer) {
	        viewer.create = function (handler) {
	            var ctx = createCtx({
	                view: view, afterRender: afterRender
	            });

	            handler && handler(ctx);

	            var inst = function inst(obj, initor) {
	                return createView(ctx, obj, initor, construct);
	            };

	            inst.ctx = ctx;

	            return inst;
	        };

	        // extend some context
	        viewer.expand = function () {
	            var ctxMap = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            var newViewer = function newViewer() {
	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                    args[_key] = arguments[_key];
	                }

	                var obj = args[0];
	                args[0] = View.ext(obj, ctxMap);

	                return viewer.apply(undefined, args);
	            };

	            viewerOps(newViewer);
	            return newViewer;
	        };
	    };

	    viewerOps(viewer);

	    return viewer;
	};

	View.ext = function (data) {
	    var ctxMap = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    return function (ctx) {
	        for (var name in ctxMap) {
	            ctx[name] = ctxMap[name];
	        }
	        if (isFunction(data)) {
	            return data(ctx);
	        }
	        return data;
	    };
	};

	var createView = function createView(ctx, obj, initor, construct) {
	    var data = ctx.initData(obj, ctx);
	    // only run initor when construct view
	    initor && initor(data, ctx);
	    construct && construct(data, ctx);

	    // render node
	    return ctx.replaceView();
	};

	var createCtx = function createCtx(_ref2) {
	    var view = _ref2.view;
	    var afterRender = _ref2.afterRender;

	    var node = null,
	        data = null,
	        render = null;

	    var update = function update() {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        if (!args.length) return replaceView();
	        if (args.length === 1 && likeArray(args[0])) {
	            var arg = args[0];
	            forEach(arg, function (item) {
	                set(data, item[0], item[1]);
	            });
	            return replaceView();
	        } else {
	            var path = args[0];
	            var value = args[1];

	            // function is a special data

	            if (isFunction(value)) {
	                value = value(data);
	            }

	            set(data, path, value);
	            return replaceView();
	        }
	    };

	    var append = function append(item, viewFun) {
	        if (node) {
	            node.appendChild(viewFun(item));
	        }
	    };

	    var replaceView = function replaceView() {
	        var newNode = getNewNode();

	        // type check for newNode

	        node = replace(node, newNode);

	        afterRender && afterRender(ctx);

	        if (node) node.ctx = ctx;
	        return node;
	    };

	    var getNewNode = function getNewNode() {
	        if (!render) render = view;
	        var ret = render(data, ctx);
	        if (isFunction(ret)) {
	            render = ret;
	            return render(data, ctx);
	        } else {
	            return ret;
	        }
	    };

	    var initData = function initData(obj) {
	        data = generateData(obj, ctx);
	        return data;
	    };

	    var getNode = function getNode() {
	        return node;
	    };

	    var getData = function getData() {
	        return data;
	    };

	    var getCtx = function getCtx() {
	        return ctx;
	    };

	    // TODO refator
	    var transferCtx = function transferCtx(newNode) {
	        node = newNode;
	        newNode.ctx = ctx;
	    };

	    var ctx = {
	        update: update,
	        getNode: getNode,
	        getData: getData,
	        transferCtx: transferCtx,
	        initData: initData,
	        replaceView: replaceView,
	        append: append,
	        getCtx: getCtx
	    };

	    return ctx;
	};

	var generateData = function generateData(obj, ctx) {
	    var data = null;
	    // data generator
	    if (isFunction(obj)) {
	        data = obj(ctx);
	    } else {
	        data = obj;
	    }

	    // TODO need mount event
	    if (!isObject(data)) {
	        throw new TypeError('Expect object, but got ' + data + '. Type is ' + (typeof data === 'undefined' ? 'undefined' : _typeof(data)));
	    }
	    return data;
	};

	module.exports = View;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(22);

	var moveNodeEvent = _require.moveNodeEvent;
	var clearBelow = _require.clearBelow;

	var _require2 = __webpack_require__(29);

	var toArray = _require2.toArray;

	var _require3 = __webpack_require__(17);

	var isNode = _require3.isNode;

	var _require4 = __webpack_require__(24);

	var forEach = _require4.forEach;


	var applyAttibutes = __webpack_require__(36);

	var replaceDirectly = function replaceDirectly(node, newNode) {
	    var parent = node.parentNode;
	    if (parent) {
	        // clear node's events
	        clearBelow(node);
	        // replace
	        parent.replaceChild(newNode, node);
	        return newNode;
	    } else {
	        return node;
	    }
	};

	var removeOldNode = function removeOldNode(oldNode) {
	    var parent = oldNode.parentNode;
	    if (parent) {
	        clearBelow(oldNode);
	        parent.removeChild(oldNode);
	    }
	};

	// TODO using key
	var diffNode = function diffNode(node, newNode) {
	    if (!newNode) {
	        return removeOldNode(node);
	    }

	    if (node.nodeType === 3 && newNode.nodeType === 3) {
	        node.textContent = newNode.textContent;
	    }

	    if (isNode(node) && isNode(newNode)) {
	        if (node.nodeType === 3 && newNode.nodeType === 3) {
	            node.textContent = newNode.textContent;
	            return node;
	        }

	        if (node.tagName !== newNode.tagName || node.tagName === 'INPUT') {
	            // TODO problems performance
	            // TODO nodetype problem
	            return replaceDirectly(node, newNode);
	        } else {
	            editNode(node, newNode);
	        }
	    }
	    return node;
	};

	var editNode = function editNode(node, newNode) {
	    // attributes
	    applyAttibutes(node, newNode);
	    // events
	    moveNodeEvent(node, newNode);
	    // transfer context
	    if (newNode.ctx) {
	        newNode.ctx.transferCtx(node);
	    }
	    var orinChildNodes = toArray(node.childNodes);
	    var newChildNodes = toArray(newNode.childNodes);

	    // TODO using key
	    convertLists(orinChildNodes, newChildNodes, node);
	};

	var convertLists = function convertLists(orinChildNodes, newChildNodes, parent) {
	    removeExtra(orinChildNodes, newChildNodes);

	    // diff
	    forEach(orinChildNodes, function (orinChild, i) {
	        diffNode(orinChild, newChildNodes[i]);
	    });

	    appendMissing(orinChildNodes, newChildNodes, parent);
	    return orinChildNodes;
	};

	var removeExtra = function removeExtra(orinChildNodes, newChildNodes) {
	    // remove
	    for (var i = newChildNodes.length; i < orinChildNodes.length; i++) {
	        removeOldNode(orinChildNodes[i]);
	    }
	};

	var appendMissing = function appendMissing(orinChildNodes, newChildNodes, parent) {
	    // append
	    for (var i = orinChildNodes.length; i < newChildNodes.length; i++) {
	        var newChild = newChildNodes[i];
	        parent.appendChild(newChild);
	    }
	};

	module.exports = function (node, newNode) {
	    var ret = null;

	    if (!node) {
	        ret = newNode;
	    } else if (!newNode) {
	        removeOldNode(node);
	        ret = null;
	    } else {
	        ret = diffNode(node, newNode);
	    }

	    return ret;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(37);

	var getAttributeMap = _require.getAttributeMap;

	var _require2 = __webpack_require__(29);

	var hasOwnProperty = _require2.hasOwnProperty;

	var _require3 = __webpack_require__(24);

	var forEach = _require3.forEach;


	var applyAttibutes = function applyAttibutes(node, newNode) {
	    // attributes
	    var orinAttrMap = getAttributeMap(node.attributes);
	    var newAttrMap = getAttributeMap(newNode.attributes);

	    // update and remove
	    forEach(orinAttrMap, function (orinValue, name) {
	        if (hasOwnProperty(newAttrMap, name)) {
	            var newValue = newAttrMap[name];
	            if (newValue !== orinValue) {
	                node.setAttribute(name, newValue);
	            }
	        } else {
	            node.removeAttribute(name);
	        }
	    });

	    // append
	    forEach(newAttrMap, function (newAttr, name) {
	        if (!hasOwnProperty(orinAttrMap, name)) {
	            node.setAttribute(name, newAttr);
	        }
	    });
	};

	module.exports = applyAttibutes;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var shadowFrame = __webpack_require__(38);

	var startMomenter = __webpack_require__(39);

	var getX = function getX(elem) {
	    var x = 0;
	    while (elem) {
	        x = x + elem.offsetLeft;
	        elem = elem.offsetParent;
	    }
	    return x;
	};

	var getY = function getY(elem) {
	    var y = 0;
	    while (elem) {
	        y = y + elem.offsetTop;
	        elem = elem.offsetParent;
	    }
	    return y;
	};

	var getClientX = function getClientX(elem) {
	    return getX(elem) - window.scrollX;
	};

	var getClientY = function getClientY(elem) {
	    return getY(elem) - window.scrollY;
	};

	var removeChilds = function removeChilds(node) {
	    while (node && node.firstChild) {
	        node.removeChild(node.firstChild);
	    }
	};

	var once = function once(node, type, handler, useCapture) {
	    var fun = function fun(e) {
	        var ret = handler.apply(this, [e]);
	        node.removeEventListener(type, fun, useCapture);
	        return ret;
	    };

	    node.addEventListener(type, fun, useCapture);
	};

	var getAttributeMap = function getAttributeMap() {
	    var attributes = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	    var map = {};
	    for (var i = 0; i < attributes.length; i++) {
	        var _attributes$i = attributes[i];
	        var name = _attributes$i.name;
	        var value = _attributes$i.value;

	        map[name] = value;
	    }
	    return map;
	};

	var getClasses = function getClasses() {
	    var clz = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	    var ret = [];
	    var items = clz.split(' ');
	    for (var i = 0; i < items.length; i++) {
	        var item = items[i];
	        item = item.trim();
	        if (item) {
	            ret.push(item);
	        }
	    }
	    return ret;
	};

	module.exports = {
	    getX: getX,
	    getY: getY,
	    getClientX: getClientX,
	    getClientY: getClientY,
	    removeChilds: removeChilds,
	    once: once,
	    shadowFrame: shadowFrame,
	    getAttributeMap: getAttributeMap,
	    startMomenter: startMomenter,
	    getClasses: getClasses
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	var shadowFrame = function shadowFrame() {
	    var div = document.createElement('div');
	    var sr = div.createShadowRoot();
	    sr.innerHTML = '<div id="shadow-page"></div>';

	    var frame = null;

	    var create = function create() {
	        var html = document.getElementsByTagName('html')[0];
	        html.appendChild(div);

	        return sr.getElementById('shadow-page');
	    };

	    var start = function start() {
	        if (frame) {
	            return frame;
	        }
	        frame = new Promise(function (resolve) {
	            if (document.body) {
	                resolve(create());
	            } else {
	                document.addEventListener('DOMContentLoaded', function () {
	                    resolve(create());
	                });
	            }
	        });
	        return frame;
	    };

	    var close = function close() {
	        frame.then(function () {
	            var parent = div.parentNode;
	            parent && parent.removeChild(div);
	        });
	    };

	    return {
	        start: start,
	        close: close,
	        sr: sr,
	        rootDiv: div
	    };
	};

	module.exports = shadowFrame;

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	var isDomReady = function isDomReady(doc) {
	    return doc.readyState === 'complete' || !doc.attachEvent && doc.readyState === 'interactive';
	};

	var startMomenter = function startMomenter() {
	    var doc = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];

	    var loadedFlag = false;

	    var resolves = [];

	    var docReady = function docReady() {
	        var ready = function ready() {
	            if (loadedFlag) return;
	            loadedFlag = true;
	            for (var i = 0; i < resolves.length; i++) {
	                resolves[i]();
	            }
	            resolves = [];
	        };
	        if (doc.addEventListener) {
	            doc.addEventListener('DOMContentLoaded', ready);
	            doc.addEventListener('DOMContentLoaded', ready);
	        } else {
	            doc.attachEvent('onreadystatechange', function () {
	                if (document.readyState === 'complete') {
	                    ready();
	                }
	            });
	        }
	    };

	    docReady();

	    // generalWaitTime is used for async rendering
	    return function () {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$generalWaitTime = _ref.generalWaitTime;
	        var generalWaitTime = _ref$generalWaitTime === undefined ? 0 : _ref$generalWaitTime;
	        var _ref$startTimeout = _ref.startTimeout;
	        var startTimeout = _ref$startTimeout === undefined ? 10000 : _ref$startTimeout;
	        return new Promise(function (resolve, reject) {
	            if (loadedFlag || isDomReady(doc)) {
	                // already ready
	                setTimeout(resolve, generalWaitTime);
	            } else {
	                // wait for ready
	                resolves.push(resolve);
	                setTimeout(function () {
	                    reject(new Error('timeout'));
	                }, startTimeout);
	            }
	        });
	    };
	};

	module.exports = startMomenter;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(22);

	var attachDocument = _require.attachDocument;

	var _require2 = __webpack_require__(17);

	var isNode = _require2.isNode;

	var _require3 = __webpack_require__(24);

	var flat = _require3.flat;
	var forEach = _require3.forEach;


	module.exports = function (rootNode, parentNode) {
	    rootNode = flat(rootNode);
	    forEach(rootNode, function (item) {
	        if (isNode(item)) {
	            parentNode.appendChild(item);
	        }
	    });
	    attachDocument(getDoc(parentNode));
	};

	var getDoc = function getDoc(node) {
	    while (node.parentNode) {
	        node = node.parentNode;
	    }
	    return node;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(37);

	var removeChilds = _require.removeChilds;

	var _require2 = __webpack_require__(12);

	var mount = _require2.mount;


	var querystring = __webpack_require__(42);

	var SINGLE_JUMP_PREFIX = 'single://';

	var queryPager = function queryPager() {
	    var map = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var index = arguments[1];

	    index = initDefaultPage(map, index);

	    return function (url) {
	        var qs = querystring.parse(url.split('?')[1] || '');
	        var pageName = qs.page || index;

	        return map[pageName];
	    };
	};

	var restPager = function restPager() {
	    var map = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var index = arguments[1];

	    index = initDefaultPage(map, index);

	    return function (url) {
	        var pathname = url.split(/.*\:\/\//)[1];
	        var pageName = pathname.split('/')[1];
	        pageName = pageName || index;

	        return map[pageName];
	    };
	};

	var initDefaultPage = function initDefaultPage() {
	    var map = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var index = arguments[1];

	    if (index === null || index === undefined) {
	        for (var name in map) {
	            index = name;
	            break;
	        }
	    }
	    return index;
	};

	var renderPage = function renderPage(render, pageEnv, title) {
	    return Promise.resolve(render(pageEnv)).then(function (pageNode) {
	        // TODO pager is the default container, make it configurable
	        var pager = document.getElementById('pager');
	        // unload old page
	        removeChilds(pager);
	        // add new page
	        mount(pageNode, pager);
	        pager.style = 'display:block;';
	        document.title = title;
	    });
	};

	/**
	 * pager: (url) => {title, render}
	 */
	var router = function router(pager, pageEnv) {
	    var listenFlag = false;

	    var switchPage = function switchPage(render, pageEnv, title) {
	        renderPage(render, pageEnv, title);

	        if (!listenFlag) {
	            listenPageSwitch();
	            listenFlag = true;
	        }
	    };

	    var forward = function forward(url) {
	        if (!window.history.pushState) {
	            window.location.href = url;
	            return;
	        }

	        var _pager = pager(url);

	        var render = _pager.render;
	        var _pager$title = _pager.title;
	        var title = _pager$title === undefined ? '' : _pager$title;
	        var _pager$transitionData = _pager.transitionData;
	        var transitionData = _pager$transitionData === undefined ? {} : _pager$transitionData;


	        if (url !== window.location.href) {
	            window.history.pushState(transitionData, title, url);
	        }
	        return switchPage(render, pageEnv, title);
	    };

	    var redirect = function redirect(url) {
	        if (!window.history.pushState) {
	            window.location.href = url;
	            window.location.replace(url);
	            return;
	        }

	        var _pager2 = pager(url);

	        var render = _pager2.render;
	        var _pager2$title = _pager2.title;
	        var title = _pager2$title === undefined ? '' : _pager2$title;
	        var _pager2$transitionDat = _pager2.transitionData;
	        var transitionData = _pager2$transitionDat === undefined ? {} : _pager2$transitionDat;


	        if (url !== window.location.href) {
	            window.history.replaceState(transitionData, title, url);
	        }
	        return switchPage(render, pageEnv);
	    };

	    var listenPageSwitch = function listenPageSwitch() {
	        window.onpopstate = function () {
	            forward(window.location.href);
	        };

	        document.addEventListener('click', function (e) {
	            var target = e.target;

	            // hack kabanery, TODO fix this hack
	            if (e.__stopPropagation) return;

	            while (target) {
	                if (target.getAttribute) {
	                    // document does not have getAttribute method
	                    var url = (target.getAttribute('href') || '').trim();
	                    if (url.indexOf(SINGLE_JUMP_PREFIX) === 0) {
	                        forward(url.substring(SINGLE_JUMP_PREFIX.length).trim());
	                        break;
	                    }
	                }
	                target = target.parentNode;
	            }
	        });
	    };

	    return {
	        forward: forward,
	        redirect: redirect,
	        reload: function reload() {
	            return forward(window.location.href);
	        }
	    };
	};

	module.exports = {
	    router: router,
	    queryPager: queryPager,
	    restPager: restPager
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(43);
	exports.encode = exports.stringify = __webpack_require__(44);

/***/ },
/* 43 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function (qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr,
	        vstr,
	        k,
	        v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var stringifyPrimitive = function stringifyPrimitive(v) {
	  switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function (obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	    return Object.keys(obj).map(function (k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function (v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(12);

	var n = _require.n;
	var view = _require.view;

	var _require2 = __webpack_require__(46);

	var map = _require2.map;


	var header = __webpack_require__(50);

	var articles = __webpack_require__(54);

	/**
	 * display article list
	 */
	module.exports = function () {
	    var PageView = view(function () {
	        return n('div', [header({}), n('div', [map(articles, function (_ref) {
	            var title = _ref.title;
	            var path = _ref.path;
	            var date = _ref.date;
	            var digest = _ref.digest;

	            return n('div class="card" href="single://?page=article&article=' + path + '"', {
	                style: {
	                    width: '40%'
	                }
	            }, [n('h3', title), n('label', {
	                style: {
	                    color: 'gray'
	                }
	            }, date), n('div', {
	                style: {
	                    marginTop: 10
	                }
	            }, digest)]);
	        })])]);
	    });

	    return PageView({});
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(47);

	var isObject = _require.isObject;
	var funType = _require.funType;
	var or = _require.or;
	var isString = _require.isString;
	var isFalsy = _require.isFalsy;
	var likeArray = _require.likeArray;


	var iterate = __webpack_require__(48);

	var _require2 = __webpack_require__(49);

	var map = _require2.map;
	var reduce = _require2.reduce;
	var find = _require2.find;
	var findIndex = _require2.findIndex;
	var forEach = _require2.forEach;
	var filter = _require2.filter;
	var any = _require2.any;
	var exist = _require2.exist;
	var compact = _require2.compact;


	var contain = function contain(list, item, fopts) {
	    return findIndex(list, item, fopts) !== -1;
	};

	var difference = function difference(list1, list2, fopts) {
	    return reduce(list1, function (prev, item) {
	        if (!contain(list2, item, fopts) && !contain(prev, item, fopts)) {
	            prev.push(item);
	        }
	        return prev;
	    }, []);
	};

	var union = function union(list1, list2, fopts) {
	    return deRepeat(list2, fopts, deRepeat(list1, fopts));
	};

	var mergeMap = function mergeMap() {
	    var map1 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var map2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    return reduce(map2, setValueKey, reduce(map1, setValueKey, {}));
	};

	var setValueKey = function setValueKey(obj, value, key) {
	    obj[key] = value;
	    return obj;
	};

	var interset = function interset(list1, list2, fopts) {
	    return reduce(list1, function (prev, cur) {
	        if (contain(list2, cur, fopts)) {
	            prev.push(cur);
	        }
	        return prev;
	    }, []);
	};

	var deRepeat = function deRepeat(list, fopts) {
	    var init = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	    return reduce(list, function (prev, cur) {
	        if (!contain(prev, cur, fopts)) {
	            prev.push(cur);
	        }
	        return prev;
	    }, init);
	};

	/**
	 * a.b.c
	 */
	var get = funType(function (sandbox) {
	    var name = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

	    name = name.trim();
	    var parts = !name ? [] : name.split('.');
	    return reduce(parts, getValue, sandbox, invertLogic);
	}, [isObject, or(isString, isFalsy)]);

	var getValue = function getValue(obj, key) {
	    return obj[key];
	};

	var invertLogic = function invertLogic(v) {
	    return !v;
	};

	var delay = function delay(time) {
	    return new Promise(function (resolve) {
	        setTimeout(resolve, time);
	    });
	};

	var flat = function flat(list) {
	    if (likeArray(list) && !isString(list)) {
	        return reduce(list, function (prev, item) {
	            prev = prev.concat(flat(item));
	            return prev;
	        }, []);
	    } else {
	        return [list];
	    }
	};

	module.exports = {
	    flat: flat,
	    contain: contain,
	    difference: difference,
	    union: union,
	    interset: interset,
	    map: map,
	    reduce: reduce,
	    iterate: iterate,
	    find: find,
	    findIndex: findIndex,
	    deRepeat: deRepeat,
	    forEach: forEach,
	    filter: filter,
	    any: any,
	    exist: exist,
	    get: get,
	    delay: delay,
	    mergeMap: mergeMap,
	    compact: compact
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * basic types
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var isUndefined = function isUndefined(v) {
	    return v === undefined;
	};

	var isNull = function isNull(v) {
	    return v === null;
	};

	var isFalsy = function isFalsy(v) {
	    return !v;
	};

	var likeArray = function likeArray(v) {
	    return !!(v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && typeof v.length === 'number' && v.length >= 0);
	};

	var isArray = function isArray(v) {
	    return Array.isArray(v);
	};

	var isString = function isString(v) {
	    return typeof v === 'string';
	};

	var isObject = function isObject(v) {
	    return !!(v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object');
	};

	var isFunction = function isFunction(v) {
	    return typeof v === 'function';
	};

	var isNumber = function isNumber(v) {
	    return typeof v === 'number' && !isNaN(v);
	};

	var isBool = function isBool(v) {
	    return typeof v === 'boolean';
	};

	var isNode = function isNode(o) {
	    return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? o instanceof Node : o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string';
	};

	var isPromise = function isPromise(v) {
	    return v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && typeof v.then === 'function' && typeof v.catch === 'function';
	};

	var isRegExp = function isRegExp(v) {
	    return v instanceof RegExp;
	};

	var isReadableStream = function isReadableStream(v) {
	    return isObject(v) && isFunction(v.on) && isFunction(v.pipe);
	};

	var isWritableStream = function isWritableStream(v) {
	    return isObject(v) && isFunction(v.on) && isFunction(v.write);
	};

	/**
	 * check type
	 *
	 * types = [typeFun]
	 */
	var funType = function funType(fun) {
	    var types = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	    if (!isFunction(fun)) {
	        throw new TypeError(typeErrorText(fun, 'function'));
	    }

	    if (!likeArray(types)) {
	        throw new TypeError(typeErrorText(types, 'array'));
	    }

	    for (var i = 0; i < types.length; i++) {
	        var typeFun = types[i];
	        if (typeFun) {
	            if (!isFunction(typeFun)) {
	                throw new TypeError(typeErrorText(typeFun, 'function'));
	            }
	        }
	    }

	    return function () {
	        // check type
	        for (var _i = 0; _i < types.length; _i++) {
	            var _typeFun = types[_i];
	            var arg = arguments[_i];
	            if (_typeFun && !_typeFun(arg)) {
	                throw new TypeError('Argument type error. Arguments order ' + _i + '. Argument is ' + arg + '.');
	            }
	        }
	        // result
	        return fun.apply(this, arguments);
	    };
	};

	var and = function and() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }

	    if (!any(args, isFunction)) {
	        throw new TypeError('The argument of and must be function.');
	    }
	    return function (v) {
	        for (var i = 0; i < args.length; i++) {
	            var typeFun = args[i];
	            if (!typeFun(v)) {
	                return false;
	            }
	        }
	        return true;
	    };
	};

	var or = function or() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	    }

	    if (!any(args, isFunction)) {
	        throw new TypeError('The argument of and must be function.');
	    }

	    return function (v) {
	        for (var i = 0; i < args.length; i++) {
	            var typeFun = args[i];
	            if (typeFun(v)) {
	                return true;
	            }
	        }
	        return false;
	    };
	};

	var not = function not(type) {
	    if (!isFunction(type)) {
	        throw new TypeError('The argument of and must be function.');
	    }
	    return function (v) {
	        return !type(v);
	    };
	};

	var any = function any(list, type) {
	    if (!likeArray(list)) {
	        throw new TypeError(typeErrorText(list, 'list'));
	    }
	    if (!isFunction(type)) {
	        throw new TypeError(typeErrorText(type, 'function'));
	    }

	    for (var i = 0; i < list.length; i++) {
	        if (!type(list[i])) {
	            return false;
	        }
	    }
	    return true;
	};

	var exist = function exist(list, type) {
	    if (!likeArray(list)) {
	        throw new TypeError(typeErrorText(list, 'array'));
	    }
	    if (!isFunction(type)) {
	        throw new TypeError(typeErrorText(type, 'function'));
	    }

	    for (var i = 0; i < list.length; i++) {
	        if (type(list[i])) {
	            return true;
	        }
	    }
	    return false;
	};

	var mapType = function mapType(map) {
	    if (!isObject(map)) {
	        throw new TypeError(typeErrorText(map, 'obj'));
	    }

	    for (var name in map) {
	        var type = map[name];
	        if (!isFunction(type)) {
	            throw new TypeError(typeErrorText(type, 'function'));
	        }
	    }

	    return function (v) {
	        if (!isObject(v)) {
	            return false;
	        }

	        for (var _name in map) {
	            var _type = map[_name];
	            var attr = v[_name];
	            if (!_type(attr)) {
	                return false;
	            }
	        }

	        return true;
	    };
	};

	var listType = function listType(type) {
	    if (!isFunction(type)) {
	        throw new TypeError(typeErrorText(type, 'function'));
	    }

	    return function (list) {
	        return any(list, type);
	    };
	};

	var typeErrorText = function typeErrorText(v, expect) {
	    return 'Expect ' + expect + ' type, but got type ' + (typeof v === 'undefined' ? 'undefined' : _typeof(v)) + ', and value is ' + v;
	};

	module.exports = {
	    isArray: isArray,
	    likeArray: likeArray,
	    isString: isString,
	    isObject: isObject,
	    isFunction: isFunction,
	    isNumber: isNumber,
	    isBool: isBool,
	    isNode: isNode,
	    isPromise: isPromise,
	    isNull: isNull,
	    isUndefined: isUndefined,
	    isFalsy: isFalsy,
	    isRegExp: isRegExp,
	    isReadableStream: isReadableStream,
	    isWritableStream: isWritableStream,

	    funType: funType,
	    any: any,
	    exist: exist,

	    and: and,
	    or: or,
	    not: not,
	    mapType: mapType,
	    listType: listType
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _require = __webpack_require__(47);

	var isPromise = _require.isPromise;
	var likeArray = _require.likeArray;
	var isObject = _require.isObject;
	var funType = _require.funType;
	var isFunction = _require.isFunction;
	var isUndefined = _require.isUndefined;
	var or = _require.or;
	var isNumber = _require.isNumber;
	var isFalsy = _require.isFalsy;
	var isReadableStream = _require.isReadableStream;
	var mapType = _require.mapType;

	/**
	 * @param opts
	 *      preidcate: chose items to iterate
	 *      limit: when to stop iteration
	 *      transfer: transfer item
	 *      output
	 *      def: default result
	 */

	var iterate = funType(function (domain) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    domain = domain || [];
	    if (isPromise(domain)) {
	        return domain.then(function (list) {
	            return iterate(list, opts);
	        });
	    }
	    return iterateList(domain, opts);
	}, [or(isPromise, isObject, isFunction, isFalsy), or(isUndefined, mapType({
	    predicate: or(isFunction, isFalsy),
	    transfer: or(isFunction, isFalsy),
	    output: or(isFunction, isFalsy),
	    limit: or(isUndefined, isNumber, isFunction)
	}))]);

	var iterateList = function iterateList(domain, opts) {
	    opts = initOpts(opts, domain);

	    var rets = opts.def;
	    var count = 0; // iteration times

	    if (isReadableStream(domain)) {
	        var _ret = function () {
	            var index = -1;

	            return {
	                v: new Promise(function (resolve, reject) {
	                    domain.on('data', function (chunk) {
	                        var itemRet = iterateItem(chunk, domain, ++index, count, rets, opts);
	                        rets = itemRet.rets;
	                        count = itemRet.count;
	                        if (itemRet.stop) {
	                            resolve(rets);
	                        }
	                    });
	                    domain.on('end', function () {
	                        resolve(rets);
	                    });
	                    domain.on('error', function (err) {
	                        reject(err);
	                    });
	                })
	            };
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    } else if (likeArray(domain)) {
	        for (var i = 0; i < domain.length; i++) {
	            var item = domain[i];
	            var itemRet = iterateItem(item, domain, i, count, rets, opts);
	            rets = itemRet.rets;
	            count = itemRet.count;
	            if (itemRet.stop) return rets;
	        }
	    } else if (isObject(domain)) {
	        for (var name in domain) {
	            var _item = domain[name];
	            var _itemRet = iterateItem(_item, domain, name, count, rets, opts);
	            rets = _itemRet.rets;
	            count = _itemRet.count;
	            if (_itemRet.stop) return rets;
	        }
	    }

	    return rets;
	};

	var initOpts = function initOpts(opts, domain) {
	    var predicate = opts.predicate;
	    var transfer = opts.transfer;
	    var output = opts.output;
	    var limit = opts.limit;


	    opts.predicate = predicate || truthy;
	    opts.transfer = transfer || id;
	    opts.output = output || toList;
	    if (limit === undefined) limit = domain && domain.length;
	    limit = opts.limit = stopCondition(limit);
	    return opts;
	};

	var iterateItem = function iterateItem(item, domain, name, count, rets, _ref) {
	    var predicate = _ref.predicate;
	    var transfer = _ref.transfer;
	    var output = _ref.output;
	    var limit = _ref.limit;

	    if (limit(rets, item, name, domain, count)) {
	        // stop
	        return {
	            stop: true,
	            count: count,
	            rets: rets
	        };
	    }

	    if (predicate(item)) {
	        rets = output(rets, transfer(item, name, domain, rets), name, domain);
	        count++;
	    }
	    return {
	        stop: false,
	        count: count,
	        rets: rets
	    };
	};

	var stopCondition = function stopCondition(limit) {
	    if (isUndefined(limit)) {
	        return falsy;
	    } else if (isNumber(limit)) {
	        return function (rets, item, name, domain, count) {
	            return count >= limit;
	        };
	    } else {
	        return limit;
	    }
	};

	var toList = function toList(prev, v) {
	    prev.push(v);
	    return prev;
	};

	var truthy = function truthy() {
	    return true;
	};

	var falsy = function falsy() {
	    return false;
	};

	var id = function id(v) {
	    return v;
	};

	module.exports = {
	    iterate: iterate
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(48);

	var iterate = _require.iterate;


	var defauls = {
	    eq: function eq(v1, v2) {
	        return v1 === v2;
	    }
	};

	var setDefault = function setDefault(opts, defauls) {
	    for (var name in defauls) {
	        opts[name] = opts[name] || defauls[name];
	    }
	};

	var forEach = function forEach(list, handler) {
	    return iterate(list, {
	        limit: function limit(rets) {
	            if (rets === true) return true;
	            return false;
	        },
	        transfer: handler,
	        output: function output(prev, cur) {
	            return cur;
	        },
	        def: false
	    });
	};

	var map = function map(list, handler, limit) {
	    return iterate(list, {
	        transfer: handler,
	        def: [],
	        limit: limit
	    });
	};

	var reduce = function reduce(list, handler, def, limit) {
	    return iterate(list, {
	        output: handler,
	        def: def,
	        limit: limit
	    });
	};

	var filter = function filter(list, handler, limit) {
	    return reduce(list, function (prev, cur, index, list) {
	        handler && handler(cur, index, list) && prev.push(cur);
	        return prev;
	    }, [], limit);
	};

	var find = function find(list, item, fopts) {
	    var index = findIndex(list, item, fopts);
	    if (index === -1) return undefined;
	    return list[index];
	};

	var any = function any(list, handler) {
	    return reduce(list, function (prev, cur, index, list) {
	        var curLogic = handler && handler(cur, index, list);
	        return prev && originLogic(curLogic);
	    }, true, falsyIt);
	};

	var exist = function exist(list, handler) {
	    return reduce(list, function (prev, cur, index, list) {
	        var curLogic = handler && handler(cur, index, list);
	        return prev || originLogic(curLogic);
	    }, false, originLogic);
	};

	var findIndex = function findIndex(list, item) {
	    var fopts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    setDefault(fopts, defauls);

	    var eq = fopts.eq;

	    var predicate = function predicate(v) {
	        return eq(item, v);
	    };
	    var ret = iterate(list, {
	        transfer: indexTransfer,
	        limit: onlyOne,
	        predicate: predicate,
	        def: []
	    });
	    if (!ret.length) return -1;
	    return ret[0];
	};

	var compact = function compact(list) {
	    return reduce(list, function (prev, cur) {
	        if (cur) prev.push(cur);
	        return prev;
	    }, []);
	};

	var indexTransfer = function indexTransfer(item, index) {
	    return index;
	};

	var onlyOne = function onlyOne(rets, item, name, domain, count) {
	    return count >= 1;
	};

	var falsyIt = function falsyIt(v) {
	    return !v;
	};

	var originLogic = function originLogic(v) {
	    return !!v;
	};

	module.exports = {
	    map: map,
	    forEach: forEach,
	    reduce: reduce,
	    find: find,
	    findIndex: findIndex,
	    filter: filter,
	    any: any,
	    exist: exist,
	    compact: compact
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(12);

	var n = _require.n;
	var view = _require.view;

	var _require2 = __webpack_require__(51);

	var reduce = _require2.reduce;
	var map = _require2.map;


	var logoRight = function logoRight(logoRightNode) {
	    return n('button', {
	        style: {
	            fontSize: 16,
	            padding: 0,
	            'float': 'right',
	            color: 'white',
	            cursor: 'pointer'
	        }
	    }, [logoRightNode]);
	};

	var logoLeft = function logoLeft(logoLeftNode) {
	    return n('button', {
	        style: {
	            fontSize: 16,
	            padding: 0,
	            'float': 'left',
	            color: 'white',
	            cursor: 'pointer'
	        }
	    }, [logoLeftNode]);
	};

	module.exports = view(function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var back = _ref.back;
	    var _ref$rightLogos = _ref.rightLogos;
	    var rightLogos = _ref$rightLogos === undefined ? [] : _ref$rightLogos;
	    var _ref$leftLogos = _ref.leftLogos;
	    var leftLogos = _ref$leftLogos === undefined ? [] : _ref$leftLogos;

	    return n('div', {
	        style: {
	            height: 40,
	            boxSizing: 'border-box',
	            backgroundColor: '#3b3a36',
	            margin: 0,
	            width: '100%',
	            overflow: 'hidden'
	        }
	    }, [back ? logoLeft(n('div', {
	        href: 'single://' + back,
	        style: {
	            padding: 10
	        }
	    }, '<')) : null, map(leftLogos, logoLeft), reduce(rightLogos, function (prev, logo) {
	        prev.unshift(logoRight(logo));
	        return prev;
	    }, [])]);
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(17);

	var isObject = _require.isObject;
	var funType = _require.funType;
	var or = _require.or;
	var isString = _require.isString;
	var isFalsy = _require.isFalsy;
	var likeArray = _require.likeArray;


	var iterate = __webpack_require__(52);

	var _require2 = __webpack_require__(53);

	var map = _require2.map;
	var reduce = _require2.reduce;
	var find = _require2.find;
	var findIndex = _require2.findIndex;
	var forEach = _require2.forEach;
	var filter = _require2.filter;
	var any = _require2.any;
	var exist = _require2.exist;
	var compact = _require2.compact;


	var contain = function contain(list, item, fopts) {
	    return findIndex(list, item, fopts) !== -1;
	};

	var difference = function difference(list1, list2, fopts) {
	    return reduce(list1, function (prev, item) {
	        if (!contain(list2, item, fopts) && !contain(prev, item, fopts)) {
	            prev.push(item);
	        }
	        return prev;
	    }, []);
	};

	var union = function union(list1, list2, fopts) {
	    return deRepeat(list2, fopts, deRepeat(list1, fopts));
	};

	var mergeMap = function mergeMap() {
	    var map1 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var map2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    return reduce(map2, setValueKey, reduce(map1, setValueKey, {}));
	};

	var setValueKey = function setValueKey(obj, value, key) {
	    obj[key] = value;
	    return obj;
	};

	var interset = function interset(list1, list2, fopts) {
	    return reduce(list1, function (prev, cur) {
	        if (contain(list2, cur, fopts)) {
	            prev.push(cur);
	        }
	        return prev;
	    }, []);
	};

	var deRepeat = function deRepeat(list, fopts) {
	    var init = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	    return reduce(list, function (prev, cur) {
	        if (!contain(prev, cur, fopts)) {
	            prev.push(cur);
	        }
	        return prev;
	    }, init);
	};

	/**
	 * a.b.c
	 */
	var get = funType(function (sandbox) {
	    var name = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

	    name = name.trim();
	    var parts = !name ? [] : name.split('.');
	    return reduce(parts, getValue, sandbox, invertLogic);
	}, [isObject, or(isString, isFalsy)]);

	var getValue = function getValue(obj, key) {
	    return obj[key];
	};

	var invertLogic = function invertLogic(v) {
	    return !v;
	};

	var delay = function delay(time) {
	    return new Promise(function (resolve) {
	        setTimeout(resolve, time);
	    });
	};

	var flat = function flat(list) {
	    if (likeArray(list) && !isString(list)) {
	        return reduce(list, function (prev, item) {
	            prev = prev.concat(flat(item));
	            return prev;
	        }, []);
	    } else {
	        return [list];
	    }
	};

	module.exports = {
	    flat: flat,
	    contain: contain,
	    difference: difference,
	    union: union,
	    interset: interset,
	    map: map,
	    reduce: reduce,
	    iterate: iterate,
	    find: find,
	    findIndex: findIndex,
	    deRepeat: deRepeat,
	    forEach: forEach,
	    filter: filter,
	    any: any,
	    exist: exist,
	    get: get,
	    delay: delay,
	    mergeMap: mergeMap,
	    compact: compact
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(17);

	var likeArray = _require.likeArray;
	var isObject = _require.isObject;
	var funType = _require.funType;
	var isFunction = _require.isFunction;
	var isUndefined = _require.isUndefined;
	var or = _require.or;
	var isNumber = _require.isNumber;
	var isFalsy = _require.isFalsy;
	var mapType = _require.mapType;

	/**
	 *
	 * preidcate: chose items to iterate
	 * limit: when to stop iteration
	 * transfer: transfer item
	 * output
	 */

	var iterate = funType(function () {
	    var domain = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var predicate = opts.predicate;
	    var transfer = opts.transfer;
	    var output = opts.output;
	    var limit = opts.limit;
	    var def = opts.def;


	    opts.predicate = predicate || truthy;
	    opts.transfer = transfer || id;
	    opts.output = output || toList;
	    if (limit === undefined) limit = domain && domain.length;
	    limit = opts.limit = stopCondition(limit);

	    var rets = def;
	    var count = 0;

	    if (likeArray(domain)) {
	        for (var i = 0; i < domain.length; i++) {
	            var itemRet = iterateItem(domain, i, count, rets, opts);
	            rets = itemRet.rets;
	            count = itemRet.count;
	            if (itemRet.stop) return rets;
	        }
	    } else if (isObject(domain)) {
	        for (var name in domain) {
	            var _itemRet = iterateItem(domain, name, count, rets, opts);
	            rets = _itemRet.rets;
	            count = _itemRet.count;
	            if (_itemRet.stop) return rets;
	        }
	    }

	    return rets;
	}, [or(isObject, isFunction, isFalsy), or(isUndefined, mapType({
	    predicate: or(isFunction, isFalsy),
	    transfer: or(isFunction, isFalsy),
	    output: or(isFunction, isFalsy),
	    limit: or(isUndefined, isNumber, isFunction)
	}))]);

	var iterateItem = function iterateItem(domain, name, count, rets, _ref) {
	    var predicate = _ref.predicate;
	    var transfer = _ref.transfer;
	    var output = _ref.output;
	    var limit = _ref.limit;

	    var item = domain[name];
	    if (limit(rets, item, name, domain, count)) {
	        // stop
	        return {
	            stop: true,
	            count: count,
	            rets: rets
	        };
	    }

	    if (predicate(item)) {
	        rets = output(rets, transfer(item, name, domain, rets), name, domain);
	        count++;
	    }
	    return {
	        stop: false,
	        count: count,
	        rets: rets
	    };
	};

	var stopCondition = function stopCondition(limit) {
	    if (isUndefined(limit)) {
	        return falsy;
	    } else if (isNumber(limit)) {
	        return function (rets, item, name, domain, count) {
	            return count >= limit;
	        };
	    } else {
	        return limit;
	    }
	};

	var toList = function toList(prev, v) {
	    prev.push(v);
	    return prev;
	};

	var truthy = function truthy() {
	    return true;
	};

	var falsy = function falsy() {
	    return false;
	};

	var id = function id(v) {
	    return v;
	};

	module.exports = iterate;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var iterate = __webpack_require__(52);

	var defauls = {
	    eq: function eq(v1, v2) {
	        return v1 === v2;
	    }
	};

	var setDefault = function setDefault(opts, defauls) {
	    for (var name in defauls) {
	        opts[name] = opts[name] || defauls[name];
	    }
	};

	var forEach = function forEach(list, handler) {
	    return iterate(list, {
	        limit: function limit(rets) {
	            if (rets === true) return true;
	            return false;
	        },
	        transfer: handler,
	        output: function output(prev, cur) {
	            return cur;
	        },
	        def: false
	    });
	};

	var map = function map(list, handler, limit) {
	    return iterate(list, {
	        transfer: handler,
	        def: [],
	        limit: limit
	    });
	};

	var reduce = function reduce(list, handler, def, limit) {
	    return iterate(list, {
	        output: handler,
	        def: def,
	        limit: limit
	    });
	};

	var filter = function filter(list, handler, limit) {
	    return reduce(list, function (prev, cur, index, list) {
	        handler && handler(cur, index, list) && prev.push(cur);
	        return prev;
	    }, [], limit);
	};

	var find = function find(list, item, fopts) {
	    var index = findIndex(list, item, fopts);
	    if (index === -1) return undefined;
	    return list[index];
	};

	var any = function any(list, handler) {
	    return reduce(list, function (prev, cur, index, list) {
	        var curLogic = handler && handler(cur, index, list);
	        return prev && originLogic(curLogic);
	    }, true, falsyIt);
	};

	var exist = function exist(list, handler) {
	    return reduce(list, function (prev, cur, index, list) {
	        var curLogic = handler && handler(cur, index, list);
	        return prev || originLogic(curLogic);
	    }, false, originLogic);
	};

	var findIndex = function findIndex(list, item) {
	    var fopts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    setDefault(fopts, defauls);

	    var eq = fopts.eq;

	    var predicate = function predicate(v) {
	        return eq(item, v);
	    };
	    var ret = iterate(list, {
	        transfer: indexTransfer,
	        limit: onlyOne,
	        predicate: predicate,
	        def: []
	    });
	    if (!ret.length) return -1;
	    return ret[0];
	};

	var compact = function compact(list) {
	    return reduce(list, function (prev, cur) {
	        if (cur) prev.push(cur);
	        return prev;
	    }, []);
	};

	var indexTransfer = function indexTransfer(item, index) {
	    return index;
	};

	var onlyOne = function onlyOne(rets, item, name, domain, count) {
	    return count >= 1;
	};

	var falsyIt = function falsyIt(v) {
	    return !v;
	};

	var originLogic = function originLogic(v) {
	    return !!v;
	};

	module.exports = {
	    map: map,
	    forEach: forEach,
	    reduce: reduce,
	    find: find,
	    findIndex: findIndex,
	    filter: filter,
	    any: any,
	    exist: exist,
	    compact: compact
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = [
		{
			"title": "article title",
			"path": "test.html",
			"date": "2016-9-10",
			"digest": "digest of article"
		},
		{
			"title": "article title",
			"path": "test.html",
			"date": "2016-9-10",
			"digest": "digest of article"
		},
		{
			"title": "article title",
			"path": "test.html",
			"date": "2016-9-10",
			"digest": "digest of article"
		},
		{
			"title": "article title",
			"path": "test.html",
			"date": "2016-9-10",
			"digest": "digest of article"
		}
	];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(12);

	var n = _require.n;
	var view = _require.view;


	var header = __webpack_require__(50);

	var querystring = __webpack_require__(42);

	var Loading = __webpack_require__(56);

	/**
	 * display article list
	 */
	module.exports = function () {
	    var qs = querystring.parse(window.location.href.split('?')[1]);

	    var PageView = view(function (_ref, _ref2) {
	        var loading = _ref.loading;
	        var text = _ref.text;
	        var update = _ref2.update;

	        fetch('/resources/articles/' + qs.article, {
	            method: 'GET'
	        }).then(function (response) {
	            return response.text();
	        }).then(function (ret) {
	            text = ret;
	            loading = false;
	            // TODO loading disappear animation
	            update();
	        });

	        return function () {
	            return n('div', [header({
	                back: '?page=articleList'
	            }), text ? n('div', [getTextNode(text)]) : null, loading ? Loading({
	                disappear: false
	            }) : null]);
	        };
	    });

	    return PageView({
	        loading: true,
	        text: ''
	    });
	};

	var getTextNode = function getTextNode(text) {
	    var textNode = n('div');
	    textNode.innerHTML = text;
	    return textNode;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var modal = __webpack_require__(57);

	var _require = __webpack_require__(12);

	var view = _require.view;
	var n = _require.n;

	/**
	 * data = {
	 *    title,
	 *    text,
	 *    disappear,
	 *    sure
	 * }
	 */

	module.exports = view(function (_ref) {
	    var disappear = _ref.disappear;

	    var ret = modal({
	        disappear: disappear,
	        autoHide: false,
	        content: [n('style', '\n               @keyframes loading-rotateplane {\n                   0% {\n                       transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n                   }\n               \n                   50% {\n                       transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n                   }\n               \n                   100% {\n                       transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg)\n           }'), n('div', {
	            style: {
	                display: 'block',
	                width: 60,
	                height: 60,
	                backgroundColor: '#fff',
	                margin: '0 auto',
	                animation: 'loading-rotateplane 1.2s infinite ease-in-out'
	            }
	        })]
	    });
	    return ret;
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(12);

	var view = _require.view;
	var n = _require.n;

	/**
	 * data = {
	 *      content,
	 *      disappear,
	 *      autoHide
	 * }
	 */

	module.exports = view(function (data, _ref) {
	    var update = _ref.update;

	    if (data.autoHide === undefined) data.autoHide = true;
	    if (data.disappear) return null;
	    return n('div', {
	        style: {
	            backgroundColor: 'rgba(60, 60, 60, 0.4)',
	            position: 'fixed',
	            top: 0,
	            left: 0,
	            zIndex: 100000,
	            width: '100%',
	            height: '100%',
	            textAlign: 'center',
	            overflow: 'auto'
	        },
	        onclick: function onclick() {
	            if (data.autoHide) {
	                update('disappear', true);
	            }
	        }
	    }, [n('div', {
	        style: {
	            margin: '0 auto',
	            display: 'inline-block',
	            marginTop: 150,
	            borderRadius: 4
	        },
	        onclick: function onclick(e) {
	            e.preventDefault();
	            e.stopPropagation();
	        }
	    }, [data.content])]);
	});

/***/ }
]);
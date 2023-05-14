/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue: #184f77;\n  --light-blue: #178bad;\n  --dark-blue: #0e2d44;\n  --dark-yellow: #ffda58;\n  --light-yellow: #fffbd9;\n  --purple: rgb(57, 1, 57);\n\n  height: 100%;\n  background: linear-gradient(var(--dark-blue), var(--purple));\n  font-family: 'Nunito', sans-serif;\n  color: white;\n  font-size: 30px;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 200px 1fr 100px;\n  grid-template-areas:\n    'header'\n    'content'\n    'footer';\n  height: 100vh;\n}\n.header {\n  grid-area: header;\n  justify-self: center;\n}\n.content {\n  text-align: center;\n  grid-area: content;\n  height: 100%;\n  justify-self: center;\n}\n.footer {\n  grid-area: footer;\n  justify-self: center;\n}\n\n.card {\n  display: grid;\n  grid-template-areas:\n    'ranking icon ign ign'\n    'ranking icon rank games'\n    'ranking icon rank winrate';\n  grid-template-columns: 1fr 2fr 2fr 1fr;\n  grid-template-rows: 2fr 1fr 1fr;\n}\n.ranking {\n  grid-area: ranking;\n  justify-self: center;\n}\n.icon {\n  grid-area: icon;\n  justify-self: center;\n}\n.ign {\n  grid-area: ign;\n  justify-self: center;\n}\n.rank {\n  grid-area: rank;\n  justify-self: center;\n}\n.games {\n  grid-area: games;\n  justify-self: center;\n}\n.winrate {\n  grid-area: winrate;\n  justify-self: center;\n}\n\nh1 {\n  background: linear-gradient(\n    to right,\n    var(--dark-yellow),\n    var(--light-yellow)\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n/* for loading spinner */\n.loader {\n  width: 48px;\n  height: 48px;\n  border: 5px solid black;\n  border-bottom-color: var(--dark-yellow);\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 0.5s linear infinite;\n  margin: 20px;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,oBAAoB;EACpB,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;;EAExB,YAAY;EACZ,4DAA4D;EAC5D,iCAAiC;EACjC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC;;;YAGU;EACV,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,oBAAoB;AACtB;AACA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb;;;+BAG6B;EAC7B,sCAAsC;EACtC,+BAA+B;AACjC;AACA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,gBAAgB;EAChB,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE;;;;GAIC;EACD,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,uCAAuC;EACvC,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,wCAAwC;EACxC,YAAY;AACd;AACA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');\n\n:root {\n  --blue: #184f77;\n  --light-blue: #178bad;\n  --dark-blue: #0e2d44;\n  --dark-yellow: #ffda58;\n  --light-yellow: #fffbd9;\n  --purple: rgb(57, 1, 57);\n\n  height: 100%;\n  background: linear-gradient(var(--dark-blue), var(--purple));\n  font-family: 'Nunito', sans-serif;\n  color: white;\n  font-size: 30px;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 200px 1fr 100px;\n  grid-template-areas:\n    'header'\n    'content'\n    'footer';\n  height: 100vh;\n}\n.header {\n  grid-area: header;\n  justify-self: center;\n}\n.content {\n  text-align: center;\n  grid-area: content;\n  height: 100%;\n  justify-self: center;\n}\n.footer {\n  grid-area: footer;\n  justify-self: center;\n}\n\n.card {\n  display: grid;\n  grid-template-areas:\n    'ranking icon ign ign'\n    'ranking icon rank games'\n    'ranking icon rank winrate';\n  grid-template-columns: 1fr 2fr 2fr 1fr;\n  grid-template-rows: 2fr 1fr 1fr;\n}\n.ranking {\n  grid-area: ranking;\n  justify-self: center;\n}\n.icon {\n  grid-area: icon;\n  justify-self: center;\n}\n.ign {\n  grid-area: ign;\n  justify-self: center;\n}\n.rank {\n  grid-area: rank;\n  justify-self: center;\n}\n.games {\n  grid-area: games;\n  justify-self: center;\n}\n.winrate {\n  grid-area: winrate;\n  justify-self: center;\n}\n\nh1 {\n  background: linear-gradient(\n    to right,\n    var(--dark-yellow),\n    var(--light-yellow)\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n/* for loading spinner */\n.loader {\n  width: 48px;\n  height: 48px;\n  border: 5px solid black;\n  border-bottom-color: var(--dark-yellow);\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 0.5s linear infinite;\n  margin: 20px;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInfoBySummonerName": () => (/* binding */ getInfoBySummonerName),
/* harmony export */   "getRankedInfoBySummonerId": () => (/* binding */ getRankedInfoBySummonerId)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./src/key.js");


// development keys expire within 24 hours.
const DEV_RIOT_KEY = (0,_key__WEBPACK_IMPORTED_MODULE_0__["default"])();

// get general information about the summoner (profileIconId, PUUID, summonerId, level)
// https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName
async function getInfoBySummonerName(summonerName) {
  try {
    const response = await fetch(
      `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${DEV_RIOT_KEY}`
    );
    const generalSummonerData = await response.json();
    return generalSummonerData;
  } catch (error) {
    console.log(`Could not find ${summonerName} by summoner name.`);
    return error;
  }
}

// use summonerId to get ranked data about the given summoner
// https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesForSummoner
async function getRankedInfoBySummonerId(summonerId) {
  try {
    const response = await fetch(
      `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${DEV_RIOT_KEY}`
    );
    const summonerRankedData = await response.json();
    return summonerRankedData;
  } catch (error) {
    console.log(
      `Could not find summoner ranked data by summonerId: ${summonerId}`
    );
    return error;
  }
}


/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRiotAPIKey)
/* harmony export */ });
function getRiotAPIKey() {
  return 'RGAPI-2caca78e-bac1-446f-8c41-fabe71046791';
}


/***/ }),

/***/ "./src/ladder.js":
/*!***********************!*\
  !*** ./src/ladder.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortAllRanks)
/* harmony export */ });
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading */ "./src/loading.js");
/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output */ "./src/output.js");
/* harmony import */ var _rank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rank */ "./src/rank.js");




const TIER_VALUE = {
  IRON: 1,
  BRONZE: 2,
  SILVER: 3,
  GOLD: 4,
  PLATINUM: 5,
  DIAMOND: 6,
  MASTER: 7,
  GRANDMASTER: 8,
  CHALLENGER: 9,
};
const RANK_VALUE = {
  IV: 1,
  III: 2,
  II: 3,
  I: 4,
};

// sorting the players by soloq rank
function sortRankedPlayers(rankedPlayers) {
  console.log('ranked list: ', rankedPlayers);

  rankedPlayers.sort((playerA, playerB) => {
    // compare tier rank first
    if (TIER_VALUE[playerA.tier] > TIER_VALUE[playerB.tier]) return -1;
    if (TIER_VALUE[playerA.tier] < TIER_VALUE[playerB.tier]) return 1;

    // if tier is the same, check for division
    if (RANK_VALUE[playerA.rank] > RANK_VALUE[playerB.rank]) return -1;
    if (RANK_VALUE[playerA.rank] < RANK_VALUE[playerB.rank]) return 1;

    // if division is the same, check for LP
    if (playerA.lp > playerB.lp) return -1;
    if (playerA.lp < playerB.lp) return 1;

    // if LP is the same as well, don't change sorting order
    return 0;
  });
  (0,_output__WEBPACK_IMPORTED_MODULE_1__.displayLadder)(rankedPlayers);

  (0,_loading__WEBPACK_IMPORTED_MODULE_0__["default"])(false);
}

async function sortAllRanks(playerArray) {
  (0,_loading__WEBPACK_IMPORTED_MODULE_0__["default"])(true);

  const playerRanks = await (0,_rank__WEBPACK_IMPORTED_MODULE_2__["default"])(playerArray);
  // now we need to sort rankedPlayers
  const rankedPlayers = playerRanks.playersWithSoloqRankedData;
  const unrankedPlayers = playerRanks.unrankedPlayerData;

  if (rankedPlayers.length > 0) {
    sortRankedPlayers(rankedPlayers);
  } else {
    console.log('No ranked players found.');
  }

  (0,_output__WEBPACK_IMPORTED_MODULE_1__.displayUnrankedPlayers)(unrankedPlayers);
}


/***/ }),

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayLoadingAnimation)
/* harmony export */ });
function displayLoadingAnimation(state) {
  const loader = document.querySelector('.loading');

  if (state) {
    loader.classList.add('loader');
  } else {
    loader.classList.remove('loader');
  }
}


/***/ }),

/***/ "./src/output.js":
/*!***********************!*\
  !*** ./src/output.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayLadder": () => (/* binding */ displayLadder),
/* harmony export */   "displayUnrankedPlayers": () => (/* binding */ displayUnrankedPlayers)
/* harmony export */ });
const cardContainer = document.querySelector('.cardcontainer');

function consoleOutput(player, ranking) {
  console.log(
    `${ranking}. `,
    `${player.summonerName} |`,
    player.tier,
    player.rank,
    `${player.lp}LP`,
    `- at ${player.winrate}% wr`,
    `(${player.wins + player.losses} games)`
  );
}

// function

function cardCreator(player) {
  const card = document.createElement('div');
  card.innerHTML = player.summonerName;
  console.log(cardContainer);
  cardContainer.appendChild(card);

  return card;
}

function displayLadder(rankedPlayers) {
  let ranking = 1;
  rankedPlayers.forEach((player) => {
    const card = cardCreator(player);

    consoleOutput(player, ranking);
    ranking += 1;
  });
}

function displayUnrankedPlayers(unrankedPlayers) {
  unrankedPlayers.forEach((player) => {
    cardCreator(player);
  });
}

// .card {
//   display: grid;
//   grid-template-areas:
//     'ranking icon ign ign'
//     'ranking icon rank games'
//     'ranking icon rank winrate';
//   grid-template-columns: 1fr 2fr 2fr 1fr;
//   grid-template-rows: 2fr 1fr 1fr;
// }
// .ranking {
//   grid-area: ranking;
//   justify-self: center;
// }
// .icon {
//   grid-area: icon;
//   justify-self: center;
// }
// .ign {
//   grid-area: ign;
//   justify-self: center;
// }
// .rank {
//   grid-area: rank;
//   justify-self: center;
// }
// .games {
//   grid-area: games;
//   justify-self: center;
// }
// .winrate {
//   grid-area: winrate;
//   justify-self: center;
// }


/***/ }),

/***/ "./src/rank.js":
/*!*********************!*\
  !*** ./src/rank.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPlayerRanks)
/* harmony export */ });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _summonerId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summonerId */ "./src/summonerId.js");



// logging the summoner rank
async function filterSoloqRankBySummonerName(summonerName) {
  try {
    // const summoner = await getInfoBySummonerName(summonerName);  // summoner.id needs to be used as a parameter in response
    const summonerId = (0,_summonerId__WEBPACK_IMPORTED_MODULE_1__["default"])(summonerName);
    const response = await (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.getRankedInfoBySummonerId)(summonerId);

    // only get soloq, remove flex
    const soloqRankData = response.filter(
      (rankType) => rankType.queueType === 'RANKED_SOLO_5x5'
    );
    const sRD = soloqRankData[0];

    if (sRD !== undefined) {
      const winrateUnrounded = (sRD.wins / (sRD.wins + sRD.losses)) * 100;
      const winrate = winrateUnrounded.toFixed(1);

      return {
        summonerName: sRD.summonerName,
        tier: sRD.tier,
        rank: sRD.rank,
        lp: sRD.leaguePoints,
        wins: sRD.wins,
        losses: sRD.losses,
        winrate,
      };
    }
    return { summonerName };
  } catch (error) {
    return undefined;
  }
}

// takes in an array of summoner names and displays their ranks
async function getPlayerRanks(summonerArray) {
  const playersWithSoloqRankedData = [];
  const unrankedPlayerData = [];

  await Promise.all(
    summonerArray.map(async (summoner) => {
      try {
        const player = await filterSoloqRankBySummonerName(summoner);

        // check if summoner is unranked
        if (player === undefined) {
          console.log(`${summoner}: probably API error`);
        } else if (player.tier !== undefined) {
          // console.log(`${player.summonerName}: ${player.tier} ${player.rank} (${player.lp} LP) | ${player.wins}W, ${player.losses}L = ${player.winrate}% WR `);
          playersWithSoloqRankedData.push(player);
        } else {
          console.log(`${player.summonerName} is currently Unranked.`);
          unrankedPlayerData.push(player);
        }
      } catch (error) {
        console.error(`Summoner: ${summoner} |`, error);
      }
    })
  );
  return { playersWithSoloqRankedData, unrankedPlayerData };
}


/***/ }),

/***/ "./src/summonerId.js":
/*!***************************!*\
  !*** ./src/summonerId.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSummonerIdBySummonerName)
/* harmony export */ });
// this file is only there to limit the number of api calls needed to get around some rate limits.
// "storing" summonerIds

const db = {
  silhim: '2xp2EBviq7UbXSr9FhIEYmm3M4Nl0imIsQq1jlOF7Pk-E58',
  lvance: 'D2-hxWfZoC4lguMEh2ZmaBRU5aW60zKyPpAtGMrVSm2paL4',
  scintmar: '-bq6ZUkGp3IkdMj0LI7-RACAFKwJG4CPwTmKyJEZFz3U5OI',
  schmongo: 'XoO2ZawN7d5EGDRnoCt4m7Iqk2EslJPVMPW4PRysDqf3MOk',
  dimantus: 'XB7b9lE1QlGmFSCfmxayGvYW3GaPRhxV6TbxEnuKkfViNgA',
  fertig11: '91PTpG9JaFF79gjNdmlp-v8tTRCMV5MaZhjKO1fNUAtmx5I',
  hornycopter: 'JzGUkSnV7tPQZHj4STtYDUFZRTFyqWcf12drdFOEbh5u4jw',
  generalmuh: 'zcu8VdRwffVmxitE46cyZqME-yomSvunHZBeZOKFw5-Kb9Q',
  m4pl3g0d: 'CJQ7j9W_tdMYVjKT3f4vODxTu4BmN6z0VA1VYMTkBolgdwvswSP7mTRSJA',
  gucciscripter: 'I2kfQSOeHp0kxPyy4V4Vph6QQtXeTI_pK3Tw3Hf8VGKQGl4',
  keep0ut: '0JyMtxQEp3Od7d4ww6TvKINoFMGZGjaTOIdu0noLiBRfrE8',
  admiralalpaka: 'TlBRlxG3tx5ny_pxrHsRK6TjGolAOBMKTAIQiFRU55vHFFY',
  krokoefendi: 'QVvz_tWf0arJk-sif-rLHzcza-7ou9TE4tcZEZcqfyURKP8',
  escapes: '8WSdwy-ZkgStrhuOVB-goFkMRQgIRgHJKgUWx9PacEPI1ZA',
  lumpidumpidu: 'QDv134EFUf7JW6ZftFmBHn0fMp8XW6acO4aMr3Y3j2FEJYU',
  carthour: 'G3K0j0kAAgedp692MMBjm_0C4jjTrZeNP5v4OtT7I20wKDs',
};

function getSummonerIdBySummonerName(summonerName) {
  return db[summonerName.toLowerCase()];
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ladder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ladder */ "./src/ladder.js");



(0,_ladder__WEBPACK_IMPORTED_MODULE_1__["default"])([
  'Silhim',
  'LVance',
  'Scintmar',
  'Schmongo',
  'Dimantus',
  'Fertig11',
  'Hornycopter',
  'GeneralMuh',
  'M4pl3g0d',
  'GUCCISCRIPTER',
  'Keep0ut',
  'AdmiralAlpaka',
  'KrokoEfendi',
  'Escapes',
  'LumpiDumpiDu',
  'Carthour',
]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDLFVBQVU7QUFDViw0QkFBNEIsb0JBQW9CLElBQUksYUFBYSxFQUFFLGFBQWEsR0FBRyxXQUFXLFFBQVEsWUFBWSxLQUFLLGNBQWMsTUFBTSxlQUFlO0FBQzFKO0FBQ0EsVUFBVTtBQUNWLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBLFFBQVE7QUFDUixtQ0FBbUMsVUFBVTtBQUM3QztBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNlOztBQUVwQyxtREFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9rZXkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9sYWRkZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9sb2FkaW5nLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvb3V0cHV0LmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvcmFuay5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL3N1bW1vbmVySWQuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmx1ZTogIzE4NGY3NztcXG4gIC0tbGlnaHQtYmx1ZTogIzE3OGJhZDtcXG4gIC0tZGFyay1ibHVlOiAjMGUyZDQ0O1xcbiAgLS1kYXJrLXllbGxvdzogI2ZmZGE1ODtcXG4gIC0tbGlnaHQteWVsbG93OiAjZmZmYmQ5O1xcbiAgLS1wdXJwbGU6IHJnYig1NywgMSwgNTcpO1xcblxcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWRhcmstYmx1ZSksIHZhcigtLXB1cnBsZSkpO1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDFmciAxMDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXInXFxuICAgICdjb250ZW50J1xcbiAgICAnZm9vdGVyJztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdyYW5raW5nIGljb24gaWduIGlnbidcXG4gICAgJ3JhbmtpbmcgaWNvbiByYW5rIGdhbWVzJ1xcbiAgICAncmFua2luZyBpY29uIHJhbmsgd2lucmF0ZSc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnI7XFxufVxcbi5yYW5raW5nIHtcXG4gIGdyaWQtYXJlYTogcmFua2luZztcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uaWNvbiB7XFxuICBncmlkLWFyZWE6IGljb247XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmlnbiB7XFxuICBncmlkLWFyZWE6IGlnbjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4ucmFuayB7XFxuICBncmlkLWFyZWE6IHJhbms7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmdhbWVzIHtcXG4gIGdyaWQtYXJlYTogZ2FtZXM7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLndpbnJhdGUge1xcbiAgZ3JpZC1hcmVhOiB3aW5yYXRlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHZhcigtLWRhcmsteWVsbG93KSxcXG4gICAgdmFyKC0tbGlnaHQteWVsbG93KVxcbiAgKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBmb3IgbG9hZGluZyBzcGlubmVyICovXFxuLmxvYWRlciB7XFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tZGFyay15ZWxsb3cpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGFuaW1hdGlvbjogcm90YXRpb24gMC41cyBsaW5lYXIgaW5maW5pdGU7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix3QkFBd0I7O0VBRXhCLFlBQVk7RUFDWiw0REFBNEQ7RUFDNUQsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQzs7O1lBR1U7RUFDVixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYjs7OytCQUc2QjtFQUM3QixzQ0FBc0M7RUFDdEMsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7Ozs7R0FJQztFQUNELDZCQUE2QjtFQUM3QixvQ0FBb0M7QUFDdEM7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWJsdWU6ICMxODRmNzc7XFxuICAtLWxpZ2h0LWJsdWU6ICMxNzhiYWQ7XFxuICAtLWRhcmstYmx1ZTogIzBlMmQ0NDtcXG4gIC0tZGFyay15ZWxsb3c6ICNmZmRhNTg7XFxuICAtLWxpZ2h0LXllbGxvdzogI2ZmZmJkOTtcXG4gIC0tcHVycGxlOiByZ2IoNTcsIDEsIDU3KTtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1kYXJrLWJsdWUpLCB2YXIoLS1wdXJwbGUpKTtcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAxZnIgMTAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnaGVhZGVyJ1xcbiAgICAnY29udGVudCdcXG4gICAgJ2Zvb3Rlcic7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAncmFua2luZyBpY29uIGlnbiBpZ24nXFxuICAgICdyYW5raW5nIGljb24gcmFuayBnYW1lcydcXG4gICAgJ3JhbmtpbmcgaWNvbiByYW5rIHdpbnJhdGUnO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnIgMWZyO1xcbn1cXG4ucmFua2luZyB7XFxuICBncmlkLWFyZWE6IHJhbmtpbmc7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmljb24ge1xcbiAgZ3JpZC1hcmVhOiBpY29uO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5pZ24ge1xcbiAgZ3JpZC1hcmVhOiBpZ247XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLnJhbmsge1xcbiAgZ3JpZC1hcmVhOiByYW5rO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5nYW1lcyB7XFxuICBncmlkLWFyZWE6IGdhbWVzO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi53aW5yYXRlIHtcXG4gIGdyaWQtYXJlYTogd2lucmF0ZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICB2YXIoLS1kYXJrLXllbGxvdyksXFxuICAgIHZhcigtLWxpZ2h0LXllbGxvdylcXG4gICk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogZm9yIGxvYWRpbmcgc3Bpbm5lciAqL1xcbi5sb2FkZXIge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWRhcmsteWVsbG93KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBhbmltYXRpb246IHJvdGF0aW9uIDAuNXMgbGluZWFyIGluZmluaXRlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnZXRSaW90QVBJS2V5IGZyb20gJy4va2V5JztcblxuLy8gZGV2ZWxvcG1lbnQga2V5cyBleHBpcmUgd2l0aGluIDI0IGhvdXJzLlxuY29uc3QgREVWX1JJT1RfS0VZID0gZ2V0UmlvdEFQSUtleSgpO1xuXG4vLyBnZXQgZ2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3VtbW9uZXIgKHByb2ZpbGVJY29uSWQsIFBVVUlELCBzdW1tb25lcklkLCBsZXZlbClcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLnJpb3RnYW1lcy5jb20vYXBpcyNzdW1tb25lci12NC9HRVRfZ2V0QnlTdW1tb25lck5hbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbmZvQnlTdW1tb25lck5hbWUoc3VtbW9uZXJOYW1lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2V1dzEuYXBpLnJpb3RnYW1lcy5jb20vbG9sL3N1bW1vbmVyL3Y0L3N1bW1vbmVycy9ieS1uYW1lLyR7c3VtbW9uZXJOYW1lfT9hcGlfa2V5PSR7REVWX1JJT1RfS0VZfWBcbiAgICApO1xuICAgIGNvbnN0IGdlbmVyYWxTdW1tb25lckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGdlbmVyYWxTdW1tb25lckRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYENvdWxkIG5vdCBmaW5kICR7c3VtbW9uZXJOYW1lfSBieSBzdW1tb25lciBuYW1lLmApO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG4vLyB1c2Ugc3VtbW9uZXJJZCB0byBnZXQgcmFua2VkIGRhdGEgYWJvdXQgdGhlIGdpdmVuIHN1bW1vbmVyXG4vLyBodHRwczovL2RldmVsb3Blci5yaW90Z2FtZXMuY29tL2FwaXMjbGVhZ3VlLXY0L0dFVF9nZXRMZWFndWVFbnRyaWVzRm9yU3VtbW9uZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSYW5rZWRJbmZvQnlTdW1tb25lcklkKHN1bW1vbmVySWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZXV3MS5hcGkucmlvdGdhbWVzLmNvbS9sb2wvbGVhZ3VlL3Y0L2VudHJpZXMvYnktc3VtbW9uZXIvJHtzdW1tb25lcklkfT9hcGlfa2V5PSR7REVWX1JJT1RfS0VZfWBcbiAgICApO1xuICAgIGNvbnN0IHN1bW1vbmVyUmFua2VkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gc3VtbW9uZXJSYW5rZWREYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYENvdWxkIG5vdCBmaW5kIHN1bW1vbmVyIHJhbmtlZCBkYXRhIGJ5IHN1bW1vbmVySWQ6ICR7c3VtbW9uZXJJZH1gXG4gICAgKTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJpb3RBUElLZXkoKSB7XG4gIHJldHVybiAnUkdBUEktMmNhY2E3OGUtYmFjMS00NDZmLThjNDEtZmFiZTcxMDQ2NzkxJztcbn1cbiIsImltcG9ydCBkaXNwbGF5TG9hZGluZ0FuaW1hdGlvbiBmcm9tICcuL2xvYWRpbmcnO1xuaW1wb3J0IHsgZGlzcGxheUxhZGRlciwgZGlzcGxheVVucmFua2VkUGxheWVycyB9IGZyb20gJy4vb3V0cHV0JztcbmltcG9ydCBnZXRQbGF5ZXJSYW5rcyBmcm9tICcuL3JhbmsnO1xuXG5jb25zdCBUSUVSX1ZBTFVFID0ge1xuICBJUk9OOiAxLFxuICBCUk9OWkU6IDIsXG4gIFNJTFZFUjogMyxcbiAgR09MRDogNCxcbiAgUExBVElOVU06IDUsXG4gIERJQU1PTkQ6IDYsXG4gIE1BU1RFUjogNyxcbiAgR1JBTkRNQVNURVI6IDgsXG4gIENIQUxMRU5HRVI6IDksXG59O1xuY29uc3QgUkFOS19WQUxVRSA9IHtcbiAgSVY6IDEsXG4gIElJSTogMixcbiAgSUk6IDMsXG4gIEk6IDQsXG59O1xuXG4vLyBzb3J0aW5nIHRoZSBwbGF5ZXJzIGJ5IHNvbG9xIHJhbmtcbmZ1bmN0aW9uIHNvcnRSYW5rZWRQbGF5ZXJzKHJhbmtlZFBsYXllcnMpIHtcbiAgY29uc29sZS5sb2coJ3JhbmtlZCBsaXN0OiAnLCByYW5rZWRQbGF5ZXJzKTtcblxuICByYW5rZWRQbGF5ZXJzLnNvcnQoKHBsYXllckEsIHBsYXllckIpID0+IHtcbiAgICAvLyBjb21wYXJlIHRpZXIgcmFuayBmaXJzdFxuICAgIGlmIChUSUVSX1ZBTFVFW3BsYXllckEudGllcl0gPiBUSUVSX1ZBTFVFW3BsYXllckIudGllcl0pIHJldHVybiAtMTtcbiAgICBpZiAoVElFUl9WQUxVRVtwbGF5ZXJBLnRpZXJdIDwgVElFUl9WQUxVRVtwbGF5ZXJCLnRpZXJdKSByZXR1cm4gMTtcblxuICAgIC8vIGlmIHRpZXIgaXMgdGhlIHNhbWUsIGNoZWNrIGZvciBkaXZpc2lvblxuICAgIGlmIChSQU5LX1ZBTFVFW3BsYXllckEucmFua10gPiBSQU5LX1ZBTFVFW3BsYXllckIucmFua10pIHJldHVybiAtMTtcbiAgICBpZiAoUkFOS19WQUxVRVtwbGF5ZXJBLnJhbmtdIDwgUkFOS19WQUxVRVtwbGF5ZXJCLnJhbmtdKSByZXR1cm4gMTtcblxuICAgIC8vIGlmIGRpdmlzaW9uIGlzIHRoZSBzYW1lLCBjaGVjayBmb3IgTFBcbiAgICBpZiAocGxheWVyQS5scCA+IHBsYXllckIubHApIHJldHVybiAtMTtcbiAgICBpZiAocGxheWVyQS5scCA8IHBsYXllckIubHApIHJldHVybiAxO1xuXG4gICAgLy8gaWYgTFAgaXMgdGhlIHNhbWUgYXMgd2VsbCwgZG9uJ3QgY2hhbmdlIHNvcnRpbmcgb3JkZXJcbiAgICByZXR1cm4gMDtcbiAgfSk7XG4gIGRpc3BsYXlMYWRkZXIocmFua2VkUGxheWVycyk7XG5cbiAgZGlzcGxheUxvYWRpbmdBbmltYXRpb24oZmFsc2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzb3J0QWxsUmFua3MocGxheWVyQXJyYXkpIHtcbiAgZGlzcGxheUxvYWRpbmdBbmltYXRpb24odHJ1ZSk7XG5cbiAgY29uc3QgcGxheWVyUmFua3MgPSBhd2FpdCBnZXRQbGF5ZXJSYW5rcyhwbGF5ZXJBcnJheSk7XG4gIC8vIG5vdyB3ZSBuZWVkIHRvIHNvcnQgcmFua2VkUGxheWVyc1xuICBjb25zdCByYW5rZWRQbGF5ZXJzID0gcGxheWVyUmFua3MucGxheWVyc1dpdGhTb2xvcVJhbmtlZERhdGE7XG4gIGNvbnN0IHVucmFua2VkUGxheWVycyA9IHBsYXllclJhbmtzLnVucmFua2VkUGxheWVyRGF0YTtcblxuICBpZiAocmFua2VkUGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgc29ydFJhbmtlZFBsYXllcnMocmFua2VkUGxheWVycyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ05vIHJhbmtlZCBwbGF5ZXJzIGZvdW5kLicpO1xuICB9XG5cbiAgZGlzcGxheVVucmFua2VkUGxheWVycyh1bnJhbmtlZFBsYXllcnMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUxvYWRpbmdBbmltYXRpb24oc3RhdGUpIHtcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKTtcblxuICBpZiAoc3RhdGUpIHtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyJyk7XG4gIH0gZWxzZSB7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlcicpO1xuICB9XG59XG4iLCJjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRjb250YWluZXInKTtcblxuZnVuY3Rpb24gY29uc29sZU91dHB1dChwbGF5ZXIsIHJhbmtpbmcpIHtcbiAgY29uc29sZS5sb2coXG4gICAgYCR7cmFua2luZ30uIGAsXG4gICAgYCR7cGxheWVyLnN1bW1vbmVyTmFtZX0gfGAsXG4gICAgcGxheWVyLnRpZXIsXG4gICAgcGxheWVyLnJhbmssXG4gICAgYCR7cGxheWVyLmxwfUxQYCxcbiAgICBgLSBhdCAke3BsYXllci53aW5yYXRlfSUgd3JgLFxuICAgIGAoJHtwbGF5ZXIud2lucyArIHBsYXllci5sb3NzZXN9IGdhbWVzKWBcbiAgKTtcbn1cblxuLy8gZnVuY3Rpb25cblxuZnVuY3Rpb24gY2FyZENyZWF0b3IocGxheWVyKSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5pbm5lckhUTUwgPSBwbGF5ZXIuc3VtbW9uZXJOYW1lO1xuICBjb25zb2xlLmxvZyhjYXJkQ29udGFpbmVyKTtcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcblxuICByZXR1cm4gY2FyZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlMYWRkZXIocmFua2VkUGxheWVycykge1xuICBsZXQgcmFua2luZyA9IDE7XG4gIHJhbmtlZFBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGNhcmRDcmVhdG9yKHBsYXllcik7XG5cbiAgICBjb25zb2xlT3V0cHV0KHBsYXllciwgcmFua2luZyk7XG4gICAgcmFua2luZyArPSAxO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlVbnJhbmtlZFBsYXllcnModW5yYW5rZWRQbGF5ZXJzKSB7XG4gIHVucmFua2VkUGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjYXJkQ3JlYXRvcihwbGF5ZXIpO1xuICB9KTtcbn1cblxuLy8gLmNhcmQge1xuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuLy8gICAgICdyYW5raW5nIGljb24gaWduIGlnbidcbi8vICAgICAncmFua2luZyBpY29uIHJhbmsgZ2FtZXMnXG4vLyAgICAgJ3JhbmtpbmcgaWNvbiByYW5rIHdpbnJhdGUnO1xuLy8gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyIDFmcjtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDFmcjtcbi8vIH1cbi8vIC5yYW5raW5nIHtcbi8vICAgZ3JpZC1hcmVhOiByYW5raW5nO1xuLy8gICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbi8vIH1cbi8vIC5pY29uIHtcbi8vICAgZ3JpZC1hcmVhOiBpY29uO1xuLy8gICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbi8vIH1cbi8vIC5pZ24ge1xuLy8gICBncmlkLWFyZWE6IGlnbjtcbi8vICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4vLyB9XG4vLyAucmFuayB7XG4vLyAgIGdyaWQtYXJlYTogcmFuaztcbi8vICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4vLyB9XG4vLyAuZ2FtZXMge1xuLy8gICBncmlkLWFyZWE6IGdhbWVzO1xuLy8gICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbi8vIH1cbi8vIC53aW5yYXRlIHtcbi8vICAgZ3JpZC1hcmVhOiB3aW5yYXRlO1xuLy8gICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbi8vIH1cbiIsImltcG9ydCB7IGdldFJhbmtlZEluZm9CeVN1bW1vbmVySWQgfSBmcm9tICcuL2ZldGNoJztcbmltcG9ydCBnZXRTdW1tb25lcklkQnlTdW1tb25lck5hbWUgZnJvbSAnLi9zdW1tb25lcklkJztcblxuLy8gbG9nZ2luZyB0aGUgc3VtbW9uZXIgcmFua1xuYXN5bmMgZnVuY3Rpb24gZmlsdGVyU29sb3FSYW5rQnlTdW1tb25lck5hbWUoc3VtbW9uZXJOYW1lKSB7XG4gIHRyeSB7XG4gICAgLy8gY29uc3Qgc3VtbW9uZXIgPSBhd2FpdCBnZXRJbmZvQnlTdW1tb25lck5hbWUoc3VtbW9uZXJOYW1lKTsgIC8vIHN1bW1vbmVyLmlkIG5lZWRzIHRvIGJlIHVzZWQgYXMgYSBwYXJhbWV0ZXIgaW4gcmVzcG9uc2VcbiAgICBjb25zdCBzdW1tb25lcklkID0gZ2V0U3VtbW9uZXJJZEJ5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSYW5rZWRJbmZvQnlTdW1tb25lcklkKHN1bW1vbmVySWQpO1xuXG4gICAgLy8gb25seSBnZXQgc29sb3EsIHJlbW92ZSBmbGV4XG4gICAgY29uc3Qgc29sb3FSYW5rRGF0YSA9IHJlc3BvbnNlLmZpbHRlcihcbiAgICAgIChyYW5rVHlwZSkgPT4gcmFua1R5cGUucXVldWVUeXBlID09PSAnUkFOS0VEX1NPTE9fNXg1J1xuICAgICk7XG4gICAgY29uc3Qgc1JEID0gc29sb3FSYW5rRGF0YVswXTtcblxuICAgIGlmIChzUkQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3Qgd2lucmF0ZVVucm91bmRlZCA9IChzUkQud2lucyAvIChzUkQud2lucyArIHNSRC5sb3NzZXMpKSAqIDEwMDtcbiAgICAgIGNvbnN0IHdpbnJhdGUgPSB3aW5yYXRlVW5yb3VuZGVkLnRvRml4ZWQoMSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN1bW1vbmVyTmFtZTogc1JELnN1bW1vbmVyTmFtZSxcbiAgICAgICAgdGllcjogc1JELnRpZXIsXG4gICAgICAgIHJhbms6IHNSRC5yYW5rLFxuICAgICAgICBscDogc1JELmxlYWd1ZVBvaW50cyxcbiAgICAgICAgd2luczogc1JELndpbnMsXG4gICAgICAgIGxvc3Nlczogc1JELmxvc3NlcyxcbiAgICAgICAgd2lucmF0ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHN1bW1vbmVyTmFtZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLy8gdGFrZXMgaW4gYW4gYXJyYXkgb2Ygc3VtbW9uZXIgbmFtZXMgYW5kIGRpc3BsYXlzIHRoZWlyIHJhbmtzXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRQbGF5ZXJSYW5rcyhzdW1tb25lckFycmF5KSB7XG4gIGNvbnN0IHBsYXllcnNXaXRoU29sb3FSYW5rZWREYXRhID0gW107XG4gIGNvbnN0IHVucmFua2VkUGxheWVyRGF0YSA9IFtdO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKFxuICAgIHN1bW1vbmVyQXJyYXkubWFwKGFzeW5jIChzdW1tb25lcikgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gYXdhaXQgZmlsdGVyU29sb3FSYW5rQnlTdW1tb25lck5hbWUoc3VtbW9uZXIpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIHN1bW1vbmVyIGlzIHVucmFua2VkXG4gICAgICAgIGlmIChwbGF5ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke3N1bW1vbmVyfTogcHJvYmFibHkgQVBJIGVycm9yYCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyLnRpZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3BsYXllci5zdW1tb25lck5hbWV9OiAke3BsYXllci50aWVyfSAke3BsYXllci5yYW5rfSAoJHtwbGF5ZXIubHB9IExQKSB8ICR7cGxheWVyLndpbnN9VywgJHtwbGF5ZXIubG9zc2VzfUwgPSAke3BsYXllci53aW5yYXRlfSUgV1IgYCk7XG4gICAgICAgICAgcGxheWVyc1dpdGhTb2xvcVJhbmtlZERhdGEucHVzaChwbGF5ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllci5zdW1tb25lck5hbWV9IGlzIGN1cnJlbnRseSBVbnJhbmtlZC5gKTtcbiAgICAgICAgICB1bnJhbmtlZFBsYXllckRhdGEucHVzaChwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBTdW1tb25lcjogJHtzdW1tb25lcn0gfGAsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuICByZXR1cm4geyBwbGF5ZXJzV2l0aFNvbG9xUmFua2VkRGF0YSwgdW5yYW5rZWRQbGF5ZXJEYXRhIH07XG59XG4iLCIvLyB0aGlzIGZpbGUgaXMgb25seSB0aGVyZSB0byBsaW1pdCB0aGUgbnVtYmVyIG9mIGFwaSBjYWxscyBuZWVkZWQgdG8gZ2V0IGFyb3VuZCBzb21lIHJhdGUgbGltaXRzLlxuLy8gXCJzdG9yaW5nXCIgc3VtbW9uZXJJZHNcblxuY29uc3QgZGIgPSB7XG4gIHNpbGhpbTogJzJ4cDJFQnZpcTdVYlhTcjlGaElFWW1tM000TmwwaW1Jc1FxMWpsT0Y3UGstRTU4JyxcbiAgbHZhbmNlOiAnRDItaHhXZlpvQzRsZ3VNRWgyWm1hQlJVNWFXNjB6S3lQcEF0R01yVlNtMnBhTDQnLFxuICBzY2ludG1hcjogJy1icTZaVWtHcDNJa2RNajBMSTctUkFDQUZLd0pHNENQd1RtS3lKRVpGejNVNU9JJyxcbiAgc2NobW9uZ286ICdYb08yWmF3TjdkNUVHRFJub0N0NG03SXFrMkVzbEpQVk1QVzRQUnlzRHFmM01PaycsXG4gIGRpbWFudHVzOiAnWEI3YjlsRTFRbEdtRlNDZm14YXlHdllXM0dhUFJoeFY2VGJ4RW51S2tmVmlOZ0EnLFxuICBmZXJ0aWcxMTogJzkxUFRwRzlKYUZGNzlnak5kbWxwLXY4dFRSQ01WNU1hWmhqS08xZk5VQXRteDVJJyxcbiAgaG9ybnljb3B0ZXI6ICdKekdVa1NuVjd0UFFaSGo0U1R0WURVRlpSVEZ5cVdjZjEyZHJkRk9FYmg1dTRqdycsXG4gIGdlbmVyYWxtdWg6ICd6Y3U4VmRSd2ZmVm14aXRFNDZjeVpxTUUteW9tU3Z1bkhaQmVaT0tGdzUtS2I5UScsXG4gIG00cGwzZzBkOiAnQ0pRN2o5V190ZE1ZVmpLVDNmNHZPRHhUdTRCbU42ejBWQTFWWU1Ua0JvbGdkd3Zzd1NQN21UUlNKQScsXG4gIGd1Y2Npc2NyaXB0ZXI6ICdJMmtmUVNPZUhwMGt4UHl5NFY0VnBoNlFRdFhlVElfcEszVHczSGY4VkdLUUdsNCcsXG4gIGtlZXAwdXQ6ICcwSnlNdHhRRXAzT2Q3ZDR3dzZUdktJTm9GTUdaR2phVE9JZHUwbm9MaUJSZnJFOCcsXG4gIGFkbWlyYWxhbHBha2E6ICdUbEJSbHhHM3R4NW55X3B4ckhzUks2VGpHb2xBT0JNS1RBSVFpRlJVNTV2SEZGWScsXG4gIGtyb2tvZWZlbmRpOiAnUVZ2el90V2YwYXJKay1zaWYtckxIemN6YS03b3U5VEU0dGNaRVpjcWZ5VVJLUDgnLFxuICBlc2NhcGVzOiAnOFdTZHd5LVprZ1N0cmh1T1ZCLWdvRmtNUlFnSVJnSEpLZ1VXeDlQYWNFUEkxWkEnLFxuICBsdW1waWR1bXBpZHU6ICdRRHYxMzRFRlVmN0pXNlpmdEZtQkhuMGZNcDhYVzZhY080YU1yM1kzajJGRUpZVScsXG4gIGNhcnRob3VyOiAnRzNLMGowa0FBZ2VkcDY5Mk1NQmptXzBDNGpqVHJaZU5QNXY0T3RUN0kyMHdLRHMnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3VtbW9uZXJJZEJ5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSkge1xuICByZXR1cm4gZGJbc3VtbW9uZXJOYW1lLnRvTG93ZXJDYXNlKCldO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgc29ydEFsbFJhbmtzIGZyb20gJy4vbGFkZGVyJztcblxuc29ydEFsbFJhbmtzKFtcbiAgJ1NpbGhpbScsXG4gICdMVmFuY2UnLFxuICAnU2NpbnRtYXInLFxuICAnU2NobW9uZ28nLFxuICAnRGltYW50dXMnLFxuICAnRmVydGlnMTEnLFxuICAnSG9ybnljb3B0ZXInLFxuICAnR2VuZXJhbE11aCcsXG4gICdNNHBsM2cwZCcsXG4gICdHVUNDSVNDUklQVEVSJyxcbiAgJ0tlZXAwdXQnLFxuICAnQWRtaXJhbEFscGFrYScsXG4gICdLcm9rb0VmZW5kaScsXG4gICdFc2NhcGVzJyxcbiAgJ0x1bXBpRHVtcGlEdScsXG4gICdDYXJ0aG91cicsXG5dKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
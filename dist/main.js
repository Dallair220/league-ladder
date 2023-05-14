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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue: #184f77;\n  --light-blue: #178bad;\n  --dark-blue: #0e2d44;\n  --dark-yellow: #ffda58;\n  --light-yellow: #fffbd9;\n  --purple: rgb(57, 1, 57);\n\n  background: linear-gradient(var(--dark-blue), var(--purple));\n  font-family: 'Nunito', sans-serif;\n  color: white;\n  font-size: 20px;\n}\n\nimg {\n  width: 75px;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 125px 1fr 50px;\n  grid-template-areas:\n    'header'\n    'content'\n    'footer';\n  height: 100vh;\n  justify-items: center;\n}\n.header {\n  grid-area: header;\n  align-self: center;\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.content {\n  text-align: center;\n  grid-area: content;\n}\n.footer {\n  grid-area: footer;\n  font-size: 25px;\n}\n\n.card {\n  display: grid;\n  grid-template-areas:\n    'ranking icon ign '\n    'ranking icon rank ';\n  grid-template-columns: 1fr 2fr 3fr;\n  grid-template-rows: 3fr 2fr;\n\n  background: linear-gradient(var(--dark-blue), var(--blue)) padding-box,\n    linear-gradient(45deg, var(--dark-yellow), var(--light-yellow)) border-box;\n  border: 2px solid transparent;\n  border-radius: 20px;\n\n  margin: 10px;\n  align-items: center;\n  justify-items: center;\n}\n.ranking {\n  grid-area: ranking;\n  font-size: 50px;\n}\n.icon {\n  grid-area: icon;\n}\n.ign {\n  grid-area: ign;\n  font-weight: bold;\n  font-size: 25px;\n  margin-right: 10px;\n}\n.rank {\n  grid-area: rank;\n}\n\n.unranked {\n  margin: 30px;\n}\n\nh1 {\n  background: linear-gradient(\n    to right,\n    var(--dark-yellow),\n    var(--light-yellow)\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nh5 {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: var(--light-blue);\n}\n\n/* for loading spinner */\n.loader {\n  width: 48px;\n  height: 48px;\n  border: 5px solid black;\n  border-bottom-color: var(--dark-yellow);\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 0.5s linear infinite;\n  margin: 20px;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,oBAAoB;EACpB,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;;EAExB,4DAA4D;EAC5D,iCAAiC;EACjC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC;;;YAGU;EACV,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb;;wBAEsB;EACtB,kCAAkC;EAClC,2BAA2B;;EAE3B;8EAC4E;EAC5E,6BAA6B;EAC7B,mBAAmB;;EAEnB,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;;;;GAIC;EACD,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,uCAAuC;EACvC,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,wCAAwC;EACxC,YAAY;AACd;AACA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');\n\n:root {\n  --blue: #184f77;\n  --light-blue: #178bad;\n  --dark-blue: #0e2d44;\n  --dark-yellow: #ffda58;\n  --light-yellow: #fffbd9;\n  --purple: rgb(57, 1, 57);\n\n  background: linear-gradient(var(--dark-blue), var(--purple));\n  font-family: 'Nunito', sans-serif;\n  color: white;\n  font-size: 20px;\n}\n\nimg {\n  width: 75px;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 125px 1fr 50px;\n  grid-template-areas:\n    'header'\n    'content'\n    'footer';\n  height: 100vh;\n  justify-items: center;\n}\n.header {\n  grid-area: header;\n  align-self: center;\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.content {\n  text-align: center;\n  grid-area: content;\n}\n.footer {\n  grid-area: footer;\n  font-size: 25px;\n}\n\n.card {\n  display: grid;\n  grid-template-areas:\n    'ranking icon ign '\n    'ranking icon rank ';\n  grid-template-columns: 1fr 2fr 3fr;\n  grid-template-rows: 3fr 2fr;\n\n  background: linear-gradient(var(--dark-blue), var(--blue)) padding-box,\n    linear-gradient(45deg, var(--dark-yellow), var(--light-yellow)) border-box;\n  border: 2px solid transparent;\n  border-radius: 20px;\n\n  margin: 10px;\n  align-items: center;\n  justify-items: center;\n}\n.ranking {\n  grid-area: ranking;\n  font-size: 50px;\n}\n.icon {\n  grid-area: icon;\n}\n.ign {\n  grid-area: ign;\n  font-weight: bold;\n  font-size: 25px;\n  margin-right: 10px;\n}\n.rank {\n  grid-area: rank;\n}\n\n.unranked {\n  margin: 30px;\n}\n\nh1 {\n  background: linear-gradient(\n    to right,\n    var(--dark-yellow),\n    var(--light-yellow)\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nh5 {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: var(--light-blue);\n}\n\n/* for loading spinner */\n.loader {\n  width: 48px;\n  height: 48px;\n  border: 5px solid black;\n  border-bottom-color: var(--dark-yellow);\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 0.5s linear infinite;\n  margin: 20px;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
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
  return 'RGAPI-b642fd95-fb77-4c98-a251-f81cbefcc74e';
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
/* harmony import */ var _summonerId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summonerId */ "./src/summonerId.js");


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

function cardCreator(classToAdd, text = '', cardToAdd = cardContainer) {
  const card = document.createElement('div');
  card.innerHTML = text;
  card.classList.add(classToAdd);
  cardToAdd.appendChild(card);

  return card;
}

function iconCreator(cardToAdd, summonerName) {
  const card = document.createElement('img');
  const iconId = (0,_summonerId__WEBPACK_IMPORTED_MODULE_0__.getIconIdBySummonerName)(summonerName.replaceAll(' ', ''));
  console.log(iconId);
  // card.src = `https://ddragon.leagueoflegends.com/cdn/11.14.1/img/profileicon/${iconId}.png`;
  card.src = `https://ddragon-webp.lolmath.net/latest/img/profileicon/${iconId}.webp`;
  card.classList.add('icon');
  cardToAdd.appendChild(card);
}

function displayLadder(rankedPlayers) {
  let ranking = 1;
  rankedPlayers.forEach((player) => {
    const card = cardCreator('card');
    // rankingElementCreator
    cardCreator('ranking', ranking, card);
    // iconElementCreator
    iconCreator(card, player.summonerName);
    // ignElementCreator
    cardCreator('ign', player.summonerName, card);
    // rankElementCreator
    cardCreator('rank', `${player.tier} ${player.rank} ${player.lp}LP`, card);

    consoleOutput(player, ranking);
    ranking += 1;
  });
}

function displayUnrankedPlayers(unrankedPlayers) {
  let honorableMention = 'Unranked: ';
  unrankedPlayers.forEach((player) => {
    honorableMention += `${player.summonerName}, `;
  });
  honorableMention = `${honorableMention.slice(0, -2)}.`;
  cardCreator('unranked', honorableMention);
}


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
/* harmony export */   "default": () => (/* binding */ getSummonerIdBySummonerName),
/* harmony export */   "getIconIdBySummonerName": () => (/* binding */ getIconIdBySummonerName)
/* harmony export */ });
// this file is only there to limit the number of api calls needed to get around some rate limits.
// "storing" summonerIds

const summonerId = {
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
  sturlennare: '0Qnr1Qmk4rSBZBtMQMKtM4EsiKEjCWZzVC_9ArNmRfSkdF8t',
};

const iconId = {
  silhim: '3184',
  lvance: '4982',
  scintmar: '918',
  schmongo: '745',
  dimantus: '547',
  fertig11: '5768',
  hornycopter: '4149',
  generalmuh: '5091',
  m4pl3g0d: '5456',
  gucciscripter: '10',
  keep0ut: '915',
  admiralalpaka: '4068',
  krokoefendi: '5765',
  escapes: '5626',
  lumpidumpidu: '23',
  carthour: '22',
  sturlennare: '7',
};

function getSummonerIdBySummonerName(summonerName) {
  return summonerId[summonerName.toLowerCase()];
}

function getIconIdBySummonerName(summonerName) {
  return iconId[summonerName.toLowerCase()];
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



const summoners = [
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
  'Sturlennare',
];

(0,_ladder__WEBPACK_IMPORTED_MODULE_1__["default"])(summoners);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9rZXkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9sYWRkZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9sb2FkaW5nLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvb3V0cHV0LmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvcmFuay5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL3N1bW1vbmVySWQuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bzp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmx1ZTogIzE4NGY3NztcXG4gIC0tbGlnaHQtYmx1ZTogIzE3OGJhZDtcXG4gIC0tZGFyay1ibHVlOiAjMGUyZDQ0O1xcbiAgLS1kYXJrLXllbGxvdzogI2ZmZGE1ODtcXG4gIC0tbGlnaHQteWVsbG93OiAjZmZmYmQ5O1xcbiAgLS1wdXJwbGU6IHJnYig1NywgMSwgNTcpO1xcblxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWRhcmstYmx1ZSksIHZhcigtLXB1cnBsZSkpO1xcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDc1cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTI1cHggMWZyIDUwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnaGVhZGVyJ1xcbiAgICAnY29udGVudCdcXG4gICAgJ2Zvb3Rlcic7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXG59XFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdyYW5raW5nIGljb24gaWduICdcXG4gICAgJ3JhbmtpbmcgaWNvbiByYW5rICc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMmZyO1xcblxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWRhcmstYmx1ZSksIHZhcigtLWJsdWUpKSBwYWRkaW5nLWJveCxcXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1kYXJrLXllbGxvdyksIHZhcigtLWxpZ2h0LXllbGxvdykpIGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxuICBtYXJnaW46IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4ucmFua2luZyB7XFxuICBncmlkLWFyZWE6IHJhbmtpbmc7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcbi5pY29uIHtcXG4gIGdyaWQtYXJlYTogaWNvbjtcXG59XFxuLmlnbiB7XFxuICBncmlkLWFyZWE6IGlnbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4ucmFuayB7XFxuICBncmlkLWFyZWE6IHJhbms7XFxufVxcblxcbi51bnJhbmtlZCB7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcblxcbmgxIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHZhcigtLWRhcmsteWVsbG93KSxcXG4gICAgdmFyKC0tbGlnaHQteWVsbG93KVxcbiAgKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5oNSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG59XFxuXFxuLyogZm9yIGxvYWRpbmcgc3Bpbm5lciAqL1xcbi5sb2FkZXIge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWRhcmsteWVsbG93KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBhbmltYXRpb246IHJvdGF0aW9uIDAuNXMgbGluZWFyIGluZmluaXRlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsd0JBQXdCOztFQUV4Qiw0REFBNEQ7RUFDNUQsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQzs7O1lBR1U7RUFDVixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7O3dCQUVzQjtFQUN0QixrQ0FBa0M7RUFDbEMsMkJBQTJCOztFQUUzQjs4RUFDNEU7RUFDNUUsNkJBQTZCO0VBQzdCLG1CQUFtQjs7RUFFbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTs7OztHQUlDO0VBQ0QsNkJBQTZCO0VBQzdCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix3Q0FBd0M7RUFDeEMsWUFBWTtBQUNkO0FBQ0E7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1ibHVlOiAjMTg0Zjc3O1xcbiAgLS1saWdodC1ibHVlOiAjMTc4YmFkO1xcbiAgLS1kYXJrLWJsdWU6ICMwZTJkNDQ7XFxuICAtLWRhcmsteWVsbG93OiAjZmZkYTU4O1xcbiAgLS1saWdodC15ZWxsb3c6ICNmZmZiZDk7XFxuICAtLXB1cnBsZTogcmdiKDU3LCAxLCA1Nyk7XFxuXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tZGFyay1ibHVlKSwgdmFyKC0tcHVycGxlKSk7XFxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogNzVweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjVweCAxZnIgNTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXInXFxuICAgICdjb250ZW50J1xcbiAgICAnZm9vdGVyJztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuLmNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbn1cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ3JhbmtpbmcgaWNvbiBpZ24gJ1xcbiAgICAncmFua2luZyBpY29uIHJhbmsgJztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAyZnI7XFxuXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tZGFyay1ibHVlKSwgdmFyKC0tYmx1ZSkpIHBhZGRpbmctYm94LFxcbiAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWRhcmsteWVsbG93KSwgdmFyKC0tbGlnaHQteWVsbG93KSkgYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG5cXG4gIG1hcmdpbjogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5yYW5raW5nIHtcXG4gIGdyaWQtYXJlYTogcmFua2luZztcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuLmljb24ge1xcbiAgZ3JpZC1hcmVhOiBpY29uO1xcbn1cXG4uaWduIHtcXG4gIGdyaWQtYXJlYTogaWduO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5yYW5rIHtcXG4gIGdyaWQtYXJlYTogcmFuaztcXG59XFxuXFxuLnVucmFua2VkIHtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuXFxuaDEge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgdmFyKC0tZGFyay15ZWxsb3cpLFxcbiAgICB2YXIoLS1saWdodC15ZWxsb3cpXFxuICApO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbmg1IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG4vKiBmb3IgbG9hZGluZyBzcGlubmVyICovXFxuLmxvYWRlciB7XFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tZGFyay15ZWxsb3cpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGFuaW1hdGlvbjogcm90YXRpb24gMC41cyBsaW5lYXIgaW5maW5pdGU7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdldFJpb3RBUElLZXkgZnJvbSAnLi9rZXknO1xuXG4vLyBkZXZlbG9wbWVudCBrZXlzIGV4cGlyZSB3aXRoaW4gMjQgaG91cnMuXG5jb25zdCBERVZfUklPVF9LRVkgPSBnZXRSaW90QVBJS2V5KCk7XG5cbi8vIGdldCBnZW5lcmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdW1tb25lciAocHJvZmlsZUljb25JZCwgUFVVSUQsIHN1bW1vbmVySWQsIGxldmVsKVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIucmlvdGdhbWVzLmNvbS9hcGlzI3N1bW1vbmVyLXY0L0dFVF9nZXRCeVN1bW1vbmVyTmFtZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEluZm9CeVN1bW1vbmVyTmFtZShzdW1tb25lck5hbWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZXV3MS5hcGkucmlvdGdhbWVzLmNvbS9sb2wvc3VtbW9uZXIvdjQvc3VtbW9uZXJzL2J5LW5hbWUvJHtzdW1tb25lck5hbWV9P2FwaV9rZXk9JHtERVZfUklPVF9LRVl9YFxuICAgICk7XG4gICAgY29uc3QgZ2VuZXJhbFN1bW1vbmVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZ2VuZXJhbFN1bW1vbmVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgQ291bGQgbm90IGZpbmQgJHtzdW1tb25lck5hbWV9IGJ5IHN1bW1vbmVyIG5hbWUuYCk7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG5cbi8vIHVzZSBzdW1tb25lcklkIHRvIGdldCByYW5rZWQgZGF0YSBhYm91dCB0aGUgZ2l2ZW4gc3VtbW9uZXJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLnJpb3RnYW1lcy5jb20vYXBpcyNsZWFndWUtdjQvR0VUX2dldExlYWd1ZUVudHJpZXNGb3JTdW1tb25lclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJhbmtlZEluZm9CeVN1bW1vbmVySWQoc3VtbW9uZXJJZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9ldXcxLmFwaS5yaW90Z2FtZXMuY29tL2xvbC9sZWFndWUvdjQvZW50cmllcy9ieS1zdW1tb25lci8ke3N1bW1vbmVySWR9P2FwaV9rZXk9JHtERVZfUklPVF9LRVl9YFxuICAgICk7XG4gICAgY29uc3Qgc3VtbW9uZXJSYW5rZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBzdW1tb25lclJhbmtlZERhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgQ291bGQgbm90IGZpbmQgc3VtbW9uZXIgcmFua2VkIGRhdGEgYnkgc3VtbW9uZXJJZDogJHtzdW1tb25lcklkfWBcbiAgICApO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UmlvdEFQSUtleSgpIHtcbiAgcmV0dXJuICdSR0FQSS1iNjQyZmQ5NS1mYjc3LTRjOTgtYTI1MS1mODFjYmVmY2M3NGUnO1xufVxuIiwiaW1wb3J0IGRpc3BsYXlMb2FkaW5nQW5pbWF0aW9uIGZyb20gJy4vbG9hZGluZyc7XG5pbXBvcnQgeyBkaXNwbGF5TGFkZGVyLCBkaXNwbGF5VW5yYW5rZWRQbGF5ZXJzIH0gZnJvbSAnLi9vdXRwdXQnO1xuaW1wb3J0IGdldFBsYXllclJhbmtzIGZyb20gJy4vcmFuayc7XG5cbmNvbnN0IFRJRVJfVkFMVUUgPSB7XG4gIElST046IDEsXG4gIEJST05aRTogMixcbiAgU0lMVkVSOiAzLFxuICBHT0xEOiA0LFxuICBQTEFUSU5VTTogNSxcbiAgRElBTU9ORDogNixcbiAgTUFTVEVSOiA3LFxuICBHUkFORE1BU1RFUjogOCxcbiAgQ0hBTExFTkdFUjogOSxcbn07XG5jb25zdCBSQU5LX1ZBTFVFID0ge1xuICBJVjogMSxcbiAgSUlJOiAyLFxuICBJSTogMyxcbiAgSTogNCxcbn07XG5cbi8vIHNvcnRpbmcgdGhlIHBsYXllcnMgYnkgc29sb3EgcmFua1xuZnVuY3Rpb24gc29ydFJhbmtlZFBsYXllcnMocmFua2VkUGxheWVycykge1xuICBjb25zb2xlLmxvZygncmFua2VkIGxpc3Q6ICcsIHJhbmtlZFBsYXllcnMpO1xuXG4gIHJhbmtlZFBsYXllcnMuc29ydCgocGxheWVyQSwgcGxheWVyQikgPT4ge1xuICAgIC8vIGNvbXBhcmUgdGllciByYW5rIGZpcnN0XG4gICAgaWYgKFRJRVJfVkFMVUVbcGxheWVyQS50aWVyXSA+IFRJRVJfVkFMVUVbcGxheWVyQi50aWVyXSkgcmV0dXJuIC0xO1xuICAgIGlmIChUSUVSX1ZBTFVFW3BsYXllckEudGllcl0gPCBUSUVSX1ZBTFVFW3BsYXllckIudGllcl0pIHJldHVybiAxO1xuXG4gICAgLy8gaWYgdGllciBpcyB0aGUgc2FtZSwgY2hlY2sgZm9yIGRpdmlzaW9uXG4gICAgaWYgKFJBTktfVkFMVUVbcGxheWVyQS5yYW5rXSA+IFJBTktfVkFMVUVbcGxheWVyQi5yYW5rXSkgcmV0dXJuIC0xO1xuICAgIGlmIChSQU5LX1ZBTFVFW3BsYXllckEucmFua10gPCBSQU5LX1ZBTFVFW3BsYXllckIucmFua10pIHJldHVybiAxO1xuXG4gICAgLy8gaWYgZGl2aXNpb24gaXMgdGhlIHNhbWUsIGNoZWNrIGZvciBMUFxuICAgIGlmIChwbGF5ZXJBLmxwID4gcGxheWVyQi5scCkgcmV0dXJuIC0xO1xuICAgIGlmIChwbGF5ZXJBLmxwIDwgcGxheWVyQi5scCkgcmV0dXJuIDE7XG5cbiAgICAvLyBpZiBMUCBpcyB0aGUgc2FtZSBhcyB3ZWxsLCBkb24ndCBjaGFuZ2Ugc29ydGluZyBvcmRlclxuICAgIHJldHVybiAwO1xuICB9KTtcbiAgZGlzcGxheUxhZGRlcihyYW5rZWRQbGF5ZXJzKTtcblxuICBkaXNwbGF5TG9hZGluZ0FuaW1hdGlvbihmYWxzZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNvcnRBbGxSYW5rcyhwbGF5ZXJBcnJheSkge1xuICBkaXNwbGF5TG9hZGluZ0FuaW1hdGlvbih0cnVlKTtcblxuICBjb25zdCBwbGF5ZXJSYW5rcyA9IGF3YWl0IGdldFBsYXllclJhbmtzKHBsYXllckFycmF5KTtcbiAgLy8gbm93IHdlIG5lZWQgdG8gc29ydCByYW5rZWRQbGF5ZXJzXG4gIGNvbnN0IHJhbmtlZFBsYXllcnMgPSBwbGF5ZXJSYW5rcy5wbGF5ZXJzV2l0aFNvbG9xUmFua2VkRGF0YTtcbiAgY29uc3QgdW5yYW5rZWRQbGF5ZXJzID0gcGxheWVyUmFua3MudW5yYW5rZWRQbGF5ZXJEYXRhO1xuXG4gIGlmIChyYW5rZWRQbGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICBzb3J0UmFua2VkUGxheWVycyhyYW5rZWRQbGF5ZXJzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnTm8gcmFua2VkIHBsYXllcnMgZm91bmQuJyk7XG4gIH1cblxuICBkaXNwbGF5VW5yYW5rZWRQbGF5ZXJzKHVucmFua2VkUGxheWVycyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TG9hZGluZ0FuaW1hdGlvbihzdGF0ZSkge1xuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpO1xuXG4gIGlmIChzdGF0ZSkge1xuICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdsb2FkZXInKTtcbiAgfSBlbHNlIHtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVyJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldEljb25JZEJ5U3VtbW9uZXJOYW1lIH0gZnJvbSAnLi9zdW1tb25lcklkJztcblxuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkY29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIGNvbnNvbGVPdXRwdXQocGxheWVyLCByYW5raW5nKSB7XG4gIGNvbnNvbGUubG9nKFxuICAgIGAke3Jhbmtpbmd9LiBgLFxuICAgIGAke3BsYXllci5zdW1tb25lck5hbWV9IHxgLFxuICAgIHBsYXllci50aWVyLFxuICAgIHBsYXllci5yYW5rLFxuICAgIGAke3BsYXllci5scH1MUGAsXG4gICAgYC0gYXQgJHtwbGF5ZXIud2lucmF0ZX0lIHdyYCxcbiAgICBgKCR7cGxheWVyLndpbnMgKyBwbGF5ZXIubG9zc2VzfSBnYW1lcylgXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNhcmRDcmVhdG9yKGNsYXNzVG9BZGQsIHRleHQgPSAnJywgY2FyZFRvQWRkID0gY2FyZENvbnRhaW5lcikge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuaW5uZXJIVE1MID0gdGV4dDtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKGNsYXNzVG9BZGQpO1xuICBjYXJkVG9BZGQuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59XG5cbmZ1bmN0aW9uIGljb25DcmVhdG9yKGNhcmRUb0FkZCwgc3VtbW9uZXJOYW1lKSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgaWNvbklkID0gZ2V0SWNvbklkQnlTdW1tb25lck5hbWUoc3VtbW9uZXJOYW1lLnJlcGxhY2VBbGwoJyAnLCAnJykpO1xuICBjb25zb2xlLmxvZyhpY29uSWQpO1xuICAvLyBjYXJkLnNyYyA9IGBodHRwczovL2RkcmFnb24ubGVhZ3Vlb2ZsZWdlbmRzLmNvbS9jZG4vMTEuMTQuMS9pbWcvcHJvZmlsZWljb24vJHtpY29uSWR9LnBuZ2A7XG4gIGNhcmQuc3JjID0gYGh0dHBzOi8vZGRyYWdvbi13ZWJwLmxvbG1hdGgubmV0L2xhdGVzdC9pbWcvcHJvZmlsZWljb24vJHtpY29uSWR9LndlYnBgO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgY2FyZFRvQWRkLmFwcGVuZENoaWxkKGNhcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxhZGRlcihyYW5rZWRQbGF5ZXJzKSB7XG4gIGxldCByYW5raW5nID0gMTtcbiAgcmFua2VkUGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBjYXJkID0gY2FyZENyZWF0b3IoJ2NhcmQnKTtcbiAgICAvLyByYW5raW5nRWxlbWVudENyZWF0b3JcbiAgICBjYXJkQ3JlYXRvcigncmFua2luZycsIHJhbmtpbmcsIGNhcmQpO1xuICAgIC8vIGljb25FbGVtZW50Q3JlYXRvclxuICAgIGljb25DcmVhdG9yKGNhcmQsIHBsYXllci5zdW1tb25lck5hbWUpO1xuICAgIC8vIGlnbkVsZW1lbnRDcmVhdG9yXG4gICAgY2FyZENyZWF0b3IoJ2lnbicsIHBsYXllci5zdW1tb25lck5hbWUsIGNhcmQpO1xuICAgIC8vIHJhbmtFbGVtZW50Q3JlYXRvclxuICAgIGNhcmRDcmVhdG9yKCdyYW5rJywgYCR7cGxheWVyLnRpZXJ9ICR7cGxheWVyLnJhbmt9ICR7cGxheWVyLmxwfUxQYCwgY2FyZCk7XG5cbiAgICBjb25zb2xlT3V0cHV0KHBsYXllciwgcmFua2luZyk7XG4gICAgcmFua2luZyArPSAxO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlVbnJhbmtlZFBsYXllcnModW5yYW5rZWRQbGF5ZXJzKSB7XG4gIGxldCBob25vcmFibGVNZW50aW9uID0gJ1VucmFua2VkOiAnO1xuICB1bnJhbmtlZFBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgaG9ub3JhYmxlTWVudGlvbiArPSBgJHtwbGF5ZXIuc3VtbW9uZXJOYW1lfSwgYDtcbiAgfSk7XG4gIGhvbm9yYWJsZU1lbnRpb24gPSBgJHtob25vcmFibGVNZW50aW9uLnNsaWNlKDAsIC0yKX0uYDtcbiAgY2FyZENyZWF0b3IoJ3VucmFua2VkJywgaG9ub3JhYmxlTWVudGlvbik7XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5rZWRJbmZvQnlTdW1tb25lcklkIH0gZnJvbSAnLi9mZXRjaCc7XG5pbXBvcnQgZ2V0U3VtbW9uZXJJZEJ5U3VtbW9uZXJOYW1lIGZyb20gJy4vc3VtbW9uZXJJZCc7XG5cbi8vIGxvZ2dpbmcgdGhlIHN1bW1vbmVyIHJhbmtcbmFzeW5jIGZ1bmN0aW9uIGZpbHRlclNvbG9xUmFua0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSkge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHN1bW1vbmVyID0gYXdhaXQgZ2V0SW5mb0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSk7ICAvLyBzdW1tb25lci5pZCBuZWVkcyB0byBiZSB1c2VkIGFzIGEgcGFyYW1ldGVyIGluIHJlc3BvbnNlXG4gICAgY29uc3Qgc3VtbW9uZXJJZCA9IGdldFN1bW1vbmVySWRCeVN1bW1vbmVyTmFtZShzdW1tb25lck5hbWUpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmFua2VkSW5mb0J5U3VtbW9uZXJJZChzdW1tb25lcklkKTtcblxuICAgIC8vIG9ubHkgZ2V0IHNvbG9xLCByZW1vdmUgZmxleFxuICAgIGNvbnN0IHNvbG9xUmFua0RhdGEgPSByZXNwb25zZS5maWx0ZXIoXG4gICAgICAocmFua1R5cGUpID0+IHJhbmtUeXBlLnF1ZXVlVHlwZSA9PT0gJ1JBTktFRF9TT0xPXzV4NSdcbiAgICApO1xuICAgIGNvbnN0IHNSRCA9IHNvbG9xUmFua0RhdGFbMF07XG5cbiAgICBpZiAoc1JEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHdpbnJhdGVVbnJvdW5kZWQgPSAoc1JELndpbnMgLyAoc1JELndpbnMgKyBzUkQubG9zc2VzKSkgKiAxMDA7XG4gICAgICBjb25zdCB3aW5yYXRlID0gd2lucmF0ZVVucm91bmRlZC50b0ZpeGVkKDEpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdW1tb25lck5hbWU6IHNSRC5zdW1tb25lck5hbWUsXG4gICAgICAgIHRpZXI6IHNSRC50aWVyLFxuICAgICAgICByYW5rOiBzUkQucmFuayxcbiAgICAgICAgbHA6IHNSRC5sZWFndWVQb2ludHMsXG4gICAgICAgIHdpbnM6IHNSRC53aW5zLFxuICAgICAgICBsb3NzZXM6IHNSRC5sb3NzZXMsXG4gICAgICAgIHdpbnJhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzdW1tb25lck5hbWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8vIHRha2VzIGluIGFuIGFycmF5IG9mIHN1bW1vbmVyIG5hbWVzIGFuZCBkaXNwbGF5cyB0aGVpciByYW5rc1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWVyUmFua3Moc3VtbW9uZXJBcnJheSkge1xuICBjb25zdCBwbGF5ZXJzV2l0aFNvbG9xUmFua2VkRGF0YSA9IFtdO1xuICBjb25zdCB1bnJhbmtlZFBsYXllckRhdGEgPSBbXTtcblxuICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBzdW1tb25lckFycmF5Lm1hcChhc3luYyAoc3VtbW9uZXIpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IGF3YWl0IGZpbHRlclNvbG9xUmFua0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBzdW1tb25lciBpcyB1bnJhbmtlZFxuICAgICAgICBpZiAocGxheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtzdW1tb25lcn06IHByb2JhYmx5IEFQSSBlcnJvcmApO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllci50aWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtwbGF5ZXIuc3VtbW9uZXJOYW1lfTogJHtwbGF5ZXIudGllcn0gJHtwbGF5ZXIucmFua30gKCR7cGxheWVyLmxwfSBMUCkgfCAke3BsYXllci53aW5zfVcsICR7cGxheWVyLmxvc3Nlc31MID0gJHtwbGF5ZXIud2lucmF0ZX0lIFdSIGApO1xuICAgICAgICAgIHBsYXllcnNXaXRoU29sb3FSYW5rZWREYXRhLnB1c2gocGxheWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIuc3VtbW9uZXJOYW1lfSBpcyBjdXJyZW50bHkgVW5yYW5rZWQuYCk7XG4gICAgICAgICAgdW5yYW5rZWRQbGF5ZXJEYXRhLnB1c2gocGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgU3VtbW9uZXI6ICR7c3VtbW9uZXJ9IHxgLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbiAgcmV0dXJuIHsgcGxheWVyc1dpdGhTb2xvcVJhbmtlZERhdGEsIHVucmFua2VkUGxheWVyRGF0YSB9O1xufVxuIiwiLy8gdGhpcyBmaWxlIGlzIG9ubHkgdGhlcmUgdG8gbGltaXQgdGhlIG51bWJlciBvZiBhcGkgY2FsbHMgbmVlZGVkIHRvIGdldCBhcm91bmQgc29tZSByYXRlIGxpbWl0cy5cbi8vIFwic3RvcmluZ1wiIHN1bW1vbmVySWRzXG5cbmNvbnN0IHN1bW1vbmVySWQgPSB7XG4gIHNpbGhpbTogJzJ4cDJFQnZpcTdVYlhTcjlGaElFWW1tM000TmwwaW1Jc1FxMWpsT0Y3UGstRTU4JyxcbiAgbHZhbmNlOiAnRDItaHhXZlpvQzRsZ3VNRWgyWm1hQlJVNWFXNjB6S3lQcEF0R01yVlNtMnBhTDQnLFxuICBzY2ludG1hcjogJy1icTZaVWtHcDNJa2RNajBMSTctUkFDQUZLd0pHNENQd1RtS3lKRVpGejNVNU9JJyxcbiAgc2NobW9uZ286ICdYb08yWmF3TjdkNUVHRFJub0N0NG03SXFrMkVzbEpQVk1QVzRQUnlzRHFmM01PaycsXG4gIGRpbWFudHVzOiAnWEI3YjlsRTFRbEdtRlNDZm14YXlHdllXM0dhUFJoeFY2VGJ4RW51S2tmVmlOZ0EnLFxuICBmZXJ0aWcxMTogJzkxUFRwRzlKYUZGNzlnak5kbWxwLXY4dFRSQ01WNU1hWmhqS08xZk5VQXRteDVJJyxcbiAgaG9ybnljb3B0ZXI6ICdKekdVa1NuVjd0UFFaSGo0U1R0WURVRlpSVEZ5cVdjZjEyZHJkRk9FYmg1dTRqdycsXG4gIGdlbmVyYWxtdWg6ICd6Y3U4VmRSd2ZmVm14aXRFNDZjeVpxTUUteW9tU3Z1bkhaQmVaT0tGdzUtS2I5UScsXG4gIG00cGwzZzBkOiAnQ0pRN2o5V190ZE1ZVmpLVDNmNHZPRHhUdTRCbU42ejBWQTFWWU1Ua0JvbGdkd3Zzd1NQN21UUlNKQScsXG4gIGd1Y2Npc2NyaXB0ZXI6ICdJMmtmUVNPZUhwMGt4UHl5NFY0VnBoNlFRdFhlVElfcEszVHczSGY4VkdLUUdsNCcsXG4gIGtlZXAwdXQ6ICcwSnlNdHhRRXAzT2Q3ZDR3dzZUdktJTm9GTUdaR2phVE9JZHUwbm9MaUJSZnJFOCcsXG4gIGFkbWlyYWxhbHBha2E6ICdUbEJSbHhHM3R4NW55X3B4ckhzUks2VGpHb2xBT0JNS1RBSVFpRlJVNTV2SEZGWScsXG4gIGtyb2tvZWZlbmRpOiAnUVZ2el90V2YwYXJKay1zaWYtckxIemN6YS03b3U5VEU0dGNaRVpjcWZ5VVJLUDgnLFxuICBlc2NhcGVzOiAnOFdTZHd5LVprZ1N0cmh1T1ZCLWdvRmtNUlFnSVJnSEpLZ1VXeDlQYWNFUEkxWkEnLFxuICBsdW1waWR1bXBpZHU6ICdRRHYxMzRFRlVmN0pXNlpmdEZtQkhuMGZNcDhYVzZhY080YU1yM1kzajJGRUpZVScsXG4gIGNhcnRob3VyOiAnRzNLMGowa0FBZ2VkcDY5Mk1NQmptXzBDNGpqVHJaZU5QNXY0T3RUN0kyMHdLRHMnLFxuICBzdHVybGVubmFyZTogJzBRbnIxUW1rNHJTQlpCdE1RTUt0TTRFc2lLRWpDV1p6VkNfOUFyTm1SZlNrZEY4dCcsXG59O1xuXG5jb25zdCBpY29uSWQgPSB7XG4gIHNpbGhpbTogJzMxODQnLFxuICBsdmFuY2U6ICc0OTgyJyxcbiAgc2NpbnRtYXI6ICc5MTgnLFxuICBzY2htb25nbzogJzc0NScsXG4gIGRpbWFudHVzOiAnNTQ3JyxcbiAgZmVydGlnMTE6ICc1NzY4JyxcbiAgaG9ybnljb3B0ZXI6ICc0MTQ5JyxcbiAgZ2VuZXJhbG11aDogJzUwOTEnLFxuICBtNHBsM2cwZDogJzU0NTYnLFxuICBndWNjaXNjcmlwdGVyOiAnMTAnLFxuICBrZWVwMHV0OiAnOTE1JyxcbiAgYWRtaXJhbGFscGFrYTogJzQwNjgnLFxuICBrcm9rb2VmZW5kaTogJzU3NjUnLFxuICBlc2NhcGVzOiAnNTYyNicsXG4gIGx1bXBpZHVtcGlkdTogJzIzJyxcbiAgY2FydGhvdXI6ICcyMicsXG4gIHN0dXJsZW5uYXJlOiAnNycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTdW1tb25lcklkQnlTdW1tb25lck5hbWUoc3VtbW9uZXJOYW1lKSB7XG4gIHJldHVybiBzdW1tb25lcklkW3N1bW1vbmVyTmFtZS50b0xvd2VyQ2FzZSgpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEljb25JZEJ5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSkge1xuICByZXR1cm4gaWNvbklkW3N1bW1vbmVyTmFtZS50b0xvd2VyQ2FzZSgpXTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHNvcnRBbGxSYW5rcyBmcm9tICcuL2xhZGRlcic7XG5cbmNvbnN0IHN1bW1vbmVycyA9IFtcbiAgJ1NpbGhpbScsXG4gICdMVmFuY2UnLFxuICAnU2NpbnRtYXInLFxuICAnU2NobW9uZ28nLFxuICAnRGltYW50dXMnLFxuICAnRmVydGlnMTEnLFxuICAnSG9ybnljb3B0ZXInLFxuICAnR2VuZXJhbE11aCcsXG4gICdNNHBsM2cwZCcsXG4gICdHVUNDSVNDUklQVEVSJyxcbiAgJ0tlZXAwdXQnLFxuICAnQWRtaXJhbEFscGFrYScsXG4gICdLcm9rb0VmZW5kaScsXG4gICdFc2NhcGVzJyxcbiAgJ0x1bXBpRHVtcGlEdScsXG4gICdDYXJ0aG91cicsXG4gICdTdHVybGVubmFyZScsXG5dO1xuXG5zb3J0QWxsUmFua3Moc3VtbW9uZXJzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
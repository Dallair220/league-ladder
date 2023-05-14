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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue: #184f77;\n  --light-blue: #178bad;\n  --dark-blue: #0e2d44;\n  --dark-yellow: #ffda58;\n  --light-yellow: #fffbd9;\n  --purple: rgb(57, 1, 57);\n\n  height: 100%;\n  background: linear-gradient(var(--dark-blue), var(--purple));\n  font-family: 'Nunito', sans-serif;\n  color: white;\n  font-size: 20px;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 150px 1fr 100px;\n  grid-template-areas:\n    'header'\n    'content'\n    'footer';\n  height: 100vh;\n  justify-items: center;\n}\n.header {\n  grid-area: header;\n  align-self: center;\n  font-size: 30px;\n}\n.content {\n  text-align: center;\n  grid-area: content;\n  height: 100%;\n}\n.footer {\n  grid-area: footer;\n  font-size: 25px;\n}\n\n.card {\n  display: grid;\n  grid-template-areas:\n    'ranking icon ign '\n    'ranking icon rank ';\n  grid-template-columns: 1fr 1fr 2fr;\n  grid-template-rows: 3fr 2fr;\n\n  background: linear-gradient(var(--dark-blue), var(--blue)) padding-box,\n    linear-gradient(45deg, var(--dark-yellow), var(--light-yellow)) border-box;\n  border: 2px solid transparent;\n  border-radius: 20px;\n\n  margin: 10px;\n  align-items: center;\n  justify-items: center;\n}\n.ranking {\n  grid-area: ranking;\n  font-size: 50px;\n}\n.icon {\n  grid-area: icon;\n}\n.ign {\n  grid-area: ign;\n  font-weight: bold;\n  font-size: 25px;\n  margin-right: 10px;\n}\n.rank {\n  grid-area: rank;\n}\n\n.unranked {\n  margin: 30px;\n}\n\nh1 {\n  background: linear-gradient(\n    to right,\n    var(--dark-yellow),\n    var(--light-yellow)\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n/* for loading spinner */\n.loader {\n  width: 48px;\n  height: 48px;\n  border: 5px solid black;\n  border-bottom-color: var(--dark-yellow);\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 0.5s linear infinite;\n  margin: 20px;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,oBAAoB;EACpB,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;;EAExB,YAAY;EACZ,4DAA4D;EAC5D,iCAAiC;EACjC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC;;;YAGU;EACV,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb;;wBAEsB;EACtB,kCAAkC;EAClC,2BAA2B;;EAE3B;8EAC4E;EAC5E,6BAA6B;EAC7B,mBAAmB;;EAEnB,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;;;;GAIC;EACD,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,uCAAuC;EACvC,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,wCAAwC;EACxC,YAAY;AACd;AACA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');\n\n:root {\n  --blue: #184f77;\n  --light-blue: #178bad;\n  --dark-blue: #0e2d44;\n  --dark-yellow: #ffda58;\n  --light-yellow: #fffbd9;\n  --purple: rgb(57, 1, 57);\n\n  height: 100%;\n  background: linear-gradient(var(--dark-blue), var(--purple));\n  font-family: 'Nunito', sans-serif;\n  color: white;\n  font-size: 20px;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 150px 1fr 100px;\n  grid-template-areas:\n    'header'\n    'content'\n    'footer';\n  height: 100vh;\n  justify-items: center;\n}\n.header {\n  grid-area: header;\n  align-self: center;\n  font-size: 30px;\n}\n.content {\n  text-align: center;\n  grid-area: content;\n  height: 100%;\n}\n.footer {\n  grid-area: footer;\n  font-size: 25px;\n}\n\n.card {\n  display: grid;\n  grid-template-areas:\n    'ranking icon ign '\n    'ranking icon rank ';\n  grid-template-columns: 1fr 1fr 2fr;\n  grid-template-rows: 3fr 2fr;\n\n  background: linear-gradient(var(--dark-blue), var(--blue)) padding-box,\n    linear-gradient(45deg, var(--dark-yellow), var(--light-yellow)) border-box;\n  border: 2px solid transparent;\n  border-radius: 20px;\n\n  margin: 10px;\n  align-items: center;\n  justify-items: center;\n}\n.ranking {\n  grid-area: ranking;\n  font-size: 50px;\n}\n.icon {\n  grid-area: icon;\n}\n.ign {\n  grid-area: ign;\n  font-weight: bold;\n  font-size: 25px;\n  margin-right: 10px;\n}\n.rank {\n  grid-area: rank;\n}\n\n.unranked {\n  margin: 30px;\n}\n\nh1 {\n  background: linear-gradient(\n    to right,\n    var(--dark-yellow),\n    var(--light-yellow)\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n/* for loading spinner */\n.loader {\n  width: 48px;\n  height: 48px;\n  border: 5px solid black;\n  border-bottom-color: var(--dark-yellow);\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 0.5s linear infinite;\n  margin: 20px;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
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
  return 'RGAPI-cefa1ec1-7cf5-4031-b176-275242f769e1';
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

function cardCreator(classToAdd, text = '', cardToAdd = cardContainer) {
  const card = document.createElement('div');
  card.innerHTML = text;
  card.classList.add(classToAdd);
  cardToAdd.appendChild(card);

  return card;
}

function displayLadder(rankedPlayers) {
  let ranking = 1;
  rankedPlayers.forEach((player) => {
    const card = cardCreator('card');
    // rankingElementCreator
    cardCreator('ranking', ranking, card);
    // iconElementCreator
    cardCreator('icon', '#icon', card);
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
  sturlennare: '0Qnr1Qmk4rSBZBtMQMKtM4EsiKEjCWZzVC_9ArNmRfSkdF8t',
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
  'Sturlennare',
]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9mZXRjaC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL2tleS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL2xhZGRlci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9vdXRwdXQuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9yYW5rLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvc3VtbW9uZXJJZC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1ibHVlOiAjMTg0Zjc3O1xcbiAgLS1saWdodC1ibHVlOiAjMTc4YmFkO1xcbiAgLS1kYXJrLWJsdWU6ICMwZTJkNDQ7XFxuICAtLWRhcmsteWVsbG93OiAjZmZkYTU4O1xcbiAgLS1saWdodC15ZWxsb3c6ICNmZmZiZDk7XFxuICAtLXB1cnBsZTogcmdiKDU3LCAxLCA1Nyk7XFxuXFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tZGFyay1ibHVlKSwgdmFyKC0tcHVycGxlKSk7XFxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMWZyIDEwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ2hlYWRlcidcXG4gICAgJ2NvbnRlbnQnXFxuICAgICdmb290ZXInO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLmNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgJ3JhbmtpbmcgaWNvbiBpZ24gJ1xcbiAgICAncmFua2luZyBpY29uIHJhbmsgJztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAyZnI7XFxuXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tZGFyay1ibHVlKSwgdmFyKC0tYmx1ZSkpIHBhZGRpbmctYm94LFxcbiAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWRhcmsteWVsbG93KSwgdmFyKC0tbGlnaHQteWVsbG93KSkgYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG5cXG4gIG1hcmdpbjogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5yYW5raW5nIHtcXG4gIGdyaWQtYXJlYTogcmFua2luZztcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuLmljb24ge1xcbiAgZ3JpZC1hcmVhOiBpY29uO1xcbn1cXG4uaWduIHtcXG4gIGdyaWQtYXJlYTogaWduO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5yYW5rIHtcXG4gIGdyaWQtYXJlYTogcmFuaztcXG59XFxuXFxuLnVucmFua2VkIHtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuXFxuaDEge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgdmFyKC0tZGFyay15ZWxsb3cpLFxcbiAgICB2YXIoLS1saWdodC15ZWxsb3cpXFxuICApO1xcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIGZvciBsb2FkaW5nIHNwaW5uZXIgKi9cXG4ubG9hZGVyIHtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1kYXJrLXllbGxvdyk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAwLjVzIGxpbmVhciBpbmZpbml0ZTtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuQGtleWZyYW1lcyByb3RhdGlvbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdCQUF3Qjs7RUFFeEIsWUFBWTtFQUNaLDREQUE0RDtFQUM1RCxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DOzs7WUFHVTtFQUNWLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiOzt3QkFFc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLDJCQUEyQjs7RUFFM0I7OEVBQzRFO0VBQzVFLDZCQUE2QjtFQUM3QixtQkFBbUI7O0VBRW5CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0U7Ozs7R0FJQztFQUNELDZCQUE2QjtFQUM3QixvQ0FBb0M7QUFDdEM7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWJsdWU6ICMxODRmNzc7XFxuICAtLWxpZ2h0LWJsdWU6ICMxNzhiYWQ7XFxuICAtLWRhcmstYmx1ZTogIzBlMmQ0NDtcXG4gIC0tZGFyay15ZWxsb3c6ICNmZmRhNTg7XFxuICAtLWxpZ2h0LXllbGxvdzogI2ZmZmJkOTtcXG4gIC0tcHVycGxlOiByZ2IoNTcsIDEsIDU3KTtcXG5cXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1kYXJrLWJsdWUpLCB2YXIoLS1wdXJwbGUpKTtcXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCAxZnIgMTAwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnaGVhZGVyJ1xcbiAgICAnY29udGVudCdcXG4gICAgJ2Zvb3Rlcic7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4uY29udGVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5mb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAncmFua2luZyBpY29uIGlnbiAnXFxuICAgICdyYW5raW5nIGljb24gcmFuayAnO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDJmcjtcXG5cXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1kYXJrLWJsdWUpLCB2YXIoLS1ibHVlKSkgcGFkZGluZy1ib3gsXFxuICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tZGFyay15ZWxsb3cpLCB2YXIoLS1saWdodC15ZWxsb3cpKSBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuLnJhbmtpbmcge1xcbiAgZ3JpZC1hcmVhOiByYW5raW5nO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG4uaWNvbiB7XFxuICBncmlkLWFyZWE6IGljb247XFxufVxcbi5pZ24ge1xcbiAgZ3JpZC1hcmVhOiBpZ247XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLnJhbmsge1xcbiAgZ3JpZC1hcmVhOiByYW5rO1xcbn1cXG5cXG4udW5yYW5rZWQge1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICB2YXIoLS1kYXJrLXllbGxvdyksXFxuICAgIHZhcigtLWxpZ2h0LXllbGxvdylcXG4gICk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogZm9yIGxvYWRpbmcgc3Bpbm5lciAqL1xcbi5sb2FkZXIge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWRhcmsteWVsbG93KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBhbmltYXRpb246IHJvdGF0aW9uIDAuNXMgbGluZWFyIGluZmluaXRlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnZXRSaW90QVBJS2V5IGZyb20gJy4va2V5JztcblxuLy8gZGV2ZWxvcG1lbnQga2V5cyBleHBpcmUgd2l0aGluIDI0IGhvdXJzLlxuY29uc3QgREVWX1JJT1RfS0VZID0gZ2V0UmlvdEFQSUtleSgpO1xuXG4vLyBnZXQgZ2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3VtbW9uZXIgKHByb2ZpbGVJY29uSWQsIFBVVUlELCBzdW1tb25lcklkLCBsZXZlbClcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLnJpb3RnYW1lcy5jb20vYXBpcyNzdW1tb25lci12NC9HRVRfZ2V0QnlTdW1tb25lck5hbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbmZvQnlTdW1tb25lck5hbWUoc3VtbW9uZXJOYW1lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2V1dzEuYXBpLnJpb3RnYW1lcy5jb20vbG9sL3N1bW1vbmVyL3Y0L3N1bW1vbmVycy9ieS1uYW1lLyR7c3VtbW9uZXJOYW1lfT9hcGlfa2V5PSR7REVWX1JJT1RfS0VZfWBcbiAgICApO1xuICAgIGNvbnN0IGdlbmVyYWxTdW1tb25lckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGdlbmVyYWxTdW1tb25lckRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYENvdWxkIG5vdCBmaW5kICR7c3VtbW9uZXJOYW1lfSBieSBzdW1tb25lciBuYW1lLmApO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG4vLyB1c2Ugc3VtbW9uZXJJZCB0byBnZXQgcmFua2VkIGRhdGEgYWJvdXQgdGhlIGdpdmVuIHN1bW1vbmVyXG4vLyBodHRwczovL2RldmVsb3Blci5yaW90Z2FtZXMuY29tL2FwaXMjbGVhZ3VlLXY0L0dFVF9nZXRMZWFndWVFbnRyaWVzRm9yU3VtbW9uZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSYW5rZWRJbmZvQnlTdW1tb25lcklkKHN1bW1vbmVySWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZXV3MS5hcGkucmlvdGdhbWVzLmNvbS9sb2wvbGVhZ3VlL3Y0L2VudHJpZXMvYnktc3VtbW9uZXIvJHtzdW1tb25lcklkfT9hcGlfa2V5PSR7REVWX1JJT1RfS0VZfWBcbiAgICApO1xuICAgIGNvbnN0IHN1bW1vbmVyUmFua2VkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gc3VtbW9uZXJSYW5rZWREYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYENvdWxkIG5vdCBmaW5kIHN1bW1vbmVyIHJhbmtlZCBkYXRhIGJ5IHN1bW1vbmVySWQ6ICR7c3VtbW9uZXJJZH1gXG4gICAgKTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJpb3RBUElLZXkoKSB7XG4gIHJldHVybiAnUkdBUEktY2VmYTFlYzEtN2NmNS00MDMxLWIxNzYtMjc1MjQyZjc2OWUxJztcbn1cbiIsImltcG9ydCBkaXNwbGF5TG9hZGluZ0FuaW1hdGlvbiBmcm9tICcuL2xvYWRpbmcnO1xuaW1wb3J0IHsgZGlzcGxheUxhZGRlciwgZGlzcGxheVVucmFua2VkUGxheWVycyB9IGZyb20gJy4vb3V0cHV0JztcbmltcG9ydCBnZXRQbGF5ZXJSYW5rcyBmcm9tICcuL3JhbmsnO1xuXG5jb25zdCBUSUVSX1ZBTFVFID0ge1xuICBJUk9OOiAxLFxuICBCUk9OWkU6IDIsXG4gIFNJTFZFUjogMyxcbiAgR09MRDogNCxcbiAgUExBVElOVU06IDUsXG4gIERJQU1PTkQ6IDYsXG4gIE1BU1RFUjogNyxcbiAgR1JBTkRNQVNURVI6IDgsXG4gIENIQUxMRU5HRVI6IDksXG59O1xuY29uc3QgUkFOS19WQUxVRSA9IHtcbiAgSVY6IDEsXG4gIElJSTogMixcbiAgSUk6IDMsXG4gIEk6IDQsXG59O1xuXG4vLyBzb3J0aW5nIHRoZSBwbGF5ZXJzIGJ5IHNvbG9xIHJhbmtcbmZ1bmN0aW9uIHNvcnRSYW5rZWRQbGF5ZXJzKHJhbmtlZFBsYXllcnMpIHtcbiAgY29uc29sZS5sb2coJ3JhbmtlZCBsaXN0OiAnLCByYW5rZWRQbGF5ZXJzKTtcblxuICByYW5rZWRQbGF5ZXJzLnNvcnQoKHBsYXllckEsIHBsYXllckIpID0+IHtcbiAgICAvLyBjb21wYXJlIHRpZXIgcmFuayBmaXJzdFxuICAgIGlmIChUSUVSX1ZBTFVFW3BsYXllckEudGllcl0gPiBUSUVSX1ZBTFVFW3BsYXllckIudGllcl0pIHJldHVybiAtMTtcbiAgICBpZiAoVElFUl9WQUxVRVtwbGF5ZXJBLnRpZXJdIDwgVElFUl9WQUxVRVtwbGF5ZXJCLnRpZXJdKSByZXR1cm4gMTtcblxuICAgIC8vIGlmIHRpZXIgaXMgdGhlIHNhbWUsIGNoZWNrIGZvciBkaXZpc2lvblxuICAgIGlmIChSQU5LX1ZBTFVFW3BsYXllckEucmFua10gPiBSQU5LX1ZBTFVFW3BsYXllckIucmFua10pIHJldHVybiAtMTtcbiAgICBpZiAoUkFOS19WQUxVRVtwbGF5ZXJBLnJhbmtdIDwgUkFOS19WQUxVRVtwbGF5ZXJCLnJhbmtdKSByZXR1cm4gMTtcblxuICAgIC8vIGlmIGRpdmlzaW9uIGlzIHRoZSBzYW1lLCBjaGVjayBmb3IgTFBcbiAgICBpZiAocGxheWVyQS5scCA+IHBsYXllckIubHApIHJldHVybiAtMTtcbiAgICBpZiAocGxheWVyQS5scCA8IHBsYXllckIubHApIHJldHVybiAxO1xuXG4gICAgLy8gaWYgTFAgaXMgdGhlIHNhbWUgYXMgd2VsbCwgZG9uJ3QgY2hhbmdlIHNvcnRpbmcgb3JkZXJcbiAgICByZXR1cm4gMDtcbiAgfSk7XG4gIGRpc3BsYXlMYWRkZXIocmFua2VkUGxheWVycyk7XG5cbiAgZGlzcGxheUxvYWRpbmdBbmltYXRpb24oZmFsc2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzb3J0QWxsUmFua3MocGxheWVyQXJyYXkpIHtcbiAgZGlzcGxheUxvYWRpbmdBbmltYXRpb24odHJ1ZSk7XG5cbiAgY29uc3QgcGxheWVyUmFua3MgPSBhd2FpdCBnZXRQbGF5ZXJSYW5rcyhwbGF5ZXJBcnJheSk7XG4gIC8vIG5vdyB3ZSBuZWVkIHRvIHNvcnQgcmFua2VkUGxheWVyc1xuICBjb25zdCByYW5rZWRQbGF5ZXJzID0gcGxheWVyUmFua3MucGxheWVyc1dpdGhTb2xvcVJhbmtlZERhdGE7XG4gIGNvbnN0IHVucmFua2VkUGxheWVycyA9IHBsYXllclJhbmtzLnVucmFua2VkUGxheWVyRGF0YTtcblxuICBpZiAocmFua2VkUGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgc29ydFJhbmtlZFBsYXllcnMocmFua2VkUGxheWVycyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ05vIHJhbmtlZCBwbGF5ZXJzIGZvdW5kLicpO1xuICB9XG5cbiAgZGlzcGxheVVucmFua2VkUGxheWVycyh1bnJhbmtlZFBsYXllcnMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUxvYWRpbmdBbmltYXRpb24oc3RhdGUpIHtcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKTtcblxuICBpZiAoc3RhdGUpIHtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyJyk7XG4gIH0gZWxzZSB7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlcicpO1xuICB9XG59XG4iLCJjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRjb250YWluZXInKTtcblxuZnVuY3Rpb24gY29uc29sZU91dHB1dChwbGF5ZXIsIHJhbmtpbmcpIHtcbiAgY29uc29sZS5sb2coXG4gICAgYCR7cmFua2luZ30uIGAsXG4gICAgYCR7cGxheWVyLnN1bW1vbmVyTmFtZX0gfGAsXG4gICAgcGxheWVyLnRpZXIsXG4gICAgcGxheWVyLnJhbmssXG4gICAgYCR7cGxheWVyLmxwfUxQYCxcbiAgICBgLSBhdCAke3BsYXllci53aW5yYXRlfSUgd3JgLFxuICAgIGAoJHtwbGF5ZXIud2lucyArIHBsYXllci5sb3NzZXN9IGdhbWVzKWBcbiAgKTtcbn1cblxuZnVuY3Rpb24gY2FyZENyZWF0b3IoY2xhc3NUb0FkZCwgdGV4dCA9ICcnLCBjYXJkVG9BZGQgPSBjYXJkQ29udGFpbmVyKSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5pbm5lckhUTUwgPSB0ZXh0O1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoY2xhc3NUb0FkZCk7XG4gIGNhcmRUb0FkZC5hcHBlbmRDaGlsZChjYXJkKTtcblxuICByZXR1cm4gY2FyZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlMYWRkZXIocmFua2VkUGxheWVycykge1xuICBsZXQgcmFua2luZyA9IDE7XG4gIHJhbmtlZFBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGNhcmRDcmVhdG9yKCdjYXJkJyk7XG4gICAgLy8gcmFua2luZ0VsZW1lbnRDcmVhdG9yXG4gICAgY2FyZENyZWF0b3IoJ3JhbmtpbmcnLCByYW5raW5nLCBjYXJkKTtcbiAgICAvLyBpY29uRWxlbWVudENyZWF0b3JcbiAgICBjYXJkQ3JlYXRvcignaWNvbicsICcjaWNvbicsIGNhcmQpO1xuICAgIC8vIGlnbkVsZW1lbnRDcmVhdG9yXG4gICAgY2FyZENyZWF0b3IoJ2lnbicsIHBsYXllci5zdW1tb25lck5hbWUsIGNhcmQpO1xuICAgIC8vIHJhbmtFbGVtZW50Q3JlYXRvclxuICAgIGNhcmRDcmVhdG9yKCdyYW5rJywgYCR7cGxheWVyLnRpZXJ9ICR7cGxheWVyLnJhbmt9ICR7cGxheWVyLmxwfUxQYCwgY2FyZCk7XG5cbiAgICBjb25zb2xlT3V0cHV0KHBsYXllciwgcmFua2luZyk7XG4gICAgcmFua2luZyArPSAxO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlVbnJhbmtlZFBsYXllcnModW5yYW5rZWRQbGF5ZXJzKSB7XG4gIGxldCBob25vcmFibGVNZW50aW9uID0gJ1VucmFua2VkOiAnO1xuICB1bnJhbmtlZFBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgaG9ub3JhYmxlTWVudGlvbiArPSBgJHtwbGF5ZXIuc3VtbW9uZXJOYW1lfSwgYDtcbiAgfSk7XG4gIGhvbm9yYWJsZU1lbnRpb24gPSBgJHtob25vcmFibGVNZW50aW9uLnNsaWNlKDAsIC0yKX0uYDtcbiAgY2FyZENyZWF0b3IoJ3VucmFua2VkJywgaG9ub3JhYmxlTWVudGlvbik7XG59XG5cbi8vIC5jYXJkIHtcbi8vICAgZGlzcGxheTogZ3JpZDtcbi8vICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbi8vICAgICAncmFua2luZyBpY29uIGlnbiBpZ24nXG4vLyAgICAgJ3JhbmtpbmcgaWNvbiByYW5rIGdhbWVzJ1xuLy8gICAgICdyYW5raW5nIGljb24gcmFuayB3aW5yYXRlJztcbi8vICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDJmciAxZnI7XG4vLyAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnI7XG4vLyB9XG4vLyAucmFua2luZyB7XG4vLyAgIGdyaWQtYXJlYTogcmFua2luZztcbi8vICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4vLyB9XG4vLyAuaWNvbiB7XG4vLyAgIGdyaWQtYXJlYTogaWNvbjtcbi8vICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4vLyB9XG4vLyAuaWduIHtcbi8vICAgZ3JpZC1hcmVhOiBpZ247XG4vLyAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuLy8gfVxuLy8gLnJhbmsge1xuLy8gICBncmlkLWFyZWE6IHJhbms7XG4vLyAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuLy8gfVxuLy8gLmdhbWVzIHtcbi8vICAgZ3JpZC1hcmVhOiBnYW1lcztcbi8vICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4vLyB9XG4vLyAud2lucmF0ZSB7XG4vLyAgIGdyaWQtYXJlYTogd2lucmF0ZTtcbi8vICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4vLyB9XG4iLCJpbXBvcnQgeyBnZXRSYW5rZWRJbmZvQnlTdW1tb25lcklkIH0gZnJvbSAnLi9mZXRjaCc7XG5pbXBvcnQgZ2V0U3VtbW9uZXJJZEJ5U3VtbW9uZXJOYW1lIGZyb20gJy4vc3VtbW9uZXJJZCc7XG5cbi8vIGxvZ2dpbmcgdGhlIHN1bW1vbmVyIHJhbmtcbmFzeW5jIGZ1bmN0aW9uIGZpbHRlclNvbG9xUmFua0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSkge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHN1bW1vbmVyID0gYXdhaXQgZ2V0SW5mb0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSk7ICAvLyBzdW1tb25lci5pZCBuZWVkcyB0byBiZSB1c2VkIGFzIGEgcGFyYW1ldGVyIGluIHJlc3BvbnNlXG4gICAgY29uc3Qgc3VtbW9uZXJJZCA9IGdldFN1bW1vbmVySWRCeVN1bW1vbmVyTmFtZShzdW1tb25lck5hbWUpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmFua2VkSW5mb0J5U3VtbW9uZXJJZChzdW1tb25lcklkKTtcblxuICAgIC8vIG9ubHkgZ2V0IHNvbG9xLCByZW1vdmUgZmxleFxuICAgIGNvbnN0IHNvbG9xUmFua0RhdGEgPSByZXNwb25zZS5maWx0ZXIoXG4gICAgICAocmFua1R5cGUpID0+IHJhbmtUeXBlLnF1ZXVlVHlwZSA9PT0gJ1JBTktFRF9TT0xPXzV4NSdcbiAgICApO1xuICAgIGNvbnN0IHNSRCA9IHNvbG9xUmFua0RhdGFbMF07XG5cbiAgICBpZiAoc1JEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHdpbnJhdGVVbnJvdW5kZWQgPSAoc1JELndpbnMgLyAoc1JELndpbnMgKyBzUkQubG9zc2VzKSkgKiAxMDA7XG4gICAgICBjb25zdCB3aW5yYXRlID0gd2lucmF0ZVVucm91bmRlZC50b0ZpeGVkKDEpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdW1tb25lck5hbWU6IHNSRC5zdW1tb25lck5hbWUsXG4gICAgICAgIHRpZXI6IHNSRC50aWVyLFxuICAgICAgICByYW5rOiBzUkQucmFuayxcbiAgICAgICAgbHA6IHNSRC5sZWFndWVQb2ludHMsXG4gICAgICAgIHdpbnM6IHNSRC53aW5zLFxuICAgICAgICBsb3NzZXM6IHNSRC5sb3NzZXMsXG4gICAgICAgIHdpbnJhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzdW1tb25lck5hbWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8vIHRha2VzIGluIGFuIGFycmF5IG9mIHN1bW1vbmVyIG5hbWVzIGFuZCBkaXNwbGF5cyB0aGVpciByYW5rc1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWVyUmFua3Moc3VtbW9uZXJBcnJheSkge1xuICBjb25zdCBwbGF5ZXJzV2l0aFNvbG9xUmFua2VkRGF0YSA9IFtdO1xuICBjb25zdCB1bnJhbmtlZFBsYXllckRhdGEgPSBbXTtcblxuICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBzdW1tb25lckFycmF5Lm1hcChhc3luYyAoc3VtbW9uZXIpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IGF3YWl0IGZpbHRlclNvbG9xUmFua0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBzdW1tb25lciBpcyB1bnJhbmtlZFxuICAgICAgICBpZiAocGxheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtzdW1tb25lcn06IHByb2JhYmx5IEFQSSBlcnJvcmApO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllci50aWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtwbGF5ZXIuc3VtbW9uZXJOYW1lfTogJHtwbGF5ZXIudGllcn0gJHtwbGF5ZXIucmFua30gKCR7cGxheWVyLmxwfSBMUCkgfCAke3BsYXllci53aW5zfVcsICR7cGxheWVyLmxvc3Nlc31MID0gJHtwbGF5ZXIud2lucmF0ZX0lIFdSIGApO1xuICAgICAgICAgIHBsYXllcnNXaXRoU29sb3FSYW5rZWREYXRhLnB1c2gocGxheWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIuc3VtbW9uZXJOYW1lfSBpcyBjdXJyZW50bHkgVW5yYW5rZWQuYCk7XG4gICAgICAgICAgdW5yYW5rZWRQbGF5ZXJEYXRhLnB1c2gocGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgU3VtbW9uZXI6ICR7c3VtbW9uZXJ9IHxgLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbiAgcmV0dXJuIHsgcGxheWVyc1dpdGhTb2xvcVJhbmtlZERhdGEsIHVucmFua2VkUGxheWVyRGF0YSB9O1xufVxuIiwiLy8gdGhpcyBmaWxlIGlzIG9ubHkgdGhlcmUgdG8gbGltaXQgdGhlIG51bWJlciBvZiBhcGkgY2FsbHMgbmVlZGVkIHRvIGdldCBhcm91bmQgc29tZSByYXRlIGxpbWl0cy5cbi8vIFwic3RvcmluZ1wiIHN1bW1vbmVySWRzXG5cbmNvbnN0IGRiID0ge1xuICBzaWxoaW06ICcyeHAyRUJ2aXE3VWJYU3I5RmhJRVltbTNNNE5sMGltSXNRcTFqbE9GN1BrLUU1OCcsXG4gIGx2YW5jZTogJ0QyLWh4V2Zab0M0bGd1TUVoMlptYUJSVTVhVzYwekt5UHBBdEdNclZTbTJwYUw0JyxcbiAgc2NpbnRtYXI6ICctYnE2WlVrR3AzSWtkTWowTEk3LVJBQ0FGS3dKRzRDUHdUbUt5SkVaRnozVTVPSScsXG4gIHNjaG1vbmdvOiAnWG9PMlphd043ZDVFR0RSbm9DdDRtN0lxazJFc2xKUFZNUFc0UFJ5c0RxZjNNT2snLFxuICBkaW1hbnR1czogJ1hCN2I5bEUxUWxHbUZTQ2ZteGF5R3ZZVzNHYVBSaHhWNlRieEVudUtrZlZpTmdBJyxcbiAgZmVydGlnMTE6ICc5MVBUcEc5SmFGRjc5Z2pOZG1scC12OHRUUkNNVjVNYVpoaktPMWZOVUF0bXg1SScsXG4gIGhvcm55Y29wdGVyOiAnSnpHVWtTblY3dFBRWkhqNFNUdFlEVUZaUlRGeXFXY2YxMmRyZEZPRWJoNXU0ancnLFxuICBnZW5lcmFsbXVoOiAnemN1OFZkUndmZlZteGl0RTQ2Y3lacU1FLXlvbVN2dW5IWkJlWk9LRnc1LUtiOVEnLFxuICBtNHBsM2cwZDogJ0NKUTdqOVdfdGRNWVZqS1QzZjR2T0R4VHU0Qm1ONnowVkExVllNVGtCb2xnZHd2c3dTUDdtVFJTSkEnLFxuICBndWNjaXNjcmlwdGVyOiAnSTJrZlFTT2VIcDBreFB5eTRWNFZwaDZRUXRYZVRJX3BLM1R3M0hmOFZHS1FHbDQnLFxuICBrZWVwMHV0OiAnMEp5TXR4UUVwM09kN2Q0d3c2VHZLSU5vRk1HWkdqYVRPSWR1MG5vTGlCUmZyRTgnLFxuICBhZG1pcmFsYWxwYWthOiAnVGxCUmx4RzN0eDVueV9weHJIc1JLNlRqR29sQU9CTUtUQUlRaUZSVTU1dkhGRlknLFxuICBrcm9rb2VmZW5kaTogJ1FWdnpfdFdmMGFySmstc2lmLXJMSHpjemEtN291OVRFNHRjWkVaY3FmeVVSS1A4JyxcbiAgZXNjYXBlczogJzhXU2R3eS1aa2dTdHJodU9WQi1nb0ZrTVJRZ0lSZ0hKS2dVV3g5UGFjRVBJMVpBJyxcbiAgbHVtcGlkdW1waWR1OiAnUUR2MTM0RUZVZjdKVzZaZnRGbUJIbjBmTXA4WFc2YWNPNGFNcjNZM2oyRkVKWVUnLFxuICBjYXJ0aG91cjogJ0czSzBqMGtBQWdlZHA2OTJNTUJqbV8wQzRqalRyWmVOUDV2NE90VDdJMjB3S0RzJyxcbiAgc3R1cmxlbm5hcmU6ICcwUW5yMVFtazRyU0JaQnRNUU1LdE00RXNpS0VqQ1daelZDXzlBck5tUmZTa2RGOHQnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3VtbW9uZXJJZEJ5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSkge1xuICByZXR1cm4gZGJbc3VtbW9uZXJOYW1lLnRvTG93ZXJDYXNlKCldO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgc29ydEFsbFJhbmtzIGZyb20gJy4vbGFkZGVyJztcblxuc29ydEFsbFJhbmtzKFtcbiAgJ1NpbGhpbScsXG4gICdMVmFuY2UnLFxuICAnU2NpbnRtYXInLFxuICAnU2NobW9uZ28nLFxuICAnRGltYW50dXMnLFxuICAnRmVydGlnMTEnLFxuICAnSG9ybnljb3B0ZXInLFxuICAnR2VuZXJhbE11aCcsXG4gICdNNHBsM2cwZCcsXG4gICdHVUNDSVNDUklQVEVSJyxcbiAgJ0tlZXAwdXQnLFxuICAnQWRtaXJhbEFscGFrYScsXG4gICdLcm9rb0VmZW5kaScsXG4gICdFc2NhcGVzJyxcbiAgJ0x1bXBpRHVtcGlEdScsXG4gICdDYXJ0aG91cicsXG4gICdTdHVybGVubmFyZScsXG5dKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
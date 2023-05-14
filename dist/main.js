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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blue: #184f77;\n  --light-blue: #178bad;\n  --dark-blue: #0e2d44;\n  --dark-yellow: #ffda58;\n  --light-yellow: #fffbd9;\n  --purple: rgb(57, 1, 57);\n\n  font-family: 'Nunito', sans-serif;\n  color: white;\n  font-size: 20px;\n}\n\nbody {\n  background: linear-gradient(var(--dark-blue), var(--purple));\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nimg {\n  width: 75px;\n  border-radius: 100px;\n  margin: 5px;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 125px 1fr 50px;\n  grid-template-areas:\n    'header'\n    'content'\n    'footer';\n  height: 100vh;\n  justify-items: center;\n}\n.header {\n  grid-area: header;\n  align-self: center;\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.content {\n  text-align: center;\n  grid-area: content;\n}\n.footer {\n  grid-area: footer;\n  font-size: 25px;\n}\n\n.card {\n  display: grid;\n  grid-template-areas:\n    'ranking icon ign '\n    'ranking icon rank ';\n  grid-template-columns: 1fr 2fr 3fr;\n  grid-template-rows: 3fr 2fr;\n\n  background: linear-gradient(var(--dark-blue), var(--blue)) padding-box,\n    linear-gradient(45deg, var(--dark-yellow), var(--light-yellow)) border-box;\n  border: 2px solid transparent;\n  border-radius: 20px;\n\n  margin: 10px;\n  align-items: center;\n  justify-items: center;\n}\n.ranking {\n  grid-area: ranking;\n  font-size: 50px;\n}\n.icon {\n  grid-area: icon;\n}\n.ign {\n  grid-area: ign;\n  font-weight: bold;\n  font-size: 30px;\n  margin-right: 10px;\n  align-self: flex-end;\n}\n.rank {\n  grid-area: rank;\n  align-self: flex-start;\n}\n\n.unranked {\n  margin: 30px;\n}\n\nh1 {\n  background: linear-gradient(\n    to right,\n    var(--dark-yellow),\n    var(--light-yellow)\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nh5 {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: var(--light-blue);\n}\n\n/* for loading spinner */\n.loader {\n  width: 48px;\n  height: 48px;\n  border: 5px solid black;\n  border-bottom-color: var(--dark-yellow);\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 0.5s linear infinite;\n  margin: 20px;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,oBAAoB;EACpB,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;;EAExB,iCAAiC;EACjC,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,4DAA4D;AAC9D;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC;;;YAGU;EACV,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb;;wBAEsB;EACtB,kCAAkC;EAClC,2BAA2B;;EAE3B;8EAC4E;EAC5E,6BAA6B;EAC7B,mBAAmB;;EAEnB,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;;;;GAIC;EACD,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA,wBAAwB;AACxB;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,uCAAuC;EACvC,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;EACtB,wCAAwC;EACxC,YAAY;AACd;AACA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');\n\n:root {\n  --blue: #184f77;\n  --light-blue: #178bad;\n  --dark-blue: #0e2d44;\n  --dark-yellow: #ffda58;\n  --light-yellow: #fffbd9;\n  --purple: rgb(57, 1, 57);\n\n  font-family: 'Nunito', sans-serif;\n  color: white;\n  font-size: 20px;\n}\n\nbody {\n  background: linear-gradient(var(--dark-blue), var(--purple));\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nimg {\n  width: 75px;\n  border-radius: 100px;\n  margin: 5px;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 125px 1fr 50px;\n  grid-template-areas:\n    'header'\n    'content'\n    'footer';\n  height: 100vh;\n  justify-items: center;\n}\n.header {\n  grid-area: header;\n  align-self: center;\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.content {\n  text-align: center;\n  grid-area: content;\n}\n.footer {\n  grid-area: footer;\n  font-size: 25px;\n}\n\n.card {\n  display: grid;\n  grid-template-areas:\n    'ranking icon ign '\n    'ranking icon rank ';\n  grid-template-columns: 1fr 2fr 3fr;\n  grid-template-rows: 3fr 2fr;\n\n  background: linear-gradient(var(--dark-blue), var(--blue)) padding-box,\n    linear-gradient(45deg, var(--dark-yellow), var(--light-yellow)) border-box;\n  border: 2px solid transparent;\n  border-radius: 20px;\n\n  margin: 10px;\n  align-items: center;\n  justify-items: center;\n}\n.ranking {\n  grid-area: ranking;\n  font-size: 50px;\n}\n.icon {\n  grid-area: icon;\n}\n.ign {\n  grid-area: ign;\n  font-weight: bold;\n  font-size: 30px;\n  margin-right: 10px;\n  align-self: flex-end;\n}\n.rank {\n  grid-area: rank;\n  align-self: flex-start;\n}\n\n.unranked {\n  margin: 30px;\n}\n\nh1 {\n  background: linear-gradient(\n    to right,\n    var(--dark-yellow),\n    var(--light-yellow)\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nh5 {\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: var(--light-blue);\n}\n\n/* for loading spinner */\n.loader {\n  width: 48px;\n  height: 48px;\n  border: 5px solid black;\n  border-bottom-color: var(--dark-yellow);\n  border-radius: 50%;\n  display: inline-block;\n  box-sizing: border-box;\n  animation: rotation 0.5s linear infinite;\n  margin: 20px;\n}\n@keyframes rotation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
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

function opggCreator(cardToAdd, text) {
  const card = document.createElement('a');
  card.setAttribute('href', `https://www.op.gg/summoners/euw/${text}`);

  card.innerHTML = text;
  card.classList.add('ign');
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
    opggCreator(card, player.summonerName);
    // rankElementCreator
    cardCreator('rank', `${player.tier} ${player.rank} ${player.lp}LP`, card);

    consoleOutput(player, ranking);
    ranking += 1;
  });
  // linear-gradient(var(#0e2d44), var(rgb(57, 1, 57)))
  // console.log(document.querySelector('body')).style.background = '#red';
  document.body.style.backgroundColor =
    'linear-gradient(#0e2d44, rgb(57, 1, 57)';
}

function displayUnrankedPlayers(unrankedPlayers) {
  let honorableMention = 'Unranked: ';
  unrankedPlayers.forEach((player) => {
    honorableMention += `${player.summonerName}, `;
  });
  honorableMention = `${honorableMention.slice(0, -2)}.`;
  const unrankedCard = document.querySelector('.unranked');
  // unrankedCard.innerHTML = honorableMention
  cardCreator('unranked', honorableMention, unrankedCard);
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
  primeburst74: 'AOgK0HH8bGNYUq_Fbkvss_JrrQIN5aqNvwW4Tz7MO3pVdHA',
  keep0ut: '0JyMtxQEp3Od7d4ww6TvKINoFMGZGjaTOIdu0noLiBRfrE8',
  admiralalpaka: 'TlBRlxG3tx5ny_pxrHsRK6TjGolAOBMKTAIQiFRU55vHFFY',
  krokoefendi: 'QVvz_tWf0arJk-sif-rLHzcza-7ou9TE4tcZEZcqfyURKP8',
  escapes: '8WSdwy-ZkgStrhuOVB-goFkMRQgIRgHJKgUWx9PacEPI1ZA',
  lumpidumpidu: 'QDv134EFUf7JW6ZftFmBHn0fMp8XW6acO4aMr3Y3j2FEJYU',
  carthour: 'G3K0j0kAAgedp692MMBjm_0C4jjTrZeNP5v4OtT7I20wKDs',
  sturlennare: '0Qnr1Qmk4rSBZBtMQMKtM4EsiKEjCWZzVC_9ArNmRfSkdF8t',
  zul: 'q7VXJemUzb_ockkIyFKei7ROUNBtuStnAJmDSN-g8U34aJ3X',
  imxventus: 'yeKqF2QF3k0EXwJFjdCot937iV3fiGc2fItVAuT52TaM-ss',
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
  primeburst74: '4568',
  keep0ut: '915',
  admiralalpaka: '4068',
  krokoefendi: '5765',
  escapes: '5626',
  lumpidumpidu: '23',
  carthour: '22',
  sturlennare: '7',
  zul: '5256',
  imxventus: '5688',
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
  'Primeburst74',
  'Keep0ut',
  'AdmiralAlpaka',
  'KrokoEfendi',
  'Escapes',
  'LumpiDumpiDu',
  'Carthour',
  'Sturlennare',
  'Zul',
  'imxVentus',
];

(0,_ladder__WEBPACK_IMPORTED_MODULE_1__["default"])(summoners);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL2ZldGNoLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMva2V5LmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvbGFkZGVyLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL291dHB1dC5qcyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyLy4vc3JjL3JhbmsuanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci8uL3NyYy9zdW1tb25lcklkLmpzIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sZWFndWUtbGFkZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZ3VlLWxhZGRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2xlYWd1ZS1sYWRkZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJsdWU6ICMxODRmNzc7XFxuICAtLWxpZ2h0LWJsdWU6ICMxNzhiYWQ7XFxuICAtLWRhcmstYmx1ZTogIzBlMmQ0NDtcXG4gIC0tZGFyay15ZWxsb3c6ICNmZmRhNTg7XFxuICAtLWxpZ2h0LXllbGxvdzogI2ZmZmJkOTtcXG4gIC0tcHVycGxlOiByZ2IoNTcsIDEsIDU3KTtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tZGFyay1ibHVlKSwgdmFyKC0tcHVycGxlKSk7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogNzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTI1cHggMWZyIDUwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnaGVhZGVyJ1xcbiAgICAnY29udGVudCdcXG4gICAgJ2Zvb3Rlcic7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXG59XFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdyYW5raW5nIGljb24gaWduICdcXG4gICAgJ3JhbmtpbmcgaWNvbiByYW5rICc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMmZyO1xcblxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWRhcmstYmx1ZSksIHZhcigtLWJsdWUpKSBwYWRkaW5nLWJveCxcXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1kYXJrLXllbGxvdyksIHZhcigtLWxpZ2h0LXllbGxvdykpIGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxuICBtYXJnaW46IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4ucmFua2luZyB7XFxuICBncmlkLWFyZWE6IHJhbmtpbmc7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcbi5pY29uIHtcXG4gIGdyaWQtYXJlYTogaWNvbjtcXG59XFxuLmlnbiB7XFxuICBncmlkLWFyZWE6IGlnbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcbi5yYW5rIHtcXG4gIGdyaWQtYXJlYTogcmFuaztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi51bnJhbmtlZCB7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcblxcbmgxIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHZhcigtLWRhcmsteWVsbG93KSxcXG4gICAgdmFyKC0tbGlnaHQteWVsbG93KVxcbiAgKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5oNSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG59XFxuXFxuLyogZm9yIGxvYWRpbmcgc3Bpbm5lciAqL1xcbi5sb2FkZXIge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWRhcmsteWVsbG93KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBhbmltYXRpb246IHJvdGF0aW9uIDAuNXMgbGluZWFyIGluZmluaXRlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsd0JBQXdCOztFQUV4QixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0REFBNEQ7QUFDOUQ7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEM7OztZQUdVO0VBQ1YsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiOzt3QkFFc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLDJCQUEyQjs7RUFFM0I7OEVBQzRFO0VBQzVFLDZCQUE2QjtFQUM3QixtQkFBbUI7O0VBRW5CLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFOzs7O0dBSUM7RUFDRCw2QkFBNkI7RUFDN0Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLWJsdWU6ICMxODRmNzc7XFxuICAtLWxpZ2h0LWJsdWU6ICMxNzhiYWQ7XFxuICAtLWRhcmstYmx1ZTogIzBlMmQ0NDtcXG4gIC0tZGFyay15ZWxsb3c6ICNmZmRhNTg7XFxuICAtLWxpZ2h0LXllbGxvdzogI2ZmZmJkOTtcXG4gIC0tcHVycGxlOiByZ2IoNTcsIDEsIDU3KTtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tZGFyay1ibHVlKSwgdmFyKC0tcHVycGxlKSk7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogNzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTI1cHggMWZyIDUwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnaGVhZGVyJ1xcbiAgICAnY29udGVudCdcXG4gICAgJ2Zvb3Rlcic7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogY29udGVudDtcXG59XFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdyYW5raW5nIGljb24gaWduICdcXG4gICAgJ3JhbmtpbmcgaWNvbiByYW5rICc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMmZyO1xcblxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWRhcmstYmx1ZSksIHZhcigtLWJsdWUpKSBwYWRkaW5nLWJveCxcXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1kYXJrLXllbGxvdyksIHZhcigtLWxpZ2h0LXllbGxvdykpIGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxuICBtYXJnaW46IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4ucmFua2luZyB7XFxuICBncmlkLWFyZWE6IHJhbmtpbmc7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcbi5pY29uIHtcXG4gIGdyaWQtYXJlYTogaWNvbjtcXG59XFxuLmlnbiB7XFxuICBncmlkLWFyZWE6IGlnbjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcbi5yYW5rIHtcXG4gIGdyaWQtYXJlYTogcmFuaztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi51bnJhbmtlZCB7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcblxcbmgxIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgIHZhcigtLWRhcmsteWVsbG93KSxcXG4gICAgdmFyKC0tbGlnaHQteWVsbG93KVxcbiAgKTtcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5oNSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG59XFxuXFxuLyogZm9yIGxvYWRpbmcgc3Bpbm5lciAqL1xcbi5sb2FkZXIge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWRhcmsteWVsbG93KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBhbmltYXRpb246IHJvdGF0aW9uIDAuNXMgbGluZWFyIGluZmluaXRlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnZXRSaW90QVBJS2V5IGZyb20gJy4va2V5JztcblxuLy8gZGV2ZWxvcG1lbnQga2V5cyBleHBpcmUgd2l0aGluIDI0IGhvdXJzLlxuY29uc3QgREVWX1JJT1RfS0VZID0gZ2V0UmlvdEFQSUtleSgpO1xuXG4vLyBnZXQgZ2VuZXJhbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3VtbW9uZXIgKHByb2ZpbGVJY29uSWQsIFBVVUlELCBzdW1tb25lcklkLCBsZXZlbClcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLnJpb3RnYW1lcy5jb20vYXBpcyNzdW1tb25lci12NC9HRVRfZ2V0QnlTdW1tb25lck5hbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbmZvQnlTdW1tb25lck5hbWUoc3VtbW9uZXJOYW1lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2V1dzEuYXBpLnJpb3RnYW1lcy5jb20vbG9sL3N1bW1vbmVyL3Y0L3N1bW1vbmVycy9ieS1uYW1lLyR7c3VtbW9uZXJOYW1lfT9hcGlfa2V5PSR7REVWX1JJT1RfS0VZfWBcbiAgICApO1xuICAgIGNvbnN0IGdlbmVyYWxTdW1tb25lckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGdlbmVyYWxTdW1tb25lckRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYENvdWxkIG5vdCBmaW5kICR7c3VtbW9uZXJOYW1lfSBieSBzdW1tb25lciBuYW1lLmApO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG4vLyB1c2Ugc3VtbW9uZXJJZCB0byBnZXQgcmFua2VkIGRhdGEgYWJvdXQgdGhlIGdpdmVuIHN1bW1vbmVyXG4vLyBodHRwczovL2RldmVsb3Blci5yaW90Z2FtZXMuY29tL2FwaXMjbGVhZ3VlLXY0L0dFVF9nZXRMZWFndWVFbnRyaWVzRm9yU3VtbW9uZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSYW5rZWRJbmZvQnlTdW1tb25lcklkKHN1bW1vbmVySWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vZXV3MS5hcGkucmlvdGdhbWVzLmNvbS9sb2wvbGVhZ3VlL3Y0L2VudHJpZXMvYnktc3VtbW9uZXIvJHtzdW1tb25lcklkfT9hcGlfa2V5PSR7REVWX1JJT1RfS0VZfWBcbiAgICApO1xuICAgIGNvbnN0IHN1bW1vbmVyUmFua2VkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gc3VtbW9uZXJSYW5rZWREYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYENvdWxkIG5vdCBmaW5kIHN1bW1vbmVyIHJhbmtlZCBkYXRhIGJ5IHN1bW1vbmVySWQ6ICR7c3VtbW9uZXJJZH1gXG4gICAgKTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJpb3RBUElLZXkoKSB7XG4gIHJldHVybiAnUkdBUEktYjY0MmZkOTUtZmI3Ny00Yzk4LWEyNTEtZjgxY2JlZmNjNzRlJztcbn1cbiIsImltcG9ydCBkaXNwbGF5TG9hZGluZ0FuaW1hdGlvbiBmcm9tICcuL2xvYWRpbmcnO1xuaW1wb3J0IHsgZGlzcGxheUxhZGRlciwgZGlzcGxheVVucmFua2VkUGxheWVycyB9IGZyb20gJy4vb3V0cHV0JztcbmltcG9ydCBnZXRQbGF5ZXJSYW5rcyBmcm9tICcuL3JhbmsnO1xuXG5jb25zdCBUSUVSX1ZBTFVFID0ge1xuICBJUk9OOiAxLFxuICBCUk9OWkU6IDIsXG4gIFNJTFZFUjogMyxcbiAgR09MRDogNCxcbiAgUExBVElOVU06IDUsXG4gIERJQU1PTkQ6IDYsXG4gIE1BU1RFUjogNyxcbiAgR1JBTkRNQVNURVI6IDgsXG4gIENIQUxMRU5HRVI6IDksXG59O1xuY29uc3QgUkFOS19WQUxVRSA9IHtcbiAgSVY6IDEsXG4gIElJSTogMixcbiAgSUk6IDMsXG4gIEk6IDQsXG59O1xuXG4vLyBzb3J0aW5nIHRoZSBwbGF5ZXJzIGJ5IHNvbG9xIHJhbmtcbmZ1bmN0aW9uIHNvcnRSYW5rZWRQbGF5ZXJzKHJhbmtlZFBsYXllcnMpIHtcbiAgY29uc29sZS5sb2coJ3JhbmtlZCBsaXN0OiAnLCByYW5rZWRQbGF5ZXJzKTtcblxuICByYW5rZWRQbGF5ZXJzLnNvcnQoKHBsYXllckEsIHBsYXllckIpID0+IHtcbiAgICAvLyBjb21wYXJlIHRpZXIgcmFuayBmaXJzdFxuICAgIGlmIChUSUVSX1ZBTFVFW3BsYXllckEudGllcl0gPiBUSUVSX1ZBTFVFW3BsYXllckIudGllcl0pIHJldHVybiAtMTtcbiAgICBpZiAoVElFUl9WQUxVRVtwbGF5ZXJBLnRpZXJdIDwgVElFUl9WQUxVRVtwbGF5ZXJCLnRpZXJdKSByZXR1cm4gMTtcblxuICAgIC8vIGlmIHRpZXIgaXMgdGhlIHNhbWUsIGNoZWNrIGZvciBkaXZpc2lvblxuICAgIGlmIChSQU5LX1ZBTFVFW3BsYXllckEucmFua10gPiBSQU5LX1ZBTFVFW3BsYXllckIucmFua10pIHJldHVybiAtMTtcbiAgICBpZiAoUkFOS19WQUxVRVtwbGF5ZXJBLnJhbmtdIDwgUkFOS19WQUxVRVtwbGF5ZXJCLnJhbmtdKSByZXR1cm4gMTtcblxuICAgIC8vIGlmIGRpdmlzaW9uIGlzIHRoZSBzYW1lLCBjaGVjayBmb3IgTFBcbiAgICBpZiAocGxheWVyQS5scCA+IHBsYXllckIubHApIHJldHVybiAtMTtcbiAgICBpZiAocGxheWVyQS5scCA8IHBsYXllckIubHApIHJldHVybiAxO1xuXG4gICAgLy8gaWYgTFAgaXMgdGhlIHNhbWUgYXMgd2VsbCwgZG9uJ3QgY2hhbmdlIHNvcnRpbmcgb3JkZXJcbiAgICByZXR1cm4gMDtcbiAgfSk7XG4gIGRpc3BsYXlMYWRkZXIocmFua2VkUGxheWVycyk7XG5cbiAgZGlzcGxheUxvYWRpbmdBbmltYXRpb24oZmFsc2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzb3J0QWxsUmFua3MocGxheWVyQXJyYXkpIHtcbiAgZGlzcGxheUxvYWRpbmdBbmltYXRpb24odHJ1ZSk7XG5cbiAgY29uc3QgcGxheWVyUmFua3MgPSBhd2FpdCBnZXRQbGF5ZXJSYW5rcyhwbGF5ZXJBcnJheSk7XG4gIC8vIG5vdyB3ZSBuZWVkIHRvIHNvcnQgcmFua2VkUGxheWVyc1xuICBjb25zdCByYW5rZWRQbGF5ZXJzID0gcGxheWVyUmFua3MucGxheWVyc1dpdGhTb2xvcVJhbmtlZERhdGE7XG4gIGNvbnN0IHVucmFua2VkUGxheWVycyA9IHBsYXllclJhbmtzLnVucmFua2VkUGxheWVyRGF0YTtcblxuICBpZiAocmFua2VkUGxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgc29ydFJhbmtlZFBsYXllcnMocmFua2VkUGxheWVycyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ05vIHJhbmtlZCBwbGF5ZXJzIGZvdW5kLicpO1xuICB9XG5cbiAgZGlzcGxheVVucmFua2VkUGxheWVycyh1bnJhbmtlZFBsYXllcnMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUxvYWRpbmdBbmltYXRpb24oc3RhdGUpIHtcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKTtcblxuICBpZiAoc3RhdGUpIHtcbiAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnbG9hZGVyJyk7XG4gIH0gZWxzZSB7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlcicpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRJY29uSWRCeVN1bW1vbmVyTmFtZSB9IGZyb20gJy4vc3VtbW9uZXJJZCc7XG5cbmNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZGNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBjb25zb2xlT3V0cHV0KHBsYXllciwgcmFua2luZykge1xuICBjb25zb2xlLmxvZyhcbiAgICBgJHtyYW5raW5nfS4gYCxcbiAgICBgJHtwbGF5ZXIuc3VtbW9uZXJOYW1lfSB8YCxcbiAgICBwbGF5ZXIudGllcixcbiAgICBwbGF5ZXIucmFuayxcbiAgICBgJHtwbGF5ZXIubHB9TFBgLFxuICAgIGAtIGF0ICR7cGxheWVyLndpbnJhdGV9JSB3cmAsXG4gICAgYCgke3BsYXllci53aW5zICsgcGxheWVyLmxvc3Nlc30gZ2FtZXMpYFxuICApO1xufVxuXG5mdW5jdGlvbiBjYXJkQ3JlYXRvcihjbGFzc1RvQWRkLCB0ZXh0ID0gJycsIGNhcmRUb0FkZCA9IGNhcmRDb250YWluZXIpIHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmlubmVySFRNTCA9IHRleHQ7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZChjbGFzc1RvQWRkKTtcbiAgY2FyZFRvQWRkLmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBpY29uQ3JlYXRvcihjYXJkVG9BZGQsIHN1bW1vbmVyTmFtZSkge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGljb25JZCA9IGdldEljb25JZEJ5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZS5yZXBsYWNlQWxsKCcgJywgJycpKTtcbiAgY29uc29sZS5sb2coaWNvbklkKTtcbiAgLy8gY2FyZC5zcmMgPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzExLjE0LjEvaW1nL3Byb2ZpbGVpY29uLyR7aWNvbklkfS5wbmdgO1xuICBjYXJkLnNyYyA9IGBodHRwczovL2RkcmFnb24td2VicC5sb2xtYXRoLm5ldC9sYXRlc3QvaW1nL3Byb2ZpbGVpY29uLyR7aWNvbklkfS53ZWJwYDtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gIGNhcmRUb0FkZC5hcHBlbmRDaGlsZChjYXJkKTtcbn1cblxuZnVuY3Rpb24gb3BnZ0NyZWF0b3IoY2FyZFRvQWRkLCB0ZXh0KSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNhcmQuc2V0QXR0cmlidXRlKCdocmVmJywgYGh0dHBzOi8vd3d3Lm9wLmdnL3N1bW1vbmVycy9ldXcvJHt0ZXh0fWApO1xuXG4gIGNhcmQuaW5uZXJIVE1MID0gdGV4dDtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdpZ24nKTtcbiAgY2FyZFRvQWRkLmFwcGVuZENoaWxkKGNhcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxhZGRlcihyYW5rZWRQbGF5ZXJzKSB7XG4gIGxldCByYW5raW5nID0gMTtcbiAgcmFua2VkUGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBjYXJkID0gY2FyZENyZWF0b3IoJ2NhcmQnKTtcbiAgICAvLyByYW5raW5nRWxlbWVudENyZWF0b3JcbiAgICBjYXJkQ3JlYXRvcigncmFua2luZycsIHJhbmtpbmcsIGNhcmQpO1xuICAgIC8vIGljb25FbGVtZW50Q3JlYXRvclxuICAgIGljb25DcmVhdG9yKGNhcmQsIHBsYXllci5zdW1tb25lck5hbWUpO1xuICAgIC8vIGlnbkVsZW1lbnRDcmVhdG9yXG4gICAgb3BnZ0NyZWF0b3IoY2FyZCwgcGxheWVyLnN1bW1vbmVyTmFtZSk7XG4gICAgLy8gcmFua0VsZW1lbnRDcmVhdG9yXG4gICAgY2FyZENyZWF0b3IoJ3JhbmsnLCBgJHtwbGF5ZXIudGllcn0gJHtwbGF5ZXIucmFua30gJHtwbGF5ZXIubHB9TFBgLCBjYXJkKTtcblxuICAgIGNvbnNvbGVPdXRwdXQocGxheWVyLCByYW5raW5nKTtcbiAgICByYW5raW5nICs9IDE7XG4gIH0pO1xuICAvLyBsaW5lYXItZ3JhZGllbnQodmFyKCMwZTJkNDQpLCB2YXIocmdiKDU3LCAxLCA1NykpKVxuICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpLnN0eWxlLmJhY2tncm91bmQgPSAnI3JlZCc7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICAnbGluZWFyLWdyYWRpZW50KCMwZTJkNDQsIHJnYig1NywgMSwgNTcpJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlVbnJhbmtlZFBsYXllcnModW5yYW5rZWRQbGF5ZXJzKSB7XG4gIGxldCBob25vcmFibGVNZW50aW9uID0gJ1VucmFua2VkOiAnO1xuICB1bnJhbmtlZFBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgaG9ub3JhYmxlTWVudGlvbiArPSBgJHtwbGF5ZXIuc3VtbW9uZXJOYW1lfSwgYDtcbiAgfSk7XG4gIGhvbm9yYWJsZU1lbnRpb24gPSBgJHtob25vcmFibGVNZW50aW9uLnNsaWNlKDAsIC0yKX0uYDtcbiAgY29uc3QgdW5yYW5rZWRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVucmFua2VkJyk7XG4gIC8vIHVucmFua2VkQ2FyZC5pbm5lckhUTUwgPSBob25vcmFibGVNZW50aW9uXG4gIGNhcmRDcmVhdG9yKCd1bnJhbmtlZCcsIGhvbm9yYWJsZU1lbnRpb24sIHVucmFua2VkQ2FyZCk7XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5rZWRJbmZvQnlTdW1tb25lcklkIH0gZnJvbSAnLi9mZXRjaCc7XG5pbXBvcnQgZ2V0U3VtbW9uZXJJZEJ5U3VtbW9uZXJOYW1lIGZyb20gJy4vc3VtbW9uZXJJZCc7XG5cbi8vIGxvZ2dpbmcgdGhlIHN1bW1vbmVyIHJhbmtcbmFzeW5jIGZ1bmN0aW9uIGZpbHRlclNvbG9xUmFua0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSkge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHN1bW1vbmVyID0gYXdhaXQgZ2V0SW5mb0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSk7ICAvLyBzdW1tb25lci5pZCBuZWVkcyB0byBiZSB1c2VkIGFzIGEgcGFyYW1ldGVyIGluIHJlc3BvbnNlXG4gICAgY29uc3Qgc3VtbW9uZXJJZCA9IGdldFN1bW1vbmVySWRCeVN1bW1vbmVyTmFtZShzdW1tb25lck5hbWUpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmFua2VkSW5mb0J5U3VtbW9uZXJJZChzdW1tb25lcklkKTtcblxuICAgIC8vIG9ubHkgZ2V0IHNvbG9xLCByZW1vdmUgZmxleFxuICAgIGNvbnN0IHNvbG9xUmFua0RhdGEgPSByZXNwb25zZS5maWx0ZXIoXG4gICAgICAocmFua1R5cGUpID0+IHJhbmtUeXBlLnF1ZXVlVHlwZSA9PT0gJ1JBTktFRF9TT0xPXzV4NSdcbiAgICApO1xuICAgIGNvbnN0IHNSRCA9IHNvbG9xUmFua0RhdGFbMF07XG5cbiAgICBpZiAoc1JEICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHdpbnJhdGVVbnJvdW5kZWQgPSAoc1JELndpbnMgLyAoc1JELndpbnMgKyBzUkQubG9zc2VzKSkgKiAxMDA7XG4gICAgICBjb25zdCB3aW5yYXRlID0gd2lucmF0ZVVucm91bmRlZC50b0ZpeGVkKDEpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdW1tb25lck5hbWU6IHNSRC5zdW1tb25lck5hbWUsXG4gICAgICAgIHRpZXI6IHNSRC50aWVyLFxuICAgICAgICByYW5rOiBzUkQucmFuayxcbiAgICAgICAgbHA6IHNSRC5sZWFndWVQb2ludHMsXG4gICAgICAgIHdpbnM6IHNSRC53aW5zLFxuICAgICAgICBsb3NzZXM6IHNSRC5sb3NzZXMsXG4gICAgICAgIHdpbnJhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBzdW1tb25lck5hbWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8vIHRha2VzIGluIGFuIGFycmF5IG9mIHN1bW1vbmVyIG5hbWVzIGFuZCBkaXNwbGF5cyB0aGVpciByYW5rc1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWVyUmFua3Moc3VtbW9uZXJBcnJheSkge1xuICBjb25zdCBwbGF5ZXJzV2l0aFNvbG9xUmFua2VkRGF0YSA9IFtdO1xuICBjb25zdCB1bnJhbmtlZFBsYXllckRhdGEgPSBbXTtcblxuICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBzdW1tb25lckFycmF5Lm1hcChhc3luYyAoc3VtbW9uZXIpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBsYXllciA9IGF3YWl0IGZpbHRlclNvbG9xUmFua0J5U3VtbW9uZXJOYW1lKHN1bW1vbmVyKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBzdW1tb25lciBpcyB1bnJhbmtlZFxuICAgICAgICBpZiAocGxheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtzdW1tb25lcn06IHByb2JhYmx5IEFQSSBlcnJvcmApO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllci50aWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtwbGF5ZXIuc3VtbW9uZXJOYW1lfTogJHtwbGF5ZXIudGllcn0gJHtwbGF5ZXIucmFua30gKCR7cGxheWVyLmxwfSBMUCkgfCAke3BsYXllci53aW5zfVcsICR7cGxheWVyLmxvc3Nlc31MID0gJHtwbGF5ZXIud2lucmF0ZX0lIFdSIGApO1xuICAgICAgICAgIHBsYXllcnNXaXRoU29sb3FSYW5rZWREYXRhLnB1c2gocGxheWVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIuc3VtbW9uZXJOYW1lfSBpcyBjdXJyZW50bHkgVW5yYW5rZWQuYCk7XG4gICAgICAgICAgdW5yYW5rZWRQbGF5ZXJEYXRhLnB1c2gocGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgU3VtbW9uZXI6ICR7c3VtbW9uZXJ9IHxgLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbiAgcmV0dXJuIHsgcGxheWVyc1dpdGhTb2xvcVJhbmtlZERhdGEsIHVucmFua2VkUGxheWVyRGF0YSB9O1xufVxuIiwiLy8gdGhpcyBmaWxlIGlzIG9ubHkgdGhlcmUgdG8gbGltaXQgdGhlIG51bWJlciBvZiBhcGkgY2FsbHMgbmVlZGVkIHRvIGdldCBhcm91bmQgc29tZSByYXRlIGxpbWl0cy5cbi8vIFwic3RvcmluZ1wiIHN1bW1vbmVySWRzXG5cbmNvbnN0IHN1bW1vbmVySWQgPSB7XG4gIHNpbGhpbTogJzJ4cDJFQnZpcTdVYlhTcjlGaElFWW1tM000TmwwaW1Jc1FxMWpsT0Y3UGstRTU4JyxcbiAgbHZhbmNlOiAnRDItaHhXZlpvQzRsZ3VNRWgyWm1hQlJVNWFXNjB6S3lQcEF0R01yVlNtMnBhTDQnLFxuICBzY2ludG1hcjogJy1icTZaVWtHcDNJa2RNajBMSTctUkFDQUZLd0pHNENQd1RtS3lKRVpGejNVNU9JJyxcbiAgc2NobW9uZ286ICdYb08yWmF3TjdkNUVHRFJub0N0NG03SXFrMkVzbEpQVk1QVzRQUnlzRHFmM01PaycsXG4gIGRpbWFudHVzOiAnWEI3YjlsRTFRbEdtRlNDZm14YXlHdllXM0dhUFJoeFY2VGJ4RW51S2tmVmlOZ0EnLFxuICBmZXJ0aWcxMTogJzkxUFRwRzlKYUZGNzlnak5kbWxwLXY4dFRSQ01WNU1hWmhqS08xZk5VQXRteDVJJyxcbiAgaG9ybnljb3B0ZXI6ICdKekdVa1NuVjd0UFFaSGo0U1R0WURVRlpSVEZ5cVdjZjEyZHJkRk9FYmg1dTRqdycsXG4gIGdlbmVyYWxtdWg6ICd6Y3U4VmRSd2ZmVm14aXRFNDZjeVpxTUUteW9tU3Z1bkhaQmVaT0tGdzUtS2I5UScsXG4gIG00cGwzZzBkOiAnQ0pRN2o5V190ZE1ZVmpLVDNmNHZPRHhUdTRCbU42ejBWQTFWWU1Ua0JvbGdkd3Zzd1NQN21UUlNKQScsXG4gIHByaW1lYnVyc3Q3NDogJ0FPZ0swSEg4YkdOWVVxX0Zia3Zzc19KcnJRSU41YXFOdndXNFR6N01PM3BWZEhBJyxcbiAga2VlcDB1dDogJzBKeU10eFFFcDNPZDdkNHd3NlR2S0lOb0ZNR1pHamFUT0lkdTBub0xpQlJmckU4JyxcbiAgYWRtaXJhbGFscGFrYTogJ1RsQlJseEczdHg1bnlfcHhySHNSSzZUakdvbEFPQk1LVEFJUWlGUlU1NXZIRkZZJyxcbiAga3Jva29lZmVuZGk6ICdRVnZ6X3RXZjBhckprLXNpZi1yTEh6Y3phLTdvdTlURTR0Y1pFWmNxZnlVUktQOCcsXG4gIGVzY2FwZXM6ICc4V1Nkd3ktWmtnU3RyaHVPVkItZ29Ga01SUWdJUmdISktnVVd4OVBhY0VQSTFaQScsXG4gIGx1bXBpZHVtcGlkdTogJ1FEdjEzNEVGVWY3Slc2WmZ0Rm1CSG4wZk1wOFhXNmFjTzRhTXIzWTNqMkZFSllVJyxcbiAgY2FydGhvdXI6ICdHM0swajBrQUFnZWRwNjkyTU1Cam1fMEM0ampUclplTlA1djRPdFQ3STIwd0tEcycsXG4gIHN0dXJsZW5uYXJlOiAnMFFucjFRbWs0clNCWkJ0TVFNS3RNNEVzaUtFakNXWnpWQ185QXJObVJmU2tkRjh0JyxcbiAgenVsOiAncTdWWEplbVV6Yl9vY2trSXlGS2VpN1JPVU5CdHVTdG5BSm1EU04tZzhVMzRhSjNYJyxcbiAgaW14dmVudHVzOiAneWVLcUYyUUYzazBFWHdKRmpkQ290OTM3aVYzZmlHYzJmSXRWQXVUNTJUYU0tc3MnLFxufTtcblxuY29uc3QgaWNvbklkID0ge1xuICBzaWxoaW06ICczMTg0JyxcbiAgbHZhbmNlOiAnNDk4MicsXG4gIHNjaW50bWFyOiAnOTE4JyxcbiAgc2NobW9uZ286ICc3NDUnLFxuICBkaW1hbnR1czogJzU0NycsXG4gIGZlcnRpZzExOiAnNTc2OCcsXG4gIGhvcm55Y29wdGVyOiAnNDE0OScsXG4gIGdlbmVyYWxtdWg6ICc1MDkxJyxcbiAgbTRwbDNnMGQ6ICc1NDU2JyxcbiAgcHJpbWVidXJzdDc0OiAnNDU2OCcsXG4gIGtlZXAwdXQ6ICc5MTUnLFxuICBhZG1pcmFsYWxwYWthOiAnNDA2OCcsXG4gIGtyb2tvZWZlbmRpOiAnNTc2NScsXG4gIGVzY2FwZXM6ICc1NjI2JyxcbiAgbHVtcGlkdW1waWR1OiAnMjMnLFxuICBjYXJ0aG91cjogJzIyJyxcbiAgc3R1cmxlbm5hcmU6ICc3JyxcbiAgenVsOiAnNTI1NicsXG4gIGlteHZlbnR1czogJzU2ODgnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3VtbW9uZXJJZEJ5U3VtbW9uZXJOYW1lKHN1bW1vbmVyTmFtZSkge1xuICByZXR1cm4gc3VtbW9uZXJJZFtzdW1tb25lck5hbWUudG9Mb3dlckNhc2UoKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJY29uSWRCeVN1bW1vbmVyTmFtZShzdW1tb25lck5hbWUpIHtcbiAgcmV0dXJuIGljb25JZFtzdW1tb25lck5hbWUudG9Mb3dlckNhc2UoKV07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBzb3J0QWxsUmFua3MgZnJvbSAnLi9sYWRkZXInO1xuXG5jb25zdCBzdW1tb25lcnMgPSBbXG4gICdTaWxoaW0nLFxuICAnTFZhbmNlJyxcbiAgJ1NjaW50bWFyJyxcbiAgJ1NjaG1vbmdvJyxcbiAgJ0RpbWFudHVzJyxcbiAgJ0ZlcnRpZzExJyxcbiAgJ0hvcm55Y29wdGVyJyxcbiAgJ0dlbmVyYWxNdWgnLFxuICAnTTRwbDNnMGQnLFxuICAnUHJpbWVidXJzdDc0JyxcbiAgJ0tlZXAwdXQnLFxuICAnQWRtaXJhbEFscGFrYScsXG4gICdLcm9rb0VmZW5kaScsXG4gICdFc2NhcGVzJyxcbiAgJ0x1bXBpRHVtcGlEdScsXG4gICdDYXJ0aG91cicsXG4gICdTdHVybGVubmFyZScsXG4gICdadWwnLFxuICAnaW14VmVudHVzJyxcbl07XG5cbnNvcnRBbGxSYW5rcyhzdW1tb25lcnMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
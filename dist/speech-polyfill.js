/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_src_SpeechRecognition__ = __webpack_require__(1);

if (Promise === undefined) {
    throw new Error('Promises are not supported in this browser. Use this polyfill: https://www.npmjs.com/package/es6-promise');
}
// polyfill mediaDevices.getUserMedia
if (!navigator.mediaDevices) navigator.mediaDevices = {};
navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || (function () {
    // returns a getUserMedia function
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    return function (constraints) {
        if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }
        return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
        });
    };
})();
// polyfill speechRecognition
(function (speechRecognition) {
    window.SpeechRecognition = window.SpeechRecognition || __WEBPACK_IMPORTED_MODULE_0__js_src_SpeechRecognition__["a" /* SpeechRecognition */];
})(window.SpeechRecognition || window.webkitSpeechRecognition);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_LanguageResolver__ = __webpack_require__(2);

// include the needed parts of the library. webpack will treeshake all unneeded stuff.
// import {  } from "microsoft-speech-browser-sdk/src/sdk/speech/Exports";
// import {  } from "microsoft-speech-browser-sdk/src/sdk/speech.browser/Exports";
var SpeechRecognition = (function () {
    function SpeechRecognition() {
        this.onaudiostart = null;
        this.onaudioend = null;
        this.onstart = null;
        this.onend = null;
        this.onerror = null;
        this.onnomatch = null;
        this.onresult = null;
        this.lang = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_LanguageResolver__["a" /* resolveLang */])(document.documentElement.lang || navigator.language);
        this.continuous = false;
        this.interimResults = false;
        this.maxAlternatives = 1;
        this.serviceURI = '';
    }
    SpeechRecognition.prototype.start = function () {
        throw new Error("Method not implemented.");
    };
    SpeechRecognition.prototype.stop = function () {
        throw new Error("Method not implemented.");
    };
    SpeechRecognition.prototype.abort = function () {
        throw new Error("Method not implemented.");
    };
    return SpeechRecognition;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolveLang; });
var supportedDefaults = {
    ar: 'ar-EG',
    ca: 'ca-ES',
    da: 'da-DK',
    de: 'de-DE',
    en: 'en-US',
    es: 'es-ES',
    fi: 'fi-FI',
    fr: 'fr-FR',
    hi: 'hi-IN',
    it: 'it-IT',
    ja: 'ja-JP',
    ko: 'ko-KR',
    nb: 'nb-NO',
    nl: 'nl-NL',
    pl: 'pl-PL',
    pt: 'pt-PT',
    ru: 'ru-RU',
    sv: 'sv-SE',
    zh: 'zh-CN'
};
var resolveLang = function (langHint) {
    return supportedDefaults[langHint] || langHint;
};


/***/ })
/******/ ]);
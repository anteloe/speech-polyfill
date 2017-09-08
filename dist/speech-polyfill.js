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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__ = __webpack_require__(21);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConnectionMessage__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__ConnectionMessage__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_2__ConnectionMessage__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ConnectionOpenResponse__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_3__ConnectionOpenResponse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Error__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__Error__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Events__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_5__Events__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__EventSource__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_6__EventSource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Guid__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_7__Guid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__IConnection__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_8__IConnection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__InMemoryStorage__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__List__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__PlatformEvent__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_11__PlatformEvent__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_11__PlatformEvent__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Promise__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_12__Promise__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_12__Promise__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Queue__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_13__Queue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__RawWebsocketMessage__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_14__RawWebsocketMessage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__RiffPcmEncoder__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_15__RiffPcmEncoder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Storage__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_16__Storage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Stream__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_17__Stream__["a"]; });




















/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArgumentNullError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InvalidOperationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ObjectDisposedError; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * The error that is thrown when an argument passed in is null.
 *
 * @export
 * @class ArgumentNullError
 * @extends {Error}
 */
var ArgumentNullError = (function (_super) {
    __extends(ArgumentNullError, _super);
    /**
     * Creates an instance of ArgumentNullError.
     *
     * @param {string} argumentName Name of the argument that is null
     *
     * @memberOf ArgumentNullError
     */
    function ArgumentNullError(argumentName) {
        var _this = _super.call(this, argumentName) || this;
        _this.name = "ArgumentNull";
        _this.message = argumentName;
        return _this;
    }
    return ArgumentNullError;
}(Error));

/**
 * The error that is thrown when an invalid operation is performed in the code.
 *
 * @export
 * @class InvalidOperationError
 * @extends {Error}
 */
// tslint:disable-next-line:max-classes-per-file
var InvalidOperationError = (function (_super) {
    __extends(InvalidOperationError, _super);
    /**
     * Creates an instance of InvalidOperationError.
     *
     * @param {string} error The error
     *
     * @memberOf InvalidOperationError
     */
    function InvalidOperationError(error) {
        var _this = _super.call(this, error) || this;
        _this.name = "InvalidOperation";
        _this.message = error;
        return _this;
    }
    return InvalidOperationError;
}(Error));

/**
 * The error that is thrown when an object is disposed.
 *
 * @export
 * @class ObjectDisposedError
 * @extends {Error}
 */
// tslint:disable-next-line:max-classes-per-file
var ObjectDisposedError = (function (_super) {
    __extends(ObjectDisposedError, _super);
    /**
     * Creates an instance of ObjectDisposedError.
     *
     * @param {string} objectName The object that is disposed
     * @param {string} error The error
     *
     * @memberOf ObjectDisposedError
     */
    function ObjectDisposedError(objectName, error) {
        var _this = _super.call(this, error) || this;
        _this.name = objectName + "ObjectDisposed";
        _this.message = error;
        return _this;
    }
    return ObjectDisposedError;
}(Error));



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CreateGuid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNoDashGuid; });
var CreateGuid = function () {
    var d = new Date().getTime();
    var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return guid;
};
var CreateNoDashGuid = function () {
    return CreateGuid().replace(new RegExp("-", "g"), "").toUpperCase();
};



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CognitiveSubscriptionKeyAuthentication__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__CognitiveSubscriptionKeyAuthentication__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CognitiveTokenAuthentication__ = __webpack_require__(30);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IAuthentication__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RecognitionEvents__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Recognizer__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__Recognizer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SpeechResults__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WebsocketMessageFormatter__ = __webpack_require__(35);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__WebsocketMessageFormatter__["a"]; });
// IMPORTANT - Dont publish internal modules.










/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlatformEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Guid__ = __webpack_require__(2);

var EventType;
(function (EventType) {
    EventType[EventType["Debug"] = 0] = "Debug";
    EventType[EventType["Info"] = 1] = "Info";
    EventType[EventType["Warning"] = 2] = "Warning";
    EventType[EventType["Error"] = 3] = "Error";
})(EventType || (EventType = {}));
var PlatformEvent = (function () {
    function PlatformEvent(eventName, eventType) {
        this.name = eventName;
        this.eventId = Object(__WEBPACK_IMPORTED_MODULE_0__Guid__["a" /* CreateNoDashGuid */])();
        this.eventTime = new Date().toISOString();
        this.eventType = eventType;
        this.metadata = {};
    }
    Object.defineProperty(PlatformEvent.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformEvent.prototype, "EventId", {
        get: function () {
            return this.eventId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformEvent.prototype, "EventTime", {
        get: function () {
            return this.eventTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformEvent.prototype, "EventType", {
        get: function () {
            return this.eventType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformEvent.prototype, "Metadata", {
        get: function () {
            return this.metadata;
        },
        enumerable: true,
        configurable: true
    });
    return PlatformEvent;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInfo; });
var AuthInfo = (function () {
    function AuthInfo(headerName, token) {
        this.headerName = headerName;
        this.token = token;
    }
    Object.defineProperty(AuthInfo.prototype, "HeaderName", {
        get: function () {
            return this.headerName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthInfo.prototype, "Token", {
        get: function () {
            return this.token;
        },
        enumerable: true,
        configurable: true
    });
    return AuthInfo;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SpeechRecognitionEvent */
/* unused harmony export SpeechRecognitionResultEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RecognitionTriggeredEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ListeningStartedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectingToServiceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RecognitionStartedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SpeechStartDetectedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SpeechHypothesisEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SpeechEndDetectedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SpeechSimplePhraseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SpeechDetailedPhraseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RecognitionCompletionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RecognitionEndedEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SpeechRecognitionEvent = (function (_super) {
    __extends(SpeechRecognitionEvent, _super);
    function SpeechRecognitionEvent(eventName, requestId, eventType) {
        if (eventType === void 0) { eventType = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["v" /* EventType */].Info; }
        var _this = _super.call(this, eventName, eventType) || this;
        _this.requestId = requestId;
        return _this;
    }
    Object.defineProperty(SpeechRecognitionEvent.prototype, "RequestId", {
        get: function () {
            return this.requestId;
        },
        enumerable: true,
        configurable: true
    });
    return SpeechRecognitionEvent;
}(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["y" /* PlatformEvent */]));

// tslint:disable-next-line:max-classes-per-file
var SpeechRecognitionResultEvent = (function (_super) {
    __extends(SpeechRecognitionResultEvent, _super);
    function SpeechRecognitionResultEvent(eventName, requestId, result) {
        var _this = _super.call(this, eventName, requestId) || this;
        _this.result = result;
        return _this;
    }
    Object.defineProperty(SpeechRecognitionResultEvent.prototype, "Result", {
        get: function () {
            return this.result;
        },
        enumerable: true,
        configurable: true
    });
    return SpeechRecognitionResultEvent;
}(SpeechRecognitionEvent));

// tslint:disable-next-line:max-classes-per-file
var RecognitionTriggeredEvent = (function (_super) {
    __extends(RecognitionTriggeredEvent, _super);
    function RecognitionTriggeredEvent(requestId, audioSourceId, audioNodeId) {
        var _this = _super.call(this, "RecognitionTriggeredEvent", requestId) || this;
        _this.audioSourceId = audioSourceId;
        _this.audioNodeId = audioNodeId;
        return _this;
    }
    Object.defineProperty(RecognitionTriggeredEvent.prototype, "AudioSourceId", {
        get: function () {
            return this.audioSourceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionTriggeredEvent.prototype, "AudioNodeId", {
        get: function () {
            return this.audioNodeId;
        },
        enumerable: true,
        configurable: true
    });
    return RecognitionTriggeredEvent;
}(SpeechRecognitionEvent));

// tslint:disable-next-line:max-classes-per-file
var ListeningStartedEvent = (function (_super) {
    __extends(ListeningStartedEvent, _super);
    function ListeningStartedEvent(requestId, audioSourceId, audioNodeId) {
        var _this = _super.call(this, "ListeningStartedEvent", requestId) || this;
        _this.audioSourceId = audioSourceId;
        _this.audioNodeId = audioNodeId;
        return _this;
    }
    Object.defineProperty(ListeningStartedEvent.prototype, "AudioSourceId", {
        get: function () {
            return this.audioSourceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListeningStartedEvent.prototype, "AudioNodeId", {
        get: function () {
            return this.audioNodeId;
        },
        enumerable: true,
        configurable: true
    });
    return ListeningStartedEvent;
}(SpeechRecognitionEvent));

// tslint:disable-next-line:max-classes-per-file
var ConnectingToServiceEvent = (function (_super) {
    __extends(ConnectingToServiceEvent, _super);
    function ConnectingToServiceEvent(requestId, authFetchEventid, connectionId) {
        var _this = _super.call(this, "ConnectingToServiceEvent", requestId) || this;
        _this.authFetchEventid = authFetchEventid;
        _this.connectionId = connectionId;
        return _this;
    }
    Object.defineProperty(ConnectingToServiceEvent.prototype, "AuthFetchEventid", {
        get: function () {
            return this.authFetchEventid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectingToServiceEvent.prototype, "ConnectionId", {
        get: function () {
            return this.connectionId;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectingToServiceEvent;
}(SpeechRecognitionEvent));

// tslint:disable-next-line:max-classes-per-file
var RecognitionStartedEvent = (function (_super) {
    __extends(RecognitionStartedEvent, _super);
    function RecognitionStartedEvent(requestId, audioSourceId, audioNodeId, authFetchEventId, connectionId) {
        var _this = _super.call(this, "RecognitionStartedEvent", requestId) || this;
        _this.audioSourceId = audioSourceId;
        _this.audioNodeId = audioNodeId;
        _this.authFetchEventId = authFetchEventId;
        _this.connectionId = connectionId;
        return _this;
    }
    Object.defineProperty(RecognitionStartedEvent.prototype, "AudioSourceId", {
        get: function () {
            return this.audioSourceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionStartedEvent.prototype, "AudioNodeId", {
        get: function () {
            return this.audioNodeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionStartedEvent.prototype, "AuthFetchEventId", {
        get: function () {
            return this.authFetchEventId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionStartedEvent.prototype, "ConnectionId", {
        get: function () {
            return this.connectionId;
        },
        enumerable: true,
        configurable: true
    });
    return RecognitionStartedEvent;
}(SpeechRecognitionEvent));

// tslint:disable-next-line:max-classes-per-file
var SpeechStartDetectedEvent = (function (_super) {
    __extends(SpeechStartDetectedEvent, _super);
    function SpeechStartDetectedEvent(requestId, result) {
        return _super.call(this, "SpeechStartDetectedEvent", requestId, result) || this;
    }
    return SpeechStartDetectedEvent;
}(SpeechRecognitionResultEvent));

// tslint:disable-next-line:max-classes-per-file
var SpeechHypothesisEvent = (function (_super) {
    __extends(SpeechHypothesisEvent, _super);
    function SpeechHypothesisEvent(requestId, result) {
        return _super.call(this, "SpeechHypothesisEvent", requestId, result) || this;
    }
    return SpeechHypothesisEvent;
}(SpeechRecognitionResultEvent));

// tslint:disable-next-line:max-classes-per-file
var SpeechEndDetectedEvent = (function (_super) {
    __extends(SpeechEndDetectedEvent, _super);
    function SpeechEndDetectedEvent(requestId, result) {
        return _super.call(this, "SpeechEndDetectedEvent", requestId, result) || this;
    }
    return SpeechEndDetectedEvent;
}(SpeechRecognitionResultEvent));

// tslint:disable-next-line:max-classes-per-file
var SpeechSimplePhraseEvent = (function (_super) {
    __extends(SpeechSimplePhraseEvent, _super);
    function SpeechSimplePhraseEvent(requestId, result) {
        return _super.call(this, "SpeechSimplePhraseEvent", requestId, result) || this;
    }
    return SpeechSimplePhraseEvent;
}(SpeechRecognitionResultEvent));

// tslint:disable-next-line:max-classes-per-file
var SpeechDetailedPhraseEvent = (function (_super) {
    __extends(SpeechDetailedPhraseEvent, _super);
    function SpeechDetailedPhraseEvent(requestId, result) {
        return _super.call(this, "SpeechDetailedPhraseEvent", requestId, result) || this;
    }
    return SpeechDetailedPhraseEvent;
}(SpeechRecognitionResultEvent));

var RecognitionCompletionStatus;
(function (RecognitionCompletionStatus) {
    RecognitionCompletionStatus[RecognitionCompletionStatus["Success"] = 0] = "Success";
    RecognitionCompletionStatus[RecognitionCompletionStatus["AudioSourceError"] = 1] = "AudioSourceError";
    RecognitionCompletionStatus[RecognitionCompletionStatus["AudioSourceTimeout"] = 2] = "AudioSourceTimeout";
    RecognitionCompletionStatus[RecognitionCompletionStatus["AuthTokenFetchError"] = 3] = "AuthTokenFetchError";
    RecognitionCompletionStatus[RecognitionCompletionStatus["AuthTokenFetchTimeout"] = 4] = "AuthTokenFetchTimeout";
    RecognitionCompletionStatus[RecognitionCompletionStatus["UnAuthorized"] = 5] = "UnAuthorized";
    RecognitionCompletionStatus[RecognitionCompletionStatus["ConnectTimeout"] = 6] = "ConnectTimeout";
    RecognitionCompletionStatus[RecognitionCompletionStatus["ConnectError"] = 7] = "ConnectError";
    RecognitionCompletionStatus[RecognitionCompletionStatus["ClientRecognitionActivityTimeout"] = 8] = "ClientRecognitionActivityTimeout";
    RecognitionCompletionStatus[RecognitionCompletionStatus["UnknownError"] = 9] = "UnknownError";
})(RecognitionCompletionStatus || (RecognitionCompletionStatus = {}));
// tslint:disable-next-line:max-classes-per-file
var RecognitionEndedEvent = (function (_super) {
    __extends(RecognitionEndedEvent, _super);
    function RecognitionEndedEvent(requestId, audioSourceId, audioNodeId, authFetchEventId, connectionId, serviceTag, status, error) {
        var _this = _super.call(this, "RecognitionEndedEvent", requestId, status === RecognitionCompletionStatus.Success ? __WEBPACK_IMPORTED_MODULE_0__common_Exports__["v" /* EventType */].Info : __WEBPACK_IMPORTED_MODULE_0__common_Exports__["v" /* EventType */].Error) || this;
        _this.audioSourceId = audioSourceId;
        _this.audioNodeId = audioNodeId;
        _this.connectionId = connectionId;
        _this.authFetchEventId = authFetchEventId;
        _this.status = status;
        _this.error = error;
        _this.serviceTag = serviceTag;
        return _this;
    }
    Object.defineProperty(RecognitionEndedEvent.prototype, "AudioSourceId", {
        get: function () {
            return this.audioSourceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionEndedEvent.prototype, "AudioNodeId", {
        get: function () {
            return this.audioNodeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionEndedEvent.prototype, "AuthFetchEventId", {
        get: function () {
            return this.authFetchEventId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionEndedEvent.prototype, "ConnectionId", {
        get: function () {
            return this.connectionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionEndedEvent.prototype, "ServiceTag", {
        get: function () {
            return this.serviceTag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionEndedEvent.prototype, "Status", {
        get: function () {
            return this.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognitionEndedEvent.prototype, "Error", {
        get: function () {
            return this.error;
        },
        enumerable: true,
        configurable: true
    });
    return RecognitionEndedEvent;
}(SpeechRecognitionEvent));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Guid__ = __webpack_require__(2);


var MessageType;
(function (MessageType) {
    MessageType[MessageType["Text"] = 0] = "Text";
    MessageType[MessageType["Binary"] = 1] = "Binary";
})(MessageType || (MessageType = {}));
var ConnectionMessage = (function () {
    function ConnectionMessage(messageType, body, headers, id) {
        this.body = null;
        if (messageType === MessageType.Text && body && !(typeof (body) === "string")) {
            throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */]("Payload must be a string");
        }
        if (messageType === MessageType.Binary && body && !(body instanceof ArrayBuffer)) {
            throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */]("Payload must be ArrayBuffer");
        }
        this.messageType = messageType;
        this.body = body;
        this.headers = headers ? headers : {};
        this.id = id ? id : Object(__WEBPACK_IMPORTED_MODULE_1__Guid__["a" /* CreateNoDashGuid */])();
    }
    Object.defineProperty(ConnectionMessage.prototype, "MessageType", {
        get: function () {
            return this.messageType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessage.prototype, "Headers", {
        get: function () {
            return this.headers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessage.prototype, "Body", {
        get: function () {
            return this.body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessage.prototype, "TextBody", {
        get: function () {
            if (this.messageType === MessageType.Binary) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */]("Not supported for binary message");
            }
            return this.body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessage.prototype, "BinaryBody", {
        get: function () {
            if (this.messageType === MessageType.Text) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */]("Not supported for text message");
            }
            return this.body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessage.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionMessage;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Guid__ = __webpack_require__(2);


var EventSource = (function () {
    function EventSource(metadata) {
        var _this = this;
        this.eventListeners = {};
        this.isDisposed = false;
        this.OnEvent = function (event) {
            if (_this.IsDisposed()) {
                throw (new __WEBPACK_IMPORTED_MODULE_0__Error__["c" /* ObjectDisposedError */]("EventSource"));
            }
            if (_this.Metadata) {
                for (var paramName in _this.Metadata) {
                    if (paramName) {
                        if (event.Metadata) {
                            if (!event.Metadata[paramName]) {
                                event.Metadata[paramName] = _this.Metadata[paramName];
                            }
                        }
                    }
                }
            }
            for (var eventId in _this.eventListeners) {
                if (eventId && _this.eventListeners[eventId]) {
                    _this.eventListeners[eventId](event);
                }
            }
        };
        this.Attach = function (onEventCallback) {
            var id = Object(__WEBPACK_IMPORTED_MODULE_1__Guid__["a" /* CreateNoDashGuid */])();
            _this.eventListeners[id] = onEventCallback;
            return {
                Detach: function () {
                    delete _this.eventListeners[id];
                },
            };
        };
        this.AttachListener = function (listener) {
            return _this.Attach(listener.OnEvent);
        };
        this.IsDisposed = function () {
            return _this.isDisposed;
        };
        this.Dispose = function () {
            _this.eventListeners = null;
            _this.isDisposed = true;
        };
        this.metadata = metadata;
    }
    Object.defineProperty(EventSource.prototype, "Metadata", {
        get: function () {
            return this.metadata;
        },
        enumerable: true,
        configurable: true
    });
    return EventSource;
}());



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);

var InMemoryStorage = (function () {
    function InMemoryStorage() {
        var _this = this;
        this.store = {};
        this.Get = function (key) {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("key");
            }
            return _this.store[key];
        };
        this.GetOrAdd = function (key, valueToAdd) {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("key");
            }
            if (_this.store[key] === undefined) {
                _this.store[key] = valueToAdd;
            }
            return _this.store[key];
        };
        this.Set = function (key, value) {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("key");
            }
            _this.store[key] = value;
        };
        this.Remove = function (key) {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("key");
            }
            if (_this.store[key] !== undefined) {
                delete _this.store[key];
            }
        };
    }
    return InMemoryStorage;
}());



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);

var List = (function () {
    function List(list) {
        var _this = this;
        this.subscriptionIdCounter = 0;
        this.addSubscriptions = {};
        this.removeSubscriptions = {};
        this.disposedSubscriptions = {};
        this.disposeReason = null;
        this.Get = function (itemIndex) {
            _this.ThrowIfDisposed();
            return _this.list[itemIndex];
        };
        this.First = function () {
            return _this.Get(0);
        };
        this.Last = function () {
            return _this.Get(_this.Length() - 1);
        };
        this.Add = function (item) {
            _this.ThrowIfDisposed();
            _this.InsertAt(_this.list.length, item);
        };
        this.InsertAt = function (index, item) {
            _this.ThrowIfDisposed();
            if (index === 0) {
                _this.list.unshift(item);
            }
            else if (index === _this.list.length) {
                _this.list.push(item);
            }
            else {
                _this.list.splice(index, 0, item);
            }
            _this.TriggerSubscriptions(_this.addSubscriptions);
        };
        this.RemoveFirst = function () {
            _this.ThrowIfDisposed();
            return _this.RemoveAt(0);
        };
        this.RemoveLast = function () {
            _this.ThrowIfDisposed();
            return _this.RemoveAt(_this.Length() - 1);
        };
        this.RemoveAt = function (index) {
            _this.ThrowIfDisposed();
            return _this.Remove(index, 1)[0];
        };
        this.Remove = function (index, count) {
            _this.ThrowIfDisposed();
            var removedElements = _this.list.splice(index, count);
            _this.TriggerSubscriptions(_this.removeSubscriptions);
            return removedElements;
        };
        this.Clear = function () {
            _this.ThrowIfDisposed();
            _this.Remove(0, _this.Length());
        };
        this.Length = function () {
            _this.ThrowIfDisposed();
            return _this.list.length;
        };
        this.OnAdded = function (addedCallback) {
            _this.ThrowIfDisposed();
            var subscriptionId = _this.subscriptionIdCounter++;
            _this.addSubscriptions[subscriptionId] = addedCallback;
            return {
                Detach: function () {
                    delete _this.addSubscriptions[subscriptionId];
                },
            };
        };
        this.OnRemoved = function (removedCallback) {
            _this.ThrowIfDisposed();
            var subscriptionId = _this.subscriptionIdCounter++;
            _this.removeSubscriptions[subscriptionId] = removedCallback;
            return {
                Detach: function () {
                    delete _this.removeSubscriptions[subscriptionId];
                },
            };
        };
        this.OnDisposed = function (disposedCallback) {
            _this.ThrowIfDisposed();
            var subscriptionId = _this.subscriptionIdCounter++;
            _this.disposedSubscriptions[subscriptionId] = disposedCallback;
            return {
                Detach: function () {
                    delete _this.disposedSubscriptions[subscriptionId];
                },
            };
        };
        this.Join = function (seperator) {
            _this.ThrowIfDisposed();
            return _this.list.join(seperator);
        };
        this.ToArray = function () {
            var cloneCopy = Array();
            _this.list.forEach(function (val) {
                cloneCopy.push(val);
            });
            return cloneCopy;
        };
        this.Any = function (callback) {
            _this.ThrowIfDisposed();
            if (callback) {
                return _this.Where(callback).Length() > 0;
            }
            else {
                return _this.Length() > 0;
            }
        };
        this.All = function (callback) {
            _this.ThrowIfDisposed();
            return _this.Where(callback).Length() === _this.Length();
        };
        this.ForEach = function (callback) {
            _this.ThrowIfDisposed();
            for (var i = 0; i < _this.Length(); i++) {
                callback(_this.list[i], i);
            }
        };
        this.Select = function (callback) {
            _this.ThrowIfDisposed();
            var selectList = [];
            for (var i = 0; i < _this.list.length; i++) {
                selectList.push(callback(_this.list[i], i));
            }
            return new List(selectList);
        };
        this.Where = function (callback) {
            _this.ThrowIfDisposed();
            var filteredList = new List();
            for (var i = 0; i < _this.list.length; i++) {
                if (callback(_this.list[i], i)) {
                    filteredList.Add(_this.list[i]);
                }
            }
            return filteredList;
        };
        this.OrderBy = function (compareFn) {
            _this.ThrowIfDisposed();
            var clonedArray = _this.ToArray();
            var orderedArray = clonedArray.sort(compareFn);
            return new List(orderedArray);
        };
        this.OrderByDesc = function (compareFn) {
            _this.ThrowIfDisposed();
            return _this.OrderBy(function (a, b) { return compareFn(b, a); });
        };
        this.Clone = function () {
            _this.ThrowIfDisposed();
            return new List(_this.ToArray());
        };
        this.Concat = function (list) {
            _this.ThrowIfDisposed();
            return new List(_this.list.concat(list.ToArray()));
        };
        this.ConcatArray = function (array) {
            _this.ThrowIfDisposed();
            return new List(_this.list.concat(array));
        };
        this.IsDisposed = function () {
            return _this.list == null;
        };
        this.Dispose = function (reason) {
            if (!_this.IsDisposed()) {
                _this.disposeReason = reason;
                _this.list = null;
                _this.addSubscriptions = null;
                _this.removeSubscriptions = null;
                _this.TriggerSubscriptions(_this.disposedSubscriptions);
            }
        };
        this.ThrowIfDisposed = function () {
            if (_this.IsDisposed()) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["c" /* ObjectDisposedError */]("List", _this.disposeReason);
            }
        };
        this.TriggerSubscriptions = function (subscriptions) {
            if (subscriptions) {
                for (var subscriptionId in subscriptions) {
                    if (subscriptionId) {
                        subscriptions[subscriptionId]();
                    }
                }
            }
        };
        this.list = [];
        // copy the list rather than taking as is.
        if (list) {
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var item = list_1[_i];
                this.list.push(item);
            }
        }
    }
    return List;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PromiseState */
/* unused harmony export PromiseResult */
/* unused harmony export PromiseResultEventSource */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PromiseHelper; });
/* unused harmony export Promise */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deferred; });
/* unused harmony export Sink */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);

var PromiseState;
(function (PromiseState) {
    PromiseState[PromiseState["None"] = 0] = "None";
    PromiseState[PromiseState["Resolved"] = 1] = "Resolved";
    PromiseState[PromiseState["Rejected"] = 2] = "Rejected";
})(PromiseState || (PromiseState = {}));
var PromiseResult = (function () {
    function PromiseResult(promiseResultEventSource) {
        var _this = this;
        this.ThrowIfError = function () {
            if (_this.IsError) {
                throw _this.Error;
            }
        };
        promiseResultEventSource.On(function (result) {
            if (!_this.isCompleted) {
                _this.isCompleted = true;
                _this.isError = false;
                _this.result = result;
            }
        }, function (error) {
            if (!_this.isCompleted) {
                _this.isCompleted = true;
                _this.isError = true;
                _this.error = error;
            }
        });
    }
    Object.defineProperty(PromiseResult.prototype, "IsCompleted", {
        get: function () {
            return this.isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PromiseResult.prototype, "IsError", {
        get: function () {
            return this.isError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PromiseResult.prototype, "Error", {
        get: function () {
            return this.error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PromiseResult.prototype, "Result", {
        get: function () {
            return this.result;
        },
        enumerable: true,
        configurable: true
    });
    return PromiseResult;
}());

// tslint:disable-next-line:max-classes-per-file
var PromiseResultEventSource = (function () {
    function PromiseResultEventSource() {
        var _this = this;
        this.SetResult = function (result) {
            _this.onSetResult(result);
        };
        this.SetError = function (error) {
            _this.onSetError(error);
        };
        this.On = function (onSetResult, onSetError) {
            _this.onSetResult = onSetResult;
            _this.onSetError = onSetError;
        };
    }
    return PromiseResultEventSource;
}());

// tslint:disable-next-line:max-classes-per-file
var PromiseHelper = (function () {
    function PromiseHelper() {
    }
    PromiseHelper.WhenAll = function (promises) {
        if (!promises || promises.length === 0) {
            throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("promises");
        }
        var deferred = new Deferred();
        var errors = [];
        var completedPromises = 0;
        var checkForCompletion = function () {
            completedPromises++;
            if (completedPromises === promises.length) {
                if (errors.length === 0) {
                    deferred.Resolve(true);
                }
                else {
                    deferred.Reject(errors.join(", "));
                }
            }
        };
        for (var _i = 0, promises_1 = promises; _i < promises_1.length; _i++) {
            var promise = promises_1[_i];
            promise.On(function (r) {
                checkForCompletion();
            }, function (e) {
                errors.push(e);
                checkForCompletion();
            });
        }
        return deferred.Promise();
    };
    PromiseHelper.FromResult = function (result) {
        var deferred = new Deferred();
        deferred.Resolve(result);
        return deferred.Promise();
    };
    PromiseHelper.FromError = function (error) {
        var deferred = new Deferred();
        deferred.Reject(error);
        return deferred.Promise();
    };
    return PromiseHelper;
}());

// tslint:disable-next-line:max-classes-per-file
var Promise = (function () {
    function Promise(sink) {
        var _this = this;
        this.Result = function () {
            return _this.sink.Result;
        };
        this.ContinueWith = function (continuationCallback) {
            if (!continuationCallback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("continuationCallback");
            }
            var continuationDeferral = new Deferred();
            _this.sink.on(function (r) {
                try {
                    var coninuationResult = continuationCallback(_this.sink.Result);
                    continuationDeferral.Resolve(coninuationResult);
                }
                catch (e) {
                    continuationDeferral.Reject("'Unhandled callback error: " + e + "'");
                }
            }, function (error) {
                try {
                    var coninuationResult = continuationCallback(_this.sink.Result);
                    continuationDeferral.Resolve(coninuationResult);
                }
                catch (e) {
                    continuationDeferral.Reject("'Unhandled callback error: " + e + ". InnerError: " + error + "'");
                }
            });
            return continuationDeferral.Promise();
        };
        this.OnSuccessContinueWith = function (continuationCallback) {
            if (!continuationCallback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("continuationCallback");
            }
            var continuationDeferral = new Deferred();
            _this.sink.on(function (r) {
                try {
                    var coninuationResult = continuationCallback(r);
                    continuationDeferral.Resolve(coninuationResult);
                }
                catch (e) {
                    continuationDeferral.Reject("'Unhandled callback error: " + e + "'");
                }
            }, function (error) {
                continuationDeferral.Reject("'Unhandled callback error: " + error + "'");
            });
            return continuationDeferral.Promise();
        };
        this.ContinueWithPromise = function (continuationCallback) {
            if (!continuationCallback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("continuationCallback");
            }
            var continuationDeferral = new Deferred();
            _this.sink.on(function (r) {
                try {
                    var continuationPromise = continuationCallback(_this.sink.Result);
                    if (!continuationPromise) {
                        throw new Error("'Contuniation callback did not return promise'");
                    }
                    continuationPromise.On(function (coninuationResult) {
                        continuationDeferral.Resolve(coninuationResult);
                    }, function (e) {
                        continuationDeferral.Reject(e);
                    });
                }
                catch (e) {
                    continuationDeferral.Reject("'Unhandled callback error: " + e + "'");
                }
            }, function (error) {
                try {
                    var continuationPromise = continuationCallback(_this.sink.Result);
                    if (!continuationPromise) {
                        throw new Error("Contuniation callback did not return promise");
                    }
                    continuationPromise.On(function (coninuationResult) {
                        continuationDeferral.Resolve(coninuationResult);
                    }, function (e) {
                        continuationDeferral.Reject(e);
                    });
                }
                catch (e) {
                    continuationDeferral.Reject("'Unhandled callback error: " + e + ". InnerError: " + error + "'");
                }
            });
            return continuationDeferral.Promise();
        };
        this.OnSuccessContinueWithPromise = function (continuationCallback) {
            if (!continuationCallback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("continuationCallback");
            }
            var continuationDeferral = new Deferred();
            _this.sink.on(function (r) {
                try {
                    var continuationPromise = continuationCallback(r);
                    if (!continuationPromise) {
                        throw new Error("Contuniation callback did not return promise");
                    }
                    continuationPromise.On(function (coninuationResult) {
                        continuationDeferral.Resolve(coninuationResult);
                    }, function (e) {
                        continuationDeferral.Reject(e);
                    });
                }
                catch (e) {
                    continuationDeferral.Reject("'Unhandled callback error: " + e + "'");
                }
            }, function (error) {
                continuationDeferral.Reject("'Unhandled callback error: " + error + ".'");
            });
            return continuationDeferral.Promise();
        };
        this.On = function (successCallback, errorCallback) {
            if (!successCallback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("successCallback");
            }
            if (!errorCallback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("errorCallback");
            }
            _this.sink.on(successCallback, errorCallback);
            return _this;
        };
        this.Finally = function (callback) {
            if (!callback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("callback");
            }
            var callbackWrapper = function (_) {
                callback();
            };
            return _this.On(callbackWrapper, callbackWrapper);
        };
        this.sink = sink;
    }
    return Promise;
}());

// tslint:disable-next-line:max-classes-per-file
var Deferred = (function () {
    function Deferred() {
        var _this = this;
        this.State = function () {
            return _this.sink.State;
        };
        this.Promise = function () {
            return _this.promise;
        };
        this.Resolve = function (result) {
            _this.sink.Resolve(result);
            return _this;
        };
        this.Reject = function (error) {
            _this.sink.Reject(error);
            return _this;
        };
        this.sink = new Sink();
        this.promise = new Promise(this.sink);
    }
    return Deferred;
}());

// tslint:disable-next-line:max-classes-per-file
var Sink = (function () {
    function Sink() {
        var _this = this;
        this.state = PromiseState.None;
        this.promiseResult = null;
        this.promiseResultEvents = null;
        this.successHandlers = [];
        this.errorHandlers = [];
        this.Resolve = function (result) {
            if (_this.state !== PromiseState.None) {
                throw new Error("'Cannot resolve a completed promise'");
            }
            _this.state = PromiseState.Resolved;
            _this.promiseResultEvents.SetResult(result);
            for (var i = 0; i < _this.successHandlers.length; i++) {
                _this.ExecuteSuccessCallback(result, _this.successHandlers[i], _this.errorHandlers[i]);
            }
            _this.DetachHandlers();
        };
        this.Reject = function (error) {
            if (_this.state !== PromiseState.None) {
                throw new Error("'Cannot reject a completed promise'");
            }
            _this.state = PromiseState.Rejected;
            _this.promiseResultEvents.SetError(error);
            for (var _i = 0, _a = _this.errorHandlers; _i < _a.length; _i++) {
                var errorHandler = _a[_i];
                _this.ExecuteErrorCallback(error, errorHandler);
            }
            _this.DetachHandlers();
        };
        this.on = function (successCallback, errorCallback) {
            if (successCallback == null) {
                successCallback = function (r) { return; };
            }
            if (_this.state === PromiseState.None) {
                _this.successHandlers.push(successCallback);
                _this.errorHandlers.push(errorCallback);
            }
            else {
                if (_this.state === PromiseState.Resolved) {
                    _this.ExecuteSuccessCallback(_this.promiseResult.Result, successCallback, errorCallback);
                }
                else if (_this.state === PromiseState.Rejected) {
                    _this.ExecuteErrorCallback(_this.promiseResult.Error, errorCallback);
                }
                _this.DetachHandlers();
            }
        };
        this.ExecuteSuccessCallback = function (result, successCallback, errorCallback) {
            try {
                successCallback(result);
            }
            catch (e) {
                _this.ExecuteErrorCallback("'Unhandled callback error: " + e + "'", errorCallback);
            }
        };
        this.ExecuteErrorCallback = function (error, errorCallback) {
            if (errorCallback) {
                try {
                    errorCallback(error);
                }
                catch (e) {
                    throw new Error("'Unhandled callback error: " + e + ". InnerError: " + error + "'");
                }
            }
            else {
                throw new Error("'Unhandled error: " + error + "'");
            }
        };
        this.DetachHandlers = function () {
            _this.errorHandlers = [];
            _this.successHandlers = [];
        };
        this.promiseResultEvents = new PromiseResultEventSource();
        this.promiseResult = new PromiseResult(this.promiseResultEvents);
    }
    Object.defineProperty(Sink.prototype, "State", {
        get: function () {
            return this.state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sink.prototype, "Result", {
        get: function () {
            return this.promiseResult;
        },
        enumerable: true,
        configurable: true
    });
    return Sink;
}());



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Queue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__List__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Promise__ = __webpack_require__(11);



var SubscriberType;
(function (SubscriberType) {
    SubscriberType[SubscriberType["Dequeue"] = 0] = "Dequeue";
    SubscriberType[SubscriberType["Peek"] = 1] = "Peek";
})(SubscriberType || (SubscriberType = {}));
var Queue = (function () {
    function Queue(list) {
        var _this = this;
        this.promiseStore = new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* List */]();
        this.isDrainInProgress = false;
        this.isDisposing = false;
        this.disposeReason = null;
        this.Enqueue = function (item) {
            _this.ThrowIfDispose();
            _this.EnqueueFromPromise(__WEBPACK_IMPORTED_MODULE_2__Promise__["b" /* PromiseHelper */].FromResult(item));
        };
        this.EnqueueFromPromise = function (promise) {
            _this.ThrowIfDispose();
            _this.promiseStore.Add(promise);
            promise.Finally(function () {
                while (_this.promiseStore.Length() > 0) {
                    if (!_this.promiseStore.First().Result().IsCompleted) {
                        break;
                    }
                    else {
                        var p = _this.promiseStore.RemoveFirst();
                        if (!p.Result().IsError) {
                            _this.list.Add(p.Result().Result);
                        }
                        else {
                            // TODO: Log as warning.
                        }
                    }
                }
            });
        };
        this.Dequeue = function () {
            _this.ThrowIfDispose();
            var deferredSubscriber = new __WEBPACK_IMPORTED_MODULE_2__Promise__["a" /* Deferred */]();
            _this.subscribers.Add({ deferral: deferredSubscriber, type: SubscriberType.Dequeue });
            _this.Drain();
            return deferredSubscriber.Promise();
        };
        this.Peek = function () {
            _this.ThrowIfDispose();
            var deferredSubscriber = new __WEBPACK_IMPORTED_MODULE_2__Promise__["a" /* Deferred */]();
            _this.subscribers.Add({ deferral: deferredSubscriber, type: SubscriberType.Peek });
            _this.Drain();
            return deferredSubscriber.Promise();
        };
        this.Length = function () {
            _this.ThrowIfDispose();
            return _this.list.Length();
        };
        this.IsDisposed = function () {
            return _this.subscribers == null;
        };
        this.DrainAndDispose = function (pendingItemProcessor, reason) {
            if (!_this.IsDisposed() && !_this.isDisposing) {
                _this.disposeReason = reason;
                _this.isDisposing = true;
                while (_this.subscribers.Length() > 0) {
                    var subscriber = _this.subscribers.RemoveFirst();
                    subscriber.deferral.Reject("Disposed");
                }
                for (var _i = 0, _a = _this.detachables; _i < _a.length; _i++) {
                    var detachable = _a[_i];
                    detachable.Detach();
                }
                if (_this.promiseStore.Length() > 0 && pendingItemProcessor) {
                    return __WEBPACK_IMPORTED_MODULE_2__Promise__["b" /* PromiseHelper */]
                        .WhenAll(_this.promiseStore.ToArray())
                        .ContinueWith(function () {
                        _this.subscribers = null;
                        _this.list.ForEach(function (item, index) {
                            pendingItemProcessor(item);
                        });
                        _this.list = null;
                        return true;
                    });
                }
                else {
                    _this.subscribers = null;
                    _this.list = null;
                }
            }
            return __WEBPACK_IMPORTED_MODULE_2__Promise__["b" /* PromiseHelper */].FromResult(true);
        };
        this.Dispose = function (reason) {
            _this.DrainAndDispose(null, reason);
        };
        this.Drain = function () {
            if (!_this.isDrainInProgress && !_this.isDisposing) {
                _this.isDrainInProgress = true;
                while (_this.list.Length() > 0 && _this.subscribers.Length() > 0 && !_this.isDisposing) {
                    var subscriber = _this.subscribers.RemoveFirst();
                    if (subscriber.type === SubscriberType.Peek) {
                        subscriber.deferral.Resolve(_this.list.First());
                    }
                    else {
                        var dequeuedItem = _this.list.RemoveFirst();
                        subscriber.deferral.Resolve(dequeuedItem);
                    }
                }
                _this.isDrainInProgress = false;
            }
        };
        this.ThrowIfDispose = function () {
            if (_this.IsDisposed()) {
                if (_this.disposeReason) {
                    throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */](_this.disposeReason);
                }
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["c" /* ObjectDisposedError */]("Queue");
            }
            else if (_this.isDisposing) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */]("Queue disposing");
            }
        };
        this.list = list ? list : new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* List */]();
        this.detachables = [];
        this.subscribers = new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* List */]();
        this.detachables.push(this.list.OnAdded(this.Drain));
    }
    return Queue;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RecognitionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SpeechResultFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RecognizerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SpeechConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* unused harmony export System */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Device; });
var RecognitionMode;
(function (RecognitionMode) {
    RecognitionMode[RecognitionMode["Interactive"] = 0] = "Interactive";
    RecognitionMode[RecognitionMode["Conversation"] = 1] = "Conversation";
    RecognitionMode[RecognitionMode["Dictation"] = 2] = "Dictation";
})(RecognitionMode || (RecognitionMode = {}));
var SpeechResultFormat;
(function (SpeechResultFormat) {
    SpeechResultFormat[SpeechResultFormat["Simple"] = 0] = "Simple";
    SpeechResultFormat[SpeechResultFormat["Detailed"] = 1] = "Detailed";
})(SpeechResultFormat || (SpeechResultFormat = {}));
var RecognizerConfig = (function () {
    function RecognizerConfig(platformConfig, recognitionMode, language, format) {
        if (recognitionMode === void 0) { recognitionMode = RecognitionMode.Interactive; }
        if (language === void 0) { language = "en-us"; }
        if (format === void 0) { format = SpeechResultFormat.Simple; }
        this.recognitionMode = RecognitionMode.Interactive;
        this.speechConfig = platformConfig ? platformConfig : new SpeechConfig(new Context(null, null));
        this.recognitionMode = recognitionMode;
        this.language = language;
        this.format = format;
        this.recognitionActivityTimeout = recognitionMode === RecognitionMode.Interactive ? 8000 : 25000;
    }
    Object.defineProperty(RecognizerConfig.prototype, "RecognitionMode", {
        get: function () {
            return this.recognitionMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognizerConfig.prototype, "Language", {
        get: function () {
            return this.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognizerConfig.prototype, "Format", {
        get: function () {
            return this.format;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognizerConfig.prototype, "SpeechConfig", {
        get: function () {
            return this.speechConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognizerConfig.prototype, "RecognitionActivityTimeout", {
        get: function () {
            return this.recognitionActivityTimeout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecognizerConfig.prototype, "IsContinuousRecognition", {
        get: function () {
            return this.recognitionMode !== RecognitionMode.Interactive;
        },
        enumerable: true,
        configurable: true
    });
    return RecognizerConfig;
}());

// tslint:disable-next-line:max-classes-per-file
var SpeechConfig = (function () {
    function SpeechConfig(context) {
        var _this = this;
        this.Serialize = function () {
            return JSON.stringify(_this, function (key, value) {
                if (value && typeof value === "object") {
                    var replacement = {};
                    for (var k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            replacement[k && k.charAt(0).toLowerCase() + k.substring(1)] = value[k];
                        }
                    }
                    return replacement;
                }
                return value;
            });
        };
        this.context = context;
    }
    Object.defineProperty(SpeechConfig.prototype, "Context", {
        get: function () {
            return this.context;
        },
        enumerable: true,
        configurable: true
    });
    return SpeechConfig;
}());

// tslint:disable-next-line:max-classes-per-file
var Context = (function () {
    function Context(os, device) {
        this.system = new System();
        this.os = os;
        this.device = device;
    }
    Object.defineProperty(Context.prototype, "System", {
        get: function () {
            return this.system;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "OS", {
        get: function () {
            return this.os;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "Device", {
        get: function () {
            return this.device;
        },
        enumerable: true,
        configurable: true
    });
    return Context;
}());

// tslint:disable-next-line:max-classes-per-file
var System = (function () {
    function System() {
        // TODO: Tie this with the sdk Version somehow
        this.version = "1.0.00000";
    }
    Object.defineProperty(System.prototype, "Version", {
        get: function () {
            // Controlled by sdk
            return this.version;
        },
        enumerable: true,
        configurable: true
    });
    return System;
}());

// tslint:disable-next-line:max-classes-per-file
var OS = (function () {
    function OS(platform, name, version) {
        this.platform = platform;
        this.name = name;
        this.version = version;
    }
    Object.defineProperty(OS.prototype, "Platform", {
        get: function () {
            return this.platform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OS.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OS.prototype, "Version", {
        get: function () {
            return this.version;
        },
        enumerable: true,
        configurable: true
    });
    return OS;
}());

// tslint:disable-next-line:max-classes-per-file
var Device = (function () {
    function Device(manufacturer, model, version) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.version = version;
    }
    Object.defineProperty(Device.prototype, "Manufacturer", {
        get: function () {
            return this.manufacturer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "Model", {
        get: function () {
            return this.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "Version", {
        get: function () {
            return this.version;
        },
        enumerable: true,
        configurable: true
    });
    return Device;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConsoleLoggingListener__ = __webpack_require__(38);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LocalStorage__ = __webpack_require__(39);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MicAudioSource__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__MicAudioSource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OpusRecorder__ = __webpack_require__(41);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PCMRecorder__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__PCMRecorder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SessionStorage__ = __webpack_require__(43);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Timer__ = __webpack_require__(44);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WebsocketConnection__ = __webpack_require__(45);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__WebsocketConnection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WebsocketMessageAdapter__ = __webpack_require__(15);
/* unused harmony namespace reexport */











/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketMessageAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

var WebsocketMessageAdapter = (function () {
    function WebsocketMessageAdapter(uri, connectionId, messageFormatter) {
        var _this = this;
        this.Open = function () {
            if (_this.connectionState === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Disconnected) {
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError("Cannot open a connection that is in " + _this.connectionState + " state");
            }
            if (_this.connectionEstablishDeferral) {
                return _this.connectionEstablishDeferral.Promise();
            }
            _this.connectionEstablishDeferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            _this.connectionState = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connecting;
            _this.websocketClient = new WebSocket(_this.uri);
            _this.receivingMessageQueue = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["A" /* Queue */]();
            _this.disconnectDeferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            _this.sendMessageQueue = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["A" /* Queue */]();
            _this.ProcessSendQueue();
            _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["q" /* ConnectionStartEvent */](_this.connectionId, _this.uri));
            _this.websocketClient.onopen = function (e) {
                _this.connectionState = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connected;
                _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["l" /* ConnectionEstablishedEvent */](_this.connectionId));
                _this.connectionEstablishDeferral.Resolve(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["p" /* ConnectionOpenResponse */](200, ""));
            };
            _this.websocketClient.onerror = function (e) {
                // TODO: Understand what this is error is. Will we still get onClose ?
                if (_this.connectionState !== __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connecting) {
                    // TODO: Is this required ?
                    // this.OnEvent(new ConnectionErrorEvent(errorMsg, connectionId));
                }
            };
            _this.websocketClient.onclose = function (e) {
                if (_this.connectionState === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connecting) {
                    _this.connectionState = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Disconnected;
                    _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["k" /* ConnectionEstablishErrorEvent */](_this.connectionId, e.code, e.reason));
                    _this.connectionEstablishDeferral.Resolve(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["p" /* ConnectionOpenResponse */](e.code, e.reason));
                }
                else {
                    _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["j" /* ConnectionClosedEvent */](_this.connectionId, e.code, e.reason));
                }
                _this.OnClose(e.code, e.reason);
            };
            _this.websocketClient.onmessage = function (e) {
                var networkReceivedTime = new Date().toISOString();
                if (_this.connectionState === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connected) {
                    var deferred_1 = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
                    // let id = ++this.idCounter;
                    _this.receivingMessageQueue.EnqueueFromPromise(deferred_1.Promise());
                    if (e.data instanceof Blob) {
                        var fileReader_1 = new FileReader();
                        fileReader_1.onload = function (le) {
                            var rawMessage = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["B" /* RawWebsocketMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Binary, fileReader_1.result);
                            _this.messageFormatter
                                .ToConnectionMessage(rawMessage)
                                .On(function (connectionMessage) {
                                _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["n" /* ConnectionMessageReceivedEvent */](_this.connectionId, networkReceivedTime, connectionMessage));
                                deferred_1.Resolve(connectionMessage);
                            }, function (error) {
                                // TODO: Events for these ?
                                deferred_1.Reject("Invalid binary message format. Error: " + error);
                            });
                        };
                        fileReader_1.onerror = function (ev) {
                            // TODO: Events for these ?
                            deferred_1.Reject("Binary message parse error");
                        };
                        fileReader_1.readAsArrayBuffer(e.data);
                    }
                    else {
                        var rawMessage = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["B" /* RawWebsocketMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text, e.data);
                        _this.messageFormatter
                            .ToConnectionMessage(rawMessage)
                            .On(function (connectionMessage) {
                            _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["n" /* ConnectionMessageReceivedEvent */](_this.connectionId, networkReceivedTime, connectionMessage));
                            deferred_1.Resolve(connectionMessage);
                        }, function (error) {
                            // TODO: Events for these ?
                            deferred_1.Reject("Invalid text message format. Error: " + error);
                        });
                    }
                }
            };
            return _this.connectionEstablishDeferral.Promise();
        };
        this.Send = function (message) {
            if (_this.connectionState !== __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connected) {
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError("Cannot send on connection that is in " + _this.connectionState + " state");
            }
            var messageSendStatusDeferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            var messageSendDeferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            _this.sendMessageQueue.EnqueueFromPromise(messageSendDeferral.Promise());
            _this.messageFormatter
                .FromConnectionMessage(message)
                .On(function (rawMessage) {
                messageSendDeferral.Resolve({
                    Message: message,
                    RawWebsocketMessage: rawMessage,
                    SendStatusDeferral: messageSendStatusDeferral,
                });
            }, function (error) {
                messageSendDeferral.Reject("Error formatting the message. " + error);
            });
            return messageSendStatusDeferral.Promise();
        };
        this.Read = function () {
            if (_this.connectionState !== __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connected) {
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError("Cannot read on connection that is in " + _this.connectionState + " state");
            }
            return _this.receivingMessageQueue.Dequeue();
        };
        this.Close = function (reason) {
            if (_this.websocketClient) {
                if (_this.connectionState !== __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connected) {
                    _this.websocketClient.close(1000, reason ? reason : "Normal closure by client");
                }
            }
            else {
                var deferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
                deferral.Resolve(true);
                return deferral.Promise();
            }
            return _this.disconnectDeferral.Promise();
        };
        this.SendRawMessage = function (sendItem) {
            try {
                _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["o" /* ConnectionMessageSentEvent */](_this.connectionId, new Date().toISOString(), sendItem.Message));
                _this.websocketClient.send(sendItem.RawWebsocketMessage.Payload);
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(true);
            }
            catch (e) {
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError("websocket send error: " + e);
            }
        };
        this.OnClose = function (code, reason) {
            var closeReason = "Connection closed. " + code + ": " + reason;
            _this.connectionState = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Disconnected;
            _this.disconnectDeferral.Resolve(true);
            _this.receivingMessageQueue.Dispose(reason);
            _this.receivingMessageQueue.DrainAndDispose(function (pendingReceiveItem) {
                // TODO: Events for these ?
                // Logger.Instance.OnEvent(new LoggingEvent(LogType.Warning, null, `Failed to process received message. Reason: ${closeReason}, Message: ${JSON.stringify(pendingReceiveItem)}`));
            }, closeReason);
            _this.sendMessageQueue.DrainAndDispose(function (pendingSendItem) {
                pendingSendItem.SendStatusDeferral.Reject(closeReason);
            }, closeReason);
        };
        this.ProcessSendQueue = function () {
            _this.sendMessageQueue
                .Dequeue()
                .On(function (sendItem) {
                _this.SendRawMessage(sendItem)
                    .On(function (result) {
                    sendItem.SendStatusDeferral.Resolve(result);
                    _this.ProcessSendQueue();
                }, function (sendError) {
                    sendItem.SendStatusDeferral.Reject(sendError);
                    _this.ProcessSendQueue();
                });
            }, function (error) {
                // do nothing
            });
        };
        this.OnEvent = function (event) {
            _this.connectionEvents.OnEvent(event);
            __WEBPACK_IMPORTED_MODULE_0__common_Exports__["w" /* Events */].Instance.OnEvent(event);
        };
        if (!uri) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("uri");
        }
        if (!messageFormatter) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("messageFormatter");
        }
        this.connectionEvents = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["u" /* EventSource */]();
        this.connectionId = connectionId;
        this.messageFormatter = messageFormatter;
        this.connectionState = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].None;
        this.uri = uri;
    }
    Object.defineProperty(WebsocketMessageAdapter.prototype, "State", {
        get: function () {
            return this.connectionState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebsocketMessageAdapter.prototype, "Events", {
        get: function () {
            return this.connectionEvents;
        },
        enumerable: true,
        configurable: true
    });
    return WebsocketMessageAdapter;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechConnectionFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_browser_Exports__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speech_Exports__ = __webpack_require__(3);



var TestHooksParamName = "testhooks";
var ConnectionIdHeader = "X-ConnectionId";
var SpeechConnectionFactory = (function () {
    function SpeechConnectionFactory() {
        var _this = this;
        this.Create = function (config, authInfo, connectionId) {
            var endpoint = "";
            switch (config.RecognitionMode) {
                case __WEBPACK_IMPORTED_MODULE_2__speech_Exports__["e" /* RecognitionMode */].Conversation:
                    endpoint = _this.Host + _this.ConversationRelativeUri;
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__speech_Exports__["e" /* RecognitionMode */].Dictation:
                    endpoint = _this.Host + _this.DictationRelativeUri;
                    break;
                default:
                    endpoint = _this.Host + _this.InteractiveRelativeUri; // default is interactive
                    break;
            }
            var queryParams = {
                format: __WEBPACK_IMPORTED_MODULE_2__speech_Exports__["i" /* SpeechResultFormat */][config.Format].toString().toLowerCase(),
                language: config.Language,
            };
            if (_this.IsDebugModeEnabled) {
                queryParams[TestHooksParamName] = "1";
            }
            var headers = {};
            headers[authInfo.HeaderName] = authInfo.Token;
            headers[ConnectionIdHeader] = connectionId;
            return new __WEBPACK_IMPORTED_MODULE_0__common_browser_Exports__["c" /* WebsocketConnection */](endpoint, queryParams, headers, new __WEBPACK_IMPORTED_MODULE_2__speech_Exports__["j" /* WebsocketMessageFormatter */](), connectionId);
        };
    }
    Object.defineProperty(SpeechConnectionFactory.prototype, "Host", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__common_Exports__["D" /* Storage */].Local.GetOrAdd("Host", "wss://speech.platform.bing.com");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConnectionFactory.prototype, "InteractiveRelativeUri", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__common_Exports__["D" /* Storage */].Local.GetOrAdd("InteractiveRelativeUri", "/speech/recognition/interactive/cognitiveservices/v1");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConnectionFactory.prototype, "ConversationRelativeUri", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__common_Exports__["D" /* Storage */].Local.GetOrAdd("ConversationRelativeUri", "/speech/recognition/conversation/cognitiveservices/v1");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConnectionFactory.prototype, "DictationRelativeUri", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__common_Exports__["D" /* Storage */].Local.GetOrAdd("DictationRelativeUri", "/speech/recognition/dictation/cognitiveservices/v1");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConnectionFactory.prototype, "IsDebugModeEnabled", {
        get: function () {
            var value = __WEBPACK_IMPORTED_MODULE_1__common_Exports__["D" /* Storage */].Local.GetOrAdd("IsDebugModeEnabled", "false");
            return value.toLowerCase() === "true";
        },
        enumerable: true,
        configurable: true
    });
    return SpeechConnectionFactory;
}());



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_src_SpeechRecognition__ = __webpack_require__(18);

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
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || __WEBPACK_IMPORTED_MODULE_0__js_src_SpeechRecognition__["a" /* SpeechRecognition */];
})(window.SpeechRecognition || window.webkitSpeechRecognition);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_LanguageResolver__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_microsoft_speech_browser_sdk_src_sdk_speech_Exports__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_browser_Exports__ = __webpack_require__(36);

// include the needed parts of the library. webpack will treeshake all unneeded stuff.


var SpeechRecognition = (function () {
    function SpeechRecognition(apiKey) {
        this.apiKey = apiKey;
        this.recognizer = null;
        this.onaudiostart = null;
        this.onaudioend = null;
        this.onstart = null;
        this.onend = null;
        this.onerror = null;
        this.onnomatch = null;
        this.onresult = null;
        this.lang = document.documentElement.lang || navigator.language;
        this.continuous = false;
        this.interimResults = false;
        this.maxAlternatives = 1;
        this.serviceURI = 'https://api.cognitive.microsoft.com/sts/v1.0';
    }
    SpeechRecognition.prototype.start = function () {
        if (!this.recognizer) {
            if (!this.apiKey) {
                throw new Error('no api key specified');
            }
            this.recognizer = this.setupRecognizer();
        }
        this.recognizer.Recognize(this.handleEvent)
            .On(this.recognitionStartSuccess, this.recognitionStartFailed);
    };
    SpeechRecognition.prototype.stop = function () {
        if (this.recognizer) {
            this.recognizer.AudioSource.TurnOff();
        }
    };
    SpeechRecognition.prototype.abort = function () {
        if (this.recognizer) {
            this.recognizer.AudioSource.TurnOff();
        }
    };
    SpeechRecognition.prototype.handleEvent = function (event) {
        console.log(event.name + " triggered");
        if (event.result) {
            console.log('got result', event);
        }
        if (event.error) {
            console.error(event.error);
        }
    };
    SpeechRecognition.prototype.recognitionStartSuccess = function (listening) {
        console.log('recognition started');
    };
    SpeechRecognition.prototype.recognitionStartFailed = function (error) {
        console.log('recognition start failed', error);
    };
    SpeechRecognition.prototype.setupRecognizer = function () {
        // prepare recognizer configuration
        var speechConfig = new __WEBPACK_IMPORTED_MODULE_1_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["h" /* SpeechConfig */](new __WEBPACK_IMPORTED_MODULE_1_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["b" /* Context */](new __WEBPACK_IMPORTED_MODULE_1_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["d" /* OS */]('Speech', 'Speech', null), new __WEBPACK_IMPORTED_MODULE_1_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["c" /* Device */](navigator.userAgent, 'Browser', '1.0.0.0')));
        var recognitionMode = this.interimResults ? __WEBPACK_IMPORTED_MODULE_1_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["e" /* RecognitionMode */].Conversation : __WEBPACK_IMPORTED_MODULE_1_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["e" /* RecognitionMode */].Dictation;
        var language = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_LanguageResolver__["a" /* resolveLang */])(this.lang);
        var resultFormat = __WEBPACK_IMPORTED_MODULE_1_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["i" /* SpeechResultFormat */].Detailed;
        // configure and authenticate recognizer
        var config = new __WEBPACK_IMPORTED_MODULE_1_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["g" /* RecognizerConfig */](speechConfig, recognitionMode, language, resultFormat);
        var auth = new __WEBPACK_IMPORTED_MODULE_1_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["a" /* CognitiveSubscriptionKeyAuthentication */](this.apiKey);
        // create and return recognizer based on the prepared configuration
        return Object(__WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_browser_Exports__["a" /* CreateRecognizer */])(config, auth);
    };
    return SpeechRecognition;
}());



/***/ }),
/* 19 */
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


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitiveSubscriptionKeyAuthentication; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IAuthentication__ = __webpack_require__(5);


var AuthHeader = "Ocp-Apim-Subscription-Key";
var CognitiveSubscriptionKeyAuthentication = (function () {
    function CognitiveSubscriptionKeyAuthentication(subscriptionKey) {
        var _this = this;
        this.Fetch = function (authFetchEventId) {
            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(_this.authInfo);
        };
        this.FetchOnExpiry = function (authFetchEventId) {
            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(_this.authInfo);
        };
        if (!subscriptionKey) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("subscriptionKey");
        }
        this.authInfo = new __WEBPACK_IMPORTED_MODULE_1__IAuthentication__["a" /* AuthInfo */](AuthHeader, subscriptionKey);
    }
    return CognitiveSubscriptionKeyAuthentication;
}());



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AudioSourceEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AudioSourceInitializingEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AudioSourceReadyEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AudioSourceOffEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioSourceErrorEvent; });
/* unused harmony export AudioStreamNodeEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AudioStreamNodeAttachingEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AudioStreamNodeAttachedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return AudioStreamNodeDetachedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return AudioStreamNodeErrorEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AudioSourceEvent = (function (_super) {
    __extends(AudioSourceEvent, _super);
    function AudioSourceEvent(eventName, audioSourceId, eventType) {
        if (eventType === void 0) { eventType = __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["a" /* EventType */].Info; }
        var _this = _super.call(this, eventName, eventType) || this;
        _this.audioSourceId = audioSourceId;
        return _this;
    }
    Object.defineProperty(AudioSourceEvent.prototype, "AudioSourceId", {
        get: function () {
            return this.audioSourceId;
        },
        enumerable: true,
        configurable: true
    });
    return AudioSourceEvent;
}(__WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["b" /* PlatformEvent */]));

// tslint:disable-next-line:max-classes-per-file
var AudioSourceInitializingEvent = (function (_super) {
    __extends(AudioSourceInitializingEvent, _super);
    function AudioSourceInitializingEvent(audioSourceId) {
        return _super.call(this, "AudioSourceInitializingEvent", audioSourceId) || this;
    }
    return AudioSourceInitializingEvent;
}(AudioSourceEvent));

// tslint:disable-next-line:max-classes-per-file
var AudioSourceReadyEvent = (function (_super) {
    __extends(AudioSourceReadyEvent, _super);
    function AudioSourceReadyEvent(audioSourceId) {
        return _super.call(this, "AudioSourceReadyEvent", audioSourceId) || this;
    }
    return AudioSourceReadyEvent;
}(AudioSourceEvent));

// tslint:disable-next-line:max-classes-per-file
var AudioSourceOffEvent = (function (_super) {
    __extends(AudioSourceOffEvent, _super);
    function AudioSourceOffEvent(audioSourceId) {
        return _super.call(this, "AudioSourceOffEvent", audioSourceId) || this;
    }
    return AudioSourceOffEvent;
}(AudioSourceEvent));

// tslint:disable-next-line:max-classes-per-file
var AudioSourceErrorEvent = (function (_super) {
    __extends(AudioSourceErrorEvent, _super);
    function AudioSourceErrorEvent(audioSourceId, error) {
        var _this = _super.call(this, "AudioSourceErrorEvent", audioSourceId, __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["a" /* EventType */].Error) || this;
        _this.error = error;
        return _this;
    }
    Object.defineProperty(AudioSourceErrorEvent.prototype, "Error", {
        get: function () {
            return this.error;
        },
        enumerable: true,
        configurable: true
    });
    return AudioSourceErrorEvent;
}(AudioSourceEvent));

// tslint:disable-next-line:max-classes-per-file
var AudioStreamNodeEvent = (function (_super) {
    __extends(AudioStreamNodeEvent, _super);
    function AudioStreamNodeEvent(eventName, audioSourceId, audioNodeId) {
        var _this = _super.call(this, eventName, audioSourceId) || this;
        _this.audioNodeId = audioNodeId;
        return _this;
    }
    Object.defineProperty(AudioStreamNodeEvent.prototype, "AudioNodeId", {
        get: function () {
            return this.audioNodeId;
        },
        enumerable: true,
        configurable: true
    });
    return AudioStreamNodeEvent;
}(AudioSourceEvent));

// tslint:disable-next-line:max-classes-per-file
var AudioStreamNodeAttachingEvent = (function (_super) {
    __extends(AudioStreamNodeAttachingEvent, _super);
    function AudioStreamNodeAttachingEvent(audioSourceId, audioNodeId) {
        return _super.call(this, "AudioStreamNodeAttachingEvent", audioSourceId, audioNodeId) || this;
    }
    return AudioStreamNodeAttachingEvent;
}(AudioStreamNodeEvent));

// tslint:disable-next-line:max-classes-per-file
var AudioStreamNodeAttachedEvent = (function (_super) {
    __extends(AudioStreamNodeAttachedEvent, _super);
    function AudioStreamNodeAttachedEvent(audioSourceId, audioNodeId) {
        return _super.call(this, "AudioStreamNodeAttachedEvent", audioSourceId, audioNodeId) || this;
    }
    return AudioStreamNodeAttachedEvent;
}(AudioStreamNodeEvent));

// tslint:disable-next-line:max-classes-per-file
var AudioStreamNodeDetachedEvent = (function (_super) {
    __extends(AudioStreamNodeDetachedEvent, _super);
    function AudioStreamNodeDetachedEvent(audioSourceId, audioNodeId) {
        return _super.call(this, "AudioStreamNodeDetachedEvent", audioSourceId, audioNodeId) || this;
    }
    return AudioStreamNodeDetachedEvent;
}(AudioStreamNodeEvent));

// tslint:disable-next-line:max-classes-per-file
var AudioStreamNodeErrorEvent = (function (_super) {
    __extends(AudioStreamNodeErrorEvent, _super);
    function AudioStreamNodeErrorEvent(audioSourceId, audioNodeId, error) {
        var _this = _super.call(this, "AudioStreamNodeErrorEvent", audioSourceId, audioNodeId) || this;
        _this.error = error;
        return _this;
    }
    Object.defineProperty(AudioStreamNodeErrorEvent.prototype, "Error", {
        get: function () {
            return this.error;
        },
        enumerable: true,
        configurable: true
    });
    return AudioStreamNodeErrorEvent;
}(AudioStreamNodeEvent));



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ConnectionStartEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ConnectionEstablishedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionClosedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConnectionEstablishErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ConnectionMessageReceivedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ConnectionMessageSentEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ConnectionEvent = (function (_super) {
    __extends(ConnectionEvent, _super);
    function ConnectionEvent(eventName, connectionId, eventType) {
        if (eventType === void 0) { eventType = __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["a" /* EventType */].Info; }
        var _this = _super.call(this, eventName, eventType) || this;
        _this.connectionId = connectionId;
        return _this;
    }
    Object.defineProperty(ConnectionEvent.prototype, "ConnectionId", {
        get: function () {
            return this.connectionId;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionEvent;
}(__WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["b" /* PlatformEvent */]));

// tslint:disable-next-line:max-classes-per-file
var ConnectionStartEvent = (function (_super) {
    __extends(ConnectionStartEvent, _super);
    function ConnectionStartEvent(connectionId, uri, headers) {
        var _this = _super.call(this, "ConnectionStartEvent", connectionId) || this;
        _this.uri = uri;
        _this.headers = headers;
        return _this;
    }
    Object.defineProperty(ConnectionStartEvent.prototype, "Uri", {
        get: function () {
            return this.uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionStartEvent.prototype, "Headers", {
        get: function () {
            return this.headers;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionStartEvent;
}(ConnectionEvent));

// tslint:disable-next-line:max-classes-per-file
var ConnectionEstablishedEvent = (function (_super) {
    __extends(ConnectionEstablishedEvent, _super);
    function ConnectionEstablishedEvent(connectionId, metadata) {
        return _super.call(this, "ConnectionEstablishedEvent", connectionId) || this;
    }
    return ConnectionEstablishedEvent;
}(ConnectionEvent));

// tslint:disable-next-line:max-classes-per-file
var ConnectionClosedEvent = (function (_super) {
    __extends(ConnectionClosedEvent, _super);
    function ConnectionClosedEvent(connectionId, statusCode, reason) {
        var _this = _super.call(this, "ConnectionClosedEvent", connectionId, __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["a" /* EventType */].Warning) || this;
        _this.reason = reason;
        _this.statusCode = statusCode;
        return _this;
    }
    Object.defineProperty(ConnectionClosedEvent.prototype, "Reason", {
        get: function () {
            return this.reason;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionClosedEvent.prototype, "StatusCode", {
        get: function () {
            return this.statusCode;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionClosedEvent;
}(ConnectionEvent));

// tslint:disable-next-line:max-classes-per-file
var ConnectionEstablishErrorEvent = (function (_super) {
    __extends(ConnectionEstablishErrorEvent, _super);
    function ConnectionEstablishErrorEvent(connectionId, statuscode, reason) {
        var _this = _super.call(this, "ConnectionEstablishErrorEvent", connectionId, __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["a" /* EventType */].Error) || this;
        _this.statusCode = statuscode;
        _this.reason = reason;
        return _this;
    }
    Object.defineProperty(ConnectionEstablishErrorEvent.prototype, "Reason", {
        get: function () {
            return this.reason;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionEstablishErrorEvent.prototype, "StatusCode", {
        get: function () {
            return this.statusCode;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionEstablishErrorEvent;
}(ConnectionEvent));

// tslint:disable-next-line:max-classes-per-file
var ConnectionMessageReceivedEvent = (function (_super) {
    __extends(ConnectionMessageReceivedEvent, _super);
    function ConnectionMessageReceivedEvent(connectionId, networkReceivedTimeISO, message) {
        var _this = _super.call(this, "ConnectionMessageReceivedEvent", connectionId) || this;
        _this.networkReceivedTime = networkReceivedTimeISO;
        _this.message = message;
        return _this;
    }
    Object.defineProperty(ConnectionMessageReceivedEvent.prototype, "NetworkReceivedTime", {
        get: function () {
            return this.networkReceivedTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessageReceivedEvent.prototype, "Message", {
        get: function () {
            return this.message;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionMessageReceivedEvent;
}(ConnectionEvent));

// tslint:disable-next-line:max-classes-per-file
var ConnectionMessageSentEvent = (function (_super) {
    __extends(ConnectionMessageSentEvent, _super);
    function ConnectionMessageSentEvent(connectionId, networkSentTimeISO, message) {
        var _this = _super.call(this, "ConnectionMessageSentEvent", connectionId) || this;
        _this.networkSentTime = networkSentTimeISO;
        _this.message = message;
        return _this;
    }
    Object.defineProperty(ConnectionMessageSentEvent.prototype, "NetworkSentTime", {
        get: function () {
            return this.networkSentTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionMessageSentEvent.prototype, "Message", {
        get: function () {
            return this.message;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionMessageSentEvent;
}(ConnectionEvent));



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionOpenResponse; });
var ConnectionOpenResponse = (function () {
    function ConnectionOpenResponse(statusCode, reason) {
        this.statusCode = statusCode;
        this.reason = reason;
    }
    Object.defineProperty(ConnectionOpenResponse.prototype, "StatusCode", {
        get: function () {
            return this.statusCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectionOpenResponse.prototype, "Reason", {
        get: function () {
            return this.reason;
        },
        enumerable: true,
        configurable: true
    });
    return ConnectionOpenResponse;
}());



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Events; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EventSource__ = __webpack_require__(8);


var Events = (function () {
    function Events() {
    }
    Object.defineProperty(Events, "Instance", {
        get: function () {
            return Events.instance;
        },
        enumerable: true,
        configurable: true
    });
    Events.instance = new __WEBPACK_IMPORTED_MODULE_1__EventSource__["a" /* EventSource */]();
    Events.SetEventSource = function (eventSource) {
        if (!eventSource) {
            throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("eventSource");
        }
        Events.instance = eventSource;
    };
    return Events;
}());



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionState; });
var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["None"] = 0] = "None";
    ConnectionState[ConnectionState["Connected"] = 1] = "Connected";
    ConnectionState[ConnectionState["Connecting"] = 2] = "Connecting";
    ConnectionState[ConnectionState["Disconnected"] = 3] = "Disconnected";
})(ConnectionState || (ConnectionState = {}));


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RawWebsocketMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnectionMessage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Guid__ = __webpack_require__(2);



var RawWebsocketMessage = (function () {
    function RawWebsocketMessage(messageType, payload, id) {
        this.payload = null;
        if (!payload) {
            throw new __WEBPACK_IMPORTED_MODULE_1__Error__["a" /* ArgumentNullError */]("payload");
        }
        if (messageType === __WEBPACK_IMPORTED_MODULE_0__ConnectionMessage__["b" /* MessageType */].Binary && !(payload instanceof ArrayBuffer)) {
            throw new __WEBPACK_IMPORTED_MODULE_1__Error__["b" /* InvalidOperationError */]("Payload must be ArrayBuffer");
        }
        if (messageType === __WEBPACK_IMPORTED_MODULE_0__ConnectionMessage__["b" /* MessageType */].Text && !(typeof (payload) === "string")) {
            throw new __WEBPACK_IMPORTED_MODULE_1__Error__["b" /* InvalidOperationError */]("Payload must be a string");
        }
        this.messageType = messageType;
        this.payload = payload;
        this.id = id ? id : Object(__WEBPACK_IMPORTED_MODULE_2__Guid__["a" /* CreateNoDashGuid */])();
    }
    Object.defineProperty(RawWebsocketMessage.prototype, "MessageType", {
        get: function () {
            return this.messageType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RawWebsocketMessage.prototype, "Payload", {
        get: function () {
            return this.payload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RawWebsocketMessage.prototype, "TextContent", {
        get: function () {
            if (this.messageType === __WEBPACK_IMPORTED_MODULE_0__ConnectionMessage__["b" /* MessageType */].Binary) {
                throw new __WEBPACK_IMPORTED_MODULE_1__Error__["b" /* InvalidOperationError */]("Not supported for binary message");
            }
            return this.payload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RawWebsocketMessage.prototype, "BinaryContent", {
        get: function () {
            if (this.messageType === __WEBPACK_IMPORTED_MODULE_0__ConnectionMessage__["b" /* MessageType */].Text) {
                throw new __WEBPACK_IMPORTED_MODULE_1__Error__["b" /* InvalidOperationError */]("Not supported for text message");
            }
            return this.payload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RawWebsocketMessage.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    return RawWebsocketMessage;
}());



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiffPcmEncoder; });
var RiffPcmEncoder = (function () {
    function RiffPcmEncoder(actualSampleRate, desiredSampleRate) {
        var _this = this;
        this.channelCount = 1;
        this.Encode = function (isFirstAudioFrame, actualAudioFrame) {
            var audioFrame = _this.DownSampleAudioFrame(actualAudioFrame, _this.actualSampleRate, _this.desiredSampleRate);
            var audioLength = audioFrame.length * 2;
            if (!isFirstAudioFrame) {
                var buffer_1 = new ArrayBuffer(audioLength);
                var view_1 = new DataView(buffer_1);
                _this.FloatTo16BitPCM(view_1, 0, audioFrame);
                return buffer_1;
            }
            var buffer = new ArrayBuffer(44 + audioLength);
            var bitsPerSample = 16;
            var bytesPerSample = bitsPerSample / 8;
            // We dont know ahead of time about the length of audio to stream. So set to 0.
            var fileLength = 0;
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
            var view = new DataView(buffer);
            /* RIFF identifier */
            _this.SetString(view, 0, "RIFF");
            /* file length */
            view.setUint32(4, fileLength, true);
            /* RIFF type & Format */
            _this.SetString(view, 8, "WAVEfmt ");
            /* format chunk length */
            view.setUint32(16, 16, true);
            /* sample format (raw) */
            view.setUint16(20, 1, true);
            /* channel count */
            view.setUint16(22, _this.channelCount, true);
            /* sample rate */
            view.setUint32(24, _this.desiredSampleRate, true);
            /* byte rate (sample rate * block align) */
            view.setUint32(28, _this.desiredSampleRate * _this.channelCount * bytesPerSample, true);
            /* block align (channel count * bytes per sample) */
            view.setUint16(32, _this.channelCount * bytesPerSample, true);
            /* bits per sample */
            view.setUint16(34, bitsPerSample, true);
            /* data chunk identifier */
            _this.SetString(view, 36, "data");
            /* data chunk length */
            view.setUint32(40, fileLength, true);
            _this.FloatTo16BitPCM(view, 44, audioFrame);
            return buffer;
        };
        this.SetString = function (view, offset, str) {
            for (var i = 0; i < str.length; i++) {
                view.setUint8(offset + i, str.charCodeAt(i));
            }
        };
        this.FloatTo16BitPCM = function (view, offset, input) {
            for (var i = 0; i < input.length; i++, offset += 2) {
                var s = Math.max(-1, Math.min(1, input[i]));
                view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
            }
        };
        this.DownSampleAudioFrame = function (audioFrame, actualSampleRate, desiredSamplerate) {
            if (desiredSamplerate === actualSampleRate || desiredSamplerate > actualSampleRate) {
                return audioFrame;
            }
            var sampleRateRatio = actualSampleRate / desiredSamplerate;
            var newLength = Math.round(audioFrame.length / sampleRateRatio);
            var downSampledAudioFrame = new Float32Array(newLength);
            var offsetResult = 0;
            var offsetBuffer = 0;
            while (offsetResult < downSampledAudioFrame.length) {
                var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
                var accum = 0;
                var count = 0;
                for (var i = offsetBuffer; i < nextOffsetBuffer && i < audioFrame.length; i++) {
                    accum += audioFrame[i];
                    count++;
                }
                downSampledAudioFrame[offsetResult] = accum / count;
                offsetResult++;
                offsetBuffer = nextOffsetBuffer;
            }
            return downSampledAudioFrame;
        };
        this.actualSampleRate = actualSampleRate;
        this.desiredSampleRate = desiredSampleRate;
    }
    return RiffPcmEncoder;
}());



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Storage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InMemoryStorage__ = __webpack_require__(9);


var Storage = (function () {
    function Storage() {
    }
    Object.defineProperty(Storage, "Session", {
        get: function () {
            return Storage.sessionStorage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Storage, "Local", {
        get: function () {
            return Storage.localStorage;
        },
        enumerable: true,
        configurable: true
    });
    Storage.sessionStorage = new __WEBPACK_IMPORTED_MODULE_1__InMemoryStorage__["a" /* InMemoryStorage */]();
    Storage.localStorage = new __WEBPACK_IMPORTED_MODULE_1__InMemoryStorage__["a" /* InMemoryStorage */]();
    Storage.SetSessionStorage = function (sessionStorage) {
        if (!sessionStorage) {
            throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("sessionStorage");
        }
        Storage.sessionStorage = sessionStorage;
    };
    Storage.SetLocalStorage = function (localStorage) {
        if (!localStorage) {
            throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("localStorage");
        }
        Storage.localStorage = localStorage;
    };
    return Storage;
}());



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stream; });
/* unused harmony export StreamReader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Guid__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Queue__ = __webpack_require__(12);



var Stream = (function () {
    function Stream(streamId) {
        var _this = this;
        this.readerIdCounter = 1;
        this.isEnded = false;
        this.Write = function (buffer) {
            _this.ThrowIfClosed();
            _this.WriteStreamChunk({
                Buffer: buffer,
                IsEnd: false,
            });
        };
        this.GetReader = function () {
            var readerId = _this.readerIdCounter;
            _this.readerIdCounter++;
            var readerQueue = new __WEBPACK_IMPORTED_MODULE_2__Queue__["a" /* Queue */]();
            var currentLength = _this.streambuffer.length;
            _this.readerQueues[readerId] = readerQueue;
            for (var i = 0; i < currentLength; i++) {
                readerQueue.Enqueue(_this.streambuffer[i]);
            }
            return new StreamReader(_this.id, readerQueue, function () {
                delete _this.readerQueues[readerId];
            });
        };
        this.Close = function () {
            if (!_this.isEnded) {
                _this.WriteStreamChunk({
                    Buffer: null,
                    IsEnd: true,
                });
                _this.isEnded = true;
            }
        };
        this.WriteStreamChunk = function (streamChunk) {
            _this.ThrowIfClosed();
            _this.streambuffer.push(streamChunk);
            for (var readerId in _this.readerQueues) {
                if (!_this.readerQueues[readerId].IsDisposed()) {
                    try {
                        _this.readerQueues[readerId].Enqueue(streamChunk);
                    }
                    catch (e) {
                        // Do nothing
                    }
                }
            }
        };
        this.ThrowIfClosed = function () {
            if (_this.isEnded) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */]("Stream closed");
            }
        };
        this.id = streamId ? streamId : Object(__WEBPACK_IMPORTED_MODULE_1__Guid__["a" /* CreateNoDashGuid */])();
        this.streambuffer = [];
        this.readerQueues = {};
    }
    Object.defineProperty(Stream.prototype, "IsClosed", {
        get: function () {
            return this.isEnded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stream.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    return Stream;
}());

// tslint:disable-next-line:max-classes-per-file
var StreamReader = (function () {
    function StreamReader(streamId, readerQueue, onClose) {
        var _this = this;
        this.isClosed = false;
        this.Read = function () {
            if (_this.IsClosed) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */]("StreamReader closed");
            }
            return _this.readerQueue
                .Dequeue()
                .OnSuccessContinueWith(function (streamChunk) {
                if (streamChunk.IsEnd) {
                    _this.readerQueue.Dispose("End of stream reached");
                }
                return streamChunk;
            });
        };
        this.Close = function () {
            if (!_this.isClosed) {
                _this.isClosed = true;
                _this.readerQueue.Dispose("StreamReader closed");
                _this.onClose();
            }
        };
        this.readerQueue = readerQueue;
        this.onClose = onClose;
        this.streamId = streamId;
    }
    Object.defineProperty(StreamReader.prototype, "IsClosed", {
        get: function () {
            return this.isClosed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StreamReader.prototype, "StreamId", {
        get: function () {
            return this.streamId;
        },
        enumerable: true,
        configurable: true
    });
    return StreamReader;
}());



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CognitiveTokenAuthentication */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IAuthentication__ = __webpack_require__(5);


var AuthHeader = "Authorization";
var CognitiveTokenAuthentication = (function () {
    function CognitiveTokenAuthentication(fetchCallback, fetchOnExpiryCallback) {
        var _this = this;
        this.Fetch = function (authFetchEventId) {
            return _this.fetchCallback(authFetchEventId).OnSuccessContinueWith(function (token) { return new __WEBPACK_IMPORTED_MODULE_1__IAuthentication__["a" /* AuthInfo */](AuthHeader, token); });
        };
        this.FetchOnExpiry = function (authFetchEventId) {
            return _this.fetchOnExpiryCallback(authFetchEventId).OnSuccessContinueWith(function (token) { return new __WEBPACK_IMPORTED_MODULE_1__IAuthentication__["a" /* AuthInfo */](AuthHeader, token); });
        };
        if (!fetchCallback) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("fetchCallback");
        }
        if (!fetchOnExpiryCallback) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("fetchOnExpiryCallback");
        }
        this.fetchCallback = fetchCallback;
        this.fetchOnExpiryCallback = fetchOnExpiryCallback;
    }
    return CognitiveTokenAuthentication;
}());



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recognizer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RecognizerConfig__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ServiceTelemetryListener_Internal__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SpeechConnectionMessage_Internal__ = __webpack_require__(33);





var Recognizer = (function () {
    function Recognizer(authentication, connectionFactory, audioSource, recognizerConfig) {
        var _this = this;
        this.Recognize = function (onEventCallback, speechContextJson) {
            var requestSession = new RequestSession(_this.audioSource.Id(), onEventCallback);
            requestSession.ListenForServiceTelemetry(_this.audioSource.Events);
            return _this.audioSource
                .Attach(requestSession.AudioNodeId)
                .ContinueWithPromise(function (result) {
                if (result.IsError) {
                    requestSession.OnAudioSourceAttachCompleted(null, true, result.Error);
                    throw new Error(result.Error);
                }
                else {
                    requestSession.OnAudioSourceAttachCompleted(result.Result, false);
                }
                var audioNode = result.Result;
                _this.FetchConnection(requestSession)
                    .OnSuccessContinueWith(function (connection) {
                    var messageRetrievalPromise = _this.ReceiveMessage(connection, requestSession);
                    var messageSendPromise = _this.SendSpeechConfig(requestSession.RequestId, connection, _this.recognizerConfig.SpeechConfig.Serialize())
                        .OnSuccessContinueWithPromise(function (_) {
                        return _this.SendSpeechContext(requestSession.RequestId, connection, speechContextJson)
                            .OnSuccessContinueWithPromise(function (_) {
                            return _this.SendAudio(requestSession.RequestId, connection, audioNode, requestSession);
                        });
                    });
                    var completionPromise = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].WhenAll([messageRetrievalPromise, messageSendPromise]);
                    completionPromise.On(function (r) {
                        requestSession.Dispose();
                        _this.SendTelemetryData(requestSession.RequestId, connection, requestSession.GetTelemetry());
                    }, function (error) {
                        requestSession.Dispose(error);
                        _this.SendTelemetryData(requestSession.RequestId, connection, requestSession.GetTelemetry());
                    });
                    return completionPromise;
                });
                return requestSession.CompletionPromise;
            });
        };
        this.FetchConnection = function (requestSession, isUnAuthorized) {
            if (isUnAuthorized === void 0) { isUnAuthorized = false; }
            if (_this.connectionFetchPromise) {
                if (_this.connectionFetchPromise.Result().IsError
                    || _this.connectionFetchPromise.Result().Result.State() === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Disconnected) {
                    _this.connectionId = null;
                    _this.connectionFetchPromise = null;
                    return _this.FetchConnection(requestSession);
                }
                else {
                    requestSession.OnPreConnectionStart(_this.authFetchEventId, _this.connectionId);
                    requestSession.OnConnectionEstablishCompleted(200);
                    requestSession.ListenForServiceTelemetry(_this.connectionFetchPromise.Result().Result.Events);
                    return _this.connectionFetchPromise;
                }
            }
            _this.authFetchEventId = Object(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["s" /* CreateNoDashGuid */])();
            _this.connectionId = Object(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["s" /* CreateNoDashGuid */])();
            requestSession.OnPreConnectionStart(_this.authFetchEventId, _this.connectionId);
            var authPromise = isUnAuthorized ? _this.authentication.FetchOnExpiry(_this.authFetchEventId) : _this.authentication.Fetch(_this.authFetchEventId);
            _this.connectionFetchPromise = authPromise
                .ContinueWithPromise(function (result) {
                if (result.IsError) {
                    requestSession.OnAuthCompleted(true, result.Error);
                    throw new Error(result.Error);
                }
                else {
                    requestSession.OnAuthCompleted(false);
                }
                var connection = _this.connectionFactory.Create(_this.recognizerConfig, result.Result, _this.connectionId);
                requestSession.ListenForServiceTelemetry(connection.Events);
                return connection.Open().OnSuccessContinueWithPromise(function (response) {
                    if (response.StatusCode === 200) {
                        requestSession.OnConnectionEstablishCompleted(response.StatusCode);
                        return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(connection);
                    }
                    else if (response.StatusCode === 403 && !isUnAuthorized) {
                        return _this.FetchConnection(requestSession, true);
                    }
                    else {
                        requestSession.OnConnectionEstablishCompleted(response.StatusCode, response.Reason);
                        return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError("Unable to contact server. StatusCode: " + response.StatusCode + ", Reason: " + response.Reason);
                    }
                });
            });
            return _this.connectionFetchPromise;
        };
        this.ReceiveMessage = function (connection, requestSession) {
            return connection
                .Read()
                .OnSuccessContinueWithPromise(function (message) {
                var connectionMessage = __WEBPACK_IMPORTED_MODULE_4__SpeechConnectionMessage_Internal__["a" /* SpeechConnectionMessage */].FromConnectionMessage(message);
                if (connectionMessage.RequestId.toLowerCase() === requestSession.RequestId.toLowerCase()) {
                    switch (connectionMessage.Path.toLowerCase()) {
                        case "turn.start":
                            requestSession.OnServiceTurnStartResponse(JSON.parse(connectionMessage.TextBody));
                            break;
                        case "speech.startDetected":
                            requestSession.OnServiceSpeechStartDetectedResponse(JSON.parse(connectionMessage.TextBody));
                            break;
                        case "speech.hypothesis":
                            requestSession.OnServiceSpeechHypothesisResponse(JSON.parse(connectionMessage.TextBody));
                            break;
                        case "speech.enddetected":
                            requestSession.OnServiceSpeechEndDetectedResponse(JSON.parse(connectionMessage.TextBody));
                            break;
                        case "speech.phrase":
                            if (_this.recognizerConfig.IsContinuousRecognition) {
                                // For continuous recognition telemetry has to be sent for every phrase as per spec.
                                _this.SendTelemetryData(requestSession.RequestId, connection, requestSession.GetTelemetry());
                            }
                            if (_this.recognizerConfig.Format === __WEBPACK_IMPORTED_MODULE_2__RecognizerConfig__["g" /* SpeechResultFormat */].Simple) {
                                requestSession.OnServiceSimpleSpeechPhraseResponse(JSON.parse(connectionMessage.TextBody));
                            }
                            else {
                                requestSession.OnServiceDetailedSpeechPhraseResponse(JSON.parse(connectionMessage.TextBody));
                            }
                            break;
                        case "turn.end":
                            requestSession.OnServiceTurnEndResponse();
                            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(true);
                        default:
                            break;
                    }
                }
                return _this.ReceiveMessage(connection, requestSession);
            });
        };
        this.SendSpeechConfig = function (requestId, connection, speechConfigJson) {
            if (speechConfigJson && _this.connectionId !== _this.speechConfigConnectionId) {
                _this.speechConfigConnectionId = _this.connectionId;
                return connection
                    .Send(new __WEBPACK_IMPORTED_MODULE_4__SpeechConnectionMessage_Internal__["a" /* SpeechConnectionMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text, "speech.config", requestId, "application/json", speechConfigJson));
            }
            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(true);
        };
        this.SendSpeechContext = function (requestId, connection, speechContextJson) {
            if (speechContextJson) {
                return connection
                    .Send(new __WEBPACK_IMPORTED_MODULE_4__SpeechConnectionMessage_Internal__["a" /* SpeechConnectionMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text, "speech.context", requestId, "application/json", speechContextJson));
            }
            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(true);
        };
        this.SendTelemetryData = function (requestId, connection, telemetryData) {
            return connection
                .Send(new __WEBPACK_IMPORTED_MODULE_4__SpeechConnectionMessage_Internal__["a" /* SpeechConnectionMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text, "telemetry", requestId, "application/json", telemetryData));
        };
        this.SendAudio = function (requestId, connection, audioStreamNode, requestSession) {
            return audioStreamNode
                .Read()
                .OnSuccessContinueWithPromise(function (audioStreamChunk) {
                if (requestSession.IsSpeechEnded) {
                    // If service already recognized audio end then dont send any more audio
                    return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(true);
                }
                else if (audioStreamChunk.IsEnd) {
                    return connection
                        .Send(new __WEBPACK_IMPORTED_MODULE_4__SpeechConnectionMessage_Internal__["a" /* SpeechConnectionMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Binary, "audio", requestId, null, null));
                }
                else {
                    return connection
                        .Send(new __WEBPACK_IMPORTED_MODULE_4__SpeechConnectionMessage_Internal__["a" /* SpeechConnectionMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Binary, "audio", requestId, null, audioStreamChunk.Buffer))
                        .OnSuccessContinueWithPromise(function (_) {
                        return _this.SendAudio(requestId, connection, audioStreamNode, requestSession);
                    });
                }
            });
        };
        if (!authentication) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("authentication");
        }
        if (!connectionFactory) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("connectionFactory");
        }
        if (!audioSource) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("audioSource");
        }
        if (!recognizerConfig) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("recognizerConfig");
        }
        this.authentication = authentication;
        this.connectionFactory = connectionFactory;
        this.audioSource = audioSource;
        this.recognizerConfig = recognizerConfig;
    }
    Object.defineProperty(Recognizer.prototype, "AudioSource", {
        get: function () {
            return this.audioSource;
        },
        enumerable: true,
        configurable: true
    });
    return Recognizer;
}());

// tslint:disable-next-line:max-classes-per-file
var RequestSession = (function () {
    function RequestSession(audioSourceId, onEventCallback) {
        var _this = this;
        this.isDisposed = false;
        this.detachables = new Array();
        this.isAudioNodeDetached = false;
        this.isCompleted = false;
        this.OnAudioSourceAttachCompleted = function (audioNode, isError, error) {
            _this.audioNode = audioNode;
            if (isError) {
                _this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].AudioSourceError, error);
            }
            else {
                _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["b" /* ListeningStartedEvent */](_this.requestId, _this.audioSourceId, _this.audioNodeId));
            }
        };
        this.OnPreConnectionStart = function (authFetchEventId, connectionId) {
            _this.authFetchEventId = authFetchEventId;
            _this.connectionId = connectionId;
            _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["a" /* ConnectingToServiceEvent */](_this.requestId, _this.authFetchEventId, _this.connectionId));
        };
        this.OnAuthCompleted = function (isError, error) {
            if (isError) {
                _this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].AuthTokenFetchError, error);
            }
        };
        this.OnConnectionEstablishCompleted = function (statusCode, reason) {
            if (statusCode === 200) {
                _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["e" /* RecognitionStartedEvent */](_this.RequestId, _this.audioSourceId, _this.audioNodeId, _this.authFetchEventId, _this.connectionId));
                return;
            }
            else if (statusCode === 403) {
                _this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].UnAuthorized, reason);
            }
            else {
                _this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].ConnectError, reason);
            }
        };
        this.OnServiceTurnStartResponse = function (response) {
            if (response && response.context && response.context.serviceTag) {
                _this.serviceTag = response.context.serviceTag;
            }
        };
        this.OnServiceSpeechStartDetectedResponse = function (result) {
            _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["k" /* SpeechStartDetectedEvent */](_this.RequestId, result));
        };
        this.OnServiceSpeechHypothesisResponse = function (result) {
            _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["i" /* SpeechHypothesisEvent */](_this.RequestId, result));
        };
        this.OnServiceSpeechEndDetectedResponse = function (result) {
            _this.DetachAudioNode();
            _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["h" /* SpeechEndDetectedEvent */](_this.RequestId, result));
        };
        this.OnServiceSimpleSpeechPhraseResponse = function (result) {
            _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["j" /* SpeechSimplePhraseEvent */](_this.RequestId, result));
        };
        this.OnServiceDetailedSpeechPhraseResponse = function (result) {
            _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["g" /* SpeechDetailedPhraseEvent */](_this.RequestId, result));
        };
        this.OnServiceTurnEndResponse = function () {
            _this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].Success);
        };
        this.OnConnectionError = function (error) {
            _this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].UnknownError, error);
        };
        this.Dispose = function (error) {
            if (!_this.isDisposed) {
                // we should have completed by now. If we did not its an unknown error.
                _this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].UnknownError, error);
                _this.isDisposed = true;
                for (var _i = 0, _a = _this.detachables; _i < _a.length; _i++) {
                    var detachable = _a[_i];
                    detachable.Detach();
                }
                _this.serviceTelemetryListener.Dispose();
            }
        };
        this.GetTelemetry = function () {
            return _this.serviceTelemetryListener.GetTelemetry();
        };
        this.OnComplete = function (status, error) {
            if (!_this.isCompleted) {
                _this.isCompleted = true;
                _this.DetachAudioNode();
                _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["d" /* RecognitionEndedEvent */](_this.RequestId, _this.audioSourceId, _this.audioNodeId, _this.authFetchEventId, _this.connectionId, _this.serviceTag, status, error ? error : ""));
            }
        };
        this.DetachAudioNode = function () {
            if (!_this.isAudioNodeDetached) {
                _this.isAudioNodeDetached = true;
                if (_this.audioNode) {
                    _this.audioNode.Detach();
                }
            }
        };
        this.OnEvent = function (event) {
            _this.serviceTelemetryListener.OnEvent(event);
            __WEBPACK_IMPORTED_MODULE_0__common_Exports__["w" /* Events */].Instance.OnEvent(event);
            if (_this.onEventCallback) {
                _this.onEventCallback(event);
            }
        };
        this.audioSourceId = audioSourceId;
        this.onEventCallback = onEventCallback;
        this.requestId = Object(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["s" /* CreateNoDashGuid */])();
        this.audioNodeId = Object(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["s" /* CreateNoDashGuid */])();
        this.requestCompletionDeferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
        this.serviceTelemetryListener = new __WEBPACK_IMPORTED_MODULE_3__ServiceTelemetryListener_Internal__["a" /* ServiceTelemetryListener */](this.requestId, this.audioSourceId, this.audioNodeId);
        this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["f" /* RecognitionTriggeredEvent */](this.RequestId, this.audioSourceId, this.audioNodeId));
    }
    Object.defineProperty(RequestSession.prototype, "RequestId", {
        get: function () {
            return this.requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestSession.prototype, "AudioNodeId", {
        get: function () {
            return this.audioNodeId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestSession.prototype, "CompletionPromise", {
        get: function () {
            return this.requestCompletionDeferral.Promise();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestSession.prototype, "IsSpeechEnded", {
        get: function () {
            return this.isAudioNodeDetached;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequestSession.prototype, "IsCompleted", {
        get: function () {
            return this.isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    RequestSession.prototype.ListenForServiceTelemetry = function (eventSource) {
        this.detachables.push(eventSource.AttachListener(this.serviceTelemetryListener));
    };
    return RequestSession;
}());


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceTelemetryListener; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__ = __webpack_require__(6);


// tslint:disable-next-line:max-classes-per-file
var ServiceTelemetryListener = (function () {
    function ServiceTelemetryListener(requestId, audioSourceId, audioNodeId) {
        var _this = this;
        this.isDisposed = false;
        this.listeningTriggerMetric = null;
        this.micMetric = null;
        this.connectionEstablishMetric = null;
        this.OnEvent = function (e) {
            if (_this.isDisposed) {
                return;
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["f" /* RecognitionTriggeredEvent */] && e.RequestId === _this.requestId) {
                _this.listeningTriggerMetric = {
                    End: e.EventTime,
                    Name: "ListeningTrigger",
                    Start: e.EventTime,
                };
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["g" /* AudioStreamNodeAttachingEvent */] && e.AudioSourceId === _this.audioSourceId && e.AudioNodeId === _this.audioNodeId) {
                _this.micStartTime = e.EventTime;
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["f" /* AudioStreamNodeAttachedEvent */] && e.AudioSourceId === _this.audioSourceId && e.AudioNodeId === _this.audioNodeId) {
                _this.micStartTime = e.EventTime;
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["b" /* AudioSourceErrorEvent */] && e.AudioSourceId === _this.audioSourceId) {
                if (!_this.micMetric) {
                    _this.micMetric = {
                        End: e.EventTime,
                        Error: e.Error,
                        Name: "Microphone",
                        Start: _this.micStartTime,
                    };
                }
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["i" /* AudioStreamNodeErrorEvent */] && e.AudioSourceId === _this.audioSourceId && e.AudioNodeId === _this.audioNodeId) {
                if (!_this.micMetric) {
                    _this.micMetric = {
                        End: e.EventTime,
                        Error: e.Error,
                        Name: "Microphone",
                        Start: _this.micStartTime,
                    };
                }
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["h" /* AudioStreamNodeDetachedEvent */] && e.AudioSourceId === _this.audioSourceId && e.AudioNodeId === _this.audioNodeId) {
                if (!_this.micMetric) {
                    _this.micMetric = {
                        End: e.EventTime,
                        Name: "Microphone",
                        Start: _this.micStartTime,
                    };
                }
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["a" /* ConnectingToServiceEvent */] && e.RequestId === _this.requestId) {
                _this.connectionId = e.ConnectionId;
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["q" /* ConnectionStartEvent */] && e.ConnectionId === _this.connectionId) {
                _this.connectionStartTime = e.EventTime;
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["l" /* ConnectionEstablishedEvent */] && e.ConnectionId === _this.connectionId) {
                if (!_this.connectionEstablishMetric) {
                    _this.connectionEstablishMetric = {
                        End: e.EventTime,
                        Id: _this.connectionId,
                        Name: "Connection",
                        Start: _this.connectionStartTime,
                    };
                }
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["k" /* ConnectionEstablishErrorEvent */] && e.ConnectionId === _this.connectionId) {
                if (!_this.connectionEstablishMetric) {
                    _this.connectionEstablishMetric = {
                        End: e.EventTime,
                        Error: _this.GetConnectionError(e.StatusCode),
                        Id: _this.connectionId,
                        Name: "Connection",
                        Start: _this.connectionStartTime,
                    };
                }
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["n" /* ConnectionMessageReceivedEvent */] && e.ConnectionId === _this.connectionId) {
                if (e.Message && e.Message.Headers && e.Message.Headers.path) {
                    if (!_this.receivedMessages[e.Message.Headers.path]) {
                        _this.receivedMessages[e.Message.Headers.path] = new Array();
                    }
                    _this.receivedMessages[e.Message.Headers.path].push(e.NetworkReceivedTime);
                }
            }
        };
        this.GetTelemetry = function () {
            var metrics = new Array();
            if (_this.listeningTriggerMetric) {
                metrics.push(_this.listeningTriggerMetric);
            }
            if (_this.micMetric) {
                metrics.push(_this.micMetric);
            }
            if (_this.connectionEstablishMetric) {
                metrics.push(_this.connectionEstablishMetric);
            }
            var telemetry = {
                Metrics: metrics,
                ReceivedMessages: _this.receivedMessages,
            };
            var json = JSON.stringify(telemetry);
            // We dont want to send the same telemetry again. So clean those out.
            _this.receivedMessages = {};
            _this.listeningTriggerMetric = null;
            _this.micMetric = null;
            _this.connectionEstablishMetric = null;
            return json;
        };
        this.Dispose = function () {
            _this.isDisposed = true;
        };
        this.GetConnectionError = function (statusCode) {
            /*
            -- Websocket status codes --
            NormalClosure = 1000,
            EndpointUnavailable = 1001,
            ProtocolError = 1002,
            InvalidMessageType = 1003,
            Empty = 1005,
            InvalidPayloadData = 1007,
            PolicyViolation = 1008,
            MessageTooBig = 1009,
            MandatoryExtension = 1010,
            InternalServerError = 1011
            */
            switch (statusCode) {
                case 400:
                case 1002:
                case 1003:
                case 1005:
                case 1007:
                case 1008:
                case 1009: return "BadRequest";
                case 401: return "Unauthorized";
                case 403: return "Forbidden";
                case 503:
                case 1001: return "ServerUnavailable";
                case 500:
                case 1011: return "ServerError";
                case 408:
                case 504: return "Timeout";
                default: return "statuscode:" + statusCode.toString();
            }
        };
        this.requestId = requestId;
        this.audioSourceId = audioSourceId;
        this.audioNodeId = audioNodeId;
        this.receivedMessages = {};
    }
    return ServiceTelemetryListener;
}());



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechConnectionMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PathHeaderName = "path";
var ContentTypeHeaderName = "content-type";
var RequestIdHeaderName = "x-requestid";
var RequestTimestampHeaderName = "x-timestamp";
var SpeechConnectionMessage = (function (_super) {
    __extends(SpeechConnectionMessage, _super);
    function SpeechConnectionMessage(messageType, path, requestId, contentType, body, additionalHeaders, id) {
        var _this = this;
        if (!path) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("path");
        }
        if (!requestId) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("requestId");
        }
        var headers = {};
        headers[PathHeaderName] = path;
        headers[RequestIdHeaderName] = requestId;
        headers[RequestTimestampHeaderName] = new Date().toISOString();
        if (contentType) {
            headers[ContentTypeHeaderName] = contentType;
        }
        if (additionalHeaders) {
            for (var headerName in additionalHeaders) {
                if (headerName) {
                    headers[headerName] = additionalHeaders[headerName];
                }
            }
        }
        if (id) {
            _this = _super.call(this, messageType, body, headers, id) || this;
        }
        else {
            _this = _super.call(this, messageType, body, headers) || this;
        }
        _this.path = path;
        _this.requestId = requestId;
        _this.contentType = contentType;
        _this.additionalHeaders = additionalHeaders;
        return _this;
    }
    Object.defineProperty(SpeechConnectionMessage.prototype, "Path", {
        get: function () {
            return this.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConnectionMessage.prototype, "RequestId", {
        get: function () {
            return this.requestId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConnectionMessage.prototype, "ContentType", {
        get: function () {
            return this.contentType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechConnectionMessage.prototype, "AdditionalHeaders", {
        get: function () {
            return this.additionalHeaders;
        },
        enumerable: true,
        configurable: true
    });
    SpeechConnectionMessage.FromConnectionMessage = function (message) {
        var path = null;
        var requestId = null;
        var contentType = null;
        var requestTimestamp = null;
        var additionalHeaders = {};
        if (message.Headers) {
            for (var headerName in message.Headers) {
                if (headerName) {
                    if (headerName.toLowerCase() === PathHeaderName.toLowerCase()) {
                        path = message.Headers[headerName];
                    }
                    else if (headerName.toLowerCase() === RequestIdHeaderName.toLowerCase()) {
                        requestId = message.Headers[headerName];
                    }
                    else if (headerName.toLowerCase() === RequestTimestampHeaderName.toLowerCase()) {
                        requestTimestamp = message.Headers[headerName];
                    }
                    else if (headerName.toLowerCase() === ContentTypeHeaderName.toLowerCase()) {
                        contentType = message.Headers[headerName];
                    }
                    else {
                        additionalHeaders[headerName] = message.Headers[headerName];
                    }
                }
            }
        }
        return new SpeechConnectionMessage(message.MessageType, path, requestId, contentType, message.Body, additionalHeaders, message.Id);
    };
    return SpeechConnectionMessage;
}(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["m" /* ConnectionMessage */]));



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RecognitionStatus */
var RecognitionStatus;
(function (RecognitionStatus) {
    RecognitionStatus[RecognitionStatus["Success"] = 0] = "Success";
    RecognitionStatus[RecognitionStatus["NoMatch"] = 1] = "NoMatch";
    RecognitionStatus[RecognitionStatus["InitialSilenceTimeout"] = 2] = "InitialSilenceTimeout";
    RecognitionStatus[RecognitionStatus["BabbleTimeout"] = 3] = "BabbleTimeout";
    RecognitionStatus[RecognitionStatus["Error"] = 4] = "Error";
    RecognitionStatus[RecognitionStatus["EndOfDictation"] = 5] = "EndOfDictation";
})(RecognitionStatus || (RecognitionStatus = {}));


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketMessageFormatter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

var CRLF = "\r\n";
var WebsocketMessageFormatter = (function () {
    function WebsocketMessageFormatter() {
        var _this = this;
        this.ToConnectionMessage = function (message) {
            var deferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            try {
                if (message.MessageType === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text) {
                    var textMessage = message.TextContent;
                    var headers = {};
                    var body = null;
                    if (textMessage) {
                        var headerBodySplit = textMessage.split("\r\n\r\n");
                        if (headerBodySplit && headerBodySplit.length > 0) {
                            headers = _this.ParseHeaders(headerBodySplit[0]);
                            if (headerBodySplit.length > 1) {
                                body = headerBodySplit[1];
                            }
                        }
                    }
                    deferral.Resolve(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["m" /* ConnectionMessage */](message.MessageType, body, headers, message.Id));
                }
                else if (message.MessageType === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Binary) {
                    var binaryMessage = message.BinaryContent;
                    var headers = {};
                    var body = null;
                    if (!binaryMessage || binaryMessage.byteLength < 2) {
                        throw new Error("Invalid binary message format. Header length missing.");
                    }
                    var dataView = new DataView(binaryMessage);
                    var headerLength = dataView.getInt16(0);
                    if (binaryMessage.byteLength < headerLength + 2) {
                        throw new Error("Invalid binary message format. Header content missing.");
                    }
                    var headersString = "";
                    for (var i = 0; i < headerLength; i++) {
                        headersString += String.fromCharCode((dataView).getInt8(i + 2));
                    }
                    headers = _this.ParseHeaders(headersString);
                    if (binaryMessage.byteLength > headerLength + 2) {
                        body = binaryMessage.slice(2 + headerLength);
                    }
                    deferral.Resolve(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["m" /* ConnectionMessage */](message.MessageType, body, headers, message.Id));
                }
            }
            catch (e) {
                deferral.Reject("Error formatting the message. Error: " + e);
            }
            return deferral.Promise();
        };
        this.FromConnectionMessage = function (message) {
            var deferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            try {
                if (message.MessageType === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text) {
                    var payload = "" + _this.MakeHeaders(message) + CRLF + (message.TextBody ? message.TextBody : "");
                    deferral.Resolve(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["B" /* RawWebsocketMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text, payload, message.Id));
                }
                else if (message.MessageType === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Binary) {
                    var headersString = _this.MakeHeaders(message);
                    var content_1 = message.BinaryBody;
                    var fr_1 = new FileReader();
                    fr_1.onload = function () {
                        var headerInt8Array = new Int8Array(fr_1.result);
                        var payload = new ArrayBuffer(2 + headerInt8Array.byteLength + (content_1 ? content_1.byteLength : 0));
                        var dataView = new DataView(payload);
                        dataView.setInt16(0, headerInt8Array.length);
                        for (var i = 0; i < headerInt8Array.byteLength; i++) {
                            dataView.setInt8(2 + i, headerInt8Array[i]);
                        }
                        if (content_1) {
                            var bodyInt8Array = new Int8Array(content_1);
                            for (var i = 0; i < bodyInt8Array.byteLength; i++) {
                                dataView.setInt8(2 + headerInt8Array.byteLength + i, bodyInt8Array[i]);
                            }
                        }
                        deferral.Resolve(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["B" /* RawWebsocketMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Binary, payload, message.Id));
                    };
                    fr_1.onerror = function () {
                        deferral.Reject("failed to load headers into file reader");
                    };
                    fr_1.readAsArrayBuffer(new Blob([headersString]));
                }
            }
            catch (e) {
                deferral.Reject("Error formatting the message. " + e);
            }
            return deferral.Promise();
        };
        this.MakeHeaders = function (message) {
            var headersString = "";
            if (message.Headers) {
                for (var header in message.Headers) {
                    if (header) {
                        headersString += header + ": " + message.Headers[header] + CRLF;
                    }
                }
            }
            return headersString;
        };
        this.ParseHeaders = function (headersString) {
            var headers = {};
            if (headersString) {
                var headerMatches = headersString.match(/[^\r\n]+/g);
                if (headers) {
                    for (var _i = 0, headerMatches_1 = headerMatches; _i < headerMatches_1.length; _i++) {
                        var header = headerMatches_1[_i];
                        if (header) {
                            var seperatorIndex = header.indexOf(":");
                            var headerName = seperatorIndex > 0 ? header.substr(0, seperatorIndex).trim().toLowerCase() : header;
                            var headerValue = seperatorIndex > 0 && header.length > (seperatorIndex + 1) ?
                                header.substr(seperatorIndex + 1).trim() :
                                "";
                            headers[headerName] = headerValue;
                        }
                    }
                }
            }
            return headers;
        };
    }
    return WebsocketMessageFormatter;
}());



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Recognizer__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Recognizer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SpeechConnectionFactory__ = __webpack_require__(16);
/* unused harmony namespace reexport */




/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRecognizer; });
/* unused harmony export CreateRecognizerWithPcmRecorder */
/* unused harmony export CreateRecognizerWithCustomAudioSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_browser_Exports__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_Exports__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SpeechConnectionFactory__ = __webpack_require__(16);



var CreateRecognizer = function (recognizerConfig, authentication) {
    return CreateRecognizerWithPcmRecorder(recognizerConfig, authentication);
};
var CreateRecognizerWithPcmRecorder = function (recognizerConfig, authentication) {
    return CreateRecognizerWithCustomAudioSource(recognizerConfig, authentication, new __WEBPACK_IMPORTED_MODULE_0__common_browser_Exports__["a" /* MicAudioSource */](new __WEBPACK_IMPORTED_MODULE_0__common_browser_Exports__["b" /* PcmRecorder */]()));
};
var CreateRecognizerWithCustomAudioSource = function (recognizerConfig, authentication, audioSource) {
    return new __WEBPACK_IMPORTED_MODULE_1__speech_Exports__["f" /* Recognizer */](authentication, new __WEBPACK_IMPORTED_MODULE_2__SpeechConnectionFactory__["a" /* SpeechConnectionFactory */](), audioSource, recognizerConfig);
};



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConsoleLoggingListener */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

var ConsoleLoggingListener = (function () {
    function ConsoleLoggingListener(logLevelFilter) {
        if (logLevelFilter === void 0) { logLevelFilter = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["v" /* EventType */].Warning; }
        var _this = this;
        this.OnEvent = function (event) {
            if (event.EventType >= _this.logLevelFilter) {
                var log = _this.ToString(event);
                switch (event.EventType) {
                    case __WEBPACK_IMPORTED_MODULE_0__common_Exports__["v" /* EventType */].Debug:
                        // tslint:disable-next-line:no-console
                        console.debug(log);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_0__common_Exports__["v" /* EventType */].Info:
                        // tslint:disable-next-line:no-console
                        console.info(log);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_0__common_Exports__["v" /* EventType */].Warning:
                        // tslint:disable-next-line:no-console
                        console.warn(log);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_0__common_Exports__["v" /* EventType */].Error:
                        // tslint:disable-next-line:no-console
                        console.error(log);
                        break;
                    default:
                        // tslint:disable-next-line:no-console
                        console.log(log);
                        break;
                }
            }
        };
        this.ToString = function (event) {
            var logFragments = [
                "" + event.EventTime,
                "" + event.Name,
            ];
            for (var prop in event) {
                if (prop && event.hasOwnProperty(prop) && prop !== "eventTime" && prop !== "eventType" && prop !== "eventId" && prop !== "name" && prop !== "constructor") {
                    var value = event[prop];
                    var valueToLog = "<NULL>";
                    if (value !== undefined && value !== null) {
                        if (typeof (value) === "number" || typeof (value) === "string") {
                            valueToLog = value.toString();
                        }
                        else {
                            valueToLog = JSON.stringify(value);
                        }
                    }
                    logFragments.push(prop + ": " + valueToLog);
                }
            }
            return logFragments.join(" | ");
        };
        this.logLevelFilter = logLevelFilter;
    }
    return ConsoleLoggingListener;
}());



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LocalStorage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

var LocalStorage = (function () {
    function LocalStorage() {
        this.Get = function (key) {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            return localStorage.getItem(key);
        };
        this.GetOrAdd = function (key, valueToAdd) {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            var value = localStorage.getItem(key);
            if (value === null || value === undefined) {
                localStorage.setItem(key, valueToAdd);
            }
            return localStorage.getItem(key);
        };
        this.Set = function (key, value) {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            localStorage.setItem(key, value);
        };
        this.Remove = function (key) {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            localStorage.removeItem(key);
        };
    }
    return LocalStorage;
}());



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MicAudioSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

var MicAudioSource = (function () {
    function MicAudioSource(recorder, audioSourceId) {
        var _this = this;
        this.streams = {};
        this.TurnOn = function () {
            if (_this.initializeDeferral) {
                return _this.initializeDeferral.Promise();
            }
            _this.initializeDeferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            var nav = window.navigator;
            window.navigator.getUserMedia = (window.navigator.getUserMedia ||
                window.navigator.webkitGetUserMedia ||
                window.navigator.mozGetUserMedia ||
                window.navigator.msGetUserMedia);
            if (!window.navigator.getUserMedia) {
                var errorMsg = "Browser doesnot support getUserMedia.";
                _this.initializeDeferral.Reject(errorMsg);
                _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["b" /* AudioSourceErrorEvent */](errorMsg, "")); // mic initialized error - no streamid at this point
            }
            else {
                _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["c" /* AudioSourceInitializingEvent */](_this.id)); // no stream id
                window.navigator.getUserMedia({ audio: true }, function (mediaStream) {
                    _this.mediaStream = mediaStream;
                    _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["e" /* AudioSourceReadyEvent */](_this.id));
                    _this.initializeDeferral.Resolve(true);
                }, function (error) {
                    var errorMsg = "Error occured processing the user media stream. " + error;
                    _this.initializeDeferral.Reject(errorMsg);
                    _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["b" /* AudioSourceErrorEvent */](_this.id, errorMsg));
                });
            }
            return _this.initializeDeferral.Promise();
        };
        this.Id = function () {
            return _this.id;
        };
        this.Attach = function (audioNodeId) {
            _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["g" /* AudioStreamNodeAttachingEvent */](_this.id, audioNodeId));
            return _this.Listen(audioNodeId).OnSuccessContinueWith(function (streamReader) {
                _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["f" /* AudioStreamNodeAttachedEvent */](_this.id, audioNodeId));
                return {
                    Detach: function () {
                        streamReader.Close();
                        delete _this.streams[audioNodeId];
                        _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["h" /* AudioStreamNodeDetachedEvent */](_this.id, audioNodeId));
                        _this.TurnOff();
                    },
                    Id: function () {
                        return audioNodeId;
                    },
                    Read: function () {
                        return streamReader.Read();
                    },
                };
            });
        };
        this.Detach = function (audioNodeId) {
            if (audioNodeId && _this.streams[audioNodeId]) {
                _this.streams[audioNodeId].Close();
                delete _this.streams[audioNodeId];
                _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["h" /* AudioStreamNodeDetachedEvent */](_this.id, audioNodeId));
            }
        };
        this.TurnOff = function () {
            for (var streamId in _this.streams) {
                if (streamId) {
                    var stream = _this.streams[streamId];
                    if (stream) {
                        stream.Close();
                    }
                }
            }
            _this.recorder.ReleaseMediaResources();
            _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["d" /* AudioSourceOffEvent */](_this.id)); // no stream now
            _this.initializeDeferral = null;
            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(true);
        };
        this.Listen = function (audioNodeId) {
            return _this.TurnOn()
                .OnSuccessContinueWith(function (_) {
                var stream = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["E" /* Stream */](audioNodeId);
                _this.streams[audioNodeId] = stream;
                try {
                    _this.recorder.Record(_this.mediaStream, stream);
                }
                catch (error) {
                    var errorMsg = "Error occured processing the user media stream. " + error;
                    _this.initializeDeferral.Reject(errorMsg);
                    _this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["i" /* AudioStreamNodeErrorEvent */](_this.id, audioNodeId, error));
                }
                return stream.GetReader();
            });
        };
        this.OnEvent = function (event) {
            _this.events.OnEvent(event);
            __WEBPACK_IMPORTED_MODULE_0__common_Exports__["w" /* Events */].Instance.OnEvent(event);
        };
        this.id = audioSourceId ? audioSourceId : Object(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["s" /* CreateNoDashGuid */])();
        this.events = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["u" /* EventSource */]();
        this.recorder = recorder;
    }
    Object.defineProperty(MicAudioSource.prototype, "Events", {
        get: function () {
            return this.events;
        },
        enumerable: true,
        configurable: true
    });
    return MicAudioSource;
}());



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OpusRecorder */
var OpusRecorder = (function () {
    function OpusRecorder(options) {
        var _this = this;
        this.Record = function (mediaStream, outputStream) {
            var mediaRecorder = new MediaRecorder(mediaStream, _this.mediaRecorderOptions);
            var timeslice = 100; // this is in ms - 100 ensures that the chunk doesn't exceed the max size of chunk allowed in WS connection
            mediaRecorder.ondataavailable = function (dataAvailableEvent) {
                if (outputStream) {
                    var reader_1 = new FileReader();
                    reader_1.readAsArrayBuffer(dataAvailableEvent.data);
                    reader_1.onloadend = function (event) {
                        outputStream.Write(reader_1.result);
                    };
                }
            };
            _this.mediaResources = {
                recorder: mediaRecorder,
                stream: mediaStream,
            };
            mediaRecorder.start(timeslice);
        };
        this.ReleaseMediaResources = function () {
            if (_this.mediaResources.recorder.state !== "inactive") {
                _this.mediaResources.recorder.stop();
            }
            _this.mediaResources.stream.getTracks().forEach(function (track) { return track.stop(); });
        };
        this.mediaRecorderOptions = options;
    }
    return OpusRecorder;
}());

/* Declaring this inline to avoid compiler warnings
declare class MediaRecorder {
    constructor(mediaStream: MediaStream, options: any);

    public state: string;

    public ondataavailable(dataAvailableEvent: any): void;
    public stop(): void;
}*/


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PcmRecorder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

var PcmRecorder = (function () {
    function PcmRecorder() {
        var _this = this;
        this.Record = function (mediaStream, outputStream) {
            // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
            var audioContext = new AudioContext();
            // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource
            var mediaStreamSource = audioContext.createMediaStreamSource(mediaStream);
            var desiredSampleRate = 16000;
            // let compressionRatio = mediaStreamSource.context.sampleRate / desiredSampleRate;
            var bufferSize = 2048;
            var isFirstFrameWritten = false;
            if (desiredSampleRate * 4 <= mediaStreamSource.context.sampleRate) {
                bufferSize = 8192;
            }
            else if (desiredSampleRate * 2 <= mediaStreamSource.context.sampleRate) {
                bufferSize = 4096;
            }
            // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createScriptProcessor
            var scriptNode = mediaStreamSource.context.createScriptProcessor(bufferSize, 1, 1);
            var waveStreamEncoder = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["C" /* RiffPcmEncoder */](mediaStreamSource.context.sampleRate, desiredSampleRate);
            scriptNode.onaudioprocess = function (audioProcessingEvent) {
                var monoAudioChunk = audioProcessingEvent.inputBuffer.getChannelData(0);
                var encodedAudioFrameWithRiffHeader;
                var encodedAudioFrame;
                if (outputStream) {
                    if (isFirstFrameWritten) {
                        if (!encodedAudioFrame) {
                            encodedAudioFrame = waveStreamEncoder.Encode(false, monoAudioChunk);
                        }
                        outputStream.Write(encodedAudioFrame);
                    }
                    else {
                        if (!encodedAudioFrameWithRiffHeader) {
                            encodedAudioFrameWithRiffHeader =
                                waveStreamEncoder.Encode(true, monoAudioChunk);
                        }
                        outputStream.Write(encodedAudioFrameWithRiffHeader);
                        isFirstFrameWritten = true;
                    }
                }
            };
            _this.mediaResources = {
                context: audioContext,
                scriptProcessorNode: scriptNode,
                source: mediaStreamSource,
                stream: mediaStream,
            };
            mediaStreamSource.connect(scriptNode);
            scriptNode.connect(mediaStreamSource.context.destination);
        };
        this.ReleaseMediaResources = function () {
            if (_this.mediaResources) {
                if (_this.mediaResources.scriptProcessorNode) {
                    _this.mediaResources.scriptProcessorNode.disconnect();
                    _this.mediaResources.scriptProcessorNode = null;
                }
                if (_this.mediaResources.source) {
                    _this.mediaResources.source.disconnect();
                    _this.mediaResources.stream.getTracks().forEach(function (track) { return track.stop(); });
                    _this.mediaResources.source = null;
                }
                if (_this.mediaResources.context && _this.mediaResources.context.state !== "closed") {
                    _this.mediaResources.context.close();
                }
            }
        };
    }
    return PcmRecorder;
}());



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SessionStorage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

var SessionStorage = (function () {
    function SessionStorage() {
        this.Get = function (key) {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            return sessionStorage.getItem(key);
        };
        this.GetOrAdd = function (key, valueToAdd) {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            var value = sessionStorage.getItem(key);
            if (value === null || value === undefined) {
                sessionStorage.setItem(key, valueToAdd);
            }
            return sessionStorage.getItem(key);
        };
        this.Set = function (key, value) {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            sessionStorage.setItem(key, value);
        };
        this.Remove = function (key) {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            sessionStorage.removeItem(key);
        };
    }
    return SessionStorage;
}());



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Timer */
var Timer = (function () {
    function Timer(delayInMillisec, successCallback) {
        var _this = this;
        this.start = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            if (_this.timerId) {
                _this.stop();
            }
            _this.timerId = setTimeout(_this.successCallback, _this.delayInMillisec, params);
        };
        this.stop = function () {
            clearTimeout(_this.timerId);
        };
        this.delayInMillisec = delayInMillisec;
        this.successCallback = successCallback;
    }
    return Timer;
}());



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketConnection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WebsocketMessageAdapter__ = __webpack_require__(15);


var WebsocketConnection = (function () {
    function WebsocketConnection(uri, queryParameters, headers, messageFormatter, connectionId) {
        var _this = this;
        this.isDisposed = false;
        this.Dispose = function () {
            _this.isDisposed = true;
            if (_this.connectionMessageAdapter) {
                _this.connectionMessageAdapter.Close();
            }
        };
        this.IsDisposed = function () {
            return _this.isDisposed;
        };
        this.State = function () {
            return _this.connectionMessageAdapter.State;
        };
        this.Open = function () {
            return _this.connectionMessageAdapter.Open();
        };
        this.Send = function (message) {
            return _this.connectionMessageAdapter.Send(message);
        };
        this.Read = function () {
            return _this.connectionMessageAdapter.Read();
        };
        if (!uri) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("uri");
        }
        if (!messageFormatter) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("messageFormatter");
        }
        this.messageFormatter = messageFormatter;
        var queryParams = "";
        var i = 0;
        if (queryParameters) {
            for (var paramName in queryParameters) {
                if (paramName) {
                    queryParams += i === 0 ? "?" : "&";
                    var val = encodeURIComponent(queryParameters[paramName]);
                    queryParams += paramName + "=" + val;
                    i++;
                }
            }
        }
        if (headers) {
            for (var headerName in headers) {
                if (headerName) {
                    queryParams += i === 0 ? "?" : "&";
                    var val = encodeURIComponent(headers[headerName]);
                    queryParams += headerName + "=" + val;
                    i++;
                }
            }
        }
        this.uri = uri + queryParams;
        this.id = connectionId ? connectionId : Object(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["s" /* CreateNoDashGuid */])();
        this.connectionMessageAdapter = new __WEBPACK_IMPORTED_MODULE_1__WebsocketMessageAdapter__["a" /* WebsocketMessageAdapter */](this.uri, this.Id, this.messageFormatter);
    }
    Object.defineProperty(WebsocketConnection.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebsocketConnection.prototype, "Events", {
        get: function () {
            return this.connectionMessageAdapter.Events;
        },
        enumerable: true,
        configurable: true
    });
    return WebsocketConnection;
}());



/***/ })
/******/ ]);
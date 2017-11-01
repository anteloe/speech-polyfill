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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__AudioSourceEvents__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__ = __webpack_require__(26);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_1__ConnectionEvents__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ConnectionMessage__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__ConnectionMessage__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_2__ConnectionMessage__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ConnectionOpenResponse__ = __webpack_require__(27);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_3__ConnectionOpenResponse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Error__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__Error__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Events__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_5__Events__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__EventSource__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_6__EventSource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Guid__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_7__Guid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__IConnection__ = __webpack_require__(29);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_8__IConnection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__InMemoryStorage__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__List__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__PlatformEvent__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_11__PlatformEvent__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_11__PlatformEvent__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Promise__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_12__Promise__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_12__Promise__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Queue__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_13__Queue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__RawWebsocketMessage__ = __webpack_require__(30);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_14__RawWebsocketMessage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__RiffPcmEncoder__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_15__RiffPcmEncoder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Storage__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_16__Storage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Stream__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_17__Stream__["a"]; });




















/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The error that is thrown when an argument passed in is null.
 *
 * @export
 * @class ArgumentNullError
 * @extends {Error}
 */
class ArgumentNullError extends Error {
    /**
     * Creates an instance of ArgumentNullError.
     *
     * @param {string} argumentName Name of the argument that is null
     *
     * @memberOf ArgumentNullError
     */
    constructor(argumentName) {
        super(argumentName);
        this.name = "ArgumentNull";
        this.message = argumentName;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ArgumentNullError;

/**
 * The error that is thrown when an invalid operation is performed in the code.
 *
 * @export
 * @class InvalidOperationError
 * @extends {Error}
 */
// tslint:disable-next-line:max-classes-per-file
class InvalidOperationError extends Error {
    /**
     * Creates an instance of InvalidOperationError.
     *
     * @param {string} error The error
     *
     * @memberOf InvalidOperationError
     */
    constructor(error) {
        super(error);
        this.name = "InvalidOperation";
        this.message = error;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = InvalidOperationError;

/**
 * The error that is thrown when an object is disposed.
 *
 * @export
 * @class ObjectDisposedError
 * @extends {Error}
 */
// tslint:disable-next-line:max-classes-per-file
class ObjectDisposedError extends Error {
    /**
     * Creates an instance of ObjectDisposedError.
     *
     * @param {string} objectName The object that is disposed
     * @param {string} error The error
     *
     * @memberOf ObjectDisposedError
     */
    constructor(objectName, error) {
        super(error);
        this.name = objectName + "ObjectDisposed";
        this.message = error;
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = ObjectDisposedError;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CreateGuid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNoDashGuid; });
const CreateGuid = () => {
    let d = new Date().getTime();
    const guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return guid;
};
const CreateNoDashGuid = () => {
    return CreateGuid().replace(new RegExp("-", "g"), "").toUpperCase();
};



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CognitiveSubscriptionKeyAuthentication__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__CognitiveSubscriptionKeyAuthentication__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CognitiveTokenAuthentication__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IAuthentication__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RecognitionEvents__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Recognizer__ = __webpack_require__(35);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__Recognizer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__RecognizerConfig__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SpeechResults__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__SpeechResults__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WebsocketMessageFormatter__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__WebsocketMessageFormatter__["a"]; });
// IMPORTANT - Dont publish internal modules.










/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Guid__ = __webpack_require__(2);

var EventType;
(function (EventType) {
    EventType[EventType["Debug"] = 0] = "Debug";
    EventType[EventType["Info"] = 1] = "Info";
    EventType[EventType["Warning"] = 2] = "Warning";
    EventType[EventType["Error"] = 3] = "Error";
})(EventType || (EventType = {}));
class PlatformEvent {
    constructor(eventName, eventType) {
        this.name = eventName;
        this.eventId = Object(__WEBPACK_IMPORTED_MODULE_0__Guid__["a" /* CreateNoDashGuid */])();
        this.eventTime = new Date().toISOString();
        this.eventType = eventType;
        this.metadata = {};
    }
    get Name() {
        return this.name;
    }
    get EventId() {
        return this.eventId;
    }
    get EventTime() {
        return this.eventTime;
    }
    get EventType() {
        return this.eventType;
    }
    get Metadata() {
        return this.metadata;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = PlatformEvent;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AuthInfo {
    constructor(headerName, token) {
        this.headerName = headerName;
        this.token = token;
    }
    get HeaderName() {
        return this.headerName;
    }
    get Token() {
        return this.token;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AuthInfo;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RecognitionCompletionStatus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

class SpeechRecognitionEvent extends __WEBPACK_IMPORTED_MODULE_0__common_Exports__["y" /* PlatformEvent */] {
    constructor(eventName, requestId, eventType = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["v" /* EventType */].Info) {
        super(eventName, eventType);
        this.requestId = requestId;
    }
    get RequestId() {
        return this.requestId;
    }
}
/* unused harmony export SpeechRecognitionEvent */

// tslint:disable-next-line:max-classes-per-file
class SpeechRecognitionResultEvent extends SpeechRecognitionEvent {
    constructor(eventName, requestId, result) {
        super(eventName, requestId);
        this.result = result;
    }
    get Result() {
        return this.result;
    }
}
/* unused harmony export SpeechRecognitionResultEvent */

// tslint:disable-next-line:max-classes-per-file
class RecognitionTriggeredEvent extends SpeechRecognitionEvent {
    constructor(requestId, audioSourceId, audioNodeId) {
        super("RecognitionTriggeredEvent", requestId);
        this.audioSourceId = audioSourceId;
        this.audioNodeId = audioNodeId;
    }
    get AudioSourceId() {
        return this.audioSourceId;
    }
    get AudioNodeId() {
        return this.audioNodeId;
    }
}
/* harmony export (immutable) */ __webpack_exports__["f"] = RecognitionTriggeredEvent;

// tslint:disable-next-line:max-classes-per-file
class ListeningStartedEvent extends SpeechRecognitionEvent {
    constructor(requestId, audioSourceId, audioNodeId) {
        super("ListeningStartedEvent", requestId);
        this.audioSourceId = audioSourceId;
        this.audioNodeId = audioNodeId;
    }
    get AudioSourceId() {
        return this.audioSourceId;
    }
    get AudioNodeId() {
        return this.audioNodeId;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = ListeningStartedEvent;

// tslint:disable-next-line:max-classes-per-file
class ConnectingToServiceEvent extends SpeechRecognitionEvent {
    constructor(requestId, authFetchEventid, connectionId) {
        super("ConnectingToServiceEvent", requestId);
        this.authFetchEventid = authFetchEventid;
        this.connectionId = connectionId;
    }
    get AuthFetchEventid() {
        return this.authFetchEventid;
    }
    get ConnectionId() {
        return this.connectionId;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ConnectingToServiceEvent;

// tslint:disable-next-line:max-classes-per-file
class RecognitionStartedEvent extends SpeechRecognitionEvent {
    constructor(requestId, audioSourceId, audioNodeId, authFetchEventId, connectionId) {
        super("RecognitionStartedEvent", requestId);
        this.audioSourceId = audioSourceId;
        this.audioNodeId = audioNodeId;
        this.authFetchEventId = authFetchEventId;
        this.connectionId = connectionId;
    }
    get AudioSourceId() {
        return this.audioSourceId;
    }
    get AudioNodeId() {
        return this.audioNodeId;
    }
    get AuthFetchEventId() {
        return this.authFetchEventId;
    }
    get ConnectionId() {
        return this.connectionId;
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = RecognitionStartedEvent;

// tslint:disable-next-line:max-classes-per-file
class SpeechStartDetectedEvent extends SpeechRecognitionResultEvent {
    constructor(requestId, result) {
        super("SpeechStartDetectedEvent", requestId, result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["l"] = SpeechStartDetectedEvent;

// tslint:disable-next-line:max-classes-per-file
class SpeechHypothesisEvent extends SpeechRecognitionResultEvent {
    constructor(requestId, result) {
        super("SpeechHypothesisEvent", requestId, result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["j"] = SpeechHypothesisEvent;

// tslint:disable-next-line:max-classes-per-file
class SpeechFragmentEvent extends SpeechRecognitionResultEvent {
    constructor(requestId, result) {
        super("SpeechFragmentEvent", requestId, result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["i"] = SpeechFragmentEvent;

// tslint:disable-next-line:max-classes-per-file
class SpeechEndDetectedEvent extends SpeechRecognitionResultEvent {
    constructor(requestId, result) {
        super("SpeechEndDetectedEvent", requestId, result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["h"] = SpeechEndDetectedEvent;

// tslint:disable-next-line:max-classes-per-file
class SpeechSimplePhraseEvent extends SpeechRecognitionResultEvent {
    constructor(requestId, result) {
        super("SpeechSimplePhraseEvent", requestId, result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["k"] = SpeechSimplePhraseEvent;

// tslint:disable-next-line:max-classes-per-file
class SpeechDetailedPhraseEvent extends SpeechRecognitionResultEvent {
    constructor(requestId, result) {
        super("SpeechDetailedPhraseEvent", requestId, result);
    }
}
/* harmony export (immutable) */ __webpack_exports__["g"] = SpeechDetailedPhraseEvent;

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
class RecognitionEndedEvent extends SpeechRecognitionEvent {
    constructor(requestId, audioSourceId, audioNodeId, authFetchEventId, connectionId, serviceTag, status, error) {
        super("RecognitionEndedEvent", requestId, status === RecognitionCompletionStatus.Success ? __WEBPACK_IMPORTED_MODULE_0__common_Exports__["v" /* EventType */].Info : __WEBPACK_IMPORTED_MODULE_0__common_Exports__["v" /* EventType */].Error);
        this.audioSourceId = audioSourceId;
        this.audioNodeId = audioNodeId;
        this.connectionId = connectionId;
        this.authFetchEventId = authFetchEventId;
        this.status = status;
        this.error = error;
        this.serviceTag = serviceTag;
    }
    get AudioSourceId() {
        return this.audioSourceId;
    }
    get AudioNodeId() {
        return this.audioNodeId;
    }
    get AuthFetchEventId() {
        return this.authFetchEventId;
    }
    get ConnectionId() {
        return this.connectionId;
    }
    get ServiceTag() {
        return this.serviceTag;
    }
    get Status() {
        return this.status;
    }
    get Error() {
        return this.error;
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = RecognitionEndedEvent;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConsoleLoggingListener__ = __webpack_require__(42);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LocalStorage__ = __webpack_require__(43);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MicAudioSource__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__MicAudioSource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FileAudioSource__ = __webpack_require__(45);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__FileAudioSource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OpusRecorder__ = __webpack_require__(46);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PCMRecorder__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__PCMRecorder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SessionStorage__ = __webpack_require__(48);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Timer__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__Timer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WebsocketConnection__ = __webpack_require__(50);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__WebsocketConnection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__WebsocketMessageAdapter__ = __webpack_require__(15);
/* unused harmony namespace reexport */












/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MessageType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Guid__ = __webpack_require__(2);


var MessageType;
(function (MessageType) {
    MessageType[MessageType["Text"] = 0] = "Text";
    MessageType[MessageType["Binary"] = 1] = "Binary";
})(MessageType || (MessageType = {}));
class ConnectionMessage {
    constructor(messageType, body, headers, id) {
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
    get MessageType() {
        return this.messageType;
    }
    get Headers() {
        return this.headers;
    }
    get Body() {
        return this.body;
    }
    get TextBody() {
        if (this.messageType === MessageType.Binary) {
            throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */]("Not supported for binary message");
        }
        return this.body;
    }
    get BinaryBody() {
        if (this.messageType === MessageType.Text) {
            throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */]("Not supported for text message");
        }
        return this.body;
    }
    get Id() {
        return this.id;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ConnectionMessage;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Guid__ = __webpack_require__(2);


class EventSource {
    constructor(metadata) {
        this.eventListeners = {};
        this.isDisposed = false;
        this.OnEvent = (event) => {
            if (this.IsDisposed()) {
                throw (new __WEBPACK_IMPORTED_MODULE_0__Error__["c" /* ObjectDisposedError */]("EventSource"));
            }
            if (this.Metadata) {
                for (const paramName in this.Metadata) {
                    if (paramName) {
                        if (event.Metadata) {
                            if (!event.Metadata[paramName]) {
                                event.Metadata[paramName] = this.Metadata[paramName];
                            }
                        }
                    }
                }
            }
            for (const eventId in this.eventListeners) {
                if (eventId && this.eventListeners[eventId]) {
                    this.eventListeners[eventId](event);
                }
            }
        };
        this.Attach = (onEventCallback) => {
            const id = Object(__WEBPACK_IMPORTED_MODULE_1__Guid__["a" /* CreateNoDashGuid */])();
            this.eventListeners[id] = onEventCallback;
            return {
                Detach: () => {
                    delete this.eventListeners[id];
                },
            };
        };
        this.AttachListener = (listener) => {
            return this.Attach(listener.OnEvent);
        };
        this.IsDisposed = () => {
            return this.isDisposed;
        };
        this.Dispose = () => {
            this.eventListeners = null;
            this.isDisposed = true;
        };
        this.metadata = metadata;
    }
    get Metadata() {
        return this.metadata;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventSource;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);

class InMemoryStorage {
    constructor() {
        this.store = {};
        this.Get = (key) => {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("key");
            }
            return this.store[key];
        };
        this.GetOrAdd = (key, valueToAdd) => {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("key");
            }
            if (this.store[key] === undefined) {
                this.store[key] = valueToAdd;
            }
            return this.store[key];
        };
        this.Set = (key, value) => {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("key");
            }
            this.store[key] = value;
        };
        this.Remove = (key) => {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("key");
            }
            if (this.store[key] !== undefined) {
                delete this.store[key];
            }
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InMemoryStorage;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);

class List {
    constructor(list) {
        this.subscriptionIdCounter = 0;
        this.addSubscriptions = {};
        this.removeSubscriptions = {};
        this.disposedSubscriptions = {};
        this.disposeReason = null;
        this.Get = (itemIndex) => {
            this.ThrowIfDisposed();
            return this.list[itemIndex];
        };
        this.First = () => {
            return this.Get(0);
        };
        this.Last = () => {
            return this.Get(this.Length() - 1);
        };
        this.Add = (item) => {
            this.ThrowIfDisposed();
            this.InsertAt(this.list.length, item);
        };
        this.InsertAt = (index, item) => {
            this.ThrowIfDisposed();
            if (index === 0) {
                this.list.unshift(item);
            }
            else if (index === this.list.length) {
                this.list.push(item);
            }
            else {
                this.list.splice(index, 0, item);
            }
            this.TriggerSubscriptions(this.addSubscriptions);
        };
        this.RemoveFirst = () => {
            this.ThrowIfDisposed();
            return this.RemoveAt(0);
        };
        this.RemoveLast = () => {
            this.ThrowIfDisposed();
            return this.RemoveAt(this.Length() - 1);
        };
        this.RemoveAt = (index) => {
            this.ThrowIfDisposed();
            return this.Remove(index, 1)[0];
        };
        this.Remove = (index, count) => {
            this.ThrowIfDisposed();
            const removedElements = this.list.splice(index, count);
            this.TriggerSubscriptions(this.removeSubscriptions);
            return removedElements;
        };
        this.Clear = () => {
            this.ThrowIfDisposed();
            this.Remove(0, this.Length());
        };
        this.Length = () => {
            this.ThrowIfDisposed();
            return this.list.length;
        };
        this.OnAdded = (addedCallback) => {
            this.ThrowIfDisposed();
            const subscriptionId = this.subscriptionIdCounter++;
            this.addSubscriptions[subscriptionId] = addedCallback;
            return {
                Detach: () => {
                    delete this.addSubscriptions[subscriptionId];
                },
            };
        };
        this.OnRemoved = (removedCallback) => {
            this.ThrowIfDisposed();
            const subscriptionId = this.subscriptionIdCounter++;
            this.removeSubscriptions[subscriptionId] = removedCallback;
            return {
                Detach: () => {
                    delete this.removeSubscriptions[subscriptionId];
                },
            };
        };
        this.OnDisposed = (disposedCallback) => {
            this.ThrowIfDisposed();
            const subscriptionId = this.subscriptionIdCounter++;
            this.disposedSubscriptions[subscriptionId] = disposedCallback;
            return {
                Detach: () => {
                    delete this.disposedSubscriptions[subscriptionId];
                },
            };
        };
        this.Join = (seperator) => {
            this.ThrowIfDisposed();
            return this.list.join(seperator);
        };
        this.ToArray = () => {
            const cloneCopy = Array();
            this.list.forEach((val) => {
                cloneCopy.push(val);
            });
            return cloneCopy;
        };
        this.Any = (callback) => {
            this.ThrowIfDisposed();
            if (callback) {
                return this.Where(callback).Length() > 0;
            }
            else {
                return this.Length() > 0;
            }
        };
        this.All = (callback) => {
            this.ThrowIfDisposed();
            return this.Where(callback).Length() === this.Length();
        };
        this.ForEach = (callback) => {
            this.ThrowIfDisposed();
            for (let i = 0; i < this.Length(); i++) {
                callback(this.list[i], i);
            }
        };
        this.Select = (callback) => {
            this.ThrowIfDisposed();
            const selectList = [];
            for (let i = 0; i < this.list.length; i++) {
                selectList.push(callback(this.list[i], i));
            }
            return new List(selectList);
        };
        this.Where = (callback) => {
            this.ThrowIfDisposed();
            const filteredList = new List();
            for (let i = 0; i < this.list.length; i++) {
                if (callback(this.list[i], i)) {
                    filteredList.Add(this.list[i]);
                }
            }
            return filteredList;
        };
        this.OrderBy = (compareFn) => {
            this.ThrowIfDisposed();
            const clonedArray = this.ToArray();
            const orderedArray = clonedArray.sort(compareFn);
            return new List(orderedArray);
        };
        this.OrderByDesc = (compareFn) => {
            this.ThrowIfDisposed();
            return this.OrderBy((a, b) => compareFn(b, a));
        };
        this.Clone = () => {
            this.ThrowIfDisposed();
            return new List(this.ToArray());
        };
        this.Concat = (list) => {
            this.ThrowIfDisposed();
            return new List(this.list.concat(list.ToArray()));
        };
        this.ConcatArray = (array) => {
            this.ThrowIfDisposed();
            return new List(this.list.concat(array));
        };
        this.IsDisposed = () => {
            return this.list == null;
        };
        this.Dispose = (reason) => {
            if (!this.IsDisposed()) {
                this.disposeReason = reason;
                this.list = null;
                this.addSubscriptions = null;
                this.removeSubscriptions = null;
                this.TriggerSubscriptions(this.disposedSubscriptions);
            }
        };
        this.ThrowIfDisposed = () => {
            if (this.IsDisposed()) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["c" /* ObjectDisposedError */]("List", this.disposeReason);
            }
        };
        this.TriggerSubscriptions = (subscriptions) => {
            if (subscriptions) {
                for (const subscriptionId in subscriptions) {
                    if (subscriptionId) {
                        subscriptions[subscriptionId]();
                    }
                }
            }
        };
        this.list = [];
        // copy the list rather than taking as is.
        if (list) {
            for (const item of list) {
                this.list.push(item);
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = List;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PromiseState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);

var PromiseState;
(function (PromiseState) {
    PromiseState[PromiseState["None"] = 0] = "None";
    PromiseState[PromiseState["Resolved"] = 1] = "Resolved";
    PromiseState[PromiseState["Rejected"] = 2] = "Rejected";
})(PromiseState || (PromiseState = {}));
class PromiseResult {
    constructor(promiseResultEventSource) {
        this.ThrowIfError = () => {
            if (this.IsError) {
                throw this.Error;
            }
        };
        promiseResultEventSource.On((result) => {
            if (!this.isCompleted) {
                this.isCompleted = true;
                this.isError = false;
                this.result = result;
            }
        }, (error) => {
            if (!this.isCompleted) {
                this.isCompleted = true;
                this.isError = true;
                this.error = error;
            }
        });
    }
    get IsCompleted() {
        return this.isCompleted;
    }
    get IsError() {
        return this.isError;
    }
    get Error() {
        return this.error;
    }
    get Result() {
        return this.result;
    }
}
/* unused harmony export PromiseResult */

// tslint:disable-next-line:max-classes-per-file
class PromiseResultEventSource {
    constructor() {
        this.SetResult = (result) => {
            this.onSetResult(result);
        };
        this.SetError = (error) => {
            this.onSetError(error);
        };
        this.On = (onSetResult, onSetError) => {
            this.onSetResult = onSetResult;
            this.onSetError = onSetError;
        };
    }
}
/* unused harmony export PromiseResultEventSource */

// tslint:disable-next-line:max-classes-per-file
class PromiseHelper {
}
/* harmony export (immutable) */ __webpack_exports__["b"] = PromiseHelper;

PromiseHelper.WhenAll = (promises) => {
    if (!promises || promises.length === 0) {
        throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("promises");
    }
    const deferred = new Deferred();
    const errors = [];
    let completedPromises = 0;
    const checkForCompletion = () => {
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
    for (const promise of promises) {
        promise.On((r) => {
            checkForCompletion();
        }, (e) => {
            errors.push(e);
            checkForCompletion();
        });
    }
    return deferred.Promise();
};
PromiseHelper.FromResult = (result) => {
    const deferred = new Deferred();
    deferred.Resolve(result);
    return deferred.Promise();
};
PromiseHelper.FromError = (error) => {
    const deferred = new Deferred();
    deferred.Reject(error);
    return deferred.Promise();
};
// tslint:disable-next-line:max-classes-per-file
class Promise {
    constructor(sink) {
        this.Result = () => {
            return this.sink.Result;
        };
        this.ContinueWith = (continuationCallback) => {
            if (!continuationCallback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("continuationCallback");
            }
            const continuationDeferral = new Deferred();
            this.sink.on((r) => {
                try {
                    const continuationResult = continuationCallback(this.sink.Result);
                    continuationDeferral.Resolve(continuationResult);
                }
                catch (e) {
                    continuationDeferral.Reject(`'Unhandled callback error: ${e}'`);
                }
            }, (error) => {
                try {
                    const continuationResult = continuationCallback(this.sink.Result);
                    continuationDeferral.Resolve(continuationResult);
                }
                catch (e) {
                    continuationDeferral.Reject(`'Unhandled callback error: ${e}. InnerError: ${error}'`);
                }
            });
            return continuationDeferral.Promise();
        };
        this.OnSuccessContinueWith = (continuationCallback) => {
            if (!continuationCallback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("continuationCallback");
            }
            const continuationDeferral = new Deferred();
            this.sink.on((r) => {
                try {
                    const continuationResult = continuationCallback(r);
                    continuationDeferral.Resolve(continuationResult);
                }
                catch (e) {
                    continuationDeferral.Reject(`'Unhandled callback error: ${e}'`);
                }
            }, (error) => {
                continuationDeferral.Reject(`'Unhandled callback error: ${error}'`);
            });
            return continuationDeferral.Promise();
        };
        this.ContinueWithPromise = (continuationCallback) => {
            if (!continuationCallback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("continuationCallback");
            }
            const continuationDeferral = new Deferred();
            this.sink.on((r) => {
                try {
                    const continuationPromise = continuationCallback(this.sink.Result);
                    if (!continuationPromise) {
                        throw new Error("'Continuation callback did not return promise'");
                    }
                    continuationPromise.On((continuationResult) => {
                        continuationDeferral.Resolve(continuationResult);
                    }, (e) => {
                        continuationDeferral.Reject(e);
                    });
                }
                catch (e) {
                    continuationDeferral.Reject(`'Unhandled callback error: ${e}'`);
                }
            }, (error) => {
                try {
                    const continuationPromise = continuationCallback(this.sink.Result);
                    if (!continuationPromise) {
                        throw new Error("Continuation callback did not return promise");
                    }
                    continuationPromise.On((continuationResult) => {
                        continuationDeferral.Resolve(continuationResult);
                    }, (e) => {
                        continuationDeferral.Reject(e);
                    });
                }
                catch (e) {
                    continuationDeferral.Reject(`'Unhandled callback error: ${e}. InnerError: ${error}'`);
                }
            });
            return continuationDeferral.Promise();
        };
        this.OnSuccessContinueWithPromise = (continuationCallback) => {
            if (!continuationCallback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("continuationCallback");
            }
            const continuationDeferral = new Deferred();
            this.sink.on((r) => {
                try {
                    const continuationPromise = continuationCallback(r);
                    if (!continuationPromise) {
                        throw new Error("Continuation callback did not return promise");
                    }
                    continuationPromise.On((continuationResult) => {
                        continuationDeferral.Resolve(continuationResult);
                    }, (e) => {
                        continuationDeferral.Reject(e);
                    });
                }
                catch (e) {
                    continuationDeferral.Reject(`'Unhandled callback error: ${e}'`);
                }
            }, (error) => {
                continuationDeferral.Reject(`'Unhandled callback error: ${error}.'`);
            });
            return continuationDeferral.Promise();
        };
        this.On = (successCallback, errorCallback) => {
            if (!successCallback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("successCallback");
            }
            if (!errorCallback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("errorCallback");
            }
            this.sink.on(successCallback, errorCallback);
            return this;
        };
        this.Finally = (callback) => {
            if (!callback) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("callback");
            }
            const callbackWrapper = (_) => {
                callback();
            };
            return this.On(callbackWrapper, callbackWrapper);
        };
        this.sink = sink;
    }
}
/* unused harmony export Promise */

// tslint:disable-next-line:max-classes-per-file
class Deferred {
    constructor() {
        this.State = () => {
            return this.sink.State;
        };
        this.Promise = () => {
            return this.promise;
        };
        this.Resolve = (result) => {
            this.sink.Resolve(result);
            return this;
        };
        this.Reject = (error) => {
            this.sink.Reject(error);
            return this;
        };
        this.sink = new Sink();
        this.promise = new Promise(this.sink);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Deferred;

// tslint:disable-next-line:max-classes-per-file
class Sink {
    constructor() {
        this.state = PromiseState.None;
        this.promiseResult = null;
        this.promiseResultEvents = null;
        this.successHandlers = [];
        this.errorHandlers = [];
        this.Resolve = (result) => {
            if (this.state !== PromiseState.None) {
                throw new Error("'Cannot resolve a completed promise'");
            }
            this.state = PromiseState.Resolved;
            this.promiseResultEvents.SetResult(result);
            for (let i = 0; i < this.successHandlers.length; i++) {
                this.ExecuteSuccessCallback(result, this.successHandlers[i], this.errorHandlers[i]);
            }
            this.DetachHandlers();
        };
        this.Reject = (error) => {
            if (this.state !== PromiseState.None) {
                throw new Error("'Cannot reject a completed promise'");
            }
            this.state = PromiseState.Rejected;
            this.promiseResultEvents.SetError(error);
            for (const errorHandler of this.errorHandlers) {
                this.ExecuteErrorCallback(error, errorHandler);
            }
            this.DetachHandlers();
        };
        this.on = (successCallback, errorCallback) => {
            if (successCallback == null) {
                successCallback = (r) => { return; };
            }
            if (this.state === PromiseState.None) {
                this.successHandlers.push(successCallback);
                this.errorHandlers.push(errorCallback);
            }
            else {
                if (this.state === PromiseState.Resolved) {
                    this.ExecuteSuccessCallback(this.promiseResult.Result, successCallback, errorCallback);
                }
                else if (this.state === PromiseState.Rejected) {
                    this.ExecuteErrorCallback(this.promiseResult.Error, errorCallback);
                }
                this.DetachHandlers();
            }
        };
        this.ExecuteSuccessCallback = (result, successCallback, errorCallback) => {
            try {
                successCallback(result);
            }
            catch (e) {
                this.ExecuteErrorCallback(`'Unhandled callback error: ${e}'`, errorCallback);
            }
        };
        this.ExecuteErrorCallback = (error, errorCallback) => {
            if (errorCallback) {
                try {
                    errorCallback(error);
                }
                catch (e) {
                    throw new Error(`'Unhandled callback error: ${e}. InnerError: ${error}'`);
                }
            }
            else {
                throw new Error(`'Unhandled error: ${error}'`);
            }
        };
        this.DetachHandlers = () => {
            this.errorHandlers = [];
            this.successHandlers = [];
        };
        this.promiseResultEvents = new PromiseResultEventSource();
        this.promiseResult = new PromiseResult(this.promiseResultEvents);
    }
    get State() {
        return this.state;
    }
    get Result() {
        return this.promiseResult;
    }
}
/* unused harmony export Sink */



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__List__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Promise__ = __webpack_require__(12);



var SubscriberType;
(function (SubscriberType) {
    SubscriberType[SubscriberType["Dequeue"] = 0] = "Dequeue";
    SubscriberType[SubscriberType["Peek"] = 1] = "Peek";
})(SubscriberType || (SubscriberType = {}));
class Queue {
    constructor(list) {
        this.promiseStore = new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* List */]();
        this.isDrainInProgress = false;
        this.isDisposing = false;
        this.disposeReason = null;
        this.Enqueue = (item) => {
            this.ThrowIfDispose();
            this.EnqueueFromPromise(__WEBPACK_IMPORTED_MODULE_2__Promise__["b" /* PromiseHelper */].FromResult(item));
        };
        this.EnqueueFromPromise = (promise) => {
            this.ThrowIfDispose();
            this.promiseStore.Add(promise);
            promise.Finally(() => {
                while (this.promiseStore.Length() > 0) {
                    if (!this.promiseStore.First().Result().IsCompleted) {
                        break;
                    }
                    else {
                        const p = this.promiseStore.RemoveFirst();
                        if (!p.Result().IsError) {
                            this.list.Add(p.Result().Result);
                        }
                        else {
                            // TODO: Log as warning.
                        }
                    }
                }
            });
        };
        this.Dequeue = () => {
            this.ThrowIfDispose();
            const deferredSubscriber = new __WEBPACK_IMPORTED_MODULE_2__Promise__["a" /* Deferred */]();
            this.subscribers.Add({ deferral: deferredSubscriber, type: SubscriberType.Dequeue });
            this.Drain();
            return deferredSubscriber.Promise();
        };
        this.Peek = () => {
            this.ThrowIfDispose();
            const deferredSubscriber = new __WEBPACK_IMPORTED_MODULE_2__Promise__["a" /* Deferred */]();
            this.subscribers.Add({ deferral: deferredSubscriber, type: SubscriberType.Peek });
            this.Drain();
            return deferredSubscriber.Promise();
        };
        this.Length = () => {
            this.ThrowIfDispose();
            return this.list.Length();
        };
        this.IsDisposed = () => {
            return this.subscribers == null;
        };
        this.DrainAndDispose = (pendingItemProcessor, reason) => {
            if (!this.IsDisposed() && !this.isDisposing) {
                this.disposeReason = reason;
                this.isDisposing = true;
                while (this.subscribers.Length() > 0) {
                    const subscriber = this.subscribers.RemoveFirst();
                    subscriber.deferral.Reject("Disposed");
                }
                for (const detachable of this.detachables) {
                    detachable.Detach();
                }
                if (this.promiseStore.Length() > 0 && pendingItemProcessor) {
                    return __WEBPACK_IMPORTED_MODULE_2__Promise__["b" /* PromiseHelper */]
                        .WhenAll(this.promiseStore.ToArray())
                        .ContinueWith(() => {
                        this.subscribers = null;
                        this.list.ForEach((item, index) => {
                            pendingItemProcessor(item);
                        });
                        this.list = null;
                        return true;
                    });
                }
                else {
                    this.subscribers = null;
                    this.list = null;
                }
            }
            return __WEBPACK_IMPORTED_MODULE_2__Promise__["b" /* PromiseHelper */].FromResult(true);
        };
        this.Dispose = (reason) => {
            this.DrainAndDispose(null, reason);
        };
        this.Drain = () => {
            if (!this.isDrainInProgress && !this.isDisposing) {
                this.isDrainInProgress = true;
                while (this.list.Length() > 0 && this.subscribers.Length() > 0 && !this.isDisposing) {
                    const subscriber = this.subscribers.RemoveFirst();
                    if (subscriber.type === SubscriberType.Peek) {
                        subscriber.deferral.Resolve(this.list.First());
                    }
                    else {
                        const dequeuedItem = this.list.RemoveFirst();
                        subscriber.deferral.Resolve(dequeuedItem);
                    }
                }
                this.isDrainInProgress = false;
            }
        };
        this.ThrowIfDispose = () => {
            if (this.IsDisposed()) {
                if (this.disposeReason) {
                    throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */](this.disposeReason);
                }
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["c" /* ObjectDisposedError */]("Queue");
            }
            else if (this.isDisposing) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */]("Queue disposing");
            }
        };
        this.list = list ? list : new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* List */]();
        this.detachables = [];
        this.subscribers = new __WEBPACK_IMPORTED_MODULE_1__List__["a" /* List */]();
        this.detachables.push(this.list.OnAdded(this.Drain));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Queue;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RecognitionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SpeechResultFormat; });
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
class RecognizerConfig {
    constructor(platformConfig, recognitionMode = RecognitionMode.Interactive, language = "en-us", format = SpeechResultFormat.Simple) {
        this.recognitionMode = RecognitionMode.Interactive;
        this.speechConfig = platformConfig ? platformConfig : new SpeechConfig(new Context(null, null));
        this.recognitionMode = recognitionMode;
        this.language = language;
        this.format = format;
        this.recognitionActivityTimeout = recognitionMode === RecognitionMode.Interactive ? 8000 : 25000;
    }
    get RecognitionMode() {
        return this.recognitionMode;
    }
    get Language() {
        return this.language;
    }
    get Format() {
        return this.format;
    }
    get SpeechConfig() {
        return this.speechConfig;
    }
    get RecognitionActivityTimeout() {
        return this.recognitionActivityTimeout;
    }
    get IsContinuousRecognition() {
        return this.recognitionMode !== RecognitionMode.Interactive;
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = RecognizerConfig;

// tslint:disable-next-line:max-classes-per-file
class SpeechConfig {
    constructor(context) {
        this.Serialize = () => {
            return JSON.stringify(this, (key, value) => {
                if (value && typeof value === "object") {
                    const replacement = {};
                    for (const k in value) {
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
    get Context() {
        return this.context;
    }
}
/* harmony export (immutable) */ __webpack_exports__["f"] = SpeechConfig;

// tslint:disable-next-line:max-classes-per-file
class Context {
    constructor(os, device) {
        this.system = new System();
        this.os = os;
        this.device = device;
    }
    get System() {
        return this.system;
    }
    get OS() {
        return this.os;
    }
    get Device() {
        return this.device;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Context;

// tslint:disable-next-line:max-classes-per-file
class System {
    constructor() {
        // TODO: Tie this with the sdk Version somehow
        this.version = "1.0.00000";
    }
    get Version() {
        // Controlled by sdk
        return this.version;
    }
}
/* unused harmony export System */

// tslint:disable-next-line:max-classes-per-file
class OS {
    constructor(platform, name, version) {
        this.platform = platform;
        this.name = name;
        this.version = version;
    }
    get Platform() {
        return this.platform;
    }
    get Name() {
        return this.name;
    }
    get Version() {
        return this.version;
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = OS;

// tslint:disable-next-line:max-classes-per-file
class Device {
    constructor(manufacturer, model, version) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.version = version;
    }
    get Manufacturer() {
        return this.manufacturer;
    }
    get Model() {
        return this.model;
    }
    get Version() {
        return this.version;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Device;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

class WebsocketMessageAdapter {
    constructor(uri, connectionId, messageFormatter) {
        this.Open = () => {
            if (this.connectionState === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Disconnected) {
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError(`Cannot open a connection that is in ${this.connectionState} state`);
            }
            if (this.connectionEstablishDeferral) {
                return this.connectionEstablishDeferral.Promise();
            }
            this.connectionEstablishDeferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            this.connectionState = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connecting;
            this.websocketClient = new WebSocket(this.uri);
            this.receivingMessageQueue = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["A" /* Queue */]();
            this.disconnectDeferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            this.sendMessageQueue = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["A" /* Queue */]();
            this.ProcessSendQueue();
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["q" /* ConnectionStartEvent */](this.connectionId, this.uri));
            this.websocketClient.onopen = (e) => {
                this.connectionState = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connected;
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["l" /* ConnectionEstablishedEvent */](this.connectionId));
                this.connectionEstablishDeferral.Resolve(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["p" /* ConnectionOpenResponse */](200, ""));
            };
            this.websocketClient.onerror = (e) => {
                // TODO: Understand what this is error is. Will we still get onClose ?
                if (this.connectionState !== __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connecting) {
                    // TODO: Is this required ?
                    // this.OnEvent(new ConnectionErrorEvent(errorMsg, connectionId));
                }
            };
            this.websocketClient.onclose = (e) => {
                if (this.connectionState === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connecting) {
                    this.connectionState = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Disconnected;
                    this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["k" /* ConnectionEstablishErrorEvent */](this.connectionId, e.code, e.reason));
                    this.connectionEstablishDeferral.Resolve(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["p" /* ConnectionOpenResponse */](e.code, e.reason));
                }
                else {
                    this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["j" /* ConnectionClosedEvent */](this.connectionId, e.code, e.reason));
                }
                this.OnClose(e.code, e.reason);
            };
            this.websocketClient.onmessage = (e) => {
                const networkReceivedTime = new Date().toISOString();
                if (this.connectionState === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connected) {
                    const deferred = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
                    // let id = ++this.idCounter;
                    this.receivingMessageQueue.EnqueueFromPromise(deferred.Promise());
                    if (e.data instanceof Blob) {
                        const fileReader = new FileReader();
                        fileReader.onload = (le) => {
                            const rawMessage = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["B" /* RawWebsocketMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Binary, fileReader.result);
                            this.messageFormatter
                                .ToConnectionMessage(rawMessage)
                                .On((connectionMessage) => {
                                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["n" /* ConnectionMessageReceivedEvent */](this.connectionId, networkReceivedTime, connectionMessage));
                                deferred.Resolve(connectionMessage);
                            }, (error) => {
                                // TODO: Events for these ?
                                deferred.Reject(`Invalid binary message format. Error: ${error}`);
                            });
                        };
                        fileReader.onerror = (ev) => {
                            // TODO: Events for these ?
                            deferred.Reject("Binary message parse error");
                        };
                        fileReader.readAsArrayBuffer(e.data);
                    }
                    else {
                        const rawMessage = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["B" /* RawWebsocketMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text, e.data);
                        this.messageFormatter
                            .ToConnectionMessage(rawMessage)
                            .On((connectionMessage) => {
                            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["n" /* ConnectionMessageReceivedEvent */](this.connectionId, networkReceivedTime, connectionMessage));
                            deferred.Resolve(connectionMessage);
                        }, (error) => {
                            // TODO: Events for these ?
                            deferred.Reject(`Invalid text message format. Error: ${error}`);
                        });
                    }
                }
            };
            return this.connectionEstablishDeferral.Promise();
        };
        this.Send = (message) => {
            if (this.connectionState !== __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connected) {
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError(`Cannot send on connection that is in ${this.connectionState} state`);
            }
            const messageSendStatusDeferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            const messageSendDeferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            this.sendMessageQueue.EnqueueFromPromise(messageSendDeferral.Promise());
            this.messageFormatter
                .FromConnectionMessage(message)
                .On((rawMessage) => {
                messageSendDeferral.Resolve({
                    Message: message,
                    RawWebsocketMessage: rawMessage,
                    SendStatusDeferral: messageSendStatusDeferral,
                });
            }, (error) => {
                messageSendDeferral.Reject(`Error formatting the message. ${error}`);
            });
            return messageSendStatusDeferral.Promise();
        };
        this.Read = () => {
            if (this.connectionState !== __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connected) {
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError(`Cannot read on connection that is in ${this.connectionState} state`);
            }
            return this.receivingMessageQueue.Dequeue();
        };
        this.Close = (reason) => {
            if (this.websocketClient) {
                if (this.connectionState !== __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Connected) {
                    this.websocketClient.close(1000, reason ? reason : "Normal closure by client");
                }
            }
            else {
                const deferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
                deferral.Resolve(true);
                return deferral.Promise();
            }
            return this.disconnectDeferral.Promise();
        };
        this.SendRawMessage = (sendItem) => {
            try {
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["o" /* ConnectionMessageSentEvent */](this.connectionId, new Date().toISOString(), sendItem.Message));
                this.websocketClient.send(sendItem.RawWebsocketMessage.Payload);
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(true);
            }
            catch (e) {
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError(`websocket send error: ${e}`);
            }
        };
        this.OnClose = (code, reason) => {
            const closeReason = `Connection closed. ${code}: ${reason}`;
            this.connectionState = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Disconnected;
            this.disconnectDeferral.Resolve(true);
            this.receivingMessageQueue.Dispose(reason);
            this.receivingMessageQueue.DrainAndDispose((pendingReceiveItem) => {
                // TODO: Events for these ?
                // Logger.Instance.OnEvent(new LoggingEvent(LogType.Warning, null, `Failed to process received message. Reason: ${closeReason}, Message: ${JSON.stringify(pendingReceiveItem)}`));
            }, closeReason);
            this.sendMessageQueue.DrainAndDispose((pendingSendItem) => {
                pendingSendItem.SendStatusDeferral.Reject(closeReason);
            }, closeReason);
        };
        this.ProcessSendQueue = () => {
            this.sendMessageQueue
                .Dequeue()
                .On((sendItem) => {
                this.SendRawMessage(sendItem)
                    .On((result) => {
                    sendItem.SendStatusDeferral.Resolve(result);
                    this.ProcessSendQueue();
                }, (sendError) => {
                    sendItem.SendStatusDeferral.Reject(sendError);
                    this.ProcessSendQueue();
                });
            }, (error) => {
                // do nothing
            });
        };
        this.OnEvent = (event) => {
            this.connectionEvents.OnEvent(event);
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
    get State() {
        return this.connectionState;
    }
    get Events() {
        return this.connectionEvents;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WebsocketMessageAdapter;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_browser_Exports__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speech_Exports__ = __webpack_require__(3);



const TestHooksParamName = "testhooks";
const ConnectionIdHeader = "X-ConnectionId";
class SpeechConnectionFactory {
    constructor() {
        this.Create = (config, authInfo, connectionId) => {
            let endpoint = "";
            switch (config.RecognitionMode) {
                case __WEBPACK_IMPORTED_MODULE_2__speech_Exports__["e" /* RecognitionMode */].Conversation:
                    endpoint = this.Host + this.ConversationRelativeUri;
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__speech_Exports__["e" /* RecognitionMode */].Dictation:
                    endpoint = this.Host + this.DictationRelativeUri;
                    break;
                default:
                    endpoint = this.Host + this.InteractiveRelativeUri; // default is interactive
                    break;
            }
            const queryParams = {
                format: __WEBPACK_IMPORTED_MODULE_2__speech_Exports__["j" /* SpeechResultFormat */][config.Format].toString().toLowerCase(),
                language: config.Language,
            };
            if (this.IsDebugModeEnabled) {
                queryParams[TestHooksParamName] = "1";
            }
            const headers = {};
            headers[authInfo.HeaderName] = authInfo.Token;
            headers[ConnectionIdHeader] = connectionId;
            return new __WEBPACK_IMPORTED_MODULE_0__common_browser_Exports__["e" /* WebsocketConnection */](endpoint, queryParams, headers, new __WEBPACK_IMPORTED_MODULE_2__speech_Exports__["k" /* WebsocketMessageFormatter */](), connectionId);
        };
    }
    get Host() {
        return __WEBPACK_IMPORTED_MODULE_1__common_Exports__["D" /* Storage */].Local.GetOrAdd("Host", "wss://speech.platform.bing.com");
    }
    get InteractiveRelativeUri() {
        return __WEBPACK_IMPORTED_MODULE_1__common_Exports__["D" /* Storage */].Local.GetOrAdd("InteractiveRelativeUri", "/speech/recognition/interactive/cognitiveservices/v1");
    }
    get ConversationRelativeUri() {
        return __WEBPACK_IMPORTED_MODULE_1__common_Exports__["D" /* Storage */].Local.GetOrAdd("ConversationRelativeUri", "/speech/recognition/conversation/cognitiveservices/v1");
    }
    get DictationRelativeUri() {
        return __WEBPACK_IMPORTED_MODULE_1__common_Exports__["D" /* Storage */].Local.GetOrAdd("DictationRelativeUri", "/speech/recognition/dictation/cognitiveservices/v1");
    }
    get IsDebugModeEnabled() {
        const value = __WEBPACK_IMPORTED_MODULE_1__common_Exports__["D" /* Storage */].Local.GetOrAdd("IsDebugModeEnabled", "false");
        return value.toLowerCase() === "true";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SpeechConnectionFactory;



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_microsoft_speech_browser_sdk_src_sdk_speech_browser_Exports__ = __webpack_require__(40);


// include the needed parts of the library. webpack will treeshake all unneeded stuff.


class SpeechRecognition {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.recognizer = null;
        this.onaudiostart = null;
        this.onaudioend = null;
        this.onstart = null;
        this.onend = null;
        this.onerror = null;
        this.onnomatch = null;
        this.onresult = null;
        this.onsoundstart = null;
        this.onsoundend = null;
        this.onspeechstart = null;
        this.onspeechend = null;
        this.lang = document.documentElement.lang || navigator.language;
        this.continuous = false;
        this.interimResults = false;
        this.maxAlternatives = 1;
        this.serviceURI = 'https://api.cognitive.microsoft.com/sts/v1.0';
    }
    start() {
        if (!this.recognizer) {
            if (!this.apiKey) {
                throw new Error('no api key specified');
            }
            this.recognizer = this.setupRecognizer();
        }
        this.recognizer.Recognize(this.handleEvent.bind(this))
            .On(this.recognitionStartSuccess.bind(this), this.recognitionStartFailed.bind(this));
    }
    stop() {
        if (this.recognizer) {
            this.recognizer.AudioSource.TurnOff();
        }
    }
    abort() {
        if (this.recognizer) {
            this.recognizer.AudioSource.TurnOff();
        }
    }
    handleEvent(event) {
        const eventName = event.name;
        switch (eventName) {
            case "RecognitionTriggeredEvent": {
                if (this.onstart) {
                    this.onstart.call(this);
                }
                return;
            }
            case "ListeningStartedEvent": {
                if (this.onaudiostart) {
                    this.onaudiostart.call(this);
                }
                return;
            }
            case "RecognitionStartedEvent": {
                if (this.onspeechstart) {
                    this.onspeechstart.call(this);
                }
                return;
            }
            case "RecognitionEndedEvent": {
                if (this.onend) {
                    this.onend.call(this);
                }
                return;
            }
            case "SpeechHypothesisEvent": {
                return this.handleHypothesis(event);
            }
            case "SpeechDetailedPhraseEvent": {
                return this.handleResult(event);
            }
            case "SpeechEndDetectedEvent": {
                if (this.onspeechend) {
                    this.onspeechend.call(this);
                }
                return;
            }
            case "ConnectingToServiceEvent": {
                console.log("connecting to translation services");
                return;
            }
        }
        if (event.error) {
            if (this.onerror) {
                this.onerror.call(this, event.error);
            }
        }
    }
    handleHypothesis({ result, error }) {
        if (error) {
            return;
        }
        if (result.Text && this.onresult) {
            this.onresult.call(this.recognizer, Object(__WEBPACK_IMPORTED_MODULE_0__entities__["c" /* createResultEvent */])([Object(__WEBPACK_IMPORTED_MODULE_0__entities__["b" /* createIntermediateResult */])(result)]));
        }
    }
    handleResult({ result, error }) {
        if (error) {
            return;
        }
        const results = Object(__WEBPACK_IMPORTED_MODULE_0__entities__["a" /* createFinalResult */])(result.NBest, this.maxAlternatives);
        const status = __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["f" /* RecognitionStatus */][result.RecognitionStatus];
        switch (status) {
            case __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["f" /* RecognitionStatus */].Success:
                if (this.onresult) {
                    this.onresult.call(this.recognizer, Object(__WEBPACK_IMPORTED_MODULE_0__entities__["c" /* createResultEvent */])([results]));
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["f" /* RecognitionStatus */].Error:
                if (this.onerror) {
                    this.onerror.call(this, error);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["f" /* RecognitionStatus */].NoMatch:
                if (this.onnomatch) {
                    this.onnomatch.call(this, error);
                }
                // call onnomatch;
                break;
            case __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["f" /* RecognitionStatus */].InitialSilenceTimeout:
            case __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["f" /* RecognitionStatus */].EndOfDictation:
            case __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["f" /* RecognitionStatus */].BabbleTimeout:
                console.log('something happened', event);
                // call onend;
                break;
        }
    }
    recognitionStartSuccess(listening) {
        console.log('start');
    }
    recognitionStartFailed(error) {
        console.log('failed', error);
    }
    setupRecognizer() {
        // prepare recognizer configuration
        const speechConfig = new __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["i" /* SpeechConfig */](new __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["b" /* Context */](new __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["d" /* OS */]('Speech', 'Speech', null), new __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["c" /* Device */](navigator.userAgent, 'Browser', '1.0.0.0')));
        const recognitionMode = this.interimResults ? __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["e" /* RecognitionMode */].Interactive : __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["e" /* RecognitionMode */].Conversation;
        const language = Object(__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* resolveLang */])(this.lang);
        const resultFormat = __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["j" /* SpeechResultFormat */].Detailed;
        // configure and authenticate recognizer
        const config = new __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["h" /* RecognizerConfig */](speechConfig, recognitionMode, language, resultFormat);
        const auth = new __WEBPACK_IMPORTED_MODULE_2_microsoft_speech_browser_sdk_src_sdk_speech_Exports__["a" /* CognitiveSubscriptionKeyAuthentication */](this.apiKey);
        // create and return recognizer based on the prepared configuration
        return Object(__WEBPACK_IMPORTED_MODULE_3_microsoft_speech_browser_sdk_src_sdk_speech_browser_Exports__["a" /* CreateRecognizer */])(config, auth);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SpeechRecognition;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_SpeechRecognitionEvent__ = __webpack_require__(20);
/* unused harmony reexport SpeechRecognitionEvent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__entities_SpeechRecognitionEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_SpeechRecognitionResult__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__entities_SpeechRecognitionResult__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__entities_SpeechRecognitionResult__["b"]; });




/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createResultEvent;
class SpeechRecognitionEvent extends Event {
    constructor(typeArg = 'result') {
        super(typeArg);
    }
}
/* unused harmony export SpeechRecognitionEvent */

function createResultEvent(results, resultIndex = 0, interpretation = null, emma = null) {
    const event = new SpeechRecognitionEvent();
    return Object.defineProperties(event, {
        target: { value: this, writable: false },
        emma: { value: emma, writable: false },
        resultIndex: { value: resultIndex, writable: false },
        results: { value: results, writable: false },
        interpretation: { value: interpretation, writable: false }
    });
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createIntermediateResult;
/* harmony export (immutable) */ __webpack_exports__["a"] = createFinalResult;
class SpeechRecognitionResult extends Array {
    constructor() {
        super(...arguments);
        this.isFinal = false;
    }
}
function toIntermediateResult({ Text }) {
    return {
        confidence: .5,
        transcript: Text
    };
}
function toFinalResult({ Confidence, Display }) {
    return {
        confidence: Confidence,
        transcript: Display
    };
}
function createIntermediateResult(alternative) {
    return new SpeechRecognitionResult(toIntermediateResult(alternative));
}
function createFinalResult(alternatives, maxAlternatives) {
    const transformed = alternatives
        .slice(0, maxAlternatives)
        .map(toFinalResult);
    const result = new SpeechRecognitionResult(...transformed);
    result.isFinal = true;
    return result;
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_LanguageResolver__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__helpers_LanguageResolver__["a"]; });



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const supportedDefaults = {
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
const resolveLang = (langHint) => {
    return supportedDefaults[langHint] || langHint;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = resolveLang;



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IAuthentication__ = __webpack_require__(5);


const AuthHeader = "Ocp-Apim-Subscription-Key";
class CognitiveSubscriptionKeyAuthentication {
    constructor(subscriptionKey) {
        this.Fetch = (authFetchEventId) => {
            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(this.authInfo);
        };
        this.FetchOnExpiry = (authFetchEventId) => {
            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(this.authInfo);
        };
        if (!subscriptionKey) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("subscriptionKey");
        }
        this.authInfo = new __WEBPACK_IMPORTED_MODULE_1__IAuthentication__["a" /* AuthInfo */](AuthHeader, subscriptionKey);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CognitiveSubscriptionKeyAuthentication;



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__ = __webpack_require__(4);

class AudioSourceEvent extends __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["b" /* PlatformEvent */] {
    constructor(eventName, audioSourceId, eventType = __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["a" /* EventType */].Info) {
        super(eventName, eventType);
        this.audioSourceId = audioSourceId;
    }
    get AudioSourceId() {
        return this.audioSourceId;
    }
}
/* unused harmony export AudioSourceEvent */

// tslint:disable-next-line:max-classes-per-file
class AudioSourceInitializingEvent extends AudioSourceEvent {
    constructor(audioSourceId) {
        super("AudioSourceInitializingEvent", audioSourceId);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = AudioSourceInitializingEvent;

// tslint:disable-next-line:max-classes-per-file
class AudioSourceReadyEvent extends AudioSourceEvent {
    constructor(audioSourceId) {
        super("AudioSourceReadyEvent", audioSourceId);
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = AudioSourceReadyEvent;

// tslint:disable-next-line:max-classes-per-file
class AudioSourceOffEvent extends AudioSourceEvent {
    constructor(audioSourceId) {
        super("AudioSourceOffEvent", audioSourceId);
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = AudioSourceOffEvent;

// tslint:disable-next-line:max-classes-per-file
class AudioSourceErrorEvent extends AudioSourceEvent {
    constructor(audioSourceId, error) {
        super("AudioSourceErrorEvent", audioSourceId, __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["a" /* EventType */].Error);
        this.error = error;
    }
    get Error() {
        return this.error;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AudioSourceErrorEvent;

// tslint:disable-next-line:max-classes-per-file
class AudioStreamNodeEvent extends AudioSourceEvent {
    constructor(eventName, audioSourceId, audioNodeId) {
        super(eventName, audioSourceId);
        this.audioNodeId = audioNodeId;
    }
    get AudioNodeId() {
        return this.audioNodeId;
    }
}
/* unused harmony export AudioStreamNodeEvent */

// tslint:disable-next-line:max-classes-per-file
class AudioStreamNodeAttachingEvent extends AudioStreamNodeEvent {
    constructor(audioSourceId, audioNodeId) {
        super("AudioStreamNodeAttachingEvent", audioSourceId, audioNodeId);
    }
}
/* harmony export (immutable) */ __webpack_exports__["f"] = AudioStreamNodeAttachingEvent;

// tslint:disable-next-line:max-classes-per-file
class AudioStreamNodeAttachedEvent extends AudioStreamNodeEvent {
    constructor(audioSourceId, audioNodeId) {
        super("AudioStreamNodeAttachedEvent", audioSourceId, audioNodeId);
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = AudioStreamNodeAttachedEvent;

// tslint:disable-next-line:max-classes-per-file
class AudioStreamNodeDetachedEvent extends AudioStreamNodeEvent {
    constructor(audioSourceId, audioNodeId) {
        super("AudioStreamNodeDetachedEvent", audioSourceId, audioNodeId);
    }
}
/* harmony export (immutable) */ __webpack_exports__["g"] = AudioStreamNodeDetachedEvent;

// tslint:disable-next-line:max-classes-per-file
class AudioStreamNodeErrorEvent extends AudioStreamNodeEvent {
    constructor(audioSourceId, audioNodeId, error) {
        super("AudioStreamNodeErrorEvent", audioSourceId, audioNodeId);
        this.error = error;
    }
    get Error() {
        return this.error;
    }
}
/* harmony export (immutable) */ __webpack_exports__["h"] = AudioStreamNodeErrorEvent;



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__ = __webpack_require__(4);

class ConnectionEvent extends __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["b" /* PlatformEvent */] {
    constructor(eventName, connectionId, eventType = __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["a" /* EventType */].Info) {
        super(eventName, eventType);
        this.connectionId = connectionId;
    }
    get ConnectionId() {
        return this.connectionId;
    }
}
/* unused harmony export ConnectionEvent */

// tslint:disable-next-line:max-classes-per-file
class ConnectionStartEvent extends ConnectionEvent {
    constructor(connectionId, uri, headers) {
        super("ConnectionStartEvent", connectionId);
        this.uri = uri;
        this.headers = headers;
    }
    get Uri() {
        return this.uri;
    }
    get Headers() {
        return this.headers;
    }
}
/* harmony export (immutable) */ __webpack_exports__["f"] = ConnectionStartEvent;

// tslint:disable-next-line:max-classes-per-file
class ConnectionEstablishedEvent extends ConnectionEvent {
    constructor(connectionId, metadata) {
        super("ConnectionEstablishedEvent", connectionId);
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = ConnectionEstablishedEvent;

// tslint:disable-next-line:max-classes-per-file
class ConnectionClosedEvent extends ConnectionEvent {
    constructor(connectionId, statusCode, reason) {
        super("ConnectionClosedEvent", connectionId, __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["a" /* EventType */].Warning);
        this.reason = reason;
        this.statusCode = statusCode;
    }
    get Reason() {
        return this.reason;
    }
    get StatusCode() {
        return this.statusCode;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ConnectionClosedEvent;

// tslint:disable-next-line:max-classes-per-file
class ConnectionEstablishErrorEvent extends ConnectionEvent {
    constructor(connectionId, statuscode, reason) {
        super("ConnectionEstablishErrorEvent", connectionId, __WEBPACK_IMPORTED_MODULE_0__PlatformEvent__["a" /* EventType */].Error);
        this.statusCode = statuscode;
        this.reason = reason;
    }
    get Reason() {
        return this.reason;
    }
    get StatusCode() {
        return this.statusCode;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = ConnectionEstablishErrorEvent;

// tslint:disable-next-line:max-classes-per-file
class ConnectionMessageReceivedEvent extends ConnectionEvent {
    constructor(connectionId, networkReceivedTimeISO, message) {
        super("ConnectionMessageReceivedEvent", connectionId);
        this.networkReceivedTime = networkReceivedTimeISO;
        this.message = message;
    }
    get NetworkReceivedTime() {
        return this.networkReceivedTime;
    }
    get Message() {
        return this.message;
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = ConnectionMessageReceivedEvent;

// tslint:disable-next-line:max-classes-per-file
class ConnectionMessageSentEvent extends ConnectionEvent {
    constructor(connectionId, networkSentTimeISO, message) {
        super("ConnectionMessageSentEvent", connectionId);
        this.networkSentTime = networkSentTimeISO;
        this.message = message;
    }
    get NetworkSentTime() {
        return this.networkSentTime;
    }
    get Message() {
        return this.message;
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = ConnectionMessageSentEvent;



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ConnectionOpenResponse {
    constructor(statusCode, reason) {
        this.statusCode = statusCode;
        this.reason = reason;
    }
    get StatusCode() {
        return this.statusCode;
    }
    get Reason() {
        return this.reason;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ConnectionOpenResponse;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EventSource__ = __webpack_require__(9);


class Events {
    static get Instance() {
        return Events.instance;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Events;

Events.instance = new __WEBPACK_IMPORTED_MODULE_1__EventSource__["a" /* EventSource */]();
Events.SetEventSource = (eventSource) => {
    if (!eventSource) {
        throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("eventSource");
    }
    Events.instance = eventSource;
};


/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnectionMessage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Guid__ = __webpack_require__(2);



class RawWebsocketMessage {
    constructor(messageType, payload, id) {
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
    get MessageType() {
        return this.messageType;
    }
    get Payload() {
        return this.payload;
    }
    get TextContent() {
        if (this.messageType === __WEBPACK_IMPORTED_MODULE_0__ConnectionMessage__["b" /* MessageType */].Binary) {
            throw new __WEBPACK_IMPORTED_MODULE_1__Error__["b" /* InvalidOperationError */]("Not supported for binary message");
        }
        return this.payload;
    }
    get BinaryContent() {
        if (this.messageType === __WEBPACK_IMPORTED_MODULE_0__ConnectionMessage__["b" /* MessageType */].Text) {
            throw new __WEBPACK_IMPORTED_MODULE_1__Error__["b" /* InvalidOperationError */]("Not supported for text message");
        }
        return this.payload;
    }
    get Id() {
        return this.id;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RawWebsocketMessage;



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class RiffPcmEncoder {
    constructor(actualSampleRate, desiredSampleRate) {
        this.channelCount = 1;
        this.Encode = (isFirstAudioFrame, actualAudioFrame) => {
            const audioFrame = this.DownSampleAudioFrame(actualAudioFrame, this.actualSampleRate, this.desiredSampleRate);
            const audioLength = audioFrame.length * 2;
            if (!isFirstAudioFrame) {
                const buffer = new ArrayBuffer(audioLength);
                const view = new DataView(buffer);
                this.FloatTo16BitPCM(view, 0, audioFrame);
                return buffer;
            }
            const buffer = new ArrayBuffer(44 + audioLength);
            const bitsPerSample = 16;
            const bytesPerSample = bitsPerSample / 8;
            // We dont know ahead of time about the length of audio to stream. So set to 0.
            const fileLength = 0;
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
            const view = new DataView(buffer);
            /* RIFF identifier */
            this.SetString(view, 0, "RIFF");
            /* file length */
            view.setUint32(4, fileLength, true);
            /* RIFF type & Format */
            this.SetString(view, 8, "WAVEfmt ");
            /* format chunk length */
            view.setUint32(16, 16, true);
            /* sample format (raw) */
            view.setUint16(20, 1, true);
            /* channel count */
            view.setUint16(22, this.channelCount, true);
            /* sample rate */
            view.setUint32(24, this.desiredSampleRate, true);
            /* byte rate (sample rate * block align) */
            view.setUint32(28, this.desiredSampleRate * this.channelCount * bytesPerSample, true);
            /* block align (channel count * bytes per sample) */
            view.setUint16(32, this.channelCount * bytesPerSample, true);
            /* bits per sample */
            view.setUint16(34, bitsPerSample, true);
            /* data chunk identifier */
            this.SetString(view, 36, "data");
            /* data chunk length */
            view.setUint32(40, fileLength, true);
            this.FloatTo16BitPCM(view, 44, audioFrame);
            return buffer;
        };
        this.SetString = (view, offset, str) => {
            for (let i = 0; i < str.length; i++) {
                view.setUint8(offset + i, str.charCodeAt(i));
            }
        };
        this.FloatTo16BitPCM = (view, offset, input) => {
            for (let i = 0; i < input.length; i++, offset += 2) {
                const s = Math.max(-1, Math.min(1, input[i]));
                view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
            }
        };
        this.DownSampleAudioFrame = (audioFrame, actualSampleRate, desiredSamplerate) => {
            if (desiredSamplerate === actualSampleRate || desiredSamplerate > actualSampleRate) {
                return audioFrame;
            }
            const sampleRateRatio = actualSampleRate / desiredSamplerate;
            const newLength = Math.round(audioFrame.length / sampleRateRatio);
            const downSampledAudioFrame = new Float32Array(newLength);
            let offsetResult = 0;
            let offsetBuffer = 0;
            while (offsetResult < downSampledAudioFrame.length) {
                const nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
                let accum = 0;
                let count = 0;
                for (let i = offsetBuffer; i < nextOffsetBuffer && i < audioFrame.length; i++) {
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RiffPcmEncoder;



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InMemoryStorage__ = __webpack_require__(10);


class Storage {
    static get Session() {
        return Storage.sessionStorage;
    }
    static get Local() {
        return Storage.localStorage;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Storage;

Storage.sessionStorage = new __WEBPACK_IMPORTED_MODULE_1__InMemoryStorage__["a" /* InMemoryStorage */]();
Storage.localStorage = new __WEBPACK_IMPORTED_MODULE_1__InMemoryStorage__["a" /* InMemoryStorage */]();
Storage.SetSessionStorage = (sessionStorage) => {
    if (!sessionStorage) {
        throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("sessionStorage");
    }
    Storage.sessionStorage = sessionStorage;
};
Storage.SetLocalStorage = (localStorage) => {
    if (!localStorage) {
        throw new __WEBPACK_IMPORTED_MODULE_0__Error__["a" /* ArgumentNullError */]("localStorage");
    }
    Storage.localStorage = localStorage;
};


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Error__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Guid__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Queue__ = __webpack_require__(13);



class Stream {
    constructor(streamId) {
        this.readerIdCounter = 1;
        this.isEnded = false;
        this.Write = (buffer) => {
            this.ThrowIfClosed();
            this.WriteStreamChunk({
                Buffer: buffer,
                IsEnd: false,
            });
        };
        this.GetReader = () => {
            const readerId = this.readerIdCounter;
            this.readerIdCounter++;
            const readerQueue = new __WEBPACK_IMPORTED_MODULE_2__Queue__["a" /* Queue */]();
            const currentLength = this.streambuffer.length;
            this.readerQueues[readerId] = readerQueue;
            for (let i = 0; i < currentLength; i++) {
                readerQueue.Enqueue(this.streambuffer[i]);
            }
            return new StreamReader(this.id, readerQueue, () => {
                delete this.readerQueues[readerId];
            });
        };
        this.Close = () => {
            if (!this.isEnded) {
                this.WriteStreamChunk({
                    Buffer: null,
                    IsEnd: true,
                });
                this.isEnded = true;
            }
        };
        this.WriteStreamChunk = (streamChunk) => {
            this.ThrowIfClosed();
            this.streambuffer.push(streamChunk);
            for (const readerId in this.readerQueues) {
                if (!this.readerQueues[readerId].IsDisposed()) {
                    try {
                        this.readerQueues[readerId].Enqueue(streamChunk);
                    }
                    catch (e) {
                        // Do nothing
                    }
                }
            }
        };
        this.ThrowIfClosed = () => {
            if (this.isEnded) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */]("Stream closed");
            }
        };
        this.id = streamId ? streamId : Object(__WEBPACK_IMPORTED_MODULE_1__Guid__["a" /* CreateNoDashGuid */])();
        this.streambuffer = [];
        this.readerQueues = {};
    }
    get IsClosed() {
        return this.isEnded;
    }
    get Id() {
        return this.id;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Stream;

// tslint:disable-next-line:max-classes-per-file
class StreamReader {
    constructor(streamId, readerQueue, onClose) {
        this.isClosed = false;
        this.Read = () => {
            if (this.IsClosed) {
                throw new __WEBPACK_IMPORTED_MODULE_0__Error__["b" /* InvalidOperationError */]("StreamReader closed");
            }
            return this.readerQueue
                .Dequeue()
                .OnSuccessContinueWith((streamChunk) => {
                if (streamChunk.IsEnd) {
                    this.readerQueue.Dispose("End of stream reached");
                }
                return streamChunk;
            });
        };
        this.Close = () => {
            if (!this.isClosed) {
                this.isClosed = true;
                this.readerQueue.Dispose("StreamReader closed");
                this.onClose();
            }
        };
        this.readerQueue = readerQueue;
        this.onClose = onClose;
        this.streamId = streamId;
    }
    get IsClosed() {
        return this.isClosed;
    }
    get StreamId() {
        return this.streamId;
    }
}
/* unused harmony export StreamReader */



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IAuthentication__ = __webpack_require__(5);


const AuthHeader = "Authorization";
class CognitiveTokenAuthentication {
    constructor(fetchCallback, fetchOnExpiryCallback) {
        this.Fetch = (authFetchEventId) => {
            return this.fetchCallback(authFetchEventId).OnSuccessContinueWith((token) => new __WEBPACK_IMPORTED_MODULE_1__IAuthentication__["a" /* AuthInfo */](AuthHeader, token));
        };
        this.FetchOnExpiry = (authFetchEventId) => {
            return this.fetchOnExpiryCallback(authFetchEventId).OnSuccessContinueWith((token) => new __WEBPACK_IMPORTED_MODULE_1__IAuthentication__["a" /* AuthInfo */](AuthHeader, token));
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
}
/* unused harmony export CognitiveTokenAuthentication */



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RecognizerConfig__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ServiceTelemetryListener_Internal__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SpeechConnectionMessage_Internal__ = __webpack_require__(37);





class Recognizer {
    constructor(authentication, connectionFactory, audioSource, recognizerConfig) {
        this.Recognize = (onEventCallback, speechContextJson) => {
            const requestSession = new RequestSession(this.audioSource.Id(), onEventCallback);
            requestSession.ListenForServiceTelemetry(this.audioSource.Events);
            return this.audioSource
                .Attach(requestSession.AudioNodeId)
                .ContinueWithPromise((result) => {
                if (result.IsError) {
                    requestSession.OnAudioSourceAttachCompleted(null, true, result.Error);
                    throw new Error(result.Error);
                }
                else {
                    requestSession.OnAudioSourceAttachCompleted(result.Result, false);
                }
                const audioNode = result.Result;
                this.FetchConnection(requestSession)
                    .OnSuccessContinueWith((connection) => {
                    const messageRetrievalPromise = this.ReceiveMessage(connection, requestSession);
                    const messageSendPromise = this.SendSpeechConfig(requestSession.RequestId, connection, this.recognizerConfig.SpeechConfig.Serialize())
                        .OnSuccessContinueWithPromise((_) => {
                        return this.SendSpeechContext(requestSession.RequestId, connection, speechContextJson)
                            .OnSuccessContinueWithPromise((_) => {
                            return this.SendAudio(requestSession.RequestId, connection, audioNode, requestSession);
                        });
                    });
                    const completionPromise = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].WhenAll([messageRetrievalPromise, messageSendPromise]);
                    completionPromise.On((r) => {
                        requestSession.Dispose();
                        this.SendTelemetryData(requestSession.RequestId, connection, requestSession.GetTelemetry());
                    }, (error) => {
                        requestSession.Dispose(error);
                        this.SendTelemetryData(requestSession.RequestId, connection, requestSession.GetTelemetry());
                    });
                    return completionPromise;
                });
                return requestSession.CompletionPromise;
            });
        };
        this.FetchConnection = (requestSession, isUnAuthorized = false) => {
            if (this.connectionFetchPromise) {
                if (this.connectionFetchPromise.Result().IsError
                    || this.connectionFetchPromise.Result().Result.State() === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["r" /* ConnectionState */].Disconnected) {
                    this.connectionId = null;
                    this.connectionFetchPromise = null;
                    return this.FetchConnection(requestSession);
                }
                else {
                    requestSession.OnPreConnectionStart(this.authFetchEventId, this.connectionId);
                    requestSession.OnConnectionEstablishCompleted(200);
                    requestSession.ListenForServiceTelemetry(this.connectionFetchPromise.Result().Result.Events);
                    return this.connectionFetchPromise;
                }
            }
            this.authFetchEventId = Object(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["s" /* CreateNoDashGuid */])();
            this.connectionId = Object(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["s" /* CreateNoDashGuid */])();
            requestSession.OnPreConnectionStart(this.authFetchEventId, this.connectionId);
            const authPromise = isUnAuthorized ? this.authentication.FetchOnExpiry(this.authFetchEventId) : this.authentication.Fetch(this.authFetchEventId);
            this.connectionFetchPromise = authPromise
                .ContinueWithPromise((result) => {
                if (result.IsError) {
                    requestSession.OnAuthCompleted(true, result.Error);
                    throw new Error(result.Error);
                }
                else {
                    requestSession.OnAuthCompleted(false);
                }
                const connection = this.connectionFactory.Create(this.recognizerConfig, result.Result, this.connectionId);
                requestSession.ListenForServiceTelemetry(connection.Events);
                return connection.Open().OnSuccessContinueWithPromise((response) => {
                    if (response.StatusCode === 200) {
                        requestSession.OnConnectionEstablishCompleted(response.StatusCode);
                        return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(connection);
                    }
                    else if (response.StatusCode === 403 && !isUnAuthorized) {
                        return this.FetchConnection(requestSession, true);
                    }
                    else {
                        requestSession.OnConnectionEstablishCompleted(response.StatusCode, response.Reason);
                        return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError(`Unable to contact server. StatusCode: ${response.StatusCode}, Reason: ${response.Reason}`);
                    }
                });
            });
            return this.connectionFetchPromise;
        };
        this.ReceiveMessage = (connection, requestSession) => {
            return connection
                .Read()
                .OnSuccessContinueWithPromise((message) => {
                const connectionMessage = __WEBPACK_IMPORTED_MODULE_4__SpeechConnectionMessage_Internal__["a" /* SpeechConnectionMessage */].FromConnectionMessage(message);
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
                        case "speech.fragment":
                            requestSession.OnServiceSpeechFragmentResponse(JSON.parse(connectionMessage.TextBody));
                            break;
                        case "speech.enddetected":
                            requestSession.OnServiceSpeechEndDetectedResponse(JSON.parse(connectionMessage.TextBody));
                            break;
                        case "speech.phrase":
                            if (this.recognizerConfig.IsContinuousRecognition) {
                                // For continuous recognition telemetry has to be sent for every phrase as per spec.
                                this.SendTelemetryData(requestSession.RequestId, connection, requestSession.GetTelemetry());
                            }
                            if (this.recognizerConfig.Format === __WEBPACK_IMPORTED_MODULE_2__RecognizerConfig__["g" /* SpeechResultFormat */].Simple) {
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
                return this.ReceiveMessage(connection, requestSession);
            });
        };
        this.SendSpeechConfig = (requestId, connection, speechConfigJson) => {
            if (speechConfigJson && this.connectionId !== this.speechConfigConnectionId) {
                this.speechConfigConnectionId = this.connectionId;
                return connection
                    .Send(new __WEBPACK_IMPORTED_MODULE_4__SpeechConnectionMessage_Internal__["a" /* SpeechConnectionMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text, "speech.config", requestId, "application/json", speechConfigJson));
            }
            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(true);
        };
        this.SendSpeechContext = (requestId, connection, speechContextJson) => {
            if (speechContextJson) {
                return connection
                    .Send(new __WEBPACK_IMPORTED_MODULE_4__SpeechConnectionMessage_Internal__["a" /* SpeechConnectionMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text, "speech.context", requestId, "application/json", speechContextJson));
            }
            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(true);
        };
        this.SendTelemetryData = (requestId, connection, telemetryData) => {
            return connection
                .Send(new __WEBPACK_IMPORTED_MODULE_4__SpeechConnectionMessage_Internal__["a" /* SpeechConnectionMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text, "telemetry", requestId, "application/json", telemetryData));
        };
        this.SendAudio = (requestId, connection, audioStreamNode, requestSession) => {
            return audioStreamNode
                .Read()
                .OnSuccessContinueWithPromise((audioStreamChunk) => {
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
                        .OnSuccessContinueWithPromise((_) => {
                        return this.SendAudio(requestId, connection, audioStreamNode, requestSession);
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
    get AudioSource() {
        return this.audioSource;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Recognizer;

// tslint:disable-next-line:max-classes-per-file
class RequestSession {
    constructor(audioSourceId, onEventCallback) {
        this.isDisposed = false;
        this.detachables = new Array();
        this.isAudioNodeDetached = false;
        this.isCompleted = false;
        this.OnAudioSourceAttachCompleted = (audioNode, isError, error) => {
            this.audioNode = audioNode;
            if (isError) {
                this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].AudioSourceError, error);
            }
            else {
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["b" /* ListeningStartedEvent */](this.requestId, this.audioSourceId, this.audioNodeId));
            }
        };
        this.OnPreConnectionStart = (authFetchEventId, connectionId) => {
            this.authFetchEventId = authFetchEventId;
            this.connectionId = connectionId;
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["a" /* ConnectingToServiceEvent */](this.requestId, this.authFetchEventId, this.connectionId));
        };
        this.OnAuthCompleted = (isError, error) => {
            if (isError) {
                this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].AuthTokenFetchError, error);
            }
        };
        this.OnConnectionEstablishCompleted = (statusCode, reason) => {
            if (statusCode === 200) {
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["e" /* RecognitionStartedEvent */](this.RequestId, this.audioSourceId, this.audioNodeId, this.authFetchEventId, this.connectionId));
                return;
            }
            else if (statusCode === 403) {
                this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].UnAuthorized, reason);
            }
            else {
                this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].ConnectError, reason);
            }
        };
        this.OnServiceTurnStartResponse = (response) => {
            if (response && response.context && response.context.serviceTag) {
                this.serviceTag = response.context.serviceTag;
            }
        };
        this.OnServiceSpeechStartDetectedResponse = (result) => {
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["l" /* SpeechStartDetectedEvent */](this.RequestId, result));
        };
        this.OnServiceSpeechHypothesisResponse = (result) => {
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["j" /* SpeechHypothesisEvent */](this.RequestId, result));
        };
        this.OnServiceSpeechFragmentResponse = (result) => {
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["i" /* SpeechFragmentEvent */](this.RequestId, result));
        };
        this.OnServiceSpeechEndDetectedResponse = (result) => {
            this.DetachAudioNode();
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["h" /* SpeechEndDetectedEvent */](this.RequestId, result));
        };
        this.OnServiceSimpleSpeechPhraseResponse = (result) => {
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["k" /* SpeechSimplePhraseEvent */](this.RequestId, result));
        };
        this.OnServiceDetailedSpeechPhraseResponse = (result) => {
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["g" /* SpeechDetailedPhraseEvent */](this.RequestId, result));
        };
        this.OnServiceTurnEndResponse = () => {
            this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].Success);
        };
        this.OnConnectionError = (error) => {
            this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].UnknownError, error);
        };
        this.Dispose = (error) => {
            if (!this.isDisposed) {
                // we should have completed by now. If we did not its an unknown error.
                this.OnComplete(__WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["c" /* RecognitionCompletionStatus */].UnknownError, error);
                this.isDisposed = true;
                for (const detachable of this.detachables) {
                    detachable.Detach();
                }
                this.serviceTelemetryListener.Dispose();
            }
        };
        this.GetTelemetry = () => {
            return this.serviceTelemetryListener.GetTelemetry();
        };
        this.OnComplete = (status, error) => {
            if (!this.isCompleted) {
                this.isCompleted = true;
                this.DetachAudioNode();
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["d" /* RecognitionEndedEvent */](this.RequestId, this.audioSourceId, this.audioNodeId, this.authFetchEventId, this.connectionId, this.serviceTag, status, error ? error : ""));
            }
        };
        this.DetachAudioNode = () => {
            if (!this.isAudioNodeDetached) {
                this.isAudioNodeDetached = true;
                if (this.audioNode) {
                    this.audioNode.Detach();
                }
            }
        };
        this.OnEvent = (event) => {
            this.serviceTelemetryListener.OnEvent(event);
            __WEBPACK_IMPORTED_MODULE_0__common_Exports__["w" /* Events */].Instance.OnEvent(event);
            if (this.onEventCallback) {
                this.onEventCallback(event);
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
    get RequestId() {
        return this.requestId;
    }
    get AudioNodeId() {
        return this.audioNodeId;
    }
    get CompletionPromise() {
        return this.requestCompletionDeferral.Promise();
    }
    get IsSpeechEnded() {
        return this.isAudioNodeDetached;
    }
    get IsCompleted() {
        return this.isCompleted;
    }
    ListenForServiceTelemetry(eventSource) {
        this.detachables.push(eventSource.AttachListener(this.serviceTelemetryListener));
    }
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__ = __webpack_require__(6);


// tslint:disable-next-line:max-classes-per-file
class ServiceTelemetryListener {
    constructor(requestId, audioSourceId, audioNodeId) {
        this.isDisposed = false;
        this.listeningTriggerMetric = null;
        this.micMetric = null;
        this.connectionEstablishMetric = null;
        this.OnEvent = (e) => {
            if (this.isDisposed) {
                return;
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["f" /* RecognitionTriggeredEvent */] && e.RequestId === this.requestId) {
                this.listeningTriggerMetric = {
                    End: e.EventTime,
                    Name: "ListeningTrigger",
                    Start: e.EventTime,
                };
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["g" /* AudioStreamNodeAttachingEvent */] && e.AudioSourceId === this.audioSourceId && e.AudioNodeId === this.audioNodeId) {
                this.micStartTime = e.EventTime;
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["f" /* AudioStreamNodeAttachedEvent */] && e.AudioSourceId === this.audioSourceId && e.AudioNodeId === this.audioNodeId) {
                this.micStartTime = e.EventTime;
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["b" /* AudioSourceErrorEvent */] && e.AudioSourceId === this.audioSourceId) {
                if (!this.micMetric) {
                    this.micMetric = {
                        End: e.EventTime,
                        Error: e.Error,
                        Name: "Microphone",
                        Start: this.micStartTime,
                    };
                }
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["i" /* AudioStreamNodeErrorEvent */] && e.AudioSourceId === this.audioSourceId && e.AudioNodeId === this.audioNodeId) {
                if (!this.micMetric) {
                    this.micMetric = {
                        End: e.EventTime,
                        Error: e.Error,
                        Name: "Microphone",
                        Start: this.micStartTime,
                    };
                }
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["h" /* AudioStreamNodeDetachedEvent */] && e.AudioSourceId === this.audioSourceId && e.AudioNodeId === this.audioNodeId) {
                if (!this.micMetric) {
                    this.micMetric = {
                        End: e.EventTime,
                        Name: "Microphone",
                        Start: this.micStartTime,
                    };
                }
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_1__RecognitionEvents__["a" /* ConnectingToServiceEvent */] && e.RequestId === this.requestId) {
                this.connectionId = e.ConnectionId;
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["q" /* ConnectionStartEvent */] && e.ConnectionId === this.connectionId) {
                this.connectionStartTime = e.EventTime;
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["l" /* ConnectionEstablishedEvent */] && e.ConnectionId === this.connectionId) {
                if (!this.connectionEstablishMetric) {
                    this.connectionEstablishMetric = {
                        End: e.EventTime,
                        Id: this.connectionId,
                        Name: "Connection",
                        Start: this.connectionStartTime,
                    };
                }
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["k" /* ConnectionEstablishErrorEvent */] && e.ConnectionId === this.connectionId) {
                if (!this.connectionEstablishMetric) {
                    this.connectionEstablishMetric = {
                        End: e.EventTime,
                        Error: this.GetConnectionError(e.StatusCode),
                        Id: this.connectionId,
                        Name: "Connection",
                        Start: this.connectionStartTime,
                    };
                }
            }
            if (e instanceof __WEBPACK_IMPORTED_MODULE_0__common_Exports__["n" /* ConnectionMessageReceivedEvent */] && e.ConnectionId === this.connectionId) {
                if (e.Message && e.Message.Headers && e.Message.Headers.path) {
                    if (!this.receivedMessages[e.Message.Headers.path]) {
                        this.receivedMessages[e.Message.Headers.path] = new Array();
                    }
                    this.receivedMessages[e.Message.Headers.path].push(e.NetworkReceivedTime);
                }
            }
        };
        this.GetTelemetry = () => {
            const metrics = new Array();
            if (this.listeningTriggerMetric) {
                metrics.push(this.listeningTriggerMetric);
            }
            if (this.micMetric) {
                metrics.push(this.micMetric);
            }
            if (this.connectionEstablishMetric) {
                metrics.push(this.connectionEstablishMetric);
            }
            const telemetry = {
                Metrics: metrics,
                ReceivedMessages: this.receivedMessages,
            };
            const json = JSON.stringify(telemetry);
            // We dont want to send the same telemetry again. So clean those out.
            this.receivedMessages = {};
            this.listeningTriggerMetric = null;
            this.micMetric = null;
            this.connectionEstablishMetric = null;
            return json;
        };
        this.Dispose = () => {
            this.isDisposed = true;
        };
        this.GetConnectionError = (statusCode) => {
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ServiceTelemetryListener;



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

const PathHeaderName = "path";
const ContentTypeHeaderName = "content-type";
const RequestIdHeaderName = "x-requestid";
const RequestTimestampHeaderName = "x-timestamp";
class SpeechConnectionMessage extends __WEBPACK_IMPORTED_MODULE_0__common_Exports__["m" /* ConnectionMessage */] {
    constructor(messageType, path, requestId, contentType, body, additionalHeaders, id) {
        if (!path) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("path");
        }
        if (!requestId) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("requestId");
        }
        const headers = {};
        headers[PathHeaderName] = path;
        headers[RequestIdHeaderName] = requestId;
        headers[RequestTimestampHeaderName] = new Date().toISOString();
        if (contentType) {
            headers[ContentTypeHeaderName] = contentType;
        }
        if (additionalHeaders) {
            for (const headerName in additionalHeaders) {
                if (headerName) {
                    headers[headerName] = additionalHeaders[headerName];
                }
            }
        }
        if (id) {
            super(messageType, body, headers, id);
        }
        else {
            super(messageType, body, headers);
        }
        this.path = path;
        this.requestId = requestId;
        this.contentType = contentType;
        this.additionalHeaders = additionalHeaders;
    }
    get Path() {
        return this.path;
    }
    get RequestId() {
        return this.requestId;
    }
    get ContentType() {
        return this.contentType;
    }
    get AdditionalHeaders() {
        return this.additionalHeaders;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SpeechConnectionMessage;

SpeechConnectionMessage.FromConnectionMessage = (message) => {
    let path = null;
    let requestId = null;
    let contentType = null;
    let requestTimestamp = null;
    const additionalHeaders = {};
    if (message.Headers) {
        for (const headerName in message.Headers) {
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


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecognitionStatus; });
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
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

const CRLF = "\r\n";
class WebsocketMessageFormatter {
    constructor() {
        this.ToConnectionMessage = (message) => {
            const deferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            try {
                if (message.MessageType === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text) {
                    const textMessage = message.TextContent;
                    let headers = {};
                    let body = null;
                    if (textMessage) {
                        const headerBodySplit = textMessage.split("\r\n\r\n");
                        if (headerBodySplit && headerBodySplit.length > 0) {
                            headers = this.ParseHeaders(headerBodySplit[0]);
                            if (headerBodySplit.length > 1) {
                                body = headerBodySplit[1];
                            }
                        }
                    }
                    deferral.Resolve(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["m" /* ConnectionMessage */](message.MessageType, body, headers, message.Id));
                }
                else if (message.MessageType === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Binary) {
                    const binaryMessage = message.BinaryContent;
                    let headers = {};
                    let body = null;
                    if (!binaryMessage || binaryMessage.byteLength < 2) {
                        throw new Error("Invalid binary message format. Header length missing.");
                    }
                    const dataView = new DataView(binaryMessage);
                    const headerLength = dataView.getInt16(0);
                    if (binaryMessage.byteLength < headerLength + 2) {
                        throw new Error("Invalid binary message format. Header content missing.");
                    }
                    let headersString = "";
                    for (let i = 0; i < headerLength; i++) {
                        headersString += String.fromCharCode((dataView).getInt8(i + 2));
                    }
                    headers = this.ParseHeaders(headersString);
                    if (binaryMessage.byteLength > headerLength + 2) {
                        body = binaryMessage.slice(2 + headerLength);
                    }
                    deferral.Resolve(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["m" /* ConnectionMessage */](message.MessageType, body, headers, message.Id));
                }
            }
            catch (e) {
                deferral.Reject(`Error formatting the message. Error: ${e}`);
            }
            return deferral.Promise();
        };
        this.FromConnectionMessage = (message) => {
            const deferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            try {
                if (message.MessageType === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text) {
                    const payload = `${this.MakeHeaders(message)}${CRLF}${message.TextBody ? message.TextBody : ""}`;
                    deferral.Resolve(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["B" /* RawWebsocketMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Text, payload, message.Id));
                }
                else if (message.MessageType === __WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Binary) {
                    const headersString = this.MakeHeaders(message);
                    const content = message.BinaryBody;
                    const fr = new FileReader();
                    fr.onload = () => {
                        const headerInt8Array = new Int8Array(fr.result);
                        const payload = new ArrayBuffer(2 + headerInt8Array.byteLength + (content ? content.byteLength : 0));
                        const dataView = new DataView(payload);
                        dataView.setInt16(0, headerInt8Array.length);
                        for (let i = 0; i < headerInt8Array.byteLength; i++) {
                            dataView.setInt8(2 + i, headerInt8Array[i]);
                        }
                        if (content) {
                            const bodyInt8Array = new Int8Array(content);
                            for (let i = 0; i < bodyInt8Array.byteLength; i++) {
                                dataView.setInt8(2 + headerInt8Array.byteLength + i, bodyInt8Array[i]);
                            }
                        }
                        deferral.Resolve(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["B" /* RawWebsocketMessage */](__WEBPACK_IMPORTED_MODULE_0__common_Exports__["x" /* MessageType */].Binary, payload, message.Id));
                    };
                    fr.onerror = () => {
                        deferral.Reject("failed to load headers into file reader");
                    };
                    fr.readAsArrayBuffer(new Blob([headersString]));
                }
            }
            catch (e) {
                deferral.Reject(`Error formatting the message. ${e}`);
            }
            return deferral.Promise();
        };
        this.MakeHeaders = (message) => {
            let headersString = "";
            if (message.Headers) {
                for (const header in message.Headers) {
                    if (header) {
                        headersString += `${header}: ${message.Headers[header]}${CRLF}`;
                    }
                }
            }
            return headersString;
        };
        this.ParseHeaders = (headersString) => {
            const headers = {};
            if (headersString) {
                const headerMatches = headersString.match(/[^\r\n]+/g);
                if (headers) {
                    for (const header of headerMatches) {
                        if (header) {
                            const separatorIndex = header.indexOf(":");
                            const headerName = separatorIndex > 0 ? header.substr(0, separatorIndex).trim().toLowerCase() : header;
                            const headerValue = separatorIndex > 0 && header.length > (separatorIndex + 1) ?
                                header.substr(separatorIndex + 1).trim() :
                                "";
                            headers[headerName] = headerValue;
                        }
                    }
                }
            }
            return headers;
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WebsocketMessageFormatter;



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Recognizer__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Recognizer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SpeechConnectionFactory__ = __webpack_require__(16);
/* unused harmony namespace reexport */




/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRecognizer; });
/* unused harmony export CreateRecognizerWithCustomAudioSource */
/* unused harmony export CreateRecognizerWithFileAudioSource */
/* unused harmony export CreateRecognizerWithPcmRecorder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_browser_Exports__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speech_Exports__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SpeechConnectionFactory__ = __webpack_require__(16);



const CreateRecognizer = (recognizerConfig, authentication) => {
    return CreateRecognizerWithPcmRecorder(recognizerConfig, authentication);
};
const CreateRecognizerWithPcmRecorder = (recognizerConfig, authentication) => {
    return CreateRecognizerWithCustomAudioSource(recognizerConfig, authentication, new __WEBPACK_IMPORTED_MODULE_0__common_browser_Exports__["b" /* MicAudioSource */](new __WEBPACK_IMPORTED_MODULE_0__common_browser_Exports__["c" /* PcmRecorder */]()));
};
const CreateRecognizerWithFileAudioSource = (recognizerConfig, authentication, file) => {
    return CreateRecognizerWithCustomAudioSource(recognizerConfig, authentication, new __WEBPACK_IMPORTED_MODULE_0__common_browser_Exports__["a" /* FileAudioSource */](file));
};
const CreateRecognizerWithCustomAudioSource = (recognizerConfig, authentication, audioSource) => {
    return new __WEBPACK_IMPORTED_MODULE_1__speech_Exports__["g" /* Recognizer */](authentication, new __WEBPACK_IMPORTED_MODULE_2__SpeechConnectionFactory__["a" /* SpeechConnectionFactory */](), audioSource, recognizerConfig);
};



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

class ConsoleLoggingListener {
    constructor(logLevelFilter = __WEBPACK_IMPORTED_MODULE_0__common_Exports__["v" /* EventType */].Warning) {
        this.OnEvent = (event) => {
            if (event.EventType >= this.logLevelFilter) {
                const log = this.ToString(event);
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
        this.ToString = (event) => {
            const logFragments = [
                `${event.EventTime}`,
                `${event.Name}`,
            ];
            for (const prop in event) {
                if (prop && event.hasOwnProperty(prop) && prop !== "eventTime" && prop !== "eventType" && prop !== "eventId" && prop !== "name" && prop !== "constructor") {
                    const value = event[prop];
                    let valueToLog = "<NULL>";
                    if (value !== undefined && value !== null) {
                        if (typeof (value) === "number" || typeof (value) === "string") {
                            valueToLog = value.toString();
                        }
                        else {
                            valueToLog = JSON.stringify(value);
                        }
                    }
                    logFragments.push(`${prop}: ${valueToLog}`);
                }
            }
            return logFragments.join(" | ");
        };
        this.logLevelFilter = logLevelFilter;
    }
}
/* unused harmony export ConsoleLoggingListener */



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

class LocalStorage {
    constructor() {
        this.Get = (key) => {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            return localStorage.getItem(key);
        };
        this.GetOrAdd = (key, valueToAdd) => {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            const value = localStorage.getItem(key);
            if (value === null || value === undefined) {
                localStorage.setItem(key, valueToAdd);
            }
            return localStorage.getItem(key);
        };
        this.Set = (key, value) => {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            localStorage.setItem(key, value);
        };
        this.Remove = (key) => {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            localStorage.removeItem(key);
        };
    }
}
/* unused harmony export LocalStorage */



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

class MicAudioSource {
    constructor(recorder, audioSourceId) {
        this.streams = {};
        this.TurnOn = () => {
            if (this.initializeDeferral) {
                return this.initializeDeferral.Promise();
            }
            this.initializeDeferral = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["t" /* Deferred */]();
            const nav = window.navigator;
            window.navigator.getUserMedia = (window.navigator.getUserMedia ||
                window.navigator.webkitGetUserMedia ||
                window.navigator.mozGetUserMedia ||
                window.navigator.msGetUserMedia);
            if (!window.navigator.getUserMedia) {
                const errorMsg = "Browser does not support getUserMedia.";
                this.initializeDeferral.Reject(errorMsg);
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["b" /* AudioSourceErrorEvent */](errorMsg, "")); // mic initialized error - no streamid at this point
            }
            else {
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["c" /* AudioSourceInitializingEvent */](this.id)); // no stream id
                window.navigator.getUserMedia({ audio: true }, (mediaStream) => {
                    this.mediaStream = mediaStream;
                    this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["e" /* AudioSourceReadyEvent */](this.id));
                    this.initializeDeferral.Resolve(true);
                }, (error) => {
                    const errorMsg = `Error occurred processing the user media stream. ${error}`;
                    const tmp = this.initializeDeferral;
                    // HACK: this should be handled through onError callbacks of all promises up the stack.
                    // Unfortunately, the current implementation does not provide an easy way to reject promises
                    // without a lot of code replication.
                    // TODO: fix promise implementation, allow for a graceful reject chaining.
                    this.initializeDeferral = null;
                    tmp.Reject(errorMsg); // this will bubble up through the whole chain of promises,
                    // with each new level adding extra "Unhandled callback error" prefix to the error message.
                    // The following line is not guaranteed to be executed.
                    this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["b" /* AudioSourceErrorEvent */](this.id, errorMsg));
                });
            }
            return this.initializeDeferral.Promise();
        };
        this.Id = () => {
            return this.id;
        };
        this.Attach = (audioNodeId) => {
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["g" /* AudioStreamNodeAttachingEvent */](this.id, audioNodeId));
            return this.Listen(audioNodeId).OnSuccessContinueWith((streamReader) => {
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["f" /* AudioStreamNodeAttachedEvent */](this.id, audioNodeId));
                return {
                    Detach: () => {
                        streamReader.Close();
                        delete this.streams[audioNodeId];
                        this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["h" /* AudioStreamNodeDetachedEvent */](this.id, audioNodeId));
                        this.TurnOff();
                    },
                    Id: () => {
                        return audioNodeId;
                    },
                    Read: () => {
                        return streamReader.Read();
                    },
                };
            });
        };
        this.Detach = (audioNodeId) => {
            if (audioNodeId && this.streams[audioNodeId]) {
                this.streams[audioNodeId].Close();
                delete this.streams[audioNodeId];
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["h" /* AudioStreamNodeDetachedEvent */](this.id, audioNodeId));
            }
        };
        this.TurnOff = () => {
            for (const streamId in this.streams) {
                if (streamId) {
                    const stream = this.streams[streamId];
                    if (stream) {
                        stream.Close();
                    }
                }
            }
            this.recorder.ReleaseMediaResources();
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["d" /* AudioSourceOffEvent */](this.id)); // no stream now
            this.initializeDeferral = null;
            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(true);
        };
        this.Listen = (audioNodeId) => {
            return this.TurnOn()
                .OnSuccessContinueWith((_) => {
                const stream = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["E" /* Stream */](audioNodeId);
                this.streams[audioNodeId] = stream;
                try {
                    this.recorder.Record(this.mediaStream, stream);
                }
                catch (error) {
                    this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["i" /* AudioStreamNodeErrorEvent */](this.id, audioNodeId, error));
                    throw error;
                }
                return stream.GetReader();
            });
        };
        this.OnEvent = (event) => {
            this.events.OnEvent(event);
            __WEBPACK_IMPORTED_MODULE_0__common_Exports__["w" /* Events */].Instance.OnEvent(event);
        };
        this.id = audioSourceId ? audioSourceId : Object(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["s" /* CreateNoDashGuid */])();
        this.events = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["u" /* EventSource */]();
        this.recorder = recorder;
    }
    get Events() {
        return this.events;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MicAudioSource;



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_browser_Exports__ = __webpack_require__(7);


class FileAudioSource {
    constructor(file, audioSourceId) {
        this.streams = {};
        this.TurnOn = () => {
            if (typeof FileReader === "undefined") {
                const errorMsg = "Browser does not support FileReader.";
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["b" /* AudioSourceErrorEvent */](errorMsg, "")); // initialization error - no streamid at this point
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError(errorMsg);
            }
            else if (this.file.name.lastIndexOf(".wav") !== this.file.name.length - 4) {
                const errorMsg = this.file.name + " is not supported. Only WAVE files are allowed at the moment.";
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["b" /* AudioSourceErrorEvent */](errorMsg, ""));
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError(errorMsg);
            }
            else if (this.file.size > FileAudioSource.MAX_SIZE) {
                const errorMsg = this.file.name + " exceeds the maximum allowed file size (" + FileAudioSource.MAX_SIZE + ").";
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["b" /* AudioSourceErrorEvent */](errorMsg, ""));
                return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromError(errorMsg);
            }
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["c" /* AudioSourceInitializingEvent */](this.id)); // no stream id
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["e" /* AudioSourceReadyEvent */](this.id));
            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(true);
        };
        this.Id = () => {
            return this.id;
        };
        this.Attach = (audioNodeId) => {
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["g" /* AudioStreamNodeAttachingEvent */](this.id, audioNodeId));
            return this.Upload(audioNodeId).OnSuccessContinueWith((streamReader) => {
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["f" /* AudioStreamNodeAttachedEvent */](this.id, audioNodeId));
                return {
                    Detach: () => {
                        streamReader.Close();
                        delete this.streams[audioNodeId];
                        this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["h" /* AudioStreamNodeDetachedEvent */](this.id, audioNodeId));
                        this.TurnOff();
                    },
                    Id: () => {
                        return audioNodeId;
                    },
                    Read: () => {
                        return streamReader.Read();
                    },
                };
            });
        };
        this.Detach = (audioNodeId) => {
            if (audioNodeId && this.streams[audioNodeId]) {
                this.streams[audioNodeId].Close();
                delete this.streams[audioNodeId];
                this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["h" /* AudioStreamNodeDetachedEvent */](this.id, audioNodeId));
            }
        };
        this.TurnOff = () => {
            for (const streamId in this.streams) {
                if (streamId) {
                    const stream = this.streams[streamId];
                    if (stream && !stream.IsClosed) {
                        stream.Close();
                    }
                }
            }
            this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["d" /* AudioSourceOffEvent */](this.id)); // no stream now
            return __WEBPACK_IMPORTED_MODULE_0__common_Exports__["z" /* PromiseHelper */].FromResult(true);
        };
        this.Upload = (audioNodeId) => {
            return this.TurnOn()
                .OnSuccessContinueWith((_) => {
                const stream = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["E" /* Stream */](audioNodeId);
                this.streams[audioNodeId] = stream;
                const reader = new FileReader();
                let startOffset = 0;
                let endOffset = FileAudioSource.CHUNK_SIZE;
                let lastWriteTimestamp = 0;
                const processNextChunk = (event) => {
                    if (stream.IsClosed) {
                        return; // output stream was closed (somebody called TurnOff). We're done here.
                    }
                    if (lastWriteTimestamp !== 0) {
                        const delay = Date.now() - lastWriteTimestamp;
                        if (delay < FileAudioSource.UPLOAD_INTERVAL) {
                            // It's been less than the "upload interval" since we've uploaded the
                            // last chunk. Schedule the next upload to make sure that we're sending
                            // upstream roughly one chunk per upload interval.
                            new __WEBPACK_IMPORTED_MODULE_1__common_browser_Exports__["d" /* Timer */](FileAudioSource.UPLOAD_INTERVAL - delay, processNextChunk).start();
                            return;
                        }
                    }
                    stream.Write(reader.result);
                    lastWriteTimestamp = Date.now();
                    if (endOffset < this.file.size) {
                        startOffset = endOffset;
                        endOffset = Math.min(endOffset + FileAudioSource.CHUNK_SIZE, this.file.size);
                        const chunk = this.file.slice(startOffset, endOffset);
                        reader.readAsArrayBuffer(chunk);
                    }
                    else {
                        // we've written the entire file to the output stream, can close it now.
                        stream.Close();
                    }
                };
                reader.onload = processNextChunk;
                reader.onerror = (event) => {
                    const errorMsg = `Error occurred while processing '${this.file.name}'. ${event.error}`;
                    this.OnEvent(new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["i" /* AudioStreamNodeErrorEvent */](this.id, audioNodeId, event.error));
                    throw new Error(errorMsg);
                };
                const chunk = this.file.slice(startOffset, endOffset);
                reader.readAsArrayBuffer(chunk);
                return stream.GetReader();
            });
        };
        this.OnEvent = (event) => {
            this.events.OnEvent(event);
            __WEBPACK_IMPORTED_MODULE_0__common_Exports__["w" /* Events */].Instance.OnEvent(event);
        };
        this.id = audioSourceId ? audioSourceId : Object(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["s" /* CreateNoDashGuid */])();
        this.events = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["u" /* EventSource */]();
        this.file = file;
    }
    get Events() {
        return this.events;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FileAudioSource;

// Recommended sample rate (bytes/second).
FileAudioSource.SAMPLE_RATE = 16000 * 2; // 16 kHz * 16 bits
// We should stream audio at no faster than 2x real-time (i.e., send five chunks
// per second, with the chunk size == sample rate in bytes per second * 2 / 5).
FileAudioSource.CHUNK_SIZE = FileAudioSource.SAMPLE_RATE * 2 / 5;
FileAudioSource.UPLOAD_INTERVAL = 200; // milliseconds
// 10 seconds of audio in bytes =
// sample rate (bytes/second) * 600 (seconds) + 44 (size of the wave header).
FileAudioSource.MAX_SIZE = FileAudioSource.SAMPLE_RATE * 600 + 44;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class OpusRecorder {
    constructor(options) {
        this.Record = (mediaStream, outputStream) => {
            const mediaRecorder = new MediaRecorder(mediaStream, this.mediaRecorderOptions);
            const timeslice = 100; // this is in ms - 100 ensures that the chunk doesn't exceed the max size of chunk allowed in WS connection
            mediaRecorder.ondataavailable = (dataAvailableEvent) => {
                if (outputStream) {
                    const reader = new FileReader();
                    reader.readAsArrayBuffer(dataAvailableEvent.data);
                    reader.onloadend = (event) => {
                        outputStream.Write(reader.result);
                    };
                }
            };
            this.mediaResources = {
                recorder: mediaRecorder,
                stream: mediaStream,
            };
            mediaRecorder.start(timeslice);
        };
        this.ReleaseMediaResources = () => {
            if (this.mediaResources.recorder.state !== "inactive") {
                this.mediaResources.recorder.stop();
            }
            this.mediaResources.stream.getTracks().forEach((track) => track.stop());
        };
        this.mediaRecorderOptions = options;
    }
}
/* unused harmony export OpusRecorder */

/* Declaring this inline to avoid compiler warnings
declare class MediaRecorder {
    constructor(mediaStream: MediaStream, options: any);

    public state: string;

    public ondataavailable(dataAvailableEvent: any): void;
    public stop(): void;
}*/


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

class PcmRecorder {
    constructor() {
        this.Record = (mediaStream, outputStream) => {
            // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
            const contextCtor = (window.AudioContext)
                || (window.webkitAudioContext)
                || false;
            if (!contextCtor) {
                throw new Error("Browser does not support Web Audio API (AudioContext is not available).");
            }
            const audioContext = new contextCtor();
            // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource
            const mediaStreamSource = audioContext.createMediaStreamSource(mediaStream);
            const desiredSampleRate = 16000;
            // let compressionRatio = mediaStreamSource.context.sampleRate / desiredSampleRate;
            let bufferSize = 2048;
            let isFirstFrameWritten = false;
            if (desiredSampleRate * 4 <= mediaStreamSource.context.sampleRate) {
                bufferSize = 8192;
            }
            else if (desiredSampleRate * 2 <= mediaStreamSource.context.sampleRate) {
                bufferSize = 4096;
            }
            // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createScriptProcessor
            const scriptNode = mediaStreamSource.context.createScriptProcessor(bufferSize, 1, 1);
            const waveStreamEncoder = new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["C" /* RiffPcmEncoder */](mediaStreamSource.context.sampleRate, desiredSampleRate);
            scriptNode.onaudioprocess = (audioProcessingEvent) => {
                const monoAudioChunk = audioProcessingEvent.inputBuffer.getChannelData(0);
                let encodedAudioFrameWithRiffHeader;
                let encodedAudioFrame;
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
            this.mediaResources = {
                context: audioContext,
                scriptProcessorNode: scriptNode,
                source: mediaStreamSource,
                stream: mediaStream,
            };
            mediaStreamSource.connect(scriptNode);
            scriptNode.connect(mediaStreamSource.context.destination);
        };
        this.ReleaseMediaResources = () => {
            if (this.mediaResources) {
                if (this.mediaResources.scriptProcessorNode) {
                    this.mediaResources.scriptProcessorNode.disconnect();
                    this.mediaResources.scriptProcessorNode = null;
                }
                if (this.mediaResources.source) {
                    this.mediaResources.source.disconnect();
                    this.mediaResources.stream.getTracks().forEach((track) => track.stop());
                    this.mediaResources.source = null;
                }
                if (this.mediaResources.context && this.mediaResources.context.state !== "closed") {
                    this.mediaResources.context.close();
                }
            }
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PcmRecorder;



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);

class SessionStorage {
    constructor() {
        this.Get = (key) => {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            return sessionStorage.getItem(key);
        };
        this.GetOrAdd = (key, valueToAdd) => {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            const value = sessionStorage.getItem(key);
            if (value === null || value === undefined) {
                sessionStorage.setItem(key, valueToAdd);
            }
            return sessionStorage.getItem(key);
        };
        this.Set = (key, value) => {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            sessionStorage.setItem(key, value);
        };
        this.Remove = (key) => {
            if (!key) {
                throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("key");
            }
            sessionStorage.removeItem(key);
        };
    }
}
/* unused harmony export SessionStorage */



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Timer {
    constructor(delayInMillisec, successCallback) {
        this.start = (...params) => {
            if (this.timerId) {
                this.stop();
            }
            this.timerId = setTimeout(this.successCallback, this.delayInMillisec, params);
        };
        this.stop = () => {
            clearTimeout(this.timerId);
        };
        this.delayInMillisec = delayInMillisec;
        this.successCallback = successCallback;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Timer;



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_Exports__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WebsocketMessageAdapter__ = __webpack_require__(15);


class WebsocketConnection {
    constructor(uri, queryParameters, headers, messageFormatter, connectionId) {
        this.isDisposed = false;
        this.Dispose = () => {
            this.isDisposed = true;
            if (this.connectionMessageAdapter) {
                this.connectionMessageAdapter.Close();
            }
        };
        this.IsDisposed = () => {
            return this.isDisposed;
        };
        this.State = () => {
            return this.connectionMessageAdapter.State;
        };
        this.Open = () => {
            return this.connectionMessageAdapter.Open();
        };
        this.Send = (message) => {
            return this.connectionMessageAdapter.Send(message);
        };
        this.Read = () => {
            return this.connectionMessageAdapter.Read();
        };
        if (!uri) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("uri");
        }
        if (!messageFormatter) {
            throw new __WEBPACK_IMPORTED_MODULE_0__common_Exports__["a" /* ArgumentNullError */]("messageFormatter");
        }
        this.messageFormatter = messageFormatter;
        let queryParams = "";
        let i = 0;
        if (queryParameters) {
            for (const paramName in queryParameters) {
                if (paramName) {
                    queryParams += i === 0 ? "?" : "&";
                    const val = encodeURIComponent(queryParameters[paramName]);
                    queryParams += `${paramName}=${val}`;
                    i++;
                }
            }
        }
        if (headers) {
            for (const headerName in headers) {
                if (headerName) {
                    queryParams += i === 0 ? "?" : "&";
                    const val = encodeURIComponent(headers[headerName]);
                    queryParams += `${headerName}=${val}`;
                    i++;
                }
            }
        }
        this.uri = uri + queryParams;
        this.id = connectionId ? connectionId : Object(__WEBPACK_IMPORTED_MODULE_0__common_Exports__["s" /* CreateNoDashGuid */])();
        this.connectionMessageAdapter = new __WEBPACK_IMPORTED_MODULE_1__WebsocketMessageAdapter__["a" /* WebsocketMessageAdapter */](this.uri, this.Id, this.messageFormatter);
    }
    get Id() {
        return this.id;
    }
    get Events() {
        return this.connectionMessageAdapter.Events;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WebsocketConnection;



/***/ })
/******/ ]);
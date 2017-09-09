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
    function SpeechRecognitionEvent(typeArg) {
        if (typeArg === void 0) { typeArg = 'result'; }
        var _this = _super.call(this, typeArg) || this;
        return Object.defineProperties(_this, {
            "emma": { value: null, writable: false },
            "resultIndex": { value: 0, writable: false },
            "results": { value: [], writable: false },
            "interpretation": { value: null, writable: false }
        });
    }
    return SpeechRecognitionEvent;
}(Event));
export { SpeechRecognitionEvent };

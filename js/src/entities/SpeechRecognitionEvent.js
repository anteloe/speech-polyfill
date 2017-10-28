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
var SpeechRecognitionEvent = /** @class */ (function (_super) {
    __extends(SpeechRecognitionEvent, _super);
    function SpeechRecognitionEvent(typeArg) {
        if (typeArg === void 0) { typeArg = 'result'; }
        return _super.call(this, typeArg) || this;
    }
    return SpeechRecognitionEvent;
}(Event));
export { SpeechRecognitionEvent };
export function createResultEvent(results, resultIndex, interpretation, emma) {
    if (resultIndex === void 0) { resultIndex = 0; }
    if (interpretation === void 0) { interpretation = null; }
    if (emma === void 0) { emma = null; }
    var event = new SpeechRecognitionEvent();
    return Object.defineProperties(event, {
        target: { value: this, writable: false },
        emma: { value: emma, writable: false },
        resultIndex: { value: resultIndex, writable: false },
        results: { value: results, writable: false },
        interpretation: { value: interpretation, writable: false }
    });
}

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
var SpeechGrammarList = /** @class */ (function (_super) {
    __extends(SpeechGrammarList, _super);
    function SpeechGrammarList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpeechGrammarList.prototype.addFromUri = function (uri, weight) {
        if (weight === void 0) { weight = 1.0; }
        this.push({ src: uri, weight: weight });
    };
    SpeechGrammarList.prototype.addFromsString = function (grammar, weight) {
        if (weight === void 0) { weight = 1.0; }
        this.push({
            src: "data:application/xml," + encodeURIComponent(grammar),
            weight: weight
        });
    };
    return SpeechGrammarList;
}(Array));
export { SpeechGrammarList };

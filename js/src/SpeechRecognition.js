import { resolveLang } from "./helpers/LanguageResolver";
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
        this.lang = resolveLang(document.documentElement.lang || navigator.language);
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
export { SpeechRecognition };

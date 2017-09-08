import { resolveLang } from "./helpers/LanguageResolver";
// include the needed parts of the library. webpack will treeshake all unneeded stuff.
import { CognitiveSubscriptionKeyAuthentication, Context, Device, OS, RecognizerConfig, RecognitionMode, SpeechConfig, SpeechResultFormat } from "microsoft-speech-browser-sdk/src/sdk/speech/Exports";
import { CreateRecognizer } from "microsoft-speech-browser-sdk/src/sdk/speech.browser/Exports";
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
        var speechConfig = new SpeechConfig(new Context(new OS('Speech', 'Speech', null), new Device(navigator.userAgent, 'Browser', '1.0.0.0')));
        var recognitionMode = this.interimResults ? RecognitionMode.Conversation : RecognitionMode.Dictation;
        var language = resolveLang(this.lang);
        var resultFormat = SpeechResultFormat.Detailed;
        // configure and authenticate recognizer
        var config = new RecognizerConfig(speechConfig, recognitionMode, language, resultFormat);
        var auth = new CognitiveSubscriptionKeyAuthentication(this.apiKey);
        // create and return recognizer based on the prepared configuration
        return CreateRecognizer(config, auth);
    };
    return SpeechRecognition;
}());
export { SpeechRecognition };

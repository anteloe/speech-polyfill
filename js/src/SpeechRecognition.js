import { createSpeechRecognitionResult } from './entities';
import { resolveLang } from "./helpers";
// include the needed parts of the library. webpack will treeshake all unneeded stuff.
import { CognitiveSubscriptionKeyAuthentication, Context, Device, OS, RecognizerConfig, RecognitionMode, RecognitionStatus, SpeechConfig, SpeechResultFormat } from "microsoft-speech-browser-sdk/src/sdk/speech/Exports";
import { CreateRecognizer } from "microsoft-speech-browser-sdk/src/sdk/speech.browser/Exports";
var SpeechRecognition = /** @class */ (function () {
    function SpeechRecognition(apiKey) {
        this.apiKey = apiKey;
        this.recognizer = null;
        this.onaudiostart = null;
        // won't be triggered
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
        this.recognizer.Recognize(this.handleEvent.bind(this))
            .On(this.recognitionStartSuccess.bind(this), this.recognitionStartFailed.bind(this));
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
        var eventName = event.name;
        switch (eventName) {
            case "RecognitionTriggeredEvent":
                console.log('start');
                break;
            case "ListeningStartedEvent":
                console.log('audiostart');
                break;
            case "RecognitionStartedEvent":
                console.log('speechstart');
                break;
            case "RecognitionEndedEvent":
                console.log("speechend");
                break;
            default:
                console.log(eventName);
        }
        if (event.result) {
            this.handleResult(event.result);
        }
        if (event.error) {
            console.error(event.error);
        }
    };
    SpeechRecognition.prototype.handleResult = function (event) {
        var status = RecognitionStatus[event.RecognitionStatus];
        var results = event.results;
        switch (status) {
            case RecognitionStatus.Success:
                console.log('got something', event);
                if (this.onresult) {
                    this.onresult.call(this.recognizer, createSpeechRecognitionResult(results, this.maxAlternatives));
                }
                // call onresult;
                break;
            case RecognitionStatus.Error:
                console.log('error', event);
                // call onerror;
                break;
            case RecognitionStatus.NoMatch:
                console.log('no match', event);
                // call onnomatch;
                break;
            case RecognitionStatus.InitialSilenceTimeout:
            case RecognitionStatus.EndOfDictation:
            case RecognitionStatus.BabbleTimeout:
                console.log('something happened', event);
                // call onend;
                break;
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
        var recognitionMode = this.interimResults ? RecognitionMode.Interactive : RecognitionMode.Conversation;
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

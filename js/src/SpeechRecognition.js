import { createFinalResult, createIntermediateResult, createResultEvent } from './entities';
import { resolveLang } from "./helpers";
// include the needed parts of the library. webpack will treeshake all unneeded stuff.
import { CognitiveSubscriptionKeyAuthentication, Context, Device, OS, RecognizerConfig, RecognitionMode, RecognitionStatus, SpeechConfig, SpeechResultFormat } from "microsoft-speech-browser-sdk/src/sdk/speech/Exports";
import { CreateRecognizer } from "microsoft-speech-browser-sdk/src/sdk/speech.browser/Exports";
export class SpeechRecognition {
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
            this.onresult.call(this.recognizer, createResultEvent([createIntermediateResult(result)]));
        }
    }
    handleResult({ result, error }) {
        if (error) {
            return;
        }
        const status = RecognitionStatus[result.RecognitionStatus];
        switch (status) {
            case RecognitionStatus.Success:
                if (this.onresult) {
                    const results = createFinalResult(result.NBest, this.maxAlternatives);
                    this.onresult.call(this.recognizer, createResultEvent([results]));
                }
                break;
            case RecognitionStatus.Error:
                if (this.onerror) {
                    this.onerror.call(this, error);
                }
                break;
            case RecognitionStatus.NoMatch:
                if (this.onnomatch) {
                    this.onnomatch.call(this, error);
                }
                // call onnomatch;
                break;
            case RecognitionStatus.InitialSilenceTimeout:
            case RecognitionStatus.EndOfDictation:
            case RecognitionStatus.BabbleTimeout:
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
        const speechConfig = new SpeechConfig(new Context(new OS('Speech', 'Speech', null), new Device(navigator.userAgent, 'Browser', '1.0.0.0')));
        const recognitionMode = this.interimResults ? RecognitionMode.Interactive : RecognitionMode.Conversation;
        const language = resolveLang(this.lang);
        const resultFormat = SpeechResultFormat.Detailed;
        // configure and authenticate recognizer
        const config = new RecognizerConfig(speechConfig, recognitionMode, language, resultFormat);
        const auth = new CognitiveSubscriptionKeyAuthentication(this.apiKey);
        // create and return recognizer based on the prepared configuration
        return CreateRecognizer(config, auth);
    }
}

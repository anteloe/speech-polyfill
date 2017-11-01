import { ISpeechRecognition, ISpeechGrammarList, ICoginitiveServiceSpeechResult } from "./contracts";
import { SpeechRecognitionEvent, createFinalResult, createIntermediateResult, createResultEvent } from './entities'
import { resolveLang } from "./helpers";

// include the needed parts of the library. webpack will treeshake all unneeded stuff.
import { 
    CognitiveSubscriptionKeyAuthentication,
    Context,
    Device,
    OS,
    Recognizer,
    RecognizerConfig,
    RecognitionMode,
    RecognitionStatus,
    SpeechConfig,
    SpeechResultFormat
 } from "microsoft-speech-browser-sdk/src/sdk/speech/Exports";
import { CreateRecognizer } from "microsoft-speech-browser-sdk/src/sdk/speech.browser/Exports";

type RecognitionEventName = "RecognitionTriggeredEvent"
    | "ListeningStartedEvent"
    | "ConnectingToServiceEvent"
    | "RecognitionStartedEvent"
    | "SpeechHypothesisEvent"
    | "SpeechEndDetectedEvent"
    | "SpeechDetailedPhraseEvent"
    | "RecognitionEndedEvent";

export class SpeechRecognition implements ISpeechRecognition{
    private recognizer: Recognizer = null;

    constructor(private apiKey: string) {}

    start(): void {
        if(!this.recognizer){
            if(!this.apiKey){
                throw new Error('no api key specified');
            }
            this.recognizer = this.setupRecognizer();
        }
        this.recognizer.Recognize(this.handleEvent.bind(this))
            .On(this.recognitionStartSuccess.bind(this), this.recognitionStartFailed.bind(this));
    }
    stop(): void {
        if(this.recognizer){
            this.recognizer.AudioSource.TurnOff();
        }
    }
    abort(): void {
        if(this.recognizer){
            this.recognizer.AudioSource.TurnOff();
        }
    }

    private handleEvent(event){
        const eventName: RecognitionEventName = event.name;

        switch(eventName){
            case "RecognitionTriggeredEvent": {
                if(this.onstart){
                    this.onstart.call(this);
                }
                return;
            }
            case "ListeningStartedEvent":{
                if(this.onaudiostart){
                    this.onaudiostart.call(this);
                }
                return;
            }
            case "RecognitionStartedEvent": {
                if(this.onspeechstart){
                    this.onspeechstart.call(this);
                }
                return;
            }
            case "RecognitionEndedEvent": {
                if(this.onend){
                    this.onend.call(this);
                }
                return;
            }
            case "SpeechHypothesisEvent":{
                return this.handleHypothesis(event);
            }
            case "SpeechDetailedPhraseEvent": {
                return this.handleResult(event);
            }
            case "SpeechEndDetectedEvent":{
                if(this.onspeechend){
                    this.onspeechend.call(this);
                }
                return;
            }
            case "ConnectingToServiceEvent": {
                console.log("connecting to translation services");
                return;
            }
        }

        if(event.error){
            if(this.onerror){
                this.onerror.call(this, event.error);
            }
        }
    }

    private handleHypothesis({result, error}){
        if (error) {
            return;
        }
        
        if(result.Text && this.onresult){
            this.onresult.call(this.recognizer, createResultEvent([createIntermediateResult(result)]));
        }
    }

    private handleResult({result, error}){
        if (error) {
            return;
        }
        
        const results = createFinalResult(result.NBest, this.maxAlternatives)
        const status = RecognitionStatus[(<string>result.RecognitionStatus)]
        
        switch(status){
            case RecognitionStatus.Success:
                if(this.onresult){
                    this.onresult.call(this.recognizer, createResultEvent([results]));
                }
                break;
            case RecognitionStatus.Error:
                if(this.onerror){
                    this.onerror.call(this, error)
                }
                break;
            case RecognitionStatus.NoMatch:
                if(this.onnomatch){
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
            // default:
            //     console.log('falled into default', event);
                // log unexpected case
        }
    }

    private recognitionStartSuccess(listening: boolean){
        console.log('start');
    }

    private recognitionStartFailed(error){
        console.log('failed', error)
    }

    private setupRecognizer(){
        // prepare recognizer configuration
        const speechConfig = new SpeechConfig(new Context(
            new OS('Speech', 'Speech', null),
            new Device(navigator.userAgent, 'Browser', '1.0.0.0')
        ));
        const recognitionMode = this.interimResults ? RecognitionMode.Interactive : RecognitionMode.Conversation;
        const language = resolveLang(this.lang);
        const resultFormat = SpeechResultFormat.Detailed;

        // configure and authenticate recognizer
        const config = new RecognizerConfig(speechConfig, recognitionMode, language, resultFormat);
        const auth = new CognitiveSubscriptionKeyAuthentication(this.apiKey);

        // create and return recognizer based on the prepared configuration
        return CreateRecognizer(config, auth);
    }

    onaudiostart: () => void = null;
    onaudioend: () => void = null;
    onstart: () => void = null;
    onend: () => void = null;
    onerror: (event: any) => void = null;
    onnomatch: () => void = null;
    onresult: (event: any) => void = null;
    onsoundstart: () => void = null;
    onsoundend: () => void = null;
    onspeechstart: () => void = null;
    onspeechend: () => void = null;

    grammars: ISpeechGrammarList;
    lang: string = document.documentElement.lang || navigator.language;
    continuous: boolean = false;
    interimResults: boolean = false;
    maxAlternatives: number = 1;
    serviceURI: string = 'https://api.cognitive.microsoft.com/sts/v1.0';
}
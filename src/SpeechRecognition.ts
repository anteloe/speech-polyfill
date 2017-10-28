import { ISpeechRecognition, ISpeechGrammarList, ICoginitiveServiceSpeechResult } from "./contracts";
import { SpeechRecognitionEvent, createSpeechRecognitionResult } from './entities'
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

        if(event.result){
            this.handleResult(event.result);
        }
        if(event.error){
            console.error(event.error);
        }
    }

    private handleResult(event){
        const status = RecognitionStatus[(<string>event.RecognitionStatus)]
        const results = <ICoginitiveServiceSpeechResult[]>event.results;
        
        switch(status){
            case RecognitionStatus.Success:
                console.log('got something', event);

                if(this.onresult){
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
            // default:
            //     console.log('falled into default', event);
                // log unexpected case
        }
    }

    private recognitionStartSuccess(listening: boolean){
        console.log('recognition started');
    }

    private recognitionStartFailed(error){
        console.log('recognition start failed', error)
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
    // won't be triggered
    onaudioend: () => void = null;
    onstart: () => void = null;
    onend: () => void = null;
    onerror: (event: any) => void = null;
    onnomatch: () => void = null;
    onresult: (event: any) => void = null;
    // won't be triggered yet
    onsoundstart: () => void;
    onsoundend: () => void;
    onspeechstart: () => void;
    // won't be triggered yet
    onspeechend: () => void;

    grammars: ISpeechGrammarList;
    lang: string = document.documentElement.lang || navigator.language;
    continuous: boolean = false;
    interimResults: boolean = false;
    maxAlternatives: number = 1;
    serviceURI: string = 'https://api.cognitive.microsoft.com/sts/v1.0';
}
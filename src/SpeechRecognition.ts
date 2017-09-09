import { ISpeechRecognition, ISpeechGrammarList } from "./contracts";
import { SpeechRecognitionEvent } from './entities'
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
        console.log(`${event.name} triggered`);
        if(event.result){
            this.handleResult(event.result);
        }

        if(event.error){
            console.error(event.error);
        }
    }

    private handleResult(result){
        const status = RecognitionStatus[(<string>result.RecognitionStatus)]
        const x = new SpeechRecognitionEvent();
        console.log('my event', x);
        
        switch(status){
            case RecognitionStatus.Success:
                console.log('got something', result);
                // call onresult;
                break;
            case RecognitionStatus.Error:
                console.log('error', result);
                // call onerror;
                break;
            case RecognitionStatus.NoMatch:
                console.log('no match', result);
                // call onnomatch;
                break;
            case RecognitionStatus.InitialSilenceTimeout:
            case RecognitionStatus.EndOfDictation:
            case RecognitionStatus.BabbleTimeout:
                console.log('something happened', result);
                // call onend;
                break;
            default:
                console.log('falled into default', result);
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
        const recognitionMode = this.interimResults ? RecognitionMode.Conversation : RecognitionMode.Dictation;
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
    onsoundstart: () => void;
    onsoundend: () => void;
    onspeechstart: () => void;
    onspeechend: () => void;

    grammars: ISpeechGrammarList;
    lang: string = document.documentElement.lang || navigator.language;
    continuous: boolean = false;
    interimResults: boolean = false;
    maxAlternatives: number = 1;
    serviceURI: string = 'https://api.cognitive.microsoft.com/sts/v1.0';
}
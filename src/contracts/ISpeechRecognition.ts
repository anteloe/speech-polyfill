import { ISpeechGrammarList } from "./ISpeechGrammarList";
import { SpeechRecognitionEvent } from "../SpeechRecognitionEvent";

export interface ISpeechRecognition{
    start():void;
    stop():void;
    abort():void;


    // EVENTS
    onresult: (event: any) => void;
    onerror: (event: any) => void;
    onnomatch: (event: any) => void;

    /**
     * The onaudiostart property of the SpeechRecognition interface represents an event handler that will run when the user agent has started to capture audio (when the audiostart event fires.)
     */
    onaudiostart: () => void;
    /**
     * The onaudioend property of the SpeechRecognition interface represents an event handler that will run when the user agent has finished capturing audio (when the audioend event fires.)
     */
    onaudioend: () => void;

    /**
     * The onstart property of the SpeechRecognition interface represents an event handler that will run when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition (when the start event fires.)
     */
    onstart: () => void;
    /**
     * The onend property of the SpeechRecognition interface represents an event handler that will run when the speech recognition service has disconnected (when the end event fires.)
     */
    onend: () => void;

    /**
     * The onsoundstart property of the SpeechRecognition interface represents an event handler that will run when any sound — recognisable speech or not — has been detected (when the soundstart event fires.)
     */
    onsoundstart: () => void;
    /**
     * The onsoundend property of the SpeechRecognition interface represents an event handler that will run when any sound — recognisable speech or not — has stopped being detected (when the soundend event fires.)
     */
    onsoundend: () => void;

    /**
     * The onsoundstart property of the SpeechRecognition interface represents an event handler that will run when any sound — recognisable speech or not — has been detected (when the soundstart event fires.)
     */
    onspeechstart: () => void;
    /**
     * The onspeechend property of the SpeechRecognition interface represents an event handler that will run when speech recognised by the speech recognition service has stopped being detected (when the speechend event fires.)
     */
    onspeechend: () => void;

    // PROPERTIES
    grammars: ISpeechGrammarList;
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    serviceURI: string;
}
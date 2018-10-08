import { ISpeechGrammarList } from '../contracts';
export interface ISpeechRecognition {
    start(): void;
    stop(): void;
    abort(): void;
    onresult: ((event: any) => void) | null;
    onerror: ((event: any) => void) | null;
    onnomatch: ((event: any) => void) | null;
    /**
     * The onaudiostart property of the SpeechRecognition interface represents an event handler that will run when the user agent has started to capture audio (when the audiostart event fires.)
     */
    onaudiostart: (() => void) | null;
    /**
     * The onaudioend property of the SpeechRecognition interface represents an event handler that will run when the user agent has finished capturing audio (when the audioend event fires.)
     */
    onaudioend: (() => void) | null;
    /**
     * The onstart property of the SpeechRecognition interface represents an event handler that will run when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition (when the start event fires.)
     */
    onstart: (() => void) | null;
    /**
     * The onend property of the SpeechRecognition interface represents an event handler that will run when the speech recognition service has disconnected (when the end event fires.)
     */
    onend: (() => void) | null;
    /**
     * The onsoundstart property of the SpeechRecognition interface represents an event handler that will run when any sound — recognisable speech or not — has been detected (when the soundstart event fires.)
     */
    onsoundstart: (() => void) | null;
    /**
     * The onsoundend property of the SpeechRecognition interface represents an event handler that will run when any sound — recognisable speech or not — has stopped being detected (when the soundend event fires.)
     */
    onsoundend: (() => void) | null;
    /**
     * The onsoundstart property of the SpeechRecognition interface represents an event handler that will run when any sound — recognisable speech or not — has been detected (when the soundstart event fires.)
     */
    onspeechstart: (() => void) | null;
    /**
     * The onspeechend property of the SpeechRecognition interface represents an event handler that will run when speech recognised by the speech recognition service has stopped being detected (when the speechend event fires.)
     */
    onspeechend: (() => void) | null;
    grammars: ISpeechGrammarList;
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    serviceURI: string;
}

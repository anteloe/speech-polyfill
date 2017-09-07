import { ISpeechGrammarList } from "./ISpeechGrammarList";

export interface ISpeechRecognition{
    start():void;
    stop():void;
    abort():void;

    // EVENTS
    onaudiostart: () => void;
    onaudioend: () => void;
    onstart: () => void;
    onend: () => void;
    onerror: (event: any) => void;
    onnomatch: () => void;
    onresult: (event: any) => void;

    // PROPERTIES
    grammars: ISpeechGrammarList;
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;
    serviceURI: string;
}
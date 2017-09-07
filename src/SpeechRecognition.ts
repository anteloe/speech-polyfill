import { ISpeechRecognition } from "./contracts/ISpeechRecognition";
import { ISpeechGrammarList } from "./contracts/ISpeechGrammarList";
import { resolveLang } from "./helpers/LanguageResolver";

// include the needed parts of the library. webpack will treeshake all unneeded stuff.
// import {  } from "microsoft-speech-browser-sdk/src/sdk/speech/Exports";
// import {  } from "microsoft-speech-browser-sdk/src/sdk/speech.browser/Exports";

export class SpeechRecognition implements ISpeechRecognition{

    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    abort(): void {
        throw new Error("Method not implemented.");
    }

    onaudiostart: () => void = null;
    onaudioend: () => void = null;
    onstart: () => void = null;
    onend: () => void = null;
    onerror: (event: any) => void = null;
    onnomatch: () => void = null;
    onresult: (event: any) => void = null;

    grammars: ISpeechGrammarList;
    lang: string = resolveLang(document.documentElement.lang || navigator.language);
    continuous: boolean = false;
    interimResults: boolean = false;
    maxAlternatives: number = 1;
    serviceURI: string = '';
}
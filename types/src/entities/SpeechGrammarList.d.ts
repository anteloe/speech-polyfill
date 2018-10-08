import { ISpeechGrammarList, ISpeechGrammar } from '../contracts';
export declare class SpeechGrammarList extends Array<ISpeechGrammar> implements ISpeechGrammarList {
    addFromUri(uri: string, weight?: number): void;
    addFromsString(grammar: string, weight?: number): void;
}

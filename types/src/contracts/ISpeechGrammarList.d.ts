export interface ISpeechGrammarList {
    addFromUri(uri: string, weight?: number): any;
    addFromsString(grammar: string, weight?: number): any;
}

export interface ISpeechGrammarList{
    addFromUri(uri: string, weight?: number);
    addFromsString(grammar: string, weight?: number);
}
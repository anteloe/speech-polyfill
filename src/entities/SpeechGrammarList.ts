import { ISpeechGrammarList, ISpeechGrammar } from '../contracts';

export class SpeechGrammarList extends Array<ISpeechGrammar> implements ISpeechGrammarList {
    addFromUri(uri: string, weight: number = 1.0): void {
        this.push({src: uri, weight});
    }

    addFromsString(grammar: string, weight: number = 1.0): void {
        this.push({
            src: `data:application/xml,${encodeURIComponent(grammar)}`,
            weight: weight
        })
    }
}

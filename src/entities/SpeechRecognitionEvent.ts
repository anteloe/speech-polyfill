import { ISpeechRecoginitionResult } from "../contracts";
export class SpeechRecognitionEvent extends Event{
    constructor(typeArg: string = 'result'){
        super(typeArg);
    }
}

export function createResultEvent(results: Array<ISpeechRecoginitionResult>, resultIndex: number = 0, interpretation: string = null, emma: XMLDocument = null){
    const event = new SpeechRecognitionEvent();

    return Object.defineProperties(event, {
        target: { value: this, writable: false },
        emma: { value: emma, writable: false },
        resultIndex: { value: resultIndex, writable: false },
        results: { value: results, writable: false },
        interpretation: { value: interpretation, writable: false }
    });
}
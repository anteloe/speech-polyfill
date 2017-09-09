import { ISpeechRecognitionResultList } from "../contracts";

export class SpeechRecognitionEvent extends Event{
    constructor(typeArg: string = 'result'){
        super(typeArg);

        return Object.defineProperties(this, {
            "emma": { value: null, writable: false },
            "resultIndex": { value: 0, writable: false },
            "results": { value: [], writable: false},
            "interpretation": { value: null, writable: false}
        });
    }
}
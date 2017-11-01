export class SpeechRecognitionEvent extends Event {
    constructor(typeArg = 'result') {
        super(typeArg);
    }
}
export function createResultEvent(results, resultIndex = 0, interpretation = null, emma = null) {
    const event = new SpeechRecognitionEvent();
    return Object.defineProperties(event, {
        target: { value: this, writable: false },
        emma: { value: emma, writable: false },
        resultIndex: { value: resultIndex, writable: false },
        results: { value: results, writable: false },
        interpretation: { value: interpretation, writable: false }
    });
}

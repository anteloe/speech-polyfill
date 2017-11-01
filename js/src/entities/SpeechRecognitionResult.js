class SpeechRecognitionResult extends Array {
    constructor() {
        super(...arguments);
        this.isFinal = false;
    }
}
function toIntermediateResult({ Text }) {
    return {
        confidence: .5,
        transcript: Text
    };
}
function toFinalResult({ Confidence, Display }) {
    return {
        confidence: Confidence,
        transcript: Display
    };
}
export function createIntermediateResult(alternative) {
    return new SpeechRecognitionResult(toIntermediateResult(alternative));
}
export function createFinalResult(alternatives, maxAlternatives) {
    const transformed = alternatives
        .slice(0, maxAlternatives)
        .map(toFinalResult);
    const result = new SpeechRecognitionResult(...transformed);
    result.isFinal = true;
    return result;
}

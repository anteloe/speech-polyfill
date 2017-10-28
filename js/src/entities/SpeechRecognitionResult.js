var SpeechRecognitionResult = /** @class */ (function () {
    function SpeechRecognitionResult() {
    }
    return SpeechRecognitionResult;
}());
export var createSpeechRecognitionResult = function (results, maxAlternatives) {
    // create a blank result ()
    var result = new SpeechRecognitionResult();
    // add results on the object and let them be indexable
    var length = results
        .slice(0, maxAlternatives)
        .reduce(function (sum, result, index) {
        event[index] = {
            confidence: result.Confidence,
            transcript: result.ITN
        };
        return sum + 1;
    }, 0);
    // set read-only props for length and isFinal (isFinal will always be true for now)
    Object.defineProperties(result, {
        length: { value: length, writable: false },
        isFinal: { value: true, writable: false }
    });
    return result;
};

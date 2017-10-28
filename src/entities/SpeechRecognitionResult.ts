import { ISpeechRecoginitionAlternative, ISpeechRecoginitionResult, ICoginitiveServiceSpeechResult } from "../contracts";

class SpeechRecognitionResult implements ISpeechRecoginitionResult {
    isFinal: boolean;
    length: boolean;
}

export const createSpeechRecognitionResult: (results: ICoginitiveServiceSpeechResult[], maxAlternatives: number) => ISpeechRecoginitionResult = (results, maxAlternatives) => {
    // create a blank result ()
    const result = new SpeechRecognitionResult();

    // add results on the object and let them be indexable
    const length = results
        .slice(0, maxAlternatives)
        .reduce((sum: number, result: ICoginitiveServiceSpeechResult, index: number) => {
            event[index] = <ISpeechRecoginitionAlternative> {
                confidence: result.Confidence,
                transcript: result.ITN
            }
            return sum + 1;
        }, 0);

    // set read-only props for length and isFinal (isFinal will always be true for now)
    Object.defineProperties( result, {
        length: { value: length, writable: false},
        isFinal: { value: true, writable: false}
    });

    return result;
}
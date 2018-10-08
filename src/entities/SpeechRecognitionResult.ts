import { ISpeechRecoginitionAlternative, ISpeechRecoginitionResult, ICoginitiveServiceSpeechHypothesis, ICoginitiveServiceSpeechResult } from '../contracts';

class SpeechRecognitionResult extends Array<ISpeechRecoginitionAlternative> implements ISpeechRecoginitionResult {
    isFinal: boolean = false;
}

function toIntermediateResult({ Text }: ICoginitiveServiceSpeechHypothesis): ISpeechRecoginitionAlternative {
    return {
        confidence: .5,
        transcript: Text
    }
}

function toFinalResult({ Confidence, Display }: ICoginitiveServiceSpeechResult): ISpeechRecoginitionAlternative {
    return {
        confidence: Confidence,
        transcript: Display
    }
}

export function createIntermediateResult(alternative: ICoginitiveServiceSpeechHypothesis): ISpeechRecoginitionResult {
    return new SpeechRecognitionResult(toIntermediateResult(alternative));
}

export function createFinalResult(alternatives: ICoginitiveServiceSpeechResult[], maxAlternatives: number): ISpeechRecoginitionResult {
    const transformed = alternatives
        .slice(0, maxAlternatives)
        .map(toFinalResult);
    const result = new SpeechRecognitionResult(...transformed);
    result.isFinal = true;
    return result;
}

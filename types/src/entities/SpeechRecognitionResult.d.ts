import { ISpeechRecoginitionResult, ICoginitiveServiceSpeechHypothesis, ICoginitiveServiceSpeechResult } from "../contracts";
export declare function createIntermediateResult(alternative: ICoginitiveServiceSpeechHypothesis): ISpeechRecoginitionResult;
export declare function createFinalResult(alternatives: ICoginitiveServiceSpeechResult[], maxAlternatives: number): ISpeechRecoginitionResult;

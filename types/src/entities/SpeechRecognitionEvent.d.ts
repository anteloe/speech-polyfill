import { ISpeechRecoginitionResult } from "../contracts";
export declare class SpeechRecognitionEvent extends Event {
    constructor(typeArg?: string);
}
export declare function createResultEvent(results: Array<ISpeechRecoginitionResult>, resultIndex?: number, interpretation?: string, emma?: XMLDocument): any;

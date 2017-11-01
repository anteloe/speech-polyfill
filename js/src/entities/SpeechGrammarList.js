export class SpeechGrammarList extends Array {
    addFromUri(uri, weight = 1.0) {
        this.push({ src: uri, weight });
    }
    addFromsString(grammar, weight = 1.0) {
        this.push({
            src: `data:application/xml,${encodeURIComponent(grammar)}`,
            weight: weight
        });
    }
}

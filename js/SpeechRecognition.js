var SpeechRecognition = (function () {
    function SpeechRecognition(apiKey) {
        this.apiKey = apiKey;
        this.continuous = false;
    }
    return SpeechRecognition;
}());
export { SpeechRecognition };

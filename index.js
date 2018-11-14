import { SpeechRecognition } from './js/src/SpeechRecognition';

export * from './js/src/SpeechRecognition';

if (Promise === undefined) {
    throw new Error('Promises are not supported in this browser. Use this polyfill: https://www.npmjs.com/package/es6-promise');
}
// polyfill mediaDevices.getUserMedia
if (!navigator.mediaDevices) navigator.mediaDevices = {};
navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || (function () {
    // returns a getUserMedia function
    let getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    return function (constraints) {
        if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }
        return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
        });
    };
})();
// polyfill speechRecognition
(function (speechRecognition) {
    window.SpeechRecognition = speechRecognition || SpeechRecognition;
})(window.SpeechRecognition || window.webkitSpeechRecognition);

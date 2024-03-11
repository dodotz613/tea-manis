const detectLanguage = require('deteksi_bahasa');

const textToDetect = 'GM indo bros';

const detectedLanguage = detectLanguage.detect(textToDetect);

console.log(Detected language: ${detectedLanguage});
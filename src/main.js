const data = require('./answer.json');
const sha1 = require('js-sha1');

encrypted = data.cifrado

const CaesarDecryption = (textData, shift) => {
    var encryptedText = textData.toLowerCase()
    var plainString = ""
    for(var i = 0; i < encryptedText.length; i++) {
        var encryptedChar = encryptedText.charCodeAt(i);
        if(encryptedChar >= 97 && encryptedChar <= 122) {
            plainString += String.fromCharCode((encryptedChar - 97 - shift + 26) % 26 + 97 ); // pega a posicao da letra quando soma 65 acha o numero em ascii
        } else {
            plainString += String.fromCharCode(encryptedChar);
        }
    }
    return plainString;
}
var decryptedData = (CaesarDecryption(encrypted, 1))

const sha1Encrypter = (data) => {
    return sha1(data)
}

const sha1Data = sha1Encrypter(decryptedData)

console.log(sha1Data)
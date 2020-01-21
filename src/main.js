const data = require('./answer.json')

encrypted = data.cifrado

const CaesarDecryption = (textData, shift) => {
    var encryptedText = textData.toLowerCase()
    var plainString = "";
    for(var i = 0; i < encryptedText.length; i++) {
        var encryptedChar = encryptedText.charCodeAt(i);
        if(encryptedChar >= 97 && encryptedChar <= 122) {
            plainString += String.fromCharCode((encryptedChar - 97 - shift + 26) % 26 + 97 ); // no parenteses pega a posicao da letra quando soma 65 acha o numero em ascii
        } else {
            plainString += String.fromCharCode(encryptedChar);
        }
    }
    return plainString;
}
console.log(CaesarDecryption(encrypted, 1))
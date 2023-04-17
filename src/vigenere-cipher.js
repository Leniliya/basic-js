const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value) {
    this.direct = value;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let arrMess = message.toUpperCase().split('');
    let keyIndex = 0;
    for (let i = 0; i < arrMess.length; i++) {
      if (arrMess[i].codePointAt() >= 65 && arrMess[i].codePointAt() <= 90) {
        let char = arrMess[i].codePointAt() - 65;
        let keyChar = key[keyIndex].toUpperCase().codePointAt() - 65;
        let resChar = char + keyChar;
        if (resChar < 26) {
          arrMess[i] = String.fromCodePoint(resChar + 65);
        } else {
          arrMess[i] = String.fromCodePoint(resChar - 26 + 65);
        }
        keyIndex++;
        if (keyIndex === key.length) {
          keyIndex = 0;
        }
      }
    }
    if (this.direct === false) {
      return arrMess.reverse().join('');
    } else {
      return arrMess.join('');
    }
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    let arrMess = encryptedMessage.toUpperCase().split('');
    let keyIndex = 0;
    for (let i = 0; i < arrMess.length; i++) {
      if (arrMess[i].codePointAt() >= 65 && arrMess[i].codePointAt() <= 90) {
        let char = arrMess[i].codePointAt() - 65;
        let keyChar = key[keyIndex].toUpperCase().codePointAt() - 65;
        let resChar = char - keyChar;
        if (resChar < 0) {
          arrMess[i] = String.fromCodePoint(resChar + 26 + 65);
        } else {
          arrMess[i] = String.fromCodePoint(resChar + 65);
        }
        keyIndex++;
        if (keyIndex === key.length) {
          keyIndex = 0;
        }
      }
    }
    if (this.direct === false) {
      return arrMess.reverse().join('');
    } else {
      return arrMess.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // substitution alphabet 26 characters long.
    if (!alphabet || alphabet.length !== 26) return false;

    const firstAlphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = input.toLowerCase().split("");
    const subAlphabet = alphabet.toLowerCase().split("");
                                                                                                                                                                                                                   
    // substitution alphabet can not have any repeated characters
    const uniqueCharacters = subAlphabet.filter(
      (element, index, charachter) => charachter.indexOf(element) === index
    );
    if (uniqueCharacters.length !== alphabet.length) return false;

    const encodeMessage = () => {
      let result = [];
      const encode = (char) => {
        const charIndex = firstAlphabetArray.indexOf(char);
        const encodedChar = subAlphabet[charIndex];
        result.push(encodedChar);
      };
      inputArray.forEach((char) => {
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };

    const decodedMessage = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = subAlphabet.indexOf(char);
        const decodedCharacter = firstAlphabetArray[charIndex];
        result.push(decodedCharacter);
      };
      inputArray.forEach((char) => {
        // preserves space or encodes character
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };

    // with errors now handled, next decide to encode or decode.
    return encode ? encodeMessage() : decodedMessage();
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

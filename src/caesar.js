// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function toSecretCode(array) {
    return array.map((element) => {
      const code = element.toLowerCase().charCodeAt();
      return code >= 97 && code <= 122 ? code : element;
    });
  }

  function caesar(input, shift, encode = true) {
    // Checks for shift
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    }
    // sets decoder
    if (encode === false) {
      shift = shift * -1;
    }
    
    let inputArray = input.split("");
    let inputNumbers = toSecretCode(inputArray);
    
    let shiftedNumbers = inputNumbers.map((num) => {
      return typeof num === "number" ? num + shift : num;
    });
    //  handles case where the shift goes left of a or right of z
    let correctedNumbers = shiftedNumbers.map((num) => {
      if (typeof num === "number") {
        if (num< 97) {
          return num + 26;
        }
        if (num > 122) {
          return num- 26;
        }
      }
      return num;
    });

    //converts unicode back into a string for the resulting output
    let outputArray = correctedNumbers.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return outputArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

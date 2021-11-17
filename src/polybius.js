const polybiusModule = (function () {
  function polybius(input, encode = true) {
    //global variables
    let alphabet = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];

    // encoding
    if (encode) {
      let inputArray = input.split("");
//        correctedInputArray:
//         - replaces any i or j in the input string to be (i/j) 
     
      let correctedInputArray = inputArray.map((string) => {
        let lower = string.toLowerCase();
        if (lower === "i" || lower === "j") {
          return "(i/j)";
        }
        return lower;
      });

      // Finds X and Y coordinates
      let xArray = [];
      let yArray = correctedInputArray.map((letter) => {
        for (let i = 0; i < alphabet.length; i++) {
          const row = alphabet[i];
          if (row.find((alpha) => alpha === letter)) {
            // adds x-coordinate when "row" meets condition. "+1" corrects for x/y axis given in prompt
            xArray.push(i + 1);
            // adds Y-coordinate.  "+1" corrects for x/y axis given in prompt
            return row.indexOf(letter) + 1;
          }
        }
      });

      // adds x-coordinate and y-coordinate arrays together 
      result = xArray.reduce((acc, xValue, index) => {
        let coordinate = `${yArray[index]}${xValue}`;
        if (coordinate === "65") {
          coordinate = " ";
        }
        acc.push(coordinate);
        return acc;
      }, []);
    }

    // decoding
    if (!encode) {
      let addSpace = input.replace(" ", 65);
      if (addSpace.length % 2 !== 0) return false;
      let coordinates = addSpace.match(/..?/g);
      result = coordinates.map((yx) => {
        let rowIndex = yx.split("")[1] - 1;
        let columnIndex = yx.split("")[0] - 1;
        return alphabet[rowIndex][columnIndex];
      });
    }
    // output
    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
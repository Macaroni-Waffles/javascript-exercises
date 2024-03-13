const palindromes = function(originalWord) {
    let lettersAndNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";
    let lettersAndNumbersArray = Array.from(lettersAndNumbers);
        console.log(lettersAndNumbersArray);
        console.log(originalWord);
    let wordLowerCase = originalWord.toLowerCase();
      console.log(`wordLowerCase is: ${wordLowerCase}`);
    let wordAsArray = Array.from(wordLowerCase);
      console.log(`wordAsArray is: ${wordAsArray}`);
    let noPunctuation = wordAsArray.filter((character) => lettersAndNumbersArray.includes(character));
      console.log(`noPunctuation is: ${noPunctuation}`);
    originalWord = noPunctuation.join("");
      console.log(`originalWord as string is: ${originalWord}`);
  //   wordAsArray.replace(/[\W_,\,]/g, "");
    let reverseWord = noPunctuation.reverse();
      console.log(`reverseWord is: ${reverseWord}`);
    reverseWord = reverseWord.join(""); // .join("") creates a continuous string while removing the commas automatically. .string() would leave commas in.
      console.log(`reverseWord as string is: ${reverseWord}`);
    
    if (originalWord === reverseWord) {
        return true;
    };
    else {
        return false;
    };
  };

// Do not edit below this line
module.exports = palindromes;

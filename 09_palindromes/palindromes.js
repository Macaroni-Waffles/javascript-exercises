const palindromes = function(word) {
    let wordAsArray = Array.from(word); // w, o, r, d
    let reverseWord = wordAsArray.reverse(); //d, r, o, w
    reverseWord = reverseWord.toString(); //drow
    if (word === reverseWord) {
        return false;
    }
    else {
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;

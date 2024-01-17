const reverseString = function(string) {
 //   let stringArray = string.split("");
   // stringArrayReverse = stringArray.reverse();
    //let stringReverse = stringArrayReverse.join("");
    return string.split("").reverse().join("");
};

/*
pseudocode

spilt given string into an array of characters
reverse the order of the characters
make the array back into a string? OR can i return an array backwards?
return string

can stack methods: split, reverse, and join!

*/

// Do not edit below this line
module.exports = reverseString;

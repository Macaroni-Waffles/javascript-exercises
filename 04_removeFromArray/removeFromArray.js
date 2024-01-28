const removeFromArray = function(array, ...toRemove) {
    let arrayRemoved = array.filter(element => !toRemove.includes(element));
    return arrayRemoved;    
 };

//loop over an array to find any matches
//take these matches out of the original array
//return original array minus matches


// Do not edit below this line
module.exports = removeFromArray;


/* to remove one argument only

const removeFromArray = function(array, toRemove) {
    // let toRemove = [...arguments];
     let arrayRemoved = array.filter(function (element) {
        return element !== toRemove;
     });
     return arrayRemoved;    
 };
 
 */
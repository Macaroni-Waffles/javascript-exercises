const removeFromArray = function(array, toRemove) {
    let arrayRemoved = array.filter(function (element) {
        return element !== toRemove;
    });
    return arrayRemoved;    
};




// Do not edit below this line
module.exports = removeFromArray;

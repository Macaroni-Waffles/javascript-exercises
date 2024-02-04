const sumAll = function(firstNumber, secondNumber) {
    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
        let finalSum = 0;
        if (firstNumber < secondNumber) {
            for (let i = firstNumber; i <= secondNumber; i++) {
                finalSum += i;
            }
            if (finalSum < 0) {
                return "ERROR";
            }
            else {
                return finalSum;
            }
        }
        else {
            for (let i = secondNumber; i <= firstNumber; i++) {
                finalSum += i;
        }
            if (finalSum < 0) {
                return "ERROR";
            }
            else {
                return finalSum;
            }
        }
    
    }
    else {
        return "ERROR";
    }
};



// Do not edit below this line
module.exports = sumAll;
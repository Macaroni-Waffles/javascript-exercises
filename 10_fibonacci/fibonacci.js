const fibonacci = function(number) {
    let numberAsInteger = parseInt(number); // to account for user input as string
    let a = 0;
    let b = 1;
    let nextNumber = 0;
    let array = [];
    if (numberAsInteger < 0) { // to account for negative numbers entered
        return "OOPS"
    }
    else if (numberAsInteger === 0) { //to account for 0 entered
        return 0;
    }
    else {
        while (array.length < numberAsInteger) {
            array.push(b); // adds the number to the end of the array
            nextNumber = a + b;
            a = b;
            b = nextNumber;   
        }
        console.log(array);
        return array[array.length - 1];
    }
};

// function that console.logs fibonacci numbers up to the entered number
        //sum the numbers in the last 2 indexes
        // add this sum to the end of the array
// create an array of fibonacci numbers
// search this array for the index and return the value in the index



// ( Fibonacci number ) is the sum of the two preceding numbers
// 1, 1, 2, 3, 5, 8

// Do not edit below this line
module.exports = fibonacci;

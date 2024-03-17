const findTheOldest = function(people) {
    const oldest = people.sort(function(person1, person2) {
        let eldest = person1.yearOfDeath - person1.yearOfBirth;
        console.log("eldest: " + eldest);
        let nextEldest = person2.yearOfDeath - person2.yearOfBirth;
        console.log("nextEldest: " + nextEldest);
        return eldest > nextEldest ? -1 : 1;
    })
    return oldest[0];
};


// for each person in people find out the age by taking birth year from death year
// make a new array which is person name and person age
// return the person object of the oldest person - match names

// if no death date, use javascript data function to insert todays date as death year




// Given an array of objects representing people with a birth and death year, return the oldest person.

// Now that you've reached the final exercise, you should be fairly comfortable getting the information you need from test case(s). Take a look at how the array of objects is constructed in this exercise's test cases to help you write your function.
// Hints

//     You should return the whole person object, but the tests mostly just check to make sure the name is correct.
//     This can be done with a couple of chained array methods, or by using reduce.
//     One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.




// Do not edit below this line
module.exports = findTheOldest;

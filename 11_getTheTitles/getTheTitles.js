const getTheTitles = function(arrayOfBooks) {
    return arrayOfBooks.map((itemInArray) => itemInArray.title);
};



// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]
  
//   Your job is to write a function that takes the array and returns an array of titles:
  
//   getTheTitles(books) // ['Book','Book2']


// Do not edit below this line
module.exports = getTheTitles;

// Sum the two largest numbers of an array
// Creating a new array without the .sort() function

const sumLargestNumbers = function(data) {
  const newArr = [];
  for (let num of data) {
    if (num >= data[0]) {
      newArr.unshift(num);
    }
  }
  return newArr[0] + newArr[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
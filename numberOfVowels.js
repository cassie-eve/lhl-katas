const numberOfVowels = function(data) {
  let vowels = 0;
  for (let letter of data) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      vowels += 1;
    }
  }
  return vowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
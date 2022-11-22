const camelCase = function(input) {
  const words = input.split(' ');
  let newString = words[0];
  for (let i = 1; i <= words.length - 1; i++) {
    newString += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
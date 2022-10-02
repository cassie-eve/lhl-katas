const urlEncode = function(text) {
  let newUrl = '';
  for (let letter of text.trim()) {
    if (letter === ' ') {
      newUrl += '%20';
    } else {
      newUrl += letter;
    }
  }
  return newUrl;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
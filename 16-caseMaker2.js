const makeCase = function(input, style) {
  const caseOrder = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
  const vowels = ["a", "e", "i", "o", "u"];
  let finalString = input;
  if (!Array.isArray(style)) {
    style = style.split(' ');
  }
  const camel = function(string) {
    const words = string.split(' ');
    let newString = words[0];
    for (let i = 1; i <= words.length - 1; i++) {
      newString += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    finalString = newString;
  };
  const pascal = function(string) {
    const words = string.split(' ');
    let newString = '';
    for (let i = 0; i < words.length; i++) {
      newString += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    finalString = newString;
  };
  const snake = function(string) {
    finalString = string.replaceAll(' ', '_').toLowerCase();
  };
  const kebab = function(string) {
    finalString = string.replaceAll(' ', '-').toLowerCase();
  };
  const title = function(string) {
    string = string.toLowerCase().split(' ');
    for (let i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    finalString = string.join(' ');
  };
  const vowel = function(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        newString += string[i].toUpperCase();
      } else {
        newString += string[i].toLowerCase();
      }
    }
    finalString = newString;
  };
  const consonant = function(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        newString += string[i].toLowerCase();
      } else {
        newString += string[i].toUpperCase();
      }
    }
    finalString = newString;
  };
  const upper = function(string) {
    finalString = string.toUpperCase();
  };
  const lower = function(string) {
    finalString = string.toLowerCase();
  };
  for (let type of caseOrder) {
    if (style.includes(type)) {
      switch (type) {
      case 'camel':
        camel(finalString);
        break;
      case 'pascal':
        pascal(finalString);
        break;
      case 'snake':
        snake(finalString);
        break;
      case 'kebab':
        kebab(finalString);
        break;
      case 'title':
        title(finalString);
        break;
      case 'vowel':
        vowel(finalString);
        break;
      case 'consonant':
        consonant(finalString);
        break;
      case 'upper':
        upper(finalString);
        break;
      case 'lower':
        lower(finalString);
        break;
      }
    }
  }
  return finalString;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
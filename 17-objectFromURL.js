const urlDecode = function(text) {
  let obj = {};
  const pairs = text.split('&');
  for (let pair of pairs) {
    let keyValue = pair.split('=');
    let key = keyValue[0];
    let value = keyValue[1].replaceAll('%20', ' ');
    obj[key] = value;
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
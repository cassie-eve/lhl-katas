const multiplicationTable = function(maxValue) {
  let table = '';
  for (let row = 1; row <= maxValue; row++) {
    for (let col = 1; col <= maxValue; col++) {
      table += `${row * col} `;
    }
    table += '\n';
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
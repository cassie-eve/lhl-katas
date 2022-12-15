const calculateChange = function(total, cash) {
  let change = cash - total;
  let obj = {};
  while (change > 0) {
    if (change >= 2000) {
      obj.twenty = Math.floor(change / 2000);
      change = change - obj.twenty * 2000;
    }

    if (change >= 1000) {
      obj.ten = Math.floor(change / 1000);
      change = change - obj.ten * 1000;
    }

    if (change >= 500) {
      obj.five = Math.floor(change / 500);
      change = change - obj.five * 500;
    }

    if (change >= 200) {
      obj.twonie = Math.floor(change / 200);
      change = change - obj.twonie * 200;
    }

    if (change >= 100) {
      obj.loonie = Math.floor(change / 100);
      change = change - obj.loonie * 100;
    }

    if (change >= 25) {
      obj.quarter = Math.floor(change / 25);
      change = change - obj.quarter * 25;
    }

    if (change >= 10) {
      obj.dime = Math.floor(change / 10);
      change = change - obj.dime * 10;
    }

    if (change >= 5) {
      obj.nickel = Math.floor(change / 5);
      change = change - obj.nickel * 5;
    }

    if (change >= 1) {
      obj.penny = Math.floor(change / 1);
      change = change - obj.penny * 1;
    }

  }
  return obj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
console.log(calculateChange(500, 10000));
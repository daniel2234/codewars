//Binary system
// 1,2,4,8,16,32,64,128

function addBinary(a,b) {
  let sum = a + b;
  let dividend = 0;
  let remainder = 0;
  let binaryString = '';

  while( sum > 0 ) {
    dividend = Math.floor(sum / 2);
    remainder = sum % 2;
    binaryString += remainder;
    sum = dividend;
  }

  return binaryString.split('').reverse().join('');
}

// add_binary(1, 1) == "10" (1 + 1 = 2 in decimal or 10 in binary)
// 2/2 = 1   remainder = 0
// 1
// add_binary(5, 9) == "1110" (5 + 9 = 14 in decimal or 1110 in binary)
// 2 + 4 + 8 = 14

//14 / 2 = 7 = 0
// 7 / 2 = 3 = 1
// 3 / 2 = 1 = 1
// 1 / 2 = 0 = 1

// console.log();
console.log(addBinary(1, 1));
console.log(addBinary(5, 9));
console.log(addBinary(10, 1));
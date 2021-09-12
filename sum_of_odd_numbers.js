function rowSumOddNumbers(n) {
  let increment = 1
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let num = 0;
    for (let j = 1; j < n-i; j++) {
      num = num + 0;
    }
    for (let k = 1; k <= (i+1); k++) {
      num = num + increment;
      increment += 2;
    }
    sum = num;
  }

  return sum;
}
console.log(rowSumOddNumbers(5));


//Given the triangle of consecutive odd numbers:
// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 --> 1
// 2 --> 3 + 5 = 8
// 3 --> 7 + 9 + 11 = 27
// 4 --> 13 + 15 + 17 + 19 = 64

// rowSumOddNumbers(1);
// rowSumOddNumbers(2);
// rowSumOddNumbers(3);
// console.log(rowSumOddNumbers(1));
// console.log(rowSumOddNumbers(2));
// console.log(rowSumOddNumbers(3));
// console.log(rowSumOddNumbers(4));

// rowSumOddNumbers(2);

 
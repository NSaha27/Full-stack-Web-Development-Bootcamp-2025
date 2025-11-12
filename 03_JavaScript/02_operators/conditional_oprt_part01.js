/*
  CONDITIONAL OPERATORS
  ---------------------

  == (is equal to, in terms of value only)
  != (is not equal to, in terms of value only)
  === (is similar to, both in terms of data type and value)
  !== (is not similar to, both in terms of data type and value)
  > (is the left operand greater than the right operand?)
  >= (is the left operand greater than or equal to the right operand?)
  < (is the left operand less than the right operand?)
  <= (is the left operand less than or equal to the right operand?)

*/

let num1 = 12;
let num2 = "12";
let num3 = 8;

console.log(`Is num1 equal to num2 : ${num1 == num2}`);
console.log(`Is num1 not equal to num3 : ${num1 != num3}`);
console.log(`Is num1 similar to num2 : ${num1 === num2}`);
console.log(`Is num1 not similar to num2 : ${num1 !== num2}`);
console.log(`Is num1 greater than num3 : ${num1 > num3}`);
console.log(`Is num2 greater than or equal to num3 : ${num2 >= num3}`);
console.log(`Is num1 less than or equal to num2 : ${num1 <= num2}`);

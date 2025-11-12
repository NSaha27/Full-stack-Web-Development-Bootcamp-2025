/*
  LOGICAL OPERATORS
  -----------------

  && - (logical AND) - (checks both the operands[sometimes conditions] are true or not)
  || - (logical OR) - (checks either of the operands[sometimes conditions] is true or not)
  ! - (logical NOT) - checks if the operand[sometimes conditions] is false or not

*/

let num1 = 9;
let num2 = "9";
let num3 = 11;

console.log(num1 === num2 && num1 < num3);
console.log(num1 == num2 && num1 < num3);
console.log(num1 > num3 || num2 < num3);
console.log(!(num1 !== num2));
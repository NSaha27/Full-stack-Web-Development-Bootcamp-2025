/* 
condition challenge 01 
----------------------
checking if a number is greater than, less than, or equal to another number
*/

function checkIfGT(num1, num2){
  if(num1 > num2){
    return "greater than";
  }else if(num1 < num2){
    return "less than";
  }else {
    return "equal to";
  }
}

const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function checkIfnum1GTnum2(){
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const result = checkIfGT(num1, num2);
  document.getElementById("result").textContent = `${num1} is ${result} ${num2}`;
}

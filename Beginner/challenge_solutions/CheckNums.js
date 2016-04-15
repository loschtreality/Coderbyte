//Write a function which takes two numbers as inputs and returns "-1" if they are equal, "true" if num2 > num1, or "false" in the opposite case

function CheckNums(num1,num2) {
  if (num1 === num2) {
    return '-1';
  }
  else if(num2 > num1){
    return 'true';
  }else {
    return 'false';
  }

}

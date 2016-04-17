//Write a function which sums all the numbers up to and including the given number;

function SimpleAdding(num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(SimpleAdding(1));

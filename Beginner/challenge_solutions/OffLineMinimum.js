// Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your program should return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.


function OffLineMinimum(strArr) {
var result = [];
var temp = [];
var minimum;
//Parse all elements in array
var parseArr = strArr.map(function(input){if (/[\d]+/g.test(input)) {
    return Number(input);
    }
    return input;
  });
//Loop through each element until "E"
  for (var i = 0; i < parseArr.length; i++) {
    if (parseArr[i] === 'E') {
      //push all numbers from E to start
        for (var j = 0; j < i; j++) {
          if (typeof parseArr[j] === 'number') {
            temp.push(parseArr[j]);
          }
        }
        //Find minimum, push it into result array, delete minimum from original array
        minimum = Math.min.apply(null,temp);
        result.push(minimum);
        parseArr.splice(parseArr.indexOf(minimum),1);
        //set i to the index of E - 1 to account for repeating E
        i = parseArr.indexOf('E')-1;
        //remove E from array to avoid infinite loop
        parseArr.splice(parseArr.indexOf("E"),1);
        temp = [];
    }
  }
  //return new array with numbers separated by commas
  return result.join(',');
}

// Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your program should return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.


function OffLineMinimum(strArr) {
var newSet = '';
var container = [];
var lowest;
var parse = strArr.map(function(index){ //parse all the numbers
    if (/(\d)+/.test(index)) { //if numbers match string digit, parse it
      return parseInt(index);
    }
    else{ //else return the letter
      return index;
    }
  });

  for (var i = 0; i < strArr.length; i++) {
    if(strArr[i] === 'E'){ //find each 'E' in the array
      var temp = [];
      for (var j = i-1; j >= 0; j--) { //traverse left from 'E' and push values into temp array
          if (typeof strArr[j] === 'number') {
            temp.push(strArr[j]);
          }
      }
      lowest = Math.min.apply(null,temp); //find lowest val in temp array
      console.log(lowest, 'lowest');
      container.push(lowest); //push the value into the container
      strArr.splice(strArr.indexOf(lowest),1); //remove the element from the strArr
      }
    }
    return container;
}


//OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]);// returns 4,1,5
console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]));

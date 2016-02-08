// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

//try solving with recursion rps style

function arrayAdd(array) {
  var count = 0;
  var indexUp = 0;
  var indexDown = array.length-1;
  var loopCount = 0;
  var sorted = array.sort(function(a,b){return a-b;});
  var store = array.pop();
    function up(countKey){
      console.log(countKey,'upkey');
      if (indexUp > array.length-1) {
        indexUp = 0;
      }
      if (countKey === store) {
        return true;
      }
      countKey += array[indexUp];
      indexUp++;
      return countKey;
    }
    function down(countKey){
      console.log(countKey,'downkey');
      if (indexDown < 0) {
        indexDown = array.length-1;
      }
      if (countKey === store) {
        return 'true';
      }
      countKey -= array[indexDown];
      indexDown--;
      return countKey;
    }

    if(count <= store){
    while (count <= store) {
      up(count);
      loopCount++;
    }
  }else if (count >= store) {
        while(count >= store){
        down(count);
        loopCount++;
      }
    }
    if (loopCount >= 100) {
      return 'false';
    }
}
console.log('hello');
console.log(arrayAdd([4, 6, 23, 10, 1, 3]));

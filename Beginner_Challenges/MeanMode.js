// Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.


function MeanMode(arr) {

  var mean =
    Math.ceil(arr.reduce(function(prev, curr){return prev + curr;})/arr.length);

  var mid = Math.ceil(arr.length/2);
  var sorted = arr.sort(function(a,b){return a-b;});

  var mode = sorted[mid];

    if(mode === mean){
      return 1;
    }else {
      return 0;
    }

}


var test = [4, 4, 4, 6, 2];

console.log(MeanMode(test));

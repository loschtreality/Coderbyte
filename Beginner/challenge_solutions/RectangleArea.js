// Using the JavaScript language, have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height.


function RectangleArea(strArr) {
  //Get coordinates and convert to number
var coordinates = strArr.join("").match(/(\d)+/g).map(
  function(input){
    return parseInt(input,10);
  });

  //Separate X and Y axises
var xAxis = [];
var yAxis = [];

  //Push axis into respective arrays
for (var i = 0; i < coordinates.length; i++) {
  if (i % 2 === 0) { //push x coords
    xAxis.push(coordinates[i]);
  }else{ //push y coords
    yAxis.push(coordinates[i]);
  }
}

//Order the Axis in preparation to find difference
var maxX = xAxis.sort(function(a,b){return a-b;});
var maxY = yAxis.sort(function(a,b){return a-b;});

//Find difference
var width = maxX[maxX.length-1] - maxX[0];
var height = maxY[maxY.length-1] - maxY[0];

//Return max height by max width
return width * height;

}

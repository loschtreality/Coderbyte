// Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.

function CountingMinutesI(str) {
//Split two different times
  var times =  str.split('-');

//Assign first and second time
  var time1 = times[0]; //leftmost time
  var time2 = times[1]; //rightmost time

//Separate hours from minutes
  time1 = time1.match(/(\d|\d\d):(\d+)(pm|am)/);
  time1[1] = Number(time1[1]) * 60; //convert hour to number, then to minutes
    if (time1[3] === 'pm') { //Find difference from top hour if PM
      time1[1] = 720 + time1[1];
    }
  time1[2] = Number(time1[2]); //convert minutes to number

    //Reduce to minute representation of time
  var timeA = time1[1] + time1[2];


//Do same operation for second time
  time2 = time2.match(/(\d|\d\d):(\d+)(pm|am)/);
  time2[1] = Number(time2[1]) * 60;
    if (time2[3] === 'pm') {
      time2[1] = 720 + time2[1];
    }

  time2[2] = Number(time2[2]);


  var timeB = time2[1] + time2[2];


//In case of day elapsing
  if (timeA > timeB) {
    return 1440 - (timeA-timeB);
  }

//During day case
  else {
    return timeB - timeA;
  }
}


 console.log(CountingMinutesI('1:00pm-11:00am')); // 1320
// console.log(CountingMinutesI('2:00pm-10:00am')); // 1200
// console.log(CountingMinutesI('3:00pm-8:00am')); // 1020
//console.log(CountingMinutesI('9:00am-10:00am')); // 60

// Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.

function CountingMinutesI(str) {
    //Split two different times
var times =  str.split('-');

    //Assign first and second time
var time1 = times[0]; //leftmost time
var time2 = times[1]; //rightmost time

  //Convert time to total minutes
  time1 = time1.match(/^([\d])+:(\d+)(pm|am)/);
  time1[1] = JSON.parse(time1[1]); //convert hour to number

  if (/0(\d)/.test(time1[2])) { //eliminate double xx:0(Number) case
    time1[2] = JSON.parse(time1[2][1]);
  }else{
    time1[2] = JSON.parse(time1[2]); //convert minutes to number
  }

  //Take the hours, determine AM || PM, convert to minutes
  if (time1[3] === 'pm') {
    time1[1] = 720 + (time1[1] * 60);
  }else{
  time1[1] = time1[1] * 60;
  }

  //Reduce hours and mins to one number
    var minutes1 = time1[1] + time2[2];


  //Convert time to total minutes
    time2 = time2.match(/^([\d])+:(\d+)(pm|am)/);
    time2[1] = JSON.parse(time2[1]); //convert hour to number


    if (/0(\d)/.test(time2[2])) { //eliminate double xx:0(Number) case
      time2[2] = JSON.parse(time2[2][1]);
    }else{
      time2[2] = JSON.parse(time2[2]); //convert minutes to number
    }

  //Take the hours, determine AM || PM, convert to minutes
    if (time2[3] === 'pm') {
      time2[1] = 720 + (time2[1] * 60);
    }else{
    time2[1] = time2[1] * 60;
    }
  //Reduce hours and mins to one number
    var minutes2 = time2[1] + time2[2];

      //Set conditinal to determine time zones (am-am, pm-pm, etc.)


      if (true) {

      }

}//end of function


//console.log(CountingMinutesI('1:00pm-11:00am'));
//CountingMinutesI('1:13pm-11:15am');

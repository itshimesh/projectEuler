'use strict';
(function() {
  function sumF(max){
    //Initial sum of 2
    var sum = 2;
    var num1 = 1;
    var num2 = 2;
    var temp = 0;

    while (num2 < max){
      console.log(num1 + " and " + num2);
      temp = num1
      num1 = num2
      num2 = temp + num2;
      console.log("2. " + num1 + " and " + num2);
      if (num2 % 2 === 0){
        sum = sum + num2;
        console.log("sum is" + sum);
      }
    }

    return sum;
  }


  document.getElementById('answer').innerHTML = sumF(4000000);

}());
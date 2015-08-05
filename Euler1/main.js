"use strict";
(function() {
  function multiple(num){
    var sum = 0;
    for (var i = 1; i < num; i++) {
      console.log('this is i ' + i);
      if (mul3(i) || mul5(i)){
        sum = sum + i;
        console.log('this is 2i ' + i);
        console.log('this is sum ' + sum);
      }
    }
    return sum;
  }

  function mul3(val) {
    console.log('this is mul3 ' + val);
    if (val % 3 === 0)
      return true;
  }

  function mul5 (val) {
    console.log('this is mul5 ' + val);
    if (val % 5 === 0)
      return true;
  }

  document.getElementById('answer').innerHTML = multiple(1000);

}());
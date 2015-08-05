'use strict';
(function() {
  function primeF(num){
    var sortedFactors = getFactors(num);
    for (var i = 0; i < sortedFactors.length; i++) {
      console.log(sortedFactors[i]);
      if (isPrime(sortedFactors[i])){
        return sortedFactors[i];
      }
    }
    return 1;
  }

  function getFactors (num) {
    var factors = [];
    for(var i=2; i <= Math.sqrt(num); i++){
      if (num % i === 0){
        factors.push(i);
        factors.push(num / i);
      }
    }
    factors.sort(sortNumber);
    return factors;
  }

  function sortNumber(a,b) {
    return b - a;
  }

  function isPrime(val){
    var factorA = getFactors(val);
    if (factorA.length <= 1){
      return true;
    }
    else
      return false;
  }

  document.getElementById('answer').innerHTML = primeF(600851475143);

}());
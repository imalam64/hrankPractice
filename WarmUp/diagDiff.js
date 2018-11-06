function diagonalDifference(arr) {
    var diffOne = 0
   for(var i = 0; i < arr.length; i++) {
       diffOne = diffOne + arr[i][i];
   }
   
   var diffTwo = 0;
   for(var i = 0; i < arr.length; i++) {
       diffTwo = diffTwo + arr[arr.length - 1- i][i];
   }

   var diff = Math.abs(diffOne - diffTwo);

  return diff;
}
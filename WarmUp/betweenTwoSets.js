var arrA = [2, 4];
var arrB = [16, 32, 96];

// HackerRank did a terrible job explaining this problem conceptually. 
// Reading the forum I found this explanation:
// 1. Find LCM of the first array a. 
// 2. Find GCD / HCF of the second array b. 
// 3. Find all the multiples of LCM up to GCD, which divides the GCD evenly.

function getTotalX(a, b) {
  // calculate aLast integer
  const aLast = a[a.length - 1];
  // calculate bFirst integer
  const bFirst = b[0];
  
  // check which number(s) between aLast and bFist are divided evenly into and put into a new array
  const arrTemp = [];
  for(let i = aLast; i <= bFirst; i++) {
    let flagA = true;
    for(const elementA of a) {
      if(i % elementA !== 0) {
        flagA = false;
      }
    }
    if(flagA) {
      arrTemp.push(i);
    }
  }
 
  // check which numbers divide new array elements evenly into and put into a result array
  const arrResult = [];
  for(let i=0; i < arrTemp.length; i++) {
    let flagB = true;
    for(const elementB of b) {
      if(elementB % arrTemp[i] !== 0) {
        flagB = false;
      }
    }
    if(flagB) {
      arrResult.push(arrTemp[i]);
    }
  }
  
  // return resultant array length
  console.log(arrResult.length);

}

getTotalX(arrA, arrB);
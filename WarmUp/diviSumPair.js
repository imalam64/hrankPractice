const en = 6;
const kay = 3;
const arr = [1, 3, 2, 6, 1, 2]

//Print the number of (i,j) pairs where i < j and a[i] + a[j] is evenly divisible by k.


function divisibleSumPairs(n, k, ar) {
    let ijPairs = 0;

    for(let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++){
            if ( (ar[i] + ar[j])%k == 0){
                ijPairs++;
            }
        }
    }

    console.log(ijPairs);
}

divisibleSumPairs(en, kay, arr)
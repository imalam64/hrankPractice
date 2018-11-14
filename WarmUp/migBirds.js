const birds = [1, 3, 3, 3, 4, 5, 5, 4, 3, 4, 5, 4, 5];

function migratoryBirds(arr) {
    let count = [0, 0, 0, 0, 0];

    for (let i=0; i < arr.length; i++){
        if(arr[i] == 1){
            count[0]++;
        } else if(arr[i] == 2){
            count[1]++;
        } else if(arr[i] == 3){
            count[2]++;
        } else if(arr[i] == 4){
            count[3]++;
        }else {
            count[4]++;
        }
    }

    let max = 0;
    for(let i = 0; i< count.length; i++){
        if (count[i] === count[i-1]){
            max = max;
        }
        else if (count[i]> count[i-1]){
            max = i+1
        }
    }

    console.log(max);
}

migratoryBirds(birds);
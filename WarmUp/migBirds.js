const birds = [1,2,3,5,5,5,4,4,4];

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

    console.log(count)

    let max = Math.max(...count)
    console.log(max);

    let type = 1;
    for(let i = 0; i<count.length ; i++){
        if (count[i] === max){
            type = type + i;
            break;
        }
    }

    console.log(type);
}

migratoryBirds(birds);
const birds = [1, 4, 4, 4, 5, 3];

function migratoryBirds(arr) {
    let id = [], count = [];

    for (let i = 0; i < arr.length; i++){
        if (id.indexOf(arr[i]) === -1) {
            id.push(arr[i]);
            id.push(arr[i][1] = 1)
        } else if (id.indexOf(arr[i]) > -1){
            id[id.indexOf(arr[i])]++
        }

    }

/*     for( let i=0; i< arr.)
 */
    console.log(id);
}

migratoryBirds(birds);
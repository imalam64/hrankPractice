const bar = [4];
const day = 4;
const month = 1;

// 's' is the array with value of each chocolate piece
// 'm' denotes the number of squares required
// 'd' denotes the summed value needed to add 

function birthday(s, d, m) {
    let pieces = 0;

    function getSum(total, num) {
        return total + Math.round(num);
    }

    for (let i = 0; i < s.length; i++){
        let check = s.slice(i, i +m).reduce(getSum, 0)

        if (check == d){
            pieces++;
        }
    }

    console.log(pieces);
}

birthday(bar, day, month);
//start of house
var s = 5;
//end of house
var t =  11;
//tree on left
var a = 3;
//tree on right
var b = 14;

//location of apples or oranges from origin of tree
var apples = [-2, 2 , 4, 20];
var oranges = [-2, 3 , 7, -6];

//If apple is negative, discard. If orange is positve, discard.
//Fruit must fall from tree('a' or 'b') within the range of 's' and 't'.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let i=0; i < apples.length; i++){
        if(apples[i] > 0 && (apples[i] + a) >= s && (apples[i] + a)<= t){
            appleCount++;
        }
    }

    for (let i=0; i < oranges.length; i++){
        if(oranges[i] < 0 && (oranges[i] + b) >= s && (oranges[i] + b) <= t){
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
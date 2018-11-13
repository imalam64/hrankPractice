var scoreCard = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

function breakingRecords(scores) {
    let lowRec = 0, highRec = 0, initScore = scores[0]
    let currentHigh = initScore, currentLow = initScore;

    for (let i = 1; i < scores.length; i++){
        if (scores[i] > currentHigh){
            highRec++;
            currentHigh = scores[i];
        }
        else if (scores[i] < currentLow){
            lowRec++;
            currentLow = scores[i];
        }
    }
    console.log(highRec, lowRec);
}

breakingRecords(scoreCard);
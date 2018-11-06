function birthdayCakeCandles(ar) {
    var candleCount = 0;
    
    ar.sort();
    
    for(var i=0; i < ar.length; i++){
        var temp = 0;
        if (ar[i] != ar[i-1]){
        for(var j = 0; j < ar.length; j++){
            if(ar[i] == ar[j]){
                temp++;
            } 
        }
        if(temp > candleCount){
            candleCount = temp;
        }}
    }
    
    return candleCount;
}
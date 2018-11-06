function compareTriplets(a, b) {
    var compPoint = [0, 0];
    for (var i=0 ; i < a.length; i++){
        if(a[i] > b[i]){
            compPoint[0]++;
        }
        else if(a[i] < b[i]){
            compPoint[1]++;
        }
    }
    return compPoint;
}

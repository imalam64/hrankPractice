const quant = [6 ,5, 5, 9, 19, 2, 2];

function get_rock_index(quantity) {
    let ned = quantity.sort(function(a, b){return a-b});
    let geof = [];
    
    for(let i = 0; i<quantity.length; i++){
        geof[i] = ned[i] + quantity[i];
    };

    console.log(ned);
    console.log(geof);

    let max_count = 1;
    let curr_count = 1; 
    let res = geof[0]

    for (let i = 1; i < geof.length; i++) { 
        if (geof[i] == geof[i - 1]) {
            curr_count++; 
        }else if (curr_count > max_count) { 
                max_count = curr_count; 
                res = i-1; 
        } else{ 
            curr_count = 1;}
    } 
  
    // If last element is most frequent 
    if (curr_count > max_count){ 
        max_count = curr_count; 
        res = geof.length - 1; 
    } 

    console.log(res);
    return res; 
}

get_rock_index(quant);
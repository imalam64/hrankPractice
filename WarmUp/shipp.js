const arr = [1,2,3,4];
const num = 2;

function arithmeticBoggle(magicNumber, numbers) {
    // Fill in the code here
    if(numbers.length === 0 && magicNumber === 0){
        return true;
    } else if (numbers.length === 0){
        return false;
    } else if( numbers.length === 1 && numbers[0] !== magicNumber){
        return false;
    } else if ( numbers.length === 1 && numbers[0] === magicNumber){
        return true;
    } else{
        let sum = 0;
        
        for (let i = 0; i < numbers.length; i++){
            sum = numbers[i] + sum;
        }

        if (sum == magicNumber){
            return true;
        }
        else {
            let balance = sum - magicNumber;
        
            for (let i = 0; i < numbers.length; i++){
                if ( sum - numbers[i] ===  magicNumber){
                console.log(true);
                } else {
                    sum = sum - numbers[i];
                }
            }

            if ( sum === magicNumber){
                console.log(true);
            } else{
                console.log(false);}
        }
    }
}

arithmeticBoggle(num, arr)
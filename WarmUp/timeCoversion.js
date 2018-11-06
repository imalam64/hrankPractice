var s = '10:34:23AM'

function timeConversion(str){
    miltTime = null;
    var time = str.split(':', 4);
    var amPm = time[2][2];

    if (amPm == 'A' && time[0] == '12'){
        miltTime = '00:' + time[1] + ':'+ time[2].slice(0,2);
    }
    else if (amPm == 'P' && time[0] == '12'){
        miltTime = '12:'+ time[1] + ':'+ time[2].slice(0,2);
    }
    else if (amPm == 'P'){
        time[0] = parseInt(time[0]) + 12;
        miltTime = time[0] + ':' + time[1] + ':'+ time[2].slice(0,2);
    }
    else{
        miltTime = str.slice(0,8)
    }

    console.log(miltTime);
}

timeConversion(s)
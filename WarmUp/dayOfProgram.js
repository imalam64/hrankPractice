function dayOfProgrammer(year) {
    let thisYear = parseInt(year, 10);
    let result;
    if (thisYear >= 1919) {
        if ((thisYear % 400 === 0) || ((thisYear % 4 === 0) && (thisYear % 100 !== 0))) {
            result = `12.09.${thisYear}`
        }
        else {
            result = `13.09.${thisYear}`
        }
    }
    if (thisYear < 1919) {
        if (thisYear % 4 === 0) {
            result = `12.09.${thisYear}`
        }
        else {
            result = `13.09.${thisYear}`
        }
    }
    if (thisYear === 1918) {
        result = '26.09.1918'
    }
    return result
}
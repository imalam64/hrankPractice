const billed = [2, 3, 5, 10]
const dintEat = 3
const charged = 5


function bonAppetit(bill, k, b) {
    let add = (a, b) =>
    a + b

    let actual = (bill.reduce(add) - bill[k])/2

    if ( actual === b ){
        console.log(`Bon Appetit`);
    } else {
        console.log(b - actual);
    }
}

bonAppetit(billed, dintEat, charged)
//Starting positions of Kangaroos
var k1 = 0;
var k2 = 5;

//Jump rates of the kangaroos
var j1 = 2;
var j2 = 3;

function kangaroo(x1, v1, x2, v2) {
    if((x2 - x1) * (v2 - v1) < 0 && (x1 - x2) % (v2 - v1) == 0){
        console.log('YES');
    } else{
        console.log('NO');
    }

}

kangaroo(k1, j1, k2, j2);
function getPoi(num) {
    var numA = 0,
        numB = 0,
        numC = 0,
        positionArray = [];
    for (var i = 1; i <= num; i++) {
        switch (i % 4) {
            case 0:
                positionArray.push({
                    x: -fbnq(i),
                    y: 0
                });
                break;
            case 1:
                positionArray.push({
                    x: 0,
                    y: -fbnq(i)
                });
                break;
            case 2:
                positionArray.push({
                    x: fbnq(i),
                    y: 0
                });
                break;
            case 3:
                positionArray.push({
                    x: 0,
                    y: fbnq(i)
                });
                break;
        }
    }
}

function fbnq(num) {
    console.log(num);
    if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        return fbnq(num - 1) + fbnq(num - 2);
    }
}
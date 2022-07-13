let arr1 = [1, 3, 6, 67, 89];
let arr2 = [2, 4, 7];
let arr3 = [];

function merge(a1, a2, a3) {
    let i = 0;
    let arrLength, smallArr, bigArr;
    if(a1.length > a2.length) {
        arrLength = a1.length;
        smallArr = a2
        bigArr = a1;
    } else {
        arrLength = a2.length;
        smallArr = a1
        bigArr = a2;
    }

    for(let j = 0; j < arrLength; j++) {
        if(smallArr[i] && i <= arrLength) {
            if(smallArr[i] > bigArr[j]) {
                a3.push(bigArr[j]);
                a3.push(smallArr[i]);
                i++;
            } else {
                a3.push(smallArr[i]);
                a3.push(bigArr[j]);
                i++;
            }
        } else {
            a3.push(bigArr[j]);
        }
    }
    return a3;
}

console.log(merge(arr1, arr2, arr3));

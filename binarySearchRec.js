let arr2 = [3, 4, 8, 9, 34, 77, 88, 156];

function binarySearchRec(arr, num, start, end) {

    if(start > end){
        return "Number doesn't exist";
    }
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === num) {
            return mid;
        }

        if (num > arr[mid]) {
            start = mid + 1;
            return   binarySearchRec(arr, num, start, end)
        }
        else {
            end = mid-1;
            return   binarySearchRec(arr, num, start, end)
        }
}
console.log(binarySearchRec(arr2,156, 0, arr2.length-1));

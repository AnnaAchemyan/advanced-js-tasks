let arr1 = [3, 4, 8, 9, 34, 77, 88, 99, 105, 156];

function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === num) {
            return mid;
        }

          if (num > arr[mid]) {
            start = mid + 1;
        }
        else{
            end = mid-1;
        }
    }
    return "Number doesn't exist";
}
console.log(binarySearch(arr1,156));

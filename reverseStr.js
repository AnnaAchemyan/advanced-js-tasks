let str1 = "reverse";

function reverse(str) {
    let result = "";
    let index = str.length - 1;
    while (index >= 0) {
        result += str[index];
        index--;
    }
    return result
}
console.log(reverse(str1));
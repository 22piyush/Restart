
const arr = [10, 20, 69, 44, 30, 40, 50];
let max = Math.max(arr[0], arr[1]);
let secondMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max
        max = arr[i];
    } else if (arr[i] > secondMax && max != arr[i]) {
        secondMax = arr[i]
    }
}
console.log(secondMax);



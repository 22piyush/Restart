
const arr = [10, 20, 69, 69, 50];

let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
        sMax = max;
        max = arr[i]
    } else if (arr[i] > sMax && arr[i] !== max) {
        sMax = arr[i]
    }
}

console.log(sMax);




//   function mean(arr) {
//         // code here
//         let sum = 0;
//         let total = arr.length;
//         for(let i =0; i<arr.length;i++){
//             sum = sum + arr[i];
//         }
        
//         return sum / total;
//     }

 function median(arr) {
    // Sort the array in ascending order
    arr.sort(function(a, b) {
        return a - b;
    });

    let n = arr.length;
    let mid = Math.floor(n / 2);

    if (n % 2 === 0) {
        // even length → average of two middle numbers
        return (arr[mid - 1] + arr[mid]) / 2;
    } else {
        // odd length → middle number
        return Math.floor(arr[mid]);
    }
}

let arr = [2, 8, 3, 4];
console.log(median(arr)); // Output: 5


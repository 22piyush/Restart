
// [1, 2, 3, 4, 5]  →  [2, 3, 4, 5, 1]

let array = [1, 2, 3, 4, 5];

let start = 0, end = array.length - 1;

while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;

    start ++;
    end --;
}

console.log(array);




const arr = [10, 20, 69, 44, 30, 40, 50];

let i = 0, j = arr.length - 1;

while (i != j) {
    let temp = arr[i];
    ar[i] = arr[j];
    arr[j] = temp;

    i++;
    j--;
}
console.log(arr);

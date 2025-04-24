//Reverse the Array.

// With Extra Space 
let arr = [10,20,30,40,50]

let temp = new Array(arr.length)

let j = 0;
for(let i = arr.length-1; i>=0; i--){
    temp[j] = arr[i]
    j++
}
console.log(temp);


// Without Extra Space

let array = [1,2,3,4,5]

let i = 0 , k = array.length-1;

while(i != k){
    let temp = array[i];
    array[i] = array[k];
    array[k] = temp
    i++
    k--
}
console.log(array);


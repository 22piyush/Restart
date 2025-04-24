// Largest and Smallest element in an Array

let arr = [20,40,90,15,60,98,30,59];

let val = arr[0]

for(let i = 0 ;i<arr.length; i++){

    if(arr[i] > val){
        val = arr[i]

    }

}
console.log(val);


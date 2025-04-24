// Second largest Element in Array

let arr = [20,40,,90,15,60,98,98,98,30,59];

let max  = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for(let i=2; i<arr.length; i++){
    if(arr[i] > max){
        sMax = max
        max = arr[i];
    }else if(arr[i] > sMax && max != arr[i]){
        sMax = arr[i];
    }
}

console.log(sMax);





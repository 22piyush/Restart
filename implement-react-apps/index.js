

function mar(arr){
   let max = 0;

for(let i = 0; i<arr.length;i++){
    if(arr[i] < arr[max]){
        arr[max] = arr[i]
    }
}

return arr[max];
}


let arr = [10,34,56,2,5,7,4,6,4,6445,56,7,4,7,4];
console.log(mar(arr));






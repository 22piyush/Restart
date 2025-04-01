function largestElement(arr){

    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[max]){
            arr[max]= arr[i];
        }
    }
    return arr[max];

}

let arr = [23,43,12,56,73,36,39];
console.log(largestElement(arr));


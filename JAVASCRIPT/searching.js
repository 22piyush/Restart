function linearSearch(arr , x){
    for(let i =0 ; i<arr.length; i++){
        if(arr[i] == x){
            return i;
        }
    }
}

module.exports = {
    linearSearch
}
const arr = [1,2,3,4,5];

function squreofNumber(arr){
    let squreofNumber = [];

    for(let number of arr){
        squreofNumber.push(number ** 2)
    }

    return squreofNumber;
}

const output = squreofNumber(arr)

console.log(output);












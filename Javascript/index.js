let add2 = num => num + 2;
let multiply5 = num => num * 5;
let subtract10 = num => num - 10;


// Compose -> right to left
// Pipe -> left to right 


function compose(...fns) {

    fns.reduceRight
    

}


compose(subtract10, multiply5, add2)
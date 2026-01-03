// REST OPERATOR 

function sum(name, ...args){
    console.log(name);

    let sum =0 ;
    for(let i in args){
        sum += args[i];
    }

   console.log(sum);
}

sum("PIYUSH", 10,30,40)
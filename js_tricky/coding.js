


const obj = {
    a:{
        b:10
    }
}

Object.freeze(obj);

obj.a.b = 20;

console.log(obj.a.b);

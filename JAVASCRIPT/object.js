let obj = {
    name : "Piyush",
    age : 23,
    social: {
        facebook:{
            ac1:"cbu@gmail.com",
            ac2:"pbu@gmail.com"
        },
        twitter: {
            free: {
                ac1:"ksdbcd@gmail.com"
            },
            paid:{
                ac1:"skdvncds@gamcm.com"
            }
        }
    }
}

function makeDeepCopy(obj){

    if(typeof obj !== 'object' || obj === null){
        return obj;
    }

    Array.isArray(obj);

}




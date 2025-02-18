// Challenge-1
//Merge Two Object In one object.
// function mergedObjects(obj1,obj2){
//    const merged = {...obj1,...obj2}
//    console.log(merged);
   
// }

// mergedObjects({a:1,b:2},{c:3,d:4})
// mergedObjects({a:5,b:6},{c:7,d:8})


// challenge-2
// Print same object from two object.
// function objCompare(obj1,obj2){

//     const sameObj = {}
//     for(let key in obj1)
//     {
//         if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key) && obj1[key] === obj2[key]){
//             sameObj[key] = obj1[key]; 
//         }
//     }
//     console.log(sameObj);
    
// }
// obj1={a:20,b:30,c:40}
// obj2={a:20,c:40,d:50}
// objCompare(obj1,obj2)


// challenge-3
// Javascript Object Convert into two array one for key and second for value in array.
// function conObjToArr(obj){
//    let keys = Object.keys(obj)
 
//    let values = Object.values(obj)
   
//    let result = [keys,values]
//    console.log(result);  
// }
// conObjToArr({a:1,b:2,c:3})
// conObjToArr({name:"Piyush Aglawe",date:"ncn"})


//Challenge-4
//Swap the Keys and Values of an Objects
// function swapObj(obj){
//    let swapped = {}
//    console.log(Object.entries(obj));
   
//    for(const [key,value] of Object.entries(obj)){
//     console.log(key,value);
//     swapped[value] = key
//    }
// console.log(swapped);   
// }
// swapObj({a:1,b:2,c:3})
// swapObj({name:"Piyush",age:22,city:"NAgpur"})



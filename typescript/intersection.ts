
// type personT ={name:string}
// type personC = {age:number}
// type personTC = personT & personC



interface personT {name:string}
interface personC {age:number}
type personTC = personT & personC

var personData:personT = { name:'Piyush Aglawe'}
var personDataB:personC = {age:23}

var personDataC: personTC = { name:'Piyush',age:23 }
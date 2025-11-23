type DataType = {name:string,email:string}

type a = {name:string};
type b = {email:string};

type c = a | b ;

var empData:DataType = {
    name:'Piyush',
    email:"piyush@123"
}

var studentDetails = {
    name:'done',
    email:'done@gmail.com'
}

// WE CANNOT USE INTERFACE WITH TYPE 
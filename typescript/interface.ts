
interface Info {
    name:string,
    age:number,
    company:string
}

interface Teacher extends Info {
    subject:string 
}

var studentObj:Info = {
    name:"piyush",
    age:23,
    company:'Zygal'
}

var teacherObj:Teacher = {
    name:"Vishwa",
    age:30,
    company:'Zygal',
    subject:'front'
}
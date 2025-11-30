class Auth{
    login(name:string, password:string){
        if(name && password){
            return "Student Login"
        }else{
            return "Not Login"
        }
    }
}


class Student extends Auth{

    result(marks:number){
        if(marks>33){
            return "Pass"
        }else{
            return "failed"
        }
    }
}

var s1 = new Student();
s1.result(60);


class Teacher{
    login(name:string,password:string){

        if(name && password){
            return "Student Login"
        }else{
            return "Not Login"
        }

    }
    subject(subject:number){
        return "he teach "+subject
    }
}

var t1 = new Teacher();
t1.login("sam","12345");
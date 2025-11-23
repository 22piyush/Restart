enum whoType{
    student = "student",
    teacher = "teacher",
    management = "Management",
    labstaff = "labstaff"
}

var who:whoType = whoType.teacher;

who = whoType.teacher
console.log(whoType.teacher);

enum Fruit {
    a = "Apple",
    b = "Bamnam",
    c = "cherry"
}

var myFruit:Fruit = Fruit.a

myFruit = Fruit.c
console.log(myFruit);

enum Roles {
    admin,
    manager,
    QA,
    developer,
    user
}

var userRole:Roles = Roles.admin;
console.log(userRole);



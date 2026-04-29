

function createUser(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const user1 = new createUser("Piyush", "Aglawe", 23);
console.log(user1);

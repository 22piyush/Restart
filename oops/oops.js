

class CreateUser {

    constructor(a, b, c) {
        console.log(a, b, 23);
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
    getFullYear() {
        return this.firstName + ' ' + this.lastName
    }

}

const user1 = new CreateUser("Piyush", "Aglawe", 23)


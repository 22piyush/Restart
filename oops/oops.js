

class CreateUser {
    constructor(a, b, c) {
        this.firstName = a
        this.lastName = b
        this.age = c
    }

    static hi = "Hello"

    static {
        var a = 20

    }

    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
    getFullYear() {
        return this.firstName + ' ' + this.lastName
    }

}

const user1 = new CreateUser("Piyush", "Aglawe", 23)




class CreateUser {
#age
    constructor(a, b, c) {
        this.firstName = a
        this.lastName = b
        this.#age = c
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
    getFullYear() {
        return this.firstName + ' ' + this.lastName
    }

}

const user1 = new CreateUser("Piyush", "Aglawe", 23)


function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
}

const user1 = createUser("Piyush", 22);
const user2 = createUser("Rahul", 25);

user1.greet(); 
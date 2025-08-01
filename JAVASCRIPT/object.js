function User(name , age) {
    (this.name = name),
    (this.age = age);
}

const user1 = new User("prakash", 101);
const user2 = new User("ashish", 111);

console.log(user1);
console.log(user2);



const user = {
    name: "Piyush"
};

Object.freeze(user);

user.name = "Rahul";

console.log(user.name);
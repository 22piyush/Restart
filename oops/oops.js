
function getAgeYear() {
  return new Date().getFullYear() - user1.ahe
}



function createUser(name, age) {
  const user = {
    name,
    age,
    getAgeYear,
  };

  return user;
}

const user1 = createUser("Piyush", 22);
const user2 = createUser("Rahul", 25);

user1.greet(); 
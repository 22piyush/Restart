function greetMessage(){
    function wrapper(){
        let name = "Prakash";
        console.log(name, "Welcome to GFG!!!");
    }
    return wrapper
}

const output = greetMessage();
output();

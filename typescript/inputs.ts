function getInfo(){
    console.log("Getting Function Called");
    

    const nameInput = document.getElementById('username') as HTMLInputElement
    const name:string = nameInput.value;

    const emailInput = document.getElementById('email') as HTMLInputElement
    const email:string = emailInput.value

    const passwordInput = document.getElementById('password') as HTMLInputElement
    const pass:string = passwordInput.value

    console.log(name , email , pass);
    
}
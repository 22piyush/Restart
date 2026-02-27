class car {
    constructor(name, color, milege) {
        this.name = name;
        this.color = color;
        this.milege = milege;
    }

    start() {
        console.log(this.name);
    }
    stop() {
        console.log(this.name);
    }
}


let bmw = new car("BMW", "Red", "12");
let Buggati = new car("Buggati", "Gray", "14");

console.log(bmw, Buggati);

bmw.start()

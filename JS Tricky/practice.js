


function dataClousure() {

    const a = 20;

    function index() {
        console.log(a);

    }

    return index

}

let data = dataClousure();
data()
console.log(data());

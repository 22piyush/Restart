

const obj = {
    a: 10,
    f1: function () {
        console.log(this.a);
        setTimeout(function () {
            console.log(this);

        }, 2000)

        setTimeout(() => {
            console.log(this);
        }, 4000);

        const sayHi = () => {
            console.log(this, "1111");
        };
        sayHi()
    }
}

obj.f1();

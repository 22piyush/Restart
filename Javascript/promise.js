let p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("The First promise has resolve");
        resolve(10)
    }, 1 * 1000);

});

let p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("The Second promise has resolve");
        resolve(20)
    }, 2 * 1000);

});

let p3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("The Second promise has resolve");
        resolve(30)
    }, 3 * 1000);

});


Promise.all([p1,p2,p3]).then().catch()


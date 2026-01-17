let p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("The First promise has resolve");
        resolve(10)
    }, 1 * 1000);

});
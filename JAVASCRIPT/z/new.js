// const t1 = performance.now();

// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para'+i;

//     document.body.appendChild(newElement);
// }

// const t2 = performance.now();
// console.log("tgis took " + (t2-t1) +" ms");

// const t3 = performance.now();
// let Div = document.createElement('div')
// for(let i=1; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para'+i;

//     Div.appendChild(newElement);
// }
// document.body.appendChild(Div);
// const t4 = performance.now();
// console.log("tgis took " + (t4-t3) +" ms");


let fragment = document.createDocumentFragment();
for(let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para'+i;

    fragment.appendChild(newElement)
}
document.body.appendChild(fragment);
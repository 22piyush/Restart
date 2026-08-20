// const data = 100
// console.log(data.toString());
// console.log((100).toString()); .. valid


// let num = 20;
// console.log(num - "20"); 2020
// console.log(++num); 21


// console.log([1,[2,[3,[[4,[5]]]]]].toString()); 1,2,3,4,5


// console.log(parseInt("108"));
// console.log(parseInt("108 * 200"));
// console.log(parseInt("108wonders"));



// why we call methods on primitive values methods
// "piyush".toUpperCase();  Using Boxing we can do this
// Primitive =====> Boxing =======> Object ===> Destroy Object



// const name = 'Lydia';
// age = 21;

// console.log(delete name); False ==> Delete only Object
// console.log(delete age ); True ==> Window Store Value



// for(var i=0; i<10; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 0)
// }
// OutPut => 10101010101010


// for(let i=0; i<10; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 0)
// }
// OutPut => 0123456789


// let user = { name : 'Virat Kohli' };
// const userList = [user];
// user = null;

// console.log(userList);
// [ { name: 'Virat Kohli' } ]



// (function(){
//     var a = b = 3
// })();

// console.log("a defined ?", (typeof a !== 'undefined')); False
// console.log("b defined ?", (typeof b !== 'undefined')); True



// var a = {},
//     b = {key: 'b'};
//     c = {key: 'c'};

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]); 456



// const income = {
//     skills: 108,
//     monthly(){
//         return this.skills * 108;
//     },
//     yearly: () => 888 * this.skills,
// }

// console.log(income.monthly()); its refer there current object context
// console.log(income.yearly());  its refer Parent Window Scope window not exist Yearly
// 11664
// NaN



// console.log(+true);
// console.log(!"javascript");
// 1
// false



// function sum(a, b){
//     return a + b;
// }

// console.log(sum(10, "10")); 1010



// function greet(...args){
//     console.log(args);
// }
// greet(123456);



// var num = 8;
// var num = 10;

// console.log(num); 10



// const obj = {a: "1", b: "2", a: "3"};
// console.log(obj); { a: '3', b: '2' }



// console.log(typeof null); Object
// console.log(typeof undefined); Undefined



// console.log(typeof []); Object
// console.log(typeof {}); Object
// console.log(typeof function(){}); function



// console.log(true + true); 2
// console.log(true + false); 1
// console.log(false + false); 0



// console.log(Boolean("false")); true
// console.log(Boolean("")); false
// console.log(Boolean("0")); true


// console.log(null == undefined); true
// console.log(null === undefined); false



// console.log(0 == false); true
// console.log(0 === false); false



// console.log("" == false); true
// console.log("" === false); false



// console.log("0" == false); true
// console.log("0" === false); false


// console.log(null == 0); false
// console.log(null === 0); false



// console.log([] == false); true
// console.log([] === false); false


// console.log([] == []); false
// console.log([] === []); false


// console.log({} == {}); false
// console.log({} === {}); false



// var x = 10;

// function text(){
//     console.log(x);  Undefined
//     var x = 20;
// }
// text();



// console.log(foo);  Undefined

// var foo = function() {
//     return "Hello";
// };



// console.log(foo());  Hello

// var foo = function() {
//     return "Hello";
// };



// let x = 10;

// {
//     let x = 20;
//     console.log(x , "20");

// }

// console.log(x ,"10");



// var x = 10;

// {
//     var x = 20;
// }

// console.log(x); 20



// let x = 10;

// function test() {
//     let x = 20;
//     console.log(x);
// }

// test();
// console.log(x); 10




























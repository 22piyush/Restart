// const data = 100
// console.log(data.toString());
// console.log((100).toString()); .. valid


// let num = 20;
// console.log(num + "20"); 2020
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
// OutPut => 10 10 10 10 10 10 10


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




// for (var i = 0; i < 3; i++) {
//     console.log(i); 0 1 2
// }

// console.log(i); 3

// for (let i = 0; i < 3; i++) {
//     console.log(i); 0 1 2
// }

// console.log(i); Error


// const arr = [1, 2, 3];

// arr.push(4 , 5);

// console.log(arr); [ 1, 2, 3, 4, 5, 6 ]


// const arr = [1, 2, 3];

// arr = [4, 5];

// console.log(arr);  Error because const


// let arr = [1, 2, 3];

// arr.length = 0;

// console.log(arr); []



// let arr = [1, 2, 3];

// console.log(arr[10]);  Undefined
// console.log(arr.length);  3


// const arr = [1, 2, 3];

// console.log(arr.pop()); 3
// console.log(arr); [1 , 2]


// const arr = [1, 2, 3];

// console.log(arr.shift()); 1
// console.log(arr); [2,3]


// const arr = [1, 2, 3];

// console.log(arr.slice(1));
// console.log(arr);
// [ 2, 3 ]
// [ 1, 2, 3 ]

// const arr = [1, 2, 3];

// console.log(arr.splice(1, 1));
// console.log(arr);
// [ 2 ]
// [ 1, 3 ]

// const a = [1, 2, 3];
// const b = [...a];

// b.push(4);

// console.log(a); [ 1, 2, 3 ]
// console.log(b); [ 1, 2, 3, 4 ]


// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// console.log(a);
// console.log(b);
// [ 1, 2, 3, 4 ]
// [ 1, 2, 3, 4 ]

// const obj1 = {
//     name: "Piyush",
//     age: 25
// };

// const obj2 = {...obj1};

// obj2.age = 30;

// console.log(obj1.age); 25
// console.log(obj2.age); 30


// function test(a, b, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// test(10, 20, 30, 40, 50);
// 10
// 20
// [ 30, 40, 50 ]



// const a = {
//     name: "A"
// };

// const b = a;

// b.name = "B";

// console.log(a.name);   B




// let a = 10;
// let b = a;

// b = 20;

// console.log(a); 10
// console.log(b); 20





// const a = [1, 2, 3];
// const b = a;

// b.push(4);

// console.log(a); [1,2,3,4]

// const a = [1, 2, 3];
// const b = [...a];

// b.push(4);

// console.log(a);  [1,2,3]




// const user = {
//     name: "Piyush",
//     address: {
//         city: "Pune"
//     }
// };

// const copy = {...user};

// copy.address.city = "Mumbai";
// copy.name = "Harshal";

// console.log(user.address.city);  Mumbai
// console.log(user.name );  Piyush




// function test() {
//     console.log("A");
// }

// test();



// function test() {
//     console.log("B");
// }  

// OUTPUT ====> B




// var test = function() {
//     console.log("A");
// };

// test();  A


// var test = function() {
//     console.log("B");
// };
 
// test();  B



// function test(a, b) {
//     console.log(arguments);
// }

// test(10, 20, 30);
// [Arguments] { '0': 10, '1': 20, '2': 30 }




// function test(a, b) {
//     return;
//     console.log("Hello");
// }

// console.log(test(10, 20)); undefined




// function outer(){

//     let data = 123;

//     function inner(){
//         console.log(data);
        
//     }

//     return inner;

// }

// outer()();
// const res = outer();
// res();




// function counter(){

//     let count = 1;

//     return function(){
//         count++;
//         console.log(count);
        
//     }

// }

// let res = counter();
// res()





// function create(){

//     let x = 10;

//     return function(){

//         x++;
//         return x;

//     }

// }

// let a = create();
// let b = create();

// console.log(a()); 11
// console.log(a()); 12
// console.log(b()); 11





// const obj = {
//     value: 10,

//     normal: function () {
//         console.log(this.value);
//     },

//     arrow: () => {
//         console.log(this.value);
//     }
// };

// obj.normal(); // 10
// obj.arrow();  // undefined









// let arr = [1,2,3,4,5];

// const data = arr.map(x=>x * 2);

// console.log(data);
// console.log(arr);
// [ 2, 4, 6, 8, 10 ]
// [ 1, 2, 3, 4, 5 ]





// const arr = [1, 2, 3];

// const result = arr.map(x => {
//     x * 2;
// });

// console.log(result);
// [ undefined, undefined, undefined ]
// const result = arr.map(x => {
//     return x * 2;   // Use this
// });

// console.log(result);




// const arr = [1, 2, 3];
// const result = arr.forEach(x => x * 2);
// console.log(result);
// Because forEach() does not return a new array.




// console.log(10 || 20); 10
// console.log(0 || 20);  20

// console.log(10 && 20); 20
// console.log(0 && 20);  0



// console.log("Hello" || "World"); Hello
// console.log("" || "World");  World




// console.log(null || "Default"); Default
// console.log(undefined || "Default"); Default
 



// console.log(10 && 20 && 30); 30
// console.log(10 && 0 && 30); 0




// const value = 0;

// console.log(value || 100); 100
// console.log(value ?? 100);  0


// console.log("A");

// setTimeout(()=>{
//     console.log("B");
// },0) Macrotask queue


// Promise.resolve().then(() => {
//     console.log("C");
// });  Microtask queue


// console.log("D");




// async function test() {
//     console.log("A");

//     await Promise.resolve()

//     console.log("B");
    
    
// }

// console.log("C");
// test();
// console.log("D");

// C
// A
// D 
// B




// async function test() {
//     return 10;
// }

// console.log(test()); Promise { 10 }



// async function test() {
//     return 10;
// }

// test().then(x => console.log(x)); 10




// let str = "hello";
// console.log(str.slice(1, 4)); ell




// let str = "hello";
// console.log(str.substring(1, 4)); ell




// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// Empty Line
// [object Object]
// [object Object]
// toString method apply here for conversion 






// console.log("10" - "5" + "2"); 52


// console.log("10" + "5" - "2" * "5");  95
                // 105     -       10  = 95



// console.log(1 < 2 < 3);  true      
// console.log(3 > 2 > 1);   false




// console.log(NaN === NaN);
// console.log(NaN == NaN);   
// Both False


// console.log(null === null);
// console.log(null == null);  
// Both True

// console.log(undefined === undefined);
// console.log(undefined == undefined);
// Both True


// console.log(null === undefined);
// console.log(null == undefined);



// console.log(NaN === undefined);
// console.log(NaN == undefined);
// Both False



// console.log(NaN === null);
// console.log(NaN == null);
// Both False




// console.log(typeof NaN); Number 
// console.log(0.1 + 0.2 === 0.3);  False




// const [a, , b] = [10, 20, 30];

// console.log(a);
// console.log(b);
// 10  30



// const {name = "Unknown"} = {};

// console.log(name); Unknown




// var x = 1;

// function test() { 
//     console.log(x);  Undefined
//     var x = 2;
// }

// test();




// let x = 10;

// function test() {
//     console.log(x); 10
// }

// {
//     let x = 20;
//     test();
// }





// const obj = {
//     a: 10
// };

// Object.freeze(obj);

// obj.a = 20;

// console.log(obj.a);  10






// const obj = {
//     a: {
//         b: 10
//     }
// };

// Object.freeze(obj);

// obj.a.b = 20;

// console.log(obj.a.b);  20
// Object.freeze work with shallow comparison






















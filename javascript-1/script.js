//1)text cploore
// let p = document.querySelector('body');
// let btn = document.querySelector('button');

// btn.addEventListener("click", function(){

//     p.style.backgroundColor = "black";
//     p.textContent = "hello piyush aglawe"

// })/


//2) IMAGES swapppp----------------


// let img1 = document.querySelector('#img1');
// let img2 = document.querySelector('#img2');
// let btn = document.querySelector('button');

// btn.addEventListener("click",function(){

//     let src1 = img1.src;
//     let src2 = img2.src;

//     img1.src=src2;
//     img2.src=src1;
          
// })






//3) Imput fields empty or not


// let form = document.querySelector("form");
// let inps = document.querySelectorAll('input[type="text"]');
// let h4 = document.querySelector("h4");

// form.addEventListener("submit", function(ev)
// {

//     ev.preventDefault();

//     for(let i=0; i<inps.length; i++)
//         {
//             if(inps[i].value.trim() === ' ' )
//             {

//                 h4.textContent = "Error, Some fields are blanks";
//                 h4.style.color = "red";
//                 break;

//             }
            
//         }


// })






//4)---------------unordered list---------

// let add = document.querySelector("#add");
// let remove = document.querySelector("#remove");
// let inp = document.querySelector("input");
// let ul = document.querySelector('ul');


// var li;
// add.addEventListener("click",function(){

//     if(inp.value.trim() === ''){}
//     else{
//         li = document.createElement("li");
//         li.textContent = inp.value;
//         ul.appendChild(li);
//         inp.value = "";

//     }
// })

// remove.addEventListener("click", function(){
      
//     ul.removeChild(li)
    
// })








// 5)counter timer-----------------
// var start = document.querySelector("#start");
// var stop = document.querySelector("#stop");
// var h4 = document.querySelector("h3")

// var int;
// start.addEventListener("click", function(){
//     var count = 0;
//     int = setInterval(function(){
//         h4.textContent = count;
//         count++;
//     },100);
// })

// stop.addEventListener("click", function(){
    
//     clearInterval(int)
// })



// var home = document.querySelector('#home');
// var about = document.querySelector('#about');
// var contact = document.querySelector('#contact');

// var hometext = document.querySelector('#hometext');
// var abouttext = document.querySelector('#abouttext');
// var contacttext = document.querySelector('#contacttext');


// hometext.style.display = "block";
// hometext.style.width = "50%"

// home.addEventListener("click", function(){
//     home.style.display = "block";
//     home.style.width = "50%";

// })

// about.addEventListener("click", function(){
//     home.style.display = "block";
//     home.style.width = "50%";
    
// })

// contact.addEventListener("click", function(){
//     home.style.display = "block";
//     home.style.width = "50%";   
// })

// function saaretexthatao(){


// }

var anc = document.querySelectorAll('a')

for(let i =0; i< anc.length ;i++)
{
            anc[i].style.color = "red";
}











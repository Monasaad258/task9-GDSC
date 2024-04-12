// task-1


// let userMessage = prompt("Print Number From – To");
// let numbers = userMessage.split("-");
// let num1 = parseInt(numbers[0]);
// let num2 = parseInt(numbers[1]);
// if(num1 < num2){
//     for(let i = num1; i <= num2; i++){
//         console.log(i);
//     }
// }else{
//     for(let i = num2; i <= num1; i++){
//         console.log(i);
//     }
// }
// task-2


// var element = document.getElementById("Popup");
// var content = element.innerHTML;
// alert(content);
// let counter=setTimeout(sayMsg,5000);
// function sayMsg(){
//     console.log("Message");
// }
// let btn=document.querySelector("button");
// btn.onclick=function(){
//     clearTimeout(counter);
// };


// Task-3
// var count = parseInt(document.getElementById('counter').innerHTML);
// var counterInterval = setInterval(function() {
//     count-=1;
//     document.getElementById('counter').innerHTML = count;
//     if(count == 0) {
//         clearInterval(counterInterval);
//     }
// },1000);


// task-4

// var count = parseInt(document.getElementById('counter').innerHTML);
// var counterInterval = setInterval(function() {
//     count-=1;
//     document.getElementById('counter').innerHTML = count;
//     if(count === 5) {
//         clearInterval(counterInterval);
//         window.location.replace("https://google.com/");
//     }
// },1000);

// task-5
// var count = parseInt(document.getElementById('counter').innerHTML);
// var counterInterval = setInterval(function() {
//     count-=1;
//     document.getElementById('counter').innerHTML = count;
//     if(count === 5) {
//         clearInterval(counterInterval);
//         var contents= window.location.replace("https://google.com/");
//         alert(contents);
//     }
// },1000);


// task-1
// let myNumbers = [1, 2, 3, 4, 5];
// let [a,b,c,d,e]=myNumbers;
// console.log(a * e);

// task-2
// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// let [a, b, c, [d, e, [f,g]]]= mySkills;
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// task-3

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// let[,a,b]=arr3;
// let[c,,]=arr1;
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);


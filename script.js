// Let and Const
//ES5
// var name5 = "Jane Smith";
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// //ES6
// const name6 = "Jane Smith"; // const variable immutable
// let age6 = 23; //changgable
// name6 = "Jane Miller";
// console.log(name6);

// //ES5
// function driversLicence5(passedTest) {
//     if (passedTest) {
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//     console.log(firstName + ', born in '+ yearOfBirth + ' now can drive');
// }

// driversLicence5(true);

// //ES6
// function driversLicence6(passedTest) {
    
//     let firstName;
//     const yearOfBirth = 1992;
//     if (passedTest) {
//         firstName = 'John';
//     }
//     console.log(firstName + '66, born in '+ yearOfBirth + ' now can drive');
// }

// driversLicence6(true);


////////////////////////////////////////////////////////////////////////
//Blocks and IIFEs

//es6
// {
//     const a = 1;
//     let b = 2;
//     var c = 3
// }

// // console.log(a + b);
// console.log(c);

// //es5
// (function(){
//     var c = 3;
// })();
// console.log(c);



// ///////////////////////////////////////////////////////////////////
//Strings
// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2016 - year;
// }

// //es5'
// // console.log('this is ' + firstName + ' , '+ lastName + ' . he was born in ' + yearOfBirth + '. today, he is ' + calcAge(yearOfBirth)+ ' years old');

// //es6
// console.log(`this is ${firstName} ${lastName}, he is ${calcAge(yearOfBirth)}`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('J'));
// console.log(n.endsWith('th'));
// console.log(n.includes('hn'));
// console.log(`${firstName} `.repeat(5));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Arrow Function

// const years = [1992,1990,1982,1975];

// //es5
// var age5 = years.map(function(el){
//     return 2018 - el;
// });
// console.log(age5);

// //es6
// let age6 = years.map(el => 2018 - el);
// console.log(age6);

// age6 = years.map((el, index) => `Age elements ${index + 1}: ${2018 - el}`);
// console.log(age6);

// age6 = years.map((el,index) => {
//     const now = new Date().getFullYear();
//     const age = now - el; 
//     return `Age elements ${index + 1}: ${age}`;
// });
// console.log(age6);

//Arrow function2

//es5
//the callback function for click is not point to box5 object, it points to
//widow global object, so this inside the clickme is point to window object
//thats why we have to create new variable that point to box5 objet, and use it 
// for the click event callback function
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click',function(){
            var str = 'this is box number ' + self.position + ' it is '+ self.color;
            alert(str);
        });
    },
}
// box5.clickMe();

//es6
//when we use arrow function in ES6, the click callback function now can
//point to the clickMe OBJECT which can access to box6 object's variables
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         document.querySelector('.green').addEventListener('click',()=>{
//             var str = 'this is box number ' + this.position + ' it is '+ this.color;
//             alert(str);
//         });
//     },
// }
// // box6.clickMe();

// //when we change the clickme to arrow function, the callback funtion for clickme
// //will now point to global object which is window object, so does click
// //event call back function
// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: ()=>{
//         document.querySelector('.green').addEventListener('click',()=>{
//             var str = 'this is box number ' + this.position + ' it is '+ this.color;
//             alert(str);
//         });
//     },
// }
// box66.clickMe();

// function Person(name){
//     this.name = name;
// }
// //es5
// Person.prototype.myFriends5 = function(friends){
//     var arr = friends.map(function(el){
//         return this.name + ' is friend with ' + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ['bob','jae','smith'];
// // s

// //es6 
// Person.prototype.myFriends6 = function(friends){
//     var arr = friends.map(el => `${this.name} is friend withs ${el}s`);
//     console.log(arr);
// }
// new Person('Troy').myFriends6(friends);


//////////////////////////////////////////////////////
//////////Lecture: Destructuring

//ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

//ES6

// const [name, year] = ['John',55];
// console.log(year);



//////////////////////////////////////////////////////
//////////Lecture: Arrays
// const boxes = document.querySelectorAll('.box');

//ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue';
// });
// //ES6
// const boxesArr6 = Array.from(boxes); // transform an object into array
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'orange');

// e of array: means every element of an array
// for(const cur of boxesArr6){
//     if (cur.className === 'box blue') {
//         continue;
//     }
//     cur.textContent = 'I changed to blue';
// }

var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur){
    return cur >= 18;
})
// console.log(full);

// //es6
// //look for the index
// console.log(ages.findIndex(cur => cur >= 18)); 
// //look for the element
// console.log(ages.find(cur => cur >= 18));

//////////////////////////////////////////////////////
//////////Lecture: spread operator
function addFourAges(a,b,c,d){
    return a + b + c + d;
}
//es5
var ages = [18,30,12,21];
// var sum2 = addFourAges.apply(ages);

//es6
const sum3 = addFourAges(...ages);
// console.log(sum3);

const familySmith = ['john','jane','mark'];
const familyMiller = ['mary','bob','ann'];
const bigfamily = [...familySmith, ...familyMiller];
// console.log(bigfamily); //combine two arrays together 



//////////////////////////////////////////////////////
//////////Lecture: rest parameters

//ES5
function isFullAge5(){
    var argsArr = Array.prototype.slice.call(arguments);
    // console.log(arguments);
    argsArr.forEach(function(cur){
        // console.log((2019 - cur) >= 18);
    })
}
isFullAge5(1990,2005,2008);
//ES6 
function isFullAge6(...years){
    console.log(years);
    years.forEach(cur => (2018 - cur) >= 18);
}
// isFullAge6(1990,2005,2008);


//////////////////////////////////////////////////////
//////////Lecture: default parameters

//ES5
// function Person(gender,name){
//     this.gender = gender;
//     this.name = name;
// }

//ES6
function Person2(name, gender = 'Male'){
    this.gender = gender;
    this.name = name;
}
var john1 = new Person2("john");


//////////////////////////////////////////////////////
//////////Lecture: Maps
const question = new Map();
question.set('question', 'What is the official name of the latest major js version?');
question.set(1, "ES5");
question.set(2, "es6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set('answer', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, try again!');


console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
    // question.delete(4); //delete an element by using thekey in map
    // console.log('Answer 4 is here');  
}

// question.forEach((value, key) => 
//     console.log(`This is ${key}, and it's set to ${value}`)
// );
// question.clear(); clear all the value in the map

for(let [key, value] of question.entries()){
    // console.log(`This is ${key}, and it's set to ${value}`);
}

// const ans = parseInt(prompt('Write the correct answer'));
// const result = question.get(ans === question.get('answer'));
// console.log(result);2



//////////////////////////////////////////////////////
//////////Lecture: Classes

//ES5
// var Person5 = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateage = function(){
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John',1992, 'teacher');

//ES6
class Person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    } 

    calculateage(){
        var age = new Date().getFullYear() - this.yearOfBirth;
       console.log(age);
    }
     greeting() {
        console.log("hi")     
    }
}

const john6 = new Person6('John', 1992, 'teacher');
john6.greeting();
john6.calculateage();

//////////////////////////////////////////////////////
//////////Lecture: Classes and Subclasses
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateage = function(){
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
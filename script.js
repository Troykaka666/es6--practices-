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

function Person(name){
    this.name = name;
}
//es5
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friend with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['bob','jae','smith'];
// s

//es6 
Person.prototype.myFriends6 = function(friends){
    var arr = friends.map(el => `${this.name} is friend withs ${el}s`);
    console.log(arr);
}
new Person('Troy').myFriends6(friends);
/*
Udemy - Javascript - 5/7
OBJECTS

*/

///////////////////////////////////////// OBJECTS

// var stud = ['Sam', 32, 'APU'];

// stud[3];

// 1)

// var student = new Object();

// student.school


// 2) curly braces

var student = {
    name: 'Sam',
    age: 32,
    school: 'MMU'
};

console.log(student.name);
console.log(student['age']);


///////////////////////////////////////// OBJECTS
///// update data in object

var Leonard = {
    name: 'Loenard',
    school: 'UM',
    age: 23
};

Leonard.age += 1;
console.log(Leonard.age);

Leonard['school'] = 'KKK';
console.log(Leonard['school']);


///////////////////////////////////////// OBJECTS
///// data store

//  object
var student11 = {

    // property
    name: 'Amy',
    age: 20,
    friend: ['Sam', 'James', 'Sally'],
    bestFriend: {
        fname: 'Penny',
        bYear: 1990
    }
};

var bestFriendofStud11 = student11.bestFriend.fname;
console.log(bestFriendofStud11);

var friend2 = student11.friend[1];
console.log(friend2);


///////////////////////////////////////// OBJECTS
//////// HOW TO ADD PROPERTY TO OBJECT

var color = {};

color.orange = { code: 123};
console.log(color.orange.code);

color.black = {code: [5,6,3] }
console.log(color.black.code[2]);


///////////////////////////////////////// OBJECTS
//////// REACH DATA IN COMPLEX OBJECT
//// BLOGPOST

var blogPost = [
    {
        title: 'Weather',
        content: 'It is sunny today',
        comments: [
            
            {
                name: 'John',
                lname: 'Apple'
            },
            {
                name: 'Froddo',
                lname: 'Hanks'
            }
        ]
    },
    {
        title: 'Weather',
        content: 'It is very hot'
    }
];

console.log(blogPost[0].title);

console.log(blogPost[0].comments[1].name);


console.log('--------------------');
///////////////////////////////////////// OBJECTS
//////// QUIZ

/* 1) create a array of object called 'universities'.
      every obj need to have 'name', 'hasGone', 'year' properties.
      Loop over this array and if 'hasGone' value is true, print a stmt to console
      which include 'name', and 'year', properties.
      if 'hasGone', is false just print 'name'.
*/

var universities = [

    {
        name: 'PUO',
        hasGone: true,
        year: 1950
    },
    {
        name: 'UiTM',
        hasGone: true,
        year: 1970
    },
    {
        name: 'UTP',
        hasGone: false,
        year: 2010
    }

];


universities.forEach(function(uni) {
    
    if (uni.hasGone === true) {

        console.log(uni.name + ' ' + uni.year);
    }
    else {

        console.log(uni.name);
    }

});


console.log('--------------------');
///////////////////////////////////////// OBJECTS
//////// METHODS


/// method inside object as function as property
var Sam = {

    fname: 'Sam',
    age: 20,
    hasGone: true,
    friend: ['Gary', 'Danny'],
    say: function() {
        console.log('Say hi');
    }
};

Sam.say();
// console.log(Sam.say());


console.log('--------------------');
///////////////////////////////////////// OBJECTS
//////// this KEYWORD


/// regular funtion point to window
// console.log(this);

function addNumber(x,y) {

    console.log(x + y);
    console.log(this);

};

addNumber(1,2);


/// this as a methods

var Raj = {
    name: 'Raj',
    year: 1999,
    say: function() {
        console.log('say hi ' + this.name); // this refer to the function say()

        /// this point to the window because this funtion is not a method bcus inside say() method
        function someFunc() {
            console.log(this);
        }

        someFunc();
    }
};

Raj.say();


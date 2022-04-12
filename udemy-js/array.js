/* 4/4 Javascript - Arrays
   Udemy

*/

////////////////////////////////////////// 1 =============== ARRAYS

// var $student = ['Sheldon', 'Loenard', 'Rab'];


// console.log($student); // display all index
// console.log($student[0]); // display specific index

// //// CHANGE the index value -------
// $student[0] = 'Amy';

// console.log($student);
// console.log($student[0]); // display specific index

// /// ADD new value in array

// $student[3] = 'Howard';
// $student[6] = 'ben'; /// example empty space

// console.log($student);

// ////// array define type

// var $cat = [];

// var $cat2 = new Array();


///////=============

// var commonData = ['John', 25, true, null];

// //// length property
// var $cars = ['Merc', 'BMW', 'Audi'];
// var $cars_length = $cars.length;

// console.log($cars_length);

////////////////////////////////////////// 2 =============== ARRAYS METHODS


// === push.pop

// var student = ['Sheldon', 'Loenard', 'Rab', 'Am'];

// /// push method add new item to very end of array

// student.push('Howard');

// // console.log(student);

// /// pop method remove new item to very end of array

// student.pop('Howard');

// // console.log(student);

// /// pop last item in array
// // var lastStud = student.pop();

// // console.log(lastStud);



// // ==== shift/unshift

// // unshift add new item too the begining of array

// var cat = ['cat1' , 'cat2', 'cat3'];

// cat.unshift('cat4');

// // console.log(cat);

// // shift remove item too the begining of array

// cat.shift();

// // console.log(cat);


// // ==== indexOf
// // call what the index of any value

// // console.log(student.indexOf('Am'));


// // slice- dont change existing array but create new array of it

// var friends = ['Rose', 'Rachel', 'Ben', 'Sam'];

// var closeFriends = friends.slice(1, 3);

// console.log(friends);
// console.log(closeFriends);


// /// slice to copy entire array
// var otherFriend = friends.slice();

// console.log(otherFriend);

// //// ARRAY QUIZ =====

// console.log('Array Quiz_______');

// // 1)
// var books = ['HP', 'Hobbit', 'HG', 'LP'];

// // 1) access the last element using the lenght of array

// // var lastBooks = books.pop();

// console.log(books[books.length - 1]);


// // 2

// var films = [

//     ['hobbit1', 'hobbit2', 'hobbit3'],
//     ['m1', 'm2', 'm3'],
//     ['gfather1', 'gfather2', 'gfather3']

// ];

// // 2) print the gfather3 film from the film array

// // console.log(films[films.length - 1]);

// console.log(films[2][2]);


////////////////////////////////////////// 3 =============== ARRAYS ITERATION

// for loop array iteration
var books = ['Harry Potter', 'Hobbit', 'Hunger Game', 'Little Prince'];

for (var i = 0; i < books.length; i++) {

    //reach every index of array
    console.log(books[i]);
}

console.log('-------------------');

// array.forEach(element => {
    
// });

books.forEach(function (book) {

    // console.log('mybook'); // output: mybook string display base number element (4) on array
    
    console.log(book);

});

///// QUIZZZ ARRAY ITERATION

console.log('-------------------');

// 1) create an array which includes number btween 0 and 20 
// by using push method

var num = [];

for (var i = 0; i <= 20; i++) {

    num.push(i);
    
}

console.log(num);



// 2) by using this array above, you will print the number that can be devided
// by 5 to the console using th foreach method

num.forEach(function (number) {
    
    if (number % 5 === 0) {

        console.log(number);
    }
});




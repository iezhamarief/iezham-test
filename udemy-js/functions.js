/*
1/4 JS Udemy

FUNCTIONS
*/

//////////////////////////////////// FUNCTIONS

// function sayHello()
// {
//     console.log('Hello World');
// }

// sayHello();

// function doSomething()
// {
//     console.log('Hello World');
// }

// //display 3 time 
// doSomething();
// doSomething();
// doSomething();


//////////////////////////////////// FUNCTIONS w ARGUMENTS

// function sayHi($name)
// {
//     console.log('Hi' + ' ' + $name);
// }

// sayHi('Iezham');
// sayHi('Rab');


// function cube($number)
// {
//     console.log($number * $number * $number);
// }

// cube(3);
// cube(10);

// function bmi($length, $weight)
// {
//     console.log($weight / ($length * $length));
// }

// bmi(1.80, 95);


//////////////////////////////////// FUNCTIONS - RETURN

// function cube($number)
// {
//     if($number === 25)
//     {
//         return 25;
//     }

//     return ($number * $number * $number);
// }

// var $num = cube(25); //store result in variable

// console.log($num);


//calt age

// function calculateAge($Byear)
// {
//     return 2022 - $Byear;
// }

// var $age = calculateAge(2001);

// console.log('My age is ' + $age);


///------

// function enterCafe($age)
// {
//     if($age < 18)
//     {
//         return 'You underage';
//     }

//     return 'You can enter';
// }

// var $cafe = enterCafe(3);

// console.log($cafe);


//////////////////////////////////// FUNCTIONS - DECLARATION and EXPRESSION

/// function declaration
// function calculateAge($Byear)
// {
//     return 2022 - $Byear;
// }

// /// function expression
// var calculateAge = function ($Byear)
// {
//     return 2022 - $Byear;
// }

// var $age = calculateAge(2001);
// console.log($age);

// //funcution to string
// calculateAge = 'John';
// console.log(calculateAge);

///////// function quiz ---

/// ===== 1 subrtact number from argument

// function subtraction($x, $y)
// {
//     return ($x - $y);
// }

// var $x = subtraction(60, 5);
// console.log($x);


/// ===== 2 check number is odd and return true/false

//// function isOdd($number)

// var isOdd = function ($number)
// {
//     if ($number % 2 !== 0)
//     {
//         return true;
//     }

//     return false;
    
// }

// console.log(isOdd(6));


/// 3 funtion expression

// var addition = function($number)
// {
//     var $res = 0;

//     for(var $i = 1; $i <= $number; $i++ )
//     {
//         $res = $res + $i;
//     }

//     return $res;

// }

// var $addResult = addition(3);
// console.log($addResult);


//////////////////////////////////// FUNCTIONS -  SCOPE

// function sayName(){

//     var Name = 'Sheldon';
//     console.log(Name);
// }

// sayName();

// //err var is not defined because the var is in parent scope inside funtion.
// // console.log(Name);

// var Count = 18;

// function writeCount(){
//     console.log(Count);
// }

// writeCount();

// /// no error because the var taken from outside the funtion
// console.log(Count);


////////////////////// funtion inside funtion

// function sayHi(){

//     var myWord = 'Hi there';
//     console.log(yourWord);

//     sayBye();

//     function sayBye() {

//         var yourWord = 'Bye';
//         console.log(myWord);
//     }
// }

// sayHi();

/// var in parent funtion get priotize
// var sectence = "Hello World";

// function saySentence(){

//     var sectence = 'Bye2';
//     console.log(sectence);
// }

// saySentence();
// console.log(sectence);

///myx in doSomething is not define bcs var myx outside the parent funtion

// function writeNum(){
//     var myx = 30;
//     console.log(myx);
// }

// function doSomething() {

//     // var myx = 40;
//     console.log(myx);
// }

// writeNum();
// doSomething();

// JS Udemy Course
// 31/1

/*

console.log('Hello Iezham');

//variable decleration - var
var $fName = 'Alex';

console.log($fName);


//string
var $schTeam = 'Football';

//int number
var $schNumber = 20;
/
//bool
var $isRegistered = true;

console.log($isRegistered);

//undefine variable
var $job;

console.log($job);

//variable mutation - coercion type

console.log($fName + ' ' + $schNumber);

// declare multi var in same line
var $schName, $hasCourse;

$schName = 'PUO';
$hasCourse = true;

console.log(
    $schName + ' has 10 course. Does it have any course? ' + 
    $hasCourse);

//var mutation
$schNumber = 'twenty';

console.log($schNumber);

//alert
alert($schName);

//promt input
var $age = prompt('How old is he?');

console.log('My age is ' + $age + ' years old.');

*/

//////// Basic Operator ////////==============================================

var $totalDistance, $distanceAlex, $distanceSam;

$totalDistance = 20;
$distanceAlex = $totalDistance - 12;
$distanceSam = $totalDistance - 7;

console.log($distanceSam);

console.log($distanceSam * 2);

console.log($distanceSam / 2);

// /// logical operator

var $distanceToSch, $distanceToHome;

$distanceToHome = 14;
$distanceToSch = 6;

bool
var $isCloser = $distanceToHome > $distanceToSch;

console.log($isCloser);


//BOOLEAN LOGIC==============================================

//LOGICAL OPERATOR==============================================

var a = 15;
var b = 11;
var d = (a > b) && !(b != '11' && a == '15');

console.log(d);

//CONDITIONAL STATEMENT ==============================================
////// if, else if, else

var $grade;

$grade = 87

if ($grade < 40) {

    console.log('You Failed E');
} 
else if ($grade >= 40 && $grade < 50) {

    console.log('You pass with D')
}
else if ($grade >= 50 && $grade < 60) {

    console.log('You pass with C')
}
else if ($grade >= 60 && $grade < 70) {

    console.log('You pass with B')
} 
else if ($grade >= 70 && $grade < 100) {

    console.log('You pass with A')
}
else {

    console.log('You passed!');
}

// ==============================================

var $age;

$age = 20;

if ($age <18)
{
    console.log('You cannot enter the cafe');
}
else if ($age >= 18 && $age < 23)
{
    console.log('You can enter but cannot drink alcohol');
}
else 
{
    console.log('You can enter and drink alcohol');
}


//TERNARY OPERATOR ==============================================

var $grade = 12;

$grade < 45 
? console.log('You got E') 
: console.log('You got A')

var $result = $grade < 45 ? 'Failed' : 'Passed';

console.log($result);

if($grade < 45)
{
    $result = 'Failed';
}
else
{
    $result = "Passed";
}

//SWTITH CASE ==============================================

var $day;

$day = 'Monday';

switch ($day) {

    case 'Saturday':
        console.log('Its Saturday');
        break;

    case 'Monday':
        console.log('Its Monday');
        break;

    case 'Friday':
        console.log('ITs Friday');
        break;

    default:
        console.log('What is the day?');
        break;
}

//// switch case with range condition
var $grade = 45;

switch (true) {

    case ($grade < 40):
        console.log('E');
        break;
    
    case ($grade >= 40 && $grade < 50):
        console.log('D');
        break;
    
    default:
        console.log('A');
        break;
}

//QUIZ CODE 2

var $avgAlex = (90 + 80 + 95) / 3;
var $avgSara = (89 + 76 + 98) / 3;
var $avgNancy = (42 + 98 + 83) / 3;

if ($avgAlex > $avgSara && $avgAlex > $avgNancy)
{
    console.log('Highest average is Alex with ' + $avgAlex);
}
else if ($avgSara > $avgAlex && $avgSara > $avgNancy)
{
    console.log('Highest average is Sara with ' + $avgSara)
}
else if ($avgNancy > $avgAlex && $avgNancy > $avgAlex)
{
    console.log('Highest average is Nancy with ' + $avgNancy)
}
else 
{
    console.log('hehehe');
}


//LOOPs ==============================================

// WHILE LOOP

var $number = 1;

while ($number <= 10)
{
    console.log($number);
    $number+=2; //number = number + 1
}

// loops quiz 1

var $evenNum = 132;

while ($evenNum < 149)
{
    console.log($evenNum);

    $evenNum += 2;
   
}

while ($evenNum <= 148)
{
    if ($evenNum % 2 === 0) //mod % any number divided by 2 baki 0
    {
        console.log($evenNum);

    }

    $evenNum += 1;
}


// for loop ====
// for(initialize; condition; step)
// {

// }

//print all number 1 - 10
for (var $num = 1; $num <= 10; $num++)
{

    console.log($num);
}

//odd number 132 - 148

for (var $i = 132; $i <= 148; $i++)
{
    if ( $i % 2 !==0)
    {

        console.log($i);
    }
}

//mod 7 number 25 - 100

for (var $i = 25; $i <= 100; $i++)
{
    if (($i % 7 === 0) && ($i % 5 === 0))
    {

        console.log($i);
    }
}

// CONTINUE AND BREAK ==========

console.log('continue stmt');

for (var $i = 1; $i <= 10; $i++)
{
    if ($i % 2 !== 0) continue; 

    console.log($i);
}

console.log('break stmt');

for (var $i = 1; $i <= 10; $i++)
{
    if ($i % 2 === 0) {
        console.log($i);
        break;
    }

}

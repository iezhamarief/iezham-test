/*
Udemy Javascript - Document Object Model
6/4
*/

///////////////////////////////////////// DOM
////////  INTRODUCTION
/*

Interface between JS and HTML, CSS

How DOM constructed:

The browser converts each html element into a JS object that we can manipulate.
Every converted object is stored under the Document object.

*/

///////////////////////////////////////// DOM
////////  SELECT and CHANGE ELEMENT

//selecting
var h1Element = document.querySelector('h1');

// manipulate
h1Element.style.color = 'blue';


/// ===  animation

var isYellow = false;
var bodyElement = document.querySelector('body');

setInterval(function() {

    if (isYellow) {

        bodyElement.style.background = 'white';

    }
    else {

        // bodyElement.style.background = 'yellow';
    }

    // isYellow = !isYellow;

}, 1000);


// console.log('--------------------method');
///////////////////////////////////////// DOM
////////  SELECT METHOD
/*
  (object).(method name)
- document.getElementById()
- document.getElementsByClassName()
- document.getElementByTagName()
- document.querySelector()
- document.querySelectorAll()

*/

// /// id
// var selectWithId = document.getElementById('p1');
// console.log(selectWithId);

// /// class
// var selectWithClass = document.getElementsByClassName('bg');
// console.log(selectWithClass);

// /// tag
// var selectWithTag = document.getElementsByTagName('p');
// console.log(selectWithTag);

// /// querry select CSS selector - '#'for id selector
// var selectWithQueryId = document.querySelector('#p1');
// console.log(selectWithQueryId);

// /// - '.'for class selector
// var selectWithQueryClass = document.querySelector('.bg');
// console.log(selectWithQueryClass);

// /// all
// var selectAll = document.querySelectorAll('p');
// console.log(selectAll);



// console.log('--------------------manipulating');
///////////////////////////////////////// DOM
////////  MANIPULATING

////////  change element stlye

// var divManipulate = document.querySelector('.bg');

// divManipulate.style.height = '50px';
// divManipulate.style.width = '400px';
// divManipulate.style.backgroundColor = 'red';
// divManipulate.style.fontSize = '30px';
// divManipulate.style.border = '5px solid black';


//////// add/remove CSS element using JS

// divManipulate.classList.add('addClass');
// divManipulate.classList.remove('addClass');

////toggle
// divManipulate.classList.toggle('addClass');


//////// change content stlye

// var pTag = document.querySelector('#p1');

/// 1st method - textContent
// pTag.textContent = 'JAVASCRIPT is DAMN EASY';

// /// 2nd method - innerHTML
// pTag.innerHTML = 'JAVASCRIPT is <b><i>DAMN</i> EASY</b>';


// //////// change attribute (src, href)

// var aTag = document.querySelector('a');

// ///get att
// console.log(aTag.getAttribute('href'));

// /// set att
// aTag.setAttribute('href', 'https://www.google.com.my/');

// console.log(aTag.getAttribute('href'));

// aTag.textContent = 'Google';


console.log('--------------------event handler');
///////////////////////////////////////// EVENT HANDLER
////////  INTRODUCTION


////////  EVENT LISTENER
// var button = document.querySelector('#btn1');
// var title = document.querySelector('#h1');

// button.addEventListener('click', function () {

//     console.log('You clicked button');
//     title.style.backgroundColor = 'red';
// });


//// EVENT LISTERNER in Parent element
// var listParent = document.querySelector('ul');

// listParent.addEventListener('click', function() {

//     console.log('You clicked the list');
//     listParent.style.backgroundColor = 'red';

// });

//// EVENT LISTERNER QUIZ

// var lisItem = document.querySelectorAll('li');

// for(var i = 0; i < lisItem.length; i++) {

//     lisItem[i].addEventListener('click', function() {

//         this.style.color = 'white';
//     })
// }

// console.log(lisItem);


///////////////////////////////////////// EVENT HANDLER
////////  TOGGLE

var para = document.querySelector('#para');

function toggleBg() {

    para.classList.toggle('toggleBg');
}

/// callback funtion no '()'
para.addEventListener('click', toggleBg);


///////////////////////////////////////// EVENT HANDLER
////////  OTHER EVENT

// https://developer.mozilla.org/en-US/

/// QUIZZZ

var todoList = document.querySelectorAll('.todoItem');

for (var i = 0; i < todoList.length; i++) {

    todoList[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = 'orange';
    })

    todoList[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = 'white';
    })

    todoList[i].addEventListener('click', function() {
        this.classList.add('toggleDone');
    })

}

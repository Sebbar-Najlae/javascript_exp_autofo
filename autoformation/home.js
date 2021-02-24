//console 
console.log('hello');
console.log('hello');

//alerte en haut de la page 
//alert('yooo');


//variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

//affichage en page 
document.getElementById('someText').innerHTML = 'Hey';

//Not really like alert "prompt('...');"
//var age = prompt('what is your age ?');

//affichage de la prompt
//document.getElementById('someText').innerHTML = age;

//Nbr in Javascript
var num1 = 10;

//Increment num1 by 1
num1++;

//Decrement num1 by 1
num1--;
console.log(num1);

//Division , multi *, modulo %
console.log(num1 % 6);

//Increment/decrement by any number you want 
num1 += 20;
console.log(num1);

/*functions
1.Create a function
2.Call the function
*/

//Create
function fun() {
    console.log('this is a function');
}

//Call
fun();


/* Let's Create a function that take in a name
and says hello followed by your name

For example 

Name: "Jenny"
Return: "Hello Jenny"
*/

function greeting() {
    var name = prompt('what is your name?');
    var result = 'Hello' + ' ' + name; // String Concatenation
    console.log(result);
}

// greeting();

//How do arguments work in function?
//How do we add 2 numbers together in a functions


function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

/*while loops

var num = 0;

while (num < 10) {
    num++;
    console.log(num);
}

*/

/*For loop

for (let num = 0; num <= 100; num++) {
    console.log(num);
}

*/

// Data types 

let yourAge = 18; //number
let youName = 'Bob'; //string
let name = { first: 'Jane', last: 'Doe' }; //object
let truth = false; //boolean
let groceries = ['apple', 'banana', 'orange']; //array tableau
let random; //undefined
let nothing = null; //value null


// Strings in Javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple'; //new ligne
console.log(moreFruits);

console.log(fruit.length); //longeur
console.log(fruit.indexOf('n')); //repetition
console.log(fruit.slice(2, 5));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));

//condition
var age = 15;
         
if( age > 18 ) {
   document.write("<b>Qualifies for driving</b> <br />");
} else {
   document.write("<b>Does not qualify for driving</b> <br />");
}

//switch
var grade = 'A';
document.write("Entering switch block<br />");
switch (grade) {
   case 'A': document.write("Good job<br />");
   break;

   case 'B': document.write("Pretty good<br />");
   break;

   case 'C': document.write("Passed<br />");
   break;

   case 'D': document.write("Not so good<br />");
   break;

   case 'F': document.write("Failed<br />");
   break;

   default:  document.write("Unknown grade<br />")
}
document.write("Exiting switch block");
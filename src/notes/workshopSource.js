/**
 * 
 * Arrow Functions
 * 
 */

// Arrow functions are the new syntax shorthand for function declarations on ES6

// Old function declaration example

var createGreeting = function(message, name) {
    return message + name;
}

// New declaration example

var arrowGreeting = (message, name) => {
    return message + name;
}

// New declaration shorthand equivalent

var arrowGreeting = (message, name) => message + name;

// Even more crazier shorthand equivalents

var singleGreeting = message => 'hello,' + message;

var squared = x => x * x;

/**
 * 
 * Variable declaration updates 'let' and 'const'
 * 
 */

// The old variable declaration is plagued with hoisting and block scoping problems
// ES6 introduces new variable declarations in form of 'let' and 'const' to solve
// these problems


// Example scenario of hoisting

var hoist = 'hi';
// is inside a block; Anyone can assume it would have no effect whatsoever
{
    var hoist = 'bye';
}
console.log(hoist); // prints 'bye' because hoisting puts all variables on top of the file first regardless if it is in a block or not


var fs = [];
// let fs = [];

// using var returns 10
// using let will return numbers from 0 to 9

for(var i = 0; i <= 10; i++) {
    fs.push(function() {
        console.log(i);
    });
}

fs.forEach(function(f) {
    f();
});

// 'let' uses the concept of block scopes. In a nutshell, anything inside curly brackets is a 
// block scope.

if(true) {
    let fooblock = 'bar';
}

console.log('fooblock: ', fooblock); // returns undefined

/**
 * 
 * Default function parameters
 * 
 */

// ES6 introduces a way to add default values on parameters. It allows for a lot of handy
// features like this one below

function greet(greeting, name = 'Random Person') {
    console.log(greeting + ", " + name);
}

greet('Hello'); // prints 'Hello, Random Person'
greet('Hello', 'Dolly'); // prints 'Hello, Dolly'

// default parameters can also be functions

function receive(funct = () => { console.error('received empty parameters'); }) {
    funct();
}

receive(); // prints error 'received empty parameters'

/**
 * 
 * Constants
 * 
 */

// ES5 does not have support for constant variables, but developers have made a convention
// to use ALL CAPITAL LETTERS when declaring a constant variable.

var CONSTANT_OLD = 'foo';

// but nothing really stops us from changing CONSTANT_OLD to something else. After all,
// it's just a convention.

CONSTANT_OLD = 'bar';

console.log(CONSTANT_OLD); // prints 'bar';

// ES6 introduces 'const' variables to make sure that its initial value can not be changed

const CONSTANT_NEW = 'oof';

CONSTANT_NEW = 'rab'; // returns a 'read only' error on the console when you run the app

console.log(CONSTANT_NEW); 

// But, you can assign properties on your const variables.

const CONSTANT_OBJECT = {};

CONSTANT_OBJECT.foo = 'bar'; // is valid

// but reassigning CONSTANT_OBJECT itself to something else like arrays or a string will have errors, 
// 

CONSTANT_OBJECT = []; // would return the same 'read-only' error

// constants are ideal for, well, constants, like API keys or API secrets 
// port numbers, constant values, or config setup variables

// Like let, it also is block scoped.

// Best practice is to use const on a loop if you'll never expect the data to mutate during the
// process


/**
 * 
 * Shorthand properties
 * 
 */

// Shorthand properties allows developers to use variables as a key-value pair when put inside
// two brackets, like the example below.

let firstName = 'Franklin Mark';
let lastName = 'Aguba';

let personName = { firstName, lastName };

console.log(personName); // logs an object containing firstName and lastName;

// This allows to build complex objects in few lines of code

let mascot = "Penguin";

// You can also add functions

let play = function() {
    console.log('team will be playing soon!');
}

let team = { person, mascot, play };


console.log(team); // prints an object containing personName and the mascot name;

/**
 * 
 * Spread operators
 * 
 */

// Spread operators are used to enumerate array contents on as single values instead of 
// printing the whole array block

let spreadBlock = [1,2,3];

console.log(spreadBlock); // prints [1,2,3]
console.log(...spreadBlock) // prints 1 2 3

// this allows easier array operations like adding array contents to another array

let firstSpread = [1,2,3];
let secondSpread = [4,5,6];

firstSpread.push(secondSpread); // firstSpread = [ 1, 2, 3, [4,5,6] ];
firstSpread.push(...secondSpread) // firstSpread = [ 1, 2, 3, 4, 5, 6 ];

// it also works if you pass it as a function parameter

function addThreeContents(a, b, c) {
    let result = a + b + c;
    console.log(result);
}

addThreeContents(...firstSpread); // prints '6';
addThreeContents(...secondSpread); // prints '15';


/**
 * 
 * Rest parameters
 * 
 */


// Rest parameters are like spread parameters, but they work on arguments instead of parameters.

function functRest(name, ...work) {
    console.log(name);
    console.log(work);
}

functRest('John Doe', 'Programmer', 'Designer', 'Gamer', 'Artist');


/**
 * 
 * Template literals
 * 
 */


// Making strings mixed with variables in ES5 is a bit tedious

let salutations = "hello";

let greetings = salutations + ", world!";

console.log(greetings); // prints 'hello, world!;

// Template literal solves this problem by allowing developers to make a 'template' of
// strings, on top of new features.

// NOTE: template literals start and end with a BACKTICK (`) and not a single quote(');
// you can find it usually just beside number 1 on your keyboard

let greetings2 = `${salutations}, World!`;

console.log(greetings2);

// template literals respect ANY whitespaces inside the template, so you can do something like this

let greetings3 = `

${salutations}, 
                            ${greetings}
        World!
    *       **          *
`; // not the prettiest string in the world, but it works!

console.log(greetings3); 

// Template literals allow you to do other things within the template, like adding or
// calling a function

let tlX = 1;
let tlY = 2;
let equation = `${ x } + ${ y } = ${ x + y }`;

console.log(equation);

// Another example

let tlMessage = `It's already ${ new Date().getHours() }00!`;

console.log(tlMessage); // prints 'It's already <time>00!';

// but it doesn't work as we expect. The thing about it is we can also pass in the template
// literals as a function parameter!

// NOTE: Advanced (Read: crazy) stuff. Read at your own risk.

// let's create a tag function to that will parse the template literal
function tag(strings, ...values) {
    console.log(strings); //strings is an array of strings used inside the template literals
    console.log(values); // these are the items of whatever you have declared inside ${ };

    if(values[0] < 20) {
        values[1] = "awake";
    } else {
        values[1] = "sleepy";
    }

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

// You don't need to put a parenthesis on template literals if that's your only parameter
let tlMessage2 = tag`It's already ${ new Date().getHours() }00! I'm ${""}`;

console.log(tlMessage2); 

// To get even more crazier, you can also use regex and other string
// operations to solve things on top of template literals.


/**
 * 
 * Destructuring Object Assignments (Works on both arrays/objects, but our example will use objects for clarity)
 * 
 */


let obj = {
    color: 'Blue'
}

console.log(obj.color); // prints 'Blue'

let {color, position} = {
    color: 'Blue',
    name: 'Frank',
    country: 'PH',
    position: 'Software Engineer'
}

console.log(color); // prints "Blue"
console.log(position); // prints "Software Engineer"

// it's the same thing as declaring this:

// let color = obj.color;
// let position = obj.position;

// But this just allows us to cut on the 'obj' Object if we are only going to use its properties
// and if you have several key-value pairs of interest, you can just pick them up via 
// destructuring them!

// While it looks like a trivial change to most of us, here's a common scenario which destructuring
// has improved a lot

// let's say we have a function that returns an object where it has some of the details that we want to
// use somewhere

function generateObj() {
    return {
        color: 'Blue',
        name: 'Frank',
        country: 'PH',
        position: 'Software Engineer'
    }
}

// we just get them like this.

let {name, country} = generateObj();

console.log(name); // prints "Frank"
console.log(country); // prints "PH"

// they can also be assigned to a variable (is a let by default) by adding :<variablename>

let {name:firstName, country:location} = generateObj();

console.log(firstName); // prints "Frank"
console.log(location); // prints "PH"

// They're not only for objects, though. You can also use them on arrays!

let [first,,,,fifth] = ['red', 'yellow', 'green', 'blue', 'orange'];

console.log(fifth); // prints 'orange';
console.log(first); // prints 'red';

// Let's do an actual scenario, process an array of objects!

let peopleArray = [
  {
    "firstName": "Franklin Mark",
    "lastName": "Aguba",
    "phone": "1-403-985-0449",
    "email": "frank@stratpoint.com"
  },
  {
    "firstName": "Anthony Bryle",
    "lastName": "Poncio",
    "phone": "1-429-754-5027",
    "email": "mico@stratpoint.com"
  },
  {
    "firstName": "Kevin John",
    "lastName": "Ventura",
    "phone": "1-637-627-2810",
    "email": "kevin@stratpoint.com"
  },
  {
    "firstName": "MJ",
    "lastName": "Valentin",
    "phone": "1-397-181-4501",
    "email": "mj@stratpoint.com"
  }
]

peopleArray.forEach(({firstName}) => console.log(firstName)); // prints all firstNames in the object

let [,,Kevin] = peopleArray;

function logEmail({email}) {
    console.log(email);
}

logEmail(Kevin); // prints 'kevin@stratpoint.com'


/**
 * 
 * Promises
 * 
 */


// Promises are your ES6's NATIVE async operations that defers an operation
// until it ends up on only two possible checks: resolve, or reject

// They don't always have to be an async operation. Any operation that returns a value or throw
// errors is just as valid.

// Let's make a basic skeleton first.


let p = new Promise((resolve, reject) => {
    // A Promise object only takes two parameters: resolve, and reject.
    // then() will fire if the Promise is resolved
    // catch() will fire if the Promise is rejected

    // Promises are usually determined by a logic/condition in your code.
    if(true) {
        // resolve returns whatever is inside its parameter
        resolve('it has passed');
    } else {
        // likewise, reject returns whatever is inside its parameter
        reject('no luck');
    }
});

p.then((data) => {
    console.log('success: ', data);
});

p.catch((error) => {
    console.log('error: ', error);
});

// A little realistic case this time

let promise = new Promise((resolve, reject) => {
    // Let's simulate an API call by adding setTimeout()
    setTimeout(() => {
        if(false) {
            // resolve returns whatever is inside its parameter
            resolve('it has passed');
        } else {
            // likewise, reject returns whatever is inside its parameter
            reject('no luck');
        }
    }, 2000);
    // To force an error to the catch statement, you can do this
    // throw new Error('500 error thrown!!');
});

promise
    .then((data) => {
        console.log('call successful: ', data);
    }).catch((error) => {
        console.log('call error: ', error);
    });

// This is only the basic usage of Promise. Further readings are recommended here:
// https://developers.google.com/web/fundamentals/getting-started/primers/promises


/**
 * 
 * ES6 Classes
 * 
 */


// Like all other classes, ES6 introduces a new Class syntax.
// Although it's not a new concept on Javascript at all since Javascript is using
// prototyping concepts to declare a class-like structure. This feature
// is a syntax-sugar of it and we're looking to implement it moving forward

// Class delcaration is like this.

class Session {
    constructor(topic, attendees) {
        this.name = 'Session';
        this.topic = topic;
        this.attendees = attendees;
    }

    get name() {
        return this.name;
    }

    get topic() {
        return this.topic;
    }

    get attendeesCount() {
        return this.attendees;
    }

}

class Brownbag extends Session {
    constructor(name) {
        super(topic, attendees);
        this.name = name;
    }
}

/**
 * 
 * Generators
 * 
 */

 // Generators are a custom object where you can call next() and yield(). It does not work like your
 // standard function objects but are used for other features.

function* greet(){
    console.log(`You called 'next()'`);
    yield "hello";
}

let greeter = greet();
console.log(greeter);
let next = greeter.next();
console.log(next); // is null because we haven't call 'yield' on our generator
let done = greeter.next();
console.log(done);

// generators use next() to check for yield variables, and is considered done if there are no more
// yield statements inside it.

//------------
function* greet(){
    let friendly = yield "How";
    friendly = yield friendly + "are";
    yield friendly + "you?";
}

var greeter = greet();
console.log(greeter.next("first").value);
console.log(greeter.next(" the heck ").value);
console.log(greeter.next(" silly ol'").value);

//-----------

// You can also create 'infinite' stacks of event, and control them using yield and call next()
// until your requirements are satisfied, like this one

function* graph(){
    let x = 0;
    let y = 0;
    while(true){
        yield {x:x, y:y} // the statement stops here when you call graph.
        x += 2; // but if you call .next(), it will run through this values and loop back to yield
        y += 1;
    }
}


var graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);


// These are only the basic examples of generator usage, its concept is used for async/await which is currently
// being proposed for ES7

/**
 * 
 * Maps
 * 
 */

// Map is a quick way to set key-value pairs on top of more supported features like get,
// set, size, clear, and has

// Your standard key-value pairs usually have strings as their key and value can be anything,
// on Maps, this rule is a bit loose as you can also have objects or functions as keys.

// Maps have built-in methods

// Objects don't have innate methods for manipulation

let myMap = new Map();

//API
/*
set()
get() // returns undefined if the map key doesn't exist
size
clear()
has() // returns false if the map key doesn't exist
*/

let myObj = {};
let myFunc = function(){};

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
myMap.set('string', 2);

console.log('get on myMap = ' + myMap.get(myObj));

//myMap.clear();

console.log('has on non-existing key = ' + myMap.has('qwerty'));

//Iterators
//keys()
//entries()
//values()

// for-of loops are used to access your maps
for(let key of myMap.keys()){
  console.log(key);
}

for(let value of myMap.values()){
  console.log(value);
}

for(let [key, value] of myMap.entries()){
  console.log(key + ' = ' + value);
}

/**
 * 
 * WeakMaps
 * 
 */

/*
Because no references to keys are stored we do not have access to methods that require the ability to iterate the map such as:
keys()
values()
entries()
AND
clear()
*/

// it's one of the first things that get removed on garbage collection on Javascript

// You can use anything as a key on Maps, where you can't on Weakmaps


var myWeakMap = new WeakMap();

var myObj2 = {};
var myFunc2 = function(){};

myMap.set(myObj2, 'bar');
myMap.set(myFunc2, 'world');

console.log(myMap.get(myObj));



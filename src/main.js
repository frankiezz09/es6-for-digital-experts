// You can import multiple exports from the same module as long as they are declared on the
// export

// If you're importing a .js file, no need to declare it on the from statement. just the file
// name will do.

import { sum, subtract } from './module';

console.log(sum(2, 3));
console.log(subtract(7, 5));

// you can also give your imports an alias

import { multiply as t, divide as d } from './module2';

console.log(t(3, 3));
console.log(d(15, 5));

// if you're particularly lazy, you can just use this and it will work as long as it has
// been exported on the origin file

// import * from '<file-location>';

// but if you use alias on it, you can use the alias as an object substitute and call
// whichever exported methods you've exported.

import * as module3 from './module3';

console.log(module3.modulo(17, 5));

// imports are mainly used on a production setup to import not only custom modules, but third
// party modules. For this scenario, we'll import lodash

let _ = require('lodash/core');

let array = ['a','b','c'];
let array2 = ['a','d','e'];

console.log(_.find(array, (o) => { return o === 'b' })); // finds instances of 'b' in an array
console.log(_.last(array2)); // returns last array value, which is 'e'

// Check out lodash docs for more library features: https://lodash.com/docs/4.17.4

// They are best use for all your app constants and configs (usually)

// Note: as best practice, put all your imports on top of your files. The arrangement here are
// just for research purposes.

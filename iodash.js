// main.js
const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = _.map(numbers, (num) => num * 2);

console.log(doubledNumbers);

// Menggunakan array
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length); // Output: 3
console.log(fruits[0]); // Output: 'apple'

// Menggunakan objek
const person = {
    name: 'frista',
    age: 20,
    job: 'mahasiswa'
};

console.log(person.name); // Output: 'frista'

// Perulangan for
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  // Fungsi
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  greet('frista'); // output: Hello, frista!
  
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// Variables - var (global), let (allows reassignig values), const (can't be reassigned)

let score = 30;
score = 31;
console.log(score);

// Data types - String, Number, Boolean, null, undefined
const name = 'John';
const age = 30;
const rating = 4.5;  // Not float (in JS)
const isCool = true;
const x = null;  // typeof is object (bug in JS)
const y = undefined;
let z;

console.log(typeof isCool);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);

// Template String
console.log(`My name is ${name} and I am ${age}`);

// String properties and methods
const s = 'Hello World';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());  // Substring defined by 2 indexes
console.log(s.split(''));  // Split by character

const list = 'technology, computers, it, code';
console.log(list.split(', '));

// Arrays - variables that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5);  // New -> constructor
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true];  // Does the same without new (constructor)
// Does not have to be the same type
console.log(fruits);
console.log(fruits[1]);

fruits[3] = 'grapes';
console.log(fruits);

fruits.push('mangos');  // Add to the end
console.log(fruits);

fruits.unshift('strawberries');  // Add to the beginning
console.log(fruits);

fruits.pop();  // Remove the last element
console.log(fruits);

console.log(Array.isArray(fruits));  // Check if it is an array

console.log(fruits.indexOf('oranges'));  // Get the index of an element

// Object Literals
const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: { // Nested object - address is an object
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstname, lastname, address: { city } } = person;  // Destructuring

console.log(firstname);
console.log(city);

person.email = 'jonh@gmail.com'; // Add a property

console.log(person);

// Arrays of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
]

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);  // Convert to JSON
console.log(todoJSON);

// Loops
// For
for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While
let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// Loop through arrays
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}  // Not the best way


// Best way
for (let todo of todos) {
    console.log(todo.text);
}

// High order array methods
// forEach, map, filter

// You use the parameter to access the objects in the array
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);  // Returns the text of the completed todos only

// Conditionals
const v = 50;
const w = 10;

if (v === 10) {
    console.log('v is 10');
} else if (v > 10) {
    console.log('v is greater than 10');
} else {
    console.log('v is less than 10');
}

if (v > 10 || w > 10) {
    console.log('v or w is greater than 10');
}

// Ternary operator
const t = 11;
let color = t > 10 ? 'red' : 'blue';
console.log(color);

// Switches
switch(color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

// Functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;

}

console.log(addNums());  // Use the default values
console.log(addNums(5, 4));  // Use the given values (subscribes the default values)

// Arrow functions
const addNums2 = (num1 = 1, num2 = 1) => {
    console.log(num1 + num2);
}

const addNums3 = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNums3(5, 5));

const addNums4 = num1 => num1 + 5;
console.log(addNums4(4));

todos.forEach((todo) => console.log(todo.text));  // Makes the code cleaner

// Object oriented programming

// Constructor function (starts with a capital letter)
function Person(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);  // Date object
}

// Prototypes (makes it easier to add methods to objects -> doesn't appear at the object itself)
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstname} ${this.lastname}`;
}

// Class (ES6)
class Person2 {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person2('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person2.getFullName());



// DOM (Document Object Model)
// console.log(window); // Window object is the main/global object in client side JS

// // Single element selectors
// // Document is the object that represents the page
// // Document object is a property of the window object
// console.log(document.getElementById('my-form'));  // Returns the element with the id my-form
// console.log(document.querySelector('.container'));  // Returns the first element with the class container

// // Multiple element selectors
// console.log(document.querySelectorAll('.item'));  // Returns a NodeList
// console.log(document.getElementsByClassName('item'));  // Returns an HTMLCollection (notr recommended since doesn't return an array)
// console.log(document.getElementsByTagName('li'));  // Returns an HTMLCollection

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// // ul.remove();  // Removes the element
// // ul.lastElementChild.remove();  // Removes the last element
// ul.firstElementChild.textContent = 'Hello';  // Changes the text content
// ul.children[1].innerText = 'Brad';  // Changes the text content
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';  // Changes the HTML content

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';  // Changes the style
// btn.addEventListener('click', (e) => {  // Event listener (the e parameter is the event parameter)
//     e.preventDefault();  // Prevents the default action (submitting a form)
//     console.log(e.target.className);  // Returns the class of the target
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

// Making the form works
// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
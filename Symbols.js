'use strict'

// let symbol = Symbol();
// console.log(typeof symbol);
// console.log(symbol);
// alert(symbol); (Uncaught TypeError: Cannot convert a Symbol value to a string)

// let symbol = Symbol('mySymbol');
// let symbol2 = Symbol('mySymbol');
// console.log(symbol === symbol2);

// let symbol = Symbol.for('mySymbol');
// let symbol2 = Symbol.for('mySymbol');
// console.log(symbol === symbol2);
// let symbolName = Symbol.keyFor(symbol);
// console.log(symbolName);

// let person = {
//     name: 'Levon',
//     age: 21,
//     [Symbol('password')]: 'Levon21',
// };
// console.log(person);
// console.log(person.password);
// console.log(person[Symbol.for('password')]);

// let person = {
//     name: 'Levon',
//     age: 21,
//     [Symbol.for('password')]: 'Levon21',
//     [Symbol.for('password1')]: 'Levon22',
// };
// console.log(person);
// console.log(person.password);
// console.log(person[Symbol.for('password')]);
// console.log(Object.getOwnPropertySymbols(person));

// let person = {
//         name: 'Levon',
//         age: 21,
//     };
// let phone = Symbol.for('094584856'); 
// person[phone] = '098561547';
// console.log(person);
// console.log(person[phone]);
// console.log(Symbol.keyFor(phone));

// let number = Symbol('number');
// let person = {
//         name: 'Levon',
//         age: 21,
//         [number]: 1,
//     };

// for (let key in person) console.log(key);
// console.log(Object.keys(person));
// console.log(Object.assign({}, person));
// console.log(Symbol.keyFor(number));
// console.log(number.description);




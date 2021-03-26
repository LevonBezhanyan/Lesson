'use strict'

// let age = [12,18,21];
// console.log(age.shift());
// console.log(age);
// console.log(age.unshift(9));
// console.log(age);
// age.push(25);
// console.log(age);
// age.pop();
// console.log(age);


// let arr = ['a','b'];
// arr.concat(['c','d']); 
// console.log(arr.concat(['c','d']));
// arr.forEach(console.log);
// console.log(arr.indexOf('a'));
// console.log(arr.includes('b'));


// let users = [
//     {id: 1, age: 20},
//     {id: 2, age: 22},
//     {id: 3, age: 24},
//   ];

//   let user = users.find(function(val){
//       return val.id === 1;
//   })
//   console.log(user.age);

//   let user1 = users.filter(function(val){
//       return val.id < 3;
//   })
//   console.log(user1);


// function x(a, b) {
//     if (a > b) return 1;
//     if (a === b) return 0;
//     if (a < b) return -1;
//   }
  
//   let arr = [ 4, 2, 11 ];
  
//   arr.sort(x);
  
//   console.log(arr);


// let arr = [2,4,8,45,3];
// console.log(arr.reduce(function(aggr,val){
//     return aggr + val;
// }, 0));

// let arr = [2,4,5,8,11];

// let b = arr.map(function(a, val){
//     return a * (val+1);
// });
// console.log(b);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.reverse();
// console.log(arr);

// let arr = [1,true,{a:4},[1,4,5],'all']
// console.log(Array.isArray(arr[3]));

// let str = 'frienddsfdeardsfmydsfyoudsfkilldsfIdsfanddsfgundsfadsfisdsfIt';
// console.log(str);
// let arr = str.split('dsf');
// console.log(arr);
// let arrTrue = arr.reverse();
// console.log(arrTrue);
// let arrFalse = arrTrue.reverse();
// console.log(arrFalse);
// let youDontUnderstand = arrFalse.join('vfg');
// console.log(youDontUnderstand);

// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
//   };

// console.log(arrayLike);
// let arr = Array.from(arrayLike);
// console.log(arr);
// console.log(arr.push('!'));
// console.log(arr);

// let x = function(a,b,c,d) {
//     let team1 = [];    
//     return team1 = [a,b,c,d];
//     };
// let y = function(e,f,g,h) {    
//     let team2 = [];
//     return team2 = [e,f,g,h];
//     };

// let group1 = x('yo','bo','ho','mo');
// let group2 = y('lo','ko','no','so');
// console.log('1/4 groups');
// console.log(group1);
// console.log(group2);

// let i1;
// let i3;
// i1 = (Math.floor(Math.random()*4));  
// i3 = (Math.floor(Math.random()*4));
// // console.log(i1);
// // console.log(i3);
// group1.splice(i1,1);
// group2.splice(i3,1);

// let i2;
// let i4;
// i2 = (Math.floor(Math.random()*3));
// i4 = (Math.floor(Math.random()*3));
// group1.splice(i2,1);
// group2.splice(i4,1);

// console.log('1/2 groups');
// console.log(group1);
// console.log(group2);

// i1 = (Math.floor(Math.random()*4));  
// i3 = (Math.floor(Math.random()*4));
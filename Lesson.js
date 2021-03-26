'use strict'

// let Hi = 10;
// Hi = 'Hello';

// alert(Hi);
// console.log(Hi);

// let Point = 'I am 21 years old';
// let Age;
// Age == Point;
// console.log(Point == Age);
// console.log(Age);

// console.log('It is');

// const a = 7;
// console.log(a);

/* if you write console.log('a') console is show letter a */
// console.log('a');

// const LOVE_SMILE = "&#128151";
// let smile = LOVE_SMILE;
// console.log(smile);

// let Number1 = 1000125448404305458043153105244530564034534056103604;
// console.log(Number1);
// let Number2 = 1000125448404305458043153105244530564034534056103604n;
// console.log(Number2);

// console.log(`I am ${7*3} years old`);
// console.log(0.1+0.2);
// console.log(0.1+0.2==0.3);
// console.log(typeof null);

//------------newLesson------------------

// let a = 3;
// let b = ' pigs';
// console.log(a+b);

// let a = 5;
// let b = 7;
// // let c = a === b;
// // let c = a !== b;
// // let c = a < b;
// // let c = a > b;
// // let c = a >= b;
// let c = a <= b;
// console.log(c);

// let age = 3*7;
// console.log('I am '+ age +' years old');

// let a = '5';
// // let a = +'5';
// // let b = 5;
// let b = '' + 5;
// console.log(a === b);

// let a = [5,6,7,45];
// let b = a.length;
// console.log(b);

// console.log(a[0]);

// let a = [5,6,7,45];
// let y;
// y = a[2];
// console.log(y);

// let a = [5,6,7,45];
// a[3] = 'hi';
// console.log(a);

// let a = 5;
// let b = 6;
// console.log(a,b) = 6,5;
// let c;
// c = a;
// a = b;
// b = c;
// console.log(a,b);

// let a = [];
// a[0] = 7;
// a[1] = 'yes';
// a[2] = [true, false];
// console.log(a);
// console.log(a[2][1]);

// let x = function(y, a) {
//     console.log(y+a)
// };

// x(7, 8);


// --------------------------newLesson(05.03.2021)-------------------------

// console.log(BigInt(1111111111111111111111111111111111111111n));
// console.log(Number('1111111111111111111111111111111111111111n'));
// console.log(1111111111111111111111111111111111111111n);

// console.log(5+"1");
// console.log(5-'1');

// console.log(+'5'); // this + is === Number()

// let counter = 1;
// console.log( counter++ );
// console.log( ++counter );

// let a = (2+2, 3+3);
// console.log(a);
// let b = 2+2, 3+3;
// console.log(b);

// console.log(null === 0);
// console.log(null == 0);
// console.log(null >= 0);


// let numberKnow = prompt ('What is your number?')
// if (numberKnow > 0) {
//     console.log(1);
// } else if (numberKnow < 0) {
//     console.log(-1);
//   } else if (numberKnow === '0') {
//         console.log(0);
//     };


// let a = prompt('a?');
// let b = prompt('b?');
// let result = (a + b < 4) ? 'few' : 'many';
// console.log(result);

// if (-1 || 0) // -1
// console.log( 'first' ); // +
// if (-1 && 0) // 0
// console.log( 'second' ); // -
// if (null || -1 && 1) // 1
// console.log( 'third' ); // +

// for (let i = 0; i < 20; i++) {
//     if (i % 3 === 0) continue;
//     console.log(i);
// }
// for (let i = 0; i < 20; i++) {
//     if (i % 11 === 0) break;
//     console.log(i);
// } 

// let a = 81 ** (3/4);
// console.log(a);


// ----------------newLesson(9.03.2021)----------------


// let numberTo = +prompt('Your number');

// switch (numberTo) {

// case 0:
//   console.log('0');
// break;

// case 1:
//     console.log('1');
//     break;

// case 2:
//     case 3: 
//   console.log('2 or 3');
//   break;
// }


// function min (a,b) {
//      if (a>b) {
//          return b;
//      } else if (a < b) {
//          return a;
//      } else if(a === b) {
//          return 'a = b';
//      }
// };
// let result = min(45,64);
// console.log(result);



// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//     //  let result = x;
//       result *= x;
//       console.log(result);
//     }
  
//      return result;
// }
// console.log(pow(2,3));
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
//     alert( pow(x, n) );
//   }
// ?????


// const names = {
//     'name1 nick': "Levon",
//     name2: "Ashot",
//   };
  
//   names["name1 nick"] = "Bej";
//   names.name2 = "Lyov"; 
  
//   console.log(name)




// ---------------newLesson 13.03.2021--------------

// let a = 5;
// let b = 6;
// a = b - a;
// b = b - a;
// a = a + b;
// console.log(a,b);


// let obj = {}
// console.log(obj);

// let v = [1,2,3,4];
// console.log(v.reverse());

// let codes = {
//     "+49": "Germania",
//     "+374": "Armenia",
//     "+44": "United kingdom",
//     "+1": "USA"
//   };
  
//   for (let code in codes) {
//     console.log(+code);
// }

// console.log(1<2<3);
// console.log(3>2>1);
// console.log(2<2<2);
// console.log(true>1);
// console.log(true<1);
// console.log(true==2);
// console.log(true==1);
// console.log(true===1);
// console.log(3<2==0);

// ?????
//  let message = {
//      hi:'hello',
//      by:'goodby',
// };
// let a;

// message.cloneDeep(a);

// console.log(message===phrase);
// ?????

// let a = 5e12;
// console.log(a);
// let b = 5e-6;
// console.log(b);
// let c = 5e-7;
// console.log(c);

// let num = 4.54646;
// console.log(num.toFixed(2));

// let user = {
// user1:{
// name1:'Levon',
// name2:'Armen',
// },
// user2:{
// name1:'Arman',
// name2:'Gor',
// }
// };
// console.log(user.user1.name2);

// let a = '15e4';
// let b = '1354541515345615454554541n';
// console.log(isFinite(a));
// console.log(isFinite(b));

// let a = '15e4';
// let b = '15.456';
// console.log(parseInt(a));
// console.log(parseInt(b));
// console.log(parseFloat(b));

// console.log(Math.pow(5, 5));

// let random = [];
// for (let i = 0; i < 10; i++) {
//     random.push(Math.floor(Math.random()*10));
// }
// console.log(random);

// console.log("\u{1F60D}");
// console.log("\u{1F60D}");

// let age = [12,18,21];
// console.log(age.shift());
// console.log(age);
// console.log(age.unshift(9));
// console.log(age);
// age.push(25);
// console.log(age);
// age.pop();
// console.log(age);

// let num = [];
// num.one = 1;
// console.log(num);
// num[0] = 1;
// num[10] = 10;
// console.log(num);
// num[1] = 10;
// num[0] = 9;
// console.log(num);

// let age = [12,18,21];
// age.length = 1;
// console.log(age);

// let game = [
//     ['x','o','o'],
//     ['o','x','x'],
//     ['o','x','x'],
// ]
// console.log(game[1][2]);

let a = 1e-7
console.log(a);
console.log(a.toFixed(2));
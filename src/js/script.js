'use strict';

/* lesson 9 Переменные и строгий режим */


/* a = 15;
console.log(a); */

/* let number = 5; -- change 
let NUmber = 4;
const leftBorderWidth = 10; -- NO change

number = 10;
console.log(number);

leftBorderWidth = 10; -- error

const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);

console.log(name);
var name = 'Ivan';

{
    let result = 50; -- var(NOTerror)
}

console.log(result) */


/* lesson 11 Классификация типов данных в JavaScript */

/* let number = 4.6;

console.log(4/0);
console.log(-4/0);
console.log('string' * 9);

let person = 'Alex', " ", ` `;

const bool = false;

console.log(something) null

let und;
console.log(und) undefined */

/* const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(obj.name);
console.log(obj['name']); */

/* let arr = ['a', 2, {}, [], "apple.jpg"];
console.log(arr[1]); */

/* const arr = [1, 2, 3];

console.log(arr[1]);

const obj = {a: 1, b: 2};
const obj = {
    Anna: 500,
    'Alice': 800
}; */


/* lesson 12 (д) Разница между объектами и массивами и неочевидные синтаксические возможности */


/* const arr = ['a', 'b', 'c'];
console.log(arr[1]);

arr[10] = '3456';

console.log(arr[10]);
console.log(arr);


const arrObj = {
    a: 'a',
    1: 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def: {

        }
    }
};

const b = 'b';

arrObj.b = '1234', [], {};
arrObj['c'] = '5678';

console.log(arrObj['b']);
console.log(arrObj.b);
console.log(arrObj.c);

console.log(arrObj.a);
console.log(arrObj[2]); */

/* lesson 13 Простое общение с пользователем */

/* alert('Hello');

const result = confirm('Are you here?');
console.log(result);

const answer = prompt(`You've 18?`, '18');
console.log(typeof(answer)); Вся информация которая приходит от пользователя имеет тип string */

/* const answer = +prompt(`You've 18?`, '18');
console.log(typeof(answer)); "+" - перед prompt способ обойти тип string */

/* const answers = [];

answers[0] = prompt(`Wat's your name?`);
answers[1] = prompt(`Wat's your sourname?`);
answers[2] = prompt(`How old are you?`);

document.write(answers);

console.log(typeof(answers)); */


/* lesson 14  Интерполяция (ES6) */


/* const category = 'toys';

console.log('https://someurl.com' + category);
console.log(`https://someurl.com/${category}`);

const user = 'Nazar';

console.log(`Hello ${user}`); */


/* lesson 15 операторы в JS*/


/* console.log('arr' + " - object");
console.log(4 + " - number");
console.log(4 + +" - number");
console.log(4 + +"5"); */

/* let incr = 10,
    decr = 10;

incr++; - Постфиксная запись инкримента
decr--;

++incr; - Префиксная запись инкримента
--decr;

console.log(incr);
console.log(decr);

console.log(incr++); (сначала выводит, потом увиличивает)
console.log(++decr); (сначала увиличивает, потом выводит) */

/* console.log(5%2);

console.log(2*2 == 8);
console.log(2*2 == '8');
console.log(2*2 === '8'); */

/* && - and
|| - or

const isChecked = true;
      isClose = true;

console.log(is isChecked && isClose);
console.log(is isChecked || isClose); 

! - оператор отрицания

console.log(is isChecked || !isClose); - true*/

/* console.log(2+2*2 === 8);
console.log(2+2*2 != 8);
console.log(2+2*2 != '6');
console.log(2+2*2 !== '6');
 */


/* lesson 20 Условия */


/* if (4 == 4) {
    console.log('OK!');
}

if (4 == 9) {
    console.log('OK!');
} else {
    console.log('Error');
}

if (1) {
    console.log('OK!');
}

const num = 50;

if(num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Over');
} else {
    console.log('OK');
}

(num === 50) ? console.log('OK') : console.log('Error');  Условный (тернарный) оператор - 
единственный оператор в JavaScript, принимающий три операнда: условие,
 за которым следует знак вопроса (?),затем выражение,
 которое выполняется, если условие истинно, сопровождается двоеточием
 (:), и, наконец, выражение, которое выполняется, если условие ложно.
Он часто используется в качестве укороченного варианта условного оператора if. */

/* const num = 50;

switch (num) {
    case 49:
        console.log('No');
        break;
    case 100:
        console.log('No');
        break;
    case 50:
        console.log('Yes');
        break;
    default:
        console.log('No now');
        break;
} */


/* lesson 21 (д) Логические операторы */


/* && */

/* const hamburger = true;
const fries = true; (false)

if (hamburger && fries) {
    console.log(`I'm full`);
}

console.log((hamburger && fries)); */

/* const hamburger = 5;
const fries = 0; (null; undefined)

if (hamburger && fries) {
    console.log(`I'm full`);
}

console.log((hamburger && fries)); */

/* const hamburger = 3;
const fries = 1;
const cola = 1;

false - 0, NaN, undefined, null, '';

console.log(hamburger === 3 && cola && fries);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'hell');
console.log(1 && 'hell');

if (hamburger === 3 && cola === 1 && fries) {
    console.log(`All fulls`);
} else {
    console.log("We're leaves");
} */

/* || */

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries) {
    console.log(`All happys`);
} else {
    console.log("We're leaves");
}

if (hamburger === 3 && cola == 2 || fries === 3 && nuggets) {
    console.log(`All happys`);
} else {
    console.log("We're leaves");
}

console.log(hamburger === 3 && cola == 2 || fries === 3 && nuggets);
console.log(hamburger === 3 && (cola == 2 || fries === 3) && nuggets);
console.log(hamburger || cola || fries);

let johnRport, alexReport, samReport, mariaReport = 'done';

console.log(johnRport || alexReport || samReport || mariaReport); */

/* ! */

/* console.log(!0); false(это не false) > true(это true) */


/* HOMEWORK */


/* console.log( NaN || 2 || undefined );   2 
 
console.log( NaN && 2 && undefined );   NaN
 
console.log( 1 && 2 && 3 );   3
 
console.log( !1 && 2 || !3 );   false
 
console.log( 25 || null && !3 );   25
 
console.log( NaN || null || !3 || undefined || 5);   5
 
console.log( NaN || null && !3 && undefined || 5);   5
 
console.log( 5 === 5 && 3 > 1 || 5);   true */

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
} true */

/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!');
} true */

/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
} false */



/* lesson 22 Циклы */


/* let num = 50;
 while (num <= 55) {
    console.log(num);
    num++;
 }

 do {
    console.log(num);
    num++;
 }
 while (num <= 55);

 for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
 }

 for (let i = 1; i < 8; i++) {
    if (i === 6) {
        // break;
        continue;
    }

    console.log(i); 
 } */


 /* lesson 23 Циклы в цикле и метки */


/* for (let i = 0; i <3;  i++) {
    console.log(i);
    for (let j = 0; j <3;  j++) {
        console.log(j);
    }
} */

/* let result = '';
const len = 7;

for (let i = 1; i < len; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n';
}

console.log(result); */

/* first: for (let i = 0; i <3;  i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j <3;  j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k <3;  k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
} */


/* HOMEWORK */


/* let i = 2;
do {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
} while (i <= 16); */

/* let arrayOfNumbers = [];

for (let i = 5; i <= 10; i++) {
    arrayOfNumbers.push(i);
} 

console.log(arrayOfNumbers); */

/* const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];  
}

console.log(result); */

/* const data = [5, 10, 'Shopping', 20, 'Homework']; 

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) == typeof(0)) {
        data[i] = data[i] * 2;
    } else {
        data[i] = data[i] + '- done';
    }
}

console.log(data); */

/* const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 0; i < data.length; i++) {
    result[i] = data[(data.length - 1) - i];
}

console.log(result); */

/* const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
        
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }

    for (let j = 0; j < i * 2 + 1; j++) {
        result += "*";
    }

    result += '\n';
}

console.log(result); */


/* lesson 25 Функции, стрелочные ф-ции (ES6) */


/* function showFirstMessage() {
    console.log('Hello, world!');
}

showFirstMessage();

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;

}

showFirstMessage('Hello, world!');
console.log(num);

function calc(a, b) {
    return(a + b);
}

console.log(calc(4, 2));
console.log(calc(3, 12));
console.log(calc(7, 20));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret ();
console.log(anotherNum);

const logger = function() {
    console.log('Hello');
};

logger();

const calc = (a, b) => a + b;

const calc = a => {return a};

const calc = (a, b) => {
    console.log(1);
    return (a + b);
}; */


/* lesson 26 (д) Еще раз про аргументы функций */


/* const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr); */


/* lesson 27 (д) Про важность return */


/* const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

promotion(convert(500, usdCurr));

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();

function doNothing() {}
console.log(doNothing() === undefined); */


/* HOMEWORK */



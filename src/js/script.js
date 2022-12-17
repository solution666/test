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


/* lesson 16 */




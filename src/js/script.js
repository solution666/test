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


/* function returnNeighboringNumbers(num) {
    let a = num - 1;
    let b = num + 1;
    let arr = [a, num, b];
    return console.log(arr);
}

returnNeighboringNumbers(235); */

/* function getMathResult(num, times) {
    if (times <= 0 || typeof(times) !== 'number') {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }

    return str;
}

getMathResult(5, 3);
getMathResult(3, 10);
getMathResult(10, 5);
getMathResult(10, '5');
getMathResult(10, 0);
getMathResult(20, -5); */


                    /* lesson 28 Методы и свойства строк и чисел */


/* const str = "teSt";
const arr = [1, 2, 3, 4];

console.log(arr.length);
console.log(str.toUpperCase()); console.log(str[2] = 'd');  не работает
console.log(str.toLowerCase());

const fruit = "Some fruits";

console.log(fruit.indexOf('fruit'));

const logg = 'Hello, world!';

console.log(logg.slice(7, 12));
console.log(logg.substring(7, 12));
console.log(logg.substr(7, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test)); */


                    /* HOMEWORK */


/* function calculateVolumeAndArea(num) {
    if ((num < 1) || (num !== parseInt(num))) {

        return ("При вычислении произошла ошибка");
    } else {
        let volume = num*num*num;
        let lateral = 4*(num*num);
        let base = num*num;
        let space = lateral + 2 * base;

        return `'Объем куба: ${volume}, площадь всей поверхности: ${space}'`;
    }
}

console.log(calculateVolumeAndArea(1)); */


/* function getCoupeNumber(num) {
    if (num === 0 || num > 36) {
        return console.log("Таких мест в вагоне не существует");
    } else if (isNaN(num) || num !== parseInt(num) || num < 0) {
        return console.log("Ошибка. Проверьте правильность введенного номера места");
    } else {
    let result = Math.round((num + 1) / 4);
    return result;
    }
}

console.log(getCoupeNumber(8));
console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello')); */


/* function getTimeFromMinutes(num) {
    if (isNaN(num) || num !== parseInt(num) || num < 0) {
        return ("Ошибка, проверьте данные");
    } else {
        let minutes = num % 60;
        let hours = (num - minutes) / 60;
        if (hours === 1) {
            return (`Это ${hours} час и ${minutes} минут`);
        } else if (hours === 2 || hours === 3 || hours === 4) {
            return (`Это ${hours} часa и ${minutes} минут`);
        } else {
            return (`Это ${hours} часов и ${minutes} минут`);
        } 
    }
}

console.log(getTimeFromMinutes(5000));
console.log(getTimeFromMinutes(180));
console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(60));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(4));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150)); */


/* function findMaxNumber(firstNum, secondNum, thirdNum, fourthNum) {
    if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum) || isNaN(fourthNum) || 
    firstNum !== parseFloat(firstNum) || secondNum !== parseFloat(secondNum) || 
    thirdNum !== parseFloat(thirdNum) || fourthNum !== parseFloat(fourthNum)) {
        return 0;
    } else {
        return Math.max(firstNum, secondNum, thirdNum, fourthNum);  
    }
}

console.log(findMaxNumber(4, 3, 2, 1));
console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10')); */


/* function fib(num) {
    if (num <= 0 || !Number.isInteger(num) || typeof(num) !== 'number') {
    return ""; 
    }

    let result = "";
    let firstNum = 0;
    let secondNum = 1;
            
    for (let i = 0; i < num; i++) {
        if(i+1 === num) {
            result += `${firstNum}`;
        } else {
            result += `${firstNum} `;
        }

        let thirdNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = thirdNum;
    }

    return result;
}

console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(1));
console.log(fib(0)); */
                    

                    /* lesson 31 Callback- функции */


/* function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I'm learning: ${lang}`);
    callback();
}

function done() {
    console.log('I complet this lesson!');
}

learnJS('JavaScript', done);

learnJS('JavaScript', function() {
    console.log('I complet this lesson!');
}); */


                    /* lesson 32 Объекты, деструктуризация объектов (ES6) */


/* const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);

console.log(options.name);
console.log(options['colors']['border']);

delete options.name;

console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойства ${i}, имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойства ${key}, имеет значение ${options[key]}`);
        counter++;
    } 
} */


                    /* HOMEWORK */

                
/* const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {languages} = plan.skills;
        let str = `Мне ${plan.age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
    let str = '';
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter)); */


                    /* lesson 33 Массивы и псевдомассивы */
                

/* const arr = [1, 2, 13, 36, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr[99] = 0;
console.log(arr.length);
console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside tje massive ${arr}`);
});

arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; ')); */


                    /* HOMEWORK */


/* const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = "Семья состоит из:";
    if (family.length === 0) {
        return "Семья пуста";
    } else {
        for (let value of arr) {
            str += ` ${value}`;
        }
        return str;
    }
}

console.log(showFamily(family)); */

/* const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let i = 0; i < favoriteCities.length; i++) {
        console.log(favoriteCities[i].toLowerCase());
    }
}

standardizeStrings(favoriteCities); */


                    /* HOMEWORK (part 2)*/


/* const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    } else {
        let arr = [];
        for (let i = 0; i < str.length; i++) {
            arr[i] = str[i];
        }
        
        arr.reverse();
        return arr.join('');
    }
}

console.log(reverse(someString)); */

/* const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = "Доступные валюты:\n";
    arr.length === 0 ? str = "Нет доступных валют" : str = 'Доступные валюты:\n';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== missingCurr) {
            str += `${arr[i]}\n`;
        }
    }

    return str;
}

console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'RUB')); */


                    /* lesson 35 Передача по ссылке или по значению, Spread оператор (ES6-ES9) */


/* let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; link

copy.a = 10;

console.log(copy);
console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);

console.log(numbers);

const add = {
    d: 16,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = (Object.assign({}, add));

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'eee';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

console.log(newAarray);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj); */


                    /* lesson 38 Основы ООП, прототипно-ориентированное наследование */


/* let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

це:
const john = Object.create(soldier);

рівне цьому:
const john = {
    health: 100
};

john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier);

console.log(john.armor);
john.sayHello(); */


                    /* HOMEWORK */


/* const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let squaer = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        squaer += shop.width * shop.length;
    });

    volume += squaer * data.height;

    if (data.budget - (volume*data.moneyPer1m3) >= 0) {
        return `Бюджета достаточно`;
    } else {
        return `Бюджета недостаточно`;
    }
}

console.log(isBudgetEnough(shoppingMallData)); */

/* const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }

    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

console.log(sortStudentsByGroups(students)); */


                    /* lesson 39 Динамическая типизация в JS */


/* // To String

// 1)
console.log(typeof(String(null)));
console.log(String(null));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));
console.log(typeof(null + ''));

const num = 5;

console.log("https://vk.com/catalog" + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answer = +prompt("Hello", "");

// To Boolean

// 0, '', null, undefined, NaN === false;

// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)

console.log(typeof(Boolean('4')));

// 3)

console.log(typeof(!!"10101")); */


                    /* lesson 40 Замыкание и лексическое окружение */


/* let number = 5; // *

function logNumber() {
    let number = 4; // ***
    console.log(number);
}

number = 6; // **

logNumber(); // 5 => 6 => 4

function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    };

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3); // 1 2 3 

{
    let msg = 'Hello';
}

console.log(msg) // Error

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let num = 3;
    }

    console.log(num) // Error
} */


                    /* lesson 41 Задачи с собеседований на понимание основ */


/* let x = 5; alert( x++ ); // 5

[ ] + false - null + true; // => NaN;  [] === ""; typeof([] + false) === string;

let y = 1; let x = y = 2; alert(x); // 2

[ ] + 1 + 2; // "12"

alert( "1"[0] ); // 1

2 && 1 && null && 0 && undefined; // null (AND(&&) запинается на лжи)

!!( a && b ) === (a && b); // false

alert( null || 2 && 3 || 4 ); // 3 (OR(||) запинается на правде)

a = [1, 2, 3]; b = [1, 2, 3]; // Правда ли что a == b ? Нет. false

alert( +"Infinity" ); // Infinity

"Ёжик" > "яблоко"; // Верно ли сравнение? Нет. false

0 || "" || 2 || undefined || true || falsе; // 2 */


                    /* HOMEWORK */


/* const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData); */


                    /* lesson 42 Получение элементов со страницы */


/* const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');
const btns = document.getElementsByTagName('button')[1];

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart');

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('#box');

console.log(oneHeart); */


                    /* lesson 42 Получение элементов со страницы */


/* let num = 500;
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

box.style.beckgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.beckgroundColor = 'red';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.beckgroundColor = 'blue';
}

hearts.forEach(item => {
    item.style.beckgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('I am here!');

div.classList.add('black');

document.body.append(div);
wrapper.append(div);
wrapper.appendChild(div);

wrapper.prepend(div);

hearts[0].befor(div);
hearts[0].after(div);

wrapper.insertBefore(div, hearts[1]);

circles[0].remove();
wrapper.removeChild(hearts[1]);

hearts[0].replaceWith(circles[0]);
wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello, World!</h1>";
div.textContent = 'Hello';

div.insertAdjacentHTML('afterbegin', "<h2>Hello1</h2>");
div.insertAdjacentHTML('afterend', "<h2>Hello2</h2>");
div.insertAdjacentHTML('beforebegin', "<h2>Hello3</h2>");
div.insertAdjacentHTML('beforeend', "<h2>Hello4</h2>"); */